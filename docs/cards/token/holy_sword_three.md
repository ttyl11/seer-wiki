# 圣剑三

<img src="/images/cards/holy_sword_three.png" alt="圣剑三" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 衍生牌
- **最大PP**: 1
- **能量消耗**: 0
- **类型**: 技能
- **稀有度**: 衍生
- **目标**: 无
- **可升级**: 否

### 数值参数

| 参数 | 数值 |
|---|---|
| 伤害倍率 | 3 倍 |
| PP | 1 |
| 最大PP | 1 |

## 描述

PP: 1/1 使你的所有<span style="color:#d4a017;font-weight:600">君王之剑</span>伤害变为原来的3倍。[<span style="color:#d4a017;font-weight:600">先制</span>](/powers/first_strike_power.md)+1。

## 小贴士

- **基于当前伤害值结算**：三倍化是在每把剑**当前伤害数值**的基础上直接 ×3（基础 10 → <span style="color:#3aa675;font-weight:600">30</span>）。此前通过各种方式已经叠加过的增伤都会被一并放大。
- **⚠️ 只影响打出时已存在的剑**：三倍化是一次性对当前战斗中所有君王之剑的数值修改，**之后**再新铸造出的君王之剑仍是基础伤害 <span style="color:#3aa675;font-weight:600">10</span>。想让新剑也吃加成，需要打出第二张圣剑三（正常每场只会生成一张）。
- **与升级（降费）不冲突**：君王之剑的升级只降能量消耗不加伤害（[圣剑一](/cards/token/holy_sword_one.md) 的效果），因此"先升级再三倍化"没有额外的乘算收益，两张圣剑各管各的维度：一个省费、一个提伤。
- **与[圣剑二](/cards/token/holy_sword_two.md)联动收益极高**：伤害 ×3 后，君王之剑每次命中追加的 <span style="color:#3aa675;font-weight:600">50%</span> [固定伤害](/powers/fixed_damage_power.md)基数也同步变为 3 倍——高铸造长战斗中"三 + 二"连打是君王之剑体系的爆发天花板。
- **先制**（[<span style="color:#d4a017;font-weight:600">查看能力页</span>](/powers/first_strike_power.md)，mod 增益）：获得 <span style="color:#3aa675;font-weight:600">1</span> 层[先制](/powers/first_strike_power.md)。
- **生成来源**：由[圣铸](/powers/holy_forge_counter_power.md)能力累计铸造 <span style="color:#3aa675;font-weight:600">100</span> 时自动生成进手牌，每场战斗最多一张。100 铸造门槛很高，通常只有消耗大量能量的长战斗（尤其 Boss 战）才能达成。

## 相关卡牌

- [圣剑一](/cards/token/holy_sword_one.md)（升级降费，与三倍化分别作用于费用和伤害两个维度）
- [圣剑二](/cards/token/holy_sword_two.md)（伤害三倍化后固伤基数同步放大）
- 君王之剑（原版卡牌，三倍化的作用对象）

## 相关能力

- [圣铸](/powers/holy_forge_counter_power.md)：圣剑三的生成来源
- [先制](/powers/first_strike_power.md)：打出后获得 1 层

## 源码

- `SeerHolySwordThree.cs`
