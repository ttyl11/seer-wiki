# 云玩家

<img src="/images/cards/cloud_gamer.png" alt="云玩家" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 诅咒牌
- **能量消耗**: 3
- **类型**: 诅咒
- **稀有度**: 诅咒
- **可升级**: 否

## 描述

此牌在[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)中时，所有<span style="color:#d4a017;font-weight:600">PP</span>卡牌无法打出。打出后解除封锁。

## 小贴士

- **封锁机制**：此牌进入[手牌](/mechanics/hand.md)时，若手牌中有 PP 卡，则所有 PP 卡无法被打出。
- **解除方式**：打出此牌后立即解除封锁。
- **高耗能**：耗能 <span style="color:#3aa675;font-weight:600">3</span> 点，是诅咒牌中耗能最高的之一。
- **关键词**：带有[固有](/mechanics/innate.md)、[保留](/mechanics/retain.md)、[消耗](/mechanics/exhaust.md)。
- **仅封锁 PP 卡**：非 PP 卡（攻击/技能/能力牌）不受影响，仍可正常打出。

## 相关机制

- [手牌](/mechanics/hand.md)（触发条件位置）
- [固有](/mechanics/innate.md)（关键词）
- [保留](/mechanics/retain.md)（关键词）
- [消耗](/mechanics/exhaust.md)（关键词）

## 源码

- `SeerCloudGamer.cs`
- `SeerCloudGamerPower.cs`（内部不可见能力）
