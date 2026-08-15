# 风林火山

<img src="/images/cards/wind_forest_mountain.png" alt="风林火山" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

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
| 伤害 | 6 | 9 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 造成<span style="color:#3aa675;font-weight:600">6</span>点伤害。解除自身[<span style="color:#d4a017;font-weight:600">全属性</span>](/mechanics/all_attributes.md)下降。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 造成<span style="color:#3aa675;font-weight:600">9</span>点伤害。解除自身[<span style="color:#d4a017;font-weight:600">全属性</span>](/mechanics/all_attributes.md)下降。

## 小贴士

- **攻击附带解负**：造成攻击伤害后，检测力量/命中/防御/速度四项[全属性](/mechanics/all_attributes.md)是否为负，负则施加等量正层数清零。与[阑珊百转](/cards/character/waning_turns.md)同款解负逻辑，但作为攻击牌没有缓冲奖励。
- **清零不反转**：解除是把负层数加回零，不取反成正层数。-3 力量变 0，不会变 +3。别指望用它刷正向属性。
- **解负是附加价值**：没负属性时这张牌就是纯 6 点攻击伤害；有负属性时才体现解负的额外价值。对抗爱降属性的敌人（如降力量/降速度的精英）时这张牌能边打边自救。
- **升级只加伤害**：6→9，+50% 伤害，解负效果不变。作为普通牌的升级很扎实，优先级中等。
- **性价比**：1 费 6 点（升级 9 点）是及格线攻击伤害，附带解负是额外收益。单挂普通，对抗降属性敌人时价值提升。

## 相关能力

- [力量](/powers/strength_power.md)、[命中](/powers/accuracy_power.md)、[防御](/powers/defense_power.md)、[速度](/powers/speed_power.md)：被检测与解除的全属性能力

## 相关机制

- [全属性](/mechanics/all_attributes.md)（力量/命中/防御/速度的合称）

## 源码

- `SeerWindForestMountain.cs`
