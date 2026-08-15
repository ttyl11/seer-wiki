# 首发压制

<img src="/images/cards/first_strike_suppress.png" alt="首发压制" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 无色牌
- **能量消耗**: 13（实际耗能由[弃牌堆](/mechanics/discard_pile.md)卡牌数动态减少）
- **类型**: 能力
- **稀有度**: 罕见
- **目标**: 自身
- **可升级**: 是（1 级）
- **关键词**: [固有](/mechanics/innate.md)（升级后移除）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 增伤百分比 | 333 | 333 |

## 描述

[<span style="color:#d4a017;font-weight:600">击晕</span>](/mechanics/stun.md)所有敌人。下一次攻击伤害增加<span style="color:#3aa675;font-weight:600">333</span>%（获得[<span style="color:#d4a017;font-weight:600">增伤</span>](/powers/next_damage_boost_power.md)）。[<span style="color:#d4a017;font-weight:600">弃牌堆</span>](/mechanics/discard_pile.md)每有一张牌，此牌耗能<span style="color:#3aa675;font-weight:600">-1</span>。

## 升级后

不再[<span style="color:#d4a017;font-weight:600">固有</span>](/mechanics/innate.md)。[<span style="color:#d4a017;font-weight:600">击晕</span>](/mechanics/stun.md)所有敌人。下一次攻击伤害增加<span style="color:#3aa675;font-weight:600">333</span>%（获得[<span style="color:#d4a017;font-weight:600">增伤</span>](/powers/next_damage_boost_power.md)）。[<span style="color:#d4a017;font-weight:600">弃牌堆</span>](/mechanics/discard_pile.md)每有一张牌，此牌耗能<span style="color:#3aa675;font-weight:600">-1</span>。

## 小贴士

- **击晕**（[查看机制页](/mechanics/stun.md)）：对所有敌人施加击晕状态，跳过敌人下回合行动。
- **增伤**：增益效果。下次攻击伤害增加 333%，攻击后自动移除。
- **动态耗能**：基础耗能 <span style="color:#3aa675;font-weight:600">13</span> 减去[弃牌堆](/mechanics/discard_pile.md)中卡牌数量，最低为 <span style="color:#3aa675;font-weight:600">0</span>。例：弃牌堆有 5 张牌时耗能为 8。
- **升级效果**：移除[固有](/mechanics/innate.md)关键词，使此牌不再必定在起手牌中。

## 相关能力

- [<span style="color:#d4a017;font-weight:600">增伤</span>](/powers/next_damage_boost_power.md)：下一次攻击伤害增加 333%

## 相关机制

- [击晕](/mechanics/stun.md)（对所有敌人施加击晕）
- [固有](/mechanics/innate.md)（升级前拥有，升级后移除）
- [弃牌堆](/mechanics/discard_pile.md)（影响此牌耗能）

## 源码

- `SeerFirstStrikeSuppress.cs`
