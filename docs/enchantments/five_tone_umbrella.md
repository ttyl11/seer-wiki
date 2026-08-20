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
- **先制效果**：每层先制使你下一张牌耗能 -1（N 层 = 减 N 费，最低 0），打出一张牌后移除所有先制层数。

## 小贴士

- **每打一张+1先制**：仐每次打出都 +1 先制，可与其他先制来源叠加——叠到 N 层后下一张牌直接减 N 费，配合高费牌收益最大。
- **先制一次性消耗**：先制层数在打出下一张牌后**全部清空**（不是只消耗 1 层），层数越多减费越多，需规划打出顺序避免把多层先制浪费在低费牌上。

## 相关能力/关键词

- [先制](/powers/first_strike_power.md)：本附魔施加的能力

## 源码

- `SeerFiveToneUmbrella.cs`
