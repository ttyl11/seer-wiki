# 迅捷I

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物自带——[速度史莱姆](/monsters/normal/speed_slime_monster.md)；怪物随机池——[群星的礼赠](/relics/starter/elemental_core.md)随机能力池赋予怪物（遭遇时按概率自带，概率随探索房间数增长）

<img src="/images/powers/swift_one_power.png" alt="迅捷I" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 单例（不可叠加）
- **可见**: 是

## 描述

每场战斗开始时获得<span style="color:#3aa675;font-weight:600">1</span>层<span style="color:#d4a017;font-weight:600">先制</span>。

## 详细机制

- **开局给怪物挂先制**：`BeforeCombatStart` 时给**怪物自己**施加 <span style="color:#3aa675;font-weight:600">1</span> 层[先制](/powers/first_strike_power.md)——先制挂在敌方身上是**反制效果**：你打出的卡牌耗能每层 <span style="color:#d44;font-weight:600">+1</span>。
- **只影响你的第一张牌**：你打出任意一张牌后，怪物身上的先制**全部移除**（`BeforeCardPlayed`，一次清空）——第一张牌交完税，之后整场不再受影响。
- **多怪线性叠加**：两只迅捷I 怪同场 = 第一张牌 +<span style="color:#d44;font-weight:600">2</span> 费（各自独立结算，一张牌全部踩掉）。

## 小贴士

- **垫牌解税**：先制被你打出的**任意一张牌**消耗——开局先用 0 费/低费牌"踩掉"它，再出核心启动牌；千万别让 3 费启动牌吃这 +1。
- **0 费牌是最优垫子**：0 费变 1 费换掉整层先制，代价最小；手里没有低费牌时宁可首回合少打一张也别硬出大牌。
- **整体威胁有限**：一次性开场税、只碰第一张牌——比[迅捷II](/powers/swift_two_power.md)的每回合税轻得多，正常应对即可。

## 源码

- `SeerSwiftOnePower.cs`（`BeforeCombatStart`，`Apply<SeerFirstStrikePower>` 1 层）
- 先制结算：`SeerFirstStrikePower.cs`（敌方持有时玩家耗能 +层数；玩家打出任意牌后移除）
- 随机池配置：`SeerElementalCore.cs:86`（`0.000025/房`）
