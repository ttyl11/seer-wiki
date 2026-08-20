# 抑锋II

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物随机池——[群星的礼赠](/relics/starter/elemental_core.md)随机能力池赋予怪物（遭遇时按概率自带，概率随探索房间数增长）

<img src="/images/powers/suppress_two_power.png" alt="抑锋II" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 单例（不可叠加）
- **可见**: 是

## 描述

自身免疫高于<span style="color:#3aa675;font-weight:600">50</span>点的伤害。

## 详细机制

- **上限免疫**：每次 HP 损失结算时，若损失量**高于** <span style="color:#3aa675;font-weight:600">50</span> 点则直接归 0（`ModifyHpLostBeforeOsty` 钩子）；≤ 50 点的伤害全额生效。
- **比[抑锋I](/powers/suppress_one_power.md)更苛刻**：上限从 80 压到 50，中配卡组的常规输出（60~80 一击）也会被打空。
- **逐次判定**：多段攻击每段单独过门槛。

## 小贴士

- **输出必须压到 50 以内**：任何单次 51+ 的伤害都归零——高力量build的攻击牌要么靠多段低伤版本、要么暂时收起来，改用每跳小数值的[灼烧](/powers/burn_power.md)/[中毒](/powers/poison_power.md)磨死它。
- **力量流的噩梦**：叠满力量的单体爆发在此词缀面前收益为零，遇到时优先切换 DoT 或低伤多段攻击（每段 ≤50 均有效）。

## 源码

- `SeerSuppressTwoPower.cs`
