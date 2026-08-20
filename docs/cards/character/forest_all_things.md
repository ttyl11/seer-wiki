# 森罗万象

<img src="/images/cards/forest_all_things.png" alt="森罗万象" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 5
- **能量消耗**: 3
- **类型**: 技能
- **稀有度**: 普通
- **目标**: 自身
- **可升级**: 是（1 级）
- **关键词**: [奇巧](/mechanics/sly.md)

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 森林充能球 | 2 | 3 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> [生成](/mechanics/channeling.md)<span style="color:#3aa675;font-weight:600">2</span>个[森林](/orbs/forest_orb.md)[充能球](/mechanics/orb.md)。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> [生成](/mechanics/channeling.md)<span style="color:#3aa675;font-weight:600">3</span>个[森林](/orbs/forest_orb.md)[充能球](/mechanics/orb.md)。

## 小贴士

- **充能球生成牌**：打出后生成 2 个（升级后 3 个）[森林充能球](/orbs/forest_orb.md)填入充能球栏位。森林球被动：你回合结束时随机敌人 3 层[中毒](/powers/poison_power.md)；激发：对所有敌人 3 层[感染](/powers/infect_power.md)（造成攻击伤害 -20%，且每回合结束时自身再长 2 层中毒）——森林球是一台自带"中毒增殖"的毒引擎：被动直接上毒，激发的感染还会让敌人自己持续产毒。
- **奇巧白嫖通道**：3 费不便宜，但带[奇巧](/mechanics/sly.md)——被任何弃牌效果弃置时**免费自动打出**。手里有弃牌类卡牌时这张牌等于 0 费生成 2-3 个球；注意回合结束的常规清手牌不触发奇巧，要靠主动弃牌效果。
- **数值吃集中**：森林球的被动/激发数值（3/3）都走充能球数值管线，[集中](/powers/focus_power.md)每层让它们各 +1——集中 3 时被动就是 6 层中毒/球/回合，是 orb 流的标配乘区。
- **PP 5 持续供球**：单场最多打 5 次（升级后累计 15 个球）。充能球栏位有限：栏位满时继续生成会挤掉最早的球（触发激发结算）——森罗万象反复打出反而能主动"挤球"收割感染，不必怕爆栏。
- **配合建议**：中毒流核心供件——配合中毒加深/感染扩散类效果滚雪球；配合[集中](/powers/focus_power.md)提升单球数值；配合激发触发类卡牌把感染批量铺到全体。
- **升级的关键性**：单次生成 2→3 个，多 1 个球即每回合多 3 层随机中毒 + 一次激发额度，升级收益线性且稳定，优先级中等。
- **性价比**：3 费换长效毒引擎，回合结束自动产出、不占手牌；靠奇巧还能白嫖，中毒体系里属于拿到就赚的普通卡。

## 相关机制

- [充能球](/mechanics/orb.md)（生成森林充能球）
- [奇巧](/mechanics/sly.md)（基础关键词，被丢弃时免费打出）

## 相关充能球

- [森林](/orbs/forest_orb.md)（被动：中毒，激发：感染）

## 源码

- `SeerForestAllThings.cs`
