# 次数免疫

> **归属**：玩家可施加
> **施加来源**：
> - [赫拉](/relics/uncommon/hera.md)（遗物——每次受到攻击伤害时获得 1 层）
> - [空元行者](/relics/legendary/kong_yuan_xing_zhe.md)（遗物——"空元之诗"随机效果之一，2 层）

<img src="/images/powers/void_plating_power.png" alt="次数免疫" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 计数（Counter）
- **可见**: 是

## 描述

免疫下<span style="color:#3aa675;font-weight:600">2</span>次[<span style="color:#d44;font-weight:600">异常状态</span>](/mechanics/abnormal-status.md)。每次成功免疫后层数<span style="color:#3aa675;font-weight:600">-1</span>。

## 详细机制

- **按次数免疫，不按回合**：与[异常免疫](/powers/debuff_immune_power.md)（按回合消耗，对方回合结束 -1）不同，本能力**只在成功免疫时**才 -1 层——没有异常施加的回合层数原样保留。
- **免疫判定**：自身即将受到[异常状态](/mechanics/abnormal-status.md)时，施加量归零（完全免疫该次施加），随后层数 -1，归零后移除。
- **只挡异常施加**：仅拦截正向施加（新增/叠加）；仅免疫 Seer 异常状态，**不免疫原版 Debuff**。
- **不可见能力不免疫**：仅对可见的能力生效。

## 小贴士

- 与"异常免疫"的选择：**敌方异常施加频率低时次数免疫更保值**（层不掉），**施加频率高（多异常怪）时按回合的异常免疫更划算**（一回合挡任意多次）。
- 赫拉每受一次攻击伤害 +1 层——挨打越多免疫越厚，与高格挡/回复构筑相性好。
- 免疫的是"施加"而非"已有"：不会清除身上已有的异常状态。

## 相关遗物

- [赫拉](/relics/uncommon/hera.md)（受击 +1 层的来源）
- [空元行者](/relics/legendary/kong_yuan_xing_zhe.md)（空元之诗随机效果，2 层）

## 相关能力

- [异常免疫](/powers/debuff_immune_power.md)（按回合消耗的版本）
- [支援庇护](/powers/support_immune_count_power.md)（支援触发的按次数版本）

## 源码

- `SeerVoidPlatingPower.cs`
