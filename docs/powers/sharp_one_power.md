# 锋锐I

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物随机池——[群星的礼赠](/relics/starter/elemental_core.md)随机能力池赋予怪物（遭遇时按概率自带，概率随探索房间数增长）

<img src="/images/powers/sharp_one_power.png" alt="锋锐I" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 单例（不可叠加，Amount 恒为 1）
- **可见**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| 固定伤害层数 | 3 |

## 描述

在你的回合结束时给予对手<span style="color:#3aa675;font-weight:600">3</span>点<span style="color:#d4a017;font-weight:600">固定伤害</span>。

## 详细机制

- **回合结束挂固伤**：持有者（怪物）自己回合结束时（`AfterSideTurnEnd`，仅自己方回合），给**玩家方全体**各施加 <span style="color:#3aa675;font-weight:600">3</span> 层[固定伤害](/powers/fixed_damage_power.md)（`SeerFixedDamagePower`）。
- **你回合开始时跳血**：固伤挂在每个玩家身上，在**玩家回合开始**结算——各跳 <span style="color:#3aa675;font-weight:600">3</span> 点无视[格挡](/mechanics/block.md)的真实伤害（`ValueProp` 无视格挡档），跳完固伤移除。
- **每轮循环一遍**：怪物回合结束挂 → 你回合开始跳 → 下一轮再挂——等效"每轮全队稳定失血 3 点"，直到持有者死亡。
- **固定伤害特性**：不吃[力量](/powers/strength_power.md)/[易伤](/powers/vulnerable_power.md)增减、不吃[格挡](/mechanics/block.md)——挂上就必然掉血；[固伤免疫](/powers/immune_fixed_damage_power.md)类效果可完全挡下（固伤直接移除不跳）。
- **系列数值**：[锋锐II](/powers/sharp_two_power.md)（6 层）/[锋锐III](/powers/sharp_three_power.md)（9 层）同机制递增。

## 小贴士

- **每轮全队白掉 3 血**：不可格挡的固定流失，拖得越久亏得越多（10 轮 = 30 血）——要么速杀持有者，要么带上回复手段对冲。
- **多怪场叠加**：多个怪物各自带锋锐时固伤按持有者数量叠加，群体遭遇战里优先集火带词缀的怪止损。
- **词缀池里最常见的高档**：锋锐I 是随机池里唯一带**基础概率**的能力（开局即 0.1%，另有 0.0005/房增长）——其余词缀开局概率为 0，只有它从第 1 场战斗就可能撞上。

## 源码

- `SeerSharpOnePower.cs`（`AfterSideTurnEnd` 对所有对手 `Apply<SeerFixedDamagePower>` 3 层）
- 跳伤结算：`SeerFixedDamagePower.cs:49-70`（目标回合开始跳 `Amount` 点无视格挡伤害后移除）
- 随机池配置：`SeerElementalCore.cs:105`（基础 0.001 + `0.0005/房`——池内唯一带基础概率的词条）
