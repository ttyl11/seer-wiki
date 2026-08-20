# 激鸣雷封

<img src="/images/cards/thunder_seal.png" alt="激鸣雷封" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 事件牌
- **最大PP**: 3
- **能量消耗**: 0
- **类型**: 技能
- **稀有度**: 衍生
- **目标**: 所有敌方
- **可升级**: 是（1 级）
- **关键词**: [<span style="color:#d4a017;font-weight:600">保留</span>](/mechanics/retain.md)
- **来源**: 先古遗物「克雷弗德」——每场战斗开始时与[核威强袭](/cards/event/nuclear_assault.md)一同加入手牌

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 最大生命获取 | 3 | 5 |
| 疲惫层数 | 2 | 2 |
| PP | 3 | 3 |
| 最大PP | 3 | 3 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">3</span>/<span style="color:#3aa675;font-weight:600">3</span> 打出后回到[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)。100%令所有对手<span style="color:#9b59b6;font-weight:600">疲惫</span><span style="color:#3aa675;font-weight:600">2</span>回合，召唤奥斯提获得<span style="color:#3aa675;font-weight:600">3</span>点最大生命。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">3</span>/<span style="color:#3aa675;font-weight:600">3</span> 打出后回到[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)。100%令所有对手<span style="color:#9b59b6;font-weight:600">疲惫</span><span style="color:#3aa675;font-weight:600">2</span>回合，召唤奥斯提获得<span style="color:#3aa675;font-weight:600">5</span>点最大生命。

## 小贴士

- **🔑 0 费 + 回手 + 保留 = 每回合免费全体疲惫**：打出后此牌回到手牌，且带[保留](/mechanics/retain.md)回合结束不弃——每个回合都能免费再打一次，唯一的闸门是 PP 3/3：一场战斗最多打 <span style="color:#3aa675;font-weight:600">3</span> 次，即最多 <span style="color:#3aa675;font-weight:600">6</span> 个回合的群体疲惫覆盖。3 次用完后它就只是一张占位的死牌，可以放心弃掉。
- **疲惫是双重压制，越爱动手的敌人掉血越快**：每次打出给所有对手施加 <span style="color:#3aa675;font-weight:600">2</span> 层[疲惫](/powers/fatigue_power.md)——①持有者造成的攻击伤害降低 <span style="color:#3aa675;font-weight:600">20</span>%；②持有者**每次造成伤害**（不限攻击牌，普攻也算）就受到等于层数的[不可格挡](/mechanics/block.md)反噬伤害。2 层疲惫 = 敌人每出手一次自伤 <span style="color:#3aa675;font-weight:600">2</span> 点，多段攻击的 Boss 一回合能把自己反噬掉十几点。
- **层数会叠加，反噬按当前总层数结算**：连续打出（或与其他疲惫来源叠加）时层数累加，反噬伤害随层数水涨船高——PP 3 次全砸出去是 <span style="color:#3aa675;font-weight:600">6</span> 层，敌人每次出手自伤 <span style="color:#3aa675;font-weight:600">6</span> 点。疲惫在**敌方自己回合结束**才 -1 层，我方连续回合内叠层不会中途衰减。
- **奥斯提养成是另一半收益**：每次打出为召唤奥斯提增加 <span style="color:#3aa675;font-weight:600">3</span> 点最大生命（升级后 <span style="color:#3aa675;font-weight:600">5</span> 点），3 次全打 = 最多 +<span style="color:#3aa675;font-weight:600">15</span> 血上限，直接放大[核威强袭](/cards/event/nuclear_assault.md)的"最大生命百分比"伤害。**奥斯提不在场时只打疲惫、跳过生命加成**，尽量在奥斯提存活时使用。
- **升级只提升生命获取**：3→5 点最大生命（3 次累计 +9→+15），疲惫段不变——克雷弗德的升级机会优先级不高，看局面取舍。

## 相关能力

- [疲惫](/powers/fatigue_power.md)（攻击伤害降低 20%，每次造成伤害时受到等于层数的不可格挡反噬）

## 源码

- `SeerThunderSeal.cs`
- `SeerClifford.cs`（来源遗物）
