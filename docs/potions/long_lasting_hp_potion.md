# 💚 长效体力药水

## 基本信息

- **分类**: 恢复与续航
- **稀有度**: 普通
- **使用时机**: 战斗内
- **目标**: 自身

### 数值参数

| 参数 | 数值 |
|---|---|
| 立即恢复生命 | 3 |
| 持续回合数 | 2 |
| 每回合恢复生命 | 2 |

## 描述

立即恢复<span style="color:#3aa675;font-weight:600">3</span>点生命值。接下来<span style="color:#3aa675;font-weight:600">2</span>回合，每回合开始时恢复<span style="color:#3aa675;font-weight:600">2</span>点生命值，且免疫[固定伤害](/mechanics/fixed-damage.md)。

## 详细机制

- **立即回血**：使用时立即恢复 3 点生命。
- **持续回血**：获得 2 层[长效体力](/powers/long_lasting_hp_power.md)，每个己方回合开始时恢复 2 点生命，然后层数 -1。共持续 2 回合，累计回血 4 点。
- **免疫固定伤害**：获得 2 层[回合免疫固定伤害](/powers/turn_immune_fixed_damage_power.md)，每个己方回合结束时层数 -1。免疫的生效窗口是**己方回合开始时的固伤结算**；施加时跳过当回合衰减，因此施加后的 **3 次己方回合开始**的固伤结算均被免疫。
- **总回血量**：立即 3 + 持续 4 = 7 点生命，外加之后 3 次己方回合开始的[固定伤害](/mechanics/fixed-damage.md)免疫。
- **悬浮提示**：附带[长效体力](/powers/long_lasting_hp_power.md)和[回合免疫固定伤害](/powers/turn_immune_fixed_damage_power.md)能力提示。

## 小贴士

- **抗固定伤害 Boss**：2 回合免疫固定伤害，面对靠固定伤害输出的 Boss（如蓓丽安特④）是关键保命手段。
- **总回血可观**：3+4=7 血回血，普通药水中续航最强，适合消耗战。

## 源码

- `SeerLongLastingHpPotion.cs`
- `SeerLongLastingHpPower.cs`
- `SeerTurnImmuneFixedDamagePower.cs`
