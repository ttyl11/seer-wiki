# 星皇之怒

> mod 附魔（Enchantment）

## 基本信息

- **类型**: mod 附魔
- **注册 ID**: `SEER_ENCHANTMENT_SEER_STAR_EMPEROR_WRATH`
- **显示数量**: 否
- **资源路径**: `seer/images/enchantments/seer_star_emperor_wrath.png`

### 数值参数

| 参数 | 数值 |
|---|---|
| 重放次数 | 1 |

## 描述

第一次打出此牌后，此牌获得[<span style="color:#d4a017;font-weight:600">重放</span>](/mechanics/replay.md)+<span style="color:#3aa675;font-weight:600">1</span>。

## 详细机制

- **首次打出前**：不增加重放次数。
- **首次打出后**：标记本战斗已使用，之后卡牌额外重放 <span style="color:#3aa675;font-weight:600">1</span> 次。
- **战斗重置**：每场战斗重置使用状态。
- **附魔条件**：仅可附魔于无现有附魔的卡牌。

## 相关卡牌

- [命宇轮回](/cards/character/fate_reincarnation.md)（选择抽牌堆的牌附魔星皇之怒）

## 相关机制

- [重放](/mechanics/replay.md)（首次打出后获得重放+1）

## 源码

- `SeerStarEmperorWrath.cs`
