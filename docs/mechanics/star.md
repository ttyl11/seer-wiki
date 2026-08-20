# 辉星

## 基本信息

- **类型**: 原版资源
- **本地化描述**: 你当前的辉星数。储君的部分卡牌可能会需要辉星才能打出。

## 详细机制

- **用途**：辉星是储君（Regent）角色卡牌的专属资源，部分储君卡牌需要消耗辉星才能打出。
- **获取方式**：
  - 通过卡牌、遗物、充能球等效果获得辉星
- **消耗**：打出需要辉星的卡牌时自动消耗
- **不足时**：无法打出需要辉星的卡牌（提示"我没有足够的辉星"）

## 相关卡牌

- [予天繁星](/cards/colorless/give_heaven_stars.md)（获得 12 点辉星）
- [圣眼斩](/cards/colorless/holy_eye_slash.md)（铸造时获得辉星）
- [晨星](/cards/status/morning_star.md)（抽到此牌时获得辉星）

## 相关遗物

- [星灵圣王](/relics/common/star_holy_king.md)（卡牌生成或消耗时获得辉星）
- [尤娜斯](/relics/uncommon/yunas.md)（生命变化时获得辉星）

## 相关充能球

- [星星充能球](/orbs/star_orb.md)（被动：回合开始时获得辉星）

## 源码

- `PlayerCmd.cs`
- `PlayerCombatState.cs`
- `Hook.cs`
