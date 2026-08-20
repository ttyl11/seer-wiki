# 精神同步

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物自带——[提亚斯](/monsters/elite/tias_monster.md)「精神同步」第 3 次及之后每次使用时施加（第 1 次挂[锁定I](/powers/lock_one_power.md)，第 2 次升级[锁定II](/powers/lock_two_power.md)）

<img src="/images/powers/next_attack_double_damage_power.png" alt="精神同步" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 单例（不可叠加）
- **可见**: 是

## 描述

下次攻击伤害翻倍。

## 详细机制

- **独立乘区 ×2**：拥有者造成攻击伤害时，伤害 ×2。独立乘法修正——与[暴击](/powers/critical_strike_power.md)判定、[锁定II](/powers/lock_two_power.md)的 ×1.5 等其它乘区**链式相乘**：提亚斯后期（100% 暴击）一刀的实际倍率是 ×1.5 ×2 = **×3**。
- **只强化下一次攻击**：攻击结束后整体移除。多段攻击（如 4×2）算一次攻击——**每一段都享受 ×2**。
- **施加数值无意义**：单例能力，无论施加多少都只强化下一次攻击。
- **只影响常规攻击**（`IsPoweredAttack`）——固定伤害、生命流失等非攻击伤害不吃加成。
- **不算"真暴击"**：×2 不写入暴击判定——"暴击时触发"类效果（[镜](/powers/mirror_power.md)、[二律背反](/powers/antinomy_power.md)等）不因本能力触发。

## 小贴士

- **施放节奏**：第 2 回合的「精神同步」是第 1 次使用（挂锁定I，同回合魔能暴风有 50% 概率 ×1.5）；**第 3 次及之后**的精神同步才单独成招挂本能力——下一回合的随机攻击意图按 ×3 读（暴击 ×1.5 × 翻倍 ×2），是提亚斯战最危险的信号，格挡提前备足。
- **驱散可解**：本能力是 Buff——拥有驱散增益手段（如"愤怒意志"类清 buff 效果的玩家版本）可以直接把它清掉，让下一刀回落原倍率。
- **阶段压制思路**：与其硬抗 ×3 的爆发刀，不如在提亚斯第 2 次精神同步前后建立斩杀线或用眩晕/无效化意图跳过它的输出回合。

## 相关能力

- [必定暴击](/powers/next_guaranteed_crit_power.md)（同模式 ×1.5 版）
- [锁定I](/powers/lock_one_power.md) / [锁定II](/powers/lock_two_power.md)（精神同步前两档的暴击率提升）

## 源码

- `SeerNextAttackDoubleDamagePower.cs`（`ModifyDamageMultiplicative` 返回 2m；`AfterAttack` 中 `PowerCmd.Remove` 整体移除）
- 提亚斯施加逻辑：`SeerTiasMonster.cs`（`MindSyncAction` 分阶段：锁定I → 锁定II → 本能力）
