# 瘫痪

> **归属**：玩家与怪物均可持有
> **施加来源**：玩家获得——[电脉充能](/cards/character/electric_pulse_charge.md)（卡牌）、[超频](/powers/overclock_power.md)（能力联动）；玩家施加给敌方——[核威强袭](/cards/event/nuclear_assault.md)（卡牌）、[曙光普照](/cards/character/shining_light.md)（卡牌）、[好女孩](/powers/good_girl_power.md)（能力联动）、[万相乖离](/powers/universal_divergence_power.md)（能力联动）、[白色龙鳞](/powers/white_dragon_scale_power.md)（能力联动）；怪物施加给玩家——[雷伊](/monsters/boss/ray_monster.md)、[泰格尔](/monsters/boss/tiger_monster.md)

<img src="/images/powers/paralysis_power.png" alt="瘫痪" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 减益（Debuff）
- **叠加方式**: 叠加（Counter）
- **可见**: 是
- **允许负值**: 否

### 数值参数

| 参数 | 数值 |
|---|---|
| 伤害降低百分比 | 10 |

## 描述

攻击伤害降低<span style="color:#3aa675;font-weight:600">10</span>%。在你的回合开始时，若上回合未造成伤害，则获得[虚弱](/powers/weak_power.md)、[易伤](/powers/vulnerable_power.md)、[缩小](/powers/shrink_power.md)各<span style="color:#3aa675;font-weight:600">1</span>层。在你的回合结束时减少<span style="color:#3aa675;font-weight:600">1</span>层。

## 详细机制

- **伤害降低**：当拥有者造成攻击伤害时，攻击伤害 × <span style="color:#3aa675;font-weight:600">0.9</span>（减少 <span style="color:#3aa675;font-weight:600">10</span>%）。
  - 仅影响攻击伤害，不影响固定伤害、中毒等非攻击伤害。
- **伤害记录**：拥有者造成伤害时，标记本回合已造成伤害。
- **回合开始惩罚**：拥有者一方回合开始前：
  - 若上回合未造成伤害，对自身施加 [虚弱](/powers/weak_power.md)、[易伤](/powers/vulnerable_power.md)、[缩小](/powers/shrink_power.md) 各 <span style="color:#3aa675;font-weight:600">1</span> 层。
  - 重置伤害记录。
- **回合结束减层**：拥有者一方回合结束时，层数 -<span style="color:#3aa675;font-weight:600">1</span>。

## 小贴士

- **不打就挨罚**：上回合未造成伤害则自叠虚弱+易伤+缩小各 1 层，对依赖蓄力/多回合准备的敌人惩罚极重。

## 相关能力

- [虚弱](/powers/weak_power.md)（回合开始未造成伤害时触发）
- [易伤](/powers/vulnerable_power.md)（回合开始未造成伤害时触发）
- [缩小](/powers/shrink_power.md)（回合开始未造成伤害时触发）

## 相关卡牌

- [电脉充能](/cards/character/electric_pulse_charge.md)（自身瘫痪 <span style="color:#3aa675;font-weight:600">3</span> 回合，升级后 <span style="color:#3aa675;font-weight:600">2</span> 回合）

## 源码

- `SeerParalysisPower.cs`
