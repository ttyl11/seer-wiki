# 风殇影翼·飞镰

<img src="/images/relics/flying_scythe.png" alt="风殇影翼·飞镰" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 稀有

### 数值参数

| 参数 | 数值 |
|---|---|
| 力量减少 | 1 |
| 命中减少 | 1 |
| 先制层数 | 1 |
| 无实体层数 | 1 |
| 伤害阈值 | 40 |

## 描述

回合开始时，令所有敌人<span style="color:#d4a017;font-weight:600">[力量](/powers/strength_power.md)</span>-<span style="color:#3aa675;font-weight:600">1</span>、<span style="color:#9b59b6;font-weight:600">[命中](/powers/accuracy_power.md)</span>-<span style="color:#3aa675;font-weight:600">1</span>。<br/>若上回合受到的未被格挡伤害><span style="color:#3aa675;font-weight:600">40</span>，获得<span style="color:#3aa675;font-weight:600">1</span>层<span style="color:#9b59b6;font-weight:600">[无实体](/powers/intangible_power.md)</span>；否则获得<span style="color:#3aa675;font-weight:600">1</span>层<span style="color:#d4a017;font-weight:600">[先制](/powers/first_strike_power.md)</span>。

- **每回合削弱敌人**：拥有者回合开始时，所有敌人力量 -1、命中 -1。
- **挨打多少决定增益**：上回合受到的未格挡攻击伤害超过 40 时，自身获得 1 层无实体（受伤降为 1）；否则获得 1 层先制。

## 风味文字

<span style="color:#d44;font-weight:600">风殇影翼，飞镰。</span>

## 小贴士

- **每回合稳定削弱敌人攻防**：所有敌人每回合力量 -1、命中 -1。力量降低敌人攻击牌伤害，命中降低敌人命中率。回合越多敌人越弱，是持续削弱的滚雪球遗物。
- **挨打超过 40 给无实体保命**：上回合受到的未格挡攻击伤害超过 40 时，获得 1 层无实体。无实体让你受到的任何伤害和生命减少降为 1，是强力保命手段。所以被重击后下回合会自动获得保护。
- **没挨超过 40 给先制抢先手**：如果上回合未格挡伤害不超过 40，则获得 1 层先制。先制让你抢先行动，适合主动进攻的回合。
- **只统计攻击伤害**：累积的伤害只算攻击牌造成的伤害，毒、烧伤等非攻击伤害不算。所以面对靠异常打伤害的敌人，很难触发无实体，会一直走先制。
- **严格大于 40，等于 40 走先制**：伤害必须超过 40 才触发无实体，刚好 40 还是走先制。所以需要挨打 41+ 才能获得无实体保护。
- **攻防一体的自适应遗物**：挨打重就给无实体保命，挨打轻就给先制进攻。自动根据你上回合的受伤情况切换模式，不需要手动操作，是攻防一体的自适应遗物。

## 源码

- `SeerFlyingScythe.cs`
