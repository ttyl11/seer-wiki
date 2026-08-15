# 黏糊

<img src="/images/enchantments/goopy.png" alt="黏糊" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 原版附魔
- **可附魔牌类型**: 带防御标签的牌
- **显示数量**: 否
- **来源**: 原版

### 数值参数

| 参数 | 数值 |
|---|---|
| 每次打出永久增加格挡 | +1 |
| 格挡加成 | 每次打出递增 |

## 描述

这张牌获得[<span style="color:#d4a017;font-weight:600">消耗</span>](/mechanics/exhaust.md)。当被打出时，这张牌的[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)值永久增加<span style="color:#3aa675;font-weight:600">1</span>点。

## 详细机制

- **获得消耗**：附魔时为卡牌添加消耗关键词。
- **永久强化**：每次打出此牌时，格挡加成永久 +1（同时同步到牌组版本）。
- **格挡加成**：格挡额外增加当前累计打出次数减 1（初次打出加成为 0，之后每次打出递增）。
- **附魔限制**：仅可附魔于带防御标签的牌。

## 小贴士

- **跨战斗永久强化**：每次打出的 +1 格挡永久保留（同步到牌组版本），长线战中越打越硬，是少数跨战斗成长的附魔。
- **消耗换成长**：每次打出后消耗，需配合[灵魂之力](./souls_power.md)（反消耗）或重放机制才能多次触发成长。

## 相关关键词

- [消耗](/mechanics/exhaust.md)：附魔后获得消耗
- [格挡](/mechanics/block.md)：每次打出永久增加格挡

## 源码

- `Goopy.cs`（原版）
