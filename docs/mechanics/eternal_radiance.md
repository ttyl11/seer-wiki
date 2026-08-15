# 永耀

> mod 附魔（Enchantment）

## 基本信息

- **类型**: mod 附魔
- **注册 ID**: `SEER_ENCHANTMENT_SEER_ETERNAL_RADIANCE_ENCHANTMENT`
- **显示数量**: 否

## 描述

永耀是一种 mod 附魔。被附魔的卡牌耗能降为 <span style="color:#3aa675;font-weight:600">0</span>，获得[保留](/mechanics/retain.md)关键词，但每回合只能打出一张永耀牌。

## 详细机制

- **附魔效果**：被附魔的卡牌耗能降为 <span style="color:#3aa675;font-weight:600">0</span>，并获得[保留](/mechanics/retain.md)关键词。
- **打出限制**：每回合只能打出一张永耀牌，由追踪能力记录本回合的打出情况。
  - 永耀牌进入战斗时，附魔自动施加追踪能力（若玩家还没有）。
  - 若本回合已打出过永耀牌，新进入战斗的永耀牌会获得[不能被打出](/mechanics/unplayable.md)关键词。
- **独立性**：永耀机制完全独立于任何特定卡牌，追踪能力在永耀牌进入战斗时由附魔自动施加。

## 相关能力

- 追踪能力（追踪每回合打出永耀牌的数量）

## 相关机制

- [保留](/mechanics/retain.md)（永耀牌获得的关键词）
- [不能被打出](/mechanics/unplayable.md)（本回合已打出永耀牌后，新永耀牌不可打出）

## 相关卡牌

- [合奏·常昼大诰](/cards/character/ensemble_eternal_edict.md)（为生成的 4 张牌附魔永耀）

## 源码

- `SeerEternalRadianceEnchantment.cs`（附魔逻辑）
- `SeerEternalRadianceTrackerPower.cs`（打出限制追踪）
