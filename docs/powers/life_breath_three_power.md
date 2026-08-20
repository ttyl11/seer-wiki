# 生息3

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物随机池——[群星的礼赠](/relics/starter/elemental_core.md)随机能力池赋予怪物（遭遇时按概率自带，概率随探索房间数增长）

<img src="/images/powers/life_breath_three_power.png" alt="生息3" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 单例（不可叠加）
- **可见**: 是

## 描述

在你的回合开始时，获得<span style="color:#3aa675;font-weight:600">8%</span><span style="color:#d4a017;font-weight:600">最大生命</span>值。

## 详细机制

- **回合开始涨上限**：持有者（怪物）自己回合开始时（`AfterSideTurnStart`），最大生命 <span style="color:#3aa675;font-weight:600">+8%</span>（`GainMaxHp`，内置等量回血）。
- **复利成长**：按当前最大生命取百分比。

## 小贴士

- **成长词缀天花板**：1.08^10 ≈ 2.16——10 回合血池翻倍还多，叠加每回合等量回血，持久战完全无解；把它当作"回合数即难度"的软狂暴机制。
- **解法只有两条**：①前 3 回合内速杀（血池还没膨胀起来）；②控制链锁死它的回合（[眩晕](/mechanics/stun.md)/意图无效化轮流上）——每跳过一回合就是省 8% 血池。
- **系列对比**：[生息1](/powers/life_breath_one_power.md)（4%）/[生息2](/powers/life_breath_two_power.md)（6%）——III 档是从"恶心"升级到"机制性劝退"。

## 源码

- `SeerLifeBreathThreePower.cs`（`AfterSideTurnStart`，`GainMaxHp(MaxHp * 0.08)`）
