# 生命汲取I

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物随机池——[群星的礼赠](/relics/starter/elemental_core.md)随机能力池赋予怪物（遭遇时按概率自带，概率随探索房间数增长）

<img src="/images/powers/drain_one_power.png" alt="生命汲取I" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 单例（不可叠加，Amount 恒为 1）
- **可见**: 是

## 描述

在你的回合开始时，对每个敌人造成<span style="color:#3aa675;font-weight:600">3</span>点伤害，并为自身回复等量<span style="color:#d4a017;font-weight:600">体力</span>。

## 详细机制

- **回合开始的 AoE 吸取**：持有者（怪物）自己回合开始时（`AfterSideTurnStart`），对**玩家方全体**各造成 <span style="color:#3aa675;font-weight:600">3</span> 点伤害（`ValueProp.Unpowered`：不吃[力量](/powers/strength_power.md)/[易伤](/powers/vulnerable_power.md)增减，但**可被[格挡](/mechanics/block.md)**，同荆棘类伤害）。
- **回血按对手数量结算**：每有一个对手就回复一次 3 点——单人模式每回合回 3，**双人模式每回合回 6**（回血量固定，不依赖伤害是否被格挡）。
- **无限持续**：无层数衰减，持有者活着就每回合执行。

## 小贴士

- **稳定的"回合税"**：每回合白挨 3 点 + 它白回 3 血，实际拉开了每回合 6 点的双方血差——战斗拖到 10 回合等于凭空多打你 30 血、它多回 30 血，速杀优先级很高。
- **格挡能挡伤害、挡不住回血**：3 点是 Unpowered 但可格挡——防御型打法能保住血线，但它的回复照常发生，别指望"挡住就不亏"。
- **双人模式警报**：对手数 = 玩家数，汲取怪在双人房的回复效率翻倍（每回合 6 血起步）——多人遭遇战中这是最该优先集火的词缀之一。
- **系列对比**：[生命汲取II](/powers/drain_two_power.md)（5 点档，0.00002/房）同机制更高数值，应对思路一致。

## 源码

- `SeerDrainOnePower.cs`（`AfterSideTurnStart`，全体 `CreatureCmd.Damage`（Unpowered）+ 按对手数 `CreatureCmd.Heal`）
- 随机池配置：`SeerElementalCore.cs:108`（`0.00004/房`）
