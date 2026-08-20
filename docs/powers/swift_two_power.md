# 迅捷II

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物随机池——[群星的礼赠](/relics/starter/elemental_core.md)随机能力池赋予怪物（遭遇时按概率自带，概率随探索房间数增长）

<img src="/images/powers/swift_two_power.png" alt="迅捷II" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 单例（不可叠加）
- **可见**: 是

## 描述

在你的回合开始时获得<span style="color:#3aa675;font-weight:600">1</span>层<span style="color:#d4a017;font-weight:600">先制</span>。

## 详细机制

- **每回合给怪物续先制**：怪物自己回合开始时（`AfterSideTurnStart`）给自己施加 <span style="color:#3aa675;font-weight:600">1</span> 层[先制](/powers/first_strike_power.md)——敌方持有的先制是**反制效果**：你打出的卡牌耗能每层 <span style="color:#d44;font-weight:600">+1</span>。
- **常驻"首牌税"**：你打出任意一张牌后先制清空（`BeforeCardPlayed`），但怪物下个回合开始又补 1 层——**你每个回合的第一张牌都被 +1 费**，直到它死。
- **多怪线性叠加**：两只迅捷II 同场 = 每回合首牌 +<span style="color:#d44;font-weight:600">2</span> 费。

## 小贴士

- **每回合记得垫牌**：先制只吃你打出的**第一张牌**——每回合固定先出 0 费/低费牌踩税，再铺核心节奏；忘了垫牌等于每回合白丢 1 点[能量](/mechanics/energy.md)。
- **长期账很可观**：拖 8 回合 = 累计多付 8 费（双怪 16 费）——迅捷II 是"拖字诀惩罚器"，速杀它才是止损。
- **与[迅捷I](/powers/swift_one_power.md)/[迅捷III](/powers/swift_three_power.md)的差异**：I 是一次性开场税、III 是开局重税（首牌 +2），II 是**全程每回合税**——持久战威胁最大，优先级最高。

## 源码

- `SeerSwiftTwoPower.cs`（`AfterSideTurnStart`，`Apply<SeerFirstStrikePower>` 1 层/回合）
- 先制结算：`SeerFirstStrikePower.cs`（敌方持有时玩家耗能 +层数；玩家打出任意牌后移除）
- 随机池配置：`SeerElementalCore.cs:87`（`0.000015/房`）
