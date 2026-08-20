# 生息2

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物随机池——[群星的礼赠](/relics/starter/elemental_core.md)随机能力池赋予怪物（遭遇时按概率自带，概率随探索房间数增长）

<img src="/images/powers/life_breath_two_power.png" alt="生息2" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 单例（不可叠加）
- **可见**: 是

## 描述

在你的回合开始时，获得<span style="color:#3aa675;font-weight:600">6%</span><span style="color:#d4a017;font-weight:600">最大生命</span>值。

## 详细机制

- **回合开始涨上限**：持有者（怪物）自己回合开始时（`AfterSideTurnStart`），最大生命 <span style="color:#3aa675;font-weight:600">+6%</span>（`GainMaxHp`，内置等量回血）。
- **复利成长**：按当前最大生命取百分比，越拖涨越快。

## 小贴士

- **每回合 +6% 意味着什么**：5 回合后它的血池膨胀约 34%（1.06^5），加上等量回血实际更厚——如果你的 3 回合爆发不足以带走，第 4 回合起就是逆水行舟。
- **控制它的回合=控制它的成长**：[眩晕](/mechanics/stun.md)跳过它一回合，省下的不只是伤害还有 6% 成长——控制牌对战生息怪的价值双倍放大。

## 源码

- `SeerLifeBreathTwoPower.cs`（`AfterSideTurnStart`，`GainMaxHp(MaxHp * 0.06)`）
