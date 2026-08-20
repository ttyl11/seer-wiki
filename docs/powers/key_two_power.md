# 要点探寻II

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物随机池——[群星的礼赠](/relics/starter/elemental_core.md)随机能力池赋予怪物（遭遇时按概率自带，概率随探索房间数增长）

<img src="/images/powers/key_two_power.png" alt="要点探寻II" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 单例（不可叠加，Amount 恒为 1）
- **可见**: 是

## 描述

攻击<span style="color:#3aa675;font-weight:600">30%</span>几率伤害翻倍。

## 详细机制

- **攻击前判定**：持有者（怪物）每次发起攻击前（`BeforeAttack`），<span style="color:#3aa675;font-weight:600">30%</span> 概率标记本次为"要害"——命中时伤害 <span style="color:#3aa675;font-weight:600">×2</span>（`ModifyDamageMultiplicative` 乘区）。
- **多段攻击共享判定**：`BeforeAttack` 在整个攻击命令前只掷**一次**骰（原版 `AttackCommand.cs:536`：先 `BeforeAttack` 再进多段循环）——"攻击 ×3"的三段要么**全部** ×2、要么**全部**正常，不是每段独立掷骰。期望增幅仍为 +30%，但方差集中在整次攻击层面。
- **只作用于常规攻击**（`IsPoweredAttack`）——[固定伤害](/powers/fixed_damage_power.md)、DoT 不参与掷骰。
- **掷骰用 `Rng.CombatTargets`**（多人同步安全的 RNG 通道）。

## 小贴士

- **三成概率不是小数**：每三次攻击约一次翻倍，[格挡](/mechanics/block.md)预算按"意图 ×2"的最坏情况留，宁可多挡。
- **多段攻击是"全有或全无"**：×3 每段 4 伤的意图触发要害时三段全部 ×2（每段 8、总伤 12→24）——面对多段攻击意图时，一次掷骰成功就吃满双倍总伤。
- **与[汲血](/powers/blood_suck_one_power.md)/[进化](/powers/evolve_power.md)组合恶化**：翻倍攻击同时放大它的吸血量与成长层数（都按 `TotalDamage` 结算）——这种组合怪的攻击必须优先控死。

## 源码

- `SeerKeyTwoPower.cs`（`BeforeAttack` 掷骰 `<= 0.3`，命中则 `ModifyDamageMultiplicative` 返回 `2`）
- 多段共享判定依据：原版 `AttackCommand.cs:536-538`（`BeforeAttack` → 多段 for 循环）
- 随机池配置：`SeerElementalCore.cs:100`（`0.000015/房`）
