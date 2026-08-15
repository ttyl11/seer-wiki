# 消耗牌堆

> 原版状态

## 基本信息

- **类型**: 状态（非能力，不占用 Power 槽位）

## 描述

点击查看在本场战斗中被消耗的卡牌。

## 详细机制

- **不是 Power**：消耗牌堆是战斗中的牌堆之一，不占用 Power 槽位。
- **消耗来源**：带有[消耗](/mechanics/exhaust.md)关键词的卡牌被打出后进入消耗牌堆，[虚无](/mechanics/ethereal.md)卡牌回合结束时进入消耗牌堆，被其他效果消耗的卡牌也会进入。
- **不洗回**：消耗牌堆中的卡牌**不会**在抽牌堆空时洗回，战斗结束前无法再次使用。
- **战斗结束恢复**：战斗结束后，消耗牌堆中的卡牌会恢复到牌组中，不会永久丢失。
- **查看方式**：点击消耗牌堆图标可查看其中的卡牌。

## 相关卡牌

- [逍遥游](/cards/character/carefree_journey.md)（从消耗牌堆选一张牌置入抽牌堆顶）
- [镂月裁云](/cards/character/cloud_cutting_moon.md)（消耗诅咒或状态牌）

## 相关机制

- [消耗](/mechanics/exhaust.md)（卡牌关键词，触发后进入消耗牌堆）
- [虚无](/mechanics/ethereal.md)（回合结束时消耗）
- [抽牌堆](/mechanics/draw_pile.md)（独立牌堆，不参与洗牌）
- [弃牌堆](/mechanics/discard_pile.md)（独立牌堆，不参与洗牌）

## 源码

- `StaticHoverTip.cs`（枚举定义）
- `static_hover_tips.json`（本地化）
- `PileType.cs`
