# 召唤

## 基本信息

- **类型**: 原版状态机制
- **本地化来源**: `static_hover_tips.json` 的 `SUMMON_DYNAMIC` / `SUMMON_STATIC`

## 描述

召唤是一种机制，将额外的生物（如奥斯提、宠物等）加入战斗。召唤物可以作为友方单位参与战斗，拥有自己的生命值、能力和行动。

## 详细机制

- **召唤方式**：
  - 动态召唤：召唤一个动态生成的生物
  - 静态召唤：召唤一个预定义的生物
- **召唤物类型**：
  - **奥斯提**：原版亡灵法师的召唤物，有自己的生命值
  - **宠物**（Pets）：部分 mod 能力可以召唤宠物协助战斗
- **召唤数量**：部分卡牌会指定召唤数量（如 [夜·冥昭瞢闇](/cards/colorless/dark_oblivion.md) 召唤 <span style="color:#3aa675;font-weight:600">3</span> 个奥斯提）
- **召唤物生命值**：召唤物的生命值可以被其他效果利用（如 [夜·冥昭瞢闇](/cards/colorless/dark_oblivion.md) 根据奥斯提的最大生命值施加[灾厄](/powers/doom_power.md)）

## 相关卡牌

- [夜·冥昭瞢闇](/cards/colorless/dark_oblivion.md)：召唤 3 个奥斯提，根据奥斯提最大生命值施加灾厄

## 源码

- `OstyCmd.cs`（原版）
- `StaticHoverTip.cs`（原版）
