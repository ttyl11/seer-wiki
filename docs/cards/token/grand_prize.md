# "大奖？"

<img src="/images/cards/grand_prize.png" alt="&quot;大奖？&quot;" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 衍生牌
- **能量消耗**: 0
- **类型**: 技能
- **稀有度**: 事件
- **目标**: 自身
- **关键词**: [消耗](/mechanics/exhaust.md)
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 |
|---|---|
| 卡牌数量 | 3 |

## 描述

[<span style="color:#d4a017;font-weight:600">消耗</span>](/mechanics/exhaust.md)。将<span style="color:#3aa675;font-weight:600">3</span>张耗能为<span style="color:#3aa675;font-weight:600">3</span>的牌加入你的[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)。

## 小贴士

- **衍生牌**：属于衍生卡池，不会在正常卡牌奖励中出现。
- **消耗**：打出后此牌被消耗，不会进入弃牌堆。
- **卡牌生成**：从角色卡池中获取已解锁的卡牌，筛选耗能等于 <span style="color:#3aa675;font-weight:600">3</span> 且非 X 耗能的卡牌。
- **随机抽取**：随机抽取 <span style="color:#3aa675;font-weight:600">3</span> 张。
- **加入手牌**：将生成的卡牌加入手牌。
- **升级效果**：升级无额外效果。

## 相关机制

- [消耗](/mechanics/exhaust.md)（打出后消耗）
- [手牌](/mechanics/hand.md)（生成的卡牌加入手牌）

## 源码

- `SeerGrandPrize.cs`
