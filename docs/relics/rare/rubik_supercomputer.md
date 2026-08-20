# 超算鲁比克

<img src="/images/relics/rubik_supercomputer.png" alt="超算鲁比克" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 稀有

### 数值参数

| 参数 | 数值 |
|---|---|
| 机器学习层数 | 1 |
| 基准卡牌数 | 4 |

## 描述

①在每场战斗开始时，检索整个牌组中所有拥有<span style="color:#d4a017;font-weight:600">[PP](/mechanics/pp-system.md)</span>值的卡牌。<br/>②若不足<span style="color:#3aa675;font-weight:600">4</span>张，获得<span style="color:#3aa675;font-weight:600">1</span>层<span style="color:#9b59b6;font-weight:600">[机器学习](/powers/machine_learning_power.md)</span>。<br/>③若≥<span style="color:#3aa675;font-weight:600">4</span>张：选取<span style="color:#3aa675;font-weight:600">4</span>张<span style="color:#d4a017;font-weight:600">PP牌</span>为基准（优先不同PP值），以(MaxPp-1)构成2×2矩阵计算秩：<br/>秩为0：获得<span style="color:#9b59b6;font-weight:600">[异常免疫（永久）](/powers/permanent_debuff_immune_power.md)</span>+<span style="color:#9b59b6;font-weight:600">[虚空形态](/powers/void_form_power.md)</span>；秩为1：<span style="color:#9b59b6;font-weight:600">[群蛇形态](/powers/serpent_form_power.md)</span>；秩为2：<span style="color:#9b59b6;font-weight:600">[恶魔形态](/powers/demon_form_power.md)</span>。<br/>④第一回合只抽选取的<span style="color:#3aa675;font-weight:600">4</span>张<span style="color:#d4a017;font-weight:600">PP牌</span>（不足则有几张抽几张）。

- **基准选取**：按PP值从高到低优先选不同PP值的牌各1张，不足时从剩余PP牌中随机补齐至4张。
- **矩阵秩计算**：4张选取牌按顺序取(MaxPp-1)构成2×2矩阵——全零（4张全是1PP）→秩0；行列式为零→秩1；否则→秩2。
- **首回合抽牌**：第一回合抽牌数直接归零（不是常规5张），改为把选取的PP牌放入手牌；PP牌不足4张时有几张放几张。
- **形态效果**：秩0的[虚空形态](/powers/void_form_power.md)=每回合第一张牌0费；秩1的[群蛇形态](/powers/serpent_form_power.md)=每打出一张牌对随机敌人造成1点伤害；秩2的[恶魔形态](/powers/demon_form_power.md)=每回合开始获得1层[力量](/powers/strength_power.md)；不足4张给的[机器学习](/powers/machine_learning_power.md)=每回合多抽1张牌。

## 风味文字

<span style="color:#d44;font-weight:600">矩阵归一。</span>

## 小贴士

- **三种形态都是整场滚雪球能力**：秩0 → [异常免疫（永久）](/powers/permanent_debuff_immune_power.md)（整场免疫减益）+ [虚空形态](/powers/void_form_power.md)（每回合第一张牌0费）；秩1 → [群蛇形态](/powers/serpent_form_power.md)（每打出一张牌，对随机敌人造成1点伤害）；秩2 → [恶魔形态](/powers/demon_form_power.md)（每回合开始获得1层[力量](/powers/strength_power.md)）。走哪条路线完全由牌组的PP值分布决定——这是可以在局外构筑时主动规划的。
- **想要特定形态的配法**：**全1PP → 秩0**（防御+免费开局的组合）；**全同PP（≥2）或两两成对（如2张3PP+2张2PP）→ 秩1**（对角线乘积相等，牌海流每张牌白送1点随机伤害）；**混合不同PP值 → 通常秩2**（力量滚雪球，战斗越长越强）。全同PP最容易凑——牌组PP牌的PP值全部相同即可锁定群蛇形态。
- **⚠️ 第一回合不抽牌，手牌只有PP牌**：开局抽牌数被归零，改为把选取的PP牌放入手牌——正常路线开局4张（比常规5张少1张），换来PP牌全上手的确定性。但**PP牌不足4张时开局手牌 = 现有PP牌张数**：2张PP牌就2张手牌，0张PP牌第一回合**完全空手**，只能直接结束回合。牌组PP牌越少，这个遗物的开局惩罚越重。
- **机器学习救不了第一回合**：PP牌不足4张给的[机器学习](/powers/machine_learning_power.md)（每回合多抽1张）从第2回合起才生效——抽牌结算时鲁比克的归零在机器学习的+1之后执行，第一回合照样0抽牌。它是长线补偿，不是开局保险。
- **群蛇形态的伤害会被格挡**：每打一张牌弹的1点伤害不吃力量加成但**可被格挡**——敌人有护甲时收益打折，破防后才是白赚。
- **PP牌检索覆盖所有牌堆**：手牌、抽牌堆、弃牌堆、消耗堆里的PP牌全部计入——不用担心"牌压在弃牌堆选不到"，判定只看牌组构成。

## 源码

- `SeerRubikSupercomputer.cs`
