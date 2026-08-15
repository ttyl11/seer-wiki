# 未来奇点

<img src="/images/powers/future_singularity_power.png" alt="未来奇点" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 计数器叠加

### 数值参数

| 参数 | 数值 |
|---|---|
| 最大层数 | 3 |

## 描述

每回合开始时按层数分级触发效果：1层使所有敌人[速度](/powers/speed_power.md)-1；2层令所有敌人失去[格挡](/mechanics/block.md)；3层自身[先制](/powers/first_strike_power.md)+1，且打出牌时为1张未满PP的PP牌回复1点PP。受到异常状态或可见减益时层数-1并抵消本次施加。

## 源码

- `SeerFutureSingularityPower.cs`
