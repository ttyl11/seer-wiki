# 邪魇形态

<img src="/images/powers/evil_form_power.png" alt="邪魇形态" style="max-width:120px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 按回合覆盖
- **可见**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| 伤害减免百分比（DamageReduction） | 25 |
| 伤害减免百分比（DamageReductionPercent） | 25 |

## 描述

免疫[<span style="color:#d4a017;font-weight:600">属性下降</span>](/mechanics/all_attributes.md)，受到的伤害减少<span style="color:#3aa675;font-weight:600">25</span>%。攻击造成伤害时对目标施加<span style="color:#3aa675;font-weight:600">1</span>层[<span style="color:#d4a017;font-weight:600">邪诲</span>](/powers/evil_teaching_power.md)。受到敌人伤害时对伤害来源施加<span style="color:#3aa675;font-weight:600">1</span>层[<span style="color:#9b59b6;font-weight:600">圣诰</span>](/powers/holy_edict_power.md)。

## 详细机制

- **形态系统**：与[圣谕形态](/powers/divine_form_power.md)互斥。切换回圣谕形态时移除自身并施加圣谕形态和先制。
- **属性下降免疫**：通过拦截受到的状态施加，当自身即将受到力量、敏捷、速度、防御、命中的负层数施加时，将施加量改为 0。
- **伤害减免**：仅减少拥有者受到的来自敌方的伤害，减免 25%。
- **攻击反击（邪诲）**：当自身造成攻击伤害、目标非自身且伤害 > 0 时，对目标施加 1 层[邪诲](/powers/evil_teaching_power.md)。
- **受击反击（圣诰）**：当自身受到来自敌方的伤害且伤害 > 0 时，对攻击者施加 1 层[圣诰](/powers/holy_edict_power.md)。

## 相关能力

- [圣诰](/powers/holy_edict_power.md)（受击时对来源施加）
- [邪诲](/powers/evil_teaching_power.md)（攻击时对目标施加）
- [圣谕形态](/powers/divine_form_power.md)（互斥形态）

## 相关卡牌

- [神明送葬](/cards/character/god_funeral.md)（进入邪魇形态）

## 源码

- `SeerEvilFormPower.cs`
