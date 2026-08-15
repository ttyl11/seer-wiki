# 圣光重生

<img src="/images/powers/holy_light_spirit_revive_power.png" alt="圣光重生" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 不叠加
- **可见**: 否（隐藏能力）

## 数值参数

| 参数 | 数值 |
|---|---|
| 复活生命百分比 | 100 |
| 增伤百分比 | 50 |

## 描述

首次死亡后满血复活，复活后获得永久增伤 <span style="color:#3aa675;font-weight:600">50</span>%。整局游戏限一次。

## 详细机制

- **满血复活**：首次死亡时，生命值恢复到满血（<span style="color:#3aa675;font-weight:600">100</span>% 最大生命）。
- **复活期间无敌**：复活过程中免疫所有伤害和异常状态，不会被攻击。
- **永久增伤**：复活后获得 <span style="color:#3aa675;font-weight:600">50</span>% [增伤](/powers/permanent_damage_boost_power.md)，此后每场战斗开始时自动获得此增伤。整局游戏持续。
- **整局限一次**：整局游戏只能触发一次复活。复活后此能力消失，再次死亡会正常死亡。
- **触发方式**：[圣光灵神](/relics/legendary/holy_light_spirit.md)遗物的②效果——战斗开始时，如果整局游戏还未复活过，自动获得此隐藏能力。

## 相关遗物

- [圣光灵神](/relics/legendary/holy_light_spirit.md)

## 源码

- `SeerHolyLightSpiritRevivePower.cs`
