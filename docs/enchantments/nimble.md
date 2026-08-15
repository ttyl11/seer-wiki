# 灵巧

<img src="/images/enchantments/nimble.png" alt="灵巧" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 原版附魔
- **可附魔牌类型**: 获得格挡的牌
- **显示数量**: 是
- **来源**: 原版

### 数值参数

| 参数 | 数值 |
|---|---|
| Amount（格挡加成） | 由 Amount 决定 |

## 描述

这张牌获得的[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)值增加若干点。

## 详细机制

- **格挡加成**：卡牌获得的格挡额外增加等同于附魔等级的数值。
- **附魔限制**：仅可附魔于本身会获得格挡的牌。

## 小贴士

- **防御牌专属强化**：灵巧仅附于会获得格挡的牌，是防御牌的最强附魔之一，附在多段格挡牌上每段都+Amount。
- **与[伶俐](./adroit.md)对比**：伶俐是"打出时获得额外格挡"（独立于卡牌效果），灵巧是"卡牌自身格挡值+Amount"——灵巧对已有格挡的牌更优。

## 相关关键词

- [格挡](/mechanics/block.md)：增加格挡获取量

## 源码

- `Nimble.cs`（原版）
