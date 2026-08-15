# 覆甲

<img src="/images/powers/plating_power.png" alt="覆甲" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 递减（计数型）
- **可见**: 是
- **允许负值**: 否
- **多人模式缩放**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| 递减层数 | 1 |

## 描述

在你的回合结束时获得[格挡](/mechanics/block.md)。覆甲会在你的回合开始时减少<span style="color:#3aa675;font-weight:600">1</span>层。

## 详细机制

- **回合结束获得格挡**：拥有者一方回合结束前，若持有者在参与者列表中，获得等于层数的[格挡](/mechanics/block.md)。
  - 获得的格挡不受力量影响。
  - 在回合结束前早期触发，确保在其他结束效果之前获得格挡。
- **回合开始减层**：拥有者一方回合开始时，若持有者在参与者列表中且不是第一回合，层数 -<span style="color:#3aa675;font-weight:600">1</span>。
  - 玩家与敌人均减少 1 层（敌人在多人模式中按玩家人数缩放）。
- **怪物开局格挡**：若持有者是怪物且为第一回合，回合开始前立即获得等于层数的格挡（确保怪物开局就有覆甲提供的格挡）。
- **多人模式缩放**：敌人持有时，减层数 = 玩家人数；施加量按 (玩家人数-1)×2+1 缩放。

## 相关机制

- [格挡](/mechanics/block.md)（回合结束时获得格挡）

## 相关卡牌

- [龙舞九天](/cards/character/dragon_dance_nine_heavens.md)（获得 <span style="color:#3aa675;font-weight:600">9</span> 层覆甲）

## 源码

- `PlatingPower.cs`（原版）
