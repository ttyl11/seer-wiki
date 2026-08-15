// 改进版修复脚本：基于本地化模板精确匹配变量位置
// 原理：
//   1. 本地化 description 中 {VarName} 的位置是已知的
//   2. wiki 描述中对应位置的 <span>NUM</span> 就是对应变量的值
//   3. 在 wiki 升级后描述中，找到对应位置的 span，替换数值
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const MOD_ROOT = path.resolve(__dirname, '../../mymod/seer001')
const CODE_DIR = path.join(MOD_ROOT, 'src/Core/Models')
const CARDS_DIR = path.resolve(__dirname, '../docs/cards')

// ============ 解析 .cs 文件 ============
function parseCsFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8')
  const vars = {}
  const canonMatch = content.match(/CanonicalVars\s*=>\s*(?:new\s+DynamicVar\[\]\s*\{|new\s*\[)\s*([\s\S]*?)\}/)
  if (canonMatch) {
    const canonContent = canonMatch[1]
    const varRegex = /new\s+DynamicVar\s*\(\s*"(\w+)"\s*,\s*(-?\d+(?:\.\d+)?)m?\s*\)/g
    let m
    while ((m = varRegex.exec(canonContent)) !== null) {
      vars[m[1]] = parseFloat(m[2])
    }
  }

  const upgradeChanges = {}
  const onUpgradeMatch = content.match(/override\s+void\s+OnUpgrade\(\)\s*\{([\s\S]*?)\n\s*\}/)
  if (onUpgradeMatch) {
    const upgradeContent = onUpgradeMatch[1]
    // BaseValue = / += / -=
    const changeRegex = /DynamicVars\["(\w+)"\]\.BaseValue\s*(\+=|-=|=)\s*(\d+(?:\.\d+)?)m?/g
    let m
    while ((m = changeRegex.exec(upgradeContent)) !== null) {
      const varName = m[1]
      const op = m[2]
      const num = parseFloat(m[3])
      if (op === '+=') upgradeChanges[varName] = (vars[varName] || 0) + num
      else if (op === '-=') upgradeChanges[varName] = (vars[varName] || 0) - num
      else upgradeChanges[varName] = num
    }
    // UpgradeValueBy(num)
    const upByRegex = /(?:\(\(DynamicVar\)|\(\(CardsVar\))?DynamicVars(?:\["(\w+)"\]|\.(\w+))\)?\.UpgradeValueBy\s*\(\s*(-?\d+(?:\.\d+)?)m?\s*\)/g
    while ((m = upByRegex.exec(upgradeContent)) !== null) {
      const varName = m[1] || m[2]
      const num = parseFloat(m[3])
      upgradeChanges[varName] = (vars[varName] || 0) + num
    }
    // base.DynamicVars.X.UpgradeValueBy(num)
    const baseUpByRegex = /base\.DynamicVars\.(\w+)\.UpgradeValueBy\s*\(\s*(-?\d+(?:\.\d+)?)m?\s*\)/g
    while ((m = baseUpByRegex.exec(upgradeContent)) !== null) {
      const varName = m[1]
      const num = parseFloat(m[2])
      upgradeChanges[varName] = (vars[varName] || 0) + num
    }
  }
  return { vars, upgradeChanges }
}

function findCsFile(className) {
  const candidates = [
    path.join(CODE_DIR, 'Cards', `${className}.cs`),
    path.join(CODE_DIR, `${className}.cs`),
  ]
  for (const p of candidates) {
    if (fs.existsSync(p)) return p
  }
  function search(dir) {
    if (!fs.existsSync(dir)) return null
    for (const name of fs.readdirSync(dir)) {
      const full = path.join(dir, name)
      const stat = fs.statSync(full)
      if (stat.isDirectory()) {
        const r = search(full)
        if (r) return r
      } else if (name === `${className}.cs`) {
        return full
      }
    }
    return null
  }
  return search(CODE_DIR)
}

function entryToClassName(entry) {
  const name = entry.replace(/^SEER_/, '')
  const pascal = name.split('_').map(s => s.charAt(0) + s.slice(1).toLowerCase()).join('')
  return 'Seer' + pascal
}

function toSnakeCase(name) {
  return name
    .replace(/^SEER_/, '')
    .replace(/([A-Z0-9]+)([A-Z][a-z])/g, '$1_$2')
    .replace(/([a-z0-9])([A-Z])/g, '$1_$2')
    .toLowerCase()
}

// ============ 核心算法：基于本地化模板定位变量位置 ============
// 本地化 description: "获得{SpeedAmount}点速度。"
// wiki 描述: "获得<span ...>1</span>点[速度](...)。"
//
// 算法：
//   1. 用正则把本地化 description 分割成 token 序列：文本段 + {VarName} 占位符
//   2. 同步遍历 wiki 描述，文本段必须逐字匹配（忽略 HTML 标签）
//   3. 遇到 {VarName} 占位符时，在 wiki 描述中读取下一个 <span>NUM</span>，记录位置和旧值
//   4. 用同样的算法处理 description_upgraded，得到升级后描述中各 span 的位置和新值
//   5. 在 wiki 升后描述中替换对应位置的数值

// 把本地化模板分割成 token
function tokenizeTemplate(template) {
  const tokens = []
  const regex = /\{(\w+)(?::[^}]*)?\}/g
  let lastIdx = 0
  let m
  while ((m = regex.exec(template)) !== null) {
    if (m.index > lastIdx) {
      tokens.push({ type: 'text', value: template.slice(lastIdx, m.index) })
    }
    tokens.push({ type: 'var', name: m[1] })
    lastIdx = regex.lastIndex
  }
  if (lastIdx < template.length) {
    tokens.push({ type: 'text', value: template.slice(lastIdx) })
  }
  return tokens
}

// 在 wiki 文本中，从位置 pos 开始，匹配文本段 text（跳过 HTML 标签和 markdown 链接）
// 返回匹配结束后的新位置，匹配失败返回 -1
function matchText(wiki, pos, text) {
  let textIdx = 0
  let wikiIdx = pos
  while (textIdx < text.length && wikiIdx < wiki.length) {
    // 跳过 HTML 标签
    if (wiki[wikiIdx] === '<') {
      const end = wiki.indexOf('>', wikiIdx)
      if (end === -1) return -1
      wikiIdx = end + 1
      continue
    }
    // 跳过 markdown 链接 [text](url) 中的 url 部分
    // 简化：如果遇到 ](，跳过到 )
    if (wiki[wikiIdx] === ']' && wiki[wikiIdx + 1] === '(') {
      // 先匹配 ]
      if (text[textIdx] === ']') {
        textIdx++
        wikiIdx++
        // 跳过 (url)
        if (wiki[wikiIdx] === '(') {
          const end = wiki.indexOf(')', wikiIdx)
          if (end === -1) return -1
          wikiIdx = end + 1
        }
        continue
      }
    }
    // 普通字符匹配
    if (wiki[wikiIdx] === text[textIdx]) {
      textIdx++
      wikiIdx++
    } else {
      return -1
    }
  }
  return textIdx === text.length ? wikiIdx : -1
}

// 在 wiki 文本中，从位置 pos 开始，读取一个 <span>NUM</span>
// 返回 { endPos, oldValue, fullSpan } 或 null
function readSpan(wiki, pos) {
  // 跳过前导空白
  while (pos < wiki.length && /\s/.test(wiki[pos])) pos++
  // 匹配 <span style="...">NUM</span>
  const spanMatch = wiki.slice(pos).match(/^<span style="color:#[0-9a-f]+;font-weight:600">(-?\d+(?:\.\d+)?)<\/span>/)
  if (spanMatch) {
    return {
      startPos: pos,
      endPos: pos + spanMatch[0].length,
      oldValue: spanMatch[1],
      fullSpan: spanMatch[0]
    }
  }
  return null
}

// 用本地化模板和 wiki 描述，定位每个变量在 wiki 中的位置
function locateVarsInWiki(template, wikiDesc) {
  const tokens = tokenizeTemplate(template)
  const locations = [] // { varName, startPos, endPos, oldValue, fullSpan }
  let pos = 0
  for (const token of tokens) {
    if (token.type === 'text') {
      const newPos = matchText(wikiDesc, pos, token.value)
      if (newPos === -1) {
        // 匹配失败，可能是 [blue] 等颜色标记造成的差异
        // 尝试跳过 [blue] [/blue] [gold] [/gold]
        // 简化处理：把模板中的 [blue] [/blue] 等也当做可跳过的标记
        // 这里先返回已定位的部分
        return locations
      }
      pos = newPos
    } else if (token.type === 'var') {
      const span = readSpan(wikiDesc, pos)
      if (span) {
        locations.push({
          varName: token.name,
          startPos: span.startPos,
          endPos: span.endPos,
          oldValue: span.oldValue,
          fullSpan: span.fullSpan
        })
        pos = span.endPos
      } else {
        // 没找到 span，可能变量在其他形式中
        // 跳过
      }
    }
  }
  return locations
}

// ============ 主流程 ============
const LOC_DIR = path.join(MOD_ROOT, 'seer/localization/zhs')
const cardsJson = JSON.parse(fs.readFileSync(path.join(LOC_DIR, 'cards.json'), 'utf8').replace(/^\uFEFF/, ''))

const entries = {}
for (const [key, value] of Object.entries(cardsJson)) {
  const m = key.match(/^SEER_CARD_(.+?)\.(.+)$/)
  if (!m) continue
  const entry = m[1]
  const field = m[2]
  if (!entries[entry]) entries[entry] = {}
  entries[entry][field] = value
}

let fixedCount = 0
let noChangeCount = 0
let skippedCount = 0

for (const [entry, fields] of Object.entries(entries)) {
  const className = entryToClassName(entry)
  const csFile = findCsFile(className)
  if (!csFile) { skippedCount++; continue }

  const { vars, upgradeChanges } = parseCsFile(csFile)
  if (Object.keys(upgradeChanges).length === 0) { noChangeCount++; continue }

  const snake = toSnakeCase(entry)
  const descLocalized = fields.description || ''
  const descUpLocalized = fields.description_upgraded || ''

  if (!descUpLocalized) continue

  // 计算升级后的变量值
  const upgradedVars = { ...vars }
  for (const [k, v] of Object.entries(upgradeChanges)) {
    upgradedVars[k] = v
  }

  // 查找 wiki 页面
  const subdirs = ['character', 'ancient', 'curse', 'status', 'colorless', 'event', 'token', 'quest']
  let wikiFile = null
  for (const sub of subdirs) {
    const p = path.join(CARDS_DIR, sub, `${snake}.md`)
    if (fs.existsSync(p)) { wikiFile = p; break }
  }
  if (!wikiFile) continue

  let wikiContent = fs.readFileSync(wikiFile, 'utf8')

  // 提取"## 描述"和"## 升级后"章节
  const descSectionMatch = wikiContent.match(/## 描述\n\n([\s\S]*?)(?=\n## |\n$|$)/)
  const upSectionMatch = wikiContent.match(/## 升级后\n\n([\s\S]*?)(?=\n## |\n$|$)/)
  if (!descSectionMatch || !upSectionMatch) continue

  const wikiDesc = descSectionMatch[1]
  const wikiUpDesc = upSectionMatch[1]

  // 用本地化模板定位变量在 wiki 描述中的位置
  const descLocations = locateVarsInWiki(descLocalized, wikiDesc)
  const upLocations = locateVarsInWiki(descUpLocalized, wikiUpDesc)

  // 构建升级后描述：基于 wiki 描述模板，替换有变化的变量值
  // 用 descLocations 获取每个变量的位置和旧值
  // 然后在 wikiUpDesc 中对应位置替换为新值

  // 更直接的方法：用 upLocations 定位升级后描述中的变量位置
  // 然后替换为新值

  if (upLocations.length === 0) {
    // 无法定位，跳过
    continue
  }

  // 从后往前替换（避免位置偏移）
  const replacements = []
  for (const loc of upLocations) {
    const newVal = upgradedVars[loc.varName]
    if (newVal === undefined || String(newVal) === loc.oldValue) continue

    const newSpan = loc.fullSpan.replace(/>-?\d+(?:\.\d+)?<\/span>/, `>${newVal}</span>`)
    replacements.push({
      startPos: loc.startPos,
      endPos: loc.endPos,
      newSpan: newSpan,
      varName: loc.varName,
      oldVal: loc.oldValue,
      newVal: String(newVal)
    })
  }

  if (replacements.length === 0) continue

  // 从后往前替换
  replacements.sort((a, b) => b.startPos - a.startPos)
  let newWikiUpDesc = wikiUpDesc
  for (const r of replacements) {
    newWikiUpDesc = newWikiUpDesc.slice(0, r.startPos) + r.newSpan + newWikiUpDesc.slice(r.endPos)
  }

  // 写入
  if (newWikiUpDesc !== wikiUpDesc) {
    wikiContent = wikiContent.replace(
      `## 升级后\n\n${wikiUpDesc}`,
      `## 升级后\n\n${newWikiUpDesc}`
    )
    fs.writeFileSync(wikiFile, wikiContent, 'utf8')
    fixedCount++
    const changes = replacements.map(r => `${r.varName}: ${r.oldVal}→${r.newVal}`).join(', ')
    console.log(`[fixed] ${snake}: ${changes}`)
  }
}

console.log(`\n完成！修复了 ${fixedCount} 个卡牌`)
console.log(`跳过 ${skippedCount} 个无代码，${noChangeCount} 个无升级变化`)
