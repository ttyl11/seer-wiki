# 缩小



<img src="/images/powers/shrink_power.png" alt="缩小" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 减益（Debuff）
- **叠加方式**: 递减（计数型，负层数时为单例）
- **可见**: 是
- **允许负值**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| 伤害降低百分比 | 30 |

## 描述

这个生物的攻击伤害在<span style="color:#3aa675;font-weight:600">3</span>回合内减少<span style="color:#3aa675;font-weight:600">30</span>%。

## 详细机制

- **伤害降低**：当拥有者造成攻击伤害时，攻击伤害 × 0.7（减少 <span style="color:#3aa675;font-weight:600">30</span>%）。
  - 仅影响攻击伤害，不影响固定伤害、中毒等非攻击伤害。
- **视觉变化**：施加时将持有者的视觉缩放至 <span style="color:#3aa675;font-weight:600">0.5</span> 倍（Vantom 怪物除外，使用 <span style="color:#3aa675;font-weight:600">0.75</span> 秒动画时间）。移除时恢复至 <span style="color:#3aa675;font-weight:600">1</span> 倍。
- **叠加规则**：
  - **正层数**：按计数叠加，拥有者一方回合结束时层数 -<span style="color:#3aa675;font-weight:600">1</span>。
  - **负层数**：单例叠加（不递减），表示永久缩小。
- **施加者死亡清除**：当施加者死亡时，移除此能力。
- **施加者名称**：若施加者为怪物，记录怪物名称。

## 相关卡牌

- [极度冰点](/cards/character/extreme_freeze.md)（通过瘫痪触发缩小）

## 源码

- `ShrinkPower.cs`（原版）
