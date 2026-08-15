# 常·钻石风暴

<img src="/images/cards/diamond_storm.png" alt="常·钻石风暴" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 1
- **能量消耗**: X
- **类型**: 攻击
- **稀有度**: 稀有
- **目标**: 敌方单体
- **可升级**: 是（1 级）
- **关键词**: 寂灭

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 保留 | 否 | 是 |
| PP | 1 | 1 |
| 最大PP | 1 | 1 |

## 描述

PP: 1/1 [<span style="color:#d4a017;font-weight:600">寂灭</span>](/mechanics/nirvana.md)。造成当前[<span style="color:#d4a017;font-weight:600">金币</span>](/mechanics/money_pouch.md)数×<span style="color:#3aa675;font-weight:600">X</span>的伤害，并消耗所有[<span style="color:#d4a017;font-weight:600">金币</span>](/mechanics/money_pouch.md)。

## 升级后

[<span style="color:#d4a017;font-weight:600">保留</span>](/mechanics/retain.md)。PP: 1/1 [<span style="color:#d4a017;font-weight:600">寂灭</span>](/mechanics/nirvana.md)。造成当前[<span style="color:#d4a017;font-weight:600">金币</span>](/mechanics/money_pouch.md)数×<span style="color:#3aa675;font-weight:600">X</span>的伤害，并消耗所有[<span style="color:#d4a017;font-weight:600">金币</span>](/mechanics/money_pouch.md)。

## 小贴士

- **金币×能量的双倍放大**：伤害 = 当前[金币](/mechanics/money_pouch.md)数 × X（投入能量数）。这是一个**双变量放大**机制——金币越多、能量越多，伤害指数级增长。100 金币 × 3 能量 = 300 伤害，200 金币 × 4 能量 = 800 伤害。
- **X 耗能机制**：打出时消耗所有[能量](/mechanics/energy.md)，X = 消耗的能量值。所以这张牌的最佳打出时机是**满能量回合**——3-4 点能量时打出收益最高。
- **消耗所有金币的代价**：打出后失去所有[金币](/mechanics/money_pouch.md)。金币在 mod 中用于[赛尔豆系统](/mechanics/currency.md)（抽奖、商店等），消耗所有金币意味着放弃后续商店购买和抽奖机会。这是一张"all-in"式的爆发牌。
- **寂灭——一次性使用**：带有[寂灭](/mechanics/nirvana.md)关键词，本场战斗结束后从[牌组](/mechanics/draw_pile.md)移除此牌。意味着整局游戏只能用一次——要在最关键的战斗（如 Boss 战）中使用。
- **贪欲晶动仪的特殊版本**：遗物"贪欲晶动仪"获得的此卡会去掉寂灭关键词，打出后不会从牌组移除——可以反复使用。这让贪欲晶动仪成为这张牌的最佳获取途径。
- **配合建议**：配合金币积累卡组（如[金钱攻击](./money_attack.md)获得赛尔豆、[贪婪](../curse/greed.md)等）囤积大量金币后打出。配合能量恢复手段（如[神域咒能](./divine_curse_energy.md)获得额外能量）可以提高 X 值。最佳场景是最终 Boss 战——囤满金币 + 满能量一击必杀。
- **升级的价值**：获得[保留](/mechanics/retain.md)关键词，回合结束时不被弃置。这让你可以**等到满能量 + 金币最多时再打出**，而不是被迫在条件不理想时浪费。升级优先级高——保留让这张一次性爆发牌的时机选择更灵活。
- **性价比**：X 费 + 消耗所有金币 + 寂灭，代价极高但伤害上限也极高。100 金币 × 3 能量 = 300 伤害足以一击秒杀大部分 Boss。适合作为最终决战的"底牌"使用。一次爆发足以终结战斗。

## 相关机制

- [寂灭](/mechanics/nirvana.md)（打出后从牌组移除）
- [保留](/mechanics/retain.md)（升级后获得的关键词）
- [金币](/mechanics/money_pouch.md)（伤害基数和消耗对象）

## 源码

- `SeerDiamondStorm.cs`
