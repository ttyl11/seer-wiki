# 疲惫

> **归属**：玩家与怪物均可持有
> **施加来源**：玩家获得——[圣诰](/powers/holy_edict_power.md)（能力联动）；玩家施加给敌方——[义乂梵我婆娑纱](/cards/character/righteous_brahma_veil.md)（卡牌）、[滔天龙汲水](/cards/character/soaring_dragon_water.md)（卡牌）、[激鸣雷封](/cards/event/thunder_seal.md)（卡牌）；怪物施加给玩家——[朵拉格](/monsters/boss/durgar_monster.md)

<img src="/images/powers/fatigue_power.png" alt="疲惫" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 减益（Debuff）
- **叠加方式**: 递减（计数型）
- **可见**: 是
- **来源**: mod

### 数值参数

| 参数 | 数值 |
|---|---|
| 攻击伤害降低百分比 | 20 |

## 描述

攻击伤害降低<span style="color:#3aa675;font-weight:600">20</span>%。每次造成伤害时，自身受到等于层数的不可[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)伤害。在你的回合结束时减少<span style="color:#3aa675;font-weight:600">1</span>层。

## 详细机制

- **攻击伤害降低**：仅减少拥有者造成的攻击伤害，非攻击伤害不受影响。攻击伤害降低 <span style="color:#3aa675;font-weight:600">20</span>%。
- **造伤自伤**：当自身造成伤害、目标非自身、伤害 > 0 且层数 > 0 时，对自身造成等于层数的伤害，伤害类型为不可[格挡](/mechanics/block.md)的非攻击伤害，并闪现。
  - **多人同步**：自伤由能力持有者端执行，确保多人同步。
  - **防无限递归**：目标非自身的判断防止自伤再次触发自伤导致无限递归。
- **回合结束递减**：在拥有者一方回合结束时，层数 -<span style="color:#3aa675;font-weight:600">1</span>。

## 相关卡牌

- [义乂梵我婆娑纱](/cards/character/righteous_brahma_veil.md)（怀生菩怜态时对所有敌人施加疲惫 5 回合）
- [滔天龙汲水](/cards/character/soaring_dragon_water.md)（对所有敌人施加疲惫）
- [激鸣雷封](/cards/event/thunder_seal.md)（对对手施加疲惫 2 回合）

## 相关能力

- [圣诰](/powers/holy_edict_power.md)（持有圣诰的敌人受到攻击伤害时，有 <span style="color:#3aa675;font-weight:600">60</span>% 概率获得 <span style="color:#3aa675;font-weight:600">2</span> 回合疲惫）
- [怀生菩怜态](/powers/compassionate_bodhi_power.md)（触发疲惫施加的条件之一）

## 源码

- `SeerFatiguePower.cs`
- `SeerHolyEdictPower.cs`
