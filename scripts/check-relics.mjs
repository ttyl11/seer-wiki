// 批量检查遗物 wiki 页面完整度
// 统计每个页面的章节、行数、链接、专有术语覆盖度
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const RELICS_DIR = path.resolve(__dirname, '../docs/relics')
const MOD_ROOT = path.resolve(__dirname, '../../mymod/seer001')
const LOC_FILE = path.join(MOD_ROOT, 'seer/localization/zhs/relics.json')

function readJson(p) {
  let raw = fs.readFileSync(p, 'utf8')
  if (raw.charCodeAt(0) === 0xfeff) raw = raw.slice(1)
  return JSON.parse(raw)
}

// entry → snake_case 文件名
function entryToSnake(entry) {
  return entry
    .replace(/^SEER_/, '')
    .replace(/([A-Z0-9]+)([A-Z][a-z])/g, '$1_$2')
    .replace(/([a-z0-9])([A-Z])/g, '$1_$2')
    .toLowerCase()
}

const loc = readJson(LOC_FILE)

// 收集所有遗物 entry
const entries = new Set()
for (const key of Object.keys(loc)) {
  const m = key.match(/^SEER_RELIC_(.+?)\.title$/)
  if (m) entries.add(m[1])
}

console.log(`本地化中共 ${entries.size} 个遗物 entry\n`)

// 读取所有遗物 wiki 文件
const wikiFiles = fs.readdirSync(RELICS_DIR)
  .filter(f => f.endsWith('.md') && f !== 'all.md' && f !== 'index.md')
  .map(f => f.replace(/\.md$/, ''))

console.log(`wiki 中共 ${wikiFiles.length} 个遗物页面\n`)

// 检查缺失的页面
const wikiSet = new Set(wikiFiles)
const missing = []
for (const entry of entries) {
  const snake = entryToSnake(entry)
  if (!wikiSet.has(snake)) {
    missing.push({ entry, snake, title: loc[`SEER_RELIC_${entry}.title`] })
  }
}

if (missing.length > 0) {
  console.log('=== 缺失的遗物页面 ===')
  for (const m of missing) {
    console.log(`  ${m.entry} → ${m.snake} (${m.title})`)
  }
  console.log()
}

// 检查每个页面的完整度
const results = []
for (const file of wikiFiles) {
  const filePath = path.join(RELICS_DIR, file + '.md')
  const content = fs.readFileSync(filePath, 'utf8')
  const lines = content.split('\n')
  const lineCount = lines.length

  const hasBasicInfo = content.includes('## 基本信息')
  const hasParams = content.includes('### 数值参数')
  const hasDesc = content.includes('## 描述')
  const hasFlavor = content.includes('## 风味文字')
  const hasTips = content.includes('## 小贴士')
  const hasSource = content.includes('## 源码')
  const hasWarning = content.includes('⚠️')

  // 统计专有术语链接（[xxx](/powers/...) 或 [xxx](/mechanics/...)）
  const powerLinks = (content.match(/\]\(\/powers\//g) || []).length
  const mechanicLinks = (content.match(/\]\(\/mechanics\//g) || []).length

  // 找出描述中可能的专有术语但未链接的（简化检测：中文括号内的能力名）
  // 这里只统计，不深度分析

  // 检查描述是否包含本地化原文的关键词
  // 通过 entry 反查本地化
  let locDesc = ''
  let locTitle = ''
  // 反查 entry：file → entry
  // file 是 snake_case，需要转回 PascalCase
  // 简化：遍历 entries 找匹配
  let matchedEntry = null
  for (const entry of entries) {
    if (entryToSnake(entry) === file) {
      matchedEntry = entry
      break
    }
  }
  if (matchedEntry) {
    locTitle = loc[`SEER_RELIC_${matchedEntry}.title`] || ''
    locDesc = loc[`SEER_RELIC_${matchedEntry}.description`] || ''
  }

  // 计算完整度评分
  let score = 0
  if (hasBasicInfo) score++
  if (hasParams) score++
  if (hasDesc) score++
  if (hasFlavor) score++
  if (hasTips) score++
  if (hasSource) score++
  if (powerLinks > 0 || mechanicLinks > 0) score++

  results.push({
    file,
    lineCount,
    score,
    hasBasicInfo,
    hasParams,
    hasDesc,
    hasFlavor,
    hasTips,
    hasSource,
    hasWarning,
    powerLinks,
    mechanicLinks,
    matchedEntry,
    locTitle,
    locDesc,
  })
}

// 按完整度评分升序排序（分数低的在前）
results.sort((a, b) => a.score - b.score || a.lineCount - b.lineCount)

console.log('=== 完整度最低的 30 个遗物页面 ===')
for (const r of results.slice(0, 30)) {
  const missing = []
  if (!r.hasBasicInfo) missing.push('基本信息')
  if (!r.hasParams) missing.push('数值参数')
  if (!r.hasDesc) missing.push('描述')
  if (!r.hasFlavor) missing.push('风味文字')
  if (!r.hasTips) missing.push('小贴士')
  if (!r.hasSource) missing.push('源码')
  console.log(`  ${r.file}.md (${r.lineCount}行, 评分${r.score}/7) 缺: ${missing.join(', ') || '无'} | 能力链接:${r.powerLinks} 机制链接:${r.mechanicLinks}`)
}
console.log()

// 统计整体情况
const stats = {
  total: results.length,
  stub: results.filter(r => r.lineCount < 20).length,
  noBasicInfo: results.filter(r => !r.hasBasicInfo).length,
  noParams: results.filter(r => !r.hasParams).length,
  noDesc: results.filter(r => !r.hasDesc).length,
  noFlavor: results.filter(r => !r.hasFlavor).length,
  noTips: results.filter(r => !r.hasTips).length,
  noSource: results.filter(r => !r.hasSource).length,
  noPowerLink: results.filter(r => r.powerLinks === 0).length,
  noMechanicLink: results.filter(r => r.mechanicLinks === 0).length,
  hasWarning: results.filter(r => r.hasWarning).length,
  unmatched: results.filter(r => !r.matchedEntry).length,
}

console.log('=== 整体统计 ===')
console.log(`总数: ${stats.total}`)
console.log(`stub (行数<20): ${stats.stub}`)
console.log(`缺基本信息: ${stats.noBasicInfo}`)
console.log(`缺数值参数: ${stats.noParams}`)
console.log(`缺描述: ${stats.noDesc}`)
console.log(`缺风味文字: ${stats.noFlavor}`)
console.log(`缺小贴士: ${stats.noTips}`)
console.log(`缺源码: ${stats.noSource}`)
console.log(`无能力链接: ${stats.noPowerLink}`)
console.log(`无机制链接: ${stats.noMechanicLink}`)
console.log(`有⚠️标注: ${stats.hasWarning}`)
console.log(`未匹配本地化: ${stats.unmatched}`)

// 列出所有未匹配本地化的页面
const unmatched = results.filter(r => !r.matchedEntry)
if (unmatched.length > 0) {
  console.log('\n=== 未匹配本地化的页面（可能是聚合页或命名不一致）===')
  for (const r of unmatched) {
    console.log(`  ${r.file}.md`)
  }
}

// 列出所有 stub 页面
const stubs = results.filter(r => r.lineCount < 20)
if (stubs.length > 0) {
  console.log('\n=== stub 页面（行数<20）===')
  for (const r of stubs) {
    console.log(`  ${r.file}.md (${r.lineCount}行)`)
  }
}

// 列出缺小贴士的页面（小贴士通常包含源码机制说明）
const noTips = results.filter(r => !r.hasTips && r.lineCount >= 20)
if (noTips.length > 0) {
  console.log('\n=== 缺小贴士的页面（>=20行但无小贴士）===')
  for (const r of noTips.slice(0, 50)) {
    console.log(`  ${r.file}.md (${r.lineCount}行)`)
  }
  if (noTips.length > 50) console.log(`  ... 还有 ${noTips.length - 50} 个`)
}
