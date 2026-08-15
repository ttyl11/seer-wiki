# 神游

<img src="/images/powers/trance_power.png" alt="神游" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 减益（Debuff），列入[异常状态](/mechanics/abnormal-status.md)列表
- **叠加方式**: 叠加（Counter）
- **可见**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| 攻击伤害降低 | 20% |
| 回合结束自叠睡眠 | 2 层 |

## 描述

攻击伤害降低<span style="color:#3aa675;font-weight:600">20</span>%。在你的回合结束时获得<span style="color:#3aa675;font-weight:600">2</span>层[<span style="color:#d4a017;font-weight:600">睡眠</span>](/powers/sleep_power.md)并减少1层。

## 详细机制

- **攻击伤害降低**：
  - 持有者造成的攻击伤害降低 20%（乘以 0.8）
  - 减伤幅度固定 20%，不随层数变化
- **回合结束自叠睡眠**：
  - 持有者一方回合结束时，若层数 > 0，对自身施加 2 层[睡眠](/powers/sleep_power.md)
  - 睡眠使攻击伤害降 50%，且受未格挡伤害时移除
  - 然后神游层数 -1

## 小贴士

- **越拖越弱**：每回合自叠 2 层睡眠（攻击降 50%），形成"神游→睡眠→输出腰斩"的连锁削弱。

## 相关机制

- [异常状态](/mechanics/abnormal-status.md)
- [睡眠](/powers/sleep_power.md)（回合结束自叠）

## 源码

- `SeerTrancePower.cs`
