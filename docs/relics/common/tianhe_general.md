# 天河神将

<img src="/images/relics/tianhe_general.png" alt="天河神将" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 普通

### 数值参数

| 参数 | 数值 |
|---|---|
| 每级格挡 | 2 |

## 描述

回合开始时，消除所有敌人的全属性提升<br/>每消除1级，自身获得<span style="color:#3aa675;font-weight:600">2</span>点<span style="color:#d4a017;font-weight:600">[格挡](/mechanics/block.md)</span>。

- **全属性清除**：清除所有敌人的全部四项[全属性](/mechanics/all_attributes.md)（[力量](/powers/strength_power.md)、[防御](/powers/defense_power.md)、[命中](/powers/accuracy_power.md)、[速度](/powers/speed_power.md)）的正值层数。
- **格挡获取**：每清除 1 级获得 2 点[格挡](/mechanics/block.md)，总和 = 清除总级数 × 2。

## 风味文字

<span style="color:#d44;font-weight:600">天河神将。</span>

## 小贴士

- **全属性清场反制**：回合开始清除所有敌人的力量/防御/命中/速度四项正值属性，每清除1级获得2点格挡。专克爱堆属性的Boss和精英——敌人堆得越多你越硬，反伤流敌人的力量加成直接归零。
- **只清正值不清负值**：敌人的负属性（如被你削到 -3 的力量）不会被它"帮忙清零"——清除判定只看正值层数，负值原样保留。所以它能和削属性的卡牌/能力完美配合：先把敌人属性削到负数（不会被清），正属性则每回合自动没收换格挡。
- **多敌人收益翻倍**：对所有可击中敌人逐个清除四项属性，多敌人战斗中清除总量翻倍，格挡收益极高。一场多敌人战斗轻松叠出几十点格挡。
- **格挡每回合刷新**：获得的格挡是普通格挡，每回合开始重新计算。敌人不堆属性的回合就没格挡，需要配合其他格挡来源保底。
- **性价比**：普通稀有度合理——全属性清场+格挡反制，强度看敌人堆属性频率。

## 源码

- `SeerTianheGeneral.cs`
