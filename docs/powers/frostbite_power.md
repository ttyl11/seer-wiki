# 冻伤

> **归属**：玩家与怪物均可持有
> **施加来源**：玩家获得——[冰封](/powers/freeze_power.md)（能力联动）；玩家施加给敌方——[冰天花葬](/cards/character/ice_sky_flower_burial.md)（卡牌）、[一月的雪鹄](/cards/character/january_snow_owl.md)（卡牌）、[沧溟珠泪](/cards/character/ocean_pearl_tear.md)（卡牌）、[曙光普照](/cards/character/shining_light.md)（卡牌）、[白霞逐夜](/cards/character/white_dawn_chase_night.md)（卡牌）、[海洋](/orbs/ocean_orb.md)（充能球）、[好女孩](/powers/good_girl_power.md)（能力联动）、[万相乖离](/powers/universal_divergence_power.md)（能力联动）、[东海龙王](/relics/common/east_sea_dragon_king.md)（遗物）、[海天使](/relics/uncommon/sea_angel.md)（遗物）、[恋人](/relics/common/tarot_lovers.md)（遗物）；怪物施加给玩家——[阿克希亚](/monsters/elite/axe_monster.md)、[斯普林特](/monsters/normal/splinter_monster.md)

<img src="/images/powers/frostbite_power.png" alt="冻伤" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 减益（Debuff），列入[异常状态](/mechanics/abnormal-status.md)列表
- **叠加方式**: 叠加（Counter）
- **可见**: 是
- **血条预测**: 是（冰蓝色，5 点）

### 数值参数

| 参数 | 数值 |
|---|---|
| 伤害 | 5 |
| 每回合伤害 | 5 |

## 描述

在你的回合开始时受到<span style="color:#3aa675;font-weight:600">5</span>点伤害并减少1层。

## 详细机制

- **回合开始伤害**：
  - 自身回合开始时，若持有者存活，对持有者造成 5 点伤害（不可格挡的非攻击伤害）
  - 伤害结算后，若持有者仍存活，层数 -1
  - 若持有者死亡，等待 0.1~0.25 秒后再处理
- **血条预测**：
  - 返回单段预测段，5 点伤害
  - 颜色为冰蓝色
  - 从右向左生长（表示即将受到的伤害）

## 小贴士

- **层数是持续时间不是伤害倍率**：每回合开始固定造成 5 点不可格挡伤害，与层数无关——4 层冻伤 ≠ 每回合 20 点，而是"持续 4 个回合、每回合 5 点"（总计 20 点，分 4 回合结算）。与[中毒](/powers/poison_power.md)（每层都参与结算）和[流血](/powers/bleed_power.md)的叠层逻辑完全不同，叠层的意义是延长挂 Duration，不是提高单跳伤害。
- **与[烧伤](/powers/burn_power.md)同构**：同样是"固定每回合伤害 + 每回合 -1 层"的模式（烧伤 3 点/回合并附带减攻，冻伤 5 点/回合无减攻）。冻伤单跳伤害更高但没有任何附带压制，纯血线消耗。

## 相关能力

- [冰封](/powers/freeze_power.md)：冰封结束时施加冻伤

## 相关卡牌

- [沧溟珠泪](/cards/character/ocean_pearl_tear.md)
- [曙光普照](/cards/character/shining_light.md)
- [一月的雪鹄](/cards/character/january_snow_owl.md)
- [冰天花葬](/cards/character/ice_sky_flower_burial.md)

## 源码

- `SeerFrostbitePower.cs`
