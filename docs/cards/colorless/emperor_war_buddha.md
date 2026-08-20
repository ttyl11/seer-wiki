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

当对手单次伤害超过<span style="color:#3aa675;font-weight:600">10</span>时，吸取其[<span style="color:#d4a017;font-weight:600">全属性</span>](/mechanics/all_attributes.md)提升。

## 详细机制

- **触发条件**：你受到**敌方**单次攻击的总伤害（[格挡](/mechanics/block.md)结算**前**的量）超过阈值（<span style="color:#3aa675;font-weight:600">15</span>，升级后 <span style="color:#3aa675;font-weight:600">10</span>）时触发——格挡挡满的那一击照样触发吸取。
- **吸取 = 全额转移**：把攻击者的[全属性](/mechanics/all_attributes.md)（[力量](/powers/strength_power.md)、[命中](/powers/accuracy_power.md)、[防御](/powers/defense_power.md)、[速度](/powers/speed_power.md)）中所有**正数层数**转移到自己身上——自己 +N 层、攻击者 -N 层，四维同时结算。对方力量 10 → 你 +10 力量、对方力量归零。
- **无次数限制**：每次受到超阈值伤害都会触发——敌人连续重击就被连续吸取。
- **能力牌**：1 费打出后整场生效，离场不进弃牌堆。

## 小贴士

- **🔑 格挡前判定——防御流的最强反制**：触发看的是格挡前的攻击总量，被[格挡](/mechanics/block.md)完全挡住的重击同样触发吸取——堆格挡硬吃敌人重击，属性照样搬家。防御流用它 = 敌人打得越狠废得越快，你毫发无伤还越打越强。
- **爆发型敌人的天敌**：单次 >15 的重击型 Boss/精英一旦出手，四维瞬间清零——伤害断崖式下跌，而你的输出同步起飞。这是把"敌人的养成"直接抢过来的强盗机制。
- **吸取的正反馈循环**：吸来的力量提升你的攻击、命中提升暴击率、防御/速度提升生存——被吸的敌人越打越弱、你越打越强，长战斗里滚雪球效应极强。
- **升级 15→10 阈值质变**：10 点阈值几乎覆盖所有精英/Boss 的普通攻击——从"只防重击"变成"普攻也吸"，触发频率翻倍。性价比极高的升级。
- **对付多段攻击的局限**：多段攻击每段独立结算——3 段×8 伤害的攻击不触发 15 阈值（每段 8 ≤ 15）。它克制的是单次高伤敌人，对多段刮痧型敌人无效。
- **1 费换全场威慑**：挂上之后敌人陷入两难——不出重击打不动你，出重击就被吸——心理威慑本身就是价值。

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
