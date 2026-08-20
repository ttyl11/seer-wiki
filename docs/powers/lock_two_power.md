# 锁定II

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物自带——[雷伊](/monsters/boss/ray_monster.md)开局自带、[提亚斯](/monsters/elite/tias_monster.md)「精神同步」第 2 次使用时施加（同时移除[锁定I](/powers/lock_one_power.md)）；怪物随机池——[群星的礼赠](/relics/starter/elemental_core.md)随机能力池赋予怪物（遭遇时按概率自带，概率随探索房间数增长）

<img src="/images/powers/lock_two_power.png" alt="锁定II" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 无类型（`PowerType.None`——既非 Buff 也非 Debuff，不吃驱散/净化）
- **叠加方式**: 实例化（每次施加独立实例）
- **可见**: 是

## 描述

自身<span style="color:#d4a017;font-weight:600">暴击率</span>修改为<span style="color:#3aa675;font-weight:600">100%</span>。

## 详细机制

- **本体是"档位标记"**：`SeerLockTwoPower` 自身无任何逻辑——它是被[暴击](/powers/critical_strike_power.md)引擎（`SeerCriticalStrikePower`）读取的标记：引擎在 `BeforeAttack` 掷骰时看到持有者身上有锁定II，**跳过掷骰直接判定暴击**（`IsCritical = true`，100% 必暴）。
- **伤害无条件 ×1.5**：引擎的 `ModifyDamageMultiplicative` 对锁定II 持有者的常规攻击**直接返回 1.5 倍**——不依赖暴击判定结果，是确定性的 <span style="color:#3aa675;font-weight:600">×1.5</span>。
- **必暴是全体系联动的**：`IsCurrentAttackCritical()` 对锁定II 持有者恒真——其它能力对"暴击攻击"的联动全部吃满（如[镜反](/powers/mirror_power.md)的暴击归零+反弹、盖亚「返璞归真」的暴击回血）。
- **每次攻击有效**：必暴没有次数限制——引擎在 `AfterAttack` 重置的只是掷骰标记，锁定II 标记本身一直在场，整场战斗每刀都暴。
- **只影响常规攻击**（`IsPoweredAttack`）——[固定伤害](/powers/fixed_damage_power.md)、DoT 不参与暴击。
- **前提是引擎在场**：怪物必须同时持有暴击引擎才有效——[群星的礼赠](/relics/starter/elemental_core.md)持有者的战斗中所有怪物自动获得引擎；雷伊/提亚斯自带引擎。

## 小贴士

- **意图数值直接 ×1.5 读**：它展示 10 点攻击意图就按 15 点准备——[格挡](/mechanics/block.md)预算、血线评估全部按 1.5 倍算，没有运气成分。
- **驱散清不掉**：锁定II 是 `PowerType.None`（非 Buff 非 Debuff）——驱散/净化类效果对它无效，唯一解是控它的攻击（[眩晕](/mechanics/stun.md)、无效化意图）或速杀。
- **雷伊的身份机制**：雷伊开局自带锁定II（配合雷暴充能球体系）——雷伊战全程按 1.5 倍意图读伤害是硬性前提。
- **提亚斯二段警报**：提亚斯第二次「精神同步」后从 50% 暴击升级为 100%——进入这个阶段后防御预算必须全部顶格。

## 源码

- `SeerLockTwoPower.cs`（空壳标记类，`PowerType.None`，无自身逻辑）
- 档位判定：`SeerCriticalStrikePower.cs:62-68`（`BeforeAttack` 跳过掷骰直接 `IsCritical = true`）、`:113-117`（`ModifyDamageMultiplicative` 无条件返回 `1.5`）、`:135-139`（`IsCurrentAttackCritical` 恒真）
- 雷伊开局施加：`SeerRayMonster.cs:75-78`（暴击引擎 + 锁定II 一起挂）
- 提亚斯精神同步：`SeerTiasMonster.cs:255-265`（第 2 次移除锁定I、施加锁定II）
- 随机池配置：`SeerElementalCore.cs:104`（`0.000015/房`）
