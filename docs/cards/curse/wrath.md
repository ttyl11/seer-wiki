# 暴怒

<img src="/images/cards/wrath.png" alt="暴怒" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 诅咒牌
- **能量消耗**: 1
- **类型**: 诅咒
- **稀有度**: 诅咒
- **可升级**: 否

### 数值参数

| 参数 | 数值 |
|---|---|
| 全场攻击伤害 | 8 |

## 描述

此牌在[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)中时必须先打出。打出后对所有生物造成<span style="color:#3aa675;font-weight:600">8</span>点伤害。

## 小贴士

- **诅咒牌中少见的"可打出"类型**：能量消耗 <span style="color:#3aa675;font-weight:600">1</span>，需主动打出结算效果，而非像[羞耻](/cards/curse/shame.md)那样"无法打出"滞留手牌。它在[手牌](/mechanics/hand.md)中以红色高亮警示。
- **⚠️ 在手=出牌权被锁死**：暴怒在自己手牌中时，**其余属于你的手牌一律无法打出**——你被迫先花 1 费把它甩出去。仅四种例外可绕过：①要打的牌本身也是暴怒；②牌不属于你（如队友的牌）；③牌不在手牌中（抽牌堆/弃牌堆里的自动效果不受限）；④系统自动打出的牌。
- **全场无差别 8 点，先敌后己**：结算分两段——先对所有**敌方生物**各造成 <span style="color:#3aa675;font-weight:600">8</span> 点攻击伤害，再对所有**玩家方生物**（含你自己）各造成 <span style="color:#3aa675;font-weight:600">8</span> 点攻击伤害。本质是"全场 AOE + 固定自伤 8"。
- **是攻击伤害，吃力量与增减伤**：两段均为攻击伤害——会被[格挡](/mechanics/block.md)减免、受[易伤](/powers/vulnerable_power.md)放大、受[虚弱](/powers/weak_power.md)缩小，还吃[力量](/powers/strength_power.md)加成。你自己那 8 点可以靠格挡完全挡下；但若力量很高，自伤部分也会跟着膨胀，残血时务必先算清楚。
- **⚠️ 多人模式会误伤队友**：第二段作用于**所有玩家方生物**——队友同样吃 8 点。队友残血或无格挡时打出暴怒可能直接坑死队友，出牌前先看队友血线与格挡。
- **无消耗，会循环归来**：暴怒不带[消耗](/mechanics/exhaust.md)关键词，打出后进[弃牌堆](/mechanics/discard_pile.md)——洗牌后还会再抽到、再次锁你出牌权。想根治要用消耗类效果处理它；它也不带[永恒](/mechanics/eternal.md)，局外可直接删除。
- **善用它而非只挨打**：1 费全场 8 点攻击伤害在有增伤时是可观的 AOE——高力量/全员易伤的场合，被迫打出的暴怒反而能充当廉价清场牌，顺手把格挡留足抵消自伤即可。

## 相关机制

- [手牌](/mechanics/hand.md)（必须先打出的判定位置）
- [诅咒系统](/mechanics/curse-system.md)（诅咒牌分类说明）
- [格挡](/mechanics/block.md)（自伤与误伤的减免手段）
- [力量](/powers/strength_power.md)（影响全场伤害与自伤数额）

## 源码

- `SeerWrath.cs`（位于 `Cards/Curses/` 目录）
