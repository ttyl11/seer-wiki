# 邪诲

> **归属**：玩家可施加
> **施加来源**：玩家施加给敌方——[墟埪](/cards/character/xukong.md)（卡牌）、[邪魇形态](/powers/evil_form_power.md)（能力联动）、[净世新生](/powers/pure_rebirth_power.md)（能力联动）；玩家侧联动——[圣谕形态](/powers/divine_form_power.md)

<img src="/images/powers/evil_teaching_power.png" alt="邪诲" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 减益（Debuff）
- **叠加方式**: 计数（递减型）
- **可见**: 是
- **来源**: mod

### 数值参数

| 参数 | 数值 |
|---|---|
| 攻击者治疗百分比 | 20%（伤害值的 20%） |
| 减层伤害阈值百分比 | 50%（层数 × 50%） |

## 描述

持有此状态时，自身受到攻击使伤害来源恢复<span style="color:#3aa675;font-weight:600">20</span>%等于伤害的<span style="color:#d4a017;font-weight:600">体力</span>，每层重新计算一次。受到的伤害低于此状态层数的<span style="color:#3aa675;font-weight:600">50</span>%时候，减少一层。

## 详细机制

- **触发时机**：持有者受到伤害后结算（AfterDamageReceived）。
- **触发条件**：需同时满足——持有者本人受到伤害、层数 > 0、伤害来源为敌方（非自身、非同阵营）、实际伤害 > 0。固定伤害也能触发（未限定为攻击伤害）。
- **攻击者回血（核心效果）**：计算治疗量 = 本次伤害值 × <span style="color:#3aa675;font-weight:600">20</span>%，为**伤害来源**（攻击者）恢复等量体力。这是"邪"的核心——敌人打你，敌人自己反而回血，形成"越打越强"的反制压力。
- **低伤减层**：本次伤害 < 层数 × <span style="color:#3aa675;font-weight:600">50</span>% 时，层数 -<span style="color:#3aa675;font-weight:600">1</span>。即低伤攻击会削减邪诲层数，高伤攻击反而不会减层——所以用大伤害单次攻击快速击杀优于用小伤害多次消耗。
- **每层重新计算**：每当层数变化时，重置治疗百分比和减层阈值百分比为固定值（<span style="color:#3aa675;font-weight:600">20</span> 和 <span style="color:#3aa675;font-weight:600">50</span>），确保数值不会被外部修改失真。

## 获得方式

邪诲主要由以下三种途径施加：

1. **[圣谕形态](/powers/divine_form_power.md)反制**：持有圣谕形态时，受到攻击伤害，自动为**攻击者**附加 <span style="color:#3aa675;font-weight:600">1</span> 层邪诲（反直觉——敌人打你，敌人自己被上邪诲，后续攻击会触发回血反制）。
2. **[邪魇形态](/powers/evil_form_power.md)攻击**：持有邪魇形态时，造成攻击伤害，对**目标**附加 <span style="color:#3aa675;font-weight:600">1</span> 层邪诲。
3. **[净世新生](/cards/character/pure_rebirth.md)恢复触发**：进入圣谕形态后，下几次恢复生命时，为所有敌人施加邪诲（多层）。

## 相关卡牌

- [净世新生](/cards/character/pure_rebirth.md)（进入圣谕形态，恢复生命时为所有敌人施加邪诲）

## 相关能力

- [圣谕形态](/powers/divine_form_power.md)（受击时为攻击者施加邪诲）
- [邪魇形态](/powers/evil_form_power.md)（攻击时对目标施加邪诲）
- [圣诰](/powers/holy_edict_power.md)（对称设计：圣谕形态攻击时施加给对手的减益，使持有者自身疲惫）

## 源码

- `SeerEvilTeachingPower.cs`
- `SeerDivineFormPower.cs`（圣谕形态受击时施加邪诲）
- `SeerEvilFormPower.cs`（邪魇形态攻击时施加邪诲）
