# 防御

<img src="/images/powers/defense_power.png" alt="防御" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff，正层数）/ 减益（Debuff，负层数）
- **叠加方式**: 递减（计数型）
- **可见**: 是
- **允许负值**: 是
- **来源**: mod 能力

## 描述

每有一层，受到的攻击伤害降低<span style="color:#3aa675;font-weight:600">1</span>点。

## 详细机制

- **伤害减免**：仅减少拥有者受到的攻击伤害，非攻击伤害不受影响。每层减少 1 点实际损失生命值。
- **计算方式**：实际损失 = max(0, 原始伤害 - 防御层数)。
- **与格挡区别**：格挡在伤害结算前抵消，防御在伤害结算后减少实际损失生命值。
- **类型随层数变化**：层数 ≥ 0 时为 Buff，层数 < 0 时为 Debuff。

## 相关卡牌

- [黎羽幻生](/cards/character/feather_phantom.md)（全属性+1，包含防御+1）
- [宇宙胎动](/cards/character/cosmic_movement.md)（全属性+1，包含防御+1）

## 相关机制

- [全属性](/mechanics/all_attributes.md)（防御是全属性之一）
- [格挡](/mechanics/block.md)（不同于格挡，防御在伤害结算后减少损失）

## 源码

- `SeerDefensePower.cs`
