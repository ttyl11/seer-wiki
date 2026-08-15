# 长叹天人命途

<img src="/images/cards/sigh_celestial_fate.png" alt="长叹天人命途" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 5
- **能量消耗**: 1
- **类型**: 攻击
- **稀有度**: 普通
- **目标**: 敌方单体
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 基础伤害 | 0 | 0 |
| 每种能力加成伤害 | 2 | 3 |
| 最大加成项数 | 8 | 8 |
| 满条件伤害 | 16 | 24 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 对手每有<span style="color:#3aa675;font-weight:600">1</span>种能力下降或自身每有<span style="color:#3aa675;font-weight:600">1</span>种能力上升，伤害+<span style="color:#3aa675;font-weight:600">2</span>。<br/>[<span style="color:#d4a017;font-weight:600">唱词：舍麦什</span>](/powers/chant_shamash_power.md)。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 对手每有<span style="color:#3aa675;font-weight:600">1</span>种能力下降或自身每有<span style="color:#3aa675;font-weight:600">1</span>种能力上升，伤害+<span style="color:#3aa675;font-weight:600">3</span>。<br/>[<span style="color:#d4a017;font-weight:600">唱词：舍麦什</span>](/powers/chant_shamash_power.md)。

## 小贴士

- **0 费条件型攻击 + 唱词铺设**：基础伤害为 <span style="color:#3aa675;font-weight:600">0</span>，但每满足一个条件（对手某项能力为负 或 自身某项能力为正）+<span style="color:#3aa675;font-weight:600">2</span> 伤害。满条件时 4+4=8 项 × 2 = <span style="color:#3aa675;font-weight:600">16</span> 伤害（升级后 <span style="color:#3aa675;font-weight:600">24</span>）。1 费换潜在 16-24 伤害 + 唱词铺设，收益极高。
- **能力 = 力量/防御/命中/速度**：检查对手的[力量](/powers/strength_power.md)、[防御](/powers/defense_power.md)、[命中](/powers/accuracy_power.md)、[速度](/powers/speed_power.md)是否为负数（能力下降），以及自身的这四项是否为正数（能力上升）。每满足一项 +<span style="color:#3aa675;font-weight:600">2</span> 伤害。
- **唱词：舍麦什的回血联动**：打出后获得[唱词：舍麦什](/powers/chant_shamash_power.md)——"自身得到任意能力上升时，每有一层恢复 1 点生命"。配合[七重沙海](./sevenfold_sand_sea.md)等给[全属性](/mechanics/all_attributes.md)的牌，每次能力上升都能回血，形成攻防一体的联动。
- **升级让伤害上限飙升**：升级后每种加成从 +<span style="color:#3aa675;font-weight:600">2</span> 增至 +<span style="color:#3aa675;font-weight:600">3</span>，满条件伤害从 16 跳到 24（+50%）。升级优先级高。
- **性价比**：1 费合理——条件型攻击 + 唱词铺设，满条件时伤害爆炸，配合能力上升流派收益极高。

## 相关能力

- [唱词：舍麦什](/powers/chant_shamash_power.md)（施加的唱词，能力上升时回血）

## 相关机制

- [全属性](/mechanics/all_attributes.md)（力量/防御/命中/速度的统称，本卡加成条件）

## 源码

- `SeerSighCelestialFate.cs`
