# 电脉充能

<img src="/images/cards/electric_pulse_charge.png" alt="电脉充能" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 5
- **能量消耗**: 0
- **类型**: 技能
- **稀有度**: 普通
- **目标**: 自身
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 瘫痪回合 | 3 | 2 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: 5/5 自身[<span style="color:#9b59b6;font-weight:600">瘫痪</span>](/powers/paralysis_power.md)<span style="color:#3aa675;font-weight:600">3</span>回合。获得<span style="color:#3aa675;font-weight:600">3</span>点[<span style="color:#d4a017;font-weight:600">能量</span>](/mechanics/energy.md)。

## 升级后

PP: 5/5 自身[<span style="color:#9b59b6;font-weight:600">瘫痪</span>](/powers/paralysis_power.md)<span style="color:#3aa675;font-weight:600">2</span>回合。获得<span style="color:#3aa675;font-weight:600">3</span>点[<span style="color:#d4a017;font-weight:600">能量</span>](/mechanics/energy.md)。

## 小贴士

- **核心定位**：0 费换 3 点能量的"能量爆发"卡。代价是自身瘫痪 3 回合（升级后 2 回合），瘫痪期间攻击伤害降低 10%，且若上回合未造成伤害会叠加虚弱/易伤/缩小。适合"一回合爆发"策略——用这张牌换能量，再用高费技能牌/能力牌建立优势，而不是靠攻击输出。
- **瘫痪代价（负面）**：自身[瘫痪](/powers/paralysis_power.md) 3 回合。瘫痪有两个效果：①攻击伤害降低 10%；②回合开始时若上回合未造成伤害，获得虚弱、易伤、缩小各 1 层。第二个效果会随回合叠加——瘫痪期间每回合不攻击就多 1 层三种减益，几回合后攻击几乎打不出伤害。但**技能牌/能力牌不受瘫痪影响**，这是关键。
- **能量收益**：获得 <span style="color:#3aa675;font-weight:600">3</span> 点能量，净赚 3 费（0 费打出 + 3 费收益）。这 3 费可以用来打出高费技能牌/能力牌，建立长线优势。是一张"以攻换能"的转换卡。
- **配合建议**：
 - **技能/能力爆发流**：配合高费技能牌/能力牌可以在瘫痪期间建立优势——能量用于非攻击牌，瘫痪不影响技能/能力。
 - 不适合需要持续攻击输出的体系——瘫痪的叠加减益会逐步削弱攻击，3 回合后攻击几乎无效。
 - 配合"解除负面状态"的能力（如清除减益）可以提前清除瘫痪，恢复输出。
 - 在 Boss 战中，3 回合瘫痪代价较大，需评估是否值得——Boss 不会等你恢复。
- **升级的关键性**：瘫痪回合从 <span style="color:#3aa675;font-weight:600">3</span> 降至 <span style="color:#3aa675;font-weight:600">2</span>（-1）。升级价值高——少 1 回合瘫痪意味着更早恢复输出能力，代价大幅降低。升级优先级高，建议尽早升级。
- **性价比**：0 费 3 点能量，净赚 3 费，但有 3 回合瘫痪代价。普通稀有度合理——作为能量爆发卡，需要配合非攻击牌使用，不适合纯攻击流体系。

## 相关能力

- [瘫痪](/powers/paralysis_power.md)（自身施加 3/2 回合）

## 相关机制

- [能量](/mechanics/energy.md)（获得 3 点能量）

## 源码

- `SeerElectricPulseCharge.cs`
