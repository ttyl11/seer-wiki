// 补充生成缺失的 wiki 页面（能力/遗物）
// 核心原则：
//  1. 只生成不存在的 .md 文件，绝不覆盖已手动编辑的页面
//  2. 严格遵循 gen-content.mjs 的模板与本地化优先原则
//  3. 中文名、描述、数值均来自本地化 JSON + 源码解析
//  4. 不删除任何已有文件
import fs from 'node:fs'
import path from 'node:path'
import zlib from 'node:zlib'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const MOD_ROOT = path.resolve(__dirname, '../../mymod/seer001')
const LOC_DIR = path.join(MOD_ROOT, 'seer/localization/zhs')
const CODE_DIR = path.join(MOD_ROOT, 'src/Core/Models')
const IMG_ROOT = path.join(MOD_ROOT, 'seer/images')
const DOCS_DIR = path.resolve(__dirname, '../docs')
const PUBLIC_DIR = path.resolve(__dirname, '../docs/public')

// ============ 工具函数（与 gen-content.mjs 保持一致） ============

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

function entryToClassName(entry, category) {
  const name = entry.replace(/^SEER_/, '')
  const pascal = name.split('_').map(s => s.charAt(0) + s.slice(1).toLowerCase()).join('')
  if (category === 'CHARACTER') return pascal
  return 'Seer' + pascal
}

function parseKey(key) {
  const m = key.match(/^SEER_(CARD|RELIC|POWER|ORB|MONSTER|CHARACTER)_(.+?)\.(.+)$/)
  if (!m) return null
  const [, category, entry, field] = m
  return { category, entry, field }
}

// ============ 变量名中文映射（精简版，完整版见 gen-content.mjs） ============

const VAR_CN_MAP = {
  Damage: '伤害', Block: '格挡', Heal: '回复', Gold: '金币', Pp: 'PP', MaxPp: '最大PP',
  EnergyCost: '能量消耗', Cards: '卡牌数', Amount: '层数', Turns: '回合数', Chance: '概率',
  Percent: '百分比', Threshold: '阈值', Count: '数量', Stacks: '层数', Stack: '层数',
  FirstStrike: '先制', BurnTurns: '烧伤回合', ReflectTurns: '反弹回合',
  SubjugationTurns: '臣服回合', FuryTurns: '狂暴回合', VigorPower: '活力',
  DexterityPower: '敏捷', VulnerablePower: '易伤', PotionSlots: '药水栏位',
  Swift: '迅捷', DivineEnergy: '神圣能量', FixedDamage: '固定伤害',
  BlockAmount: '格挡数值', StrengthAmount: '力量数值', DefenseAmount: '防御数值',
  CurseTurns: '诅咒回合', DebuffImmuneTurns: '异常免疫回合', SleepChance: '睡眠概率',
  ImmunityTurns: '免疫回合', ExposeTurns: '暴露回合', BlindingTurns: '致盲回合',
  ParasiteTurns: '寄生回合', PoisonTurns: '中毒回合', FrostbiteTurns: '冻伤回合',
  FearTurns: '害怕回合', ConstrictTurns: '束缚回合', ShrinkTurns: '缩小回合',
  FatigueTurns: '疲劳回合', DoomTurns: '末日回合',
}

const WORD_CN = {
  Damage: '伤害', Block: '格挡', Heal: '回复', Gold: '金币', Card: '卡牌',
  Cards: '卡牌', Turn: '回合', Turns: '回合', Round: '轮次', Count: '数量',
  Amount: '数值', Stack: '层数', Stacks: '层数', Power: '能力', Orb: '充能球',
  Monster: '怪物', Enemy: '敌人', Enemies: '敌人', Player: '玩家', Self: '自身',
  Target: '目标', Random: '随机', All: '所有', Each: '每', Per: '每',
  Max: '最大', Min: '最小', Current: '当前', Total: '总计', Bonus: '加成',
  Reduction: '减少', Boost: '提升', Cost: '消耗', Gain: '获得', Lose: '失去',
  Draw: '抽牌', Discard: '弃牌', Exhaust: '消耗', Hand: '手牌', Deck: '牌堆',
  Energy: '能量', Hp: '生命', MaxHp: '最大生命', Pp: 'PP', MaxPp: '最大PP',
  Strength: '力量', Dexterity: '敏捷', Focus: '集中', Vigor: '活力',
  First: '先制', Speed: '速度', Accuracy: '命中', Defense: '防御',
  Burn: '烧伤', Poison: '中毒', Freeze: '冰封', Frostbite: '冻伤',
  Blind: '失明', Fear: '害怕', Parasite: '寄生', Constrict: '束缚',
  Shrink: '缩小', Fatigue: '疲劳', Doom: '末日', Curse: '诅咒',
  Sleep: '睡眠', Stasis: '凝滞', Fury: '狂暴', Subjugation: '臣服',
  Blight: '枯萎', Vulnerable: '易伤', Weak: '虚弱', Frail: '脆弱',
  Artifact: '人工制品', Buffer: '缓冲', Intangible: '无实体',
  Plating: '覆甲', Thorns: '荆棘', Rage: '狂怒', Ritual: '仪式',
  Reflect: '反弹', Retain: '保留', ExhaustPile: '消耗牌堆',
  DiscardPile: '弃牌堆', DrawPile: '抽牌堆',
}

function autoTranslateVar(varName) {
  // 拆分驼峰
  const words = varName.replace(/([A-Z])/g, ' $1').trim().split(/\s+/)
  const cnWords = words.map(w => WORD_CN[w] || w)
  return cnWords.join('')
}

function varToCn(varName) {
  if (VAR_CN_MAP[varName]) return VAR_CN_MAP[varName]
  return autoTranslateVar(varName)
}

// ============ 源码解析 ============

function findCodeFile(className) {
  const searchDirs = [
    path.join(CODE_DIR, 'Powers'),
    path.join(CODE_DIR, 'Relics'),
    path.join(CODE_DIR, 'Cards'),
    path.join(CODE_DIR, 'Orbs'),
    path.join(CODE_DIR, 'Monsters'),
    CODE_DIR,
  ]
  for (const dir of searchDirs) {
    if (!fs.existsSync(dir)) continue
    const fp = path.join(dir, `${className}.cs`)
    if (fs.existsSync(fp)) return fp
  }
  // 全目录递归搜索
  for (const dir of searchDirs) {
    if (!fs.existsSync(dir)) continue
    const result = findCodeFileRecursive(dir, className)
    if (result) return result
  }
  return null
}

function findCodeFileRecursive(dir, className) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const e of entries) {
    const full = path.join(dir, e.name)
    if (e.isDirectory()) {
      const r = findCodeFileRecursive(full, className)
      if (r) return r
    } else if (e.name === `${className}.cs`) {
      return full
    }
  }
  return null
}

function parseCsFile(filePath, className) {
  const content = fs.readFileSync(filePath, 'utf8')
  const result = {
    vars: {},
    powerType: null,
    stackType: null,
    isVisible: true,
    allowNegative: false,
    instanceType: null,
    flavor: null,
    smart: null,
    maxUpgradeLevel: 0,
    upgradeChanges: {},
    cardCategory: null,
    cardType: null,
    cardRarity: null,
    targetType: null,
    energyCost: null,
    maxPp: 0,
    monsterImgDir: null,
    additionalHoverTips: [],
  }

  // PowerType
  const powerTypeMatch = content.match(/PowerType\s+Type\s*=>\s*\(PowerType\)(\d+)/)
  if (powerTypeMatch) result.powerType = parseInt(powerTypeMatch[1])

  // PowerStackType
  const stackTypeMatch = content.match(/PowerStackType\s+StackType\s*=>\s*\(PowerStackType\)(\d+)/)
  if (stackTypeMatch) result.stackType = parseInt(stackTypeMatch[1])

  // IsVisible（匹配 IsVisibleInternal 和 IsVisible）
  const visibleMatch = content.match(/bool\s+IsVisible(?:Internal)?\s*=>\s*(true|false)/)
  if (visibleMatch) result.isVisible = visibleMatch[1] === 'true'

  // AssetProfile（解析自定义图路径）
  const assetMatch = content.match(/AssetProfile\s*=>\s*new\s+(?:PowerAssetProfile|RelicAssetProfile)\s*\(\s*"(?:res:\/\/)?([^"]+\.png)"/)
  if (assetMatch) {
    result.assetProfilePath = assetMatch[1]
    // 提取文件名（去掉路径前缀）
    const parts = assetMatch[1].split('/')
    result.assetProfileFileName = parts[parts.length - 1]
  }

  // AllowNegative
  const negMatch = content.match(/bool\s+AllowNegative\s*=>\s*(true|false)/)
  if (negMatch) result.allowNegative = negMatch[1] === 'true'

  // DynamicVars
  const dvMatches = content.matchAll(/DynamicVars\["(\w+)"\]\s*=\s*(?:new\s+DynamicVar\(\s*\{|[^;]+?BaseValue\s*=\s*)([-\d.]+)/g)
  for (const m of dvMatches) {
    result.vars[m[1]] = parseFloat(m[2])
  }
  // 也匹配 = decimal 或 = number 形式
  const dvMatches2 = content.matchAll(/DynamicVars\["(\w+)"\]\s*=\s*new\s+DynamicVar\s*\{[^}]*BaseValue\s*=\s*([-\d.]+)/g)
  for (const m of dvMatches2) {
    if (!result.vars[m[1]]) result.vars[m[1]] = parseFloat(m[2])
  }

  return result
}

// ============ 描述处理 ============

function escapeHtmlAttr(s) {
  return String(s).replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function replaceVars(text, vars) {
  return text
    .replace(/\{(\w+):diff\(([-\d.]+)\)\}/g, (m, name, diff) => {
      const base = vars[name]
      if (base !== undefined) return String(parseFloat(base) + parseFloat(diff))
      return m
    })
    .replace(/\{(\w+)\}/g, (m, name) => {
      if (vars[name] !== undefined) return String(vars[name])
      return m
    })
}

function processIfUpgraded(text, isUpgraded) {
  return text.replace(/\{IfUpgraded:show:([^|}]*)(?:\|([^}]*))?\}/g, (m, yes, no) => {
    return isUpgraded ? yes : (no || '')
  })
}

function processDesc(text, vars, isUpgraded) {
  let result = processIfUpgraded(text, isUpgraded)
  result = replaceVars(result, vars)
  // 转换 [blue]/[gold] 等颜色标记为内联 span
  result = result
    .replace(/\[gold\](.*?)\[\/gold\]/g, '<span style="color:#d4a017;font-weight:600">$1</span>')
    .replace(/\[blue\](.*?)\[\/blue\]/g, '<span style="color:#3aa675;font-weight:600">$1</span>')
    .replace(/\[purple\](.*?)\[\/purple\]/g, '<span style="color:#9b59b6;font-weight:600">$1</span>')
    .replace(/\[red\](.*?)\[\/red\]/g, '<span style="color:#d44;font-weight:600">$1</span>')
    .replace(/\[green\](.*?)\[\/green\]/g, '<span style="color:#3aa675;font-weight:600">$1</span>')
    .replace(/\[sine\](.*?)\[\/sine\]/g, '<span style="color:#d4a017;font-weight:600">$1</span>')
    .replace(/\[\/?(?:blue|red|gold|purple|green|sine)\]/g, '')
    .replace(/\n/g, ' ')
  return result
}

function plainDesc(text, vars) {
  let result = processIfUpgraded(text, false)
  result = replaceVars(result, vars)
  result = result
    .replace(/\[\/?(?:blue|red|gold|purple|green|sine)\]/g, '')
    .replace(/\n/g, ' ')
    .replace(/\|/g, '\\|')
    .replace(/\{Amount\}/g, '层数')
    .replace(/\{Turns\}/g, '层数')
    .replace(/\{\w+\}/g, '')
  return result
}

// ============ 图片处理 ============

function findPowerImage(snakeName, codeData) {
  // 优先使用 AssetProfile 指定的图
  if (codeData && codeData.assetProfileFileName) {
    const p = path.join(IMG_ROOT, 'powers', codeData.assetProfileFileName)
    if (fs.existsSync(p)) return p
  }
  const fullName = `seer_${snakeName}`
  const p = path.join(IMG_ROOT, 'powers', `${fullName}.png`)
  if (fs.existsSync(p)) return p
  const p2 = path.join(IMG_ROOT, 'powers', `${snakeName}.png`)
  if (fs.existsSync(p2)) return p2
  return null
}

function findRelicImage(snakeName, codeData) {
  // 优先使用 AssetProfile 指定的图
  if (codeData && codeData.assetProfileFileName) {
    const p = path.join(IMG_ROOT, 'relics', codeData.assetProfileFileName)
    if (fs.existsSync(p)) return p
  }
  const fullName = `seer_${snakeName}`
  const p = path.join(IMG_ROOT, 'relics', `${fullName}.png`)
  if (fs.existsSync(p)) return p
  const p2 = path.join(IMG_ROOT, 'relics', `${snakeName}.png`)
  if (fs.existsSync(p2)) return p2
  return null
}

function generateRedPlaceholder(destPath) {
  const width = 256, height = 256
  const signature = Buffer.from([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A])
  const ihdrData = Buffer.alloc(13)
  ihdrData.writeUInt32BE(width, 0)
  ihdrData.writeUInt32BE(height, 4)
  ihdrData[8] = 8; ihdrData[9] = 2; ihdrData[10] = 0; ihdrData[11] = 0; ihdrData[12] = 0
  const rowSize = width * 3 + 1
  const rawData = Buffer.alloc(rowSize * height)
  for (let y = 0; y < height; y++) {
    rawData[y * rowSize] = 0
    for (let x = 0; x < width; x++) {
      const offset = y * rowSize + 1 + x * 3
      rawData[offset] = 0xD4; rawData[offset + 1] = 0x44; rawData[offset + 2] = 0x44
    }
  }
  const compressedData = zlib.deflateSync(rawData)
  function makeChunk(type, data) {
    const typeBuf = Buffer.from(type, 'ascii')
    const lenBuf = Buffer.alloc(4)
    lenBuf.writeUInt32BE(data.length, 0)
    const crcBuf = Buffer.alloc(4)
    const crcData = Buffer.concat([typeBuf, data])
    let crc = 0xFFFFFFFF
    for (let i = 0; i < crcData.length; i++) {
      crc = crc ^ crcData[i]
      for (let j = 0; j < 8; j++) crc = (crc >>> 1) ^ (0xEDB88320 & -(crc & 1))
    }
    crc = (crc ^ 0xFFFFFFFF) >>> 0
    crcBuf.writeUInt32BE(crc, 0)
    return Buffer.concat([lenBuf, typeBuf, data, crcBuf])
  }
  const png = Buffer.concat([
    signature, makeChunk('IHDR', ihdrData), makeChunk('IDAT', compressedData), makeChunk('IEND', Buffer.alloc(0))
  ])
  fs.writeFileSync(destPath, png)
}

function copyImage(srcPath, category, snakeName) {
  const destDir = path.join(PUBLIC_DIR, 'images', category)
  fs.mkdirSync(destDir, { recursive: true })
  const destPath = path.join(destDir, `${snakeName}.png`)
  // 如果目标图片已存在，不覆盖（保留已有图片）
  if (fs.existsSync(destPath)) {
    return `/images/${category}/${snakeName}.png`
  }
  if (srcPath && fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath)
    return `/images/${category}/${snakeName}.png`
  }
  // 不生成红色占位图，返回 null 让调用方处理
  return null
}

// ============ 枚举映射 ============

const POWER_TYPE_MAP = {
  0: '中性（None）', 1: '增益（Buff）', 2: '减益（Debuff）',
  None: '中性（None）', Buff: '增益（Buff）', Debuff: '减益（Debuff）',
}

const STACK_TYPE_MAP = {
  0: '不叠加', 1: '叠加', 2: '按回合覆盖', 3: '仅刷新回合',
  None: '不叠加', Stack: '叠加', Overwrite: '按回合覆盖', Refresh: '仅刷新回合',
}

const RELIC_RARITY_MAP = {
  0: '无', 1: '初始', 2: '普通', 3: '罕见', 4: '稀有', 5: '商店', 6: '事件', 7: '先古',
}

// ============ 页面生成 ============

function generatePowerPage(entry, info, codeData) {
  const snake = toSnakeCase(entry)
  const title = info.fields.title || entry
  const desc = info.fields.description || ''
  const smart = info.fields.smartDescription || ''
  const flavor = info.fields.flavor || ''

  const lines = [`# ${title}`, '']

  // 图片：不可见能力不显示图片，也不生成占位图
  if (codeData.isVisible) {
    const imgPath = findPowerImage(snake, codeData)
    if (imgPath) {
      const publicPath = copyImage(imgPath, 'powers', snake)
      if (publicPath) {
        lines.push(`<img src="${publicPath}" alt="${escapeHtmlAttr(title)}" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />`)
        lines.push('')
      }
    } else {
      // 可见但缺图：标注待补充，不生成红色占位图
      lines.push(`> ⚠️ 此能力 \`IsVisibleInternal = true\`（可见），但 mod 与原版均未找到对应图标文件，待补充。`)
      lines.push('')
    }
  } else {
    // 不可见能力标注
    lines.push(`> ℹ️ 此能力在游戏内不可见（\`IsVisibleInternal = false\`），无独立图标。`)
    lines.push('')
  }

  // 基本信息
  lines.push('## 基本信息', '')
  if (codeData.powerType !== null) {
    lines.push(`- **类型**: ${POWER_TYPE_MAP[codeData.powerType] || codeData.powerType}`)
  }
  if (codeData.stackType !== null) {
    lines.push(`- **叠加方式**: ${STACK_TYPE_MAP[codeData.stackType] || codeData.stackType}`)
  }
  lines.push(`- **可见**: ${codeData.isVisible ? '是' : '否'}`)
  if (codeData.allowNegative) {
    lines.push(`- **允许负值**: 是`)
  }

  // 数值参数
  if (codeData.vars && Object.keys(codeData.vars).length > 0) {
    lines.push('', '### 数值参数', '', '| 参数 | 数值 |', '|---|---|')
    for (const [k, v] of Object.entries(codeData.vars)) {
      lines.push(`| ${varToCn(k)} | ${v} |`)
    }
  }
  lines.push('')

  // 描述
  if (desc) {
    lines.push('## 描述', '', processDesc(desc, codeData.vars, false), '')
  }

  // 智能描述（如果与普通描述不同）
  if (smart && smart !== desc) {
    lines.push('## 智能描述', '', processDesc(smart, codeData.vars, false), '')
  }

  // 风味文字
  if (flavor) {
    lines.push('## 风味文字', '', processDesc(flavor, codeData.vars, false), '')
  }

  // 源码
  lines.push('## 源码', '')
  lines.push(`- \`Seer${entry.replace(/^SEER_/, '').split('_').map(s => s.charAt(0) + s.slice(1).toLowerCase()).join('')}Power.cs\`（mod 能力，\`d:\\slay\\mymod\\seer001\\src\\Core\\Models\\Powers\\\`）`)

  return lines.join('\n')
}

function generateRelicPage(entry, info, codeData) {
  const snake = toSnakeCase(entry)
  const title = info.fields.title || entry
  const desc = info.fields.description || ''
  const smart = info.fields.smartDescription || ''
  const flavor = info.fields.flavor || ''

  const lines = [`# ${title}`, '']

  // 图片：遗物都有图，但如果找不到也不生成红色占位图
  const imgPath = findRelicImage(snake, codeData)
  if (imgPath) {
    const publicPath = copyImage(imgPath, 'relics', snake)
    if (publicPath) {
      lines.push(`<img src="${publicPath}" alt="${escapeHtmlAttr(title)}" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />`)
      lines.push('')
    }
  } else {
    lines.push(`> ⚠️ 未找到对应图标文件，待补充。`)
    lines.push('')
  }

  // 基本信息
  lines.push('## 基本信息', '')
  lines.push(`- **分类**: 非塔罗遗物`)

  // 数值参数
  if (codeData.vars && Object.keys(codeData.vars).length > 0) {
    lines.push('', '### 数值参数', '', '| 参数 | 数值 |', '|---|---|')
    for (const [k, v] of Object.entries(codeData.vars)) {
      lines.push(`| ${varToCn(k)} | ${v} |`)
    }
  }
  lines.push('')

  // 描述
  if (desc) {
    lines.push('## 描述', '', processDesc(desc, codeData.vars, false), '')
  }

  // 智能描述
  if (smart && smart !== desc) {
    lines.push('## 智能描述', '', processDesc(smart, codeData.vars, false), '')
  }

  // 风味文字
  if (flavor) {
    lines.push('## 风味文字', '', processDesc(flavor, codeData.vars, false), '')
  }

  // 源码
  lines.push('## 源码', '')
  lines.push(`- \`Seer${entry.replace(/^SEER_/, '').split('_').map(s => s.charAt(0) + s.slice(1).toLowerCase()).join('')}.cs\`（mod 遗物，\`d:\\slay\\mymod\\seer001\\src\\Core\\Models\\Relics\\\`）`)

  return lines.join('\n')
}

// ============ 主流程：只生成缺失页面 ============

function generateMissing(category) {
  const fileMap = {
    POWER: { file: 'powers.json', dir: 'powers', label: '能力' },
    RELIC: { file: 'relics.json', dir: 'relics', label: '遗物' },
  }
  const cfg = fileMap[category]
  if (!cfg) return

  const fp = path.join(LOC_DIR, cfg.file)
  if (!fs.existsSync(fp)) {
    console.log(`[skip] ${cfg.file} 不存在`)
    return
  }

  const data = readJson(fp)
  const entries = {}
  for (const [key, value] of Object.entries(data)) {
    const parsed = parseKey(key)
    if (!parsed) continue
    if (parsed.category !== category) continue
    if (!entries[parsed.entry]) entries[parsed.entry] = { category, fields: {} }
    entries[parsed.entry].fields[parsed.field] = value
  }

  const outDir = path.join(DOCS_DIR, cfg.dir)
  fs.mkdirSync(outDir, { recursive: true })

  let generated = 0, skipped = 0, orphan = 0
  const entryList = Object.entries(entries).sort((a, b) => a[0].localeCompare(b[0]))

  for (const [entry, info] of entryList) {
    const snake = toSnakeCase(entry)
    const outPath = path.join(outDir, `${snake}.md`)

    // 已存在则跳过（保留手动编辑）
    if (fs.existsSync(outPath)) {
      skipped++
      continue
    }

    // 查找源码
    const className = entryToClassName(entry, category)
    const codeFile = findCodeFile(className)
    if (!codeFile) {
      orphan++
      console.warn(`[orphan] ${cfg.label} ${entry} -> ${className} 无源码，跳过`)
      continue
    }
    const codeData = parseCsFile(codeFile, className)

    // 生成页面
    let page
    if (category === 'POWER') {
      page = generatePowerPage(entry, info, codeData)
    } else {
      page = generateRelicPage(entry, info, codeData)
    }
    fs.writeFileSync(outPath, page, 'utf8')
    generated++
    console.log(`[gen] ${cfg.label} ${entry} -> ${snake}.md`)
  }

  console.log(`\n[${cfg.label}] 生成 ${generated} 个新页面，跳过 ${skipped} 个已有页面，孤儿 ${orphan} 个`)
}

// 执行
console.log('=== 补充生成缺失能力页面 ===')
generateMissing('POWER')
console.log('')
console.log('=== 补充生成缺失遗物页面 ===')
generateMissing('RELIC')
console.log('')
console.log('完成。已存在的页面未被修改。')
