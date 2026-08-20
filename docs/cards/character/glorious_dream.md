# 光荣之梦

<img src="/images/cards/glorious_dream.png" alt="光荣之梦" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 先古牌
- **最大PP**: 5
- **能量消耗**: 1
- **类型**: 技能
- **稀有度**: 先古
- **目标**: 无
- **可升级**: 是（1 级）
- **对应初始牌**: [生命](/cards/character/life.md)（由[起源流转](/relics/starter/origin_shift.md)转化）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 恢复生命 | 10 | 18 |
| 全属性增益 | +1（翻倍+2） | +1（翻倍+2） |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 全属性<span style="color:#3aa675;font-weight:600">+1</span>，恢复<span style="color:#3aa675;font-weight:600">10</span>生命。敌方有属性克制自身时，效果全翻倍。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 全属性<span style="color:#3aa675;font-weight:600">+1</span>，恢复<span style="color:#3aa675;font-weight:600">18</span>生命。敌方有属性克制自身时，效果全翻倍。

## 小贴士

- **全属性+恢复双效**：1 费全属性 +1（[力量](/powers/strength_power.md)/[防御](/powers/defense_power.md)/[命中](/powers/accuracy_power.md)/[速度](/powers/speed_power.md) 各 +1）+ 恢复 10 生命（升级后 18）。是先古牌中攻防续航一体的均衡选择。
- **属性克制翻倍**：当任意敌人的元素属性克制你自身元素（敌方攻击你倍率 1.5 倍）时，效果全翻倍——全属性 +2、恢复 20 生命（升级后 36）。这是"逆境补偿"设计：越是劣势对局，这张牌越超值。
- **翻倍判定细节**：需要双方都有元素属性——你自身没有元素状态时永远不翻倍；判定的是敌方打你的倍率是否恰为 1.5（龙系对多数属性是 0.5 倍弱化，不属于"克制"，不触发翻倍）。每次打出独立判定，元素状态变化时翻倍结果可能不同。
- **主动制造被克制**：配合能改变自身元素属性的卡牌（如[元素](/cards/character/element.md)）使用，开局先看清敌方元素再切到被克制的属性，1 费吃到全属性 +2 + 20 回血的满额收益，还顺带吃"被克制但反正要打持久战"的局面。
- **升级的关键性**：恢复量 10→18（翻倍时 36），+80%；全属性与翻倍机制不变。作为可反复打出的续航牌，升级把每次回复量几乎翻倍，优先级中上。
- **性价比**：1 费换全属性 +1 + 10 回血已及格；被克制时翻倍后是同费用顶级的全面收益。先古体系里偏万金油，任何卡组都用得上。

## 相关能力

- [力量](/powers/strength_power.md)（每层攻击伤害 +1）
- [防御](/powers/defense_power.md)（每层受到攻击伤害 -1）
- [命中](/powers/accuracy_power.md)（正数抵消负命中）
- [速度](/powers/speed_power.md)（每 2 层影响 1 张抽牌数）

## 相关机制

- [属性克制](/mechanics/element-affinity.md)（敌方元素克制自身时效果翻倍）

## 源码

- `SeerGloriousDream.cs`
