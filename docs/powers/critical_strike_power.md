# 暴击

<img src="/images/powers/critical_strike_power.png" alt="暴击" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 中性（不属于增益也不属于减益，不被消除增益/减益效果清除）
- **叠加方式**: 实例化（每次施加独立实例）
- **可见**: 是
- **来源**: mod 能力

### 数值参数

| 参数 | 数值 |
|---|---|
| 暴击概率 | 12.5 |
| 暴击倍率 | 1.5 |

## 描述

攻击时有<span style="color:#3aa675;font-weight:600">12.5</span>%几率造成暴击，造成<span style="color:#3aa675;font-weight:600">1.5</span>倍伤害。

## 详细机制

- **暴击判定**：攻击时通过随机数判定，若小于暴击概率（<span style="color:#3aa675;font-weight:600">12.5</span>%）则触发暴击。
- **暴击加成**：仅拥有者造成的攻击伤害可暴击，暴击时伤害 ×1.5。
- **多人同步**：随机判定使用框架随机数，确保多端一致。
- **与锁定能力联动**：
  - 二阶锁定类能力：必定暴击（100%）
  - 一阶锁定类能力：50% 暴击概率
- **不可清除**：暴击能力为中性，不属于 Buff 也不属于 Debuff，不会被消除 buff/debuff 的效果清除。
- **即死判定**：支持即死判定，与[魔王咒怨](/powers/demon_king_curse_power.md)联动时可对相同生命值的多个目标触发即死。

## 相关能力

- [必定暴击](/powers/next_guaranteed_crit_power.md)（下N次攻击必定暴击）

## 相关卡牌

- [黎羽幻生](/cards/character/feather_phantom.md)（下两次攻击必定暴击，通过必定暴击能力触发暴击效果）

## 源码

- `SeerCriticalStrikePower.cs`
