// 深度检查遗物 wiki 页面中未链接的专有术语
// 1. 解析本地化描述，识别能力名/卡牌名/机制名
// 2. 检查 wiki 描述中这些术语是否有超链接
// 3. 输出每个遗物页面缺失的链接
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const RELICS_DIR = path.resolve(__dirname, '../docs/relics')
const MOD_ROOT = path.resolve(__dirname, '../../mymod/seer001')
const LOC_DIR = path.join(MOD_ROOT, 'seer/localization/zhs')

function readJson(p) {
  let raw = fs.readFileSync(p, 'utf8')
  if (raw.charCodeAt(0) === 0xfeff) raw = raw.slice(1)
  return JSON.parse(raw)
}

function entryToSnake(entry) {
  return entry
    .replace(/^SEER_/, '')
    .replace(/([A-Z0-9]+)([A-Z][a-z])/g, '$1_$2')
    .replace(/([a-z0-9])([A-Z])/g, '$1_$2')
    .toLowerCase()
}

// 加载本地化
const relicsLoc = readJson(path.join(LOC_DIR, 'relics.json'))
const powersLoc = readJson(path.join(LOC_DIR, 'powers.json'))
const cardsLoc = readJson(path.join(LOC_DIR, 'cards.json'))
const keywordsLoc = readJson(path.join(LOC_DIR, 'card_keywords.json'))

// 构建 中文能力名 → wiki文件名 映射
const powerNameToWiki = {}
for (const key of Object.keys(powersLoc)) {
  const m = key.match(/^SEER_POWER_(.+?)\.title$/)
  if (m) {
    const title = powersLoc[key]
    const snake = entryToSnake(m[1])
    powerNameToWiki[title] = snake
  }
}

// 构建 中文卡牌名 → wiki文件名+分类 映射
const cardNameToWiki = {}
for (const key of Object.keys(cardsLoc)) {
  const m = key.match(/^SEER_CARD_(.+?)\.title$/)
  if (m) {
    const title = cardsLoc[key]
    const snake = entryToSnake(m[1])
    cardNameToWiki[title] = snake
  }
}

// 构建中文关键词名 → wiki文件名 映射
const keywordNameToWiki = {}
for (const key of Object.keys(keywordsLoc)) {
  const m = key.match(/^SEER_KEYWORD_(.+?)\.title$/)
  if (m) {
    const title = keywordsLoc[key]
    const snake = entryToSnake(m[1])
    keywordNameToWiki[title] = snake
  }
}

// 机制名 → wiki文件名（手动维护，基于 mechanics 目录）
const mechanicNameToWiki = {
  '消耗': 'exhaust',
  '保留': 'retain',
  '虚无': 'ethereal',
  '固有': 'innate',
  '预见': 'scry',
  '抽牌': 'draw_pile',
  '弃牌': 'discard_pile',
  '牌堆': 'draw_pile',
  '手牌': 'hand',
  '消耗牌堆': 'exhaust_pile',
  '格挡': 'block',
  '能量': 'energy',
  'PP': 'pp-system',
  '附魔': 'enchantment',
  '充能球': 'orb',
  '激发': 'evoke',
  '引导': 'channeling',
  '复活': 'revive',
  '锻造': 'forge',
  '燃料': 'fuel',
  '即死': 'fatal',
  '处决': 'fatal',
  '回响': 'echo',
  '邪恶': 'evil',
  '毁灭': 'destruction',
  '炼狱': 'purgatory',
  '薇': 'vigil',
  '戏法': 'trick',
  '薇尔诗': 'vier_poem',
  '空元之诗': 'void_poem',
  '碎心': 'shattered_heart',
  '悼': 'mourning',
  '寂灭': 'nirvana',
  '化墟': 'ruination',
  '陨': 'fallen',
  '芜生': 'void_birth',
  '缢形': 'hanged_form',
  '异变': 'aberration',
  '饮血': 'vampiric',
  '永恒': 'eternal',
  '缚': 'bound',
  '召': 'summon',
  '召唤': 'summon',
  '重放': 'replay',
  '奇巧': 'sly',
  '辉星': 'star',
  '击晕': 'stun',
  '不可打出': 'unplayable',
  '真实之神': 'true_god',
  '真神牌堆': 'true_god_pile',
  '异常状态': 'abnormal-status',
  '全属性': 'all_attributes',
  '元素克制': 'element-affinity',
  '意图': 'intent',
  '先制': 'first_strike',
}

// 收集所有遗物 entry
const entries = new Set()
for (const key of Object.keys(relicsLoc)) {
  const m = key.match(/^SEER_RELIC_(.+?)\.title$/)
  if (m) entries.add(m[1])
}

console.log(`检查 ${entries.size} 个遗物的专有术语链接情况\n`)

// 对每个遗物，检查描述中的专有术语是否在 wiki 中有链接
const issues = []
for (const entry of entries) {
  const snake = entryToSnake(entry)
  const wikiPath = path.join(RELICS_DIR, snake + '.md')
  if (!fs.existsSync(wikiPath)) continue

  const wikiContent = fs.readFileSync(wikiPath, 'utf8')
  const locDesc = relicsLoc[`SEER_RELIC_${entry}.description`] || ''

  // 从本地化描述中提取纯文本（去除 [gold]xxx[/gold] 等标记）
  // [gold]能力牌[/gold] → 能力牌
  const plainDesc = locDesc.replace(/\[(?:\/)?(?:gold|blue|purple|red)\]/g, '')

  // 检查能力名
  const missingPowerLinks = []
  for (const [powerName, wiki] of Object.entries(powerNameToWiki)) {
    if (plainDesc.includes(powerName)) {
      // 检查 wiki 中是否有对这个能力的链接
      const linkPattern = `[${powerName}](/powers/${wiki}`
      if (!wikiContent.includes(linkPattern)) {
        missingPowerLinks.push({ name: powerName, wiki })
      }
    }
  }

  // 检查卡牌名
  const missingCardLinks = []
  for (const [cardName, wiki] of Object.entries(cardNameToWiki)) {
    if (plainDesc.includes(cardName)) {
      const linkPattern = `[${cardName}](/cards/`
      if (!wikiContent.includes(linkPattern)) {
        missingCardLinks.push({ name: cardName, wiki })
      }
    }
  }

  // 检查关键词名
  const missingKeywordLinks = []
  for (const [kwName, wiki] of Object.entries(keywordNameToWiki)) {
    if (plainDesc.includes(kwName)) {
      const linkPattern = `[${kwName}](/mechanics/${wiki}`
      if (!wikiContent.includes(linkPattern)) {
        missingKeywordLinks.push({ name: kwName, wiki })
      }
    }
  }

  // 检查机制名
  const missingMechanicLinks = []
  for (const [mechName, wiki] of Object.entries(mechanicNameToWiki)) {
    if (plainDesc.includes(mechName)) {
      const linkPattern = `[${mechName}](/mechanics/${wiki}`
      if (!wikiContent.includes(linkPattern)) {
        missingMechanicLinks.push({ name: mechName, wiki })
      }
    }
  }

  const allMissing = [
    ...missingPowerLinks.map(x => ({ type: '能力', ...x })),
    ...missingCardLinks.map(x => ({ type: '卡牌', ...x })),
    ...missingKeywordLinks.map(x => ({ type: '关键词', ...x })),
    ...missingMechanicLinks.map(x => ({ type: '机制', ...x })),
  ]

  if (allMissing.length > 0) {
    issues.push({ entry, snake, title: relicsLoc[`SEER_RELIC_${entry}.title`], missing: allMissing, desc: plainDesc })
  }
}

// 输出结果
console.log(`=== ${issues.length} 个遗物页面存在未链接的专有术语 ===\n`)

// 按缺失数量降序
issues.sort((a, b) => b.missing.length - a.missing.length)

for (const issue of issues) {
  console.log(`\n[${issue.title}] ${issue.snake}.md (缺失 ${issue.missing.length} 个)`)
  console.log(`  描述: ${issue.desc.slice(0, 100)}...`)
  for (const m of issue.missing) {
    console.log(`  - ${m.type}: "${m.name}" → /${m.type === '能力' ? 'powers' : m.type === '卡牌' ? 'cards' : 'mechanics'}/${m.wiki}.md`)
  }
}

// 统计
console.log(`\n=== 统计 ===`)
console.log(`有未链接术语的遗物页面: ${issues.length}`)
console.log(`总缺失链接数: ${issues.reduce((s, i) => s + i.missing.length, 0)}`)
const byType = { 能力: 0, 卡牌: 0, 关键词: 0, 机制: 0 }
for (const i of issues) for (const m of i.missing) byType[m.type]++
console.log(`  能力: ${byType.能力}`)
console.log(`  卡牌: ${byType.卡牌}`)
console.log(`  关键词: ${byType.关键词}`)
console.log(`  机制: ${byType.机制}`)
