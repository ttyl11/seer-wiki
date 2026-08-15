# 帝天战佛

<img src="/images/cards/emperor_war_buddha.png" alt="帝天战佛" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 无色牌
- **能量消耗**: 1
- **类型**: 能力
- **稀有度**: 罕见
- **目标**: 自身
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 伤害阈值 | 15 | 10 |

## 描述

当对手单次伤害超过<span style="color:#3aa675;font-weight:600">15</span>时，吸取其[<span style="color:#d4a017;font-weight:600">全属性</span>](/mechanics/all_attributes.md)提升。

## 升级后

当对手单次伤害超过<span style="color:#3aa675;font-weight:600">15</span>时，吸取其[<span style="color:#d4a017;font-weight:600">全属性</span>](/mechanics/all_attributes.md)提升。

## 小贴士

- **全属性**（[<span style="color:#d4a017;font-weight:600">查看机制页</span>](/mechanics/all_attributes.md)）：指[力量](/powers/strength_power.md)（原版）、[命中](/powers/accuracy_power.md)、[防御](/powers/defense_power.md)、[速度](/powers/speed_power.md)四种属性。
- **帝天战佛**（[<span style="color:#d4a017;font-weight:600">查看能力页</span>](/powers/emperor_war_buddha_power.md)，mod 能力）：当受到的单次伤害超过阈值时，吸取攻击者的全属性，仅吸取正数层数。能力类型为增益，叠加方式为递减。
- **触发条件**：仅当受到敌方单次伤害超过阈值时触发吸取效果。阈值由打出此牌时设定的数值决定。
- **升级效果**：伤害阈值从 <span style="color:#3aa675;font-weight:600">15</span> 降至 <span style="color:#3aa675;font-weight:600">10</span>，更容易触发吸取。

## 相关能力

- [帝天战佛](/powers/emperor_war_buddha_power.md)（打出时获得此能力）
- [力量](/powers/strength_power.md)（全属性之一，原版）
- [命中](/powers/accuracy_power.md)（全属性之一，mod）
- [防御](/powers/defense_power.md)（全属性之一，mod）
- [速度](/powers/speed_power.md)（全属性之一，mod）

## 相关机制

- [全属性](/mechanics/all_attributes.md)（力量、命中、防御、速度的统称）

## 源码

- `SeerEmperorWarBuddha.cs`
