# 唱词：舍麦什

> **归属**：玩家可施加
> **施加来源**：玩家获得——[长叹天人命途](/cards/character/sigh_celestial_fate.md)（卡牌）、[梅赫维特](/relics/legendary/mehrwert.md)（遗物）

<img src="/images/powers/chant_shamash_power.png" alt="唱词：舍麦什" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 递减（计数型）
- **可见**: 是

## 描述

自身得到任意[<span style="color:#d4a017;font-weight:600">能力上升</span>]时，每有一层，恢复自身<span style="color:#3aa675;font-weight:600">1</span>点生命。

## 详细机制

- **触发条件**：当自身获得任意增益（Buff）且层数增加时触发。
- **不触发自身**：自身施加自身不会触发，避免递归。
- **生命恢复**：恢复量等于本能力的层数。
- **能力上升判定**：仅当施加到自身的能力为增益时触发，减益不触发。
- **层数影响**：每层恢复 <span style="color:#3aa675;font-weight:600">1</span> 点生命。
- **唱词系列**：mod 共有四种唱词——舍麦什、霍尔希德、拉、莎木斯。可通过"破黯穿穹"等卡牌消耗。

## 相关卡牌

- [逐日长诗](/cards/character/sun_chase_long_poem.md)
- [长叹天人命途](/cards/character/sigh_celestial_fate.md)
- [七重沙海](/cards/character/sevenfold_sand_sea.md)
- [破黯穿穹](/cards/event/break_dark_pierce_sky.md)（消耗所有唱词）

## 相关能力

- [唱词：霍尔希德](/powers/chant_khorshid_power.md)
- [唱词：拉](/powers/chant_ra_power.md)
- [唱词：莎木斯](/powers/chant_shams_power.md)

## 源码

- `SeerChantShamashPower.cs`
