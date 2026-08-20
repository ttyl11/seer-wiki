# 多回合先制

> **归属**：玩家可施加
> **施加来源**：玩家获得——[苍鹭幻翎](/cards/character/heron_illusion_feather.md)（卡牌）、[无始源光](/cards/character/primordial_light.md)（卡牌）、[瞬影药水](/potions/first_strike_potion.md)（药水，游戏中描述为"延迟先制"）

<img src="/images/powers/delayed_first_strike_power.png" alt="多回合先制" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 计数器（按层数叠加）
- **可见**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| 每回合先制量（默认） | 1 |
| 持续回合（默认） | 1 |

不同施加来源会覆写这两个参数（如[瞬影药水](/potions/first_strike_potion.md)为每回合 2 层、持续 2 回合），以实际施加时为准。

## 描述

在你的回合开始时获得<span style="color:#3aa675;font-weight:600">1</span>点[<span style="color:#d4a017;font-weight:600">先制</span>](/powers/first_strike_power.md)。持续<span style="color:#3aa675;font-weight:600">1</span>回合。

## 详细机制

- **回合开始获得先制**：
  - 自身回合开始时，获得固定量的[先制](/powers/first_strike_power.md)（量为施加时设定的 FirstStrikeAmount，**不随本能力层数增长**）
  - 先制施加后立即层数 -1（衰减发生在回合开始效果结算后，非回合结束——避免施加当回合先衰减导致 N 层只触发 N-1 次）
  - 层数降为 0 时自动移除
- **层数的含义**：N 层 = 之后 N 个自身回合开始时各触发一次；每回合获得的先制量固定
- **中途施加不立刻生效**：回合中途获得时，从下一个自身回合开始触发

## 相关能力

- [先制](/powers/first_strike_power.md)：每回合获得的目标能力

## 相关卡牌

- [苍鹭幻翎](/cards/character/heron_illusion_feather.md)（获得 4 回合多回合先制）
- [无始源光](/cards/character/primordial_light.md)

## 相关药水

- [瞬影药水](/potions/first_strike_potion.md)（每回合 2 层先制、持续 2 回合）

## 源码

- `SeerDelayedFirstStrikePower.cs`
