# 龙胆

> **归属**：玩家可施加
> **施加来源**：
> - [孤胆映青釭](/cards/character/lone_hero_green_blade.md)（卡牌——按卡面层数施加）
> - [赤胆游龙赵云](/relics/epic/chivalrous_dragon_yun.md)（遗物——回合结束时按自身正属性项数 +1 层/项）
> - 永久加成（4 星选项"龙胆 +1"——每场战斗开局自带对应层数）

<img src="/images/powers/dragon_whisker_power.png" alt="龙胆" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 计数（Counter）
- **可见**: 是

## 描述

每层：使用牌时对随机敌人造成 <span style="color:#3aa675;font-weight:600">1</span> 点[<span style="color:#d4a017;font-weight:600">固定伤害</span>](/powers/fixed_damage_power.md)；受到[<span style="color:#d44;font-weight:600">异常状态</span>](/mechanics/abnormal-status.md)时消耗 <span style="color:#3aa675;font-weight:600">1</span> 层抵消。

## 详细机制

- **打牌输出**：自己每打出一张牌，就对**随机敌人**施加等同于当前层数的[固定伤害](/powers/fixed_damage_power.md)（N 层 = 一次 N 点，下回合开始结算）。目标随机，不保证打中同一个敌人。
- **异常抵消**：即将受到[异常状态](/mechanics/abnormal-status.md)时，施加量归零（完全免疫该次施加），本能力消耗 1 层——**不是按回合消耗**，没异常可挡时层数一直保留。
- **消耗即减输出**：每抵消一次异常就少 1 层，下一张牌的附带固伤也同步少 1 点——防御和输出共享同一池子。
- **不衰减**：没有回合衰减机制，层数只通过"抵消异常"消耗。

## 小贴士

- 龙胆是**攻防一体**的滚雪球能力：层数越多，每张牌的附带输出越高、可挡异常次数也越多——孤胆映青釭一次给多层后，配合多打牌（回响/重放/0 费牌）每张牌都白送 N 点固定伤害。
- 赤胆游龙赵云的获取节奏：回合结束时力量/防御/命中/速度每有一项为正就 +1 层，满 4 项时每回合 +4 层；累积到 <span style="color:#3aa675;font-weight:600">7</span> 层后激活[龙胆世无双](/powers/dragon_whisper_unmatched_power.md)（PP 牌免费打出）。
- 固定伤害无视格挡但走[固定伤害](/powers/fixed_damage_power.md)能力结算——面对高格挡敌人时，龙胆的打牌输出是稳定的穿透手段。
- 挡异常要消耗层数：面对多异常怪时龙胆层数掉得快，输出收益同步缩水；面对不上异常的敌人则层数全程保值。

## 相关遗物

- [赤胆游龙赵云](/relics/epic/chivalrous_dragon_yun.md)（按正属性项数 +层，7 层激活龙胆世无双）

## 相关卡牌

- [孤胆映青釭](/cards/character/lone_hero_green_blade.md)

## 相关能力

- [龙胆世无双](/powers/dragon_whisper_unmatched_power.md)（赤胆游龙赵云的进阶形态：PP 牌免费打出）
- [固定伤害](/powers/fixed_damage_power.md)（打牌输出的结算载体）

## 源码

- `SeerDragonWhiskerPower.cs`（`AfterCardPlayed` 打牌固伤 + `TryModifyPowerAmountReceived` 异常抵消）
- `SeerPermanentBonusPatch.cs`（永久加成开局施加）
