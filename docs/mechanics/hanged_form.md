# 缢形

> mod 关键词（SEER_KEYWORD_HANGED_FORM）

## 基本信息

- **类型**: mod 卡牌关键词
- **来源**: mod 自定义关键词

## 描述

打出时，本场战斗中你无法再获得任何增益。

## 详细机制

- **触发时机**：在卡牌打出后触发。
- **效果**：对自身施加缢形（1 层），本场战斗中无法获得任何增益（Buff）。
- **增益屏蔽**：会拦截所有增益能力的施加，使增益无法生效。
- **负面影响**：此关键词对玩家是负面效果，使用时需谨慎搭配。

## 源码

- `SeerKeywordEffectManager.cs`
- `SeerHangedFormPower.cs`（增益屏蔽逻辑）
- `SeerKeywordCardModel.cs`（基类）
- `card_keywords.json`（本地化）
