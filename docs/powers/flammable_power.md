# 易燃

<img src="/images/powers/flammable_power.png" alt="易燃" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 减益（Debuff，mod 异常状态）
- **叠加方式**: 叠加（Counter）
- **可见**: 是
- **允许负值**: 否

### 数值参数

| 参数 | 数值 |
|---|---|
| 伤害降低百分比 | 20 |
| 烧伤回合 | 2 |

## 描述

造成攻击伤害减少<span style="color:#3aa675;font-weight:600">20</span>%。受到攻击时获得<span style="color:#3aa675;font-weight:600">2</span>层[烧伤](/powers/burn_power.md)。回合结束减<span style="color:#3aa675;font-weight:600">1</span>层。

## 详细机制

- **伤害降低**：仅减少拥有者造成的攻击伤害，非攻击伤害不受影响。攻击伤害 × <span style="color:#3aa675;font-weight:600">0.8</span>（减少 <span style="color:#3aa675;font-weight:600">20</span>%）。
- **受击触发烧伤**：当自身受到攻击伤害且层数 > 0 时，对自身施加烧伤。
  - 每次受击都触发，无次数限制。
- **回合结束减层**：在拥有者一方回合结束时，层数 -<span style="color:#3aa675;font-weight:600">1</span>。
- **异常状态**：属于 mod 异常状态之一。

## 小贴士

- **与[焚烬](/powers/ash_power.md)的区别**：两者都降攻击伤害 20% + 自叠 2 层烧伤。易燃是**受击时**触发（被动），焚烬是**回合结束**自动触发（主动）。

## 相关能力

- [烧伤](/powers/burn_power.md)（受击时获得）

## 相关卡牌

- [醉酒燃烧](/cards/character/drunken_burn.md)（所有生物获得 <span style="color:#3aa675;font-weight:600">3</span> 回合易燃）

## 源码

- `SeerFlammablePower.cs`
