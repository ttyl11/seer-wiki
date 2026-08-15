# 衰弱

<img src="/images/powers/weaken_power.png" alt="衰弱" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 减益（Debuff），列入[异常状态](/mechanics/abnormal-status.md)列表
- **叠加方式**: 叠加（Counter）
- **可见**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| 受到的攻击伤害增加 | 25% / 层 |

## 描述

每有一层，受到的攻击伤害增加<span style="color:#3aa675;font-weight:600">25</span>%。在你的回合结束时减少1层。

## 详细机制

- **放大受伤**：
  - 持有者受到攻击伤害时，伤害增加 25% × 层数（乘算）
  - 仅影响受到的攻击伤害，不影响[固定伤害](/powers/fixed_damage_power.md)、中毒等非攻击伤害
  - 多层线性叠加：2 层 +50%，3 层 +75%，4 层 +100%（翻倍）
- **回合结束减层**：
  - 持有者一方回合结束时，层数 -1

## 小贴士

- **放大受伤型异常**：与原版[易伤](/powers/vulnerable_power.md)机制类似，但数值不同（衰弱 25%/层）。适合配合高攻击伤害爆发击杀。

## 相关机制

- [异常状态](/mechanics/abnormal-status.md)

## 源码

- `SeerWeakenPower.cs`
