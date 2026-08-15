# 抽牌堆

> 原版状态

## 基本信息

- **类型**: 状态（非能力，不占用 Power 槽位）

## 描述

在每回合开始时，你会从这里抽取 <span style="color:#3aa675;font-weight:600">5</span> 张卡牌。

## 详细机制

- **不是 Power**：抽牌堆是战斗中的牌堆之一，不占用 Power 槽位。
- **抽牌规则**：每回合开始时从抽牌堆顶部抽取 <span style="color:#3aa675;font-weight:600">5</span> 张牌到手牌。
- **抽空洗牌**：当抽牌堆为空时，弃牌堆中的所有卡牌会被洗入抽牌堆。
- **顺序打乱**：抽牌堆中的卡牌顺序是打乱的（战斗开始时洗牌）。
- **查看方式**：点击抽牌堆图标可查看其中的卡牌（顺序打乱显示）。
- **卡牌放置位置**：
  - 放到抽牌堆底
  - 放到抽牌堆顶
  - 随机位置

## 相关卡牌

- [逍遥游](/cards/character/carefree_journey.md)（从消耗牌堆选一张牌置入抽牌堆顶）
- [拨乱反正](/cards/character/correct_mistakes.md)（交换抽牌堆与弃牌堆）
- [疯狂编码](/cards/colorless/crazy_code.md)（将随机卡牌加入抽牌堆）

## 相关机制

- [弃牌堆](/mechanics/discard_pile.md)（抽牌堆空时洗入）
- [消耗牌堆](/mechanics/exhaust_pile.md)（独立牌堆，不参与洗牌）
- [手牌](/mechanics/hand.md)（抽牌的目标位置）

## 源码

- `StaticHoverTip.cs`（枚举定义）
- `static_hover_tips.json`（本地化）
- `PileType.cs`
- `CardPilePosition.cs`
