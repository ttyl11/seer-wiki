# 萧·零落绯如故

<img src="/images/cards/xiao_falling_red.png" alt="萧·零落绯如故" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 5
- **能量消耗**: 1
- **类型**: 技能
- **稀有度**: 稀有
- **目标**: 自身
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 每项异常回复HP | 3 | 5 |
| 固定伤害公式 | PP×2+最大HP×5% | PP×2+最大HP×5% |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 夺取敌方[<span style="color:#d44;font-weight:600">异常状态</span>](/mechanics/abnormal-status.md)，每项恢复<span style="color:#3aa675;font-weight:600">3</span>HP。消耗[<span style="color:#d4a017;font-weight:600">弃牌堆</span>](/mechanics/discard_pile.md)中PP卡，将PP值×2+最大HP×5%作为[<span style="color:#d4a017;font-weight:600">固定伤害</span>](/powers/fixed_damage_power.md)附加给敌人。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 夺取敌方[<span style="color:#d44;font-weight:600">异常状态</span>](/mechanics/abnormal-status.md)，每项恢复<span style="color:#3aa675;font-weight:600">5</span>HP。消耗[<span style="color:#d4a017;font-weight:600">弃牌堆</span>](/mechanics/discard_pile.md)中PP卡，将PP值×2+最大HP×5%作为[<span style="color:#d4a017;font-weight:600">固定伤害</span>](/powers/fixed_damage_power.md)附加给敌人。

## 小贴士

- **夺取异常是把双刃剑**：把所有敌人身上的[异常状态](/mechanics/abnormal-status.md)（层数大于 0）等量转移到自己身上，你会开始吃这些异常的负面效果（烧伤/中毒每回合掉血、[虚弱](/powers/weak_power.md)降低自己攻击等），回血是补偿。注意夺取是**双向的**：敌人身上的减益异常（虚弱、减速等）被拿走后，敌人也同步解除了减益——对靠异常控场的构筑，这等于亲手拆掉自己的控制。
- **每项回血不是每层**：回血按"夺取的异常项数"算，不是按层数。每个敌人身上的每种异常算 1 项——敌人 A 有烧伤加中毒（2 项）就回 2 倍 HP，不管每项几层。多敌人多异常时回血量很可观。
- **永昌玺 3 层=白赚回血**：[永昌玺](/powers/eternal_seal_power.md) ≥3 层时你免疫异常状态——异常转移到你身上的瞬间被归零，但回血在夺取计数阶段已经结算，照常全额拿到。有永昌玺打底再打这张牌，等于纯吸血零代价。
- **消耗弃牌堆 PP 换固定伤害**：把[弃牌堆](/mechanics/discard_pile.md)中所有 PP 大于 0 的 PP 卡的 PP 累加、清零并消耗这些卡（PP 已为 0 的 PP 卡会留在弃牌堆不动）。固定伤害 = 消耗的 PP 总和 ×<span style="color:#3aa675;font-weight:600">2</span> + 自己最大 HP ×<span style="color:#3aa675;font-weight:600">5</span>%（向下取整）。本回合打出过的 PP 牌（PP 扣 1 后进弃牌堆）都是弹药——回合内先正常出牌，再用它收尾变现。
- **固定伤害不可格挡**：附加给所有存活敌人的[固定伤害](/powers/fixed_damage_power.md)在**敌人自己回合开始时**结算，无视[格挡](/mechanics/block.md)与增减伤，且与敌人已有的固伤层数叠加。敌人若在回合开始前被打死则白挂，斩杀线要按"当回合直接打死"或"固伤下回合生效"分别估算。
- **双重收益但双前置**：一边回血（夺异常）一边输出（PP 转固伤），攻防一体，但两边都依赖前置条件——敌人得有异常、弃牌堆得有 PP 牌。裸打时只剩最大 HP×5% 的保底固伤，价值很低。
- **升级只加回血**：每项 3→5 HP，固伤公式不变。升级让夺取异常的回血补偿更厚，降低承担 DoT 异常的风险，对固伤端无提升。
- **性价比**：1 费换"夺异常+回血+PP 转固伤"，上限高但吃场面。适合异常流（配合永昌玺免疫）与 PP 流（弃牌堆 PP 存量足）的收尾爆发件，卡组里异常/PP 资源不足时不建议携带。

## 相关能力

- [固定伤害](/powers/fixed_damage_power.md)（消耗 PP 与最大 HP 计算后附加给敌人）
- [永昌玺](/powers/eternal_seal_power.md)（≥3 层免疫异常，夺取回血照常结算）

## 相关机制

- [异常状态](/mechanics/abnormal-status.md)（从敌人夺取至自身）
- [弃牌堆](/mechanics/discard_pile.md)（消耗其中 PP 卡的 PP 值）

## 源码

- `SeerXiaoFallingRed.cs`
