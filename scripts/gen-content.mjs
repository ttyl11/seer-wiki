// 从 mod 代码 + 本地化 JSON 批量生成 VitePress Markdown 页面
// 核心原则：
//  1. 保留本地化原文（含 [blue]/[gold] 等颜色标记和原版术语），不翻译
//  2. 仅将 {VarName} / {VarName:diff()} 等占位符替换为代码中的实际数值
//  3. 数据表格使用中文全称（不写 Damage/MaxPp 等英文变量名）
//  4. 正确查找并拷贝图片到 public/images/<category>/，页面引用 /images/<category>/<snake>.png
//  5. 处理 {IfUpgraded:show:xxx|} 条件块
import fs from 'node:fs'
import path from 'node:path'
import zlib from 'node:zlib'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const MOD_ROOT = path.resolve(__dirname, '../../mymod/seer001')
const LOC_DIR = path.join(MOD_ROOT, 'seer/localization/zhs')
const CODE_DIR = path.join(MOD_ROOT, 'src/Core/Models')
const IMG_ROOT = path.join(MOD_ROOT, 'seer/images')       // 图片根目录（relics/powers/orbs/monsters 直接子目录）
const CARD_IMG_DIR = path.join(IMG_ROOT, 'packed/card_portraits')  // 卡牌图在 packed/card_portraits 下
const DOCS_DIR = path.resolve(__dirname, '../docs')
const PUBLIC_DIR = path.resolve(__dirname, '../docs/public')

// ============ 工具函数 ============

function readJson(p) {
  let raw = fs.readFileSync(p, 'utf8')
  if (raw.charCodeAt(0) === 0xfeff) raw = raw.slice(1)
  return JSON.parse(raw)
}

// PascalCase → snake_case，去掉开头的 SEER_
function toSnakeCase(name) {
  return name
    .replace(/^SEER_/, '')
    .replace(/([A-Z0-9]+)([A-Z][a-z])/g, '$1_$2')
    .replace(/([a-z0-9])([A-Z])/g, '$1_$2')
    .toLowerCase()
}

// entry → 类名转换
// entry 格式：CARD/RELIC/POWER/ORB/MONSTER 是 SEER_<NAME>，CHARACTER 是 <NAME>
// 类名规则：CARD/RELIC/POWER/ORB/MONSTER 加 Seer 前缀，CHARACTER 不加
// 例：SEER_ANTINOMY → SeerAntinomy；SEER_PIPI_MONSTER → SeerPipiMonster；PUNI → Puni
function entryToClassName(entry, category) {
  const name = entry.replace(/^SEER_/, '')
  const pascal = name.split('_').map(s => s.charAt(0) + s.slice(1).toLowerCase()).join('')
  if (category === 'CHARACTER') {
    return pascal
  }
  return 'Seer' + pascal
}

// 解析本地化键 SEER_<CATEGORY>_<ENTRY>.<field>
function parseKey(key) {
  const m = key.match(/^SEER_(CARD|RELIC|POWER|ORB|MONSTER|CHARACTER)_(.+?)\.(.+)$/)
  if (!m) return null
  const [, category, entry, field] = m
  return { category, entry, field }
}

// ============ 变量名 → 中文全称映射表 ============
// 数据表格用，避免出现 Damage/MaxPp 等英文
const VAR_CN_MAP = {
  // ===== 通用 =====
  Damage: '伤害', Block: '格挡', Heal: '回复', Gold: '金币', Pp: 'PP', MaxPp: '最大PP',
  EnergyCost: '能量消耗', Cards: '卡牌数', Amount: '层数', Turns: '回合数', Chance: '概率',
  Percent: '百分比', Threshold: '阈值', Count: '数量', Stacks: '层数', Stack: '层数',

  // ===== 卡牌 - 数值 =====
  FirstStrike: '先制', FirstStrikeAmount: '先制数值', FirstStrikeTurns: '先制回合',
  FirstStrikeReduction: '先制减少', FirstStrikeGain: '先制获取',
  BurnTurns: '烧伤回合', ReflectTurns: '反弹回合', SubjugationTurns: '臣服回合',
  FuryTurns: '狂暴回合', DeathThreshold: '死亡阈值', HealthCost: '生命消耗',
  HealPercent: '回复百分比', MaxHpPercent: '最大生命百分比', HpPercent: '生命百分比',
  HealthPercent: '生命百分比', DamageBoostPercent: '增伤百分比',
  DamageReductionPercent: '减伤百分比', ScryAmount: '预见数量', ExhaustCount: '消耗数量',
  DemiseAmount: '消亡数量', SummonCount: '召唤数量', CardCount: '卡牌数量',
  Replay: '重放次数', Divisor: '除数', CurrentDamage: '当前伤害',
  DamageThreshold: '伤害阈值', DamagePerCard: '每张牌伤害', EnergyLoss: '能量损失',
  RoundDamage: '回合伤害', PenaltyDamage: '惩罚伤害', FixedDamage: '固定伤害',
  AbnormalCount: '异常数量', AbnormalTurns: '异常回合', CardsForReturn: '回手牌所需卡数',
  PlatingAmount: '覆甲数量', StrengthAmount: '力量数值', DefenseAmount: '防御数值',
  BaseSubjugation: '基础臣服', VigorPower: '活力', DexterityPower: '敏捷',
  VulnerablePower: '易伤', PotionSlots: '药水栏位', Swift: '迅捷', BlockThree: '格挡三',
  DivineEnergy: '神圣能量', ExtraX: '额外数值', ShivCount: '小刀数量',
  HitsPerX: '每X命中数', DamagePerVulnerable: '每易伤伤害', InstantKillChance: '即死概率',
  Hits: '命中次数', CardsPerEnergy: '每能量卡牌数', CardsPerTurn: '每回合卡牌数',
  BaseCards: '基础卡牌数', MaxCards: '最大卡牌数', CardThreshold: '卡牌阈值',
  EnergyReduction: '能量减少', EnergyThreshold: '能量阈值', EnergyGain: '能量获取',
  HpLoss: '生命损失', HpLossDecrement: '生命损失递减', DamageIncrement: '伤害增量',
  FixedDamageBase: '固定伤害基数', BlockAmount: '格挡数值', BaseGain: '基础获取',
  RetaliatePoison: '反击中毒', RetaliateTurns: '反击回合',

  // ===== 遗物 =====
  ExecuteStacks: '处决层数', ReviveHpPercent: '复活生命百分比',
  CrownImmuneTurns: '加冕免疫回合', CrownPpFreeTurns: '加冕免费PP回合',
  ForgePerEnergy: '每能量铸造数', SwordOneThreshold: '圣剑一阈值',
  SwordTwoThreshold: '圣剑二阈值', SwordThreeThreshold: '圣剑三阈值',
  TotalForgeAmount: '累计铸造', CurseTurns: '诅咒回合',
  FixedDamageAmount: '固定伤害数值', DebuffImmuneTurns: '异常免疫回合',
  SleepChance: '睡眠概率', PpRestoreLow: 'PP回复(低)',
  RemainingForcedEvents: '剩余强制事件', MaxHpPerCard: '每张牌最大生命',
  MaxHpLossPerHit: '每次受击最大生命损失', StarterCard: '初始卡牌', AncientCard: '先古卡牌',

  // ===== 能力 =====
  DamageBoost: '增伤百分比', MissPercentPerStack: '每层未命中概率',
  DamageDecrease: '减伤百分比', StrengthGain: '力量获取',
  BonusPercentPerStack: '每层加成百分比', StunChancePerBuff: '每增益眩晕概率',
  ConvertChance: '转化概率', BleedIncrement: '流血增量',
  SelfDamageChance: '自伤概率', DamageMultiplier: '伤害倍率',
  SelfDamagePercent: '自伤百分比', MinDamage: '最小伤害', AuraGain: '光环获取',
  ThornsGain: '荆棘获取', DamagePerTurn: '每回合伤害',
  AttackDamageReduction: '攻击伤害减少', MinRandomDamage: '最小随机伤害',
  MaxRandomDamage: '最大随机伤害', CritChance: '暴击概率', CritMultiplier: '暴击倍率',
  DamageBonus: '伤害加成', ImmuneThreshold: '免疫阈值',
  PpReduction: 'PP减少', AshStacks: '焚烬层数', StatReduction: '属性减少',
  MaxStacks: '最大层数', AbnormalStacks: '异常层数', DamageModifier: '伤害修改',
  Layer1Reduction: '一层减伤', Layer2Reduction: '二层减伤',
  Layer3Boost: '三层增伤', Layer4Boost: '四层增伤',
  Layer3FirstStrike: '三层先制', Layer4FirstStrike: '四层先制',
  DamageReduction1: '一层减伤', DamageReduction2: '二层减伤',
  DamageBoost3: '三层增伤', DamageBoost4: '四层增伤',
  FirstStrike3: '三层先制', FirstStrike4: '四层先制',
  DrainAmount: '汲取数值', DamageAmount: '伤害数值', EnvyCount: '嫉妒数量',
  InvalidateInterval: '失效间隔', DamageThresholdPercent: '伤害阈值百分比',
  BattleFuryPerHit: '每击斗气', PercentPerStack: '每层百分比',
  FrostbiteStacks: '冻伤层数', CrisisMultiplier: '危机倍率',
  AmountPerTurn: '每回合数值', DamageIncrease: '伤害增加',
  SingularityMax: '最大奇点', FixedDamagePercent: '固定伤害百分比',
  PoisonStacks: '中毒层数', DefenseGain: '防御获取',
  AttributeAmount: '属性数值', IntervalTurns: '间隔回合',
  FatigueChance: '疲劳概率', FatigueTurns: '疲劳回合',
  RegenAmount: '回复数值', FixedDamageBoostPercent: '固定伤害增加百分比',
  CurrentChance: '当前概率', BaseChance: '基础概率', IncreasePerTurn: '每回合增加',
  HpThreshold: '生命阈值', MaxHpGainPercent: '最大生命获取百分比',
  ExecuteThreshold: '处决阈值', CritDamageBoost: '暴击伤害增加',
  OrbitGain: '轨道获取', TurnsRemaining: '剩余回合', ParalysisStacks: '瘫痪层数',
  BlockPercent: '格挡百分比', PetrifyStacks: '石化层数', BaseDamage: '基础伤害',
  PpRestore: 'PP回复', AbnormalChance: '异常概率', DebuffCount: '减益数量',
  SleepStacks: '睡眠层数', MinionCardCount: '召唤物卡牌数',
  SleepTurns: '睡眠回合', StatusTurns: '异常回合',
  MaxWhiskerLayers: '最大龙胆层数', BaseCost: '基础消耗',
  ImmunityTurns: '免疫回合', BurnStacks: '烧伤层数', DrawCount: '抽牌数量',
  FuryStacks: '狂暴层数', DragonThreshold: '龙牌阈值', CurrentDragons: '当前龙牌数',
  DefenseLoss: '防御减少', MaxCharge: '最大蓄力', FlammableTurns: '易燃回合',
  ParalysisTurns: '瘫痪回合', HpLossPerDraw: '每抽牌生命损失', MaxDraws: '最大抽牌数',
  HealPerX: '每X回复', BlockPerEnergy: '每能量格挡', FlameTurns: '火焰回合',
  BurnChance: '烧伤概率', FixedDamageStacks: '固定伤害层数', CombatThreshold: '战斗阈值',
  WeakStacks: '虚弱层数', DamagePerCopy: '每副本伤害', DrawPerCopy: '每副本抽牌',
  PpPerDouble: '每翻倍PP', DamagePerPlay: '每打出伤害', PpToGain: '获取PP',
  DamagePercent: '伤害百分比', SpeedLoss: '速度减少', StatusCount: '状态牌数',
  BurnAmount: '烧伤数量', BurnHeal: '烧伤回复', HealAmount: '回复数量',
  OrbCount: '充能球数', Defense: '防御', FreezeStacks: '冰冻层数',
  VulnerableStacks: '易伤层数', Artifact: '机关', HealThreshold: '回复阈值',
  StrengthLoss: '力量减少', StarGain: '辉星获取', DamageChance: '伤害概率',
  RewardChance: '奖励概率', BlockPerCard: '每牌格挡', MaxHpGain: '最大生命获取',
  CurseCount: '诅咒数量', WinChance: '获胜概率', MaxHpLoss: '最大生命损失',
  BlockGain: '格挡获取', Combats: '剩余战斗', MaxCombats: '最大战斗数',
  DamageReduction: '减伤百分比', SparkStacks: '火种层数',
  SealPerCards: '每张封印所需卡数', MaxSeal: '最大封印层数',
  BlockPerOverflow: '溢出每层格挡', ReflectMultiplier: '反弹倍率',
  HolyEdictStacks: '圣诰层数', HealCount: '治疗次数', EvilTeachingStacks: '邪诲层数',
  AccuracyAmount: '命中数值', MaxHp: '最大生命',

  // ===== 充能球 =====
  Passive: '被动数值', Evoke: '激发数值'
}

// 单词级翻译字典（用于自动翻译未知变量名）
const WORD_CN = {
  Damage: '伤害', Block: '格挡', Heal: '回复', Gold: '金币', Turn: '回合', Turns: '回合',
  Stack: '层数', Stacks: '层数', Count: '数量', Amount: '数值', Percent: '百分比',
  Chance: '概率', Max: '最大', Min: '最小', Per: '每', Gain: '获取', Loss: '损失',
  Reduction: '减少', Boost: '增益', Bonus: '加成', Threshold: '阈值', Hp: '生命',
  Pp: 'PP', Energy: '能量', Card: '卡牌', Cards: '卡牌', Draw: '抽牌', Cost: '消耗',
  Play: '打出', Strike: '打击', Attack: '攻击', Defend: '防御', Defense: '防御',
  Strength: '力量', Speed: '速度', Accuracy: '命中', First: '先制', Sleep: '睡眠',
  Burn: '烧伤', Freeze: '冰冻', Poison: '中毒', Weak: '虚弱', Vulnerable: '易伤',
  Curse: '诅咒', Demon: '恶魔', Dragon: '龙', Holy: '神圣', Fixed: '固定', Base: '基础',
  Initial: '初始', Current: '当前', Total: '总计', Self: '自身', Target: '目标',
  Enemy: '敌人', All: '全体', Random: '随机', Summon: '召唤', Exhaust: '消耗',
  Discard: '弃牌', Deck: '牌堆', Hand: '手牌', Orb: '充能球', Power: '能力',
  Relic: '遗物', Health: '生命', Life: '生命', Death: '死亡', Kill: '击杀',
  Multiplier: '倍率', Cap: '上限', Limit: '限制', Increment: '增量', Decrement: '递减',
  Interval: '间隔', Duration: '持续', Remaining: '剩余', Convert: '转化', Trigger: '触发',
  Immune: '免疫', Immunity: '免疫', Buff: '增益', Debuff: '减益', Abnormal: '异常',
  Status: '状态', Stun: '击晕', Paralysis: '瘫痪', Bleed: '流血', Blind: '致盲',
  Petrify: '石化', Frostbite: '冻伤', Parasite: '寄生', Intangible: '无实体',
  Dexterity: '敏捷', Vigor: '活力', Plating: '覆甲', Aura: '光环', Thorns: '荆棘',
  Crit: '暴击', Critical: '暴击', Charge: '充能', Channel: '引导', Slot: '栏位',
  Enchant: '附魔', Forge: '铸造', Star: '辉星', Ash: '灰烬', Flame: '火焰',
  Spark: '火种', Wrath: '愤怒', Pride: '骄傲', Greed: '贪婪', Lust: '色欲',
  Gluttony: '暴食', Sloth: '懒惰', Envy: '嫉妒', Desolate: '荒芜', Demise: '消亡',
  Subjugation: '臣服', Fury: '狂暴', Reflect: '反弹', Shield: '护盾', Guard: '格挡',
  Evasion: '闪避', Miss: '未命中', Hit: '命中', Critical: '暴击', Multiplier: '倍率',
  Divider: '除数', Divisor: '除数', Replay: '重放', Select: '选择', Choose: '选择',
  Remove: '移除', Add: '增加', Clear: '清除', Reset: '重置', Increase: '增加',
  Decrease: '减少', Up: '升', Down: '降', High: '高', Low: '低', Normal: '普通',
  Elite: '精英', Boss: 'Boss', Rare: '稀有', Uncommon: '罕见', Common: '普通',
  Special: '特殊', Token: '令牌', Starter: '初始', Colorless: '无色', Skill: '技能',
  Ethereal: '虚无', Retain: '保留', Innate: '固有', Scry: '预见', Artifact: '机关',
  Unplayable: '不可打出', UnplayableCard: '不可打出', Evil: '邪恶', Good: '善良',
  Neutral: '中立', Divine: '神灵', Demonic: '恶魔', Ancient: '先古', Primordial: '原始',
  Eternal: '永恒', Infinite: '无限', Finite: '有限', Future: '未来', Past: '过去',
  Present: '当前', Singularity: '奇点', Calamity: '灾厄', Catastrophe: '浩劫',
  Apocalypse: '末日', Annihilation: '歼灭', Destruction: '破坏', Creation: '创造',
  Dawn: '晓', Dusk: '暮', Night: '夜', Day: '昼', Morning: '晨', Evening: '夕',
  Spring: '春', Summer: '夏', Autumn: '秋', Winter: '冬',
  January: '一月', February: '二月', March: '三月', April: '四月', May: '五月',
  June: '六月', July: '七月', August: '八月', September: '九月', October: '十月',
  November: '十一月', December: '十二月',
  Emperor: '皇帝', King: '王', Queen: '后', Lord: '领主', Knight: '骑士',
  Baron: '男爵', Duke: '公爵', God: '神', Goddess: '女神', Titan: '泰坦',
  Giant: '巨人', Dwarf: '矮人', Elf: '精灵', Fairy: '妖精', Spirit: '精灵',
  Ghost: '幽灵', Phantom: '幻影', Specter: '幽灵', Wraith: '怨灵', Shade: '暗影',
  Shadow: '暗影', Light: '光', Dark: '暗', Fire: '火', Ice: '冰', Water: '水',
  Earth: '土', Wind: '风', Thunder: '雷', Lightning: '闪电', Nature: '自然',
  Holy: '神圣', Unholy: '不洁', Sacred: '神圣', Profane: '亵渎',
  War: '战争', Peace: '和平', Chaos: '混沌', Order: '秩序', Law: '法则',
  Justice: '正义', Judgment: '审判', Verdict: '裁决', Sentence: '判决',
  Execution: '处决', Punishment: '惩罚', Reward: '奖励', Penalty: '惩罚',
  Gamble: '赌博', Trick: '诡计', Juggling: '杂耍', Slippery: '滑溜',
  Fat: '脂肪', Muscle: '肌肉', Bone: '骨骼', Blood: '血液', Soul: '灵魂',
  Mind: '精神', Body: '身体', Heart: '心脏', Brain: '大脑',
  Fatigue: '疲劳', Exhaustion: '耗竭', Stamina: '体力',
  Weapon: '武器', Armor: '护甲', Shield: '护盾', Sword: '剑', Blade: '刃',
  Spear: '矛', Bow: '弓', Arrow: '箭', Staff: '杖', Wand: '魔杖',
  Crown: '加冕', Scepter: '权杖', Grail: '圣杯', Coin: '星币',
  Tarot: '塔罗', Chant: '唱词', Edict: '诰', Teaching: '诲',
  Crystal: '水晶', Gem: '宝石', Jewel: '珠宝', Pearl: '珍珠',
  Scale: '鳞片', Claw: '爪', Fang: '牙', Wing: '翼', Tail: '尾',
  Horn: '角', Eye: '眼', Heart: '心', Core: '核心', Source: '源',
  Well: '井', Spring: '泉', Pool: '池', Sea: '海', Ocean: '洋',
  Mountain: '山', Forest: '林', Desert: '漠', Swamp: '沼', Cave: '洞',
  Sky: '天', Star: '星', Moon: '月', Sun: '日', Cloud: '云', Rain: '雨',
  Storm: '暴风', Thunder: '雷', Lightning: '闪电', Snow: '雪', Ice: '冰',
  Fog: '雾', Mist: '霭', Shadow: '影', Light: '光', Dark: '暗',
  North: '北', South: '南', East: '东', West: '西',
  Upper: '上', Lower: '下', Inner: '内', Outer: '外', Center: '中',
  Left: '左', Right: '右', Front: '前', Back: '后', Top: '顶', Bottom: '底',
  One: '一', Two: '二', Three: '三', Four: '四', Five: '五', Six: '六',
  Seven: '七', Eight: '八', Nine: '九', Ten: '十',
  First: '一', Second: '二', Third: '三', Fourth: '四', Fifth: '五',
  Layer: '层', Layer1: '一层', Layer2: '二层', Layer3: '三层', Layer4: '四层',
  DamageReduction1: '一层减伤', DamageReduction2: '二层减伤',
  DamageBoost3: '三层增伤', DamageBoost4: '四层增伤',
  FirstStrike3: '三层先制', FirstStrike4: '四层先制',
  Nebula: '星云', Galaxy: '银河', Cosmos: '宇宙', Universe: '宇宙',
  Astral: '星界', Celestial: '天界', Divine: '神界', Demonic: '魔界',
  Mortal: '凡界', Ethereal: '虚无', Void: '虚空', Null: '空', Empty: '空',
  Full: '满', Half: '半', Quarter: '四分之一', Third: '三分之一',
  Double: '双', Triple: '三', Quadruple: '四',
  Single: '单', Dual: '双', Multi: '多', Poly: '多',
  Pre: '前', Post: '后', Re: '重', Un: '非', In: '内', Ex: '外',
  Over: '过度', Under: '不足', Out: '外', In: '内',
  Sub: '次', Super: '超', Ultra: '极', Mega: '巨', Macro: '宏', Micro: '微',
  Nano: '纳', Pico: '皮', Femto: '飞',
  Osty: '奥斯提', Puni: '谱尼', Seer: '赛尔',
  Rng: '随机', Niche: '稀有', Combat: '战斗', Fight: '战斗',
  Battle: '战斗', Clash: '冲突', Duel: '决斗', Arena: '竞技场',
  Victory: '胜利', Defeat: '失败', Win: '胜', Lose: '败',
  Draw: '平局', Tie: '平', Stalemate: '僵局',
  HP: '生命', MP: '魔法', SP: '技能点', TP: '天赋点',
  ATK: '攻击', DEF: '防御', MAT: '魔攻', MDF: '魔防',
  SPD: '速度', ACC: '命中', EVA: '闪避', CRIT: '暴击',
  Luck: '幸运', Charm: '魅力', Intimidate: '威吓', Persuade: '说服',
  Lock: '锁定', Unlock: '解锁', Seal: '封印', Unseal: '解封',
  Bind: '绑定', Free: '自由', Trap: '陷阱', Safe: '安全',
  Danger: '危险', Warning: '警告', Alert: '警报', Emergency: '紧急',
  Crisis: '危机', Disaster: '灾难', Catastrophe: '浩劫',
  boon: '恩赐', bane: '祸根', blessing: '祝福', curse: '诅咒',
  Buff: '增益', Debuff: '减益', Aura: '光环', Seal: '封印',
  Brand: '烙印', Mark: '标记', Sigil: '符印', Rune: '符文',
  Tattoo: '纹身', Scar: '伤痕', Wound: '伤口', Injury: '伤',
  Disease: '疾病', Illness: '病', Sickness: '症', Plague: '瘟疫',
  Infection: '感染', Contagion: '传染', Virus: '病毒', Bacteria: '细菌',
  Toxin: '毒素', Poison: '毒', Venom: '毒液', Acid: '酸',
  Alkaline: '碱', Salt: '盐', Sugar: '糖', Fat: '脂肪',
  Protein: '蛋白质', Vitamin: '维生素', Mineral: '矿物质',
  Water: '水', Fire: '火', Earth: '土', Air: '风',
  Metal: '金', Wood: '木', Ice: '冰', Lightning: '雷',
  Dark: '暗', Light: '光', Void: '虚空', Null: '空',
  Holy: '神圣', Unholy: '不洁', Arcane: '奥术', Divine: '神圣',
  Demonic: '恶魔', Celestial: '天界', Abyssal: '深渊', Infernal: '地狱',
  Natural: '自然', Artificial: '人造', Synthetic: '合成', Organic: '有机',
  Living: '活体', Undead: '亡灵', Construct: '构造', Elemental: '元素',
  Dragon: '龙', Beast: '野兽', Humanoid: '人形', Monstrous: '怪物',
  Fey: '精类', Fiend: '魔类', Aberration: '异怪', Plant: '植物',
  Fungus: '真菌', Ooze: '软泥', Insect: '虫', Arachnid: '蛛',
  Fish: '鱼', Amphibian: '两栖', Reptile: '爬行', Bird: '鸟',
  Mammal: '哺乳', Primate: '灵长', Human: '人', Elf: '精灵',
  Dwarf: '矮人', Halfling: '半身人', Gnome: '侏儒', Goblin: '哥布林',
  Orc: '兽人', Ogre: '食人魔', Troll: '巨魔', Giant: '巨人',
  Titan: '泰坦', God: '神', Goddess: '女神', Deity: '神灵',
  Demon: '恶魔', Devil: '魔鬼', Angel: '天使', Archangel: '大天使',
  Fallen: '堕落', Risen: ' risen', Reborn: '重生', Resurrected: '复活',
  Immortal: '不朽', Eternal: '永恒', Ancient: '先古', Primordial: '原始',
  Elder: '长老', Young: '幼', New: '新', Old: '旧',
  Great: '大', Small: '小', Large: '大', Huge: '巨', Giant: '巨',
  Massive: '巨大', Colossal: '超大', Titanic: '泰坦',
  Tiny: '微小', Minute: '微', Nano: '纳', Pico: '皮',
  Is: '是', Not: '非', Has: '有', Have: '有', With: '带', Without: '无',
  And: '与', Or: '或', To: '到', From: '从', In: '内', On: '上',
  At: '于', By: '被', For: '为', Of: '之', The: '',
  A: '', An: '',
}

// 将驼峰命名拆分为单词并逐词翻译
function autoTranslateVar(name) {
  // 拆分驼峰命名：DamageReductionPerCard → [Damage, Reduction, Per, Card]
  const words = name.replace(/([A-Z])/g, ' $1').trim().split(/\s+/)
  const translated = words.map(w => WORD_CN[w] || w)
  return translated.join('')
}

// 将英文变量名映射为中文全称；未知变量自动翻译
function varToCn(name) {
  if (VAR_CN_MAP[name]) return VAR_CN_MAP[name]
  // 对于纯中文或短名称，直接返回
  if (/^[\u4e00-\u9fa5]+$/.test(name)) return name
  // 自动翻译
  return autoTranslateVar(name)
}

// 特殊变量映射（非数值变量，无法从代码解析）
const SPECIAL_VARS = {
  singleStarIcon: '★',
  OwnerName: '拥有者',
  ApplierName: '施加者',
}

// ============ C# 代码解析 ============

// 全局类名 → 文件路径索引（构建一次，支持多类文件）
// 解决：1) Power 类可能定义在 Cards/Relics 等其它子目录；2) 同一 .cs 文件可包含多个类定义
let _classIndex = null
function buildClassIndex() {
  if (_classIndex) return _classIndex
  _classIndex = new Map()
  const walk = (dir) => {
    if (!fs.existsSync(dir)) return
    for (const name of fs.readdirSync(dir)) {
      const full = path.join(dir, name)
      const stat = fs.statSync(full)
      if (stat.isDirectory()) {
        walk(full)
      } else if (name.endsWith('.cs')) {
        const content = fs.readFileSync(full, 'utf8')
        // 匹配文件内所有 class XxxModel : base 形式的类定义
        const re = /class\s+(\w+)\s*:/g
        let m
        while ((m = re.exec(content)) !== null) {
          const cls = m[1]
          // 只记录第一次出现（主类）；嵌套类也会被记录
          if (!_classIndex.has(cls)) _classIndex.set(cls, full)
        }
      }
    }
  }
  walk(CODE_DIR)
  return _classIndex
}

// 按类名查找代码文件（全目录搜索，不止 codeSubdir）
function findCodeFile(className) {
  const idx = buildClassIndex()
  return idx.get(className) || null
}

// 解析单个 .cs 文件，提取 CanonicalVars、MaxPp、Cost、Type、Rarity、Target、AssetProfile 等
// targetClassName: 当文件含多个类时，定位到目标类所在区段（仅解析该类成员）
function parseCsFile(filePath, targetClassName) {
  if (!fs.existsSync(filePath)) return null
  let content = fs.readFileSync(filePath, 'utf8')

  // 若指定了目标类名且文件内含多个类，截取目标类的范围
  if (targetClassName) {
    // 找到 "class <targetClassName> :" 的位置
    const classStartRe = new RegExp(`class\\s+${targetClassName}\\s*:`)
    const startMatch = content.match(classStartRe)
    if (startMatch) {
      const startIdx = startMatch.index
      // 找下一个顶级 class 定义（同缩进的 class），或文件结尾
      const after = content.slice(startIdx)
      // 下一个 "\nclass " 或 "\npublic sealed class " 等
      const nextClassRe = /\n\s*(?:public\s+|internal\s+|sealed\s+|abstract\s+|static\s+)*class\s+\w+\s*[:{]/g
      nextClassRe.lastIndex = 0
      let endIdx = content.length
      let nm
      // 跳过第一个（即目标类自己）
      const firstMatch = nextClassRe.exec(after)
      if (firstMatch && firstMatch.index > 0) {
        // 继续找下一个
        const secondMatch = nextClassRe.exec(after)
        if (secondMatch) {
          endIdx = startIdx + secondMatch.index
        }
      }
      content = content.slice(startIdx, endIdx)
    }
  }

  // 类名
  const classMatch = content.match(/class\s+(\w+)\s*:/)
  const className = classMatch ? classMatch[1] : (targetClassName || path.basename(filePath, '.cs'))

  // CanonicalMaxPp（部分卡牌有）
  const maxPpMatch = content.match(/CanonicalMaxPp\s*=>\s*(\d+)/)
  const maxPp = maxPpMatch ? parseInt(maxPpMatch[1]) : 0

  // CanonicalEnergyCost
  const costMatch = content.match(/CanonicalEnergyCost\s*=>\s*(\d+)/)
  const energyCostOverride = costMatch ? parseInt(costMatch[1]) : null

  // 卡牌构造函数 base 参数: base(cost, (CardType)X or CardType.Name, (CardRarity)Y or CardRarity.Name, (TargetType)Z or TargetType.Name)
  const baseMatch = content.match(/:\s*base\((\-?\d+),\s*(?:\(CardType\)(\d+)|CardType\.(\w+)),\s*(?:\(CardRarity\)(\d+)|CardRarity\.(\w+)),\s*(?:\(TargetType\)(\d+)|TargetType\.(\w+))\)/)
  let baseCost = baseMatch ? parseInt(baseMatch[1]) : energyCostOverride
  let cardType = baseMatch ? (baseMatch[2] || baseMatch[3]) : null
  let cardRarity = baseMatch ? (baseMatch[4] || baseMatch[5]) : null
  let targetType = baseMatch ? (baseMatch[6] || baseMatch[7]) : null

  // 基类推断（无显式构造函数时从基类推断卡牌类型/稀有度）
  const baseClassMatch = content.match(/class\s+\w+\s*:\s*(Seer\w+)(?:\s*[,{]|$)/m)
  const baseClassName = baseClassMatch ? baseClassMatch[1] : ''
  if (!cardType || !cardRarity) {
    if (baseClassName === 'SeerCurseCardBase') { cardType = cardType || 5; cardRarity = cardRarity || 9 }
    else if (baseClassName === 'SeerStatusCardBase') { cardType = cardType || 4; cardRarity = cardRarity || 8 }
    else if (baseClassName === 'SeerAncientCardBase') { cardRarity = cardRarity || 5 }
    else if (baseClassName === 'SeerEventCardBase') { cardRarity = cardRarity || 6 }
  }

  // 卡牌分类（用于按类型分组）
  let cardCategory = '角色（圣灵谱尼）牌'
  if (baseClassName === 'SeerCurseCardBase') cardCategory = '诅咒牌'
  else if (baseClassName === 'SeerStatusCardBase') cardCategory = '状态牌'
  else if (baseClassName === 'SeerColorlessCardBase' || baseClassName === 'SeerColorlessKeywordCardBase') cardCategory = '无色牌'
  else if (baseClassName === 'SeerAncientCardBase' || baseClassName === 'SeerAncientHorizontalCardBase') cardCategory = '先古牌'
  else if (baseClassName === 'SeerEventCardBase') cardCategory = '事件牌'
  else if (baseClassName === 'SeerQuestCardBase') cardCategory = '任务牌'
  // 衍生牌：CardRarity.Token 优先级最高（基类可能是 SeerKeywordCardModel）
  if (cardRarity === 'Token' || cardRarity === 7) cardCategory = '衍生牌'

  // MaxUpgradeLevel（原版默认 1，仅当显式设为 0 或无 OnUpgrade 方法时才不可升级）
  const upgradeMatch = content.match(/MaxUpgradeLevel\s*=>\s*(\d+)/)
  const hasOnUpgrade = /override\s+.*OnUpgrade\s*\(/.test(content)
  const maxUpgradeLevel = upgradeMatch ? parseInt(upgradeMatch[1]) : (hasOnUpgrade ? 1 : 0)

  // PowerType
  const powerTypeMatch = content.match(/PowerType\s+Type\s*=>\s*\(PowerType\)(\d+)/)
  const powerType = powerTypeMatch ? parseInt(powerTypeMatch[1]) : null

  // PowerStackType
  const stackTypeMatch = content.match(/PowerStackType\s+StackType\s*=>\s*\(PowerStackType\)(\d+)/)
  const stackType = stackTypeMatch ? parseInt(stackTypeMatch[1]) : null

  // IsVisibleInternal
  const visibleMatch = content.match(/IsVisibleInternal\s*=>\s*(true|false)/)
  const isVisible = visibleMatch ? visibleMatch[1] === 'true' : true

  // 怪物 MinInitialHp/MaxInitialHp
  const minHpMatch = content.match(/MinInitialHp\s*=>\s*(\d+)/)
  const maxHpMatch2 = content.match(/MaxInitialHp\s*=>\s*(\d+)/)
  const minHp = minHpMatch ? parseInt(minHpMatch[1]) : null
  const maxHp = maxHpMatch2 ? parseInt(maxHpMatch2[1]) : null

  // 怪物 AssetProfile 中的 .tscn 路径 → 提取图片目录
  const assetMatch = content.match(/MonsterAssetProfile\(["']res:\/\/seer\/scenes\/creature_visuals\/seer_(\w+)\.tscn["']\)/)
  const monsterImgDir = assetMatch ? assetMatch[1] : null

  // 充能球 PassiveVal / EvokeVal
  const passiveValMatch = content.match(/PassiveVal\s*=>\s*(?:ModifyOrbValue\()?(?:\(decimal\))?(\d+(?:\.\d+)?)m?\)?/)
  const evokeValMatch = content.match(/EvokeVal\s*=>\s*(?:ModifyOrbValue\()?(?:\(decimal\))?(\d+(?:\.\d+)?)m?\)?/)
  const passiveVal = passiveValMatch ? parseFloat(passiveValMatch[1]) : null
  const evokeVal = evokeValMatch ? parseFloat(evokeValMatch[1]) : null

  // 解析 const 字段（如 private const int MaxCombats = 7;）
  const constFields = {}
  const constRegex = /(?:private\s+|protected\s+|public\s+)?(?:const\s+)?(?:int|decimal|float|double)\s+(\w+)\s*=\s*(\d+(?:\.\d+)?)m?;/g
  let cm
  while ((cm = constRegex.exec(content)) !== null) {
    constFields[cm[1]] = parseFloat(cm[2])
  }

  // 解析 const string 字段（如 private const string _blockKey = "Block";）
  const constStrings = {}
  const constStrRegex = /(?:private\s+|protected\s+|public\s+)?const\s+string\s+(\w+)\s*=\s*"(\w+)"/g
  while ((cm = constStrRegex.exec(content)) !== null) {
    constStrings[cm[1]] = cm[2]
  }

  // CanonicalVars 解析
  // 支持以下格式：
  //   1. new DynamicVar[N] { ... };
  //   2. new DynamicVar[] { ... };
  //   3. (IEnumerable<DynamicVar>)(object)new DynamicVar[N] { ... };
  //   4. new global::_003C_003Ez__ReadOnlySingleElementList<DynamicVar>(new XxxVar(...));
  const vars = {}

  // 先尝试匹配带 { ... } 块的数组格式
  let varsContent = ''
  const varsBlockMatch = content.match(/CanonicalVars\s*=>\s*(?:\(IEnumerable<DynamicVar>\)\(object\))?\s*new DynamicVar\[\d*\]\s*\{([\s\S]*?)\};/)
  if (varsBlockMatch) {
    varsContent = varsBlockMatch[1]
  } else {
    // 尝试匹配 ReadOnlySingleElementList 格式（单行）
    const singleMatch = content.match(/CanonicalVars\s*=>\s*new global::_003C_003Ez__ReadOnlySingleElementList<DynamicVar>\(([\s\S]*?)\);/)
    if (singleMatch) {
      varsContent = singleMatch[1]
    } else {
      // 尝试匹配其他单行格式
      const singleLineMatch = content.match(/CanonicalVars\s*=>\s*new\s+\w+(?:<[^>]+>)?\(([\s\S]*?)\);/)
      if (singleLineMatch) {
        varsContent = singleLineMatch[1]
      }
    }
  }

  if (varsContent) {
    let m

    // 1. new DynamicVar("Name", value) / new DynamicVar("Name", valuem) / new DynamicVar("Name", -2m)
    //    同时处理负数值
    const dynamicVarRegex = /new DynamicVar\("(\w+)",\s*(-?\d+(?:\.\d+)?)m?\)/g
    while ((m = dynamicVarRegex.exec(varsContent)) !== null) {
      vars[m[1]] = parseFloat(m[2])
    }

    // 2. new DynamicVar("Name", CanonicalMaxPp) - 无 (decimal) 转换的引用
    const bareRefRegex = /new DynamicVar\("(\w+)",\s*CanonicalMaxPp\)/g
    while ((m = bareRefRegex.exec(varsContent)) !== null) {
      vars[m[1]] = maxPp
    }

    // 3. new DynamicVar("Name", (decimal)CanonicalMaxPp) 或 (decimal)SomeField
    const fieldRefRegex = /new DynamicVar\("(\w+)",\s*\(decimal\)([A-Za-z_]\w*)\)/g
    while ((m = fieldRefRegex.exec(varsContent)) !== null) {
      const name = m[1]
      const fieldName = m[2]
      if (fieldName === 'CanonicalMaxPp') {
        vars[name] = maxPp
      } else if (constFields[fieldName] !== undefined) {
        vars[name] = constFields[fieldName]
      } else {
        // 尝试 _base* 模式：CurrentFixedDamage → _baseFixedDamage
        const baseName = '_base' + fieldName.replace(/^Current/, '')
        if (constFields[baseName] !== undefined) {
          vars[name] = constFields[baseName]
        }
      }
    }

    // 4. new DynamicVar(_fieldKey, value) - 使用 const string 字段引用作为名称
    const fieldKeyRegex = /new DynamicVar\((\w+),\s*(-?\d+(?:\.\d+)?)m?\)/g
    while ((m = fieldKeyRegex.exec(varsContent)) !== null) {
      const keyField = m[1]
      const value = parseFloat(m[2])
      // 如果是 const string 字段，解析出实际名称
      if (constStrings[keyField]) {
        vars[constStrings[keyField]] = value
      }
    }

    // 5. DamageVar - 多种构造函数格式
    // 5a. new DamageVar("Damage", value m, ...) - 3参数，带名称
    const damageVar3Regex = /new DamageVar\("(\w+)",\s*(-?\d+(?:\.\d+)?)m?,/g
    while ((m = damageVar3Regex.exec(varsContent)) !== null) {
      vars[m[1]] = parseFloat(m[2])
    }
    // 5b. new DamageVar(value m, ...) - 2参数，无名称，默认 "Damage"
    const damageVar2Regex = /new DamageVar\((-?\d+(?:\.\d+)?)m?,/g
    while ((m = damageVar2Regex.exec(varsContent)) !== null) {
      if (vars['Damage'] === undefined) vars['Damage'] = parseFloat(m[1])
    }

    // 6. BlockVar - 多种构造函数格式
    // 6a. new BlockVar("Block", value m, ...) - 3参数，带名称
    const blockVar3Regex = /new BlockVar\("(\w+)",\s*(-?\d+(?:\.\d+)?)m?,/g
    while ((m = blockVar3Regex.exec(varsContent)) !== null) {
      vars[m[1]] = parseFloat(m[2])
    }
    // 6b. new BlockVar(value m, ...) - 2参数，无名称，默认 "Block"
    const blockVar2Regex = /new BlockVar\((-?\d+(?:\.\d+)?)m?,/g
    while ((m = blockVar2Regex.exec(varsContent)) !== null) {
      if (vars['Block'] === undefined) vars['Block'] = parseFloat(m[1])
    }
    // 6c. new BlockVar(value m) - 单参数
    const blockVar1Regex = /new BlockVar\((-?\d+(?:\.\d+)?)m?\)/g
    while ((m = blockVar1Regex.exec(varsContent)) !== null) {
      if (vars['Block'] === undefined) vars['Block'] = parseFloat(m[1])
    }

    // 7. GoldVar(value) → vars["Gold"]
    const goldVarRegex = /new GoldVar\((\d+)\)/g
    while ((m = goldVarRegex.exec(varsContent)) !== null) {
      vars['Gold'] = parseInt(m[1])
    }

    // 8. HealVar(value) → vars["Heal"]
    const healVarRegex = /new HealVar\((-?\d+(?:\.\d+)?)m?\)/g
    while ((m = healVarRegex.exec(varsContent)) !== null) {
      vars['Heal'] = parseFloat(m[1])
    }

    // 9. new DynamicVar(stringField, valueField) - 两个字段都是引用
    //    如 new DynamicVar(_hpLossKey, BaseHpLoss) → vars["HpLoss"] = 12
    const fieldFieldRegex = /new DynamicVar\((\w+),\s*([A-Z]\w*)\)/g
    while ((m = fieldFieldRegex.exec(varsContent)) !== null) {
      const keyField = m[1]
      const valueField = m[2]
      const varName = constStrings[keyField] || keyField
      if (constFields[valueField] !== undefined) {
        vars[varName] = constFields[valueField]
      }
    }

    // 10. new DamageVar(valueField, ...) - 值为字段引用
    //     如 new DamageVar(BaseDamage, (ValueProp)8) → vars["Damage"] = 5
    const damageVarFieldRegex = /new DamageVar\(([A-Z]\w*),/g
    while ((m = damageVarFieldRegex.exec(varsContent)) !== null) {
      const valueField = m[1]
      if (constFields[valueField] !== undefined && vars['Damage'] === undefined) {
        vars['Damage'] = constFields[valueField]
      }
    }

    // 11. new BlockVar(valueField, ...) - 值为字段引用
    const blockVarFieldRegex = /new BlockVar\(([A-Z]\w*),/g
    while ((m = blockVarFieldRegex.exec(varsContent)) !== null) {
      const valueField = m[1]
      if (constFields[valueField] !== undefined && vars['Block'] === undefined) {
        vars['Block'] = constFields[valueField]
      }
    }

    // 12. ForgeVar(value) → vars["Forge"]
    //     如 (DynamicVar)new ForgeVar(1) → vars["Forge"] = 1
    const forgeVarRegex = /new ForgeVar\((-?\d+(?:\.\d+)?)m?\)/g
    while ((m = forgeVarRegex.exec(varsContent)) !== null) {
      vars['Forge'] = parseFloat(m[1])
    }

    // 13. CardsVar(value) → vars["Cards"]
    //     如 new CardsVar(3) → vars["Cards"] = 3
    const cardsVarRegex = /new CardsVar\((-?\d+(?:\.\d+)?)m?\)/g
    while ((m = cardsVarRegex.exec(varsContent)) !== null) {
      vars['Cards'] = parseFloat(m[1])
    }
  }

  // 充能球：把 PassiveVal/EvokeVal 注入 vars，供本地化 {Passive}/{Evoke} 替换
  if (passiveVal !== null && vars['Passive'] === undefined) vars['Passive'] = passiveVal
  if (evokeVal !== null && vars['Evoke'] === undefined) vars['Evoke'] = evokeVal

  // OnUpgrade 中的变化
  const upgradeChanges = {}
  const onUpgradeMatch = content.match(/override\s+void\s+OnUpgrade\(\)\s*\{([\s\S]*?)\n\s*\}/)
  if (onUpgradeMatch) {
    const upgradeContent = onUpgradeMatch[1]
    // 支持 =（赋值）、+=（增量）、-=（减量）三种形式
    const changeRegex = /DynamicVars\["(\w+)"\]\.BaseValue\s*(\+=|-=|=)\s*(\d+(?:\.\d+)?)m?/g
    let m
    while ((m = changeRegex.exec(upgradeContent)) !== null) {
      const varName = m[1]
      const op = m[2] // "=", "+=", "-="
      const num = parseFloat(m[3])
      if (op === '+=') {
        upgradeChanges[varName] = (vars[varName] || 0) + num
      } else if (op === '-=') {
        upgradeChanges[varName] = (vars[varName] || 0) - num
      } else {
        // 直接赋值
        upgradeChanges[varName] = num
      }
    }
    // UpgradeValueBy 形式：DynamicVars["X"].UpgradeValueBy(num)
    const upgradeByRegex = /DynamicVars\["(\w+)"\]\.UpgradeValueBy\s*\(\s*(\d+(?:\.\d+)?)m?\s*\)/g
    while ((m = upgradeByRegex.exec(upgradeContent)) !== null) {
      const varName = m[1]
      const num = parseFloat(m[2])
      upgradeChanges[varName] = (vars[varName] || 0) + num
    }
    // AddKeyword 等其他升级变化（暂不解析，只关注数值）
  }

  return {
    className,
    entry: `SEER_${className.toUpperCase()}`,
    maxPp,
    energyCost: baseCost,
    cardType,
    cardRarity,
    targetType,
    maxUpgradeLevel,
    powerType,
    stackType,
    isVisible,
    minHp,
    maxHp,
    monsterImgDir,
    passiveVal,
    evokeVal,
    vars,
    upgradeChanges,
    cardCategory,
    baseClassName
  }
}

// ============ 描述处理 ============

// 处理 {IfUpgraded:show:content|} 块
// 升级时显示 content，不升级时移除整块
function processIfUpgraded(text, isUpgraded) {
  if (!text) return ''
  let result = ''
  let i = 0
  const marker = '{IfUpgraded:show:'
  while (i < text.length) {
    if (text.startsWith(marker, i)) {
      let depth = 1
      i += marker.length
      let inner = ''
      while (i < text.length && depth > 0) {
        const c = text[i]
        if (c === '{') depth++
        else if (c === '}') {
          depth--
          if (depth === 0) break
        }
        inner += c
        i++
      }
      if (i < text.length) i++ // 跳过最后的 }
      // {IfUpgraded:show:content|} 格式：content 在升级时显示
      // 若有 | 分隔符，| 前为升级时显示，| 后为不升级时显示
      const pipeIdx = findPipeTopLevel(inner)
      if (pipeIdx >= 0) {
        const showPart = inner.slice(0, pipeIdx)
        const hidePart = inner.slice(pipeIdx + 1)
        result += isUpgraded ? showPart : hidePart
      } else {
        // 无 | 分隔符，升级时显示全部，不升级时移除
        if (isUpgraded) result += inner
      }
    } else {
      result += text[i]
      i++
    }
  }
  return result
}

// 在 IfUpgraded 内部找顶层 | 分隔符
function findPipeTopLevel(text) {
  let depth = 0
  for (let i = 0; i < text.length; i++) {
    const c = text[i]
    if (c === '{') depth++
    else if (c === '}') depth--
    else if (c === '|' && depth === 0) return i
  }
  return -1
}

// 替换 {VarName} 和 {VarName:diff()} / {VarName:abs()} / {VarName:cond:...} 等为实际数值
// 对于 :cond: 等条件块，若无法解析，移除整个条件块以避免乱码
function replaceVars(text, vars) {
  if (!text) return ''
  let result = ''
  let i = 0
  while (i < text.length) {
    if (text[i] === '{') {
      // 找匹配的 }
      let depth = 1
      let j = i + 1
      while (j < text.length && depth > 0) {
        if (text[j] === '{') depth++
        else if (text[j] === '}') depth--
        if (depth === 0) break
        j++
      }
      if (depth === 0) {
        const inner = text.slice(i + 1, j)
        const replacement = resolveVarExpr(inner, vars)
        result += replacement
        i = j + 1
      } else {
        // 没有匹配的 }，原样输出
        result += text[i]
        i++
      }
    } else {
      result += text[i]
      i++
    }
  }
  return result
}

// 解析变量表达式 inner（{} 内的内容，不含外层括号）
function resolveVarExpr(inner, vars) {
  // 形如 VarName
  if (/^\w+$/.test(inner)) {
    if (vars[inner] !== undefined) return String(vars[inner])
    if (SPECIAL_VARS[inner]) return SPECIAL_VARS[inner]
    // 运行时字段（Power.Amount 等）- 用中文"层数"替代，避免显示英文
    if (inner === 'Amount' || inner === 'Turns') return '层数'
    return ''  // 其他未知变量返回空字符串，避免乱码
  }
  // 形如 VarName:diff() 或 VarName:abs()
  const simpleFn = inner.match(/^(\w+):(diff|abs)\(\)$/)
  if (simpleFn) {
    const name = simpleFn[1]
    if (vars[name] !== undefined) return String(vars[name])
    if (SPECIAL_VARS[name]) return SPECIAL_VARS[name]
    if (name === 'Amount' || name === 'Turns') return '层数'
    return ''
  }
  // 形如 VarName:cond:x?y|z  或  VarName.StringValue:cond:x|y
  // 复杂条件块：
  //  - 若变量在 vars 中有值，取"真"分支（| 前）
  //  - 若变量不在 vars 中（如 StringValue 引用卡牌名），取"假"分支（| 后）
  const condMatch = inner.match(/^(\w+)(?:\.StringValue)?:cond:(.+)$/s)
  if (condMatch) {
    const varName = condMatch[1]
    const body = condMatch[2]
    const hasVar = vars[varName] !== undefined
    // 形如 x?y|z：条件 ? 真值 | 假值
    const qIdx = body.indexOf('?')
    if (qIdx >= 0) {
      const pipeIdx = body.indexOf('|', qIdx)
      if (pipeIdx >= 0) {
        const truePart = body.slice(qIdx + 1, pipeIdx)
        const falsePart = body.slice(pipeIdx + 1)
        return hasVar ? truePart : falsePart
      }
      return body.slice(qIdx + 1)
    }
    // 无 ?，仅有 | 分隔：真值 | 假值
    const pipeIdx = body.indexOf('|')
    if (pipeIdx >= 0) {
      const truePart = body.slice(0, pipeIdx)
      const falsePart = body.slice(pipeIdx + 1)
      return hasVar ? truePart : falsePart
    }
    return body
  }
  // 形如 VarName:StringValue  → 返回变量值
  const svMatch = inner.match(/^(\w+)\.StringValue$/)
  if (svMatch) {
    const name = svMatch[1]
    if (vars[name] !== undefined) return String(vars[name])
    return ''
  }
  // 形如 energyPrefix:energyIcons(N)  → 显示能量图标（用文字"能量"N替代）
  const energyMatch = inner.match(/^energyPrefix:energyIcons\((\d+)\)$/)
  if (energyMatch) {
    return `能量${energyMatch[1]}`
  }
  // 形如 Energy:energyIcons()  → 能量1
  const energyMatch2 = inner.match(/^(\w+):energyIcons\(\)$/)
  if (energyMatch2) {
    return '能量1'
  }
  // 其他未知格式，返回空字符串避免乱码
  return ''
}

// 颜色标记转 HTML span
function colorTags(text) {
  if (!text) return ''
  return text
    .replace(/\[blue\]/g, '<span style="color:#3aa675;font-weight:600">')
    .replace(/\[\/blue\]/g, '</span>')
    .replace(/\[red\]/g, '<span style="color:#d44;font-weight:600">')
    .replace(/\[\/red\]/g, '</span>')
    .replace(/\[gold\]/g, '<span style="color:#d4a017;font-weight:600">')
    .replace(/\[\/gold\]/g, '</span>')
    .replace(/\[purple\]/g, '<span style="color:#9b59b6;font-weight:600">')
    .replace(/\[\/purple\]/g, '</span>')
    .replace(/\[green\]/g, '<span style="color:#5a9e2e;font-weight:600">')
    .replace(/\[\/green\]/g, '</span>')
    .replace(/\[sine\]/g, '<i>')
    .replace(/\[\/sine\]/g, '</i>')
}

// 完整描述处理：IfUpgraded + 变量替换 + 颜色标记
function processDesc(text, vars, isUpgraded) {
  if (!text) return ''
  let result = processIfUpgraded(text, isUpgraded)
  result = replaceVars(result, vars)
  result = colorTags(result)
  // 换行处理
  result = result.replace(/\n/g, '<br/>')
  return result
}

// 表格用纯文本描述（移除 HTML 标签和颜色标记）
function plainDesc(text, vars) {
  if (!text) return ''
  let result = processIfUpgraded(text, false)
  result = replaceVars(result, vars)
  result = result
    .replace(/\[\/?(?:blue|red|gold|purple|green|sine)\]/g, '')
    .replace(/\n/g, ' ')
    .replace(/\|/g, '\\|')
    .replace(/\{Amount\}/g, '层数')
    .replace(/\{Turns\}/g, '层数')
    .replace(/\{\w+\}/g, '')  // 移除其他未替换的变量
  return result
}

// ============ 图片处理 ============

// 查找卡牌图片（在 packed/card_portraits/seer, seer_curse, seer_quest 下）
// mod 图片名都是 seer_<name>.png，snakeName 已去掉 SEER_ 前缀，需补回 seer_ 前缀
function findCardImage(snakeName) {
  const fullName = `seer_${snakeName}`
  const subdirs = ['seer', 'seer_curse', 'seer_quest']
  for (const sub of subdirs) {
    const p = path.join(CARD_IMG_DIR, sub, `${fullName}.png`)
    if (fs.existsSync(p)) return p
  }
  // 备选：无 seer_ 前缀
  for (const sub of subdirs) {
    const p = path.join(CARD_IMG_DIR, sub, `${snakeName}.png`)
    if (fs.existsSync(p)) return p
  }
  return null
}

// 查找遗物图片（在 images/relics/ 下，名为 seer_<name>.png）
function findRelicImage(snakeName) {
  const fullName = `seer_${snakeName}`
  const p = path.join(IMG_ROOT, 'relics', `${fullName}.png`)
  if (fs.existsSync(p)) return p
  // 备选：无 seer_ 前缀
  const p2 = path.join(IMG_ROOT, 'relics', `${snakeName}.png`)
  if (fs.existsSync(p2)) return p2
  return null
}

// 查找能力图片（在 images/powers/ 下，名为 seer_<name>.png）
function findPowerImage(snakeName) {
  const fullName = `seer_${snakeName}`
  const p = path.join(IMG_ROOT, 'powers', `${fullName}.png`)
  if (fs.existsSync(p)) return p
  // 备选：无 seer_ 前缀
  const p2 = path.join(IMG_ROOT, 'powers', `${snakeName}.png`)
  if (fs.existsSync(p2)) return p2
  return null
}

// 查找充能球图片（在 images/orbs/ 下，名为 seer_<name>.png）
function findOrbImage(snakeName) {
  const fullName = `seer_${snakeName}`
  const p = path.join(IMG_ROOT, 'orbs', `${fullName}.png`)
  if (fs.existsSync(p)) return p
  // 备选：无 seer_ 前缀
  const p2 = path.join(IMG_ROOT, 'orbs', `${snakeName}.png`)
  if (fs.existsSync(p2)) return p2
  return null
}

// 查找怪物图片（在 images/monsters/<dir>/idle/1.png 下，dir 由代码 .tscn 路径提取）
function findMonsterImage(monsterImgDir) {
  if (!monsterImgDir) return null
  const p = path.join(IMG_ROOT, 'monsters', monsterImgDir, 'idle', '1.png')
  if (fs.existsSync(p)) return p
  // 备选：取 idle 目录第一张
  const idleDir = path.join(IMG_ROOT, 'monsters', monsterImgDir, 'idle')
  if (fs.existsSync(idleDir)) {
    const files = fs.readdirSync(idleDir).filter(f => f.endsWith('.png'))
    if (files.length > 0) return path.join(idleDir, files[0])
  }
  return null
}

// 查找角色图片（在 images/character/ 下，谱尼）
function findCharacterImage(snakeName) {
  // 谱尼角色图可能在 character 或 character_select 目录
  const candidates = [
    path.join(IMG_ROOT, 'character', `${snakeName}.png`),
    path.join(IMG_ROOT, 'character_select', `${snakeName}.png`),
    path.join(IMG_ROOT, 'packed', 'character_select', `${snakeName}.png`)
  ]
  for (const p of candidates) {
    if (fs.existsSync(p)) return p
  }
  return null
}

// 生成红色占位图（SKILL.md 规则：图片缺失用红色占位图，不能省略）
function generateRedPlaceholder(destPath) {
  const width = 256
  const height = 256
  const signature = Buffer.from([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A])
  const ihdrData = Buffer.alloc(13)
  ihdrData.writeUInt32BE(width, 0)
  ihdrData.writeUInt32BE(height, 4)
  ihdrData[8] = 8   // bit depth
  ihdrData[9] = 2   // color type (RGB)
  ihdrData[10] = 0  // compression
  ihdrData[11] = 0  // filter
  ihdrData[12] = 0  // interlace
  const rowSize = width * 3 + 1
  const rawData = Buffer.alloc(rowSize * height)
  for (let y = 0; y < height; y++) {
    rawData[y * rowSize] = 0
    for (let x = 0; x < width; x++) {
      const offset = y * rowSize + 1 + x * 3
      rawData[offset] = 0xD4     // R
      rawData[offset + 1] = 0x44 // G
      rawData[offset + 2] = 0x44 // B
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
      for (let j = 0; j < 8; j++) {
        crc = (crc >>> 1) ^ (0xEDB88320 & -(crc & 1))
      }
    }
    crc = (crc ^ 0xFFFFFFFF) >>> 0
    crcBuf.writeUInt32BE(crc, 0)
    return Buffer.concat([lenBuf, typeBuf, data, crcBuf])
  }
  const png = Buffer.concat([
    signature,
    makeChunk('IHDR', ihdrData),
    makeChunk('IDAT', compressedData),
    makeChunk('IEND', Buffer.alloc(0))
  ])
  fs.writeFileSync(destPath, png)
}

// 拷贝图片到 public 目录，返回公开访问路径
// 若 srcPath 为 null，生成红色占位图（SKILL.md 规则）
function copyImage(srcPath, category, snakeName) {
  const destDir = path.join(PUBLIC_DIR, 'images', category)
  fs.mkdirSync(destDir, { recursive: true })
  const destPath = path.join(destDir, `${snakeName}.png`)
  if (srcPath && fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath)
  } else {
    try {
      generateRedPlaceholder(destPath)
    } catch (e) {
      console.warn(`[warn] 无法生成占位图: ${destPath} - ${e.message}`)
      return null
    }
  }
  return `/images/${category}/${snakeName}.png`
}

// 递归删除目录
function rmrf(dir) {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true })
  }
}

// 清理旧生成内容，保留手动创建的文件
function cleanGeneratedContent() {
  console.log('[clean] 清理旧生成内容...')
  // 清理生成的分类目录
  for (const cat of Object.values(CATEGORY_MAP)) {
    const dir = path.join(DOCS_DIR, cat.dir)
    rmrf(dir)
  }
  // 清理图片目录
  rmrf(path.join(PUBLIC_DIR, 'images'))
  console.log('[clean] 完成')
}

// ============ 枚举映射 ============

// 枚举映射（依据原版源码 CardType.cs / CardRarity.cs / TargetType.cs）
const CARD_TYPE_MAP = {
  0: '无', 1: '攻击', 2: '技能', 3: '能力', 4: '状态', 5: '诅咒', 6: '任务',
  None: '无', Attack: '攻击', Skill: '技能', Power: '能力', Status: '状态', Curse: '诅咒', Quest: '任务'
}

const CARD_RARITY_MAP = {
  0: '无', 1: '基础', 2: '普通', 3: '罕见', 4: '稀有',
  5: '先古', 6: '事件', 7: '衍生', 8: '状态', 9: '诅咒', 10: '任务',
  None: '无', Basic: '基础', Common: '普通', Uncommon: '罕见', Rare: '稀有',
  Ancient: '先古', Event: '事件', Token: '衍生', Status: '状态', Curse: '诅咒', Quest: '任务'
}

const TARGET_TYPE_MAP = {
  0: '无', 1: '自身', 2: '敌方单体', 3: '所有敌方', 4: '随机敌方',
  5: '任意玩家', 6: '任意队友', 7: '所有队友', 8: '指定非生物', 9: '奥斯提',
  None: '无', Self: '自身', AnyEnemy: '敌方单体', AllEnemies: '所有敌方', RandomEnemy: '随机敌方',
  AnyPlayer: '任意玩家', AnyAlly: '任意队友', AllAllies: '所有队友', TargetedNoCreature: '指定非生物', Osty: '奥斯提'
}

const POWER_TYPE_MAP = {
  1: '增益', 2: '减益', 3: '中性'
}

const STACK_TYPE_MAP = {
  1: '递减', 2: '叠加', 3: '替换'
}

// ============ 页面生成 ============

const CATEGORY_MAP = {
  CARD: { dir: 'cards', label: '卡牌', codeSubdir: 'Cards' },
  RELIC: { dir: 'relics', label: '遗物', codeSubdir: 'Relics' },
  POWER: { dir: 'powers', label: '能力', codeSubdir: 'Powers' },
  ORB: { dir: 'orbs', label: '充能球', codeSubdir: 'Orbs' },
  MONSTER: { dir: 'monsters', label: '怪物', codeSubdir: 'Monsters' },
  CHARACTER: { dir: 'characters', label: '角色', codeSubdir: 'Characters' }
}

// 卡牌分类 → 子目录映射（卡牌按分类存放在子目录中）
const CARD_SUBDIR_MAP = {
  '角色（圣灵谱尼）牌': 'character',
  '先古牌': 'ancient',
  '诅咒牌': 'curse',
  '状态牌': 'status',
  '无色牌': 'colorless',
  '事件牌': 'event',
  '衍生牌': 'token',
  '任务牌': 'quest',
}

// 根据卡牌分类获取子目录名
function getCardSubdir(cardCategory) {
  return CARD_SUBDIR_MAP[cardCategory] || 'character'
}

// 生成单个条目的 Markdown 页面
function generateEntryPage(entry, info, codeData, category) {
  const cat = CATEGORY_MAP[category]
  const snake = toSnakeCase(entry)
  const title = info.fields.title || info.fields.name || entry
  const desc = info.fields.description || info.fields.smartDescription || ''
  const descUp = info.fields.description_upgraded || ''
  const smart = info.fields.smartDescription || ''
  const flavor = info.fields.flavor || ''

  // 升级后的变量
  const upgradedVars = { ...codeData.vars }
  if (codeData.upgradeChanges) {
    for (const [k, v] of Object.entries(codeData.upgradeChanges)) {
      upgradedVars[k] = v
    }
  }

  const lines = [
    `# ${title}`,
    ''
  ]

  // 图片查找与拷贝（缺失时自动生成红色占位图）
  let imgPath = null
  if (category === 'CARD') {
    imgPath = findCardImage(snake)
  } else if (category === 'RELIC') {
    imgPath = findRelicImage(snake)
  } else if (category === 'POWER') {
    imgPath = findPowerImage(snake)
  } else if (category === 'ORB') {
    imgPath = findOrbImage(snake)
  } else if (category === 'MONSTER') {
    imgPath = findMonsterImage(codeData.monsterImgDir)
  } else if (category === 'CHARACTER') {
    imgPath = findCharacterImage(snake)
  }
  // 始终调用 copyImage，缺失时生成红色占位图
  const publicPath = copyImage(imgPath, cat.dir, snake)
  if (publicPath) {
    const safeTitle = escapeHtmlAttr(title)
    lines.push(`<img src="${publicPath}" alt="${safeTitle}" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />`)
    lines.push('')
  }

  // 基本信息
  lines.push('## 基本信息')
  lines.push('')
  if (category === 'CARD') {
    if (codeData.cardCategory) {
      lines.push(`- **分类**: ${codeData.cardCategory}`)
    }
    if (codeData.maxPp > 0) {
      lines.push(`- **最大PP**: ${codeData.maxPp}`)
    }
    if (codeData.energyCost !== null && codeData.energyCost !== undefined) {
      lines.push(`- **能量消耗**: ${codeData.energyCost < 0 ? '不可打出' : codeData.energyCost}`)
    }
    if (codeData.cardType !== null) {
      lines.push(`- **类型**: ${CARD_TYPE_MAP[codeData.cardType] || codeData.cardType}`)
    }
    if (codeData.cardRarity !== undefined && codeData.cardRarity !== null) {
      lines.push(`- **稀有度**: ${CARD_RARITY_MAP[codeData.cardRarity] || codeData.cardRarity}`)
    }
    if (codeData.targetType !== null) {
      lines.push(`- **目标**: ${TARGET_TYPE_MAP[codeData.targetType] || codeData.targetType}`)
    }
    if (codeData.maxUpgradeLevel > 0) {
      lines.push(`- **可升级**: 是（${codeData.maxUpgradeLevel} 级）`)
    } else {
      lines.push(`- **可升级**: 否`)
    }
  } else if (category === 'POWER') {
    if (codeData.powerType !== null) {
      lines.push(`- **类型**: ${POWER_TYPE_MAP[codeData.powerType] || codeData.powerType}`)
    }
    if (codeData.stackType !== null) {
      lines.push(`- **叠加方式**: ${STACK_TYPE_MAP[codeData.stackType] || codeData.stackType}`)
    }
    lines.push(`- **可见**: ${codeData.isVisible ? '是' : '否'}`)
  } else if (category === 'MONSTER') {
    if (codeData.minHp !== null && codeData.maxHp !== null) {
      lines.push(`- **生命值**: ${codeData.minHp} - ${codeData.maxHp}`)
    }
  }

  // 数值参数表（用中文全称）
  if (codeData.vars && Object.keys(codeData.vars).length > 0) {
    lines.push('')
    lines.push('### 数值参数')
    lines.push('')
    lines.push('| 参数 | 数值 |')
    lines.push('|---|---|')
    for (const [k, v] of Object.entries(codeData.vars)) {
      lines.push(`| ${varToCn(k)} | ${v} |`)
    }
  }
  lines.push('')

  // 描述（保留本地化原文，仅替换变量为数值）
  if (desc) {
    lines.push('## 描述')
    lines.push('')
    const processedDesc = processDesc(desc, codeData.vars, false)
    lines.push(processedDesc)
    lines.push('')
  }

  // 升级后描述
  if (descUp) {
    lines.push('## 升级后')
    lines.push('')
    const processedDescUp = processDesc(descUp, upgradedVars, true)
    lines.push(processedDescUp)
    lines.push('')
  } else if (codeData.maxUpgradeLevel > 0 && Object.keys(codeData.upgradeChanges || {}).length > 0) {
    lines.push('## 升级后')
    lines.push('')
    lines.push('升级后参数变化：')
    lines.push('')
    for (const [k, v] of Object.entries(codeData.upgradeChanges)) {
      const oldVal = codeData.vars[k] !== undefined ? codeData.vars[k] : '?'
      lines.push(`- ${varToCn(k)}: ${oldVal} → ${v}`)
    }
    lines.push('')
  }

  // 智能描述
  if (smart && smart !== desc) {
    lines.push('## 智能描述')
    lines.push('')
    lines.push(processDesc(smart, codeData.vars, false))
    lines.push('')
  }

  // 风味文字
  if (flavor) {
    lines.push('## 风味文字')
    lines.push('')
    lines.push(processDesc(flavor, codeData.vars, false))
    lines.push('')
  }

  // 源码文件
  if (codeData.className) {
    lines.push('## 源码')
    lines.push('')
    lines.push(`- \`${codeData.className}.cs\``)
    lines.push('')
  }

  return { snake, title, content: lines.join('\n'), imgPath: publicPath }
}

// HTML 属性转义：将 " < > & 转义为 HTML 实体，避免破坏 HTML 结构
function escapeHtmlAttr(s) {
  if (s == null) return ''
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

// HTML 文本转义（用于 <td> 文本内容，保留中文标点）
function escapeHtmlText(s) {
  if (s == null) return ''
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

// 生成总览页 all.md
function generateAllPage(category, entryList) {
  const cat = CATEGORY_MAP[category]
  const allLines = [
    `# 全部${cat.label}（${entryList.length} 项）`,
    '',
    `共 ${entryList.length} 个${cat.label}。点击条目查看详情。`,
    ''
  ]

  // 卡牌：按 cardCategory 分组展示
  if (category === 'CARD') {
    const order = ['角色（圣灵谱尼）牌', '先古牌', '诅咒牌', '状态牌', '无色牌', '事件牌', '衍生牌', '任务牌']
    const groups = {}
    for (const e of entryList) {
      const c = e.cardCategory || '角色（圣灵谱尼）牌'
      if (!groups[c]) groups[c] = []
      groups[c].push(e)
    }
    // 其他未分类的放最后
    for (const c of Object.keys(groups)) {
      if (!order.includes(c)) order.push(c)
    }

    // 目录
    allLines.push('## 目录')
    allLines.push('')
    for (const c of order) {
      if (!groups[c]) continue
      const anchor = c.toLowerCase().replace(/[^\u4e00-\u9fa5a-z0-9]/g, '')
      allLines.push(`- [${c}（${groups[c].length} 项）](#${anchor})`)
    }
    allLines.push('')

    for (const c of order) {
      if (!groups[c]) continue
      const items = groups[c]
      allLines.push(`## ${c}（${items.length} 项）`)
      allLines.push('')
      allLines.push('<table>')
      allLines.push('<thead><tr><th>图片</th><th>名称</th><th>效果</th></tr></thead>')
      allLines.push('<tbody>')
      for (const { snake, title, desc, imgPath, subdir } of items) {
        const imgSrc = imgPath || `/images/${cat.dir}/${snake}.png`
        const safeTitle = escapeHtmlAttr(title)
        const safeDesc = escapeHtmlText(desc)
        const linkHref = subdir ? `/cards/${subdir}/${snake}` : snake
        allLines.push(`<tr><td><img src="${imgSrc}" alt="${safeTitle}" style="width:80px;height:auto" /></td><td><a href="${linkHref}">${safeTitle}</a></td><td>${safeDesc}</td></tr>`)
      }
      allLines.push('</tbody></table>')
      allLines.push('')
    }
    return allLines.join('\n')
  }

  // 其他类型：原样平铺
  allLines.push('<table>')
  allLines.push('<thead><tr><th>图片</th><th>名称</th><th>效果</th></tr></thead>')
  allLines.push('<tbody>')
  for (const { snake, title, desc, imgPath } of entryList) {
    const imgSrc = imgPath || `/images/${cat.dir}/${snake}.png`
    const safeTitle = escapeHtmlAttr(title)
    const safeDesc = escapeHtmlText(desc)
    allLines.push(`<tr><td><img src="${imgSrc}" alt="${safeTitle}" style="width:80px;height:auto" /></td><td><a href="${snake}">${safeTitle}</a></td><td>${safeDesc}</td></tr>`)
  }
  allLines.push('</tbody></table>')
  allLines.push('')

  return allLines.join('\n')
}

// 生成 index.md
function generateIndexPage(category, count) {
  const cat = CATEGORY_MAP[category]
  const lines = [
    `# ${cat.label}图鉴`,
    '',
    `Seer Mod 共包含 ${count} 个${cat.label}。`,
    '',
    `- [查看全部${cat.label}](all)`,
    ''
  ]
  return lines.join('\n')
}

// ============ 主流程 ============

function generate() {
  // 清理旧生成内容
  cleanGeneratedContent()

  const files = ['cards.json', 'relics.json', 'powers.json', 'orbs.json', 'monsters.json', 'characters.json']
  const stats = {}

  for (const file of files) {
    const fp = path.join(LOC_DIR, file)
    if (!fs.existsSync(fp)) {
      console.log(`[skip] ${file} 不存在`)
      continue
    }
    const data = readJson(fp)
    const entries = {}

    for (const [key, value] of Object.entries(data)) {
      const parsed = parseKey(key)
      if (!parsed) continue
      const { category, entry, field } = parsed
      if (!CATEGORY_MAP[category]) continue
      if (!entries[entry]) entries[entry] = { category, fields: {} }
      entries[entry].fields[field] = value
    }

    const category = Object.values(entries)[0]?.category
    if (!category) continue
    const cat = CATEGORY_MAP[category]
    const outDir = path.join(DOCS_DIR, cat.dir)
    fs.mkdirSync(outDir, { recursive: true })

    const entryList = Object.entries(entries).sort((a, b) => a[0].localeCompare(b[0]))
    stats[category] = { total: entryList.length, withImg: 0, withCode: 0 }

    const allEntries = []

    for (const [entry, info] of entryList) {
      const snake = toSnakeCase(entry)
      const title = info.fields.title || info.fields.name || entry

      // 查找对应的 .cs 代码文件（全目录搜索，支持多类文件）
      const className = entryToClassName(entry, category)
      const codeFile = findCodeFile(className)
      const parsedCode = codeFile ? parseCsFile(codeFile, className) : null
      // 孤儿条目（本地化存在但代码不存在）跳过，避免生成空数值页面
      if (!parsedCode) {
        console.warn(`[skip] 孤儿条目，无代码: ${entry} -> ${className}`)
        continue
      }
      const codeData = parsedCode

      if (parsedCode) stats[category].withCode++

      // 生成页面
      const page = generateEntryPage(entry, info, codeData, category)
      // 卡牌按分类存放到子目录，其他类型直接放到分类目录
      let entryOutDir = outDir
      if (category === 'CARD') {
        const subdir = getCardSubdir(codeData.cardCategory || '角色（圣灵谱尼）牌')
        entryOutDir = path.join(outDir, subdir)
        fs.mkdirSync(entryOutDir, { recursive: true })
      }
      fs.writeFileSync(path.join(entryOutDir, `${snake}.md`), page.content, 'utf8')

      // 收集总览信息
      const descShort = plainDesc(info.fields.description || info.fields.smartDescription || '', codeData.vars).slice(0, 120)
      allEntries.push({
        snake,
        title,
        desc: descShort,
        imgPath: page.imgPath ? `/images/${cat.dir}/${snake}.png` : null,
        cardCategory: codeData.cardCategory || '角色（圣灵谱尼）牌',
        subdir: category === 'CARD' ? getCardSubdir(codeData.cardCategory || '角色（圣灵谱尼）牌') : null
      })
      if (page.imgPath) stats[category].withImg++
    }

    // 生成总览页
    const allContent = generateAllPage(category, allEntries)
    fs.writeFileSync(path.join(outDir, 'all.md'), allContent, 'utf8')

    // 生成 index 页（用实际生成数量，不含跳过的孤儿）
    const actualCount = allEntries.length
    const indexContent = generateIndexPage(category, actualCount)
    fs.writeFileSync(path.join(outDir, 'index.md'), indexContent, 'utf8')

    console.log(`[ok] ${file} -> ${cat.dir}/  生成 ${actualCount} 项（代码解析:${stats[category].withCode} 图片:${stats[category].withImg}）`)
  }

  console.log('\n生成统计：')
  for (const [cat, s] of Object.entries(stats)) {
    console.log(`  ${CATEGORY_MAP[cat].label}: ${s.withCode} 项（代码解析:${s.withCode} 图片:${s.withImg}）`)
  }
}

generate()
