// 检查所有稀有度写"远古/古代"的遗物，对照源码确认实际稀有度
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const MOD_ROOT = path.resolve(__dirname, '../../mymod/seer001')
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

// 稀有度映射
const RARITY_MAP = {
  0: 'None',
  1: 'Starter(初始)',
  2: 'Common(普通)',
  3: 'Uncommon(罕见)',
  4: 'Rare(稀有)',
  5: 'Shop(商店)',
  6: 'Event(事件)',
  7: 'Ancient(先古)',
}

// 读取本地化
const locData = readJson(path.join(MOD_ROOT, 'seer/localization/zhs/relics.json'))
const entries = {}
for (const [key] of Object.entries(locData)) {
  const m = key.match(/^SEER_RELIC_(.+?)\.(.+)$/)
  if (!m) continue
  const [, entry] = m
  if (!entries[entry]) entries[entry] = true
}

const results = []
for (const entry of Object.keys(entries).sort()) {
  const snake = toSnakeCase(entry)
  const wikiPath = path.join(WIKI_DIR, `${snake}.md`)
  if (!fs.existsSync(wikiPath)) continue
  const wikiContent = fs.readFileSync(wikiPath, 'utf8')

  // 只看写"远古"或"古代"的
  if (!/稀有度.*[:：].*(远古|古代)/.test(wikiContent)) continue

  const className = entryToClassName(entry)
  const codePath = path.join(CODE_DIR, `${className}.cs`)
  if (!fs.existsSync(codePath)) {
    results.push({ entry, snake, issue: '源码缺失' })
    continue
  }
  const code = fs.readFileSync(codePath, 'utf8')

  // 解析 Rarity
  let rarityNum = null
  const rarMatch = code.match(/RelicRarity\s+Rarity\s*=>\s*\(RelicRarity\)(\d+)/)
  if (rarMatch) rarityNum = parseInt(rarMatch[1])

  // 解析 CustomRarity
  let customRarity = null
  const crMatch = code.match(/CustomRarity\s*=>\s*(\w+)/)
  if (crMatch) customRarity = crMatch[1]

  // 解析基类（判断塔罗/非塔罗/先古塔罗）
  let baseClass = null
  const baseMatch = code.match(/:\s*(Seer\w+RelicBase)/)
  if (baseMatch) baseClass = baseMatch[1]

  const rarityName = RARITY_MAP[rarityNum] || `未知(${rarityNum})`
  results.push({
    entry, snake, className, rarityNum, rarityName, customRarity, baseClass,
  })
}

console.log('=== 稀有度误用检查（wiki 写"远古/古代"的遗物）===\n')
console.log(`共 ${results.length} 个遗物\n`)

for (const r of results) {
  if (r.issue) {
    console.log(`[ERROR] ${r.entry} (${r.snake}.md): ${r.issue}`)
    continue
  }
  const custom = r.customRarity ? `, CustomRarity=${r.customRarity}` : ''
  console.log(`${r.entry} (${r.snake}.md)`)
  console.log(`  源码: Rarity=${r.rarityName}${custom}, 基类=${r.baseClass}`)
  // 推断正确稀有度
  let correctRarity = ''
  if (r.customRarity === 'SeerRarities.Epic') correctRarity = '史诗（自定义稀有度）'
  else if (r.customRarity === 'SeerRarities.Legendary') correctRarity = '传奇（自定义稀有度）'
  else if (r.rarityNum === 7) correctRarity = '先古'
  else if (r.rarityNum) correctRarity = r.rarityName.split('(')[1].replace(')', '')
  console.log(`  应改为: ${correctRarity}`)
}
