# 邪恶

> mod 关键词

## 基本信息

- **类型**: mod 卡牌关键词
- **来源**: mod 自定义关键词

## 描述

打出时，本场战斗结束后向你的牌组中添加一张此牌的复制品。每张牌的这个词条每场战斗只触发一次。

## 详细机制

- **触发时机**：在卡牌打出时立即触发（不依赖打牌后钩子，避免终结对手的牌因战斗已结束而漏触发）。
- **每张牌限制**：按玩家分别记录已触发邪恶的卡牌，确保每张牌每场战斗只触发一次。
- **复制品生成**：战斗结束时根据关联的卡牌生成一张复制品加入牌组。
- **多人隔离**：按玩家分别记录，避免跨玩家共享导致队友打出同 ID 的卡互相阻断效果。

## 相关卡牌

- [邪·众生相](/cards/character/evil_all_beings_manifest.md)（带有邪恶关键词）
- [邪·咒逐](/cards/character/evil_curse_chasing.md)（带有邪恶关键词）
- [邪龙勿用](/cards/character/evil_dragon_unused.md)（带有邪恶关键词）
- [邪·邪能](/cards/character/evil_energy.md)（带有邪恶关键词）

## 源码

- `SeerKeywordEffectManager.cs`
- `SeerEvilKeywordPower.cs`（战斗结束生成复制品）
- `SeerKeywordCardModel.cs`（基类）
- `card_keywords.json`（本地化）
