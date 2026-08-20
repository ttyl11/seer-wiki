# 汲血1

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物随机池——[群星的礼赠](/relics/starter/elemental_core.md)随机能力池赋予怪物（遭遇时按概率自带，概率随探索房间数增长）

<img src="/images/powers/blood_suck_one_power.png" alt="汲血1" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 单例（不可叠加，Amount 恒为 1）
- **可见**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| 回复百分比 | 10 |

## 描述

造成伤害时回复<span style="color:#3aa675;font-weight:600">10%</span>伤害值。

## 详细机制

- **造成伤害后触发**：`AfterDamageGiven` 钩子——持有者（怪物）每次以**常规攻击**（`IsPoweredAttack`）对玩家造成伤害后，立即回复该次伤害的 <span style="color:#3aa675;font-weight:600">10%</span>。
- **格挡挡不住吸血**：回复基数是 `TotalDamage` = **格挡前总伤害**（原版 `DamageResult.cs`：`TotalDamage = BlockedDamage + UnblockedDamage`）——你格挡挡得再厚，它照样按格挡前的数值吸血。
- **起步线 1 点**：吸血量不足 1 时不生效（单次攻击 ≥10 伤才有实际回复）。
- **只吸常规攻击**：[固定伤害](/powers/fixed_damage_power.md)、DoT 等非攻击伤害不触发吸血。

## 小贴士

- **别指望格挡饿死它**：吸血按格挡前伤害结算，纯防御打法只会让它每回合稳定回血——想断它的奶，得让它**打不出攻击**：[眩晕](/mechanics/stun.md)（跳过行动）、无效化攻击意图（如[钢傀守卫](/powers/steel_puppet_guard_power.md)类效果）才是真解。
- **收益量化**：单次 20 伤的攻击意图 = 它回 2 血；配合它自带的力量成长，实际是把"挨打"变成"互奶"——评估战斗时长时把吸血算进它的有效血量。
- **系列对比**：[汲血2](/powers/blood_suck_two_power.md)（15%，0.0001/房）/ [汲血3](/powers/blood_suck_three_power.md)（20%，0.00005/房）同机制递增，III 级时它每打你 20 就回 4，久战必败，必须速攻。

## 源码

- `SeerBloodSuckOnePower.cs`（`AfterDamageGiven`，`TotalDamage × HealPercent / 100`，`healAmount >= 1` 才生效）
- 随机池配置：`SeerElementalCore.cs:82`（`0.00015/房`）
