# 要点探寻I

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物随机池——[群星的礼赠](/relics/starter/elemental_core.md)随机能力池赋予怪物（遭遇时按概率自带，概率随探索房间数增长）

<img src="/images/powers/key_one_power.png" alt="要点探寻I" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 单例（不可叠加，Amount 恒为 1）
- **可见**: 是

## 描述

攻击<span style="color:#3aa675;font-weight:600">15%</span>几率伤害翻倍。

## 详细机制

- **攻击前判定**：持有者（怪物）每次发起攻击前（`BeforeAttack`），<span style="color:#3aa675;font-weight:600">15%</span> 概率标记本次为"要害"——命中时伤害 <span style="color:#3aa675;font-weight:600">×2</span>（`ModifyDamageMultiplicative` 乘区）。
- **多段攻击共享判定**：`BeforeAttack` 在整个攻击命令前只掷**一次**骰（原版 `AttackCommand.cs:536`：先 `BeforeAttack` 再进多段循环）——"攻击 ×3"的三段要么**全部** ×2、要么**全部**正常。期望角度等于全程 +15% 输出。
- **只作用于常规攻击**（`IsPoweredAttack`）——它的固伤类效果不参与翻倍。
- **掷骰用 `Rng.CombatTargets`**（多人同步安全的 RNG 通道）。
- **与玩家暴击体系独立**：要害是怪物专属标记，与[暴击](/powers/critical_strike_power.md)（玩家侧能力）互不相通。

## 小贴士

- **期望伤害换算**：15% ×2 的期望增幅 = +15% 输出——评估它的攻击意图时按"期望 ×1.15"留[格挡](/mechanics/block.md)，但要有"单次翻倍"的应急预案（血线别贴地）。
- **长战斗小额放血**：单次看是运气，10 回合的战斗里它总会暴你两三次——别因为"前几刀没暴"就压缩防御预算。

## 源码

- `SeerKeyOnePower.cs`（`BeforeAttack` 掷骰 `<= 0.15`，命中则 `ModifyDamageMultiplicative` 返回 `2`）
- 多段共享判定依据：原版 `AttackCommand.cs:536-538`（`BeforeAttack` → 多段 for 循环）
- 随机池配置：`SeerElementalCore.cs:99`（`0.000025/房`）
