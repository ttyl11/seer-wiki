# 仐

<img src="/images/enchantments/seer_five_tone_umbrella.png" alt="仐" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 五音附魔
- **可附魔牌类型**: 攻击 / 技能 / 能力
- **显示数量**: 否

## 描述

打出后，自身[<span style="color:#d4a017;font-weight:600">先制</span>](/powers/first_strike_power.md)+<span style="color:#3aa675;font-weight:600">1</span>。

## 详细机制

- **打出时触发**：当被附魔的卡牌打出时，向自身所属角色施加 <span style="color:#3aa675;font-weight:600">1</span> 层先制。
- **目标**：自身，来源为自身所属角色与卡牌本身。
- **先制效果**：每层先制使下一张牌耗能 -1，打出牌后移除所有先制层数。

## 小贴士

- **每打一张+1先制**：仐每次打出都+1 先制，先制让下张牌耗能 -1，适合附在低费牌上反复打出叠先制，再打高费牌减费。
- **先制一次性消耗**：先制层数在打出下一张牌后全部消耗（无论多少层都只减 1 费），需规划打出顺序避免浪费多层先制。

## 相关能力/关键词

- [先制](/powers/first_strike_power.md)：本附魔施加的能力

## 源码

- `SeerFiveToneUmbrella.cs`
