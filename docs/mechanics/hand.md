# 手牌

> 原版状态

## 基本信息

- **类型**: 状态（非能力，不占用 Power 槽位）

## 描述

你当前持有的卡牌。每回合开始时从抽牌堆抽取 <span style="color:#3aa675;font-weight:600">5</span> 张到手牌。

## 详细机制

- **不是 Power**：手牌是战斗中的牌堆之一，不占用 Power 槽位。
- **手牌上限**：默认上限 <span style="color:#3aa675;font-weight:600">10</span> 张，超过上限时无法再抽牌。
- **回合结束弃牌**：回合结束时，手牌中不带[保留](/mechanics/retain.md)关键词的卡牌会弃到弃牌堆。
- **打出卡牌**：从手牌中打出卡牌需要消耗能量（除 <span style="color:#3aa675;font-weight:600">0</span> 耗能卡）。

## 相关卡牌

- [冲锋](/cards/curse/charge.md)（此牌在手牌中时触发效果）
- [云玩家](/cards/curse/cloud_gamer.md)（此牌在手牌中时封锁 PP 卡）

## 相关机制

- [抽牌堆](/mechanics/draw_pile.md)（每回合从抽牌堆抽到手牌）
- [弃牌堆](/mechanics/discard_pile.md)（回合结束时手牌弃到弃牌堆）
- [保留](/mechanics/retain.md)（回合结束时不弃到手牌）
- [固有](/mechanics/innate.md)（战斗开始时在手牌）

## 源码

- `StaticHoverTip.cs`（枚举定义）
- `static_hover_tips.json`（本地化）
- `PileType.cs`
