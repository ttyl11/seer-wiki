# 能量反弹

> **归属**：玩家可施加
> **施加来源**：玩家获得——[能量](/cards/basic/energy.md)（卡牌）

<img src="/images/powers/energy_reflect_power.png" alt="能量反弹" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 实例化（每次施加独立实例）
- **可见**: 是
- **允许负值**: 否

### 数值参数

| 参数 | 数值 |
|---|---|
| 反弹倍率 | 150 |

## 描述

下一次受到伤害时，反弹<span style="color:#3aa675;font-weight:600">150</span>%的伤害。

## 详细机制

- **反弹触发**：当满足以下条件时触发反弹：
  1. 持有者受到伤害
  2. 有攻击者且不是自己
  3. 攻击者是敌方
  4. 实际穿过格挡的伤害 > 0
- **反弹伤害计算**：反弹伤害 = 未格挡伤害 × 反弹倍率 / 100（整数截断）。
  - 如反弹倍率为 200 时，反弹 <span style="color:#3aa675;font-weight:600">200</span>% 的未格挡伤害。
  - 如反弹倍率为 350 时，反弹 <span style="color:#3aa675;font-weight:600">350</span>% 的未格挡伤害。
- **伤害类型**：造成不可格挡且非攻击伤害。
- **触发后移除**：反弹后移除此能力（仅生效一次）。
- **数值同步**：施加时将反弹倍率同步为层数值。

## 相关卡牌

- [能量](/cards/basic/energy.md)（反弹 <span style="color:#3aa675;font-weight:600">200</span>% 伤害，升级后 <span style="color:#3aa675;font-weight:600">350</span>%）

## 源码

- `SeerEnergyReflectPower.cs`
