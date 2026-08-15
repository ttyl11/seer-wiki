# 大威势明王

<img src="/images/powers/great_might_vidyaraja_power.png" alt="大威势明王" style="max-width:120px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 单例（2，不叠加）
- **可见**: 是

## 描述

本场战斗中，自身受到伤害时，反转对手的[<span style="color:#d4a017;font-weight:600">全属性</span>](/mechanics/all_attributes.md)提升。

## 详细机制

- **触发时机**：在拥有者受到伤害后触发。
- **触发条件**：拥有者本人受到伤害且伤害 > 0。
- **反转全属性**：对每个可攻击的敌人检测其全属性（力量、命中、防御、速度），若某项 > 0，则减少其当前层数的 <span style="color:#3aa675;font-weight:600">2</span> 倍：
  - [力量](/powers/strength_power.md)
  - [命中](/powers/accuracy_power.md)
  - [防御](/powers/defense_power.md)
  - [速度](/powers/speed_power.md)
- **仅反转正向提升**：只检测正层数的属性，负数属性不受影响。
- **叠加方式**：单例（不叠加），本场战斗持续有效。

## 相关能力

- [力量](/powers/strength_power.md)（反转目标之一）
- [命中](/powers/accuracy_power.md)（反转目标之一）
- [防御](/powers/defense_power.md)（反转目标之一）
- [速度](/powers/speed_power.md)（反转目标之一）

## 相关机制

- [全属性](/mechanics/all_attributes.md)（力量/防御/命中/速度）

## 相关卡牌

- [大威势明王](/cards/colorless/great_might_vidyaraja.md)（获得此能力）

## 源码

- `SeerGreatMightVidyarajaPower.cs`
