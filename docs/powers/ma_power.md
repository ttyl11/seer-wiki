# 麻痹


> **归属**：玩家与怪物均可持有
> **施加来源**：玩家施加给敌方——[王·联盟审判](/cards/character/king_alliance_judgment.md)（卡牌）、[曙光普照](/cards/character/shining_light.md)（卡牌）、[瞬雷天闪](/cards/character/thunder_flash.md)（卡牌）、[好女孩](/powers/good_girl_power.md)（能力联动）、[万相乖离](/powers/universal_divergence_power.md)（能力联动）；怪物施加给玩家——[魔花仙子](/monsters/normal/magic_flower_monster.md)

<img src="/images/powers/ma_power.png" alt="麻痹" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 减益（Debuff），列入[异常状态](/mechanics/abnormal-status.md)列表
- **叠加方式**: 叠加
- **可见**: 是
- **归属**: 异常状态（可被[凝滞](/powers/stasis_power.md)免疫、[异常免疫](/powers/debuff_immune_power.md)阻挡、[异常免疫·反弹](/powers/debuff_immune_reflect_power.md)反弹）

### 数值参数

| 参数 | 数值 |
|---|---|
| 攻击伤害降低 | 10% / 层 |
| 回合开始获得易伤 | 1 层 |

## 描述

攻击伤害降低<span style="color:#3aa675;font-weight:600">10</span>%。在你的回合开始时获得<span style="color:#3aa675;font-weight:600">1</span>层<span style="color:#d44;font-weight:600">易伤</span>。在你的回合结束时减少1层。

## 详细机制

- **攻击伤害降低**：
  - 每层使持有者**打出的攻击伤害**降低 10%（乘算）。
  - 仅影响"攻击伤害"，不影响[固定伤害](/powers/fixed_damage_power.md)、烧伤/中毒等回合结算伤害。
  - 多层线性叠加：2 层降低 20%，3 层降低 30%。
- **回合开始自叠易伤**：
  - 持有者一方回合开始时，自身获得 1 层易伤（使受到的攻击伤害增加）。
  - 易伤是独立能力，不随麻痹减层，按自身规则结算。
  - 这意味着麻痹同时"削弱输出"和"放大受伤"，是少见的双向负面异常。
- **回合结束减层**：
  - 持有者一方回合结束时，麻痹层数 -1。
  - 若多层麻痹，每回合只减 1 层，但每回合都会触发 1 层易伤（易伤不随麻痹减层而消失，按易伤自身规则结算）。

## 小贴士

- **双向削弱**：既降低持有者攻击伤害输出，又通过自叠[易伤](/powers/vulnerable_power.md)放大其受到的伤害，适合压制高输出敌人。
- **只降攻击伤害**：不影响[固定伤害](/powers/fixed_damage_power.md)、烧伤、中毒等非攻击伤害；但易伤部分仍会放大其受到的攻击伤害。

## 相关机制

- [异常状态](/mechanics/abnormal-status.md)
- [易伤](/powers/vulnerable_power.md)（回合开始自叠）
- [衰弱](/powers/weaken_power.md)（对比：放大受伤型异常）

## 源码

- `SeerMaPower.cs`
