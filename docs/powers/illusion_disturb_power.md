# 幻扰一

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物随机池——[群星的礼赠](/relics/starter/elemental_core.md)随机能力池赋予怪物（遭遇时按概率自带，概率随探索房间数增长）

<img src="/images/powers/illusion_disturb_power.png" alt="幻扰一" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 单例（不可叠加）
- **可见**: 是

## 描述

在你的回合开始时，给予敌人<span style="color:#3aa675;font-weight:600">1</span>种随机<span style="color:#d44;font-weight:600">异常状态</span><span style="color:#3aa675;font-weight:600">1</span>回合。

## 详细机制

- **回合开始随机异常**：持有者（怪物）自己回合开始时（`AfterSideTurnStart`），对**玩家方全体**各施加 <span style="color:#3aa675;font-weight:600">1</span> 种随机[异常状态](/mechanics/abnormal-status.md)（从全部异常状态池抽取）<span style="color:#3aa675;font-weight:600">1</span> 层。
- **不可预测**：种类随机（烧伤/中毒/束缚/麻痹等 20+ 种），每回合抽什么全看运气——无法针对性预防，只能靠泛用解。
- **「曝」的妙用**：若怪物自身持有[曝](/powers/expose_power.md)（玩家施加），施加有 <span style="color:#3aa675;font-weight:600">50%</span> 概率失败——给幻乱怪挂曝是最直接的压制手段。
- **无限持续**：无层数衰减，持有者活着就每回合执行。

## 小贴士

- **泛用解优先**：随机异常没法预读，值得常备的是"全异常清除"类效果（净化药水/卡牌）而非单解——每回合 1 种的量，清一次赚一次。
- **挂「曝」掐源头**：能施加[曝](/powers/expose_power.md)的构筑让它每回合一半概率空过，性价比远高于事后解异常。
- **长期战要算异常账**：每回合 1 种 × 5 回合 = 5 种异常叠身（部分异常有回合衰减，但烧伤/中毒类会累积）——别拖到异常池失控，速杀持有者是止损根本。
- **系列对比**：[幻扰二](/powers/illusion_disturb_two_power.md)（1 种 × 2 回合，更粘）/ [幻扰三](/powers/illusion_disturb_three_power.md)（2 种 × 1 回合，更快）。

## 源码

- `SeerIllusionDisturbPower.cs`（`AfterSideTurnStart`，`Rng.Niche` 从 `SeerAbnormalStatus.AllStatuses` 随机施加，曝 50% 失败）
