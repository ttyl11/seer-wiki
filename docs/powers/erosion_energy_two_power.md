# 蚀能2

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物随机池——[群星的礼赠](/relics/starter/elemental_core.md)随机能力池赋予怪物（遭遇时按概率自带，概率随探索房间数增长）

<img src="/images/powers/erosion_energy_two_power.png" alt="蚀能2" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 单例（不可叠加）
- **可见**: 是

## 描述

对手使用<span style="color:#d4a017;font-weight:600">PP</span>卡牌<span style="color:#d4a017;font-weight:600">消耗</span>的<span style="color:#d4a017;font-weight:600">PP</span>+1。

## 详细机制

- **PP 消耗 +1**：实现位于 `SeerPpCardModel.CalculateModifiedCost`——玩家打出 [PP 牌](/mechanics/pp-system.md)时，场上持有蚀能2 的每个怪物使本次 PP 消耗 +1（打一次扣 2 点 PP）。
- **多怪线性叠加**：两只蚀能2 怪同场 = 每次消耗 +2；与[蚀能1](/powers/erosion_energy_one_power.md)（×2）同场时先翻倍再累加（乘加混合，代价急剧膨胀）。
- **实时计算**：持有者死亡后立刻恢复，无残留。

## 小贴士

- **软性续航税**：单只蚀能2 的压迫感远低于蚀能1 的翻倍——PP5 牌从 5 次变 2~3 次（按消耗 2/次），属于"能打但变贵"，不必过度恐慌。
- **群怪场要算总账**：3 只蚀能2 同场 = 每张 PP 牌消耗 4 点——群体遭遇战里它才是真威胁，开打前扫一眼所有怪的能力词缀再加总。

## 源码

- `SeerErosionEnergyTwoPower.cs`（效果在 `SeerPpCardModel.CalculateModifiedCost`：`num += PpIncrease`）
