# 命运晨星

> **归属**：玩家可施加
> **施加来源**：玩家获得——[支援](/powers/support_power.md)（能力联动）

<img src="/images/powers/fate_morning_star_power.png" alt="命运晨星" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 计数器叠加（上限 5 层）
- **可见**: 是

## 数值参数

| 参数 | 数值 |
|---|---|
| 最大层数 | 5 |
| 每层增伤 | 6% |
| 每层减伤 | 6% |
| 满层合计增伤/减伤 | 30% / 30% |
| 每回合结束回血 | 等同层数 |

## 描述

最多 <span style="color:#3aa675;font-weight:600">5</span> 层。每有一层：造成伤害增加 <span style="color:#3aa675;font-weight:600">6</span>%，受到伤害降低 <span style="color:#3aa675;font-weight:600">6</span>%。<br/>每回合结束时，恢复等同于层数的生命。

## 详细机制

- **获得方式**：每次[支援](/powers/support_power.md)触发成功固定获得 1 层，上限 5 层——已满 5 层时支援照常触发，但晨星不再增加。
- **增伤与减伤双向生效**：自身**造成的伤害**（含攻击伤害与施加的固定伤害等一切自身输出）每层 +6%；自身**受到的伤害**每层 -6%。线性叠加，满层精确 +30% / -30%，不是乘算。
- **不随回合衰减**：层数整场战斗常驻，没有回合数递减。新的战斗开始时清空，靠支援重新滚起来。
- **回合结束回血**：自己回合结束时恢复等同当前层数的生命（3 层回 3 点，5 层回 5 点）。满血时不触发回血，层数不受影响。

## 相关遗物

- [奥菲利娅](/relics/legendary/ophelia.md)（支援触发即获得晨星）

## 相关能力

- [支援](/powers/support_power.md)（晨星的唯一获取来源）

## 源码

- `SeerFateMorningStarPower.cs`
