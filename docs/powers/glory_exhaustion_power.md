# 荣尽枯生

<img src="/images/powers/glory_exhaustion_power.png" alt="荣尽枯生" style="max-width:120px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 计数器（1，按层数叠加）
- **可见**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| 反击中毒层数 | 3 |
| 持续回合 | 3 |

## 描述

受到敌人伤害时，对伤害来源施加<span style="color:#3aa675;font-weight:600">3</span>层[<span style="color:#d44;font-weight:600">中毒</span>](/powers/poison_power.md)。在你的回合开始时层数减<span style="color:#3aa675;font-weight:600">1</span>。

## 详细机制

- **触发时机**：在拥有者受到伤害后触发。
- **反击条件**：拥有者本人受到伤害，且伤害来源为敌方（不受队友伤害触发）。
- **反击效果**：对伤害来源施加 <span style="color:#3aa675;font-weight:600">3</span> 层[中毒](/powers/poison_power.md)。
- **持续回合**：层数表示剩余回合数。拥有者一方回合开始时层数 -<span style="color:#3aa675;font-weight:600">1</span>，归零后自动移除。
- **叠加方式**：按计数叠加，多次施加合并层数。

## 相关能力

- [中毒](/powers/poison_power.md)（受到伤害时对来源施加）

## 相关卡牌

- [荣尽枯生](/cards/character/glory_exhaustion.md)（获得 3 回合荣尽枯生效果）

## 源码

- `SeerGloryExhaustionPower.cs`
