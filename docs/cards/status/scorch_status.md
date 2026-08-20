# 焦枯

<img src="/images/cards/scorch_status.png" alt="焦枯" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 状态牌
- **最大PP**: 1
- **能量消耗**: 不可打出
- **类型**: 状态
- **稀有度**: 状态
- **目标**: 无
- **关键词**: [不能被打出](/mechanics/unplayable.md)
- **可升级**: 否

### 数值参数

| 参数 | 数值 |
|---|---|
| 固定伤害层数 | 3 |
| PP | 1 |
| 最大PP | 1 |

## 描述

抽到此牌时，立即给自身附加<span style="color:#3aa675;font-weight:600">3</span>层[<span style="color:#d4a017;font-weight:600">固定伤害</span>](/powers/fixed_damage_power.md)。

## 小贴士

- **抽到即中雷，无需打出**：此牌[不可打出](/mechanics/unplayable.md)，效果在**抽到瞬间**自动结算——给自己挂 <span style="color:#3aa675;font-weight:600">3</span> 层[固定伤害](/powers/fixed_damage_power.md)。它会一直躺在手牌里占位（没有虚无，回合结束正常弃入弃牌堆，弃牌后洗牌再抽到**还会再触发一次**）。
- **固定伤害是延迟掉血**：固伤以能力形式挂在自己身上，**下回合开始时**才结算 3 点真实伤害——不吃[格挡](/mechanics/block.md)、不吃增减伤，但可被"免疫固定伤害"类效果（如免疫固伤能力/药水）防御。
- **无法根治，只能少抽**：焦枯不可打出、不可升级，常规手段移不出去。抽到一次就是一次 3 点固伤——牌堆里焦枯越多，洗牌周期内的累计失血越高。避免它进牌堆才是上策。
- **来源：诅咒遗物"状态牌诅咒"**：由遗物[状态牌诅咒](/relics/event/status_cards_next_combat_relic.md)在**本场战斗首回合开始时**随机混入牌堆（它从枯竭、侵蚀、心魔、凋零、焦枯、余温之辰、圣逝、芜共 8 种状态牌中随机添加）。这是负面遗物，拿到后本场战斗要数着牌堆过日子。
- **与其它"抽到惩罚"状态牌的差异**：枯竭扣能量、凋零减防御、心魔加耗能——焦枯是其中**唯一直接掉血**的，血量紧张的对局里威胁最直观。

## 相关遗物

- [状态牌诅咒](/relics/event/status_cards_next_combat_relic.md)（唯一来源：首回合向牌堆随机添加 8 种状态牌之一）

## 相关能力

- [固定伤害](/powers/fixed_damage_power.md)（抽到时自身 +3 层，下回合开始结算）

## 相关机制

- [不能被打出](/mechanics/unplayable.md)（无法主动打出）
- [格挡](/mechanics/block.md)（固伤结算时无视格挡）

## 源码

- `SeerScorchStatus.cs`
