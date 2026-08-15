# 永久增伤

<img src="/images/powers/permanent_damage_boost_power.png" alt="永久增伤" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 递减（计数型）
- **可见**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| 伤害加成百分比 | 10（每层） |

## 描述

攻击伤害永久增加 <span style="color:#3aa675;font-weight:600">10</span>%（每层）。不会因攻击而移除。

## 详细机制

- **伤害加成**：当拥有者造成攻击伤害时，伤害 × (1 + 层数/100)。
  - 如 <span style="color:#3aa675;font-weight:600">10</span> 层 = <span style="color:#3aa675;font-weight:600">2</span> 倍伤害，<span style="color:#3aa675;font-weight:600">5</span> 层 = <span style="color:#3aa675;font-weight:600">1.5</span> 倍伤害。
- **与[增伤](/powers/next_damage_boost_power.md)的区别**：永久增伤不会在攻击后移除，持续到战斗结束或被其他效果清除。
- **动态变量更新**：层数变化时同步到增伤百分比变量。

## 相关卡牌

- 参考各卡牌描述中提到的"永久增伤"

## 源码

- `SeerPermanentDamageBoostPower.cs`
