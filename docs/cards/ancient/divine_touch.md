# 神灵之触

<img src="/images/cards/divine_touch.png" alt="神灵之触" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 先古牌
- **最大PP**: 77
- **能量消耗**: 3
- **类型**: 攻击
- **稀有度**: 先古
- **目标**: 所有敌方
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 伤害 | 5 | 5 |
| 固定伤害 | 5 | 10 |
| 先制 | +1 | +1 |
| PP | 77 | 77 |
| 最大PP | 77 | 77 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">77</span>/<span style="color:#3aa675;font-weight:600">77</span><br/><span style="color:#5a9e2e;font-weight:600">[先制](/powers/first_strike_power.md)+1</span>，对所有敌人造成<span style="color:#3aa675;font-weight:600">5</span>点伤害，<span style="color:#3aa675;font-weight:600">5</span>点[<span style="color:#d4a017;font-weight:600">固定伤害</span>](/powers/fixed_damage_power.md)。每打出一张攻击牌，此牌自动从任意地方打出。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">77</span>/<span style="color:#3aa675;font-weight:600">77</span><br/><span style="color:#5a9e2e;font-weight:600">[先制](/powers/first_strike_power.md)+1</span>，对所有敌人造成<span style="color:#3aa675;font-weight:600">5</span>点伤害，<span style="color:#3aa675;font-weight:600">10</span>点[<span style="color:#d4a017;font-weight:600">固定伤害</span>](/powers/fixed_damage_power.md)。每打出一张攻击牌，此牌自动从任意地方打出。

## 小贴士

- **真正的"全自动"——攻击牌即触发**：不同于原版[飞剑回旋镖](https://slay-the-spire.fandom.com/wiki/Sword_Boomerang)那种"打出后随机重复"，这张牌的自动机制是**每打出一张攻击牌，此牌就自动从手牌/抽牌堆/弃牌堆/消耗堆任意地方飞出去打一次**。所以构筑上要堆攻击牌密度，1 张攻击牌 = 1 次免费全自动群体伤害+固定伤害，10 张攻击牌一轮就是 10 次扫场。
- **3 费只是入场券，后续全免费**：3 费只在第一次手动打出时消耗，之后所有自动打出**不消耗能量**（但仍消耗 PP）。所以真实能耗分摊到 N 次扫场上，每次成本极低——核心矛盾是"先花 3 费启动"还是"等手牌全是攻击牌再启动"。
- **5 点伤害+5 点固定伤害是两套独立伤害**：5 点是正常攻击伤害，吃[力量](/powers/strength_power.md)/[易伤](/powers/vulnerable_power.md)、可被[格挡](/mechanics/block.md)；5 点固定伤害是给敌人挂[固定伤害](/powers/fixed_damage_power.md)能力，下回合开始时强制扣血、**无视格挡、无视所有减伤**。两套伤害独立结算，敌人想挡全部得同时叠格挡+固定伤害免疫。
- **先制+1 让此牌自己也是先制牌**：打出后自身获得 1 层先制，意味着后续自动触发时会在敌人行动前结算——等于先扫一轮再让敌人动。多敌人场景下，先制的群体扫场能先压低血线甚至清掉小怪，再承受 Boss 的输出。
- **无视任何限制——只要 PP>0 就能自动飞出**：这是设计的硬约束——哪怕你被[束缚](/powers/chains_of_binding_power.md)、[懒怠](/powers/sloth_power.md)、[烟雾](/powers/smoggy_power.md)等"无法出牌"类能力压制，此牌的自动打出仍会强制触发。所以这张牌是"被压制时的反制底牌"，但前提是 PP>0——PP 被清零时同样无法触发。
- **PP77 是节奏设计不是无限**：PP 是单场战斗资源，每场战斗开始时重置为 77。77 PP 意味着每场战斗最多自动触发 77 次。看似很多，但堆攻击牌的构筑一场战斗可能触发 5-10 次——**别在杂鱼战浪费**，Boss 战才是这张牌的价值放大器。
- **升级只提升固定伤害 5→10**：5 点伤害不变，固定伤害从 5 提升到 10。固定伤害无视格挡，所以这 5 点提升是"硬收益"——对叠格挡的敌人（如某些 Boss）效果显著。升级优先级高。
- **自动触发不挑时机**：自动触发不会等待你确认，攻击牌一出就立即飞出。所以如果你想"先给敌人挂易伤再扫场"，得在打攻击牌前先挂易伤——否则此牌的自动触发会打在未易伤的敌人身上。
- **性价比**：3 费启动 + 后续全免费，固定伤害无视格挡，先制群体扫场——先古稀有度配得上这个效果，是攻击流构筑的终极启动件。

## 相关能力

- [先制](/powers/first_strike_power.md)（打出后自身获得，先于敌人行动）
- [固定伤害](/powers/fixed_damage_power.md)（无视格挡的延迟伤害，下回合结算）

## 相关机制

- [自动打出](/mechanics/true-god-pile)（每打出一张攻击牌自动触发）
- [格挡](/mechanics/block.md)（5 点正常伤害可被格挡，固定伤害无视格挡）

## 源码

- `SeerDivineTouch.cs`
- `SeerAutoPlayOnAttackPower.cs`
