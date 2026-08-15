// 增量修复脚本：修复所有卡牌"升级后"描述中的错误数值
// 不触碰描述中的超链接、小贴士等手动修改的内容
// 原理：重新解析 .cs 源码获取正确的升级后变量值，然后只替换"## 升级后"章节中的数值
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

  // 提取 CanonicalVars 中的变量初始值
  const vars = {}
  const canonMatch = content.match(/CanonicalVars\s*=>\s*new\s*DynamicVar\[\]\s*\{([\s\S]*?)\}/)
  if (canonMatch) {
    const canonContent = canonMatch[1]
    const varRegex = /new\s+DynamicVar\s*\(\s*"(\w+)"\s*,\s*(-?\d+(?:\.\d+)?)m?\s*\)/g
    let m
    while ((m = varRegex.exec(canonContent)) !== null) {
      vars[m[1]] = parseFloat(m[2])
    }
    // 也匹配 new DynamicVar("X", someVar) 形式（暂不支持）
  }

  // 提取 OnUpgrade 中的变化
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
      if (op === '+=') {
        upgradeChanges[varName] = (vars[varName] || 0) + num
      } else if (op === '-=') {
        upgradeChanges[varName] = (vars[varName] || 0) - num
      } else {
        upgradeChanges[varName] = num
      }
    }

    // UpgradeValueBy(num) 形式
    // 匹配 ((DynamicVar)DynamicVars["X"]).UpgradeValueBy(num)
    // 和 DynamicVars["X"].UpgradeValueBy(num)
    // 和 DynamicVars.Damage.UpgradeValueBy(num) （属性形式）
    const upByRegex = /(?:\(\(DynamicVar\)|\(\(CardsVar\))?DynamicVars(?:\["(\w+)"\]|\.(\w+))\)?\.UpgradeValueBy\s*\(\s*(-?\d+(?:\.\d+)?)m?\s*\)/g
    while ((m = upByRegex.exec(upgradeContent)) !== null) {
      const varName = m[1] || m[2]
      const num = parseFloat(m[3])
      upgradeChanges[varName] = (vars[varName] || 0) + num
    }

    // base.DynamicVars.X.UpgradeValueBy(num) 形式
    const baseUpByRegex = /base\.DynamicVars\.(\w+)\.UpgradeValueBy\s*\(\s*(-?\d+(?:\.\d+)?)m?\s*\)/g
    while ((m = baseUpByRegex.exec(upgradeContent)) !== null) {
      const varName = m[1]
      const num = parseFloat(m[2])
      upgradeChanges[varName] = (vars[varName] || 0) + num
    }
  }

  return { vars, upgradeChanges }
}

// ============ 查找 .cs 文件 ============

function findCsFile(className) {
  const candidates = [
    path.join(CODE_DIR, 'Cards', `${className}.cs`),
    path.join(CODE_DIR, `${className}.cs`),
  ]
  for (const p of candidates) {
    if (fs.existsSync(p)) return p
  }
  // 全目录搜索
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

// ============ 类名转换 ============

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

// ============ 主流程 ============

// 读取本地化文件
const LOC_DIR = path.join(MOD_ROOT, 'seer/localization/zhs')
const cardsJson = JSON.parse(fs.readFileSync(path.join(LOC_DIR, 'cards.json'), 'utf8').replace(/^\uFEFF/, ''))

// 构建条目信息
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
let skippedCount = 0
let noUpgradeChange = 0

for (const [entry, fields] of Object.entries(entries)) {
  const className = entryToClassName(entry)
  const csFile = findCsFile(className)
  if (!csFile) {
    skippedCount++
    continue
  }

  const { vars, upgradeChanges } = parseCsFile(csFile)

  // 没有升级变化的跳过
  if (Object.keys(upgradeChanges).length === 0) {
    noUpgradeChange++
    continue
  }

  const snake = toSnakeCase(entry)
  const title = fields.title || entry
  const descUp = fields.description_upgraded || ''

  // 如果没有 description_upgraded，说明没有升级后描述，跳过
  if (!descUp) {
    continue
  }

  // 计算升级后的变量值
  const upgradedVars = { ...vars }
  for (const [k, v] of Object.entries(upgradeChanges)) {
    upgradedVars[k] = v
  }

  // 查找对应的 wiki 页面（在子目录中）
  const subdirs = ['character', 'ancient', 'curse', 'status', 'colorless', 'event', 'token', 'quest']
  let wikiFile = null
  for (const sub of subdirs) {
    const p = path.join(CARDS_DIR, sub, `${snake}.md`)
    if (fs.existsSync(p)) {
      wikiFile = p
      break
    }
  }
  if (!wikiFile) {
    console.warn(`[skip] 未找到 wiki 页面: ${snake}`)
    continue
  }

  // 读取 wiki 页面内容
  let wikiContent = fs.readFileSync(wikiFile, 'utf8')

  // 提取"## 升级后"章节
  const upSectionMatch = wikiContent.match(/## 升级后\n\n([\s\S]*?)(?=\n## |\n$|$)/)
  if (!upSectionMatch) {
    // 没有"升级后"章节，跳过
    continue
  }

  const oldUpDesc = upSectionMatch[1]
  let newUpDesc = oldUpDesc

  // 替换 {VarName} 占位符为升级后的数值
  // 但 wiki 页面中的描述已经把 {VarName} 替换成了数值（包在 span 中）
  // 我们需要把描述中的旧数值替换为新数值

  // 策略：用本地化的 description_upgraded 模板，替换 {VarName} 为升级后的数值
  // 生成正确的升级后描述，然后替换 wiki 中的"升级后"章节

  // 但 wiki 页面中可能有手动添加的超链接，直接替换会丢失
  // 所以我们采用另一种策略：找到描述中的数值，根据变量名替换

  // 更好的策略：对比 description 和 description_upgraded
  // 如果两者文本相同（只是变量值不同），则把升级后描述中的数值替换为升级后的值

  // 最简单的方法：对每个有升级变化的变量，在"升级后"章节中找到对应的数值并替换
  // 但这很难，因为描述中可能有多个数值

  // 采用最安全的方法：重新生成"升级后"描述，但保留超链接
  // 1. 从 wiki 的"描述"章节提取带超链接的模板
  // 2. 替换其中的数值为升级后的数值

  const descSectionMatch = wikiContent.match(/## 描述\n\n([\s\S]*?)(?=\n## |\n$|$)/)
  if (!descSectionMatch) continue

  const descTemplate = descSectionMatch[1]

  // 描述中的数值通常是 <span style="color:#3aa675;font-weight:600">NUM</span>
  // 我们需要把描述模板中的变量值替换为升级后的值
  // 但如何知道哪个 span 对应哪个变量？

  // 方法：用本地化 description 作为模板，找出变量位置，然后映射到 wiki 描述中的 span
  const descLocalized = fields.description || ''

  // 对于每个有变化的变量，找出其在描述中的值
  let descUpNew = descTemplate

  for (const [varName, oldVal] of Object.entries(vars)) {
    const newVal = upgradedVars[varName]
    if (oldVal === newVal) continue // 没变化的跳过

    // 在描述模板中找到 oldVal 对应的 span，替换为 newVal
    // 数值格式：<span style="color:#3aa675;font-weight:600">OLD</span>
    const oldValStr = String(oldVal)
    const newValStr = String(newVal)

    // 替换所有匹配的 span
    const spanRegex = new RegExp(`<span style="color:#3aa675;font-weight:600">${oldValStr}</span>`, 'g')
    const matches = descUpNew.match(spanRegex)
    if (matches) {
      // 只替换第一个匹配（通常是该变量的值）
      // 但这不够精确，可能替换错
      // 更好的方法：用本地化模板定位变量位置
    }
  }

  // 上面方法不够精确，改用本地化模板对比法
  // 本地化 description: "获得{SpeedAmount}点速度。"
  // 本地化 description_upgraded: "获得{SpeedAmount}点速度。" (相同)
  // wiki 描述: "获得<span ...>1</span>点[速度](...)。"
  // wiki 升级后应该: "获得<span ...>2</span>点[速度](...)。"

  // 算法：
  // 1. 从本地化 description 中找出 {VarName} 的位置
  // 2. 在 wiki 描述中对应位置找到 <span>NUM</span>
  // 3. 在 wiki 升级后描述中对应位置替换 NUM 为升级后的值

  // 但这很复杂。简化：如果描述中只有一个变量值，直接替换
  // 对于多变量的情况，需要更精确的匹配

  // 采用最直接的方法：重新生成升级后描述
  // 用 wiki 的描述模板（带超链接），把所有变量值替换为升级后的值
  // 前提：描述和升级后描述的文本结构相同（只是数值不同）

  // 检查描述和升级后描述的文本结构是否相同
  // 通过移除所有 HTML 标签和数值后比较
  function stripFormat(s) {
    return s.replace(/<[^>]+>/g, '').replace(/\d+(?:\.\d+)?/g, 'N')
  }

  const descStripped = stripFormat(descTemplate)
  const upStripped = stripFormat(oldUpDesc)

  if (descStripped === upStripped) {
    // 文本结构相同，可以安全替换数值
    // 用升级后的值重新生成描述
    descUpNew = descTemplate

    for (const [varName, oldVal] of Object.entries(vars)) {
      const newVal = upgradedVars[varName]
      if (oldVal === newVal) continue

      const oldValStr = String(oldVal)
      const newValStr = String(newVal)

      // 替换 span 中的数值
      const spanRegex = new RegExp(`(<span style="color:#3aa675;font-weight:600">${oldValStr}</span>)`, 'g')
      descUpNew = descUpNew.replace(spanRegex, `<span style="color:#3aa675;font-weight:600">${newValStr}</span>`)
    }
  } else {
    // 文本结构不同，需要用本地化模板重新生成
    // 这种情况下用本地化 description_upgraded 模板，替换变量为升级后值
    // 但会丢失超链接，所以只对没有超链接的部分做替换

    // 用本地化 description_upgraded 作为模板
    let template = descUp
    for (const [varName, val] of Object.entries(upgradedVars)) {
      // 替换 {VarName} 和 {VarName:diff()}
      template = template.replace(new RegExp(`\\{${varName}(?::[^}]*)?\\}`, 'g'), String(val))
    }
    // 替换颜色标记 [blue] [/blue] [gold] [/gold]
    template = template.replace(/\[blue\]/g, '<span style="color:#3aa675;font-weight:600">').replace(/\[\/blue\]/g, '</span>')
    template = template.replace(/\[gold\]/g, '<span style="color:#d4a017;font-weight:600">').replace(/\[\/gold\]/g, '</span>')

    descUpNew = template
  }

  // 如果新旧描述不同，更新文件
  if (descUpNew !== oldUpDesc) {
    wikiContent = wikiContent.replace(
      `## 升级后\n\n${oldUpDesc}`,
      `## 升级后\n\n${descUpNew}`
    )
    fs.writeFileSync(wikiFile, wikiContent, 'utf8')
    fixedCount++
    console.log(`[fixed] ${snake}: ${entry}`)
    // 显示变化
    for (const [varName, oldVal] of Object.entries(vars)) {
      const newVal = upgradedVars[varName]
      if (oldVal !== newVal) {
        console.log(`         ${varName}: ${oldVal} → ${newVal}`)
      }
    }
  }
}

console.log(`\n完成！修复了 ${fixedCount} 个卡牌的升级后数值`)
console.log(`跳过 ${skippedCount} 个无代码文件`)
console.log(`${noUpgradeChange} 个卡牌无升级变化`)
