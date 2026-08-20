# 审判

<img src="/images/relics/tarot_judgement.png" alt="审判" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 塔罗遗物
- **稀有度**: 普通

### 数值参数

| 参数 | 数值 |
|---|---|
| 异常状态附加数量 | 1 |

## 描述

回合开始时：<br/>若自身有[异常状态](/mechanics/abnormal-status.md)，吸取所有敌人的[全属性](/mechanics/all_attributes.md)。<br/>若无[异常状态](/mechanics/abnormal-status.md)，为所有敌人随机附加1种[异常状态](/mechanics/abnormal-status.md)1层。

- **全属性**：[力量](/powers/strength_power.md)、[防御](/powers/defense_power.md)、[命中](/powers/accuracy_power.md)、[速度](/powers/speed_power.md)。
- **分支判断**：自身有[异常状态](/mechanics/abnormal-status.md)时走吸取，无异常状态时走附加，二选一。
- **吸取**：仅吸取敌人的正值属性，每个属性单独判断；吸取后敌人减对应层数、自身加对应层数。
- **附加异常**：从所有[异常状态](/mechanics/abnormal-status.md)中随机选1种，对所有敌人各施加1层。

## 风味文字

<span style="color:#d44;font-weight:600">审判。</span>

## 小贴士

- **双模式自切换**：每回合开始检测自身状态——有[异常状态](/mechanics/abnormal-status.md)时吸取敌人全属性，没有则给全敌上1层随机异常。两条腿走路，无论自身中没中异常都有收益，节奏感很强。
- **中异常反而更强**：被敌人挂上异常看似吃亏，实则会触发更强的吸取模式，把敌人的力量/防御/命中/速度正值全部搬给自己。敌人越爱挂异常、属性越高，你赚得越多，对属性型boss是降维打击。
- **群体吸取的稀缺性**：吸取模式对全部可击中敌人生效，多怪战斗里一次性把所有敌人的正值属性都搬过来，这种群体属性转移在塔罗里极为稀缺，多怪战收益比单怪更高。
- **吸取仅吃正值**：吸取按每个属性单独判断，只搬走敌人的正值层数，负值属性不受影响。敌人被吸到归零就吸不动了，但通常已经够把对面掏空。
- **干净时持续铺减益**：自身没异常时给全敌随机上1层异常（全敌吃同一种），配合[魔术师](/relics/common/tarot_magician.md)（异常敌人全属性-1）等异常联动件，能持续扩大优势。随机池里还包括[诅咒](/powers/curse_power.md)——它挂在怪物身上时每回合结束吃 3~50 点随机伤害，抽中就是白赚的持续输出。

**性价比**：普通稀有度给一个永远在干活的双模式遗物，吸取模式的上限高到能单刷属性型boss。无论进攻还是反制都拿得出手，是塔罗遗物中强度非常突出的件。

## 源码

- `SeerTarotJudgement.cs`
