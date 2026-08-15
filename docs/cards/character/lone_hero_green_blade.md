# 孤胆映青釭

<img src="/images/cards/lone_hero_green_blade.png" alt="孤胆映青釭" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 5
- **能量消耗**: 1
- **类型**: 攻击
- **稀有度**: 普通
- **目标**: 敌方单体
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 龙胆层数 | 2 | 2 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 获得<span style="color:#3aa675;font-weight:600">2</span>层<span style="color:#d4a017;font-weight:600">龙胆</span>，造成层数平方的伤害。

## 升级后

[<span style="color:#d4a017;font-weight:600">饮血</span>](/mechanics/vampiric.md)。PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 获得<span style="color:#3aa675;font-weight:600">2</span>层<span style="color:#d4a017;font-weight:600">龙胆</span>，造成层数平方的伤害。

## 小贴士

- **平方伤害是指数雪球**：伤害 = 施加后龙胆总层数的平方。第一次打出 <span style="color:#3aa675;font-weight:600">2</span> 层→<span style="color:#3aa675;font-weight:600">4</span> 伤，第二次 <span style="color:#3aa675;font-weight:600">4</span> 层→<span style="color:#3aa675;font-weight:600">16</span> 伤，第三次 <span style="color:#3aa675;font-weight:600">6</span> 层→<span style="color:#3aa675;font-weight:600">36</span> 伤，第四次 <span style="color:#3aa675;font-weight:600">8</span> 层→<span style="color:#3aa675;font-weight:600">64</span> 伤——每打一次伤害翻倍增长，第五次就破百。
- **龙胆不衰减，整场战斗累积**：[龙胆](/powers/dragon_whisker_power.md)是增益，没有回合结束减层的机制，层数一直累积到战斗结束。所以这张牌越早打越赚——第一回合打出 <span style="color:#3aa675;font-weight:600">4</span> 伤，到第五次打出就 <span style="color:#3aa675;font-weight:600">100</span> 伤，雪球滚起来收益爆炸。
- **龙胆双功能争抢层数是核心矛盾**：龙胆既是平方伤害的基数，又是异常免疫的消耗品——每抵消一次异常状态消耗 <span style="color:#3aa675;font-weight:600">1</span> 层。想保高伤害就别被上异常，想保异常免疫就别太在意伤害掉层。对面上异常状态时，你的雪球会被打断。
- **固定伤害联动是额外收益**：每打出一张牌（出牌者是自己），对随机敌人施加等于当前龙胆层数的[固定伤害](/powers/fixed_damage_power.md)。龙胆 <span style="color:#3aa675;font-weight:600">8</span> 层时，每打一张牌就附带 <span style="color:#3aa675;font-weight:600">8</span> 点固定伤害——配合过牌流派能触发多次，是这张牌隐藏的输出来源。
- **1 费是最低门槛雪球卡**：<span style="color:#3aa675;font-weight:600">1</span> 费就能进入雪球循环，是 mod 里最便宜的指数增长卡。对比原版[恶魔形态](https://slay-the-spire.fandom.com)3 费每回合 +2 力量（线性增长），这张牌的平方增长在长战斗中远超线性，代价是需要多次打出累积。
- **升级饮血补足生存**：升级添加[饮血](/mechanics/vampiric.md)关键词，造成的攻击伤害按比例回血。平方伤害越高回血越多——<span style="color:#3aa675;font-weight:600">64</span> 伤时一口回大半管血，让这张牌从纯输出变成输出+续航。
- **短战斗收益有限**：平方伤害需要多次打出累积，短战斗（1-2 回合）只打出一次 <span style="color:#3aa675;font-weight:600">4</span> 伤等于浪费。这张牌只适合长战斗（Boss 战、多波精英战），短战斗别留这张牌。
- **性价比**：<span style="color:#3aa675;font-weight:600">1</span> 费给 <span style="color:#3aa675;font-weight:600">2</span> 层龙胆 + 平方伤害 + 异常免疫 + 固定伤害联动，单次 <span style="color:#3aa675;font-weight:600">4</span> 伤偏低但雪球效应 + 多重被动让长战斗收益爆炸性增长。

## 相关能力

- [龙胆](/powers/dragon_whisker_power.md)：增益，抵消异常状态消耗 1 层；每打出一张牌对随机敌人施加固定伤害
- [固定伤害](/powers/fixed_damage_power.md)：减益能力，目标下回合开始时受到等于层数的固定伤害

## 源码

- `SeerLoneHeroGreenBlade.cs`
- `SeerDragonWhiskerPower.cs`
