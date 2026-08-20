# 唱词：拉

> **归属**：玩家可施加
> **施加来源**：玩家获得——[七重沙海](/cards/character/sevenfold_sand_sea.md)（卡牌）、[梅赫维特](/relics/legendary/mehrwert.md)（遗物）

<img src="/images/powers/chant_ra_power.png" alt="唱词：拉" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 递减（计数型）
- **可见**: 是

## 描述

自身生命减少后，每有一层，令对手[<span style="color:#d4a017;font-weight:600">先制</span>](/powers/first_strike_power.md)-<span style="color:#3aa675;font-weight:600">1</span>。

## 详细机制

- **触发条件**：当自身生命减少且层数大于 0 时触发。
- **目标**：对所有可命中的敌人施加效果。
- **效果**：对每个敌人减少先制，减少量等于本能力的层数。
- **多人同步**：多端同步依赖能力系统的状态镜像。
- **层数影响**：每层令对手先制 -<span style="color:#3aa675;font-weight:600">1</span>。
- **唱词系列**：mod 共有四种唱词——舍麦什、霍尔希德、拉、莎木斯。可通过"破黯穿穹"等卡牌消耗。

## 相关卡牌

- [逐日长诗](/cards/character/sun_chase_long_poem.md)
- [长叹天人命途](/cards/character/sigh_celestial_fate.md)
- [七重沙海](/cards/character/sevenfold_sand_sea.md)
- [破黯穿穹](/cards/event/break_dark_pierce_sky.md)（消耗所有唱词）

## 相关能力

- [先制](/powers/first_strike_power.md)（本能力施加的减益）
- [唱词：霍尔希德](/powers/chant_khorshid_power.md)
- [唱词：舍麦什](/powers/chant_shamash_power.md)
- [唱词：莎木斯](/powers/chant_shams_power.md)

## 源码

- `SeerChantRaPower.cs`
