# 神印

<img src="/images/powers/divine_seal_power.png" alt="神印" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 减益（Debuff）
- **叠加方式**: 计数器叠加
- **可见**: 是

## 数值参数

| 参数 | 数值 |
|---|---|
| 生命分母 | 8 |

## 描述

每有 <span style="color:#3aa675;font-weight:600">1</span> 层，回合开始时，造成 <span style="color:#3aa675;font-weight:600">1/8</span> 其当前生命的[固定伤害](/mechanics/fixed-damage.md)。

## 详细机制

- **回合开始固伤**：每回合开始时，根据[<span style="color:#9b59b6;font-weight:600">神印</span>](/powers/divine_seal_power.md)层数造成[固定伤害](/powers/fixed_damage_power.md)。伤害=当前生命值×层数÷<span style="color:#3aa675;font-weight:600">8</span>（向下取整）。
- **层数影响**：<span style="color:#3aa675;font-weight:600">1</span> 层造成 <span style="color:#3aa675;font-weight:600">1/8</span> 当前生命的固伤，<span style="color:#3aa675;font-weight:600">2</span> 层造成 <span style="color:#3aa675;font-weight:600">2/8</span>（<span style="color:#3aa675;font-weight:600">1/4</span>），<span style="color:#3aa675;font-weight:600">3</span> 层造成 <span style="color:#3aa675;font-weight:600">3/8</span>……层数越高固伤比例越大。
- **基于当前生命**：伤害基于敌人当前生命值，不是最大生命值。敌人血越少固伤越低，但比例不变。
- **固定伤害**：此伤害为[固定伤害](/powers/fixed_damage_power.md)，可被固定伤害免疫挡掉。
- **触发方式**：[启灵元神](/relics/legendary/enlightened_spirit_god.md)的②效果——战斗中出现与开场不同的新怪物时，每只新怪物给所有当前怪物施加 <span style="color:#3aa675;font-weight:600">1</span> 层[<span style="color:#9b59b6;font-weight:600">神印</span>](/powers/divine_seal_power.md)。新增怪物越多，全队[<span style="color:#9b59b6;font-weight:600">神印</span>](/powers/divine_seal_power.md)越深。

## 相关遗物

- [启灵元神](/relics/legendary/enlightened_spirit_god.md)

## 源码

- `SeerDivineSealPower.cs`
