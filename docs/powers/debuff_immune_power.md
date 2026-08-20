# 异常免疫

<img src="/images/powers/debuff_immune_power.png" alt="异常免疫" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 递减（计数型）
- **可见**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| 回合数 | 1 |
| 层数 | 1 |

> 注：实际施加时由卡牌指定回合数（如 [灼目天星](/cards/character/blinding_heaven_star.md) 施加 <span style="color:#3aa675;font-weight:600">2</span> 回合）。
> **归属**：玩家可施加
> **施加来源**：玩家获得——[灼目天星](/cards/character/blinding_heaven_star.md)（卡牌）、[魔·黑天暗罚](/cards/character/magic_black_sky_punishment.md)（卡牌）、[十玄释](/cards/character/shi_xuan_shi.md)（卡牌）、[瀚宇星皇](/relics/legendary/cosmic_emperor.md)（遗物）、[缔笙](/relics/epic/di_sheng.md)（遗物）、[群星的礼赠](/relics/starter/elemental_core.md)（遗物）、[启灵元神](/relics/legendary/enlightened_spirit_god.md)（遗物）、[至序圣华](/relics/legendary/order_holy_hua.md)（遗物）、[弑序神罗](/relics/legendary/order_killing_god_luo.md)（遗物）、[混元天尊](/relics/legendary/primordial_tianzun.md)（遗物）

## 描述

免疫[<span style="color:#d44;font-weight:600">异常状态</span>](/mechanics/abnormal-status.md)<span style="color:#3aa675;font-weight:600">层数</span>回合。在对方回合结束时减少<span style="color:#3aa675;font-weight:600">1</span>层。

## 详细机制

- **免疫判定**：通过拦截受到的状态施加来免疫。当层数大于 0 且自身即将受到异常状态时，将施加量改为 <span style="color:#3aa675;font-weight:600">0</span>，即完全免疫。
- **不免疫自身**：不会免疫异常免疫和异常免疫·反弹自身，避免递归。
- **不可见能力不免疫**：仅对可见的能力生效。
- **对方回合结束递减**：在**对方**回合结束时层数 -<span style="color:#3aa675;font-weight:600">1</span>——免疫的生效窗口是敌方回合（敌方施加异常的时机），N 层恰好覆盖 N 个敌方回合，施加当回合不损耗。
- **与异常免疫·反弹的区别**：本能力仅免疫不反弹；异常免疫·反弹在免疫的同时将异常状态反弹给所有敌人。

## 相关卡牌

- [灼目天星](/cards/character/blinding_heaven_star.md)（施加 <span style="color:#3aa675;font-weight:600">2</span> 回合异常免疫，升级后 <span style="color:#3aa675;font-weight:600">3</span> 回合）
- [阑珊百转](/cards/character/waning_turns.md)
- [染夜天妖](/cards/character/night_demon.md)
- [魔·黑天暗罚](/cards/character/magic_black_sky_punishment.md)

## 相关能力

- [异常免疫·反弹](/powers/debuff_immune_reflect_power.md)（带反弹的版本）

## 源码

- `SeerDebuffImmunePower.cs`
