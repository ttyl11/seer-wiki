# 龙魂

<img src="/images/cards/dragon_soul.png" alt="龙魂" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 任务牌
- **类型**: 任务
- **稀有度**: 任务
- **能量消耗**: -1（无）
- **可升级**: 否
- **关键词**: [不能被打出](/mechanics/unplayable.md)

### 数值参数

| 参数 | 数值 |
|---|---|
| 龙牌阈值 | 9 |
| 当前龙牌数 | 0 |

## 描述

[不可打出](/mechanics/unplayable.md)。每场战斗开始时获得[<span style="color:#d4a017;font-weight:600">龙属性</span>](/powers/dragon_power.md)。[<span style="color:#d4a017;font-weight:600">牌组</span>](/mechanics/draw_pile.md)中龙牌：<span style="color:#3aa675;font-weight:600">0</span>/<span style="color:#3aa675;font-weight:600">9</span>。达到<span style="color:#3aa675;font-weight:600">9</span>张时获得神秘奖励并移除此牌。

## 小贴士

- **任务牌特性**：类型为任务牌，稀有度为任务。带有[不能被打出](/mechanics/unplayable.md)，不参与抽牌/弃牌，仅存在于主牌组。
- **龙属性**（mod 能力）：每场战斗开始时，若此牌在主牌组中，获得 1 层龙属性。
- **龙牌判定**：卡牌名称中包含"龙"字的卡牌视为龙牌。
- **神秘奖励**：达到 <span style="color:#3aa675;font-weight:600">9</span> 张龙牌时触发：
 1. 移除[牌组](/mechanics/draw_pile.md)中所有龙牌（排除自身）。
 2. 获得所有龙属性相关的遗物（限普通/罕见/稀有/史诗/传说五个品级）。
- **跨战斗持久化**：龙牌计数和奖励领取状态跨战斗保存。奖励领取后，进入下一个房间时从[牌组](/mechanics/draw_pile.md)移除此牌。
- **龙牌计数更新**：每场战斗会重新统计龙牌数量。

## 相关能力

- [龙属性](/powers/dragon_power.md)（每场战斗开始时获得）

## 相关机制

- [不能被打出](/mechanics/unplayable.md)（原版关键词，无法主动打出）

## 源码

- `SeerDragonSoul.cs`
