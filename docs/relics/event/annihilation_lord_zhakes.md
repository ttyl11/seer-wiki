# 湮灭之主·咤克斯

<img src="/images/relics/annihilation_lord_zhakes.png" alt="湮灭之主·咤克斯" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 事件

### 数值参数

| 参数 | 数值 |
|---|---|
| 回复百分比 | 25 |
| 护盾百分比 | 30 |
| 击杀诅咒层数 | 2 |
| 击杀最大生命提升 | 1 |

## 描述

①在首回合开始时，检测敌方<span style="color:#d4a017;font-weight:600">增益</span>个数，每有1个获得1层<span style="color:#9b59b6;font-weight:600">[魔王咒怨](/powers/demon_king_curse_power.md)</span>。<br/>②在你的回合结束时，若<span style="color:#d4a017;font-weight:600">生命</span>为满，消除敌方1个随机<span style="color:#d4a017;font-weight:600">增益</span>；若<span style="color:#d4a017;font-weight:600">生命</span>不满，获得等于已损失生命值<span style="color:#3aa675;font-weight:600">30</span>%的<span style="color:#d4a017;font-weight:600">[格挡](/mechanics/block.md)</span>。<br/>③在你的回合开始时，回复等于上回合<span style="color:#d4a017;font-weight:600">[格挡](/mechanics/block.md)</span>值<span style="color:#3aa675;font-weight:600">25</span>%的<span style="color:#d4a017;font-weight:600">生命</span>。<br/>④敌方生物死亡时，获得<span style="color:#3aa675;font-weight:600">2</span>层<span style="color:#9b59b6;font-weight:600">[魔王咒怨](/powers/demon_king_curse_power.md)</span>，[全属性](/mechanics/all_attributes.md)提升等于当前<span style="color:#9b59b6;font-weight:600">[魔王咒怨](/powers/demon_king_curse_power.md)</span>层数，最大生命永久+<span style="color:#3aa675;font-weight:600">1</span>。

- **增益计数**：①仅统计增益类型且可见的敌方能力，每有 1 个施加 1 层<span style="color:#9b59b6;font-weight:600">[魔王咒怨](/powers/demon_king_curse_power.md)</span>。
- **护盾-回复链**：②不满血时获得的<span style="color:#d4a017;font-weight:600">[格挡](/mechanics/block.md)</span>会被记录，下回合 ③ 按其 <span style="color:#3aa675;font-weight:600">25</span>% 回复生命并清零记录。
- **击杀全属性**：④获得 2 层魔王咒怨后，按当前总层数提升[力量](/powers/strength_power.md)/[防御](/powers/defense_power.md)/[命中](/powers/accuracy_power.md)/[速度](/powers/speed_power.md)（[全属性](/mechanics/all_attributes.md)）。魔王咒怨不被消耗，仍保留在身上。

## 风味文字

<span style="color:#d44;font-weight:600">湮灭之主。</span>

## 小贴士

- **四效果滚雪球**：①开局按敌方增益数铺魔王咒怨 → ②满血消增益/不满血获格挡 → ③下回合回血 → ④击杀加全属性。四个效果环环相扣，越打越强。
- **魔王咒怨本身就有强力效果**：[魔王咒怨](/powers/demon_king_curse_power.md)不只是计数资源——它本身提供攻击伤害增加、伤害减免、攻击技能概率秒杀、达到阈值后免疫异常状态。咒怨越高，这些效果越强。①铺的咒怨本身就有战斗价值，不只是为了④的全属性加成。
- **开局看敌方增益**：①的效果取决于首回合敌方有多少增益。面对自带大量增益的精英/Boss，开局就能获得大量魔王咒怨，既直接提升战斗力，又为后续④的全属性加成做铺垫。
- **满血/不满血双路线**：②满血时消敌方增益（进攻向），不满血时获得已损失生命 30% [格挡](/mechanics/block.md)（防守向）。两种状态都有收益，但路线不同——保持满血消增益更激进，故意掉血拿格挡更稳健。
- **格挡转化回血**：③把上回合 ② 获得的格挡值 25% 转化为回血。如果上回合获得 100 格挡，下回合回 25 血。形成"掉血→格挡→回血"的循环。注意只有 ② 不满血时获得的格挡才计入，其它来源的格挡不算。
- **击杀全属性提升且不消耗咒怨**：④每击杀一个敌人获得 2 层魔王咒怨 + 1 最大生命，然后按魔王咒怨**当前总层数**获得等量力量/命中/速度/防御。魔王咒怨不被消耗，仍保留在身上——所以咒怨越高，每次击杀的全属性加成越多，雪球越滚越大。
- **性价比**：事件稀有度——四重效果覆盖攻防全阶段，魔王咒怨本身就有增伤/减伤/秒杀/免疫异常的多重收益，④的全属性提升更是永久成长。真正定价点在"咒怨不消耗 + 击杀滚雪球"的设计上，多敌人战斗中强度极高。

## 源码

- `SeerAnnihilationLordZhakes.cs`
