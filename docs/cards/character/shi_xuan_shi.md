# 十玄释

<img src="/images/cards/shi_xuan_shi.png" alt="十玄释" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 2
- **能量消耗**: 2
- **类型**: 技能
- **稀有度**: 稀有
- **目标**: 自身
- **可升级**: 是（99 级上限，等效无限）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| PP | 2 | 2 |
| 最大PP | 2 | 2 |
| 免疫回合 | 5 | 5 |
| 束缚回合 | 2 | 2 |
| 获得次数 | 1 | +1 / 每次升级 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">2</span>/<span style="color:#3aa675;font-weight:600">2</span> <span style="color:#3aa675;font-weight:600">5</span>回合内免疫[<span style="color:#d4a017;font-weight:600">异常状态</span>](/mechanics/abnormal-status.md)与能力下降。所有敌人[<span style="color:#9b59b6;font-weight:600">束缚</span>](/powers/constrict_power.md)<span style="color:#3aa675;font-weight:600">2</span>回合。从<span style="color:#3aa675;font-weight:600">2</span>张<span style="color:#3aa675;font-weight:600">2</span>费牌中选择一张获得<span style="color:#3aa675;font-weight:600">1</span>次。回合结束时，若所有怪物[<span style="color:#d4a017;font-weight:600">意图</span>](/mechanics/intent.md)均为眩晕或无效化，此牌自动从任意牌堆打出。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">2</span>/<span style="color:#3aa675;font-weight:600">2</span> <span style="color:#3aa675;font-weight:600">5</span>回合内免疫[<span style="color:#d4a017;font-weight:600">异常状态</span>](/mechanics/abnormal-status.md)与能力下降。所有敌人[<span style="color:#9b59b6;font-weight:600">束缚</span>](/powers/constrict_power.md)<span style="color:#3aa675;font-weight:600">2</span>回合。从<span style="color:#3aa675;font-weight:600">2</span>张<span style="color:#3aa675;font-weight:600">2</span>费牌中选择一张获得<span style="color:#3aa675;font-weight:600">2</span>次。回合结束时，若所有怪物[<span style="color:#d4a017;font-weight:600">意图</span>](/mechanics/intent.md)均为眩晕或无效化，此牌自动从任意牌堆打出。

## 详细机制

- **5 回合双免疫，足额覆盖 5 个敌方回合**：同时免疫异常状态和能力下降。衰减发生在**敌方回合结束时**——打出的当回合不损耗层数，5 层精确覆盖接下来 5 个敌方回合，是足额的免疫窗口。
- **束缚的真实含义**：束缚**不是**眩晕，被束缚的敌人**照常行动、照常攻击**。束缚的真正效果是：敌人存在束缚期间**无法获取先制**（先制是"每层使下一张牌耗能 -1"的资源，怪物囤先制可以降低出牌耗能、提前爆发）。2 层束缚在敌方回合结束递减，覆盖 2 个敌方回合。
- **选牌来源是谱尼自己的卡池**：从角色卡池的 2 费牌（已解锁、非 X 费）中随机生成 2 张不重复的候选，选 1 张**加入手牌**。选中的 PP 牌会以**满 PP** 状态入手。
- **自动打出的判定**：你方回合结束时，检查所有**存活**敌人的当前意图——全部为眩晕或无效化才触发（死亡的敌人不参与判定；意图无法判断时保守不触发）。触发后从任意牌堆（手牌/抽牌堆/弃牌堆）找到此牌自动打出。
- **自动打出不消耗能量**：自动打出属于免费出牌，2 费 + 2 PP 的成本全部免除，白拿一次完整效果。
- **自动打出时选牌是随机的**：自动打出无法弹选牌界面，2 选 1 由随机数决定——自动触发意味着你放弃选牌的控制权。
- **判定是全局钩子**：判定每场战斗无条件生效，不依赖你打出过这张牌；牌组里只要存在十玄释（任意牌堆）就会被打出。双人房中双方各自的十玄释独立判定、独立自动打出。
- **升级只提升选牌次数**：每次升级获得次数 +1（2 次选牌 = 两轮独立的"2 选 1"，共看 4 张拿 2 张），免疫、束缚、自动打出机制均不变。上限 99 级。

## 小贴士

- **双免疫是这张卡的防御核心**：异常状态和能力下降双免疫持续足额 5 个敌方回合——中毒、灼烧、冰冻、力量下降、命中下降全部无效。面对 debuff 流敌人（持续上异常的精英和 Boss），一张顶五张。
- **束缚不是控制，是拆引擎**：束缚的敌人照样打你，它拆掉的是"先制"——会囤先制的敌人（准备降耗爆发、连打的类型）被束缚后 2 个回合内攒不起来。把它当软干扰用，别指望它当硬控。
- **束缚不帮自动打出凑条件**：被束缚敌人的意图仍是原本的攻击/技能意图，不会变成眩晕或无效化。想触发自动打出，需要真正的群体击晕或无效化手段。
- **自动打出是控制流的白嫖引擎**：敌人全晕的回合结束时自动触发，2 费 + 2 PP 全免，白拿 5 回合双免疫 + 束缚 + 一张 2 费牌。配合群体击晕形成"每回合全晕 → 每回合白嫖"的循环，敌人一回合都动不了。
- **自动打出的代价是选牌失控**：手动打出时 2 张候选由你挑；自动打出时随机数替你挑。候选都是 2 费牌，方差不大，但强迫症玩家要有心理准备。
- **选牌只出谱尼卡池**：候选是谱尼自己的 2 费牌（非 X 费、已解锁），不会出其他角色或共享池的牌。想要的是哪张 2 费，心里先有数——2 费档位里既有输出也有功能牌，按局面缺口选。
- **升级的性价比看局面**：升级只加选牌次数，每级多看 2 张多拿 1 张 2 费牌。如果你拿这张卡是为了免疫和自动打出引擎，升级优先级可以放后；如果当资源引擎用（反复自动打出 + 多次选牌），升级收益才明显。
- **总性价比**：2 费 + 2 PP 换"5 敌方回合双免疫 + 2 回合群体拆先制 + 1 张满 PP 的 2 费牌"，账面不亏；一旦自动打出条件成型，成本归零——是稀有价值上限很高、下限也不低的稳健型 PP 牌。
- **与多回合先制联动**：谱尼自己的[多回合先制](/powers/delayed_first_strike_power.md)流（回合开始获得先制降耗）与束缚的拆先制是一体两面——自己囤先制、拆敌人的先制，出牌节奏完全握在自己手里。

## 相关能力

- [束缚](/powers/constrict_power.md)（所有敌人束缚 2 回合，期间无法获取先制）
- [异常状态免疫](/powers/debuff_immune_power.md)（5 回合异常状态免疫）
- [能力下降免疫](/powers/attr_down_immune_turn_power.md)（5 回合能力下降免疫）
- [先制](/powers/first_strike_power.md)（束缚封锁的目标资源）

## 相关机制

- [异常状态](/mechanics/abnormal-status.md)（5 回合免疫）
- [意图](/mechanics/intent.md)（自动打出的判定条件：全眩晕或全无效化）

## 源码

- `SeerShiXuanShi.cs`
- `SeerShiXuanShiAutoPlayPower.cs`
