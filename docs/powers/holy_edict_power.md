# 圣诰

<img src="/images/powers/holy_edict_power.png" alt="圣诰" style="max-width:120px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 减益（Debuff）
- **叠加方式**: 计数（递减型）
- **可见**: 是
- **来源**: mod

### 数值参数

| 参数 | 数值 |
|---|---|
| 疲惫概率 | 60% |
| 疲惫回合数 | 2 |
| 减层伤害阈值百分比 | 50%（层数 × 50%） |

## 描述

持有此状态时，自身受到攻击<span style="color:#3aa675;font-weight:600">60</span>%概率[<span style="color:#9b59b6;font-weight:600">疲惫</span>](/powers/fatigue_power.md)<span style="color:#3aa675;font-weight:600">2</span>回合，每层重新计算一次。受到的伤害低于此状态层数的<span style="color:#3aa675;font-weight:600">50</span>%时候，减少一层。

## 详细机制

- **触发时机**：持有者受到伤害后结算（AfterDamageReceived）。
- **触发条件**：需同时满足——持有者本人受到伤害、层数 > 0、伤害为攻击伤害（[固定伤害](/mechanics/fixed-damage.md)不触发）。
- **疲惫施加（核心效果）**：判定 <span style="color:#3aa675;font-weight:600">60</span>% 概率，成功则对**持有者自身**施加 <span style="color:#3aa675;font-weight:600">2</span> 回合[疲惫](/powers/fatigue_power.md)。即被上圣诰的人被打时会自己陷入疲惫，削弱其后续输出。使用战斗随机源确保多端同步。
- **低伤减层**：本次伤害 < 层数 × <span style="color:#3aa675;font-weight:600">50</span>% 时，层数 -<span style="color:#3aa675;font-weight:600">1</span>。低伤攻击会削减圣诰层数，高伤攻击不会减层——与邪诲对称。
- **每层重新计算**：每当层数变化时，重置疲惫概率、疲惫回合数和减层阈值百分比为固定值（<span style="color:#3aa675;font-weight:600">60</span>、<span style="color:#3aa675;font-weight:600">2</span>、<span style="color:#3aa675;font-weight:600">50</span>），确保数值不会被外部修改失真。

## 获得方式

圣诰主要由以下三种途径施加：

1. **[圣谕形态](/powers/divine_form_power.md)攻击**：持有圣谕形态时，造成攻击伤害，对**目标**附加 <span style="color:#3aa675;font-weight:600">1</span> 层圣诰。
2. **[邪魇形态](/powers/evil_form_power.md)反制**：持有邪魇形态时，受到攻击伤害，自动为**攻击者**附加 <span style="color:#3aa675;font-weight:600">1</span> 层圣诰（与圣谕形态的邪诲反制对称——敌人打你，敌人被上圣诰，后续被打时疲惫）。
3. **[神明送葬](/cards/character/god_funeral.md)受击触发**：进入邪魇形态后，下几次受到伤害时，为所有敌人施加圣诰（多层）。

## 相关卡牌

- [神明送葬](/cards/character/god_funeral.md)（进入邪魇形态，受击时为所有敌人施加圣诰）

## 相关能力

- [圣谕形态](/powers/divine_form_power.md)（攻击时对目标施加圣诰）
- [邪魇形态](/powers/evil_form_power.md)（受击时为攻击者施加圣诰）
- [邪诲](/powers/evil_teaching_power.md)（对称设计：圣谕形态受击时施加给攻击者的减益，使攻击者回血反制）
- [疲惫](/powers/fatigue_power.md)（圣诰触发的减益）

## 源码

- `SeerHolyEdictPower.cs`
- `SeerDivineFormPower.cs`（圣谕形态攻击时施加圣诰）
- `SeerEvilFormPower.cs`（邪魇形态受击时施加圣诰）
