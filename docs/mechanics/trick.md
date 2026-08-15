# 戏法

> mod 关键词（SEER_KEYWORD_TRICK）

## 基本信息

- **类型**: mod 卡牌关键词（静态关键词，不走 flag 系统）
- **来源**: mod 自定义关键词

## 描述

打出时，若[弃牌堆](/mechanics/discard_pile.md)有牌，随机从弃牌堆抽一张牌到[手牌](/mechanics/hand.md)中。

## 详细机制

- **触发时机**：在卡牌打出后触发。
- **弃牌堆检查**：若弃牌堆为空则不触发。
- **随机选取**：从弃牌堆中随机选取一张，多人模式下两端结果一致。
- **加入手牌**：将选中的卡牌加入[手牌](/mechanics/hand.md)顶。

## 相关机制

- [弃牌堆](/mechanics/discard_pile.md)（抽牌来源）
- [手牌](/mechanics/hand.md)（抽牌目标）

## 源码

- `SeerKeywordEffectManager.cs`
- `card_keywords.json`（本地化）
