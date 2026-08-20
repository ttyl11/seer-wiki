# 焚烬

> **归属**：玩家可施加
> **施加来源**：玩家施加给敌方——[灼目天星](/cards/character/blinding_heaven_star.md)（卡牌）、[曙光普照](/cards/character/shining_light.md)（卡牌）、[逐日长诗](/cards/character/sun_chase_long_poem.md)（卡牌）、[火山](/orbs/volcano_orb.md)（充能球）、[荒灰天](/powers/desolate_ash_sky_power.md)（能力联动）、[火种永存](/powers/eternal_flame_power.md)（能力联动）、[好女孩](/powers/good_girl_power.md)（能力联动）、[万相乖离](/powers/universal_divergence_power.md)（能力联动）、[太阳](/relics/common/tarot_sun.md)（遗物）；玩家侧联动——[鬼火](/powers/ghost_fire_power.md)

<img src="/images/powers/ash_power.png" alt="焚烬" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 减益（Debuff）
- **叠加方式**: 递减（刷新型）
- **可见**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| 减伤百分比 | 20 |
| 烧伤层数 | 2 |

## 描述

攻击伤害降低<span style="color:#3aa675;font-weight:600">20</span>%。在你的回合结束时获得<span style="color:#3aa675;font-weight:600">2</span>层<span style="color:#d44;font-weight:600">烧伤</span>并减少1层。

## 详细机制

- **伤害减免**：仅减少拥有者造成的攻击伤害，非攻击伤害不受影响。自身造成伤害降低 20%（乘算）。
- **回合结束效果**：
  - 若层数大于 0，对自身施加 2 层[<span style="color:#d44;font-weight:600">烧伤</span>](/powers/burn_power.md)
  - 然后层数 -1
- **连锁效应**：焚烬每回合会生成烧伤，烧伤又会在自身回合开始时造成伤害，形成持续伤害链。

## 小贴士

- **越拖越痛**：每回合自叠 2 层烧伤，烧伤每回合造成 3 点不可格挡伤害。焚烬持续多回合后烧伤累积会很痛。

## 相关能力

- [烧伤](/powers/burn_power.md)（回合结束时由焚烬施加）

## 相关卡牌

- [灼目天星](/cards/character/blinding_heaven_star.md)（对所有敌人焚烬 1 回合）
- [逐日长诗](/cards/character/sun_chase_long_poem.md)
- [曙光普照](/cards/character/shining_light.md)

## 相关遗物

- [塔罗·太阳](/relics/common/tarot_sun.md)
- [阿波罗](/relics/common/apollo.md)

## 源码

- `SeerAshPower.cs`
