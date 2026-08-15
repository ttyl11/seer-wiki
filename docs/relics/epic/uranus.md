# 乌拉诺斯

<img src="/images/relics/uranus.png" alt="乌拉诺斯" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 史诗（自定义稀有度）

### 数值参数

| 参数 | 数值 |
|---|---|
| 神王血契层数 | 1 |
| 神王血盾层数 | 1 |

## 描述

打出卡牌时：若与上一张牌类型相同，获得<span style="color:#3aa675;font-weight:600">1</span>层<span style="color:#9b59b6;font-weight:600">[神王血契](/powers/god_king_blood_pact_power.md)</span>；若类型不同，获得<span style="color:#3aa675;font-weight:600">1</span>层<span style="color:#9b59b6;font-weight:600">[神王血盾](/powers/god_king_blood_shield_power.md)</span>。

- **每场战斗重置**：战斗开始时清空上一张牌类型记录，每场战斗从零开始规划出牌节奏。
- **仅追踪自身出牌**：只记录拥有者自己打出的牌，敌方与队友的出牌不参与判定。

## 风味文字

<span style="color:#d44;font-weight:600">天空之神。</span>

## 小贴士

- **同类连打堆血契**：连续打出同类型牌（如攻击-攻击-攻击）时，每张牌获得1层[神王血契](/powers/god_king_blood_pact_power.md)。攻击后对全体敌人造成总伤害30%的[固定伤害](/powers/fixed_damage_power.md)，并在受到负面状态时消耗1层抵消——攻击牌连击流的核心输出手段。
- **切类型叠血盾**：打出与上一张不同类型的牌（如攻击-技能-攻击）时获得1层[神王血盾](/powers/god_king_blood_shield_power.md)。受到攻击伤害-20%，获得格挡时回复格挡量40%生命，受伤后消耗1层——攻防切换的保命手段。
- **首张牌必触发血盾**：战斗开始时上一张牌类型记录为空，首张牌无对比基准，必定获得1层神王血盾。开局先打一张牌相当于白嫖1层减伤+回血护盾。
- **节奏型双形态**：根据局面选择"连击输出"或"切换保命"。血契适合压制血量、清小怪；血盾适合抗压、续航。出牌顺序直接决定收益形态。
- **血盾减伤仅对攻击伤害**：神王血盾的20%减伤只对攻击伤害生效，[固定伤害](/powers/fixed_damage_power.md)、烧伤等非攻击伤害不受减伤加成。抗压时优先防攻击牌多的敌人。
- **性价比**：史诗稀有度合理——双形态切换提供输出与生存的灵活选择，节奏掌握好收益很高。出牌顺序规划得当相当于一件遗物两种用法。

## 源码

- `SeerUranus.cs`
