# 琉梦

<img src="/images/relics/liu_meng.png" alt="琉梦" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 史诗（自定义稀有度）

### 数值参数

| 参数 | 数值 |
|---|---|
| HealPercent（已损失生命回复百分比） | 20 |
| DamageReduction（克制时受到攻击伤害减免百分比） | 50 |

## 描述

在每场战斗开始时，获得1层<span style="color:#9b59b6;font-weight:600">[希望之花](/powers/flower_of_hope_power.md)</span>和等同于敌人数量+1层的<span style="color:#9b59b6;font-weight:600">[危机感](/powers/sense_of_crisis_power.md)</span>，首回合免疫<span style="color:#d44;font-weight:600">[异常状态](/mechanics/abnormal-status.md)</span>，回复<span style="color:#3aa675;font-weight:600">20</span>%的已损失生命。

在你的回合开始时，若自身[属性克制](/mechanics/element-affinity.md)任意敌人，所有<span style="color:#d4a017;font-weight:600">[PP牌](/mechanics/pp-system.md)</span>恢复1点<span style="color:#d4a017;font-weight:600">[PP](/mechanics/pp-system.md)</span>，获得1层<span style="color:#d4a017;font-weight:600">[先制](/powers/first_strike_power.md)</span>；若任意敌人属性克制自身，受到的攻击伤害减少<span style="color:#3aa675;font-weight:600">50</span>%。

- **开局施加**：战斗开始时获得 1 层[希望之花](/powers/flower_of_hope_power.md)；[危机感](/powers/sense_of_crisis_power.md)层数 = 存活敌人数 + 1（无敌人时为 1 层）。
- **首回合免疫**：第 1 回合免疫所有可见[异常状态](/mechanics/abnormal-status.md)，第 2 回合起失效。
- **首回合回复**：第 1 回合开始时回复已损失生命的 <span style="color:#3aa675;font-weight:600">20</span>%。
- **克制奖励**：每回合开始时若自身[属性克制](/mechanics/element-affinity.md)任一敌人，所有 PP 牌恢复 1 点 PP（不超过上限）并获得 1 层[先制](/powers/first_strike_power.md)（回合开始施加，**当回合第一张牌就能吃到减费**）。
- **被克减免**：若任一敌人属性克制自身，施加"本回合攻击减伤"能力——你受到的**攻击伤害** × 0.5，从施加起覆盖紧随其后的整个敌方回合（敌方回合结束时到期）。非攻击伤害（固伤、DoT、遗物直伤）不受此减免。
- **希望之花的成长与转化**：每回合结束时，[希望之花](/powers/flower_of_hope_power.md)层数 += [危机感](/powers/sense_of_crisis_power.md)层数 × 15；下次回合开始时若攒满 100 层，希望之花消失并转化为 1 层[希望](/powers/hope_power.md)——净化自身全部异常状态、驱散所有敌人的增益类能力（属性类增益除外）、并常驻 30% 攻击减伤。

## 风味文字

<span style="color:#d44;font-weight:600">希望之花。</span>

## 小贴士

- **首回合双重保障**：第 1 回合同时免疫所有可见异常状态（中毒、诅咒、寄生等）并回复 20% 已损失生命。开局安全感拉满，尤其克制开局就上异常的敌人——前几回合不用担心异常干扰，可以放心铺场。
- **危机感是希望之花的成长引擎**：危机感层数 = 开局存活敌人数 + 1（敌人被打死后**不会降低**，按施加时的数量锁定），每回合结束给希望之花 +（危机感 × 15）层。3 敌战斗（危机感 4 层）每回合 +60，**第 3 回合开始**即满 100 层转化为希望；单 Boss 战（危机感 2 层）每回合 +30，要熬到第 5 回合开始才转化——多怪战斗收益明显更高。
- **"希望"转化是本遗物的终态爆发**：希望之花满 100 层转化瞬间——净化你身上全部异常状态 + 驱散所有敌人的增益类能力（属性类增益除外）+ 此后常驻 30% 攻击减伤。一次转化同时完成解控、削敌、减伤三件事，转化回合是强势期。
- **克制奖励攻防一体**：自身属性克制任一敌人时，所有 PP 牌恢复 1 点 PP 并获得 1 层[先制](/powers/first_strike_power.md)（下一张牌耗能 -1）。先制配合高耗能牌收益最大——把先制留给最贵的牌，相当于免费打出。
- **被克减伤 50% 仅限攻击伤害**：任一敌人属性克制自身时，该回合受到的攻击伤害减半。注意仅减免攻击伤害，非攻击伤害（如遗物、能力的直接伤害）不受影响。
- **克制与被克可同时触发**：面对多个不同属性敌人时，可能既触发克制奖励（PP + 先制）又触发被克减免（减伤），两者独立判定。例如敌人 A 被你克制、敌人 B 克制你，则两个效果同时生效。
- **免疫仅限首回合**：第 2 回合起不再免疫异常状态，需要尽快解决会上异常的敌人，或准备其他防护手段（如[次数免疫](/powers/void_plating_power.md)等免疫能力）。
- **属性克制是核心**：克制/被克判定基于元素属性倍率。了解[属性克制](/mechanics/element-affinity.md)表、配合能改变自身元素属性的手段，能更稳定地触发克制奖励、避免被克减免。
- **首回合回复的隐性浪费**：20% 已损失回复按第 1 回合开始时的状态结算——满血进战（刚休息过/事件回满）时回复量为 0，这一条等于空过；残血连战（上一场打完没回血就进下一场）时才有实打实的奶量。它的价值集中在"连续作战续航"而非每场白赚。

## 相关能力

- [希望之花](/powers/flower_of_hope_power.md)（开局获得，攒层载体）
- [危机感](/powers/sense_of_crisis_power.md)（开局获得，希望之花的成长引擎）
- [希望](/powers/hope_power.md)（希望之花满 100 层的转化终态）
- [先制](/powers/first_strike_power.md)（克制时每回合获得）

## 源码

- `SeerLiuMeng.cs`
- `SeerFlowerOfHopePower.cs`
- `SeerSenseOfCrisisPower.cs`
- `SeerHopePower.cs`
