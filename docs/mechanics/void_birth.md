# 芜生

## 基本信息

- **类型**: mod 关键词
- **本地化来源**: `card_keywords.json` 的 `SEER_KEYWORD_VOID_BIRTH`

## 描述

打出后，此牌转化为"芜"。

## 详细机制

- **转化机制**：打出带有芜生关键词的卡牌后，此牌会转化为"芜"状态。
- **与虚无配合**：[虚无](/mechanics/ethereal.md)的卡牌回合结束时被消耗，而芜生卡牌打出后转化为"芜"。两者配合时，玩家需要选择是打出（触发芜生转化）还是保留（回合末虚无消耗）。
- **升级移除**：部分卡牌升级后会移除[虚无](/mechanics/ethereal.md)关键词（如 [绝灭·万物哀鸣](/cards/character/extinction.md)），此时芜生卡牌可安全保留在手牌中。

## 相关卡牌

- [绝灭·万物哀鸣](/cards/character/extinction.md)：带有虚无和芜生关键词，升级后移除虚无

## 相关机制

- [虚无](/mechanics/ethereal.md)（常与芜生配合）

## 源码

- `SeerKeywordCardModel.cs`（基类）
- `card_keywords.json`（本地化）
