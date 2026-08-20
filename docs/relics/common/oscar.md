# 奥斯卡

<img src="/images/relics/oscar.png" alt="奥斯卡" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 普通

### 数值参数

| 参数 | 数值 |
|---|---|
| 回复百分比 | 20（%） |

## 描述

自身打出<span style="color:#d4a017;font-weight:600">[暴击](/powers/critical_strike_power.md)</span>时，回复造成伤害<span style="color:#3aa675;font-weight:600">20</span>%的生命。

- **触发条件**：仅响应拥有者自己造成的伤害，且当前攻击须判定为暴击；总伤害（含被格挡吸收的部分）为 0 才不触发。

## 风味文字

<span style="color:#d44;font-weight:600">奥斯卡。</span>

## 小贴士

- **暴击吸血 20%**：自己打出暴击时，回复造成伤害的 20% 生命（向下取整）。暴击伤害越高回血越多，适合暴击流持续作战。
- **打在格挡上也回血**：吸血基数是**总伤害**（含被敌人格挡吸收的部分）——暴击 20 点打在敌人 20 格挡上，照样回 4 血。面对爱叠格挡的敌人也不损失吸血收益。只有伤害被完全压成 0（如[无实体](/powers/intangible_power.md)期间）才没得吸。
- **只对暴击生效**：必须当前攻击判定为暴击才回血，普通攻击不触发。[群星的礼赠](/relics/starter/elemental_core.md)开局会给你兜底挂上[暴击](/powers/critical_strike_power.md)（基础 12.5% 概率，全场敌我都有），等于人人自带吸血资格；想高频吸血就走[锁定一](/powers/lock_one_power.md)（暴击率提档到 50%）或[锁定二](/powers/lock_two_power.md)（必暴）路线。多段攻击的每一段都独立判定暴击——暴击的那一段单独触发吸血，单段高伤的暴击比多段小额暴击吸血更多。
- **多人只吸自己的**：只响应拥有者自己造成的暴击伤害——队友的暴击不会给你回血，你也不能替队友吸。
- **性价比**：普通稀有度合理——暴击吸血是优质续航，强度看暴击率。

## 源码

- `SeerOscar.cs`
