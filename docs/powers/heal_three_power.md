# 愈合III

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物随机池——[群星的礼赠](/relics/starter/elemental_core.md)随机能力池赋予怪物（遭遇时按概率自带，概率随探索房间数增长）

<img src="/images/powers/heal_three_power.png" alt="愈合III" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 单例（不可叠加，Amount 恒为 1）
- **可见**: 是

## 描述

在你的回合开始时恢复已损失<span style="color:#d4a017;font-weight:600">体力</span>的<span style="color:#3aa675;font-weight:600">1/5</span>。

## 详细机制

- **回合开始回血**：持有者（怪物）自己回合开始时（`AfterSideTurnStart`），回复**已损失体力**的 <span style="color:#3aa675;font-weight:600">1/5</span>（20%）——基数是已损失部分，满血不回复。
- **越残回复越多**：回复量随损失增大——200 血怪半血（损失 100）每回合回 20，残血（损失 160）每回合回 32——磨血越深回复越猛。
- **无限持续**：无层数衰减，活着就每回合执行。

## 小贴士

- **回复类词缀的天花板**：血线稳定在 **MaxHp − 5×每回合净输出** 处——200 血怪想靠磨打死需要每回合输出 ≥ 40（= MaxHp/5），常规构筑做不到；把它当作"每回合挂回复光环的 Boss"来规划爆发。
- **一回合斩杀是硬指标**：1/5 档下"分两回合打死"的计划经常翻车（中途它回一大口）——确保**单回合爆发 ≥ 它当前血量**再动手，宁囤牌不蹭血。
- **DoT 基本失效**：常规 DoT 每跳难以压过 20% 回复，磨血路线在 III 档面前不可行——切爆发流或控制（[眩晕](/mechanics/stun.md)跳过它回合=跳过回复）。
- **系列对比**：[愈合I](/powers/heal_one_power.md)（1/10，0.0005/房）/[愈合II](/powers/heal_two_power.md)（1/8，0.00025/房）——III（0.00005/房）是完全体，随机词缀里的"伪 Boss"。

## 源码

- `SeerHealThreePower.cs`（`AfterSideTurnStart`，`(MaxHp - CurrentHp) / 5` 回复）
- 随机池配置：`SeerElementalCore.cs:112`（`0.00005/房`）
