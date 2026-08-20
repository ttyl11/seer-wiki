# 镇御2

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物随机池——[群星的礼赠](/relics/starter/elemental_core.md)随机能力池赋予怪物（遭遇时按概率自带，概率随探索房间数增长）

<img src="/images/powers/town_guard_two_power.png" alt="镇御2" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 单例（不可叠加）
- **可见**: 是

## 描述

在你的回合开始时，获得<span style="color:#3aa675;font-weight:600">8</span>点<span style="color:#d4a017;font-weight:600">格挡</span>。

## 详细机制

- **回合开始套甲**：持有者（怪物）自己回合开始时（`AfterSideTurnStart`），获得 <span style="color:#3aa675;font-weight:600">8</span> 点[格挡](/mechanics/block.md)（`ValueProp.Unpowered` 来源，量固定不吃增减益）。
- **甲持续一整轮**：怪物格挡在它**下个回合开始**才清空——你整个回合的攻击都要先啃掉这 8 点甲才能碰到血条。
- **每回合刷新**：只要持有者活着，每轮稳定 +8——等效于怪物有效血量每轮 +8。

## 小贴士

- **等效血量账**：镇御二 = 每轮多打 8 点——4 回合战斗等于它多了 32 点血，已经超过很多中费攻击牌的单卡输出，斩杀线必须提前拉高。
- **多段攻击近乎全废**：8 点甲足以吞掉多数多段攻击的前几段——×4 连击每段 3 点只能漏 4 点过去。打镇御二怪**只出大额单段**。
- **固伤完全无视**：[固定伤害](/powers/fixed_damage_power.md)（Unblockable）不进格挡结算——固伤流打镇御怪零折扣，是最优解法。
- **系列对比**：[镇御1](/powers/town_guard_one_power.md)（5 点）/[镇御3](/powers/town_guard_three_power.md)（10 点）——二档出现率（0.0001/房）低于一档，但 8 点/轮的甲对低费攻击卡的压制是质变。

## 源码

- `SeerTownGuardTwoPower.cs`（`AfterSideTurnStart`，`GainBlock(8, Unpowered)`）
- 随机池配置：`SeerElementalCore.cs:80`（`0.0001/房`）
