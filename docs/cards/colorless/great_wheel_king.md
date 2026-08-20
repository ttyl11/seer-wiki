# 大轮明王

<img src="/images/cards/great_wheel_king.png" alt="大轮明王" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 无色牌
- **能量消耗**: 1
- **类型**: 能力
- **稀有度**: 罕见
- **目标**: 自身
- **可升级**: 是（1 级）

## 描述

获得[<span style="color:#9b59b6;font-weight:600">异常状态</span>](/mechanics/abnormal-status.md)时，立刻给对面所有附加相同的[<span style="color:#9b59b6;font-weight:600">异常状态</span>](/mechanics/abnormal-status.md)。

## 升级后

获得[<span style="color:#9b59b6;font-weight:600">异常状态</span>](/mechanics/abnormal-status.md)时，立刻给对面所有附加相同的[<span style="color:#9b59b6;font-weight:600">异常状态</span>](/mechanics/abnormal-status.md)。（耗能 <span style="color:#3aa675;font-weight:600">-1</span>）

## 小贴士

- **🔑 异常反弹力场**：挂上后，你每**新增**一层可见[异常状态](/mechanics/abnormal-status.md)（24 种），**所有敌人**立刻各吃一层同种异常——你的代价变成全场的代价。
- **敌人施加的异常也算——对异常型敌人是天克**：触发条件是"你获得异常"，不区分来源。敌方给你挂[灼烧](/powers/burn_power.md)/[中毒](/powers/poison_power.md)？它自己（和它队友）当场吃等量反弹——敌人的异常攻击变成自伤，异常压力越大你赚得越多。
- **自伤异常流的爆发引擎**：任何"给自己挂异常换收益"的卡（自灼烧/自中毒/自虚弱体系）在它面前代价清零反赚——你给自己挂 1 层，全体敌人各白吃 1 层。自异常构筑的核心中枢，1 费直接改写整个体系的攻防账。
- **只反弹增量，不反弹衰减**：异常**层数增加**时触发（叠加也触发）；异常每回合自然衰减（层数 -1）不会反向给敌人减层——所以敌人身上的异常只增不减节奏，反弹是纯正向累积。
- **群战倍化**：对**每个**可攻击敌人都施加——3 个敌人的遭遇战里你挂 1 层灼烧 = 敌方共吃 3 层，敌人越多赚得越多；单体 Boss 战则是稳定的 1:1 镜像。
- **没有异常来源时是白板**：你全程不获得任何异常，它就一张牌什么都不做——拿它之前先确认构筑里有稳定的自异常来源，或本场敌人会疯狂给你上异常。
- **升级 0 费 = 无条件白嫖**：1→0 费后挂能力零成本，任何带异常互动的战斗都值得开局先挂一张。

## 相关能力

- [大轮明王](/powers/great_wheel_king_power.md)（获得异常时向所有敌人反弹等量同种异常）

## 相关机制

- [异常状态](/mechanics/abnormal-status.md)（24 种异常状态反弹，含衰减规则说明）

## 源码

- `SeerGreatWheelKing.cs`
