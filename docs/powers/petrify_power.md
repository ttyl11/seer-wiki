# 石化

<img src="/images/powers/petrify_power.png" alt="石化" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 减益（Debuff），列入[异常状态](/mechanics/abnormal-status.md)列表
- **叠加方式**: 叠加（Counter）
- **可见**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| 攻击伤害降低 | 70% |
| 转化为格挡比例 | 70% |

## 描述

攻击伤害降低<span style="color:#3aa675;font-weight:600">70</span>%，本应造成的伤害有<span style="color:#3aa675;font-weight:600">70</span>%转化为自身的<span style="color:#d4a017;font-weight:600">格挡</span>。在你的回合结束时减少1层。

## 详细机制

- **攻击伤害降低**：
  - 持有者造成的攻击伤害降低 70%（乘以 0.3）
  - 仅影响攻击伤害，不影响[固定伤害](/powers/fixed_damage_power.md)等非攻击伤害
  - 减伤幅度固定 70%，不随层数变化
- **伤害转格挡**：
  - 攻击结算后，获得等于**原始伤害** × 70% 的[格挡](/mechanics/block.md)
  - "原始伤害"指减伤前的伤害值，而非实际造成的伤害
  - 例：原始 10 点攻击 → 实际造成 3 点（×0.3）+ 获得 7 点格挡（10×70%）
- **回合结束减层**：持有者一方回合结束时，层数 -1

## 小贴士

- **伤害变格挡**：类似原版"愤怒"机制但更极端（70% vs 50%）。对持有者是双刃剑——输出大降但获得大量格挡。

## 相关机制

- [异常状态](/mechanics/abnormal-status.md)
- [格挡](/mechanics/block.md)

## 源码

- `SeerPetrifyPower.cs`
