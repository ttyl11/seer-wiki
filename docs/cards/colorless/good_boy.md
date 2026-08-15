# 好男孩

<img src="/images/cards/good_boy.png" alt="好男孩" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 无色牌
- **能量消耗**: 1
- **类型**: 能力
- **稀有度**: 普通
- **目标**: 自身
- **关键词**: [固有](/mechanics/innate.md)
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 力量损失 | 1 | 1 |
| 防御获取 | 1 | 1 |
| 格挡 | 8 | 12 |

## 描述

每回合结束时，失去<span style="color:#3aa675;font-weight:600">1</span>点[<span style="color:#d4a017;font-weight:600">力量</span>](/powers/strength_power.md)，获得<span style="color:#3aa675;font-weight:600">1</span>点[<span style="color:#d4a017;font-weight:600">防御</span>](/powers/defense_power.md)和<span style="color:#3aa675;font-weight:600">8</span>点[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)。

## 升级后

每回合结束时，失去<span style="color:#3aa675;font-weight:600">1</span>点[<span style="color:#d4a017;font-weight:600">力量</span>](/powers/strength_power.md)，获得<span style="color:#3aa675;font-weight:600">1</span>点[<span style="color:#d4a017;font-weight:600">防御</span>](/powers/defense_power.md)和<span style="color:#3aa675;font-weight:600">8</span>点[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)。

## 小贴士

- **固有**：（原版关键词）。此牌在战斗开始时必定在手牌中。
- **好男孩能力**：施加好男孩能力，记录格挡值（<span style="color:#3aa675;font-weight:600">8</span>，升级后 <span style="color:#3aa675;font-weight:600">12</span>）。
- **回合结束触发**：[好男孩能力](/powers/good_boy_power.md)在每回合结束时：扣除 <span style="color:#3aa675;font-weight:600">1</span> 点[力量](/powers/strength_power.md)，获得 <span style="color:#3aa675;font-weight:600">1</span> 点[防御](/powers/defense_power.md)，获得等于记录值的[格挡](/mechanics/block.md)。
- **升级效果**：升级后，格挡提升 <span style="color:#3aa675;font-weight:600">4</span>（从 <span style="color:#3aa675;font-weight:600">8</span> 提升至 <span style="color:#3aa675;font-weight:600">12</span>）。

## 相关能力

- [好男孩](/powers/good_boy_power.md)（回合结束时力量-1、防御+1、获得格挡）
- [力量](/powers/strength_power.md)（每回合 -1）
- [防御](/powers/defense_power.md)（每回合 +1）

## 相关机制

- [格挡](/mechanics/block.md)（获得 8 点格挡，升级后 12 点）
- [固有](/mechanics/innate.md)（战斗开始时必定在手牌）

## 源码

- `SeerGoodBoy.cs`
