# 生息1

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物随机池——[群星的礼赠](/relics/starter/elemental_core.md)随机能力池赋予怪物（遭遇时按概率自带，概率随探索房间数增长）

<img src="/images/powers/life_breath_one_power.png" alt="生息1" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 单例（不可叠加）
- **可见**: 是

## 描述

在你的回合开始时，获得<span style="color:#3aa675;font-weight:600">4%</span><span style="color:#d4a017;font-weight:600">最大生命</span>值。

## 详细机制

- **回合开始涨上限**：持有者（怪物）自己回合开始时（`AfterSideTurnStart`），最大生命 <span style="color:#3aa675;font-weight:600">+4%</span>（`GainMaxHp`）——且 `GainMaxHp` 内置等量回血（加多少上限就同时回多少血）。
- **复利成长**：按当前最大生命取百分比——上限越涨，每回合加得越多（200 血怪：+8 → 208 → +8……）。
- **无限持续**：持有者活着就每回合执行。

## 小贴士

- **双重恶心**：上限和当前血一起涨，等于每回合白嫖"护盾+回复"——拖 10 回合它凭空多出近半管血，速杀优先级高于多数回复类词缀。
- **斩杀线动态化**：它的"血条"每回合都在变长——别用开场数值估算斩杀线，每回合重新心算（每回合误差约 4%）。
- **系列对比**：[生息2](/powers/life_breath_two_power.md)（6%）/[生息3](/powers/life_breath_three_power.md)（8%）——数值递增，III 档 10 回合白涨 80% 血量上限，绝不可久战。

## 源码

- `SeerLifeBreathOnePower.cs`（`AfterSideTurnStart`，`GainMaxHp(MaxHp * 0.04)`）
