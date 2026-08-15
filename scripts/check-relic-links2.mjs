// 精准检测遗物 wiki 中缺失的专有术语链接
// 排除单字能力名误报（如"生命""战斗""火"等作为普通名词使用时）
// 聚焦：卡牌名、机制名、明确指向能力的多字术语
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const RELICS_DIR = path.resolve(__dirname, '../docs/relics')
const CARDS_DIR = path.resolve(__dirname, '../docs/cards')
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

// 判断卡牌 wiki 页面是否存在（搜索所有子目录）
function cardWikiExists(snake) {
  const subdirs = ['ancient', 'character', 'colorless', 'curse', 'event', 'quest', 'status', 'token']
  for (const sub of subdirs) {
    const p = path.join(CARDS_DIR, sub, snake + '.md')
    if (fs.existsSync(p)) return true
  }
  // 也检查 cards 根目录
  const rootP = path.join(CARDS_DIR, snake + '.md')
  if (fs.existsSync(rootP)) return true
  return false
}

const relicsLoc = readJson(path.join(LOC_DIR, 'relics.json'))
const powersLoc = readJson(path.join(LOC_DIR, 'powers.json'))
const cardsLoc = readJson(path.join(LOC_DIR, 'cards.json'))

// 卡牌名 → snake（仅长度 >= 2 的卡牌名，排除单字误报）
const cardNameToSnake = {}
for (const key of Object.keys(cardsLoc)) {
  const m = key.match(/^SEER_CARD_(.+?)\.title$/)
  if (m) {
    const title = cardsLoc[key]
    if (title.length >= 2) {  // 排除单字
      cardNameToSnake[title] = entryToSnake(m[1])
    }
  }
}

// 能力名 → snake（仅长度 >= 2 的能力名，且排除常见普通名词）
const COMMON_NOUNS = new Set([
  '生命', '战斗', '能量', '防御', '速度', '命中', '力量', '格挡',  // 这些是普通名词，不是能力名
  '普通', '罕见', '稀有', '史诗', '远古',  // 稀有度名
  '免疫', '增伤', '减伤', '暴击', '先制',  // 这些是机制，应链接到 mechanics
])

const powerNameToSnake = {}
for (const key of Object.keys(powersLoc)) {
  const m = key.match(/^SEER_POWER_(.+?)\.title$/)
  if (m) {
    const title = powersLoc[key]
    if (title.length >= 2 && !COMMON_NOUNS.has(title)) {
      powerNameToSnake[title] = entryToSnake(m[1])
    }
  }
}

// 机制名 → wiki 文件名
const mechanicNameToWiki = {
  '消耗': 'exhaust',
  '保留': 'retain',
  '虚无': 'ethereal',
  '固有': 'innate',
  '预见': 'scry',
  '格挡': 'block',
  '能量': 'energy',
  '附魔': 'enchantment',
  '充能球': 'orb',
  '激发': 'evoke',
  '引导': 'channeling',
  '复活': 'revive',
  '锻造': 'forge',
  '燃料': 'fuel',
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
  '重放': 'replay',
  '奇巧': 'sly',
  '辉星': 'star',
  '击晕': 'stun',
  '不可打出': 'unplayable',
  '异常状态': 'abnormal-status',
  '全属性': 'all_attributes',
  '意图': 'intent',
  '先制': 'first_strike',
  'PP': 'pp-system',
  '手牌': 'hand',
  '牌堆': 'draw_pile',
  '弃牌': 'discard_pile',
  '消耗牌堆': 'exhaust_pile',
  '即死': 'fatal',
  '处决': 'fatal',
  '真实之神': 'true_god',
}

// 收集所有遗物 entry
const entries = new Set()
for (const key of Object.keys(relicsLoc)) {
  const m = key.match(/^SEER_RELIC_(.+?)\.title$/)
  if (m) entries.add(m[1])
}

const issues = []
for (const entry of entries) {
  const snake = entryToSnake(entry)
  const wikiPath = path.join(RELICS_DIR, snake + '.md')
  if (!fs.existsSync(wikiPath)) continue

  const wikiContent = fs.readFileSync(wikiPath, 'utf8')
  const locDesc = relicsLoc[`SEER_RELIC_${entry}.description`] || ''
  const plainDesc = locDesc.replace(/\[(?:\/)?(?:gold|blue|purple|red)\]/g, '')

  const missing = []

  // 检查卡牌名（长度 >= 2）
  for (const [cardName, cardSnake] of Object.entries(cardNameToSnake)) {
    if (plainDesc.includes(cardName)) {
      // 检查是否有卡牌链接
      const hasLink = wikiContent.includes(`[${cardName}](/cards/`)
      if (!hasLink) {
        const wikiExists = cardWikiExists(cardSnake)
        missing.push({ type: '卡牌', name: cardName, wiki: cardSnake, exists: wikiExists })
      }
    }
  }

  // 检查能力名（长度 >= 2，排除常见普通名词）
  for (const [powerName, powerSnake] of Object.entries(powerNameToSnake)) {
    if (plainDesc.includes(powerName)) {
      const hasLink = wikiContent.includes(`[${powerName}](/powers/${powerSnake}`)
      if (!hasLink) {
        missing.push({ type: '能力', name: powerName, wiki: powerSnake, exists: true })
      }
    }
  }

  // 检查机制名
  for (const [mechName, mechWiki] of Object.entries(mechanicNameToWiki)) {
    if (plainDesc.includes(mechName)) {
      const hasLink = wikiContent.includes(`[${mechName}](/mechanics/${mechWiki}`)
      if (!hasLink) {
        missing.push({ type: '机制', name: mechName, wiki: mechWiki, exists: true })
      }
    }
  }

  if (missing.length > 0) {
    issues.push({
      entry,
      snake,
      title: relicsLoc[`SEER_RELIC_${entry}.title`],
      missing,
      desc: plainDesc,
    })
  }
}

// 输出
issues.sort((a, b) => b.missing.length - a.missing.length)

console.log(`=== ${issues.length} 个遗物页面存在未链接的专有术语（精准检测）===\n`)

// 分类统计
const cardMissing = []
const powerMissing = []
const mechMissing = []
for (const issue of issues) {
  for (const m of issue.missing) {
    if (m.type === '卡牌') cardMissing.push({ issue, ...m })
    else if (m.type === '能力') powerMissing.push({ issue, ...m })
    else mechMissing.push({ issue, ...m })
  }
}

console.log(`卡牌名缺失链接: ${cardMissing.length} 个`)
console.log(`  其中 wiki 页面存在: ${cardMissing.filter(c => c.exists).length} 个`)
console.log(`  其中 wiki 页面不存在: ${cardMissing.filter(c => !c.exists).length} 个`)
console.log(`能力名缺失链接: ${powerMissing.length} 个`)
console.log(`机制名缺失链接: ${mechMissing.length} 个`)

// 输出卡牌名缺失（wiki 存在的优先）
console.log(`\n=== 卡牌名缺失链接（wiki 页面存在，应补链接）===`)
for (const c of cardMissing.filter(c => c.exists)) {
  console.log(`  [${c.issue.title}] ${c.issue.snake}.md: "${c.name}" → /cards/${c.wiki}.md`)
}

console.log(`\n=== 卡牌名缺失链接（wiki 页面不存在，需先建卡牌页）===`)
for (const c of cardMissing.filter(c => !c.exists)) {
  console.log(`  [${c.issue.title}] ${c.issue.snake}.md: "${c.name}" → /cards/${c.wiki}.md`)
}

console.log(`\n=== 能力名缺失链接 ===`)
for (const p of powerMissing) {
  console.log(`  [${p.issue.title}] ${p.issue.snake}.md: "${p.name}" → /powers/${p.wiki}.md`)
}

console.log(`\n=== 机制名缺失链接 ===`)
for (const m of mechMissing) {
  console.log(`  [${m.issue.title}] ${m.issue.snake}.md: "${m.name}" → /mechanics/${m.wiki}.md`)
}
