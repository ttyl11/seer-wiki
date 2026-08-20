# 回合减伤

> **归属**：玩家可施加
> **施加来源**：玩家获得——[琉梦](/relics/epic/liu_meng.md)（遗物）

<img src="/images/powers/turn_damage_reduction_power.png" alt="回合减伤" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益
- **叠加方式**: 按层数叠加
- **可见**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| 减伤百分比 | 30 |

## 描述

受到的攻击伤害减少<span style="color:#3aa675;font-weight:600">30</span>%。持续1回合。

## 详细机制

- **层数即百分比**：层数直接作为减伤百分比，层数变化时同步更新减伤比例。
- **仅攻击伤害**：只减少攻击伤害，非攻击伤害不受影响。
- **拥有者过滤**：只影响拥有者本人，不影响他人。
- **回合结束移除**：拥有者一方回合结束时整体移除，持续 1 回合。

## 源码

- `SeerTurnDamageReductionPower.cs`
