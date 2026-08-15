# 沸涌

<img src="/images/powers/boiling_power.png" alt="沸涌" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 减益（Debuff），列入[异常状态](/mechanics/abnormal-status.md)列表
- **叠加方式**: 叠加（Counter）
- **可见**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| 最小受伤 | 5 点 |
| 暴击倍率 | 2 倍（替代原 1.5 倍） |

## 描述

受到的攻击伤害至少为<span style="color:#3aa675;font-weight:600">5</span>点。受到<span style="color:#d4a017;font-weight:600">暴击</span>时，<span style="color:#d4a017;font-weight:600">暴击</span>倍率提升至2倍。在你的回合结束时减少1层。

## 详细机制

- **受伤下限**：
  - 持有者受到攻击伤害时，伤害至少为 5 点
  - 若原始伤害 < 5，提升至 5；若 ≥ 5，不变
- **暴击放大**：
  - 当攻击者持有[暴击](/powers/critical_strike_power.md)能力时（即暴击伤害）：
    - 先将暴击伤害还原为基础伤害（÷1.5）
    - 再取基础伤害与 5 的较大值
    - 最后 ×2（而非正常的 ×1.5）
  - 即暴击伤害至少 10 点（5×2），且暴击倍率从 1.5 提升至 2.0
- **触发闪烁**：能力触发时闪烁（Flash）提示
- **回合结束减层**：持有者一方回合结束时，层数 -1

## 小贴士

- **反格挡型异常**：强制受伤至少 5 点 + 暴击翻倍，对堆格挡的持有者极为致命。

## 相关机制

- [异常状态](/mechanics/abnormal-status.md)
- [暴击](/powers/critical_strike_power.md)

## 源码

- `SeerBoilingPower.cs`
