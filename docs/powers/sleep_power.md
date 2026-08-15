# 睡眠

<img src="/images/powers/sleep_power.png" alt="睡眠" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 减益（Debuff），列入[异常状态](/mechanics/abnormal-status.md)列表
- **叠加方式**: 叠加（Counter）
- **可见**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| 攻击伤害降低 | 50% |

## 描述

攻击伤害降低<span style="color:#3aa675;font-weight:600">50</span>%。受到未被格挡的伤害时移除此效果。在你的回合结束时减少1层。

## 详细机制

- **攻击伤害降低**：
  - 持有者造成的攻击伤害降低 50%（乘以 0.5）
  - 仅影响攻击伤害，不影响[固定伤害](/powers/fixed_damage_power.md)等非攻击伤害
  - 减伤幅度固定 50%，不随层数变化
- **受击移除**：
  - 持有者受到伤害时（`AfterDamageReceived`），若实际受到了未格挡的伤害（`UnblockedDamage != 0`），立即移除睡眠状态
  - 即"打一下就醒"——任意未格挡的伤害都会唤醒
- **回合结束减层**：
  - 持有者一方回合结束时，层数 -1
  - 若未被攻击，睡眠会随回合自然消退

## 小贴士

- **打一下就醒**：任意未格挡伤害立即移除睡眠。适合用低伤害高频攻击先唤醒再输出，避免浪费高伤害卡。
- **降伤固定50%**：不随层数变化，多层施加无额外减伤收益。

## 相关机制

- [异常状态](/mechanics/abnormal-status.md)

## 源码

- `SeerSleepPower.cs`
