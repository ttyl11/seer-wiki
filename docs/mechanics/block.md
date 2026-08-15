# 格挡

> 原版状态

## 基本信息

- **类型**: 状态（非能力，不占用 Power 槽位）
- **枚举值**: 5

## 描述

在下个回合前，阻挡伤害。

## 详细机制

- **不是 Power**：格挡不是一种能力（Power），而是生物的固有属性，不占用 Power 槽位。
- **伤害减免**：当生物受到伤害时，先扣除格挡值，再扣除生命值。例如 <span style="color:#3aa675;font-weight:600">5</span> 点格挡受到 <span style="color:#3aa675;font-weight:600">8</span> 点伤害时，格挡清零并损失 <span style="color:#3aa675;font-weight:600">3</span> 点生命。
- **回合结束清除**：格挡在持有者的下一回合开始时清零（除非有"壁垒"等能力保留格挡）。
- **施加方式**：通过卡牌效果（如防御牌）或能力效果增加格挡值。
- **自动提示**：卡牌描述中涉及格挡时，"格挡"一词会自动添加悬停提示链接到本说明。
- **视觉表现**：生物血条旁会显示格挡值（蓝色数字）。

## 相关卡牌

- 所有提供格挡的卡牌（如 [傲龙有悔](/cards/character/arrogant_dragon_repents.md) 获得 <span style="color:#3aa675;font-weight:600">7</span> 点格挡）

## 源码

- `StaticHoverTip.cs`
- `static_hover_tips.json`（本地化）
- `images/ui/combat/block.png`（格挡图标）
