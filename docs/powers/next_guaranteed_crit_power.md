# 必定暴击

<img src="/images/powers/next_guaranteed_crit_power.png" alt="必定暴击" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 实例化（每次施加独立实例）
- **可见**: 是
- **来源**: mod 能力

## 描述

下一次攻击必定[<span style="color:#d4a017;font-weight:600">暴击</span>](/powers/critical_strike_power.md)（<span style="color:#3aa675;font-weight:600">1.5</span>倍伤害）。

## 详细机制

- **暴击加成**：当拥有者造成攻击伤害时，伤害 ×1.5。
- **触发后移除**：拥有者攻击后，移除自身。
- **叠加方式**：实例化，每次施加独立实例。施加 <span style="color:#3aa675;font-weight:600">2</span> 层即下两次攻击必定暴击。

## 相关卡牌

- [黎羽幻生](/cards/character/feather_phantom.md)（下两次攻击必定暴击，施加 2 层）

## 相关能力

- [暴击](/powers/critical_strike_power.md)（必定暴击触发时造成 1.5 倍伤害）

## 源码

- `SeerNextGuaranteedCritPower.cs`
