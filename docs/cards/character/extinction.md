# 绝灭·万物哀鸣

<img src="/images/cards/extinction.png" alt="绝灭·万物哀鸣" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 5
- **能量消耗**: 3
- **类型**: 攻击
- **稀有度**: 稀有
- **目标**: 敌方单体
- **关键词**: [虚无](/mechanics/ethereal.md)、[芜生](/mechanics/void_birth.md)
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 生命百分比 | 50 | 50 |
| 最大PP | 5 | 5 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 获得等量于当前PP的[<span style="color:#9b59b6;font-weight:600">魔王咒怨</span>](/powers/demon_king_curse_power.md)。若已有[<span style="color:#9b59b6;font-weight:600">魔王咒怨</span>](/powers/demon_king_curse_power.md)，对目标造成所有敌人生命值之和<span style="color:#3aa675;font-weight:600">50</span>%的伤害。

## 升级后

不再[虚无](/mechanics/ethereal.md)。PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 获得等量于当前PP的[<span style="color:#9b59b6;font-weight:600">魔王咒怨</span>](/powers/demon_king_curse_power.md)。若已有[<span style="color:#9b59b6;font-weight:600">魔王咒怨</span>](/powers/demon_king_curse_power.md)，对目标造成所有敌人生命值之和<span style="color:#3aa675;font-weight:600">50</span>%的伤害。

## 小贴士

- **核心定位**：[魔王咒怨](/powers/demon_king_curse_power.md)体系的"蓄能+爆发"一体卡。注意它带[芜生](/mechanics/void_birth.md)——**打出后转化为[芜](/cards/status/barren.md)，一张绝灭一场战斗只能打出一次**。想触发伤害，必须满足"打出时身上已有魔王咒怨"，即要么卡组里有第二张绝灭，要么靠其它来源先垫上层数。
- **结算顺序（先施加、后判定）**：打出时先获得"当前PP"层数的魔王咒怨（给自己，满 PP 时 +5 层），然后才判定"若已有魔王咒怨"——判定看的是**施加之前**的旧层数。旧层数 > 0 且当前 PP > 0 才造成伤害。因此：
 - **首张打出**（身上 0 层）：只蓄能，不造成伤害。
 - **已有层数时打出**：蓄能 + 伤害一起结算。
 - **PP 耗尽时打出**（当前 PP=0）：施加 0 层、无伤害，纯亏（还会照常转化为芜），务必避免。
- **伤害是攻击伤害，吃全套增伤**：伤害 = 所有敌人**当前生命之和** × 50%，但只打你指定的那一个目标。多敌人遭遇战（3 个敌人各 100 血）时基础就有 150 点。作为攻击伤害，它：
 - **吃魔王咒怨自身的增伤，且本次新层已参与结算**：已有 N 层、本次打出再加 M 层时，实际伤害 = 总 HP × 50% × (1 + 5% × (N+M))。例：首张满 PP 蓄能 5 层后，第二张满 PP 打出：先加到 10 层，伤害 = 总 HP × 50% × 150% = **总 HP 的 75%**。
 - 吃力量等攻击增伤；相应地也会被敌人的格挡吸收。
 - **参与魔王咒怨的秒杀判定**：3% × 当前总层数概率秒杀对面，且秒杀会传染所有与目标同 HP 的敌人——多敌人同血的场合有机会一击清场。
- **"已有魔王咒怨"的来源（让它首打即爆）**：
 - **卡组第二张绝灭**：最直接，第一张蓄能、第二张爆发。
 - **[湮灭之主·咤克斯](/relics/event/annihilation_lord_zhakes.md)**：战斗首回合开始，按敌方全体可见增益的数量获得等量层数；敌方每死亡一个单位再 +2 层。装备它之后，单张绝灭首打即可触发伤害。
 - **永久加成**：通过货币系统购买的永久魔王咒怨，每场战斗开局自带层数。
- **打出即转化为芜（真实代价）**：每次打出绝灭，牌堆里就多一张[芜](/cards/status/barren.md)——所有牌堆的芜累计 **5 张你直接死亡**（消耗、洗牌都躲不掉，按总数判定）。绝灭每打一张 +1 张芜，若再搭配[枯荣聚宝盆](/relics/ancient/vaku_rare_relics_and_barren.md)（每回合塞芜）或个别塞芜的敌人招式，死亡倒计时走得飞快。这张牌的"高回报"是拿死亡阈值换的，出牌前先数一数牌堆里的芜。
- **虚无的时限压力**：抽到当回合必须凑齐 3 费打出，否则回合结束被消耗（白白损失蓄能机会，但不产生芜——不打不转）。**升级移除虚无**，可以扣在手里等"敌方总 HP 更高 / 魔王咒怨层数更多"的时机再爆发；但芜生不随升级移除，升级后打出照样转化为芜。
- **性价比**：3 费换两段价值——首打 = 5 层魔王咒怨（+25% 攻击增伤、+25% 减伤、15% 秒杀、距 10 层异常免疫过半），本身已不亏；有层数垫底后，一炮 50%~75% 全场总 HP 是全 mod 顶格的斩杀数字。适合魔王咒怨/多敌人遭遇体系，不适合无层数来源的快攻（首打只蓄能，节奏太慢）。综合评价：机制上限极高，但必须围绕"层数来源 + 芜计数"两件事做构筑，否则就是张 3 费的纯蓄能牌。

## 相关能力

- [魔王咒怨](/powers/demon_king_curse_power.md)（获得等量于当前PP的层数；伤害吃其增伤并参与秒杀判定）

## 相关卡牌

- [芜](/cards/status/barren.md)（打出后转化目标；累计 5 张即死亡）

## 相关遗物

- [湮灭之主·咤克斯](/relics/event/annihilation_lord_zhakes.md)（提供开局魔王咒怨层数，让绝灭首打即爆）

## 相关机制

- [虚无](/mechanics/ethereal.md)（关键词，升级后移除）
- [芜生](/mechanics/void_birth.md)（mod 关键词，打出后转化为芜，升级后仍保留）

## 源码

- `SeerExtinction.cs`
- `SeerDemonKingCursePower.cs`
- `SeerBarren.cs`
