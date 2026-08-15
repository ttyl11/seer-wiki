# 多回合先制

<img src="/images/powers/delayed_first_strike_power.png" alt="多回合先制" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 递减（刷新型）
- **可见**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| 先制量 | 1 |
| 持续回合 | 1 |

## 描述

在你的回合开始时获得<span style="color:#3aa675;font-weight:600">1</span>点[<span style="color:#d4a017;font-weight:600">先制</span>](/powers/first_strike_power.md)。持续<span style="color:#3aa675;font-weight:600">1</span>回合。

## 详细机制

- **回合开始获得先制**：
  - 自身回合开始时，获得先制
- **回合结束递减**：
  - 自身回合结束时，持续回合 -1
  - 持续回合降为 0 时自动移除

## 相关能力

- [先制](/powers/first_strike_power.md)：每回合获得的目标能力

## 相关卡牌

- [苍鹭幻翎](/cards/character/heron_illusion_feather.md)（获得 4 回合多回合先制）
- [无始源光](/cards/character/primordial_light.md)

## 源码

- `SeerDelayedFirstStrikePower.cs`
