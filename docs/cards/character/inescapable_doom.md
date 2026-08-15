# 在劫难逃

<img src="/images/cards/inescapable_doom.png" alt="在劫难逃" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 1
- **能量消耗**: 3
- **类型**: 能力
- **稀有度**: 普通
- **目标**: 无
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 邪龙之噬层数 | 2 | 3 |
| 惊逃层数 | 1 | 1 |
| PP | 1 | 1 |
| 最大PP | 1 | 1 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 获得<span style="color:#3aa675;font-weight:600">2</span>层[<span style="color:#9b59b6;font-weight:600">邪龙之噬</span>](/powers/dragon_devour_power.md)和<span style="color:#3aa675;font-weight:600">1</span>层<span style="color:#9b59b6;font-weight:600">惊逃</span>。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 获得<span style="color:#3aa675;font-weight:600">3</span>层[<span style="color:#9b59b6;font-weight:600">邪龙之噬</span>](/powers/dragon_devour_power.md)和<span style="color:#3aa675;font-weight:600">1</span>层<span style="color:#9b59b6;font-weight:600">惊逃</span>。

## 小贴士

- **邪龙之噬联动出牌**：每打出一张牌，对随机敌人造成 <span style="color:#3aa675;font-weight:600">6</span> 点非攻击伤害并获得 <span style="color:#3aa675;font-weight:600">1</span> 层[先制](/powers/first_strike_power.md)，然后消耗 1 层。2 层 = 最多触发 2 次（12 伤 + 2 先制），3 层 = 18 伤 + 3 先制。鼓励低费连击流派。
- **惊逃随机出牌**：回合结束时随机打出手牌中 <span style="color:#3aa675;font-weight:600">1</span> 张攻击牌。惊逃层数不会减少，每回合持续触发。会自动打出手牌中的攻击牌，可能打乱手牌规划——想保留的攻击牌也会被自动打出。
- **双增益叠加**：邪龙之噬提供出牌联动伤害（层数用完即失效），惊逃提供回合结束自动输出（永久生效）。两者都是增益类型，邪龙之噬靠出牌消耗，惊逃靠控制手牌攻击牌数量。
- **3 费能力合理**：3 费换 2 层邪龙之噬（最多 12 伤 + 2 先制）+ 1 层惊逃。升级后 3 层（18 伤 + 3 先制）显著提升。作为能力牌整场生效，长战斗价值高。
- **升级只增邪龙之噬**：升级后邪龙之噬 2 → 3 层，惊逃不变。每多 1 层 = 多 6 点伤害 + 1 先制，是稳定收益提升。

## 相关能力

- [邪龙之噬](/powers/dragon_devour_power.md)（mod 增益，每打出一张牌对随机敌人造成伤害并获得先制）
- 惊逃（原版增益，回合结束时随机打出 1 张手牌攻击牌）
- [先制](/powers/first_strike_power.md)（mod 增益，每层使下一张牌耗能 -1，打出牌后移除）

## 源码

- `SeerInescapableDoom.cs`
- `SeerDragonDevourPower.cs`
- `StampedePower.cs`（原版能力）
