# 龙

> **归属**：玩家可施加
> **施加来源**：玩家获得——[龙族烙印](/cards/character/dragon_brand.md)（卡牌）、[王·龙予狂宴](/cards/character/dragon_feast.md)（卡牌）、[龙魂](/cards/quest/dragon_soul.md)（卡牌）、[群星的礼赠](/relics/starter/elemental_core.md)（遗物）；玩家施加给敌方——[饮血屠龙](/cards/character/drink_blood_dragon_slaying.md)（卡牌）、[🌫️ 无相药水](/potions/attribute_change_potion.md)（药水）

<img src="/images/powers/dragon_power.png" alt="龙" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 特殊（中性，不属于增益/减益，不会被消除增益/减益效果清除）
- **叠加方式**: 单例（不叠加）
- **可见**: 是
- **允许负值**: 否
- **元素类型**: Dragon（龙）

## 描述

龙属性。克制冰、龙、圣灵、邪灵。对草、水、火、电、远古、虫微弱。

## 详细机制

- **元素属性**：龙属性能力。
- **克制关系**：
  - **克制（×1.5）**：冰、龙、圣灵、邪灵
  - **微弱（×0.5）**：草、水、火、电、远古、虫
- **伤害倍率**：作为元素属性，影响持有者造成和受到的元素伤害倍率。
- **不可被清除**：为中性，不属于增益/减益，不会被消除 buff/debuff 类效果清除。
- **属性唯一**：施加前需移除现有元素属性，确保属性唯一。

## 相关卡牌

- [龙族烙印](/cards/character/dragon_brand.md)（变为龙属性）
- [王·龙予狂宴](/cards/character/dragon_feast.md)（所有生物变为龙属性）
- [龙王波](/cards/character/dragon_king_wave.md)（场上每有 <span style="color:#3aa675;font-weight:600">1</span> 个龙属性生物，伤害 ×2）
- [龙魂](/cards/quest/dragon_soul.md)（每场战斗开始时获得龙属性）
- [饮血屠龙](/cards/character/drink_blood_dragon_slaying.md)（将目标变为龙属性）

## 小贴士

- **龙系是双刃剑**：攻击克冰/龙/圣灵/邪灵（×1.5），但被草/水/火/电/远古/虫克时伤害只有 ×0.5（其它元素被克是 ×0.75，龙系惩罚更重）——变身龙属性前先看敌方属性构成。
- **其它元素打龙系走各自克制表**：不存在"任何元素打龙系都减半"的规则，详见[元素克制](/mechanics/element-affinity.md)。

## 源码

- `SeerDragonPower.cs`（继承 `SeerElementPower`）
