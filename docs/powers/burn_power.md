# 烧伤

> **归属**：玩家与怪物均可持有
> **施加来源**：玩家获得——[八月的流火](/cards/character/august_flame.md)（卡牌）、[天灵净野](/cards/character/heaven_spirit_pure_field.md)（卡牌）、[焚烬](/powers/ash_power.md)（能力联动）、[易燃](/powers/flammable_power.md)（能力联动）、[炎龙圣帝](/relics/uncommon/flame_dragon_emperor.md)（遗物）；玩家施加给敌方——[醉酒燃烧](/cards/character/drunken_burn.md)（卡牌）、[秘纹护体](/cards/character/secret_rune.md)（卡牌）、[曙光普照](/cards/character/shining_light.md)（卡牌）、[火山](/orbs/volcano_orb.md)（充能球）、[🔥 焚天药水](/potions/burn_sky_potion.md)（药水）、[荒灰天](/powers/desolate_ash_sky_power.md)（能力联动）、[好女孩](/powers/good_girl_power.md)（能力联动）、[凤之涅槃](/powers/phoenix_nirvana_power.md)（能力联动）、[万相乖离](/powers/universal_divergence_power.md)（能力联动）、[白色龙鳞](/powers/white_dragon_scale_power.md)（能力联动）、[阿波罗](/relics/common/apollo.md)（遗物）、[炎龙圣帝](/relics/uncommon/flame_dragon_emperor.md)（遗物）、[枫眠](/relics/rare/maple_sleep.md)（遗物）、[恋人](/relics/common/tarot_lovers.md)（遗物）、[太阳](/relics/common/tarot_sun.md)（遗物）；玩家侧联动——[鬼火](/powers/ghost_fire_power.md)；怪物施加给玩家——[安妮](/monsters/normal/annie_monster.md)、[吉尔](/monsters/normal/jill_monster.md)、[坤格](/monsters/normal/kunge_monster.md)；怪物侧联动——[斯嘟尔](/monsters/normal/siduer_monster.md)

<img src="/images/powers/burn_power.png" alt="烧伤" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 减益（Debuff），列入[异常状态](/mechanics/abnormal-status.md)列表
- **叠加方式**: 叠加（Counter）
- **可见**: 是
- **血条预测**: 是（橙红色，3 点）

### 数值参数

| 参数 | 数值 |
|---|---|
| 每回合伤害 | 3 |
| 攻击伤害减少 | 1 |

## 描述

在你的回合开始时受到<span style="color:#3aa675;font-weight:600">3</span>点伤害。攻击伤害降低<span style="color:#3aa675;font-weight:600">1</span>点。然后减少1层。

## 详细机制

- **回合开始伤害**：
  - 自身回合开始时，若拥有者存活，对其造成 3 点伤害
  - 伤害结算后，若拥有者仍存活，层数 -1
  - 若拥有者死亡，等待 0.1~0.25 秒后再处理
- **攻击伤害降低**：
  - 仅减少拥有者**造成的攻击伤害**，非攻击伤害不受影响
  - 攻击伤害 -1 点（绝对值减法，最低 0）。注意：减攻量**不随层数叠加**——无论 1 层还是 5 层，造成的攻击伤害都固定 -1；层数的意义是延长持续时间（每回合 -1 层）
  - 注意：是绝对值而非百分比，对低伤害攻击压制力强（如 3 点攻击降为 2 点），对高伤害攻击影响小
- **血条预测**：
  - 血条上会显示 3 点伤害的预测段（橙红色，从右向左生长，表示即将受到的伤害）
- **伤害性质**：回合开始的 3 点伤害为不可格挡的非攻击伤害（绕过[格挡](/mechanics/block.md)）

## 小贴士

- **双向压制**：回合开始受 3 点不可格挡伤害 + 攻击伤害降 1 点（绝对值）。对低攻击高频敌人压制力强。
- **绝对值减伤**：攻击伤害降 1 点是绝对值非百分比，3 点攻击降为 2 点（-33%），10 点攻击降为 9 点（-10%）。

## 相关卡牌

- [八月的流火](/cards/character/august_flame.md)（自身烧伤 5/7 回合）
- [醉酒燃烧](/cards/character/drunken_burn.md)
- [曙光普照](/cards/character/shining_light.md)
- [秘纹护体](/cards/character/secret_rune.md)
- [天灵净野](/cards/character/heaven_spirit_pure_field.md)

## 相关遗物（6 个）

- [塔罗·太阳](/relics/common/tarot_sun.md)
- [塔罗·恋人](/relics/common/tarot_lovers.md)
- [枫眠](/relics/rare/maple_sleep.md)
- [无极有机](/relics/epic/infinite_organic.md)
- [焰龙皇](/relics/uncommon/flame_dragon_emperor.md)
- [阿波罗](/relics/common/apollo.md)

## 源码

- `SeerBurnPower.cs`
