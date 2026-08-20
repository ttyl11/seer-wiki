# 凋零

<img src="/images/cards/wither.png" alt="凋零" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

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
| 每次抽到防御层数 | -2 |
| PP | 1 |
| 最大PP | 1 |

## 描述

抽到时，[<span style="color:#d4a017;font-weight:600">防御</span>](/powers/defense_power.md)-<span style="color:#3aa675;font-weight:600">2</span>。

## 小贴士

- **抽到即触发，无需打出**：此牌[不可打出](/mechanics/unplayable.md)，效果在**抽到瞬间**自动结算——给自己施加 <span style="color:#3aa675;font-weight:600">-2</span> 层[防御](/powers/defense_power.md)。
- **没有虚无，会反复触发**：凋零不带[虚无](/mechanics/ethereal.md)——抽到后一直躺在手牌里占位，回合结束正常弃入[弃牌堆](/mechanics/discard_pile.md)，之后洗牌再抽到**还会再 -2**。一张凋零在牌堆里每循环一圈就叠一次，长战斗里是持续失血的防御黑洞。
- **-2 层防御 = 受攻击伤害 +2，且整场不清**：防御每层减少 1 点受到的攻击伤害，负层数反过来**增加**受到的攻击伤害——抽到一次凋零，接下来整场战斗每次被攻击都多吃 <span style="color:#3aa675;font-weight:600">2</span> 点。防御层数不随回合衰减，多次抽到会叠加（抽 3 次 = 永久 -6 防御），负面效果只增不减。它只影响**攻击伤害**，[固定伤害](/powers/fixed_damage_power.md)等非攻击伤害不吃这个加减成。
- **与其它"抽到惩罚"状态牌对比**：枯竭扣能量、焦枯掉血（固伤）、心魔锁牌加耗能——凋零削的是**防御属性**，短战斗里几乎无感，但战斗越长、抽牌越快，累积的减防越致命。对抗多段攻击型敌人（每段攻击都多吃 2×段数伤害）时恶化最快。
- **无法根治，只能提前移出**：不可打出、不可升级，常规手段移不出去。抽到前的唯一处理窗口是用消耗/变牌类效果把它从[抽牌堆](/mechanics/draw_pile.md)或弃牌堆里清理掉——已被抽到结算过的 -2 层防御则无法找回（除非用加防御的效果抵回）。
- **来源**：主要由[枯萎能量](/cards/character/withered_energy.md)等卡牌效果加入牌堆；此外遗物[状态牌诅咒](/relics/event/status_cards_next_combat_relic.md)会在本场战斗首回合随机混入 8 种状态牌之一（含凋零）。

## 相关能力

- [防御](/powers/defense_power.md)（抽到时自身 -2 层，负层数=受攻击伤害增加，整场持续）

## 相关机制

- [不能被打出](/mechanics/unplayable.md)（无法主动打出）
- [弃牌堆](/mechanics/discard_pile.md)（无虚无，弃牌后洗牌循环反复触发）

## 相关卡牌

- [枯萎能量](/cards/character/withered_energy.md)（主要来源）

## 相关遗物

- [状态牌诅咒](/relics/event/status_cards_next_combat_relic.md)（随机来源：8 种状态牌随机混入）

## 源码

- `SeerWither.cs`
- `SeerDefensePower.cs`（防御：每层减 1 点受攻击伤害，负层数反向增加）
