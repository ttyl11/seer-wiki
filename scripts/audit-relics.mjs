// 审计所有遗物 wiki 页面与源码/本地化的差异
// 输出：每个遗物的差异点（标题/描述/数值/风味/源码类名）
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const MOD_ROOT = path.resolve(__dirname, '../../mymod/seer001')
const LOC_FILE = path.join(MOD_ROOT, 'seer/localization/zhs/relics.json')
const CODE_DIR = path.join(MOD_ROOT, 'src/Core/Models/Relics')
const WIKI_DIR = path.resolve(__dirname, '../docs/relics')

function readJson(p) {
  let raw = fs.readFileSync(p, 'utf8')
  if (raw.charCodeAt(0) === 0xfeff) raw = raw.slice(1)
  return JSON.parse(raw)
}

function toSnakeCase(name) {
  return name
    .replace(/^SEER_/, '')
    .replace(/([A-Z0-9]+)([A-Z][a-z])/g, '$1_$2')
    .replace(/([a-z0-9])([A-Z])/g, '$1_$2')
    .toLowerCase()
}

function entryToClassName(entry) {
  const name = entry.replace(/^SEER_/, '')
  return 'Seer' + name.split('_').map(s => s.charAt(0) + s.slice(1).toLowerCase()).join('')
}

// 解析本地化
const locData = readJson(LOC_FILE)
const entries = {}
for (const [key, value] of Object.entries(locData)) {
  const m = key.match(/^SEER_RELIC_(.+?)\.(.+)$/)
  if (!m) continue
  const [, entry, field] = m
  if (!entries[entry]) entries[entry] = {}
  entries[entry][field] = value
}

// 解析源码 DynamicVars 和 AssetProfile
function parseCsFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8')
  const result = {
    vars: {},
    rarity: null,
    customRarity: null,
    assetProfile: null,
    poolAnnotation: null,
    isAbstract: false,
  }
  // 抽象类
  if (/abstract\s+class/.test(content)) result.isAbstract = true

  // Rarity
  const rarMatch = content.match(/RelicRarity\s+Rarity\s*=>\s*\(RelicRarity\)(\d+)/)
  if (rarMatch) result.rarity = parseInt(rarMatch[1])

  // CustomRarity
  const crMatch = content.match(/CustomRarity\s*=>\s*(\w+)/)
  if (crMatch) result.customRarity = crMatch[1]

  // DynamicVars - 多种形式
  const dvMatches = content.matchAll(/DynamicVars\["(\w+)"\]\s*=\s*new\s+DynamicVar\s*\{[^}]*BaseValue\s*=\s*([-\d.]+m?)/g)
  for (const m of dvMatches) {
    result.vars[m[1]] = parseFloat(m[2].replace(/m$/, ''))
  }
  const dvMatches2 = content.matchAll(/new\s+DynamicVar\(\s*"(\w+)"\s*,\s*([-\d.]+m?)\)/g)
  for (const m of dvMatches2) {
    if (!result.vars[m[1]]) result.vars[m[1]] = parseFloat(m[2].replace(/m$/, ''))
  }

  // AssetProfile
  const assetMatch = content.match(/AssetProfile[\s\S]*?"(?:res:\/\/)?([^"]+\.png)"/)
  if (assetMatch) result.assetProfile = assetMatch[1]

  // RegisterRelic pool
  const poolMatch = content.match(/RegisterRelic\(typeof\((\w+)\)/)
  if (poolMatch) result.poolAnnotation = poolMatch[1]

  return result
}

// 审计每个遗物
const wikiFiles = fs.readdirSync(WIKI_DIR).filter(f => f.endsWith('.md') && f !== 'all.md' && f !== 'index.md')
const reports = []
const missingWiki = []
const missingCode = []

for (const [entry, fields] of Object.entries(entries).sort((a, b) => a[0].localeCompare(b[0]))) {
  const snake = toSnakeCase(entry)
  const wikiPath = path.join(WIKI_DIR, `${snake}.md`)
  const className = entryToClassName(entry)
  const codePath = path.join(CODE_DIR, `${className}.cs`)

  if (!fs.existsSync(wikiPath)) {
    missingWiki.push({ entry, snake, className })
    continue
  }
  if (!fs.existsSync(codePath)) {
    missingCode.push({ entry, snake, className })
    continue
  }

  const wikiContent = fs.readFileSync(wikiPath, 'utf8')
  const codeData = parseCsFile(codePath)
  const issues = []

  // 1. 标题检查
  const titleMatch = wikiContent.match(/^# (.+)$/m)
  const wikiTitle = titleMatch ? titleMatch[1].trim() : ''
  const locTitle = fields.title || ''
  if (wikiTitle !== locTitle) {
    issues.push(`标题不一致: wiki="${wikiTitle}" vs loc="${locTitle}"`)
  }

  // 2. 风味文字检查
  const locFlavor = fields.flavor || ''
  if (locFlavor) {
    // 提取 wiki 中的风味文字（去掉 span 标签）
    const flavorMatch = wikiContent.match(/## 风味文字[\s\S]*?(?=\n##|\n## 源码|$)/)
    if (!flavorMatch) {
      issues.push(`缺少风味文字章节 (loc: "${locFlavor.slice(0, 30)}...")`)
    } else {
      const wikiFlavorRaw = flavorMatch[0]
        .replace(/<[^>]+>/g, '')
        .replace(/## 风味文字/g, '')
        .trim()
      // 本地化 flavor 可能带颜色标签
      const locFlavorPlain = locFlavor
        .replace(/\[\/?(?:blue|red|gold|purple|green|sine)\]/g, '')
        .trim()
      if (!wikiFlavorRaw.includes(locFlavorPlain) && locFlavorPlain && !wikiFlavorRaw.includes(locFlavorPlain.slice(0, 10))) {
        issues.push(`风味文字可能不一致: wiki="${wikiFlavorRaw.slice(0, 40)}..." vs loc="${locFlavorPlain.slice(0, 40)}..."`)
      }
    }
  }

  // 3. 数值参数检查
  const wikiVarsSection = wikiContent.match(/### 数值参数[\s\S]*?(?=\n##|\n###|$)/)
  if (Object.keys(codeData.vars).length > 0) {
    if (!wikiVarsSection) {
      issues.push(`缺少数值参数章节 (源码有: ${Object.entries(codeData.vars).map(([k,v]) => `${k}=${v}`).join(', ')})`)
    } else {
      for (const [k, v] of Object.entries(codeData.vars)) {
        // 检查 wiki 是否包含该值
        if (!wikiVarsSection[0].includes(String(v))) {
          issues.push(`数值参数 ${k}=${v} 在 wiki 中未找到`)
        }
      }
    }
  }

  // 4. 描述中的变量占位符检查
  const locDesc = fields.description || ''
  const varPlaceholders = locDesc.match(/\{(\w+)\}/g) || []
  for (const ph of varPlaceholders) {
    const varName = ph.replace(/[{}]/g, '')
    // 如果是 {IfUpgraded:...} 跳过
    if (varName.startsWith('IfUpgraded')) continue
    // wiki 描述中应该已经替换了变量
    const descMatch = wikiContent.match(/## 描述[\s\S]*?(?=\n##|$)/)
    if (descMatch && descMatch[0].includes(ph)) {
      issues.push(`描述中变量 ${ph} 未被替换`)
    }
  }

  // 5. 源码类名检查
  const sourceMatch = wikiContent.match(/## 源码[\s\S]*?(?=\n##|$)/)
  if (sourceMatch) {
    if (!sourceMatch[0].includes(className)) {
      issues.push(`源码类名不匹配: wiki 应为 ${className}.cs`)
    }
  } else {
    issues.push(`缺少源码章节`)
  }

  if (issues.length > 0) {
    reports.push({ entry, snake, className, issues })
  }
}

// 输出报告
console.log('=== 遗物审计报告 ===\n')
console.log(`本地化条目: ${Object.keys(entries).length}`)
console.log(`Wiki 文件: ${wikiFiles.length}`)
console.log(`有问题的遗物: ${reports.length}`)
console.log(`缺 Wiki 页面: ${missingWiki.length}`)
console.log(`缺源码文件: ${missingCode.length}`)

if (missingWiki.length > 0) {
  console.log('\n--- 缺 Wiki 页面 ---')
  for (const m of missingWiki) console.log(`  ${m.entry} (${m.snake}.md, 类: ${m.className})`)
}
if (missingCode.length > 0) {
  console.log('\n--- 缺源码文件 ---')
  for (const m of missingCode) console.log(`  ${m.entry} (${m.className}.cs)`)
}

console.log('\n--- 有问题的遗物（按问题数排序）---')
reports.sort((a, b) => b.issues.length - a.issues.length)
for (const r of reports) {
  console.log(`\n[${r.issues.length}个问题] ${r.entry} (${r.snake}.md)`)
  for (const issue of r.issues) console.log(`  - ${issue}`)
}

// 统计常见问题类型
console.log('\n--- 问题类型统计 ---')
const issueTypes = {}
for (const r of reports) {
  for (const issue of r.issues) {
    const type = issue.split(':')[0].split('(')[0].trim()
    issueTypes[type] = (issueTypes[type] || 0) + 1
  }
}
for (const [type, count] of Object.entries(issueTypes).sort((a, b) => b[1] - a[1])) {
  console.log(`  ${type}: ${count}`)
}
