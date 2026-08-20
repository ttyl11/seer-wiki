# 烬灭之拥

<img src="/images/cards/ruin_embrace.png" alt="烬灭之拥" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 3
- **能量消耗**: 0
- **类型**: 技能
- **稀有度**: 罕见
- **目标**: 自身
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| PP | 3 | 3 |
| 最大PP | 3 | 3 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">3</span>/<span style="color:#3aa675;font-weight:600">3</span> 将[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)、[<span style="color:#d4a017;font-weight:600">抽牌堆</span>](/mechanics/draw_pile.md)与[<span style="color:#d4a017;font-weight:600">弃牌堆</span>](/mechanics/discard_pile.md)的所有牌放入[<span style="color:#d4a017;font-weight:600">销毁牌堆</span>](/mechanics/destroyed_pile.md)。将[<span style="color:#d4a017;font-weight:600">消耗</span>](/mechanics/exhaust.md)牌堆的牌回满PP，依次放入手牌并打出。

## 升级后

[<span style="color:#d4a017;font-weight:600">保留</span>](/mechanics/retain.md)。PP: <span style="color:#3aa675;font-weight:600">3</span>/<span style="color:#3aa675;font-weight:600">3</span> 将[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)、[<span style="color:#d4a017;font-weight:600">抽牌堆</span>](/mechanics/draw_pile.md)与[<span style="color:#d4a017;font-weight:600">弃牌堆</span>](/mechanics/discard_pile.md)的所有牌放入[<span style="color:#d4a017;font-weight:600">销毁牌堆</span>](/mechanics/destroyed_pile.md)。将[<span style="color:#d4a017;font-weight:600">消耗</span>](/mechanics/exhaust.md)牌堆的牌回满PP，依次放入手牌并打出。

## 详细机制

- **销毁与消耗是两个不同的牌堆**：手牌、抽牌堆、弃牌堆的所有牌移入**销毁牌堆**（本场战斗隔离区）；而拉出来打的是**消耗牌堆**（exhaust）里的牌。两堆互不相通——被销毁的牌不会进消耗堆，也不会被本牌拉出。
- **销毁只影响本场战斗**：销毁牌堆是战斗内牌堆，战斗结束时随战斗状态一同清理，牌组在战后**完整恢复**——销毁不是永久移除，真正的代价是本场战斗后续回合没牌可用。
- **依次打出，放一张打一张**：按消耗牌堆中的顺序，每张牌先回满 PP（仅 PP 卡）、放入手牌底部、立即自动打出，然后才处理下一张。打出顺序就是消耗的先后顺序，无法挑选。
- **自动打出不消耗能量**：消耗堆里的牌全部免费打出——无论原本几费，高费大招也是白嫖。
- **循环会智能终止**：打出过程中战斗结束（敌人死光）或自己死亡时立即中断，不会为打完剩下的牌而"鞭尸"或拖尸。不可打出的牌与无可击中目标的情况由自动打出机制内部处理，不会卡死。
- **升级获得保留**：升级后此牌获得保留关键词，回合结束不弃牌，可以一直囤在手里等消耗堆积累到最肥的时刻。

## 小贴士

- **本质是一台资源转换器**：0 费 + 3 PP，把"手牌 + 抽牌堆 + 弃牌堆"里所有活牌，一次性换成"消耗堆全部死牌满 PP 免费连打"。转换的价值差决定这张牌是神抽还是自杀——消耗堆越肥越赚，消耗堆是空的就是把全场资源白白清空。
- **销毁的代价没有想象中大**：销毁牌堆只存在于本场战斗，战后牌组完整恢复。真正的代价是"本场后续回合手牌抽牌堆被清空"——如果这一回合就能终结战斗，代价等于零。把它当终结技打，别当过渡牌打。
- **消耗流的核心爆发**：先用消耗机制把高威力 PP 牌（大招类）送进消耗堆，再开烬灭之拥——所有消耗掉的牌满 PP、零耗能依次打出。一张牌接回整个前中期积累的消耗投资，是消耗流卡组的收尾引擎。
- **满 PP 打出是隐藏的巨额收益**：PP 牌平时要精打细算攒 PP，这里全部强制回满——消耗堆里每张 PP 大招都按最强形态结算，不存在"PP 不够打折"的情况。
- **打出后你就没牌了**：销毁清空三堆 + 消耗堆打完后入手的牌也全部打出——这一回合结束后手牌、抽牌堆、弃牌堆全部见底，接下来几个回合基本空过。开这张牌之前确认：这一波能打死，或者战斗马上结束。
- **中途杀人立即停止**：连打循环在战斗结束的瞬间断开——消耗堆哪怕还有 20 张牌，敌人死光就不再结算。不会出现"人都死了还在放动画"的尴尬，也意味着溢出伤害不浪费你的时间。
- **升级保留 = 等最肥的一刻**：0 费 + 保留，这张牌可以无限期囤在手里，每回合看一眼消耗堆的厚度再决定开不开。没升级的版本被迫早打，时机经常不理想——升级的价值不在数值而在择时权。
- **PP 成本要看时机**：3 PP 是不小的 PP 投入。终结回合花 3 PP 换全场爆发不亏；前期 PP 紧张时开出纯属资敌——配合保留囤到终盘再放，PP 压力自然消解。
- **销毁堆里的牌还有救吗**：本场战斗内，销毁堆中的牌被隔离，常规手段取不回（部分"毁灭"相关效果会与销毁堆联动，详见[销毁牌堆](/mechanics/destroyed_pile.md)）。开牌前想清楚哪些牌是你本场还要用的。

## 相关机制

- [销毁牌堆](/mechanics/destroyed_pile.md)（手牌/抽牌堆/弃牌堆的牌全部销毁，本场隔离）
- [消耗](/mechanics/exhaust.md)（消耗牌堆的牌回满 PP 后打出）
- [保留](/mechanics/retain.md)（升级后获得，可囤在手中）
- [手牌](/mechanics/hand.md)（被清空到销毁牌堆）
- [抽牌堆](/mechanics/draw_pile.md)（被清空到销毁牌堆）
- [弃牌堆](/mechanics/discard_pile.md)（被清空到销毁牌堆）

## 源码

- `SeerRuinEmbrace.cs`
- `SeerDestroyedPileHelper.cs`
