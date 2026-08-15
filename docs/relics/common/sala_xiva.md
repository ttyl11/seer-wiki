# 沙罗希瓦

<img src="/images/relics/sala_xiva.png" alt="沙罗希瓦" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 普通

## 描述

每回合开始时，为所有对手附加等同于<span style="color:#d4a017;font-weight:600">[消耗牌堆](/mechanics/exhaust_pile.md)</span>牌数的<span style="color:#d4a017;font-weight:600">[固定伤害](/powers/fixed_damage_power.md)</span>。

- **触发时机**：拥有者自己回合开始时触发。
- **层数来源**：实时读取消耗牌堆的卡牌数，消耗牌堆为空时不触发。

## 风味文字

<span style="color:#d44;font-weight:600">沙罗希瓦。</span>

## 小贴士

- **消耗越多伤害越疼**：每回合开始把消耗牌堆的牌数变成固定伤害施加给所有对手。消耗5张牌就是5点固定伤害，消耗10张就是10点——消耗流派的核心输出遗物，越往后打越疼。
- **空消耗牌堆不触发**：消耗牌堆为空时不施加固定伤害，第一回合通常没效果。需要先铺几个回合的消耗才能看到收益，是中后期发力的遗物。
- **对所有敌人生效**：固定伤害施加给所有对手，多敌人战斗收益翻倍。
- **性价比**：普通稀有度合理——消耗流派的稳定固伤输出，强度看牌组消耗频率。

## 源码

- `SeerSalaXiva.cs`
