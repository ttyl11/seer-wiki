# 妖精的蛊惑

<img src="/images/cards/fairy_bewitch.png" alt="妖精的蛊惑" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 1
- **能量消耗**: 0
- **类型**: 能力
- **稀有度**: 稀有
- **目标**: 无
- **可升级**: 是（1 级）
- **关键词**: 升级后获得 [保留](/mechanics/retain.md)

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 每种增益眩晕概率 | 10% | 10% |
| PP | 1 | 1 |
| 最大PP | 1 | 1 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 对手每有一种<span style="color:#d4a017;font-weight:600">增益</span>耗能<span style="color:#3aa675;font-weight:600">+1</span>。为所有对手附加[<span style="color:#d4a017;font-weight:600">蛊惑</span>](/powers/bewitch_power.md)。

## 升级后

[<span style="color:#d4a017;font-weight:600">保留</span>](/mechanics/retain.md)。PP: <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 对手每有一种<span style="color:#d4a017;font-weight:600">增益</span>耗能<span style="color:#3aa675;font-weight:600">+1</span>。为所有对手附加[<span style="color:#d4a017;font-weight:600">蛊惑</span>](/powers/bewitch_power.md)。

## 小贴士

- **能力牌常驻**：打出后对所有敌人施加[魅惑](/powers/bewitch_power.md)（卡牌描述写作"蛊惑"），常驻整场战斗。受魅惑者每次回合开始时判定一次——身上每种可见增益提供 10% 眩晕概率，5 种增益 = 50% 跳过回合，10 种 = 必定跳过。
- **费用随敌人增益递增（反向代价）**：基础 0 费，但场上所有敌人每有一个可见增益，此牌耗能 +1。统计的是所有敌人的可见增益总数（不同敌人身上的同种增益分别计算）——3 个敌人各有 2 种增益 → 耗能 6。
- **代价与收益成正比**：敌人增益越多，耗能越高，但眩晕概率也越高。一张 6 费的牌让有 6 种增益的 Boss 有 60% 概率跳过回合，等于花 6 费买一个"Boss 跳回合"的输出窗口，对堆增益的精英/Boss 尤其致命。
- **0 费白嫖策略**：敌人 0 增益时此牌 0 费，虽然眩晕概率 0%，但魅惑常驻整场——后续敌人获得增益时仍会触发眩晕判定。在战斗早期敌人还没堆增益时打出最划算。
- **配合建议**：对抗堆增益的 Boss/精英效果最好；避免与[戕伐樊笼](./cage_destruction.md)等清除双方所有增益和减益的牌同时使用——清掉敌人增益会让魅惑失去触发条件，清除减益还会把魅惑本身一起清掉。
- **升级的关键性**：添加[保留](/mechanics/retain.md)关键词。保留让你可以等到敌人增益最多时再打出，最大化眩晕概率，升级优先级高。
- **性价比**：0 费基础 + 动态加价，能力牌常驻无需复用。对抗增益流 Boss 时一张牌可能让 Boss 连续跳回合，收益远超耗能。

## 相关能力

- [魅惑](/powers/bewitch_power.md)（对所有对手施加，回合开始时按增益数判定眩晕）

## 相关机制

- [保留](/mechanics/retain.md)（升级后获得）

## 源码

- `SeerFairyBewitch.cs`
