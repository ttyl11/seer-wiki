# 圣地擎山碎

<img src="/images/cards/holy_mountain_crush.png" alt="圣地擎山碎" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 无色牌
- **能量消耗**: 2
- **类型**: 技能
- **稀有度**: 罕见
- **目标**: 所有敌方
- **可升级**: 是（1 级）
- **升级后关键词**: [<span style="color:#d4a017;font-weight:600">保留</span>](/mechanics/retain.md)

### 数值参数

| 参数 | 数值 |
|---|---|
| 小刀数量 | 4 |

## 描述

将<span style="color:#3aa675;font-weight:600">4</span>张<span style="color:#d4a017;font-weight:600">小刀</span>放入[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)，对所有敌人施加等同于本场战斗中<span style="color:#d4a017;font-weight:600">生成</span><span style="color:#d4a017;font-weight:600">小刀</span>数量的[<span style="color:#d44;font-weight:600">中毒</span>](/powers/poison_power.md)。

## 升级后

将<span style="color:#3aa675;font-weight:600">4</span>张<span style="color:#d4a017;font-weight:600">小刀</span>放入[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)，对所有敌人施加等同于本场战斗中<span style="color:#d4a017;font-weight:600">生成</span><span style="color:#d4a017;font-weight:600">小刀</span>数量的[<span style="color:#d44;font-weight:600">中毒</span>](/powers/poison_power.md)。

## 小贴士

- **🔑 小刀与毒的双轨桥牌**：一手发 <span style="color:#3aa675;font-weight:600">4</span> 张[小刀](/mechanics/keywords.md)（0 费攻击即时战力），一手按**本场累计小刀生成数**给**全体敌人**上等量[中毒](/powers/poison_power.md)——当回合的输出和长线毒伤同时到账。
- **中毒计数吃"所有来源"的小刀**：统计的是本场**你生成的每一张小刀**——其它小刀生成卡（刀刃舞类、复制小刀的效果）产出的全部计入。小刀铺得越凶，这张的中毒越狠——**小刀体系越厚，它越接近全体大额毒圈**。
- **首打基准 = 4 刀 + 全体 4 层毒**：单体 Boss 4 层毒偏薄，但配合其它小刀源，第二次打出时计数已是 8~12+，全体毒直接翻倍往上走——重复抽到价值递增。
- **[中毒](/powers/poison_power.md)是无视[格挡](/mechanics/block.md)的生命流失**：敌人回合结束按当前层数掉血、层数 -1——毒不吃力量/易伤/格挡，对高防高甲目标是稳定穿透伤害；本牌的毒层数 = 小刀数，想让毒爆表就往死里生成小刀。
- **2 费性价比**：4 张 0 费小刀 ≈ 当回合 4 次免费攻击机会（每刀 4 伤基准、吃力量/易伤加成）+ 全体持续毒——直接伤害与 DoT 双修，任何攻击/毒混编构筑都塞得进。
- **升级[保留](/mechanics/retain.md) = 攒小刀数再引爆**：回合结束不弃——先把手里的小刀牌全部倾泻出去抬高计数，再打这张让全体中毒层数吃满历史小刀总量。

## 相关能力

- [中毒](/powers/poison_power.md)：原版异常状态，回合结束时按层数造成生命流失

## 源码

- `SeerHolyMountainCrush.cs`
