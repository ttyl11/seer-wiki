# 星皇之怒

<img src="/images/enchantments/seer_star_emperor_wrath.png" alt="星皇之怒" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 特殊附魔
- **显示数量**: 否

### 数值参数

| 参数 | 数值 |
|---|---|
| 重放次数（Times） | 1 |

## 描述

第一次打出此牌后，此牌获得[<span style="color:#d4a017;font-weight:600">重放</span>](/mechanics/replay.md)+<span style="color:#3aa675;font-weight:600">1</span>。

## 详细机制

- **首次打出前**：不增加重放次数。
- **首次打出后**：标记本战斗已使用，之后卡牌额外重放 <span style="color:#3aa675;font-weight:600">1</span> 次。
- **战斗重置**：每场战斗重置使用状态。打出后并不禁用附魔，因为后续仍需提供重放+1。
- **悬停提示**：鼠标悬停可查看重放状态说明。

## 小贴士

- **首次免费，后续重放**：星皇之怒首次打出按正常重放次数（无加成），首次打出后标记本战已用，之后每次打出都 +1 重放——首打 1 次，之后每次 2 次。
- **与[华彩](./glam.md)对比**：华彩首次打出重放 1 次后禁用（本战仅 1 次双倍），星皇之怒首次打出后永久 +1 重放（本战每次都双倍）——星皇之怒长线战收益更高。

## 相关能力/关键词

- [重放](/mechanics/replay.md)：首次打出后获得的重放状态

## 源码

- `SeerStarEmperorWrath.cs`
