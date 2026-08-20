# 消亡



<img src="/images/powers/demise_power.png" alt="消亡" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 减益（Debuff）
- **叠加方式**: 递减（计数型）
- **可见**: 是
- **允许负值**: 否

## 描述

这个生物在其回合结束时失去生命。

## 详细机制

- **触发时机**：在持有者的回合结束时触发。
- **伤害类型**：造成不可格挡且非攻击伤害。
  - 不可格挡：无视[格挡](/mechanics/block.md)直接扣血
  - 非攻击伤害：不受[力量](/powers/strength_power.md)影响
- **伤害值**：等于层数，每次触发扣除层数等量的生命值。
- **无来源**：无伤害来源、无卡牌来源。

## 相关卡牌

- [戕伐樊笼](/cards/character/cage_destruction.md)（对方获得 <span style="color:#3aa675;font-weight:600">8</span> 层消亡）

## 源码

- `DemisePower.cs`（原版能力）
