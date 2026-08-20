# 致命印记

> **归属**：玩家可施加
> **施加来源**：玩家施加给敌方——[弑序神罗](/relics/legendary/order_killing_god_luo.md)（遗物）

<img src="/images/powers/fatal_mark_power.png" alt="致命印记" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 减益（Debuff）
- **叠加方式**: 计数器叠加
- **可见**: 是

## 数值参数

| 参数 | 数值 |
|---|---|
| 固定伤害 | 10 |
| 能量获取 | 1 |
| 每意图最大层数 | 3 |

## 描述

标记在对手的每个随机[意图](/mechanics/intent.md)上，敌人使用此意图后消失。每个意图最多能被标记 <span style="color:#3aa675;font-weight:600">3</span> 层。敌人使用此意图时，根据[<span style="color:#9b59b6;font-weight:600">致命印记</span>](/powers/fatal_mark_power.md)层数触发不同效果：<span style="color:#d4a017;font-weight:600">1层</span>：使用后受到 <span style="color:#3aa675;font-weight:600">10</span> 点[固定伤害](/mechanics/fixed-damage.md)。<span style="color:#d4a017;font-weight:600">2层</span>：使用后我获得 <span style="color:#3aa675;font-weight:600">1</span> 点能量。<span style="color:#d4a017;font-weight:600">3层</span>：将此意图无效化。

## 详细机制

- **标记方式**：[<span style="color:#9b59b6;font-weight:600">致命印记</span>](/powers/fatal_mark_power.md)标记在敌人的[意图](/mechanics/intent.md)上，不是标记在敌人身上。一个敌人有多个意图时，每个意图可以独立被标记。
- **每意图上限**：每个意图最多被标记 <span style="color:#3aa675;font-weight:600">3</span> 层。散布印记时会在所有敌人的所有意图中随机分配，优先把部分意图堆到 <span style="color:#3aa675;font-weight:600">3</span> 层。
- **<span style="color:#d4a017;font-weight:600">3层</span>效果（意图执行前）**：如果意图被标记了 <span style="color:#3aa675;font-weight:600">3</span> 层，在敌人执行该意图前，直接将其无效化——敌人不会执行该意图。然后移除该意图上的所有印记。
- **<span style="color:#d4a017;font-weight:600">1层</span>效果（意图执行后）**：如果意图被标记了 <span style="color:#3aa675;font-weight:600">1</span> 层，敌人执行完该意图后，受到 <span style="color:#3aa675;font-weight:600">10</span> 点[固定伤害](/powers/fixed_damage_power.md)。然后移除该意图上的印记。
- **<span style="color:#d4a017;font-weight:600">2层</span>效果（意图执行后）**：如果意图被标记了 <span style="color:#3aa675;font-weight:600">2</span> 层，敌人执行完该意图后，你获得 <span style="color:#3aa675;font-weight:600">1</span> 点能量。然后移除该意图上的印记。
- **触发顺序**：<span style="color:#d4a017;font-weight:600">3层</span>在意图执行前触发（阻止执行），<span style="color:#d4a017;font-weight:600">1层</span>和<span style="color:#d4a017;font-weight:600">2层</span>在意图执行后触发（敌人已经执行了意图才触发效果）。
- **显示数量**：能力图标上显示的数字是所有意图上的印记总数。

## 相关遗物

- [弑序神罗](/relics/legendary/order_killing_god_luo.md)

## 源码

- `SeerFatalMarkPower.cs`
