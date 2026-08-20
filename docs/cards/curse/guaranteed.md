# 保底

<img src="/images/cards/guaranteed.png" alt="保底" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 诅咒牌
- **类型**: 诅咒
- **稀有度**: 诅咒
- **关键词**: [固有](/mechanics/innate.md)、[保留](/mechanics/retain.md)、[无法打出](/mechanics/unplayable.md)
- **可升级**: 否

### 数值参数

| 参数 | 数值 |
|---|---|
| 伤害概率 | 99% |
| 奖励概率 | 1% |
| 伤害 | 10 |

## 描述

抽到时<span style="color:#3aa675;font-weight:600">99</span>%概率受到<span style="color:#3aa675;font-weight:600">10</span>点伤害。战斗结束<span style="color:#3aa675;font-weight:600">1</span>%概率获得一张随机稀有牌。

## 小贴士

- **固有=开局固定掉血**：带[固有](/mechanics/innate.md)开局必在手，进入手牌的瞬间就掷骰——<span style="color:#3aa675;font-weight:600">99</span>% 概率受到 <span style="color:#3aa675;font-weight:600">10</span> 点伤害。这 <span style="color:#3aa675;font-weight:600">1</span>% 的"擦枪走火"基本可以当作每场战斗开局白掉 10 血来规划。
- **保留=整场赖手、只触发这一次**：带[保留](/mechanics/retain.md)不弃牌，正常流程下整场战斗不会再"重新进手"，伤害判定每场只发生固有开局这一次（被回收类效果再次拉回手才会重掷）。
- **1% 的保底彩蛋**：战斗结束时若它在手（保留状态下基本必然在），掷 <span style="color:#3aa675;font-weight:600">1</span>% 概率获得一张随机**本模组卡池的稀有卡**加入卡组——这就是牌名"保底"的含义：抽卡游戏式的 99% 落空、1% 出货。场均 1% 的期望意味着基本是精神安慰，别为它调整任何决策。
- **无法打出**：带[无法打出](/mechanics/unplayable.md)关键词，不能主动打出；[保留](/mechanics/retain.md)让它也不进弃牌堆——想清掉只能靠消耗/变牌类效果。
- **净评价**：每场固定 10 血换一个 1% 彩蛋，是纯负面诅咒，处理优先级高（能消耗就消耗）；唯一的"正面"是它不干扰你的出牌节奏——锁在手牌位上占一格。
- **手牌位代价**：固有+保留意味着整场战斗你的有效手牌上限**永久少一张**（它占位且无法打出），对手牌依赖型构筑的隐性伤害不亚于那 10 点血。

## 相关机制

- [固有](/mechanics/innate.md)（战斗开始时必定在手牌）
- [保留](/mechanics/retain.md)（回合结束时不弃置）
- [无法打出](/mechanics/unplayable.md)（无法主动打出）

## 源码

- `SeerGuaranteed.cs`（位于 `Cards/Curses/` 目录）
- `SeerGuaranteedRewardPower.cs`（战斗结束奖励判定）
