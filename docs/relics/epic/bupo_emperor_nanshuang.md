# 不破帝·南霜

<img src="/images/relics/bupo_emperor_nanshuang.png" alt="不破帝·南霜" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 史诗（自定义稀有度）

### 数值参数

| 参数 | 数值 |
|---|---|
| 每点格挡伤害提升(%) | 6 |

## 描述

①在每场战斗开始时，令双方[全属性](/mechanics/all_attributes.md)+1。<br/>②在你的回合开始时，给所有敌方附加<span style="color:#d4a017;font-weight:600">[格挡](/mechanics/block.md)</span>（等于双方全属性之和）。<br/>③若敌方<span style="color:#d4a017;font-weight:600">[格挡](/mechanics/block.md)</span>之和>生命之和，获得<span style="color:#9b59b6;font-weight:600">[不破诛罚](/powers/bupo_punishment_power.md)</span>。<br/>④所有敌方每有<span style="color:#3aa675;font-weight:600">1</span>点<span style="color:#d4a017;font-weight:600">[格挡](/mechanics/block.md)</span>，自身造成伤害提升<span style="color:#3aa675;font-weight:600">6</span>%。

- **全属性**：包含[力量](/powers/strength_power.md)、[防御](/powers/defense_power.md)、[速度](/powers/speed_power.md)、[命中](/powers/accuracy_power.md)，战斗开始时双方各+1层。
- **格挡计算**：双方四项属性当前层数（仅取正值，负值按 0 计）总和作为格挡量，敌方所有目标各获得等量格挡。
- **不破诛罚触发**：仅比较敌方格挡总和与生命总和，前者严格大于后者时获得 1 层<span style="color:#9b59b6;font-weight:600">[不破诛罚](/powers/bupo_punishment_power.md)</span>。
- **伤害加成**：仅对自身打出的攻击牌伤害生效，加成倍率为 1 + 敌方总格挡 × 6%。

## 风味文字

<span style="color:#d44;font-weight:600">南霜。</span>

## 小贴士

- **给敌人加格挡是核心而非代价**：①给双方全属性+1，②给敌人格挡（等于双方全属性之和）。表面增强敌人，但④将敌人格挡转化为自身伤害加成——每点格挡+6%攻击伤害。敌人格挡越多，你的攻击伤害倍率越高，最终伤害远超格挡量。
- **伤害加成举例**：3个敌人各16点格挡=总48格挡→攻击伤害×3.88。一张10伤害的攻击牌打出38.8伤害，扣除16格挡后仍造成22.8伤害——没有加成时10伤害全被16格挡挡掉。
- **不破诛罚是超载爆发**：敌方格挡总和>生命总和时触发：免疫减益、回合开始+1能量+抽2张牌、所有生物获得20格挡。这20格挡进一步增加④的伤害加成（每敌人+20×6%=+120%倍率），形成爆发回合。仅持续1回合，爆发回合内尽量多打攻击牌。
- **敌人越多遗物越强**：②的格挡量=双方全属性之和（自身+所有敌人的四项属性正值合计），敌人越多总和越大，每个敌人获得的格挡越多，④的伤害倍率也越高。面对群怪时价值最大。
- **加成仅对攻击牌伤害生效**：④的伤害倍率仅作用于攻击牌造成的伤害。非攻击伤害（如固定伤害能力、遗物伤害）不享受加成，且会被敌人格挡抵消——在不破诛罚回合尤其明显（敌人额外获得20格挡）。
- **稀有度说明**：原版稀有度为先古（被掉落池过滤，不会自然掉落），自定义稀有度为史诗（紫色描边，由精英商店发放）。

## 源码

- `SeerBupoEmperorNanshuang.cs`
