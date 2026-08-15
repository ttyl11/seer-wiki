# 混沌

<img src="/images/cards/soulson_chaos_card.png" alt="混沌" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 状态牌
- **最大PP**: 1
- **能量消耗**: 1
- **类型**: 状态
- **稀有度**: 状态
- **目标**: 无
- **可升级**: 否

## 描述

<span style="color:#d4a017;font-weight:600">混沌</span>。无事发生。

## 小贴士

- **卡牌类型**：属于状态牌（无法升级，战斗中不可被生成）。耗能 <span style="color:#3aa675;font-weight:600">1</span>，PP <span style="color:#3aa675;font-weight:600">1</span>。
- **关键词**：自带[<span style="color:#d4a017;font-weight:600">保留</span>](/mechanics/retain.md)，打出后不消耗。
- **打出效果**：无任何效果。
- **位置变化触发**：当此牌在牌堆间移动时（手牌/抽牌堆/弃牌堆/消耗牌堆），寻找敌方阵营中的索伦森，对其施加 <span style="color:#3aa675;font-weight:600">1</span> 层混沌计数。
- **混沌阈值**：当混沌计数跨越 <span style="color:#3aa675;font-weight:600">7</span> 的倍数时（如 6→7、13→14），不清零计数，对玩家施加耗能翻倍效果。每跨越一个倍数触发一次。
- **目标选取**：无目标。此牌为索伦森 boss 专属状态牌。

## 源码

- `SeerSoulsonChaosCard.cs`
