# 无为觉者

<img src="/images/relics/inaction_awakener.png" alt="无为觉者" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 传奇（自定义稀有度）

### 数值参数

| 参数 | 数值 |
|---|---|
| 全属性增益（牌组数 ÷ 8，向下取整） | 动态计算 |
| 最大万相乖离层数 | 5 |

## 描述

①拾起时，将最大生命值降至<span style="color:#3aa675;font-weight:600">1</span>。<br/>②战斗开始时，将最大生命值提升至牌组中牌的数量，获得牌组数量 <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">8</span> 的[全属性](/mechanics/all_attributes.md)加成（[力量](/powers/strength_power.md)/[防御](/powers/defense_power.md)/[命中](/powers/accuracy_power.md)/[速度](/powers/speed_power.md)），获得 <span style="color:#3aa675;font-weight:600">1</span> 层<span style="color:#9b59b6;font-weight:600">[万相乖离](/powers/universal_divergence_power.md)</span>。<br/>③打出牌后，该牌的剩余[PP](/mechanics/pp-system.md)和已消耗[PP](/mechanics/pp-system.md)对调。<br/>④打出[PP](/mechanics/pp-system.md)为 <span style="color:#3aa675;font-weight:600">0</span> 的牌时获得 <span style="color:#3aa675;font-weight:600">1</span> 层<span style="color:#9b59b6;font-weight:600">[万相乖离](/powers/universal_divergence_power.md)</span>（最高 <span style="color:#3aa675;font-weight:600">5</span> 层）。<br/>⑤<span style="color:#9b59b6;font-weight:600">[万相乖离](/powers/universal_divergence_power.md)</span> <span style="color:#3aa675;font-weight:600">5</span> 层时死亡可复活，消耗 <span style="color:#3aa675;font-weight:600">5</span> 层并回满生命，战斗结束时从牌组中永久移除一半数量的随机[PP牌](/mechanics/pp-system.md)。<br/>⑥拥有此遗物时，[PP](/mechanics/pp-system.md)为 <span style="color:#3aa675;font-weight:600">0</span> 的[PP牌](/mechanics/pp-system.md)仍可打出且不消耗[PP](/mechanics/pp-system.md)。

- **PP 对调**：打出 PP 牌后，该牌的剩余 PP 和已消耗 PP 互换。例如一张最大 5 PP 的牌打出时消耗 1 PP（剩余4），打出后剩余变为 1、已消耗变为 4。
- **血量按牌组数双向调整**：②战斗开始时把最大生命**调整**到等于牌组牌数——牌组多于当前上限时提升，**少于时也会降低**。战斗外的其它最大生命提升（休息、事件等）在下场战斗开始时都会被"对表"回牌组数。
- **万相乖离的完整效果**（详见[万相乖离](/powers/universal_divergence_power.md)）：每层 +3 **攻击**伤害；免疫减益施加；2 层起每回合开始按条件自动触发额外效果（回血/清敌方属性/上异常/属性翻倍），但**每次触发都要消耗你一张随机的 PP 牌作燃料**；5 层时死亡可复活。
- **复活代价**：复活后战斗结束时，从牌组所有 PP 牌中随机移除半数（向下取整，0 张则跳过）。
- **⚠️ 复活与可打出判定不在本遗物源码内**：⑤中「万相乖离 5 层复活」的实际触发逻辑在万相乖离能力中；⑥中「PP 为 0 仍可打出」的判定在 PP 牌模型可打出检查中（见 [PP 系统](/mechanics/pp-system.md)）。本遗物只负责战后 PP 牌移除。

## 风味文字

<span style="color:#d44;font-weight:600">无为而治。</span>

## 小贴士

- **核心机制：PP 对调让 PP 牌越打越多**：打出 PP 牌后剩余 PP 和已消耗 PP 互换。一张 5 PP 的牌打出时消耗 1 PP（剩余4），对调后剩余变为 1；下次打出时只剩 1 PP 可消耗，打完后又对调回满 PP（5）。所以 PP 牌的可用 PP 在"1和满 PP"之间来回跳，永远不会真正用完。
- **打 0 PP 牌叠万相乖离**：PP 对调后，如果一张牌的剩余 PP 变成 0，打出它（⑥允许 0 PP 牌打出）就触发④获得 1 层万相乖离。万相乖离每层 +3 攻击伤害、免疫减益施加，叠满 5 层后还能复活一次——是这件遗物的核心成长线。
- **⚠️ 万相乖离的层数有代价：它会吃你的 PP 牌**：2 层起每回合开始，万相乖离按条件自动触发强力效果（2 层不满血时消耗一张 PP 牌回血、3 层清敌方正值属性、4 层敌方无攻击意图时给全场上随机异常、5 层自身正值属性翻倍）——**每项效果都要消耗一张随机 PP 牌**（从手牌/抽牌堆/弃牌堆随机选 PP>0 的牌，清零 PP 并离场）。满 5 层 + 条件全满足时一回合最多烧掉 4 张 PP 牌。叠乖离不是纯收益：PP 牌是③对调循环的载体，被吃掉就打不了了。
- **核心矛盾：想叠乖离就要打 0 PP 牌，但 0 PP 牌效果最弱**：PP 为 0 时打出不消耗 PP（⑥），但 PP 牌的效果通常与消耗的 PP 相关。为了叠万相乖离需要主动打出 0 PP 牌，但 0 PP 牌效果最弱——需要在"叠乖离"和"打效果"之间权衡。
- **牌组越大越强**：战斗开始时最大生命 = 牌组牌数，全属性加成 = 牌组数/8。40 张牌的牌组有 40 最大生命和 5 点全属性加成，80 张牌的牌组有 80 最大生命和 10 点全属性加成——牌组越臃肿反而越强，与常规"精简牌组"理念完全相反。
- **复活代价是永久移除半数 PP 牌**：万相乖离 5 层时死亡可复活，但战斗结束永久移除牌组中一半的 PP 牌。这是不可逆的代价——复活一次后牌组实力大幅下降，后续战斗的全属性加成和最大生命都会降低。
- **拾起即降至 1 血**：拿到这件遗物的瞬间最大生命降为 1，直到下一场战斗开始才恢复为牌组牌数。所以拿到后要尽快进战斗，在非战斗状态下极其脆弱。

## 源码

- `SeerInactionAwakener.cs`
