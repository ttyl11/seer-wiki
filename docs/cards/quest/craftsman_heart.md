# 匠心

<img src="/images/cards/craftsman_heart.png" alt="匠心" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 任务牌
- **能量消耗**: 无
- **类型**: 任务
- **稀有度**: 任务
- **目标**: 自身
- **可升级**: 否
- **关键词**: [不能被打出](/mechanics/unplayable.md)

### 数值参数

| 参数 | 数值 |
|---|---|
| 伤害阈值 | 8000 |
| 当前伤害 | 0 |
| 除数 | 8 |

## 描述

不可打出。记录你造成的伤害的平方之和除以<span style="color:#3aa675;font-weight:600">8</span>：<span style="color:#3aa675;font-weight:600">0</span>/<span style="color:#3aa675;font-weight:600">8000</span>。达到<span style="color:#3aa675;font-weight:600">8000</span>时获得神秘奖励并移除此牌。

## 小贴士

- **任务牌**：属于任务牌，无法被打出（[不能被打出](/mechanics/unplayable.md)），不参与抽牌/弃牌流程，仅存在于主牌组中。
- **伤害记录**：每次玩家造成伤害时，记录伤害的平方除以 8（整数除法）。
- **高伤害收益**：由于使用平方计算，单次高伤害比多次低伤害更高效。例如：
 - 单次 10 伤害 → 记录 12（100/8）
 - 单次 50 伤害 → 记录 312（2500/8）
 - 单次 100 伤害 → 记录 1250（10000/8）
 - 单次 283 伤害 → 记录 10011（80089/8，一击达标）
- **奖励触发**：战斗结束后，若牌在主牌组且累计值 ≥ 8000，触发奖励。
- **神秘奖励**：实际为 <span style="color:#3aa675;font-weight:600">8000</span> [金币](/mechanics/money_pouch.md)。
- **移除机制**：奖励触发后，在进入下一个房间时从主牌组中移除此牌。
- **跨战斗持续**：累计值在多场战斗间持续累加，直到达标。

## 源码

- `SeerCraftsmanHeart.cs`
