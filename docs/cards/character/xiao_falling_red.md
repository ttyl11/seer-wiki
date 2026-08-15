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

- **夺取异常是把双刃剑**：把所有敌人身上的[异常状态](/mechanics/abnormal-status.md)（层数大于 0）转移到自己身上，等量层数。你会吃到这些异常的负面效果（烧伤/中毒/失明/麻痹等），回血是补偿。夺取前要评估自己能否承受这些异常。
- **每项回血不是每层**：回血按"夺取的异常项数"算，不是按层数。每个敌人身上的每种异常算 1 项——敌人 A 有烧伤加中毒（2 项）就回 2 倍 HP，不管每项几层。多敌人多异常时回血量很可观。
- **消耗弃牌堆 PP 换固定伤害**：把弃牌堆中所有 PP 大于 0 的 PP 卡的 PP 累加、清零并消耗这些卡。固定伤害 = 消耗的 PP 总和 ×2 + 自己最大 HP ×5%。弃牌堆里攒的 PP 牌越多，伤害越高。
- **固定伤害不可格挡**：附加给所有存活敌人的[固定伤害](/powers/fixed_damage_power.md)在敌人回合开始时结算，无视[格挡](/mechanics/block.md)与减免。适合跨甲斩杀。
- **双重收益**：这张牌一边回血（夺异常）一边输出（PP 转固定伤害），攻防一体。但两边都依赖前置条件——敌人得有异常、弃牌堆得有 PP 牌。
- **升级只加回血**：每项 3→5 HP，固定伤害公式不变。升级让夺取异常的回血补偿更厚，降低承担异常的风险。
- **性价比**：1 费换"夺异常+回血+PP 转固定伤害"，潜力大但条件多。适合异常流/PP 流的收尾爆发，空场时价值低。

## 相关能力

- [固定伤害](/powers/fixed_damage_power.md)（消耗 PP 与最大 HP 计算后附加给敌人）

## 相关机制

- [异常状态](/mechanics/abnormal-status.md)（从敌人夺取至自身）
- [弃牌堆](/mechanics/discard_pile.md)（消耗其中 PP 卡的 PP 值）

## 源码

- `SeerXiaoFallingRed.cs`
