# 醉酒燃烧

<img src="/images/cards/drunken_burn.png" alt="醉酒燃烧" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 5
- **能量消耗**: 1
- **类型**: 技能
- **稀有度**: 普通
- **目标**: 无
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 格挡 | 6 | 11 |
| 烧伤回合 | 2 | 2 |
| 易燃回合 | 3 | 3 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: 5/5 获得<span style="color:#3aa675;font-weight:600">6</span>点[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)。所有敌方[<span style="color:#d4a017;font-weight:600">烧伤</span>](/powers/burn_power.md)<span style="color:#3aa675;font-weight:600">2</span>回合，所有生物获得[<span style="color:#d4a017;font-weight:600">易燃</span>](/powers/flammable_power.md)<span style="color:#3aa675;font-weight:600">3</span>回合。

## 升级后

PP: 5/5 获得<span style="color:#3aa675;font-weight:600">11</span>点[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)。所有敌方[<span style="color:#d4a017;font-weight:600">烧伤</span>](/powers/burn_power.md)<span style="color:#3aa675;font-weight:600">2</span>回合，所有生物获得[<span style="color:#d4a017;font-weight:600">易燃</span>](/powers/flammable_power.md)<span style="color:#3aa675;font-weight:600">3</span>回合。

## 小贴士

- **核心定位**：1 费烧伤传播流核心卡。6 格挡 + 全体敌方烧伤 2 回合 + 全场易燃 3 回合。易燃让受击者获得烧伤，形成烧伤传播链——烧伤会通过攻击不断扩散。是一张"以攻代守"的持续伤害卡牌，性价比极高的起手牌。
- **烧伤持续伤害**：所有敌方[烧伤](/powers/burn_power.md) 2 回合。烧伤每回合造成伤害 + 降低目标攻击伤害，2 回合内持续输出。烧伤是 mod 24 种异常状态之一，可触发[四月的信徒](./april_believer.md)等"对异常状态敌人翻倍"效果。
- **易燃传播（双刃剑，关键细节）**：全场**所有生物**（包括友方）获得[易燃](/powers/flammable_power.md) 3 回合。易燃让受击者获得烧伤——所以烧伤会通过攻击传播，形成连锁。但易燃对友方也有影响，友方受击也会获得烧伤。这是一把双刃剑：敌方传播烧伤是收益，友方被传播是代价。
- **格挡保护**：获得 <span style="color:#3aa675;font-weight:600">6</span> 点[格挡](/mechanics/block.md)（升级后 11），当回合有效。格挡用于抵消友方易燃的负面影响——友方受击时先扣格挡，减少触发易燃烧伤的概率。6 点格挡能扛住一波小怪攻击，但扛不住 Boss 大招。
- **配合建议**：
 - **烧伤流核心**：配合[四月的信徒](./april_believer.md)（对异常状态敌人伤害翻倍）——烧伤挂上后所有攻击翻倍，是体系成型的关键联动。
 - 配合多段攻击牌可以触发易燃的烧伤传播——每次命中都可能让目标获得新烧伤，持续伤害滚雪球。
 - **保护友方**：友方也会获得易燃，需要配合格挡/防御能力保护友方——先打醉酒燃烧获得格挡，再让友方承受攻击。
- **升级的关键性**：格挡从 <span style="color:#3aa675;font-weight:600">6</span> 提升至 <span style="color:#3aa675;font-weight:600">11</span>（+5）。烧伤和易燃不变。升级提升中等——格挡多了 5 点，更好地保护友方免受易燃负面影响。升级优先级中等，如果友方经常被烧伤困扰则优先升级。
- **性价比**：1 费 6 格挡 + 全体烧伤 + 全场易燃，功能丰富且有双刃剑风险。普通稀有度合理——作为烧伤传播流的核心卡，1 费性价比极高。适合烧伤流和持续伤害流，纯爆发流可能不适合（双刃剑风险）。

## 相关能力

- [烧伤](/powers/burn_power.md)（所有敌方烧伤 2 回合）
- [易燃](/powers/flammable_power.md)（所有生物获得易燃 3 回合）

## 相关机制

- [格挡](/mechanics/block.md)（获得 6/11 点格挡）

## 源码

- `SeerDrunkenBurn.cs`
