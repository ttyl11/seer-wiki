# 唱词：霍尔希德

<img src="/images/powers/chant_khorshid_power.png" alt="唱词：霍尔希德" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 递减（计数型）
- **可见**: 是

## 描述

自身造成伤害后，若自身不为在场HP最高的单位，则恢复自身所有[<span style="color:#d4a017;font-weight:600">PP牌</span>](/mechanics/pp-system.md)的[<span style="color:#d4a017;font-weight:600">PP值</span>](/mechanics/pp-system.md)，每有一层恢复<span style="color:#3aa675;font-weight:600">1</span>点。

## 详细机制

- **触发条件**：当拥有者造成攻击伤害且层数大于 0 时触发。
- **HP 判定**：判断自身是否为场上 HP 最高的单位。若已是最高 HP，则不触发效果。
- **PP 恢复**：遍历手牌、抽牌堆、弃牌堆中的所有 PP 牌，若当前 PP 小于最大 PP，则恢复 PP。
- **层数影响**：每层恢复 <span style="color:#3aa675;font-weight:600">1</span> 点 PP。
- **不触发条件**：拥有者死亡时不触发。
- **唱词系列**：mod 共有四种唱词——舍麦什、霍尔希德、拉、莎木斯。可通过"破黯穿穹"等卡牌消耗。

## 相关卡牌

- [灼目天星](/cards/character/blinding_heaven_star.md)（授予唱词：霍尔希德）
- [逐日长诗](/cards/character/sun_chase_long_poem.md)
- [长叹天人命途](/cards/character/sigh_celestial_fate.md)
- [七重沙海](/cards/character/sevenfold_sand_sea.md)
- [破黯穿穹](/cards/event/break_dark_pierce_sky.md)（消耗所有唱词）

## 相关能力

- [唱词：舍麦什](/powers/chant_shamash_power.md)
- [唱词：拉](/powers/chant_ra_power.md)
- [唱词：莎木斯](/powers/chant_shams_power.md)

## 源码

- `SeerChantKhorshidPower.cs`
