# 帝天战佛

<img src="/images/powers/emperor_war_buddha_power.png" alt="帝天战佛" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 递减（计数型）
- **可见**: 是

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 伤害阈值 | 15 | 10 |

## 描述

当受到的单次伤害超过 <span style="color:#3aa675;font-weight:600">15</span> 时，吸取攻击者的[全属性](/mechanics/all_attributes.md)提升（[力量](/powers/strength_power.md)、[命中](/powers/accuracy_power.md)、[防御](/powers/defense_power.md)、[速度](/powers/speed_power.md)），仅吸取正数层数。

## 详细机制

- **触发条件**：当满足以下所有条件时触发：
  1. 自身受到伤害
  2. 来自敌方的伤害
  3. 伤害超过阈值（阈值即层数）
- **全属性吸取**：对攻击者的以下四种属性，若其层数 > 0，则吸取等量层数到自身：
  - [力量](/powers/strength_power.md)
  - [命中](/powers/accuracy_power.md)
  - [防御](/powers/defense_power.md)
  - [速度](/powers/speed_power.md)
  - 吸取方式：自身 +N 层，攻击者 -N 层（N 为攻击者该属性的当前正层数）
- **触发后闪烁**：闪烁能力图标。

## 相关卡牌

- [帝天战佛](/cards/colorless/emperor_war_buddha.md)：打出时获得此能力，升级后阈值从 15 降至 10

## 源码

- `SeerEmperorWarBuddhaPower.cs`
