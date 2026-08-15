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

- **全属性+恢复双效**：1 费全属性 +1（[力量](/powers/strength_power.md)/[防御](/powers/defense_power.md)/[命中](/powers/accuracy_power.md)/[速度](/powers/speed_power.md) 各 +1）+ 恢复 10 生命（升级后 18）。
- **属性克制翻倍**：当敌方有属性克制玩家自身属性时（敌方元素对玩家元素倍率为 1.5），效果全翻倍——全属性 +2，恢复 20 生命（升级后 36）。需玩家自身有元素属性才能触发判定。
- **翻倍判定**：检查所有可见敌人的元素属性，只要有一个敌人的元素克制玩家自身元素就触发翻倍。无元素属性时不触发翻倍。
- **配合建议**：配合能改变自身元素属性的卡牌/遗物使用，主动制造被克制局面来触发翻倍。翻倍后全属性 +2 + 恢复 20 生命，1 费收益极高。
- **升级的关键性**：恢复量从 10 提升至 18（翻倍时 36），+80%。全属性不变。升级优先级中等。
- **性价比**：1 费全属性 +1 + 恢复 10 生命，被克制时翻倍为全属性 +2 + 恢复 20 生命。无论是否翻倍，1 费收益都合理。

## 相关能力

- [力量](/powers/strength_power.md)（每层攻击伤害 +1）
- [防御](/powers/defense_power.md)（每层受到攻击伤害 -1）
- [命中](/powers/accuracy_power.md)（正数抵消负命中）
- [速度](/powers/speed_power.md)（每 2 层影响 1 张抽牌数）

## 相关机制

- [属性克制](/mechanics/element-affinity)（敌方元素克制自身时效果翻倍）

## 源码

- `SeerGloriousDream.cs`
