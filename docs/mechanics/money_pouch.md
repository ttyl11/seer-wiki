# 金币

> 原版状态

## 基本信息

- **类型**: 状态（非能力，不占用 Power 槽位）

## 描述

你所拥有的金币数。它是高塔中的货币。

## 详细机制

- **不是 Power**：金币是玩家的基础资源，不占用 Power 槽位。
- **用途**：
  - 在商人处购买卡牌、遗物、药水、移除卡牌服务
  - 部分事件中消耗金币触发效果
- **获取方式**：
  - 战斗胜利奖励
  - 部分卡牌效果（如 [星币](/cards/colorless/coin.md)）
  - 部分遗物效果
  - 事件奖励
- **持久化**：金币在战斗外持久保存，不会因战斗结束而重置。

## 相关卡牌

- [星币](/cards/colorless/coin.md)（获得 <span style="color:#3aa675;font-weight:600">36</span> 金币）
- [匠心](/cards/quest/craftsman_heart.md)（任务奖励 <span style="color:#3aa675;font-weight:600">8000</span> 金币）

## 源码

- `StaticHoverTip.cs`
- `static_hover_tips.json`（本地化）
- `PlayerCmd.cs`（原版）
