# 机械

> **归属**：玩家可施加
> **施加来源**：玩家获得——[群星的礼赠](/relics/starter/elemental_core.md)（遗物）；玩家施加给敌方——[🌫️ 无相药水](/potions/attribute_change_potion.md)（药水）

<img src="/images/powers/mechanical_power.png" alt="机械" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 元素（中性属性，不参与增益/减益分类）
- **叠加方式**: 单例（不可叠加）
- **可见**: 是

## 描述

<span style="color:#9b59b6;font-weight:600">机械</span>属性。克制冰、战斗、远古、邪灵、神灵。对水、火、电、机械、次元微弱。

## 详细机制

- **元素能力载体**：本能力是[元素属性](/mechanics/element-affinity.md)系统的载体，中性属性（非 Buff/Debuff），不可被消除类效果清除。
- **克制倍率**：克制 ×1.5 / 被克 ×0.75（龙系被克 ×0.5）/ 中性 ×1.0，只作用于**攻击伤害**的乘法结算。
- **不受影响的伤害**：异常状态持续伤害、[固定伤害](/mechanics/fixed-damage.md)、充能球伤害、荆棘反伤、生命流失均不吃元素克制。
- **随机分配**：每场战斗开始时玩家与敌人各自随机获得元素属性，可通过卡牌/遗物/事件追加或变化。

## 小贴士

- **选对属性打**：克制时攻击伤害 ×1.5，被克仅 ×0.75——开局先看敌人属性，再决定用哪张属性攻击牌输出。
- **元素每场随机**：属性分配每场战斗重新随机，依靠克制的卡组需准备多属性手段（如[梅洛](/relics/common/merlot.md)每回合随机变化属性）。

## 源码

- `SeerMechanicalPower.cs`
