# 恶咒追魂

<img src="/images/cards/evil_curse_chasing.png" alt="恶咒追魂" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 1
- **能量消耗**: 2
- **类型**: 能力
- **稀有度**: 罕见
- **目标**: 无
- **关键词**: [虚无](/mechanics/ethereal.md)
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 虚弱层数 | 2 | 3 |
| PP | 1 | 1 |
| 最大PP | 1 | 1 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 获得<span style="color:#3aa675;font-weight:600">2</span>层[<span style="color:#d4a017;font-weight:600">跟踪</span>](/powers/tracking_power.md)。为所有敌人附加<span style="color:#3aa675;font-weight:600">2</span>层[<span style="color:#9b59b6;font-weight:600">虚弱</span>](/powers/weak_power.md)。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 获得<span style="color:#3aa675;font-weight:600">2</span>层[<span style="color:#d4a017;font-weight:600">跟踪</span>](/powers/tracking_power.md)。为所有敌人附加<span style="color:#3aa675;font-weight:600">3</span>层[<span style="color:#9b59b6;font-weight:600">虚弱</span>](/powers/weak_power.md)。

## 小贴士

- **核心定位**：2 费能力牌，跟踪+虚弱联动核心。获得 2 层跟踪 + 为所有敌人附加 2 层虚弱，是 mod 中少有的"自增益+群体减益"双效卡。跟踪让对虚弱敌人的攻击伤害 ×2，配合虚弱群体施加，是体系成型的关键节点。罕见稀有度合理，联动能力本就稀缺。
- **跟踪+虚弱联动（核心机制）**：[跟踪](/powers/tracking_power.md)是原版增益——你（或你的召唤物）**用卡牌**对带有[虚弱](/powers/weak_power.md)的敌人造成攻击伤害时，伤害 × 跟踪层数（2 层 = ×2）。此牌获得 2 层跟踪 + 为所有敌人附加 2 层虚弱——打出后**你对所有敌人的攻击伤害 ×2**，是群体爆发的前提。注意两个边界：只加成**卡牌来源**的攻击伤害（能力/遗物的直接伤害不吃）；非攻击伤害（固伤、DoT）也不吃。
- **虚弱群体减益**：为所有敌人附加 <span style="color:#3aa675;font-weight:600">2</span> 层[虚弱](/powers/weak_power.md)（原版减益）。虚弱让敌人攻击伤害 -25%，每回合 -1 层。群体虚弱既是跟踪的触发条件，也是防御手段——降低敌方输出。
- **虚无代价**：[虚无](/mechanics/ethereal.md)关键词——回合结束时若仍在[手牌](/mechanics/hand.md)中，此牌被[消耗](/mechanics/exhaust_pile.md)。必须在抽到当回合打出 2 费，压力较大。能力牌常驻，打出一次即可。
- **配合建议**：
 - **跟踪爆发流**：配合多段攻击牌可以充分利用跟踪 ×2——多段攻击每段都吃跟踪加成，总收益线性放大。
 - 配合群体攻击牌可以让所有敌人同时吃跟踪 ×2——群体虚弱已铺好路，群攻直接全场翻倍。
 - 注意：虚弱是原版减益，不属于 mod 的 24 种异常状态，因此不能触发[四月的信徒](./april_believer.md)（只对 mod 异常状态翻倍）。
- **升级的关键性**：虚弱层数从 <span style="color:#3aa675;font-weight:600">2</span> 增至 <span style="color:#3aa675;font-weight:600">3</span>（+1），跟踪层数不变。升级提升中等——虚弱多 1 层意味着多 1 回合的跟踪触发条件和减伤。升级优先级中等。
- **性价比**：2 费换来跟踪 2 层 + 群体虚弱 2 层，是体系成型的关键节点。能力牌常驻无需复用。罕见稀有度合理——联动能力本就稀缺。适合跟踪流和群体爆发体系。

## 相关能力

- [跟踪](/powers/tracking_power.md)（获得 2 层，对虚弱敌人伤害加成）
- [虚弱](/powers/weak_power.md)（为所有敌人附加 2/3 层）

## 相关机制

- [虚无](/mechanics/ethereal.md)（关键词）

## 源码

- `SeerEvilCurseChasing.cs`
