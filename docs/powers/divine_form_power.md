# 圣谕形态

> **归属**：玩家可施加
> **施加来源**：玩家获得——[净世新生](/cards/character/pure_rebirth.md)（卡牌）、[邪魇形态](/powers/evil_form_power.md)（能力联动）、[圣谕邪魇](/relics/legendary/holy_edict_evil_nightmare.md)（遗物）

<img src="/images/powers/divine_form_power.png" alt="圣谕形态" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 单例（不叠加）
- **可见**: 是
- **来源**: mod

### 数值参数

无

## 描述

免疫[<span style="color:#d4a017;font-weight:600">固定伤害</span>](/powers/fixed_damage_power.md)和[<span style="color:#d44;font-weight:600">异常状态</span>](/mechanics/abnormal-status.md)。造成攻击伤害时，为对手附加<span style="color:#3aa675;font-weight:600">1</span>层[<span style="color:#9b59b6;font-weight:600">圣诰</span>](/powers/holy_edict_power.md)。受到攻击伤害时，为攻击者附加<span style="color:#3aa675;font-weight:600">1</span>层[<span style="color:#9b59b6;font-weight:600">邪诲</span>](/powers/evil_teaching_power.md)。

## 详细机制

- **免疫固定伤害**：通过拦截受到的状态施加，当自身即将受到固定伤害且施加量为正时，将施加量改为 0，完全免疫。
- **免疫异常状态**：通过拦截受到的状态施加，当自身即将受到任何异常状态且施加量为正时，将施加量改为 0，完全免疫。
- **造成伤害时附加圣诰**：当自身造成攻击伤害、目标非自身且伤害 > 0 时，为目标附加 <span style="color:#3aa675;font-weight:600">1</span> 层 [圣诰](/powers/holy_edict_power.md)。
- **受到伤害时附加邪诲**：当自身受到来自敌方的伤害且伤害 > 0 时，为攻击者附加 <span style="color:#3aa675;font-weight:600">1</span> 层 [邪诲](/powers/evil_teaching_power.md)。
- **形态切换**：若已有圣谕形态时打出 [神明送葬](/cards/character/god_funeral.md)，会移除圣谕形态，转而施加 [邪魇形态](/powers/evil_form_power.md) 和 <span style="color:#3aa675;font-weight:600">1</span> 层 [先制](/powers/first_strike_power.md)。
- **不叠加**：多次施加不会累加，仅保持单例存在。

## 相关卡牌

- [净世新生](/cards/character/pure_rebirth.md)（进入圣谕形态，治疗时施加邪诲）
- [神明送葬](/cards/character/god_funeral.md)（从圣谕形态切换为邪魇形态，受伤时施加圣诰）

## 相关能力

- [邪魇形态](/powers/evil_form_power.md)（对立形态，可互相切换）
- [圣诰](/powers/holy_edict_power.md)（造成伤害时附加给对手）
- [邪诲](/powers/evil_teaching_power.md)（受到伤害时附加给攻击者）
- [固定伤害](/powers/fixed_damage_power.md)（被圣谕形态免疫）
- [先制](/powers/first_strike_power.md)（切换为邪魇形态时获得）

## 源码

- `SeerDivineFormPower.cs`
