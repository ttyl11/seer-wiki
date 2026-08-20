# 镇御3

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物随机池——[群星的礼赠](/relics/starter/elemental_core.md)随机能力池赋予怪物（遭遇时按概率自带，概率随探索房间数增长）

<img src="/images/powers/town_guard_three_power.png" alt="镇御3" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 单例（不可叠加）
- **可见**: 是

## 描述

在你的回合开始时，获得<span style="color:#3aa675;font-weight:600">10</span>点<span style="color:#d4a017;font-weight:600">格挡</span>。

## 详细机制

- **回合开始套甲**：持有者（怪物）自己回合开始时（`AfterSideTurnStart`），获得 <span style="color:#3aa675;font-weight:600">10</span> 点[格挡](/mechanics/block.md)（`ValueProp.Unpowered` 来源，量固定不吃增减益）。
- **甲持续一整轮**：怪物格挡在它**下个回合开始**才清空——你整个回合的攻击都要先啃掉这 10 点甲才能碰到血条。
- **每回合刷新**：只要持有者活着，每轮稳定 +10——等效于怪物有效血量每轮 +10。

## 小贴士

- **等效血量账**：镇御三 = 每轮多打 10 点——5 回合战斗等于它凭空多 50 点血，接近一张中费攻击牌的全部输出，斩杀线必须大幅提前。
- **多段攻击彻底报废**：10 点甲能完整吞掉绝大多数多段攻击牌的全部伤害——×4 连击每段 3 点（共 12）只能漏 2 点。打镇御三怪**多段攻击牌直接雪藏**。
- **固伤完全无视**：[固定伤害](/powers/fixed_damage_power.md)（Unblockable）不进格挡结算——固伤流打镇御怪零折扣，是最优解法；没有固伤就攒大额单段爆发。
- **系列对比**：[镇御1](/powers/town_guard_one_power.md)（5 点）/[镇御2](/powers/town_guard_two_power.md)（8 点）——三档最稀有（0.00005/房）但压制力最强，撞上低费快攻卡组等于机制性劝退。

## 源码

- `SeerTownGuardThreePower.cs`（`AfterSideTurnStart`，`GainBlock(10, Unpowered)`）
- 随机池配置：`SeerElementalCore.cs:81`（`0.00005/房`）
