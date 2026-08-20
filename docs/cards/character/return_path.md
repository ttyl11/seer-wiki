# 归途

<img src="/images/cards/return_path.png" alt="归途" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 5
- **能量消耗**: 0
- **类型**: 攻击
- **稀有度**: 普通
- **目标**: 所有敌方
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 伤害百分比 | 100 | 150 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 移除所有生物的[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)与[<span style="color:#d4a017;font-weight:600">全属性</span>](/mechanics/all_attributes.md)，对所有敌人造成总和<span style="color:#3aa675;font-weight:600">100</span>%的伤害。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 移除所有生物的[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)与[<span style="color:#d4a017;font-weight:600">全属性</span>](/mechanics/all_attributes.md)，对所有敌人造成总和<span style="color:#3aa675;font-weight:600">150</span>%的伤害。

## 小贴士

- **伤害基于全场格挡+属性总和——雪球型全体攻击**：伤害 = (自己与所有敌人的格挡值 + 双方[全属性](/mechanics/all_attributes.md)层数绝对值) × 伤害百分比。场上格挡和属性越多，伤害越高——是对格挡流/力量流敌人的反制核弹。双人模式下队友的格挡与属性不受影响、也不计入总和。
- **双刃剑——移除自身格挡和属性换伤害**：移除的是自己和所有敌人的格挡与属性，包括你自己的格挡、[力量](/powers/strength_power.md)、[命中](/powers/accuracy_power.md)、[速度](/powers/speed_power.md)、[防御](/powers/defense_power.md)。**别在自己叠了大量格挡/属性时打**，否则自毁增益——这张牌适合在"自己没什么属性积累，敌人叠了一堆"时反制。
- **移除后立即造成伤害——实际不可格挡**：伤害是在移除所有格挡之后施加的，敌人当前没有格挡，所以这张牌的伤害实际不可格挡。但伤害类型仍是攻击伤害，会触发"受到攻击时"类效果。
- **伤害不吃力量加成——力量已被移除**：伤害施加时力量已经被移除，所以这张牌的伤害不吃力量加成——数值就是 (格挡+属性总和) × 百分比，不会被你的力量层数放大。
- **0 费高灵活性——可随时打出连击**：<span style="color:#3aa675;font-weight:600">0</span> 费意味着不占能耗，可以配合其它牌连击。但要注意它移除自身增益的代价——0 费不是白嫖，是用自身属性积累换伤害。
- **升级 100%→150%——伤害倍率提升 50%**：升级后伤害百分比从 <span style="color:#3aa675;font-weight:600">100</span>% 提升到 <span style="color:#3aa675;font-weight:600">150</span>%，相当于同一场面下伤害 ×1.5。对于雪球型伤害来说，50% 倍率提升是显著增幅。
- **性价比**：<span style="color:#3aa675;font-weight:600">0</span> 费换全场格挡+属性总和的伤害，敌方属性积累多时性价比极高；代价是自身属性也被清空，适合反制局面而非自家叠属性的局面。

## 相关机制

- [格挡](/mechanics/block.md)：移除并计入伤害总和
- [全属性](/mechanics/all_attributes.md)：移除力量/命中/速度/防御四种属性并计入伤害总和
- [力量](/powers/strength_power.md)、[命中](/powers/accuracy_power.md)、[速度](/powers/speed_power.md)、[防御](/powers/defense_power.md)：被移除的四种属性能力

## 源码

- `SeerReturnPath.cs`
