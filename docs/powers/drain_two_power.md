# 生命汲取II

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物随机池——[群星的礼赠](/relics/starter/elemental_core.md)随机能力池赋予怪物（遭遇时按概率自带，概率随探索房间数增长）

<img src="/images/powers/drain_two_power.png" alt="生命汲取II" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 单例（不可叠加，Amount 恒为 1）
- **可见**: 是

## 描述

在你的回合开始时，对每个敌人造成<span style="color:#3aa675;font-weight:600">5</span>点伤害，并为自身回复等量<span style="color:#d4a017;font-weight:600">体力</span>。

## 详细机制

- **回合开始的 AoE 吸取**：持有者（怪物）自己回合开始时（`AfterSideTurnStart`），对**玩家方全体**各造成 <span style="color:#3aa675;font-weight:600">5</span> 点伤害（`ValueProp.Unpowered`：不吃[力量](/powers/strength_power.md)/[易伤](/powers/vulnerable_power.md)，但可被[格挡](/mechanics/block.md)）。
- **回血按对手数量结算**：每个对手结算一次 5 点回复——单人每回合回 5，**双人每回合回 10**（格挡与否不影响回血）。
- **无限持续**：无衰减，持有者活着就每回合执行。

## 小贴士

- **每回合 10 点血差**：挨 5 + 它回 5，拖 8 回合就是 80 点血差——这是随机词缀里最"劝退持久战"的一个，见到 II 级汲取基本等于被宣判速杀倒计时。
- **防御打法的真实成本**：格挡能挡住 5 点伤害部分，但每回合它的回复照常——想要"耗死它"，你的每回合净输出必须 > 5，否则血差永远在扩大。
- **双人模式灾难**：回血按人头翻倍（每回合 10）——多人房里 II 级汲取怪应当作小 Boss 对待，全员第一回合集火。
- **系列对比**：[生命汲取I](/powers/drain_one_power.md)（3 点档，0.00004/房）——II 档 5 点（0.00002/房），血差速度近翻倍，速杀优先级更高。

## 源码

- `SeerDrainTwoPower.cs`（`AfterSideTurnStart`，全体 `CreatureCmd.Damage`（Unpowered）+ 按对手数 `CreatureCmd.Heal`）
- 随机池配置：`SeerElementalCore.cs:109`（`0.00002/房`）
