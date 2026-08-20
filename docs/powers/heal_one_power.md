# 愈合I

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物随机池——[群星的礼赠](/relics/starter/elemental_core.md)随机能力池赋予怪物（遭遇时按概率自带，概率随探索房间数增长）

<img src="/images/powers/heal_one_power.png" alt="愈合I" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 单例（不可叠加，Amount 恒为 1）
- **可见**: 是

## 描述

在你的回合开始时恢复已损失<span style="color:#d4a017;font-weight:600">体力</span>的<span style="color:#3aa675;font-weight:600">1/10</span>。

## 详细机制

- **回合开始回血**：持有者（怪物）自己回合开始时（`AfterSideTurnStart`），回复**已损失体力**的 <span style="color:#3aa675;font-weight:600">1/10</span>（`lostHp / 10`）——注意基数是**已损失部分**，不是最大体力。
- **越残回复越多**：满血时不回复（损失 0 → 回 0）；半血的 200 血怪（损失 100）每回合回 10，残血（损失 160）每回合回 16——损失越大回复越猛。
- **无限持续**：无层数衰减，活着就每回合执行。

## 小贴士

- **血线稳定点的算术**：设你每回合净输出 D，它的血线最终稳定在 **MaxHp − 10×D** 处——想靠磨打死它需要 D ≥ MaxHp/10（200 血怪 = 每回合 20+）。
- **数学直觉**：1/10 回复下，每回合稳定输出 20+ 的构筑基本无感（回复追不上）；输出不足时它是"永远差一口气"的泥潭——评估自己 DPS 后决定速攻还是先清队友。
- **系列对比**：[愈合II](/powers/heal_two_power.md)（1/8，0.00025/房）/[愈合III](/powers/heal_three_power.md)（1/5，0.00005/房）回复更狠，III 级必须当 Boss 战打。

## 源码

- `SeerHealOnePower.cs`（`AfterSideTurnStart`，`(MaxHp - CurrentHp) / 10` 回复）
- 随机池配置：`SeerElementalCore.cs:110`（`0.0005/房`——回复系列中最常见档）
