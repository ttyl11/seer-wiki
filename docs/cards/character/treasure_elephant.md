# 福泽聚宝象

<img src="/images/cards/treasure_elephant.png" alt="福泽聚宝象" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 5
- **能量消耗**: 2
- **类型**: 攻击
- **稀有度**: 稀有
- **目标**: 敌方单体
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 伤害 | 70 | 70 |
| 固定伤害倍率 | 250% | 400% |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

[<span style="color:#d4a017;font-weight:600">炼狱</span>](/mechanics/purgatory.md)。PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 造成<span style="color:#3aa675;font-weight:600">70</span>点伤害。失去当前生命值一半，附加等量×<span style="color:#3aa675;font-weight:600">250</span>%[<span style="color:#d4a017;font-weight:600">固定伤害</span>](/powers/fixed_damage_power.md)。消耗[<span style="color:#d4a017;font-weight:600">蓄力</span>](/powers/accumulate_power.md)使伤害乘以其层数。

## 升级后

[<span style="color:#d4a017;font-weight:600">炼狱</span>](/mechanics/purgatory.md)。PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 造成<span style="color:#3aa675;font-weight:600">70</span>点伤害。失去当前生命值一半，附加等量×<span style="color:#3aa675;font-weight:600">400</span>%[<span style="color:#d4a017;font-weight:600">固定伤害</span>](/powers/fixed_damage_power.md)。消耗[<span style="color:#d4a017;font-weight:600">蓄力</span>](/powers/accumulate_power.md)使伤害乘以其层数。

## 小贴士

- **蓄力终结技**：打出时若自身有[<span style="color:#d4a017;font-weight:600">蓄力</span>](/powers/accumulate_power.md)层数，基础伤害 <span style="color:#3aa675;font-weight:600">70</span> 会直接乘以蓄力层数（<span style="color:#3aa675;font-weight:600">3</span> 层即 <span style="color:#3aa675;font-weight:600">210</span>），随后蓄力被全部消耗。这张牌是蓄力流的收尾爆发，攒层数越多越恐怖。
- **自伤换固伤**：造成伤害后立刻失去当前生命值的一半，并把这份损失按倍率转化为[<span style="color:#d4a017;font-weight:600">固定伤害</span>](/powers/fixed_damage_power.md)挂给目标。满血时一发能堆出巨额固伤，但你只剩半血——典型的"赌命换输出"。注意失去的是"当前"体力的一半，残血时自伤更轻、固伤也更弱。
- **两段伤害性质不同**：<span style="color:#3aa675;font-weight:600">70</span>（×蓄力）是常规攻击伤害，吃力量/易伤、可被格挡；而附加的固定伤害无视格挡与力量/易伤。所以遇到高格挡敌人，前段可能被挡掉，后段固伤才是真正的穿盾输出。
- **固伤延迟结算**：附加的固定伤害不是当场爆发，而是等目标下个回合开始时才扣血。用来斩杀意图锁定的敌人很稳，但无法阻止对方本回合的行动。
- **炼狱一次性**：带有[<span style="color:#d4a017;font-weight:600">炼狱</span>](/mechanics/purgatory.md)关键词，打出后从本场战斗中移除，不能反复刷，每一发都要打在刀刃上。
- **当心坚毅反噬**：若目标拥有"坚毅"类能力，施加的固定伤害会被免疫并全额转移给己方全体——面对带反伤能力的敌人时慎用后段固伤。
- **升级拉满倍率**：升级把自伤→固伤的倍率从 <span style="color:#3aa675;font-weight:600">250</span>% 抬到 <span style="color:#3aa675;font-weight:600">400</span>%，同样的半血代价换更多固伤，斩杀线显著提高。
- **性价比**：2 费的核弹级收尾牌，配合蓄力层数与高血量收益惊人，但半血自伤要求你有恢复手段或确定能斩杀。

## 相关能力

- [固定伤害](/powers/fixed_damage_power.md)（附加的延迟伤害）
- [蓄力](/powers/accumulate_power.md)（被消耗的增伤层数）

## 相关机制

- [炼狱](/mechanics/purgatory.md)（打出即移除的关键词）

## 源码

- `SeerTreasureElephant.cs`
