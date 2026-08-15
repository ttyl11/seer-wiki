# 陨

> mod 关键词

## 基本信息

- **类型**: mod 卡牌关键词
- **来源**: mod 自定义关键词

## 描述

打出后，此牌转化为[圣逝](/cards/status/holy_passing.md)。

## 详细机制

- **触发时机**：在卡牌打出后触发（卡牌从打出堆变化时）。
- **转化机制**：将带有陨关键词的卡牌转化为"圣逝"卡牌。
- **升级状态保留**：若原卡牌已升级，转化后的"圣逝"卡牌也会保持升级状态。
- **与[芜生](/mechanics/void_birth.md)的区别**：芜生转化为"芜"，陨转化为"圣逝"。

## 相关机制

- [芜生](/mechanics/void_birth.md)（类似机制，但转化为"芜"）

## 源码

- `SeerKeywordEffectManager.cs`（关键词效果管理器）
- `SeerKeywordCardModel.cs`（关键词卡牌基类）
- `card_keywords.json`（本地化：`SEER_KEYWORD_FALLEN.title` = "陨"）
