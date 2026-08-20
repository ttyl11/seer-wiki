# 锁定I

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物自带——[提亚斯](/monsters/elite/tias_monster.md)「精神同步」第 1 次使用时施加（第 2 次使用时会移除本能力并升级为[锁定II](/powers/lock_two_power.md)）；怪物随机池——[群星的礼赠](/relics/starter/elemental_core.md)随机能力池赋予怪物（遭遇时按概率自带，概率随探索房间数增长）

<img src="/images/powers/lock_one_power.png" alt="锁定I" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 实例化（每次施加独立实例）
- **可见**: 是

## 描述

自身<span style="color:#d4a017;font-weight:600">暴击</span>率修改为<span style="color:#3aa675;font-weight:600">50%</span>。

## 详细机制

- **本体是"档位标记"**：`SeerLockOnePower` 自身无任何逻辑——它是被[暴击](/powers/critical_strike_power.md)引擎（`SeerCriticalStrikePower`）读取的标记：引擎在 `BeforeAttack` 掷骰时看到持有者身上有锁定I，就把判定改为 <span style="color:#3aa675;font-weight:600">50%</span> 概率暴击（替换默认 12.5%）。
- **暴击伤害 ×1.5**：暴击成功时伤害 <span style="color:#3aa675;font-weight:600">×1.5</span>（引擎 `ModifyDamageMultiplicative`）——与[要点探寻](/powers/key_one_power.md)系的 ×2 是两套独立体系，可同时挂（乘区叠乘）。
- **多段攻击共享判定**：`BeforeAttack` 在整个攻击命令前只掷**一次**骰——"攻击 ×3"要么三段全部暴击、要么全部不暴。
- **每次攻击重新判定**：攻击结束后（`AfterAttack`）暴击标记重置，下一次攻击重新掷骰。
- **只影响常规攻击**（`IsPoweredAttack`）——[固定伤害](/powers/fixed_damage_power.md)、DoT 不参与暴击。
- **掷骰用 `Rng.CombatTargets`**（多人同步安全的 RNG 通道）。
- **前提是引擎在场**：怪物必须同时持有暴击引擎才有效——[群星的礼赠](/relics/starter/elemental_core.md)持有者的战斗中所有怪物自动获得引擎；提亚斯自带引擎，因此随机池抽到的锁定I 也总能生效。

## 小贴士

- **期望输出 +25%**：50% × 1.5 = 期望全程 1.25 倍伤害——[格挡](/mechanics/block.md)预算按"意图 ×1.5"的最坏情况留。
- **提亚斯战是倒计时**：提亚斯第一次「精神同步」挂锁定I（50% 暴击），第二次升级为[锁定II](/powers/lock_two_power.md)（100% 暴击）——它每放一次精神同步，你的防御压力就上一个台阶，尽量在第二次之前建立斩杀或控制。
- **暴击档位能驱散**：锁定I 本身是 Buff，持有移除敌方增益的手段可以把它清掉（清掉后回到引擎默认 12.5% 档）；但暴击引擎是 `PowerType.None` 驱散不掉——想彻底压暴击只能控攻击（[眩晕](/mechanics/stun.md)、无效化意图）。

## 源码

- `SeerLockOnePower.cs`（空壳标记类，无自身逻辑）
- 档位判定：`SeerCriticalStrikePower.cs:76-82`（`BeforeAttack` 掷骰 `<= 0.5`）、`:119-121`（暴击 `×1.5`）
- 提亚斯精神同步：`SeerTiasMonster.cs:255-270`（第 1 次挂锁定I，第 2 次移除并升级锁定II）
- 随机池配置：`SeerElementalCore.cs:103`（`0.00003/房`）
