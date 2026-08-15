# 弦月反弹

<img src="/images/powers/crescent_edge_reflect_power.png" alt="弦月反弹" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 递减（计数型）
- **可见**: 是
- **允许负值**: 否

## 数值参数

| 参数 | 数值 |
|---|---|
| 层数 | 1 |

## 描述

免疫下次受到的攻击伤害，并以[固定伤害](/powers/fixed_damage_power.md)形式反弹格挡后剩余伤害给攻击者。

## 详细机制

### 免疫机制

- **触发条件**：
  - 目标是自身
  - 有伤害
  - 有层数
  - 为攻击伤害（非持续伤害/固定伤害）
  - 有攻击者且不是自身
- **效果**：缓存格挡后剩余伤害，抵消生命值损失。
- **格挡正常消耗**：格挡先正常消耗，只抵消格挡被打破后的剩余伤害。

### 反弹机制

- **效果**：将缓存的格挡后剩余伤害以[固定伤害](/powers/fixed_damage_power.md)形式施加给攻击者。
- **结算时机**：目标下回合开始时结算。
- **仅攻击者存活**：若攻击者已死亡则不反弹。

### 层数消耗

- **每次消耗 <span style="color:#3aa675;font-weight:600">1</span> 层**：层数 -1，不是直接移除整个能力。
- **层数归零自动移除**：层数为 <span style="color:#3aa675;font-weight:600">0</span> 时由系统自动移除。

## 相关卡牌

- [弦月锋华](/cards/character/crescent_edge.md)（打出后对自身施加 <span style="color:#3aa675;font-weight:600">1</span> 层弦月反弹）

## 相关能力

- [固定伤害](/powers/fixed_damage_power.md)（反弹时施加的能力）

## 源码

- `SeerCrescentEdgeReflectPower.cs`
