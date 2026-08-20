# 跟踪



<img src="/images/powers/tracking_power.png" alt="跟踪" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 递减（计数型）
- **可见**: 是
- **允许负值**: 否

## 描述

[虚弱](/powers/weak_power.md)的敌人从攻击牌中受到<span style="color:#3aa675;font-weight:600">2</span>倍伤害。

## 详细机制

- **伤害倍增**：当满足以下所有条件时，层数作为伤害倍率：
  1. 为攻击伤害
  2. 有卡牌来源
  3. 攻击者是持有者或持有者的宠物
  4. 目标持有[虚弱](/powers/weak_power.md)状态
- **倍率**：伤害 × 层数（如 <span style="color:#3aa675;font-weight:600">2</span> 层 = <span style="color:#3aa675;font-weight:600">2</span> 倍伤害，<span style="color:#3aa675;font-weight:600">3</span> 层 = <span style="color:#3aa675;font-weight:600">3</span> 倍伤害）。
- **仅对虚弱目标生效**：目标必须持有[虚弱](/powers/weak_power.md)状态，否则不触发倍增。
- **需卡牌来源**：怪物招式（无卡牌来源）不触发跟踪倍增。

## 相关能力

- [虚弱](/powers/weak_power.md)（跟踪倍增的触发条件）

## 相关卡牌

- [恶咒追魂](/cards/character/evil_curse_chasing.md)（获得 <span style="color:#3aa675;font-weight:600">2</span> 层跟踪，配合对敌人的虚弱）

## 源码

- `TrackingPower.cs`（原版）
