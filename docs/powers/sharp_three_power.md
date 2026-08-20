# 锋锐III

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物随机池——[群星的礼赠](/relics/starter/elemental_core.md)随机能力池赋予怪物（遭遇时按概率自带，概率随探索房间数增长）

<img src="/images/powers/sharp_three_power.png" alt="锋锐III" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 单例（不可叠加，Amount 恒为 1）
- **可见**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| 固定伤害层数 | 9 |

## 描述

在你的回合结束时给予对手<span style="color:#3aa675;font-weight:600">9</span>点<span style="color:#d4a017;font-weight:600">固定伤害</span>。

## 详细机制

- **回合结束挂固伤**：持有者（怪物）自己回合结束时（`AfterSideTurnEnd`，仅自己方回合），给**玩家方全体**各施加 <span style="color:#3aa675;font-weight:600">9</span> 层[固定伤害](/powers/fixed_damage_power.md)（`SeerFixedDamagePower`）。
- **你回合开始时跳血**：固伤挂在每个玩家身上，在**玩家回合开始**结算——各跳 <span style="color:#3aa675;font-weight:600">9</span> 点无视[格挡](/mechanics/block.md)的真实伤害，跳完固伤移除。
- **每轮循环一遍**：怪物回合结束挂 → 你回合开始跳 → 下一轮再挂——等效"每轮全队稳定失血 9 点"，直到持有者死亡。
- **固定伤害特性**：不吃[力量](/powers/strength_power.md)/[易伤](/powers/vulnerable_power.md)增减、不吃[格挡](/mechanics/block.md)——挂上就必然掉血；[固伤免疫](/powers/immune_fixed_damage_power.md)类效果可完全挡下。
- **系列数值**：[锋锐I](/powers/sharp_one_power.md)（3 层）/[锋锐II](/powers/sharp_two_power.md)（6 层）同机制递增，本能力为满级。

## 小贴士

- **每轮 9 点的失血悬崖**：这是随机词缀里最狠的持续伤害——4 轮就亏 36 血，比多数 Boss 的意图输出还高，见到必须优先击杀持有者。
- **组合恶化**：若同时遇到多个锋锐III 怪，每轮固伤按数量叠加（2 个 = 18 点/轮）——群体战中先秒词缀怪是唯一解。

## 源码

- `SeerSharpThreePower.cs`（`AfterSideTurnEnd` 对所有对手 `Apply<SeerFixedDamagePower>` 9 层）
- 跳伤结算：`SeerFixedDamagePower.cs:49-70`（目标回合开始跳 `Amount` 点无视格挡伤害后移除）
- 随机池配置：`SeerElementalCore.cs:107`（`0.0001/房`）
