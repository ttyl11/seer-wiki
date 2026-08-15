# 流血

<img src="/images/powers/bleed_power.png" alt="流血" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 减益（Debuff），列入[异常状态](/mechanics/abnormal-status.md)列表
- **叠加方式**: 叠加（Counter）
- **可见**: 是
- **血条预测**: 是（深红色，等于当前层数）

### 数值参数

| 参数 | 数值 |
|---|---|
| 流血增量（受击自叠） | 1 层 |

## 描述

在你的回合结束时受到等于层数的伤害。受到攻击时额外获得<span style="color:#3aa675;font-weight:600">1</span>层<span style="color:#d44;font-weight:600">流血</span>。

## 详细机制

- **回合结束伤害**：
  - 持有者一方回合结束时，若持有者存活，对其造成等于当前层数的伤害
  - 伤害为不可格挡的非攻击伤害（绕过[格挡](/mechanics/block.md)）
  - 伤害结算后，若持有者仍存活，层数 -1
  - 若持有者死亡，等待 0.1~0.25 秒
- **受击自叠**：
  - 持有者受到伤害时（`AfterDamageReceived`），若实际受到了未格挡的伤害（`UnblockedDamage != 0`），额外获得 1 层流血
  - 这意味着越攻击流血目标，流血层数越厚——形成"越打越痛"的正反馈
- **血条预测**：
  - 血条上显示等于当前流血层数的伤害预测段（深红色，从右向左生长）

## 小贴士

- **越打越厚**：受击会自叠 1 层流血，攻击流血目标反而加重流血。适合对高血量敌人叠加后任其自然流失。
- **不可格挡**：回合结束的流血伤害绕过格挡，对堆格挡的敌人有效。

## 相关机制

- [异常状态](/mechanics/abnormal-status.md)

## 源码

- `SeerBleedPower.cs`
