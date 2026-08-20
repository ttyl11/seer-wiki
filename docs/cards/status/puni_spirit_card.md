# 圣灵

<img src="/images/cards/puni_spirit_card.png" alt="圣灵" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 状态牌（[谱尼](/monsters/boss/puni_monster.md) Boss 战专属）
- **最大PP**: 1
- **能量消耗**: 1
- **类型**: 状态
- **稀有度**: 状态
- **目标**: 无
- **可升级**: 否
- **关键词**: [消耗](/mechanics/exhaust.md)

### 数值参数

| 参数 | 数值 |
|---|---|
| 形态切换计数阈值 | 7 |
| 每次切换谱尼最大生命加成 | +77 |
| 每次切换谱尼生命恢复 | 回满 |

## 描述

<span style="color:#d4a017;font-weight:600">圣灵</span>。无事发生。

## 小贴士

- **来源：谱尼的"圣光气"**：由[谱尼](/monsters/boss/puni_monster.md)的副技能**圣光气**（偶数回合按顺序轮换的副技能之一）向你的[弃牌堆](/mechanics/discard_pile.md)顶加入 <span style="color:#3aa675;font-weight:600">2</span> 张。整场七形态战斗中会被反复塞入，无法通过"少抽牌"躲开。
- **动一次 = 喂谱尼一层**：这张牌每次**改变位置**——洗牌（弃牌堆→抽牌堆）、抽到（抽牌堆→手牌）、打出（手牌→消耗堆）、弃掉（手牌→弃牌堆）——都会给谱尼叠加 <span style="color:#3aa675;font-weight:600">1</span> 层[圣灵计数](/powers/puni_spirit_counter_power.md)。一张圣灵在牌堆里完整转一圈（洗牌→抽到→弃掉）就是 <span style="color:#3aa675;font-weight:600">3</span> 层，留在牌堆里不管它，计数自己就会涨。
- **⚠️ 攥在手里也不能冻结**：谱尼开局施加的**圣灵化身**会让你的回合结束时，未打出的手牌（不含[保留](/mechanics/retain.md)牌）**返回抽牌堆底部**——圣灵没有保留关键词，回合结束留在手里照样"移动"一次（手牌→抽牌堆），照样 +1 计数。这牌没有任何安全的存放位置。
- **满 7 清零 = 强制形态切换**：圣灵计数达到 <span style="color:#3aa675;font-weight:600">7</span> 时清零，谱尼立即切换到下一形态（虚无→元素→能量→生命→轮回→永恒→圣洁），并且**最大生命 +77、生命回满**——等于你亲手给 Boss 回了一管血还加了血上限。计数和"击杀谱尼触发圣灵重生"走的是同一条形态进度：被击杀切换时圣灵计数**不清零**，两种途径互相加速。
- **打出去消耗掉是"止血"最优解**：圣灵自带[消耗](/mechanics/exhaust.md)，打出只花 <span style="color:#3aa675;font-weight:600">1</span> 费（PP 1/1，一场一次），效果"无事发生"——但打出这 1 次移动之后它就进[消耗堆](/mechanics/exhaust_pile.md)**永久躺平**，不再产生任何计数。对比弃掉（之后每圈洗牌还要 +3），1 费买断一张圣灵的后续全部触发，几乎总是值得的。
- **但要注意真身阶段的"圣灵魔闪光"**：谱尼进入最终真身阶段后，圣灵魔闪光的伤害 = 目标最大生命 ÷ y（y = 你的[手牌](/mechanics/hand.md)+[抽牌堆](/mechanics/draw_pile.md)+弃牌堆中的圣灵总数，**不含消耗堆**）。圣灵打得越干净，y 越小、魔闪光越痛——好在此时圣灵计数已不再触发任何效果（形态锁定真身），该打的还是打，只是满血状态要提前备好回复。
- **七形态全部击破后计数作废**：谱尼进入真身阶段（形态阶段 = 7）后，圣灵计数涨到任何数值都不会再触发切换——此时圣灵只剩"占手牌位"和"影响魔闪光分母"两个作用，纯粹是垃圾牌，见一张消耗一张。

## 相关能力

- [圣灵计数](/powers/puni_spirit_counter_power.md)（谱尼侧计数器，满 7 清零切换形态）
- [圣灵化身](/powers/puni_spirit_incarnation_power.md)（回合结束手牌返回抽牌堆底，圣灵无法靠攥手冻结）
- [圣灵重生](/powers/puni_revive_power.md)（被击杀切形态，与圣灵计数共享进度）

## 相关机制

- [消耗](/mechanics/exhaust.md)（打出后进消耗堆，终结位置变化）
- [保留](/mechanics/retain.md)（圣灵没有此关键词，回合结束会被送回抽牌堆）

## 相关怪物

- [谱尼](/monsters/boss/puni_monster.md)（第三层最终 Boss · 圣灵领域）

## 源码

- `SeerPuniSpiritCard.cs`
- `SeerPuniSpiritCounterPower.cs`（圣灵计数）
- `SeerPuniFormPhasePower.cs`（形态阶段）
