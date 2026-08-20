# 核威强袭

<img src="/images/cards/nuclear_assault.png" alt="核威强袭" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 事件牌
- **最大PP**: 3
- **能量消耗**: 0
- **类型**: 攻击
- **稀有度**: 衍生
- **目标**: 所有敌方
- **可升级**: 是（1 级）
- **关键词**: [<span style="color:#d4a017;font-weight:600">保留</span>](/mechanics/retain.md)

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 伤害百分比 | 30 | 50 |
| 瘫痪回合 | 2 | 2 |
| PP | 3 | 3 |
| 最大PP | 3 | 3 |

## 描述

PP: 3/3 打出后回到[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)。令所有对手[<span style="color:#d4a017;font-weight:600">瘫痪</span>](/powers/paralysis_power.md)<span style="color:#3aa675;font-weight:600">2</span>回合，召唤奥斯提对所有敌人造成其最大生命值<span style="color:#3aa675;font-weight:600">30</span>%的伤害。

## 升级后

PP: 3/3 打出后回到[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)。令所有对手[<span style="color:#d4a017;font-weight:600">瘫痪</span>](/powers/paralysis_power.md)<span style="color:#3aa675;font-weight:600">2</span>回合，召唤奥斯提对所有敌人造成其最大生命值<span style="color:#3aa675;font-weight:600">50</span>%的伤害。

## 小贴士

- **伤害基数是奥斯提的最大生命值，不是敌人的**：卡面"对其最大生命值 30% 的伤害"中的"其"指的是**你的奥斯提**——伤害 = 奥斯提最大生命 × <span style="color:#3aa675;font-weight:600">30</span>%（升级后 <span style="color:#3aa675;font-weight:600">50</span>%）。奥斯提养成得越厚，这张牌打得越痛；奥斯提血量翻倍，伤害就翻倍。**没有奥斯提或奥斯提已死亡时，只打瘫痪、没有伤害段**。
- **固定伤害穿透一切防御**：伤害走固定伤害类型——不吃[格挡](/mechanics/block.md)、不吃力量/易伤/暴击，打高防高血的坦克敌人（格挡堆满的 Boss）是最稳定的穿透输出。代价是同样吃不到自己的增伤 buff，上限就是奥斯提血量的 30%/50%。
- **0 费 + 打出回手 + 保留 = 永久控场循环**：打出后此牌**回到手牌顶部**，且带[保留](/mechanics/retain.md)不弃牌——每回合都能免费再打一次，全场敌人 [瘫痪](/powers/paralysis_power.md) <span style="color:#3aa675;font-weight:600">2</span> 层无限续杯。唯一限制是 PP 3/3：一场最多打 <span style="color:#3aa675;font-weight:600">3</span> 次，用完就只剩手牌占位。
- **群体瘫痪是本体的另一半价值**：所有对手一起瘫痪 2 层——瘫痪目标是"无法行动"，群体战中等于全队跳过 2 轮行动意图。3 次打出 = 最多 6 个瘫痪回合的控场窗口，配合奥斯提伤害收割残局。
- **升级收益巨大**：30%→50% 是 1.67 倍伤害（奥斯提 100 血时 30 伤→50 伤），瘫痪与回手机制不变——事件里见到升级选项优先拿。

## 相关能力

- [瘫痪](/powers/paralysis_power.md)（异常状态，令对手无法行动）

## 源码

- `SeerNuclearAssault.cs`
