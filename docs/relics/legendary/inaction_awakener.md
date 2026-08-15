# 无为觉者

<img src="/images/relics/inaction_awakener.png" alt="无为觉者" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 传说（自定义稀有度）

### 数值参数

| 参数 | 数值 |
|---|---|
| 全属性增益（牌组数 / 8） | 0 |
| 最大万相乖离层数 | 5 |

## 描述

①拾起时，将最大生命值降至<span style="color:#3aa675;font-weight:600">1</span>。<br/>②战斗开始时，将最大生命值提升至牌组中牌的数量，获得牌组数量 <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">8</span> 的[全属性](/mechanics/all_attributes.md)加成（[力量](/powers/strength_power.md)/[防御](/powers/defense_power.md)/[命中](/powers/accuracy_power.md)/[速度](/powers/speed_power.md)），获得 <span style="color:#3aa675;font-weight:600">1</span> 层<span style="color:#9b59b6;font-weight:600">[万相乖离](/powers/universal_divergence_power.md)</span>。<br/>③打出牌后，该牌的剩余[PP](/mechanics/pp-system.md)和已消耗[PP](/mechanics/pp-system.md)对调。<br/>④打出[PP](/mechanics/pp-system.md)为 <span style="color:#3aa675;font-weight:600">0</span> 的牌时获得 <span style="color:#3aa675;font-weight:600">1</span> 层<span style="color:#9b59b6;font-weight:600">[万相乖离](/powers/universal_divergence_power.md)</span>（最高 <span style="color:#3aa675;font-weight:600">5</span> 层）。<br/>⑤<span style="color:#9b59b6;font-weight:600">[万相乖离](/powers/universal_divergence_power.md)</span> <span style="color:#3aa675;font-weight:600">5</span> 层时死亡可复活，消耗 <span style="color:#3aa675;font-weight:600">5</span> 层并回满生命，战斗结束时从牌组中永久移除一半数量的随机[PP牌](/mechanics/pp-system.md)。<br/>⑥拥有此遗物时，[PP](/mechanics/pp-system.md)为 <span style="color:#3aa675;font-weight:600">0</span> 的[PP牌](/mechanics/pp-system.md)仍可打出且不消耗[PP](/mechanics/pp-system.md)。

- **PP 对调**：打出 PP 牌后，该牌的剩余 PP 和已消耗 PP 互换。例如一张最大 5 PP 的牌打出时消耗 1 PP（剩余4），打出后剩余变为 1、已消耗变为 4。
- **复活代价**：复活后战斗结束时，从牌组所有 PP 牌中随机移除半数（向下取整，0 张则跳过）。
- **⚠️ 复活与可打出判定不在本遗物源码内**：⑤中「万相乖离 5 层复活」的实际触发逻辑在万相乖离能力中；⑥中「PP 为 0 仍可打出」的判定在 PP 牌模型可打出检查中（见 [PP 系统](/mechanics/pp-system.md)）。本遗物只负责战后 PP 牌移除。

## 风味文字

<span style="color:#d44;font-weight:600">无为而治。</span>

## 小贴士

- **核心机制：PP 对调让 PP 牌越打越多**：打出 PP 牌后剩余 PP 和已消耗 PP 互换。一张 5 PP 的牌打出时消耗 1 PP（剩余4），对调后剩余变为 1；下次打出时只剩 1 PP 可消耗，打完后又对调回满 PP（5）。所以 PP 牌的可用 PP 在"1和满 PP"之间来回跳，永远不会真正用完。
- **打 0 PP 牌叠万相乖离**：PP 对调后，如果一张牌的剩余 PP 变成 0，打出它（⑥允许 0 PP 牌打出）就触发④获得 1 层万相乖离。万相乖离每层+3伤害且免疫 debuff，叠满 5 层后还能复活一次——是这件遗物的核心成长线。
- **核心矛盾：想叠乖离就要打 0 PP 牌，但 0 PP 牌效果最弱**：PP 为 0 时打出不消耗 PP（⑥），但 PP 牌的效果通常与消耗的 PP 相关。为了叠万相乖离需要主动打出 0 PP 牌，但 0 PP 牌效果最弱——需要在"叠乖离"和"打效果"之间权衡。
- **牌组越大越强**：战斗开始时最大生命 = 牌组牌数，全属性加成 = 牌组数/8。40 张牌的牌组有 40 最大生命和 5 点全属性加成，80 张牌的牌组有 80 最大生命和 10 点全属性加成——牌组越臃肿反而越强，与常规"精简牌组"理念完全相反。
- **复活代价是永久移除半数 PP 牌**：万相乖离 5 层时死亡可复活，但战斗结束永久移除牌组中一半的 PP 牌。这是不可逆的代价——复活一次后牌组实力大幅下降，后续战斗的全属性加成和最大生命都会降低。
- **拾起即降至 1 血**：拿到这件遗物的瞬间最大生命降为 1，直到下一场战斗开始才恢复为牌组牌数。所以拿到后要尽快进战斗，在非战斗状态下极其脆弱。

## 源码

- `SeerInactionAwakener.cs`
