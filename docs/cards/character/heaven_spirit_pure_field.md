# 天灵净野

<img src="/images/cards/heaven_spirit_pure_field.png" alt="天灵净野" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 5
- **能量消耗**: 1
- **类型**: 技能
- **稀有度**: 稀有
- **目标**: 自身
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 烧伤层数 | 3 | 4 |
| 回复生命 | 5 | 7 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 对所有人施加<span style="color:#3aa675;font-weight:600">3</span>层<span style="color:#d4a017;font-weight:600">烧伤</span>。未触发则获得<span style="color:#3aa675;font-weight:600">1</span>层<span style="color:#d4a017;font-weight:600">缓冲</span>。自身有<span style="color:#d4a017;font-weight:600">烧伤</span>时回复<span style="color:#3aa675;font-weight:600">5</span>点生命。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 对所有人施加<span style="color:#3aa675;font-weight:600">4</span>层<span style="color:#d4a017;font-weight:600">烧伤</span>。未触发则获得<span style="color:#3aa675;font-weight:600">1</span>层<span style="color:#d4a017;font-weight:600">缓冲</span>。自身有<span style="color:#d4a017;font-weight:600">烧伤</span>时回复<span style="color:#3aa675;font-weight:600">7</span>点生命。

## 小贴士

- **全场无差别烧伤**：对**所有生物**（自己、队友、全部敌人）施加 3 层[烧伤](/powers/burn_power.md)（升级 4 层）。烧伤：每个自己回合开始受到 3 点固定伤害并 -1 层，且**烧伤存续期间**攻击伤害恒 -1 点（固定值，不随层数叠加）。3 层 = 3 个回合共 9 点 DoT + 期间攻击 -1。
- **回血兜底自己**：打出后若自身有烧伤（给自己挂的烧伤必然满足），立即回复 5 点（升级 7）。净代价账：自己吃 9 点烧伤 DoT、回 5 点，净自伤仅 4 点（升级后 12-7=5）；换来的是每个敌人 9 点 DoT + 攻击衰减——群怪局一换多稳赚，单体局基本打平。
- **缓冲兜底免疫**：若**任何一个生物**（含自己/队友/敌人）烧伤施加失败（免疫），自身获得 1 层[缓冲](/powers/buffer_power.md)（阻止下一次生命值损失）。对烧伤免疫的敌群打出 = 全场白送缓冲；注意自己若免疫烧伤则得缓冲但不回血（无烧伤不满足回血条件）。
- **PP 5 续航铺场**：烧伤逐回合 -1，PP 5 允许整场反复打出维持全场烧伤覆盖——升级后每次 4 层（12 DoT/敌）+ 回 7，滚雪球式的全场磨血。注意重复打出也会给自己续烧伤，回血同步兜底，循环自洽。
- **配合建议**：与烧伤加深/燃尽体系联动；队友若有烧伤免疫则纯赚（敌吃烧伤、队友得缓冲）；自身高回复/烧伤免疫卡组可以把代价压到零。
- **升级的关键性**：烧伤 3→4 层（每敌 +3 DoT）+ 回血 5→7（净自伤 4→5 基本不变但敌端收益 +33%），双端提升，优先级中上。
- **性价比**：1 费全场 DoT + 自回血 + 免疫兜底三效合一，群怪与持久战的价值牌；单体爆发局收益平庸。

## 相关能力

- [烧伤](/powers/burn_power.md)（回合开始受到伤害，攻击伤害降低，每回合 -1 层）
- [缓冲](/powers/buffer_power.md)（阻止下一次生命值损伤，烧伤失败时获得）

## 源码

- `SeerHeavenSpiritPureField.cs`
