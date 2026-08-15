# 🟢 绿火药水

## 基本信息

- **分类**: 属性与火焰
- **稀有度**: 普通
- **使用时机**: 战斗内
- **目标**: 自身

### 数值参数

| 参数 | 数值 |
|---|---|
| 全属性增量 | 1 |
| 触发间隔回合 | 3 |

## 描述

获得全属性+<span style="color:#3aa675;font-weight:600">1</span>。每隔<span style="color:#3aa675;font-weight:600">3</span>回合，再次获得全属性+<span style="color:#3aa675;font-weight:600">1</span>。

## 详细机制

- **即时全属性**：使用时立即对自身施加[力量](/powers/strength_power.md)、[命中](/powers/accuracy_power.md)、[防御](/powers/defense_power.md)、[速度](/powers/speed_power.md)各 +1（即[全属性](/mechanics/all_attributes.md) +1）。
- **施加绿火 Power**：额外施加 1 层[绿火](/powers/green_fire_power.md)。
- **周期触发**：绿火 Power 每隔 3 回合再次触发全属性 +1，整场战斗持续成长。
- **持续整场**：绿火 Power 不会随回合自然消退，长战斗中全属性越叠越高。
- **悬浮提示**：附带力量/命中/防御/速度/绿火 5 个能力提示。

## 小贴士

- **长战斗收益爆炸**：每 3 回合全属性 +1，10 回合后约 +4 全属性，适合 Boss 战等长战斗。
- **四火核心**：绿火是四火系列中唯一直接提升全属性的，搭配[双极](twin_potion.md)翻倍可瞬间放大收益。

## 源码

- `SeerGreenFirePotion.cs`
