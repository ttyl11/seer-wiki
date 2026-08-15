# 唱词：莎木斯

<img src="/images/powers/chant_shams_power.png" alt="唱词：莎木斯" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 递减（计数型）
- **可见**: 是

## 描述

每回合结束时，若对手处于[<span style="color:#d44;font-weight:600">异常状态</span>](/mechanics/abnormal-status.md)，每有一层，自身[<span style="color:#d4a017;font-weight:600">全属性</span>]+<span style="color:#3aa675;font-weight:600">1</span>。

## 详细机制

- **触发时机**：在拥有者一方回合结束时触发。
- **异常状态判定**：检查是否有任意敌人处于 [异常状态](/mechanics/abnormal-status.md)。
- **全属性提升**：若敌人有异常状态，则对自身施加四种属性各层数层：
  - [<span style="color:#d4a017;font-weight:600">力量</span>](/powers/strength_power.md)
  - [<span style="color:#d4a017;font-weight:600">防御</span>](/powers/defense_power.md)
  - [<span style="color:#d4a017;font-weight:600">命中</span>](/powers/accuracy_power.md)
  - [<span style="color:#d4a017;font-weight:600">速度</span>](/powers/speed_power.md)
- **全属性说明**：mod 专有术语，指上述四种属性的统称。
- **层数影响**：每层使全属性各 +<span style="color:#3aa675;font-weight:600">1</span>。
- **唱词系列**：mod 共有四种唱词——舍麦什、霍尔希德、拉、莎木斯。可通过"破黯穿穹"等卡牌消耗。

## 相关卡牌

- [逐日长诗](/cards/character/sun_chase_long_poem.md)
- [长叹天人命途](/cards/character/sigh_celestial_fate.md)
- [七重沙海](/cards/character/sevenfold_sand_sea.md)
- [破黯穿穹](/cards/event/break_dark_pierce_sky.md)（消耗所有唱词）

## 相关能力

- [唱词：霍尔希德](/powers/chant_khorshid_power.md)
- [唱词：舍麦什](/powers/chant_shamash_power.md)
- [唱词：拉](/powers/chant_ra_power.md)
- [力量](/powers/strength_power.md)（全属性之一，原版）
- [防御](/powers/defense_power.md)（全属性之一）
- [命中](/powers/accuracy_power.md)（全属性之一）
- [速度](/powers/speed_power.md)（全属性之一）

## 源码

- `SeerChantShamsPower.cs`
