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

- **金币×能量的乘法双重放大**：伤害 = 当前[金币](/mechanics/money_pouch.md)数 × X（投入能量数）。两个变量**相乘**——任意一项翻倍，伤害翻倍；两项同时翻倍，伤害四倍。100 金币 × 3 能量 = 300 伤害，200 金币 × 4 能量 = 800 伤害。
- **X 耗能机制**：打出时消耗所有[能量](/mechanics/energy.md)，X = 消耗的能量值。所以这张牌的最佳打出时机是**满能量回合**——能量攒得越多 X 越大，收益越高。
- **伤害按打出瞬间的金币数结算**：先按当前金币数结算伤害，再失去所有金币（源码中 `DamageCmd.Attack` 在 `LoseGold` 之前执行）。打出时身上有多少金币，就按多少计算。
- **消耗所有金币的代价**：打出后失去所有[金币](/mechanics/money_pouch.md)。金币是**原版货币**（商店购买卡牌/遗物/药水、移除卡牌、部分事件都要用），这张牌只是借用了它做伤害基数。消耗所有金币意味着放弃后续的商店购买力——这是一张"all-in"式的爆发牌。注意金币与 mod 的[赛尔豆](/mechanics/currency.md)是**两种不同货币**，互不相通。
- **寂灭——打出才算数**：[寂灭](/mechanics/nirvana.md)的效果是"**打出时**，本场战斗结束后从牌组移除此牌"。注意触发条件是"打出"——只要一直不打，这张牌就一直留在[牌组](/mechanics/draw_pile.md)里，可以留到整局游戏最关键的战斗（如最终 Boss）再使用，不存在"过期作废"。
- **PP 1 的限制**：[PP](/mechanics/pp-system.md) 为 1，每场战斗只能打出一次。配合寂灭，打出后本场结束就从牌组移除——整局游戏只有一发。务必确保这一发打在刀刃上（满能量 + 高金币时机）。
- **贪欲晶动仪的特殊版本**：遗物[贪欲晶动仪](/relics/ancient/vaku_diamond_storm_gold.md)拾起时获得一张**无寂灭**的此牌，并立即获得 114 金币。无寂灭版打出后不会从牌组移除——注意它**不是**"同一场战斗内反复打"：PP 仍是 1，每场战斗依然只能打一次；区别是**之后的每一场战斗都能再打**，从"一次性底牌"变成"每场战斗的金币爆发引擎"。
- **配合建议**：金币积累靠**原版途径**——战斗胜利奖励、事件奖励、加金币的遗物（如[星币](../colorless/coin.md)系）等。注意[金钱攻击](./money_attack.md)攒的是[赛尔豆](/mechanics/currency.md)而非金币，**不能**给这张牌提供伤害基数。配合能量恢复手段可以提高 X 值。最佳场景是最终 Boss 战——身上金币最多时（把该买的买完、该删的删完，剩下的金币全部变现成伤害）+ 满能量一击必杀。
- **升级的价值**：获得[保留](/mechanics/retain.md)关键词，回合结束时不被弃置。这让你可以**等到满能量 + 金币最多时再打出**，而不是被迫在条件不理想时浪费。升级优先级高——保留让这张一次性爆发牌的时机选择更灵活。
- **性价比**：X 费 + 消耗所有金币 + 寂灭，代价极高但伤害上限也极高。100 金币 × 3 能量 = 300 伤害足以一击秒杀大部分 Boss。适合作为最终决战的"底牌"使用。一次爆发足以终结战斗。

## 相关机制

- [寂灭](/mechanics/nirvana.md)（打出后从牌组移除）
- [保留](/mechanics/retain.md)（升级后获得的关键词）
- [金币](/mechanics/money_pouch.md)（伤害基数和消耗对象）

## 源码

- `SeerDiamondStorm.cs`
