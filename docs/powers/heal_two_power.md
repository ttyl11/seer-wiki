# 愈合II

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物随机池——[群星的礼赠](/relics/starter/elemental_core.md)随机能力池赋予怪物（遭遇时按概率自带，概率随探索房间数增长）

<img src="/images/powers/heal_two_power.png" alt="愈合II" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 单例（不可叠加，Amount 恒为 1）
- **可见**: 是

## 描述

在你的回合开始时恢复已损失<span style="color:#d4a017;font-weight:600">体力</span>的<span style="color:#3aa675;font-weight:600">1/8</span>。

## 详细机制

- **回合开始回血**：持有者（怪物）自己回合开始时（`AfterSideTurnStart`），回复**已损失体力**的 <span style="color:#3aa675;font-weight:600">1/8</span>（12.5%）——基数是已损失部分，满血不回复。
- **越残回复越多**：回复量随损失增大——半血（损失 100）每回合回 12.5，残血（损失 160）每回合回 20——磨血越深它的回复越猛，不存在"打到残血就轻松"的阶段。
- **无限持续**：无层数衰减，活着就每回合执行。

## 小贴士

- **血线稳定点的算术**：设你每回合净输出 D，它的血线最终稳定在 **MaxHp − 8×D** 处——200 血怪面对每回合 15 输出会停在 80 血；想靠磨打死它需要 D ≥ 25（= MaxHp/8），做不到就只能走爆发一波收。
- **DoT 与愈合赛跑**：DoT 流要保证每跳总量 > 当回合回复量——1/8 档下中等 DoT 前期有优势，但它越残回得越多，别把战斗拖进回复 > DoT 的后期。
- **系列对比**：[愈合I](/powers/heal_one_power.md)（1/10，0.0005/房）/[愈合III](/powers/heal_three_power.md)（1/5，0.00005/房）——II 档（0.00025/房）处于"要认真算账"的档位。

## 源码

- `SeerHealTwoPower.cs`（`AfterSideTurnStart`，`(MaxHp - CurrentHp) / 8` 回复）
- 随机池配置：`SeerElementalCore.cs:111`（`0.00025/房`）
