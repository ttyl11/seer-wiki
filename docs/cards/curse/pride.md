# 傲慢

<img src="/images/cards/pride.png" alt="傲慢" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 诅咒牌
- **能量消耗**: 3
- **类型**: 诅咒
- **稀有度**: 诅咒
- **关键词**: [永恒](/mechanics/eternal.md)、[保留](/mechanics/retain.md)、[消耗](/mechanics/exhaust.md)
- **可升级**: 否

### 数值参数

| 参数 | 数值 |
|---|---|
| 回合结束自伤 | 12 |

## 描述

在你的回合结束时，若此牌在你[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)中，受到<span style="color:#3aa675;font-weight:600">12</span>点伤害。

## 小贴士

- **保留=每回合都吃伤害**：傲慢带[保留](/mechanics/retain.md)关键词，回合结束**不弃牌**——抽到后就常驻手里，此后**每个回合结束都固定吃一次 <span style="color:#3aa675;font-weight:600">12</span> 点伤害**，直到它离场。它还顺带占死一个手牌位，是三重惩罚。
- **这 12 点伤害可以被格挡挡下**：伤害属于普通卡牌自伤（不吃[力量](/powers/strength_power.md)加成，但走正常伤害流程）——回合结束前手上有 <span style="color:#3aa675;font-weight:600">12</span> 点以上[格挡](/mechanics/block.md)就能完全吸收，一滴血不掉。防牌较多的卡组里，傲慢几乎是白板；注意若同时挂着[易伤](/powers/vulnerable_power.md)，伤害会被放大到 18 点，格挡要留够。
- **花 3 费打出=永久了断**：傲慢可以主动打出（没有[不可打出](/mechanics/unplayable.md)关键词），打出后因[消耗](/mechanics/exhaust.md)离场且本场不再回来。3 费换一个手牌位+免除后续每回合 12 点伤害，在长战斗或格挡紧张的对局里是值得的。
- **永恒=局外删不掉，局内消耗不受限**：带[永恒](/mechanics/eternal.md)关键词意味着无法通过删牌、变牌把它从卡组永久移除——抽到一次就每场战斗都要面对。但"永恒"只锁局外删除，局内打出的那次消耗照常生效，所以每次战斗都有一条"3 费买断"的出路。
- **处理优先级**：格挡充裕 → 每回合留 12 格挡白吃它；格挡紧张或长战 → 3 费打出消耗；有消耗类效果（其它牌把它消耗掉）→ 优先用，省下 3 费。
- **多人协作注意**：常驻手牌位在双人战斗里同样挤压出牌空间，队友若有移除手牌诅咒的手段（消耗、变牌），沟通好优先处理。

## 相关机制

- [保留](/mechanics/retain.md)（回合结束不弃牌，伤害持续触发）
- [永恒](/mechanics/eternal.md)（无法从卡组永久移除）
- [格挡](/mechanics/block.md)（自伤可被格挡完全吸收）
- [消耗](/mechanics/exhaust.md)（打出后离场）

## 源码

- `SeerPride.cs`
