# 汲血2

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物随机池——[群星的礼赠](/relics/starter/elemental_core.md)随机能力池赋予怪物（遭遇时按概率自带，概率随探索房间数增长）

<img src="/images/powers/blood_suck_two_power.png" alt="汲血2" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 单例（不可叠加，Amount 恒为 1）
- **可见**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| 回复百分比 | 15 |

## 描述

造成伤害时回复<span style="color:#3aa675;font-weight:600">15%</span>伤害值。

## 详细机制

- **造成伤害后触发**：`AfterDamageGiven` 钩子——持有者（怪物）每次以**常规攻击**（`IsPoweredAttack`）对玩家造成伤害后，立即回复该次伤害的 <span style="color:#3aa675;font-weight:600">15%</span>。
- **格挡挡不住吸血**：回复基数是 `TotalDamage` = **格挡前总伤害**（原版 `DamageResult.cs`：`TotalDamage = BlockedDamage + UnblockedDamage`）——格挡再厚它也按格挡前数值吸血。
- **起步线 1 点**：吸血量不足 1 时不生效（单次攻击 ≥7 伤起有实际回复）。
- **只吸常规攻击**：[固定伤害](/powers/fixed_damage_power.md)、DoT 等非攻击伤害不触发。

## 小贴士

- **有效血量膨胀**：15% 吸血意味着你的净输出 = 打出伤害 × 0.85——斩杀线比血条看起来高得多，速攻或控场二选一。
- **控场优于堆防**：[眩晕](/mechanics/stun.md)、无效化攻击意图让它整回合打不出攻击 = 零吸血；纯堆[格挡](/mechanics/block.md)只是拖时间喂奶。
- **系列对比**：[汲血1](/powers/blood_suck_one_power.md)（10%，0.00015/房）/ [汲血3](/powers/blood_suck_three_power.md)（20%，0.00005/房）同机制，应对思路一致：断攻击 > 速杀 > 防御。

## 源码

- `SeerBloodSuckTwoPower.cs`（`AfterDamageGiven`，`TotalDamage × HealPercent / 100`，`healAmount >= 1` 才生效）
- 随机池配置：`SeerElementalCore.cs:83`（`0.0001/房`）
