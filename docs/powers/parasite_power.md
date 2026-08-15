# 寄生

<img src="/images/powers/parasite_power.png" alt="寄生" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 减益（Debuff），列入[异常状态](/mechanics/abnormal-status.md)列表
- **叠加方式**: 叠加（Counter）
- **可见**: 是
- **血条预测**: 是（绿色，2 点）

### 数值参数

| 参数 | 数值 |
|---|---|
| 每回合伤害 | 2 |
| 治疗对手 | 2 |

## 描述

在你的回合开始时受到<span style="color:#3aa675;font-weight:600">2</span>点伤害，并治疗所有对手<span style="color:#3aa675;font-weight:600">2</span>点[<span style="color:#d4a017;font-weight:600">生命</span>](/mechanics/star.md)。在你的回合开始时减少1层。

## 详细机制

- **回合开始伤害**：
  - 持有者一方回合开始时，若持有者存活，受 2 点不可格挡的非攻击伤害
- **治疗所有对手**：
  - 伤害结算后，若持有者仍存活，治疗所有对手 2 点生命
- **回合开始减层**：减 1 层
- **血条预测**：绿色，2 点

## 小贴士

- **双向伤害**：自身受伤 2 点 + 对手回血 2 点，等效 4 点差值/层。对怪物施加寄生是有效削弱手段。

## 相关机制

- [异常状态](/mechanics/abnormal-status.md)

## 源码

- `SeerParasitePower.cs`
