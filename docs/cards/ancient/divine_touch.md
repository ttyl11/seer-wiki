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

- **🔑 真正的"全自动"——每打出一张攻击牌就白嫖一次**：此牌自带隐形的"神灵之触能力"（战斗开始自动挂上）：**每打出一张攻击牌，此牌就从手牌/抽牌堆/弃牌堆/消耗堆任意位置自动飞出结算一次**——不花能量、不占你的操作。构筑上堆攻击牌密度就是堆它的触发次数：一场打 15 张攻击牌 = 15 次免费的全体 5 伤 + 全体固定伤害。自动打出的攻击牌（如[暴政统治者](/cards/event/tyrant_ruler.md)放出的史莱姆）同样算数；它自己触发时不会连锁触发自己。
- **3 费只是入场券，后续全免费**：3 费只在手动打出时消耗，之后所有自动打出**不消耗能量**（只消耗 PP）。核心矛盾是"先花 3 费启动"还是"等攻击牌密度上来再启动"——不过它开局就挂在身上（战斗开始自动施加能力），不打出来也能被攻击牌带着自动飞出，入场费其实可以完全省掉。
- **5 点伤害 + 5 点固定伤害是两套独立伤害**：5 点是正常攻击伤害，吃[力量](/powers/strength_power.md)/[易伤](/powers/vulnerable_power.md)、可被[格挡](/mechanics/block.md)；固定伤害则是给每个敌人挂[固定伤害](/powers/fixed_damage_power.md)能力——**敌方回合开始时（出手前）**按层数一次性扣血，无视格挡、无视增减伤，结算后消失（层数会叠加成单次总额）。两套伤害独立结算，叠格挡的敌人也挡不住固定伤害段。
- **🔑 先制+1 是隐藏的能量引擎**：每次触发（含自动触发）都会给自己重新施加 1 层[先制](/powers/first_strike_power.md)——先制的效果是**你下一张牌费用 -1**（打出后消耗）。触发越频繁，你的攻击牌越接近白嫖：攻击密度高的构筑里，它等于把每张攻击牌的费都打了折。
- **无视任何"无法出牌"类压制——只要 PP>0 就能飞出**：哪怕被[束缚](/powers/chains_of_binding_power.md)、[懒怠](/powers/sloth_power.md)、[烟雾](/powers/smoggy_power.md)等能力锁住出牌，此牌的自动打出仍会强制触发——是被压制回合里的反制底牌。唯一的闸门是 PP：PP 归零后同样哑火。
- **PP 77 是单场上限不是无限**：每场战斗 PP 回满 77，即单场最多触发 77 次。攻击流一场通常触发 5-15 次，余量充足；真正该省的是**固定伤害打在谁身上**——对会回血/叠甲的 Boss 价值最大。
- **升级只提升固定伤害 5→10**：攻击段 5 点不变，固定伤害翻倍——固定伤害无视格挡，这 5 点是"硬收益"，对高格挡敌人效果显著，升级优先级高。
- **自动触发不挑时机**：攻击牌一落地它立刻飞出，不会等你确认——想让它吃到[易伤](/powers/vulnerable_power.md)增伤，要**先挂易伤再打攻击牌**，否则它抢在易伤之前扫场（固定伤害段则完全不受增伤影响，永远稳定）。

## 相关能力

- [先制](/powers/first_strike_power.md)（每次触发重新获得：下一张牌费用 -1）
- [固定伤害](/powers/fixed_damage_power.md)（敌方回合开始时按层数扣血，无视格挡与增减伤）

## 相关机制

- [格挡](/mechanics/block.md)（5 点攻击伤害可被格挡，固定伤害无视格挡）

## 源码

- `SeerDivineTouch.cs`
- `SeerAutoPlayOnAttackPower.cs`
