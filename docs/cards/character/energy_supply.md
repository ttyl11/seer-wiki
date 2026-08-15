# 能源补给

<img src="/images/cards/energy_supply.png" alt="能源补给" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

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
| 能量获取 | 3 | 4 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: 5/5 获得<span style="color:#3aa675;font-weight:600">3</span>点[<span style="color:#d4a017;font-weight:600">能量</span>](/mechanics/energy.md)。使自身[<span style="color:#d4a017;font-weight:600">力量</span>](/powers/strength_power.md)和[<span style="color:#d4a017;font-weight:600">防御</span>](/powers/defense_power.md)-<span style="color:#3aa675;font-weight:600">1</span>。

## 升级后

PP: 5/5 获得<span style="color:#3aa675;font-weight:600">4</span>点[<span style="color:#d4a017;font-weight:600">能量</span>](/mechanics/energy.md)。使自身[<span style="color:#d4a017;font-weight:600">力量</span>](/powers/strength_power.md)和[<span style="color:#d4a017;font-weight:600">防御</span>](/powers/defense_power.md)-<span style="color:#3aa675;font-weight:600">1</span>。

## 小贴士

- **核心定位**：0 费能量生成卡，净赚 3 费。代价是力量 -1 + 防御 -1，攻防双降。适合急需能量打出高费牌的场景——用属性换取能量爆发，是"以弱换能"的转换卡。
- **代价（攻防双降）**：自身[力量](/powers/strength_power.md) -1（自身攻击伤害 -1）+ [防御](/powers/defense_power.md) -1（受到的**攻击**伤害 +1，非攻击伤害不受影响）。力量和防御都持续整场战斗，不会自然消退。多次打出会叠加负面效果——打 3 次就是力量 -3 + 防御 -3，攻防严重削弱。
- **能量收益**：获得 <span style="color:#3aa675;font-weight:600">3</span> 点能量，净赚 3 费（0 费打出 + 3 费收益）。这 3 费可以用来打出高费牌，建立长线优势。与[电脉充能](./electric_pulse_charge.md)（0 费获能但有瘫痪代价）相比，这张牌的代价是属性下降而非瘫痪，更适合需要持续输出的体系。
- **配合建议**：
 - **能量爆发流**：配合[能量护盾](./energy_shield.md)（获能量+格挡）可以缓解防御 -1 的负面影响——能量护盾的格挡能弥补防御下降导致的额外受伤。
 - 配合[能量滋养](./energy_nurture.md)（X 耗能治疗）可以用换来的能量爆发治疗。
 - 不适合多次连续使用——属性叠加下降会严重削弱攻防，1-2 次为宜。
- **升级的关键性**：能量获取从 <span style="color:#3aa675;font-weight:600">3</span> 提升至 <span style="color:#3aa675;font-weight:600">4</span>（+1）。力量和防御的 -<span style="color:#3aa675;font-weight:600">1</span> 不变。升级提升中等——多 1 点能量，但代价不变。升级优先级中等。
- **性价比**：0 费换 3 点能量，代价是力量 -1 + 防御 -1 持续整场战斗。普通稀有度合理——作为能量生成卡，代价可控但会累积，需谨慎使用次数。适合能量爆发流，不适合需要高攻防的体系。

## 相关能力

- [力量](/powers/strength_power.md)（自身 -1 层）
- [防御](/powers/defense_power.md)（自身 -1 层）

## 相关机制

- [能量](/mechanics/energy.md)（获得 3/4 点能量）

## 源码

- `SeerEnergySupply.cs`
