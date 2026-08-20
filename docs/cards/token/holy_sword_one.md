# 圣剑一

<img src="/images/cards/holy_sword_one.png" alt="圣剑一" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

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
| PP | 1 |
| 最大PP | 1 |

## 描述

PP: 1/1 升级你的所有<span style="color:#d4a017;font-weight:600">君王之剑</span>并移入[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)。[<span style="color:#d4a017;font-weight:600">先制</span>](/powers/first_strike_power.md)+1。

## 小贴士

- **检索范围是全场所有牌堆**：升级并移入的不是只有手牌里的剑——[抽牌堆](/mechanics/draw_pile.md)、[手牌](/mechanics/hand.md)、[弃牌堆](/mechanics/discard_pile.md)里所有属于你的君王之剑都会被一次性升级并全部拉进手牌，相当于一次"全军集合"。
- **升级效果是降费，不是加伤害**：君王之剑的升级只把能量消耗从 <span style="color:#3aa675;font-weight:600">2</span> 降到 <span style="color:#3aa675;font-weight:600">1</span>，伤害数值不变。想提升伤害要靠[圣剑三](/cards/token/holy_sword_three.md)。
- **配合"保留"攒剑爆发**：君王之剑自带[保留](/mechanics/retain.md)（回合结束不弃牌），配合本卡把所有剑集中到手牌，下一回合用降费后的剑群打出成吨输出。
- **注意手牌容量**：剑数量多时一次性全部进手可能挤占手牌位，尽量在手牌较空的回合打出。
- **先制**（[<span style="color:#d4a017;font-weight:600">查看能力页</span>](/powers/first_strike_power.md)，mod 增益）：获得 <span style="color:#3aa675;font-weight:600">1</span> 层[先制](/powers/first_strike_power.md)。
- **生成来源**：由[圣铸](/powers/holy_forge_counter_power.md)能力累计铸造 <span style="color:#3aa675;font-weight:600">10</span> 时自动生成进手牌，每场战斗最多一张。

## 相关卡牌

- [圣剑三](/cards/token/holy_sword_three.md)（升级降费 + 伤害三倍化，是君王之剑体系的两大增益）
- 君王之剑（原版卡牌，圣剑系列的作用对象）

## 相关能力

- [圣铸](/powers/holy_forge_counter_power.md)：圣剑一的生成来源
- [先制](/powers/first_strike_power.md)：打出后获得 1 层

## 相关机制

- [保留](/mechanics/retain.md)：君王之剑自带关键词，配合本卡集中手牌
- [手牌](/mechanics/hand.md)：升级后的剑全部移入此处

## 源码

- `SeerHolySwordOne.cs`
