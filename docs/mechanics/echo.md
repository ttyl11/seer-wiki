# 回响

> mod 关键词（SEER_KEYWORD_ECHO）

## 基本信息

- **类型**: mod 卡牌关键词
- **来源**: mod 自定义关键词

## 描述

每回合开始时，此牌从任意位置加入你的[手牌](/mechanics/hand.md)。

## 详细机制

- **触发时机**：在卡牌打出后触发，对自身施加回响能力。
- **能力关联**：回响能力会记录关联的回响卡牌。
- **每回合触发**：每回合开始时，将关联的卡牌从任意位置（抽牌堆、弃牌堆、消耗牌堆等）加入[手牌](/mechanics/hand.md)。

## 相关能力

- 回响能力（每回合将关联卡牌加入手牌）

## 相关机制

- [手牌](/mechanics/hand.md)（卡牌加入的目标位置）

## 源码

- `SeerKeywordEffectManager.cs`
- `SeerEchoPower.cs`（每回合加入手牌逻辑）
- `SeerKeywordCardModel.cs`（基类）
- `card_keywords.json`（本地化）
