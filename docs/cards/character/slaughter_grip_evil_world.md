# 屠·扼心恶世

<img src="/images/cards/slaughter_grip_evil_world.png" alt="屠·扼心恶世" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 2
- **能量消耗**: 3
- **类型**: 攻击
- **稀有度**: 稀有
- **目标**: 所有敌方
- **关键词**: [毁灭](/mechanics/destruction.md)
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 伤害 | 14 | 14 |
| 每点X流血层数 | 5 | 5 |
| PP | 2 | 2 |
| 最大PP | 2 | 2 |
| 保留 | 无 | 有 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">2</span>/<span style="color:#3aa675;font-weight:600">2</span> 对所有敌人造成<span style="color:#3aa675;font-weight:600">14</span>点伤害。<span style="color:#d4a017;font-weight:600">牌组</span>牌数与其余牌堆之和的差记为X，X每有<span style="color:#3aa675;font-weight:600">1</span>所有敌人[<span style="color:#d44;font-weight:600">流血</span>](/powers/bleed_power.md)<span style="color:#3aa675;font-weight:600">5</span>层。带[<span style="color:#d4a017;font-weight:600">毁灭</span>](/mechanics/destruction.md)关键词。

## 升级后

[<span style="color:#d4a017;font-weight:600">保留</span>](/mechanics/retain.md)。PP: <span style="color:#3aa675;font-weight:600">2</span>/<span style="color:#3aa675;font-weight:600">2</span> 对所有敌人造成<span style="color:#3aa675;font-weight:600">14</span>点伤害。<span style="color:#d4a017;font-weight:600">牌组</span>牌数与其余牌堆之和的差记为X，X每有<span style="color:#3aa675;font-weight:600">1</span>所有敌人[<span style="color:#d44;font-weight:600">流血</span>](/powers/bleed_power.md)<span style="color:#3aa675;font-weight:600">5</span>层。带[<span style="color:#d4a017;font-weight:600">毁灭</span>](/mechanics/destruction.md)关键词。

## 小贴士

- **全体伤害 + 缩放流血的双段输出**：先对所有敌人打 14 点攻击伤害，再按 X 给全体挂 5×X 层[流血](/powers/bleed_power.md)。前段稳定清杂兵，后段靠流血慢慢磨 Boss——一张牌同时覆盖"即时输出"和"持续掉血"两个时间轴。
- **X 到底怎么算**：X = **牌组牌数** 与 **（抽牌堆+手牌+弃牌堆+消耗牌堆）之和** 之差的绝对值。牌组是局外构筑的快照、整场战斗数字不变；开局时牌组里的牌全部克隆进抽牌堆，四堆之和恰好等于牌组数，**X 初始为 0**。想让 X 变大，就只有两条路——让牌"凭空离开"四堆，或让牌"凭空多出来"。
- **拉大 X 的两条路（实战都要会用）**：
 1. **让牌离开四堆统计（牌组数 > 四堆之和）**：
   - **打出能力牌**：能力牌打出后直接离场、不进任何牌堆，而牌组里仍留着它——**每打出一张能力牌，X +1**。卡组里能力牌越多，打到中后期 X 自然越大，能力牌多的卡组天生适合这张牌。
   - **毁灭关键词清空消耗堆**：任何带毁灭的牌打出时，都会把消耗牌堆里的所有牌移进[销毁牌堆](/mechanics/destroyed_pile.md)——销毁牌堆**不计入四堆统计**，消耗堆里攒了多少牌，X 就一次性涨多少。**先用带消耗的牌往消耗堆里囤牌，再打出毁灭牌"收割"成 X**，是这套机制的标准节奏。
 2. **让牌凭空多出来（四堆之和 > 牌组数）**：
   - **生成牌**：战斗中生成的牌（自我复制的[赛皇](/cards/character/gambling_emperor.md)、各类衍生牌、加入抽牌堆的储君牌等）会进四堆，但**不会加入局外牌组**——每生成一张，X +1。生成流卡组能把 X 养到非常可观。
- **它自己的毁灭关键词就是最好的配合**：打出屠·扼心恶世时，毁灭先结算——**消耗堆里囤的牌全部转进销毁牌堆**，紧接着才计算 X。也就是说：消耗堆越满时打出它，流血越猛。攒 6 张消耗牌再打，光这一项就是 X+6 = 全体 30 层流血，外加它自己打出瞬间也不在四堆统计（打出中的牌停在临时区），保底 X+1。**先囤消耗、再开屠刀，这是它设计好的爆发节奏**。
- **注意与"依赖消耗堆"的牌排出顺序**：如果卡组里有按消耗牌堆数量计数的牌（如[辉·沧天逆流拳](./sky_fist.md)），一定要**先打它们、后打这张**——毁灭一结算消耗堆就空了，顺序反了前者直接失去加成。
- **流血会自我滚雪球**：流血的机制是——敌人自己回合结束按层数掉血（不可格挡的固定伤害）并减 1 层，**且敌人每受到一次未被格挡的伤害，流血就 +1 层**（完全格挡则不加）。这张牌的 14 点全体伤害只要没被格挡，就会给每个受伤敌人各 +1 层流血，再配合后续的多段攻击/全体攻击，流血会越打越厚，对高血量 Boss 是真正的死亡循环。
- **升级给保留，养 X 的关键**：升级后获得[保留](/mechanics/retain.md)，可以攥在手里等 X 被养到最大值再打出。没升级时它容易在 X 还小的回合被迫打出，白白浪费流血段——所以这张牌基本绑定升级使用：先升再上场，囤满消耗堆后一刀收割。
- **性价比**：3 费换 14 全体伤害 + 缩放流血，X=0 时只剩直伤勉强保底；X 养到 5+（能力牌攒几张、消耗堆囤几张即可达到）就是全体 25+ 层流血，收益质变。升级给保留后从"勉强能用"变"毁灭流核心群体输出"，值得投入。

## 相关能力

- [流血](/powers/bleed_power.md)（自我滚雪球的持续掉血减益）

## 相关机制

- [毁灭](/mechanics/destruction.md)（卡牌自带关键词，打出时把消耗堆移入销毁牌堆，为 X 供料）
- [销毁牌堆](/mechanics/destroyed_pile.md)（不计入四堆统计，毁灭的牌都去这里）
- [保留](/mechanics/retain.md)（升级获得的关键词）

## 相关卡牌

- [辉·沧天逆流拳](./sky_fist.md)（依赖消耗堆计数，注意与毁灭的出牌顺序）
- [赛皇](/cards/character/gambling_emperor.md)（每回合自我复制，生成牌拉大 X 的典型）

## 源码

- `SeerSlaughterGripEvilWorld.cs`
