# 屠·扼心恶世

<img src="/images/cards/slaughter_grip_evil_world.png" alt="屠·扼心恶世" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 2
- **能量消耗**: 3
- **类型**: 攻击
- **稀有度**: 稀有
- **目标**: 所有敌方
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
- **X 是牌组与战场四堆的偏差值**：X = 牌组牌数 与（抽牌堆 + 手牌 + 弃牌堆 + 消耗牌堆）之和 的差的绝对值。正常出牌时这四堆总和应当与牌组守恒、X 趋近 0；**X 主要靠"让四堆与牌组出现偏差"来拉大**——最典型的来源是生成临时牌（让四堆膨胀超过牌组）。所以这张牌的真实强度取决于你的卡组能否制造这种偏差；偏差越大，流血越狠。X 为 0 时跳过流血段，只剩 14 点直伤。
- **流血会自我滚雪球**：流血的机制是——敌人回合结束按层数掉血并减 1 层，**且敌人每受一次伤害流血就 +1 层**。这张牌的 14 点全体伤害本身就会给每个受伤敌人各 +1 层流血，再配合后续的多段攻击/全体攻击，流血会越打越厚，对高血量 Boss 是真正的死亡循环。
- **毁灭关键词会先清空消耗堆**：带[毁灭](/mechanics/destruction.md)关键词，打出时先将你的消耗牌堆中的所有牌从本场战斗中移除，再执行牌效果。这意味着打出此牌时消耗堆已被清空——如果你卡组里有依赖消耗堆数量的牌（如[辉·沧天逆流拳](./sky_fist.md)），出牌顺序很关键：先打依赖消耗堆的牌，再打这张，否则消耗堆被清空会让前者失去加成。
- **升级给保留，养 X 的关键**：升级后获得[保留](/mechanics/retain.md)，可以攥在手里等 X 被养到最大值再打出。**没升级时它容易在 X 还小时被迫打出**，白白浪费流血段。所以这张牌基本绑定升级使用——先升再上场。
- **性价比**：3 费换 14 全体伤害 + 缩放流血，基础价已经不亏，X 养起来后流血段是纯收益。升级给保留后从"勉强能用"变"毁灭流核心群体输出"，值得投入。

## 相关能力

- [流血](/powers/bleed_power.md)（自我滚雪球的持续掉血减益）

## 相关机制

- [毁灭](/mechanics/destruction.md)（卡牌自带关键词）
- [保留](/mechanics/retain.md)（升级获得的关键词）

## 源码

- `SeerSlaughterGripEvilWorld.cs`
