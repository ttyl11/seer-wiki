# 减伤

<img src="/images/powers/next_damage_reduction_power.png" alt="减伤" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 递减（计数型）
- **可见**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| 伤害减免百分比 | 10（每层） |

## 描述

下一次受到的攻击伤害减少 <span style="color:#3aa675;font-weight:600">10</span>%（每层）。受到攻击伤害后移除此能力。

## 详细机制

- **伤害减免**：当拥有者受到攻击伤害时，伤害 × (1 - 层数/100)。
  - 如 <span style="color:#3aa675;font-weight:600">10</span> 层 = 免疫攻击伤害，<span style="color:#3aa675;font-weight:600">5</span> 层 = 减半伤害。
- **触发后移除**：拥有者受到攻击伤害后移除此能力（仅生效一次）。
- **动态变量更新**：层数变化时同步到减伤百分比变量。

## 相关卡牌

- 参考各卡牌描述中提到的"减伤"

## 源码

- `SeerNextDamageReductionPower.cs`
