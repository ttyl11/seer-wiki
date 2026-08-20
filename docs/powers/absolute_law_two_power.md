# 绝律二

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物随机池——[群星的礼赠](/relics/starter/elemental_core.md)随机能力池赋予怪物（遭遇时按概率自带，概率随探索房间数增长）

<img src="/images/powers/absolute_law_two_power.png" alt="绝律二" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益
- **叠加方式**: 单例（不可叠加）
- **可见**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| 层数 | 10 |

## 描述

敌人打出<span style="color:#3aa675;font-weight:600">10</span>张牌时，强制结束回合。

## 详细机制

- **统计对象是持有者自己**：与[绝律一](/powers/absolute_law_one_power.md)方向相反——源码过滤 `cardPlay.Card.Owner.Creature != Owner` 即跳过，只统计**本能力持有者自己**打出的牌，达到 <span style="color:#3aa675;font-weight:600">10</span> 张时强制结束**自己的**回合（`canBackOut: false`，不可撤销）。
- **每回合重置**：玩家回合开始时计数清零（`AfterSideTurnStart`）。
- **挂在怪物身上时基本空转**：怪物通过意图系统行动、不走"打出卡牌"逻辑（全 mod 怪物源码中无 CardPlay 行为），因此该词缀出现在怪物身上时**几乎没有实际威胁**——与绝律一（统计玩家的牌、真实切断你的回合）完全不同。

## 小贴士

- **见到它反而可以放心**：这是随机词缀里的"哑弹"——不影响你的出牌节奏，正常打即可；真正要小心的是[绝律一](/powers/absolute_law_one_power.md)（15 张切断你的回合）。
- **设计语义**：绝律一/二是一对镜像——绝律一"惩罚对方出牌数"，绝律二"约束自己出牌数"（设计上用于限制出牌引擎，若未来出现玩家获取途径则等同单回合上限 9+1 张）。

## 源码

- `SeerAbsoluteLawTwoPower.cs`（`AfterCardPlayed` 中 `Owner.Creature` 过滤，仅统计持有者自己的牌）
