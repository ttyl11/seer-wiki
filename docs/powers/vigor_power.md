# 活力

<img src="/images/powers/vigor_power.png" alt="活力" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 递减（计数型）
- **可见**: 是
- **允许负值**: 否

## 描述

你的下一张攻击牌伤害增加。

## 详细机制

- **伤害加成**：当拥有者造成攻击伤害时，每层活力增加 <span style="color:#3aa675;font-weight:600">1</span> 点攻击伤害。
- **仅下次攻击**：攻击前缓存下一次攻击命令，攻击结算后扣除缓存的层数。
- **卡牌来源限制**：只对卡牌来源的攻击生效，不作用于怪物招式或其它来源。
- **一次性消耗**：触发后层数归零，不是每层独立消耗。

## 相关卡牌

- [宇宙胎动](/cards/character/cosmic_movement.md)（获得等量活力）

## 源码

- `VigorPower.cs`（原版能力）
