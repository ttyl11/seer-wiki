# 化墟

> mod 关键词

## 基本信息

- **类型**: mod 卡牌关键词
- **来源**: mod 自定义关键词

## 描述

打出时，向你的[弃牌堆](/mechanics/discard_pile.md)中加入一张随机状态牌。

## 详细机制

- **触发时机**：在卡牌打出后触发。
- **状态牌池**：从所有已解锁的状态牌中选取。
- **随机选取**：随机选取一张，多人模式下两端结果一致。
- **加入位置**：加入[弃牌堆](/mechanics/discard_pile.md)底部。
- **状态牌**：原版状态牌包括 [枯竭](/cards/status/depletion.md)等。

## 相关卡牌

- [蔑天行·残虐](/cards/character/despise_heaven_cruelty.md)（带有化墟关键词）

## 源码

- `SeerKeywordEffectManager.cs`
- `SeerKeywordCardModel.cs`（基类）
- `card_keywords.json`（本地化）
