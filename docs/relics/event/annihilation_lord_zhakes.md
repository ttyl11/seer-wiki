# 湮灭之主·咤克斯

<img src="/images/relics/annihilation_lord_zhakes.png" alt="湮灭之主·咤克斯" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 事件
- **获取途径**: [「决战回响：混沌深渊的宿命对决」](/events/chaos_abyss_duel.md) 事件「投靠湮灭之主·咤克斯」选项——同时获得[咤克斯的诅咒](/relics/event/zhakes_curse_relic.md)（每场战斗后塞 1 张诅咒）和卡牌「绝灭·万物哀鸣」

### 数值参数

| 参数 | 数值 |
|---|---|
| 回复百分比 | 25 |
| 护盾百分比 | 30 |
| 击杀诅咒层数 | 2 |
| 击杀最大生命提升 | 1 |

## 描述

①在首回合开始时，检测敌方<span style="color:#d4a017;font-weight:600">增益</span>个数，每有1个获得1层<span style="color:#9b59b6;font-weight:600">[魔王咒怨](/powers/demon_king_curse_power.md)</span>。<br/>②在你的回合结束时，若<span style="color:#d4a017;font-weight:600">生命</span>为满，消除敌方1个随机<span style="color:#d4a017;font-weight:600">增益</span>；若<span style="color:#d4a017;font-weight:600">生命</span>不满，获得等于已损失生命值<span style="color:#3aa675;font-weight:600">30</span>%的<span style="color:#d4a017;font-weight:600">[格挡](/mechanics/block.md)</span>。<br/>③在你的回合开始时，回复等于上回合<span style="color:#d4a017;font-weight:600">[格挡](/mechanics/block.md)</span>值<span style="color:#3aa675;font-weight:600">25</span>%的<span style="color:#d4a017;font-weight:600">生命</span>。<br/>④敌方生物死亡时，获得<span style="color:#3aa675;font-weight:600">2</span>层<span style="color:#9b59b6;font-weight:600">[魔王咒怨](/powers/demon_king_curse_power.md)</span>，[全属性](/mechanics/all_attributes.md)提升等于当前<span style="color:#9b59b6;font-weight:600">[魔王咒怨](/powers/demon_king_curse_power.md)</span>层数，最大生命永久+<span style="color:#3aa675;font-weight:600">1</span>。

- **增益计数**：①仅统计增益类型且可见的敌方能力（**所有敌人合计**），每有 1 个施加 1 层<span style="color:#9b59b6;font-weight:600">[魔王咒怨](/powers/demon_king_curse_power.md)</span>。
- **护盾-回复链**：②不满血时获得的<span style="color:#d4a017;font-weight:600">[格挡](/mechanics/block.md)</span>会被记录，下回合 ③ 按其 <span style="color:#3aa675;font-weight:600">25</span>% 回复生命并清零记录。
- **击杀全属性**：④获得 2 层魔王咒怨后，按当前总层数提升[力量](/powers/strength_power.md)/[防御](/powers/defense_power.md)/[命中](/powers/accuracy_power.md)/[速度](/powers/speed_power.md)（[全属性](/mechanics/all_attributes.md)）。魔王咒怨不被消耗，仍保留在身上。

## 风味文字

<span style="color:#d44;font-weight:600">湮灭之主。</span>

## 小贴士

- **四效果滚雪球**：①开局按敌方增益数铺魔王咒怨 → ②满血消增益/不满血获格挡 → ③下回合回血 → ④击杀加全属性。四个效果环环相扣，越打越强。
- **魔王咒怨本身就有强力效果**：[魔王咒怨](/powers/demon_king_curse_power.md)不只是计数资源——每层提供攻击伤害+5%、受到伤害-5%（减伤封顶 95%）、攻击技能 3% 概率触发"斩杀与被攻击目标当前血量相同的所有敌人"；累计 10 层起还免疫异常状态。咒怨越高，这些效果越强。①铺的咒怨本身就有战斗价值，不只是为了④的全属性加成。
- **开局看敌方增益**：①统计的是**全体敌人**的增益总和（不是单个敌人）——多怪房、召唤型精英、开局自我强化的 Boss 每个增益都算 1 层。面对自带大量增益的精英/Boss，开局就能白捡大量魔王咒怨，既直接提升战斗力，又为后续④的全属性加成做铺垫。
- **满血/不满血双路线**：②满血时消敌方增益（进攻向），不满血时获得已损失生命 30% [格挡](/mechanics/block.md)（防守向），**每个回合结束都判定一次**。满血消增益是从所有敌人的增益池里随机移除 1 个——优先砍掉敌人的核心增益（如力量、金属化）看运气，但长期战斗中持续削增益的总量很可观。
- **格挡转化回血**：③把上回合 ② 获得的格挡值 25% 转化为回血，形成"掉血→格挡→回血"的循环——残血 50 点时②给 15 格挡，③再回 3.75 血，每回合循环回收。注意只有 ② 不满血时获得的格挡才计入，其它来源（防御牌、能力）给的格挡不算；且③的回血看的是②当时的**数值记录**，与那格挡实际挡掉多少伤害无关。
- **击杀全属性提升且不消耗咒怨**：④**任何敌方生物死亡都触发**——不需要你亲手击杀，中毒烧死的、坐骑补刀的、队友秒的统统算。每次触发 +2 层魔王咒怨 +1 最大生命（上限提升同时回 1 血），然后按魔王咒怨**当时总层数**给等量力量/命中/速度/防御。魔王咒怨永不消耗——开场 10 层时杀第一只怪变 12 层、四维+12；杀第二只变 14 层、四维再+14。多怪战斗（尤其是会召唤小怪的 Boss）里属性会滚到爆表。
- **代价是永续的诅咒污染**：与它绑定的[咤克斯的诅咒](/relics/event/zhakes_curse_relic.md)每场战斗后往牌组塞 1 张随机赛尔诅咒——战斗打得越多牌组越脏，与④"多打战斗滚雪球"的诉求直接冲突。这本身就是事件的取舍设计：想要④的成长就得承受牌组质量的持续下滑，适合已有删牌/消耗手段的局。

## 源码

- `SeerAnnihilationLordZhakes.cs`
