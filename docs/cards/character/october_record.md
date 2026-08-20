# 十月的唱片

<img src="/images/cards/october_record.png" alt="十月的唱片" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 1
- **能量消耗**: 2
- **类型**: 能力
- **稀有度**: 罕见
- **目标**: 无
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 异常回合 | 1 | 1 |
| PP | 1 | 1 |
| 最大PP | 1 | 1 |

## 描述

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 打出的牌与上一张类型不同时，随机一名敌人获得1种随机[<span style="color:#d44;font-weight:600">异常状态</span>](/mechanics/abnormal-status.md)<span style="color:#3aa675;font-weight:600">1</span>回合。

## 升级后

[<span style="color:#d4a017;font-weight:600">固有</span>](/mechanics/innate.md)。[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 打出的牌与上一张类型不同时，随机一名敌人获得1种随机[<span style="color:#d44;font-weight:600">异常状态</span>](/mechanics/abnormal-status.md)<span style="color:#3aa675;font-weight:600">1</span>回合。

## 小贴士

- **类型切换才触发——连续同类型不打扰**：只在当前牌与上一张"类型"不同时才放异常——攻击-攻击-攻击连打不会触发任何一次，只有从攻击切到技能、技能切到能力这种"换挡"才会。这张牌奖励**多样化的出牌节奏**，纯刷同类型牌的流派几乎用不上。
- **首张牌不触发，触发后立刻更新"上一张"**：每场战斗打出的第一张牌因为没有上一张可比，不会触发。此后每打一张都拿当前类型去比上一张——无论触发与否，都会把"上一张"更新为这张的类型，影响下一张的判定。注意"上一张"**跨回合连续追踪、不随回合重置**：上回合最后一张是攻击，这回合第一张出技能照样触发。
- **打出唱片本身算第一张**：结算顺序是先挂上唱片能力、再结算"打出牌后"事件——唱片自己作为本战斗第一张牌（能力类型）不触发，但会把"上一张"记为能力。所以挂上唱片后紧接着出的下一张攻击/技能牌**必定触发**，启动即有收益。
- **类型指牌面基础类型**：这里的"类型"是牌面上标注的基础类型——攻击/技能/能力，可打出的[诅咒](/mechanics/curse-system.md)牌也算一种独立类型参与比较。它不是牌的颜色、关键词标签或归属卡池。所以一张攻击牌→一张技能牌就触发，但攻击牌→另一张攻击牌不触发，无论两张牌其他方面差多少。
- **随机敌人+随机异常，单次单目标**：每次触发只挑一名随机敌人施加一种随机异常（从 <span style="color:#3aa675;font-weight:600">25</span> 种异常里抽），多敌人遭遇战中无法指定目标，长时间看会均匀分布到每个敌人头上。
- **异常仅持续 1 回合**：施加的异常状态只挂 <span style="color:#3aa675;font-weight:600">1</span> 回合，下一轮就衰减消失。这张牌不适合当硬控手段，更适合频繁切换类型时持续撒异常——触发频率比单次质量重要。
- **多人模式只算自己打的牌，存档保留进度**：队友打的牌不参与判定，只有自己打出的牌才会触发唱片。战斗中途存档读档，"上一张牌的类型"会被保留，不会因为存档丢失进度。
- **升级仅加固有**：升级后只添加[固有](/mechanics/innate.md)关键词——战斗开始时这张牌就在[手牌](/mechanics/hand.md)中，可以第一回合就挂上能力。其余数值（耗能、PP、异常回合）均不变。
- **性价比**：<span style="color:#3aa675;font-weight:600">2</span> 费换整场战斗的类型切换惩罚——出牌节奏越多样回报越高，升级加[固有](/mechanics/innate.md)让启动更稳。

## 相关能力

- [唱片](/powers/october_record_power.md)：增益，当你打出的牌与上一张类型不同时，随机一名敌人获得随机1种异常状态1回合

## 源码

- `SeerOctoberRecord.cs`
