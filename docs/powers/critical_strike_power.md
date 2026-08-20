# 暴击

> **归属**：玩家与怪物均可持有——本能力是整个暴击系统的**引擎**
> **施加来源**：[群星的礼赠](/relics/starter/elemental_core.md)（初始遗物）在每次玩家回合开始时为**全场**（玩家方全体 + 敌方全体）尚未持有者自动挂上；怪物开局自带——[盖亚](/monsters/boss/gaia_monster.md)、[雷伊](/monsters/boss/ray_monster.md)

<img src="/images/powers/critical_strike_power.png" alt="暴击" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 中性（不属于增益也不属于减益，不被驱散/净化类效果清除）
- **叠加方式**: 单例（不可叠加）
- **可见**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| 暴击概率 | 12.5% |
| 暴击倍率 | 1.5 |

## 描述

攻击时有<span style="color:#3aa675;font-weight:600">12.5</span>%几率造成<span style="color:#d4a017;font-weight:600">暴击</span>，造成<span style="color:#3aa675;font-weight:600">1.5</span>倍伤害。

## 详细机制

- **引擎本体**：本能力不只是"12.5% 概率"——所有暴击判定（自然掷骰、锁定档位、外部强制暴击）与暴击增伤都由它执行。**没有本能力的单位完全不会暴击**，[锁定I](/powers/lock_one_power.md)/[锁定II](/powers/lock_two_power.md)等档位标记单独挂在身上也不起作用。
- **判定流程**：每次攻击命令开始时掷骰一次（`Rng.CombatTargets`，多人同步安全）：
  - 默认档：掷骰 ≤<span style="color:#3aa675;font-weight:600">12.5</span>% → 暴击
  - [锁定I](/powers/lock_one_power.md)档：掷骰 ≤<span style="color:#3aa675;font-weight:600">50</span>% → 暴击（替换 12.5% 基准）
  - [锁定II](/powers/lock_two_power.md)档：跳过掷骰，直接判定暴击
  - 北海之刃系能力可将判定强制改为暴击（无视档位）
- **一次攻击只掷一次**：多段攻击（如 3×5）共享判定——要么全部段数暴击，要么全部不暴。
- **暴击增伤 ×1.5**：判定成功时攻击伤害 ×1.5（独立乘区，与其它乘法修正链式相乘）。
- **"暴击时触发"的查询口**：[镜](/powers/mirror_power.md)、[二律背反](/powers/antinomy_power.md)、[五月之刃](/powers/may_edge_power.md)、[天规](/powers/heaven_rule_power.md)、[返璞归真](/powers/return_to_nature_power.md)、[应援](/powers/support_power.md)等"暴击时"效果都查询本能力的判定结果——[必定暴击](/powers/next_guaranteed_crit_power.md)的 ×1.5 **不写入判定**，不触发这些联动。
- **只影响常规攻击**（`IsPoweredAttack`）——[固定伤害](/powers/fixed_damage_power.md)、DoT 等非攻击伤害不参与暴击。

## 小贴士

- **全场默认在场**：群星的礼赠是初始遗物，每次玩家回合开始兜底补挂——实际对局中敌我双方永远拥有暴击系统，不存在"谁没有暴击资格"的问题。
- **期望收益很低但特定战斗里是大事**：12.5% × 1.5 ≈ 全程期望 1.06 倍攻击伤害——平时影响不大；但盖亚"天"规则（非暴击受伤减半、暴击受伤×3）这类战斗里，你的刀暴不暴直接决定输出量级。
- **想稳定触发"暴击时"联动**：思路只有提档（锁定I/II）或用北海之刃系强制暴击——光堆[必定暴击](/powers/next_guaranteed_crit_power.md)只加伤害不触发联动。
- **驱散不掉**：本能力为中性，驱散增益/减益对它无效；想压暴击只能让它不攻击（眩晕、无效化意图）或把格挡堆够。

## 相关能力

- [锁定I](/powers/lock_one_power.md)（50% 暴击档）/ [锁定II](/powers/lock_two_power.md)（100% 暴击档）
- [必定暴击](/powers/next_guaranteed_crit_power.md)（独立 ×1.5 乘区，不写判定、不触发联动，可与自然暴击叠成 ×2.25）
- [魔王咒怨](/powers/demon_king_curse_power.md)（独立的增伤/即死体系，与暴击判定无关）

## 相关卡牌

- [黎羽幻生](/cards/character/feather_phantom.md)（通过[必定暴击](/powers/next_guaranteed_crit_power.md)获得 1.5 倍伤害，不走暴击判定）

## 源码

- `SeerCriticalStrikePower.cs`（`BeforeAttack` 掷骰与锁定档位、`ModifyDamageMultiplicative` ×1.5、`IsCurrentAttackCritical` 联动查询口）
- 全场兜底挂载：`SeerElementalCore.cs`（`BeforeSideTurnStart`，玩家回合开始给玩家方 + 敌方全体补挂）
- 怪物开局自挂：`SeerGaiaMonster.cs`（`AfterAddedToRoom`）、`SeerRayMonster.cs`
