# 冲天霸气

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物招式——[泰格尔](/monsters/boss/tiger_monster.md)「冲天霸气」：切入[愤怒姿态](/powers/wrath_stance_power.md)的同时施加 <span style="color:#3aa675;font-weight:600">2</span> 层

<img src="/images/powers/tiger_crit_counter_power.png" alt="冲天霸气" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 无类型（既非 Buff 也非 Debuff，不被驱散/净化类效果清除）
- **叠加方式**: 计数器（按层数叠加）
- **可见**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| 致命一击倍率 | 1.5 |
| 施加层数 | 2 |

## 描述

下<span style="color:#3aa675;font-weight:600">2</span>次攻击必定<span style="color:#d4a017;font-weight:600">致命一击</span>。

## 详细机制

- **计数器版"必定暴击"**：与[必定暴击](/powers/next_guaranteed_crit_power.md)（单次、攻击后整体移除）不同，本能力是计数器——每次攻击后层数 -1，归零才移除，真正实现"下 2 次"。
- **致命一击 ×1.5**：拥有者造成攻击伤害时伤害 ×1.5，无需掷骰——独立乘法修正，与其它乘区链式相乘。
- **多段攻击算一次**：一次攻击命令（如"攻击 ×3"）无论几段都只让层数 -1，且**每一段都享受 ×1.5**——多段攻击在计数器上"赚"。
- **不算"真暴击"**：×1.5 不写入暴击判定系统——"暴击时触发"类效果（[镜](/powers/mirror_power.md)、[二律背反](/powers/antinomy_power.md)等）不因本能力触发；若同一次攻击的自然暴击（12.5%）也命中，总倍率 ×1.5 ×1.5 = **×2.25**。
- **只影响常规攻击**（`IsPoweredAttack`）——固定伤害、生命流失等非攻击伤害不吃加成。

## 小贴士

- **读作"接下来两刀都 ×1.5"**：泰格尔放完「冲天霸气」后接下来两次攻击意图都按 1.5 倍估伤——配合愤怒姿态的其它增益，这是它爆发最猛的窗口，格挡预算直接翻倍准备。
- **2 次后消失**：扛过两次攻击后能力自动耗尽，进入疲软期——用[眩晕](/mechanics/stun.md)或无敌/减伤硬拖这 2 回合是性价比最高的解法。
- **驱散清不掉**：无类型能力，驱散增益/减益对它无效。

## 相关能力

- [必定暴击](/powers/next_guaranteed_crit_power.md)（单次版：攻击后整体移除，施加数值无意义）
- [精神同步](/powers/next_attack_double_damage_power.md)（单次 ×2 版）
- [愤怒姿态](/powers/wrath_stance_power.md)（与冲天霸气同招施加的泰格尔姿态）

## 源码

- `SeerTigerStances.cs`（`SeerTigerCritCounterPower`：`ModifyDamageMultiplicative` 返回 1.5m；`AfterAttack` 层数 -1、归零移除）
- 施加入口：`SeerTigerMonster.cs`（切换愤怒姿态时施加 2 层）
