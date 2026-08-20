# 暴食

<img src="/images/cards/gluttony.png" alt="暴食" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 诅咒牌
- **类型**: 诅咒
- **稀有度**: 诅咒
- **关键词**: [虚无](/mechanics/ethereal.md)、[无法打出](/mechanics/unplayable.md)
- **可升级**: 否

### 数值参数

| 参数 | 数值 |
|---|---|
| 最大生命获取 | 1 |
| 诅咒数量 | 2 |

## 描述

进入[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)时获得<span style="color:#3aa675;font-weight:600">1</span>点最大生命值。回合结束时若在[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)中，下回合加入<span style="color:#3aa675;font-weight:600">2</span>张随机[<span style="color:#9b59b6;font-weight:600">诅咒</span>](/mechanics/curse-system.md)。

## 小贴士

- **先给一颗糖**：每次进入[手牌](/mechanics/hand.md)都获得 <span style="color:#3aa675;font-weight:600">1</span> 点最大生命值——不止第一次，被回收、再抽到都会再触发，配合回收类效果理论上可以反复榨血。但 <span style="color:#3aa675;font-weight:600">1</span> 点的甜头和它带来的麻烦完全不成正比。
- **代价是诅咒滚雪球**：回合结束在手（且没被处理掉）就标记下回合开始时，从诅咒池随机抽 <span style="color:#3aa675;font-weight:600">2</span> 张**互不重复**的诅咒加入手牌底部。新诅咒可能又是"回合结束在手有惩罚"的类型——连锁反应一次就能让手牌生态崩盘，这是全诅咒里最重的延迟惩罚之一。
- **⚠️ 虚无实际不生效**：描述带[虚无](/mechanics/ethereal.md)（回合结束在手应被消耗），但回合结束的结算流程里，"有回合结束效果的牌"优先于虚无消耗处理——暴食走的是前者分支，**并不会在回合结束时自我消耗**。别指望它像普通虚无牌那样自己消失。
- **实际离场路径**：它回合结束在手会正常标记诅咒并随后被弃入[弃牌堆](/mechanics/discard_pile.md)；想跳过惩罚只能靠当回合消耗/变牌类效果把它处理掉，或让它在回合结束前不在手里。
- **无法打出**：带[无法打出](/mechanics/unplayable.md)关键词，不能主动打出换掉它。
- **应对策略**：抽到暴食的回合是唯一的处理窗口——用"消耗手牌"类效果当场吃掉，只亏不赚地止损；若错过窗口，下回合手牌里多两张诅咒的连锁代价远超那 1 点最大生命。

## 相关机制

- [手牌](/mechanics/hand.md)（进入手牌时触发效果）
- [虚无](/mechanics/ethereal.md)（关键词，实际不生效）
- [无法打出](/mechanics/unplayable.md)（无法主动打出）
- [弃牌堆](/mechanics/discard_pile.md)（回合结束未处理时的去向）

## 源码

- `SeerGluttony.cs`（位于 `Cards/Curses/` 目录）
