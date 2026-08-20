# 开龟

<img src="/images/cards/turtle.png" alt="开龟" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 诅咒牌
- **类型**: 诅咒
- **稀有度**: 诅咒
- **关键词**: [永恒](/mechanics/eternal.md)、[不可打出](/mechanics/unplayable.md)
- **可升级**: 否

### 数值参数

| 参数 | 数值 |
|---|---|
| 强制结束回合的伤害阈值 | 15 |

## 描述

此牌在[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)中时，每回合当你造成大于等于<span style="color:#3aa675;font-weight:600">15</span>点伤害时，强制结束你的回合。

## 小贴士

- **达标瞬间立刻掐断回合**：只要你造成的伤害累计到 <span style="color:#3aa675;font-weight:600">15</span> 点，回合**当场强制结束**——手里剩下的牌、没用的能量全部作废。它锁的不是"伤害上限"，而是"出牌窗口"：一张 20 点的大招打出去，回合直接终结，后续计划全部泡汤。
- **只统计你自己造成的伤害**：计数只记**你自己**造成的未格挡伤害——敌人的输出、队友的输出都不算。这与[冲锋](/cards/curse/charge.md)（统计全场所有生物的伤害流动）完全不同，开龟是严格针对你个人的输出刹车。
- **每回合重置**：计数在自己回合结束时清零，每个回合都有全新的 <span style="color:#3aa675;font-weight:600">15</span> 点额度。
- **只在你手牌中期间生效**：判定挂在"开龟位于手牌"上——进入[手牌](/mechanics/hand.md)时挂上计数状态，离开手牌（被消耗、变牌）即移除。正常弃牌发生在回合结束时，所以实战中它约束的就是"抽到它的那个回合"；之后没再抽到它，预算限制就不存在。
- **应对策略**：把伤害预算当作 <span style="color:#3aa675;font-weight:600">15</span> 点硬上限来规划——先用低伤害牌铺垫叠[易伤](/powers/vulnerable_power.md)等增伤，把爆发留到"这回合就此收尾也没关系"的最后一张；溢出阈值的伤害毫无额外收益，纯粹浪费一个回合。
- **斩杀线陷阱**：回合被强制结束时若敌人只剩一丝血，你失去了补刀机会——开龟在场时尽量控制单回合伤害贴着阈值斩杀，或者干脆等弃掉它之后再爆发。
- **永恒+不可打出=只能绕行**：开龟带[永恒](/mechanics/eternal.md)（局外无法删除）和[不可打出](/mechanics/unplayable.md)（无法主动打出）。局内想彻底摆脱它只能靠消耗/变牌类效果移出手牌，否则每场战斗都要按 15 点预算打。

## 相关机制

- [手牌](/mechanics/hand.md)（生效判定位置）
- [永恒](/mechanics/eternal.md)（局外不可移除）
- [不可打出](/mechanics/unplayable.md)（无法主动打出）
- [易伤](/powers/vulnerable_power.md)（预算内增伤的主要手段）

## 源码

- `SeerTurtle.cs`
- `SeerTurtlePower.cs`（伤害计数与强制结束回合）
