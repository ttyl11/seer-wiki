# 必定暴击

> **归属**：玩家与怪物均可持有
> **施加来源**：玩家获得——[梦祈天怜](/cards/character/dream_pray_heaven.md)（卡牌）、[黎羽幻生](/cards/character/feather_phantom.md)（卡牌）、[倒吊人](/relics/common/tarot_hanged_man.md)（遗物，每次受到伤害时）；怪物自带——[盖亚](/monsters/boss/gaia_monster.md)（不灭斗气）、[哈耶克](/monsters/elite/hayek_monster.md)（灭魂天葬击）、[谱尼](/monsters/boss/puni_monster.md)（圣光气）

<img src="/images/powers/next_guaranteed_crit_power.png" alt="必定暴击" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 单例（不可叠加）
- **可见**: 是

## 描述

下一次攻击必定暴击（<span style="color:#3aa675;font-weight:600">1.5</span>倍伤害）。

## 详细机制

- **独立乘区 ×1.5**：拥有者造成攻击伤害时，伤害 ×1.5。这是一个独立的乘法修正——与[暴击](/powers/critical_strike_power.md)的自然判定、[魔王咒怨](/powers/demon_king_curse_power.md)的增伤等其它乘法修正是**链式相乘**关系，不是相互覆盖。
- **只强化下一次攻击**：攻击结束后整体移除。多段攻击（如 3×5）算一次攻击——**每一段都享受 ×1.5**，全部段数打完才移除。
- **施加数值无意义**：单例能力，无论施加 1 还是 2（[黎羽幻生](/cards/character/feather_phantom.md)施加的就是 2），都只强化下一次攻击，不存在"下两次"——想看"下 N 次"效果参见计数器型的[冲天霸气](/powers/tiger_crit_counter_power.md)（逐次递减）。
- **只影响攻击伤害**：仅对"吃增伤/力量修正的攻击伤害"生效；固定伤害、生命流失等非攻击伤害不吃加成。
- **不算"真暴击"**：本能力不写入暴击判定系统。"暴击时触发"类效果——[镜](/powers/mirror_power.md)、[二律背反](/powers/antinomy_power.md)、[五月之刃](/powers/may_edge_power.md)、[天规](/powers/heaven_rule_power.md)、[北海之刃](/powers/north_sea_blade_power.md)、[返璞归真](/powers/return_to_nature_power.md)、[应援](/powers/support_power.md)等——查询的是[暴击](/powers/critical_strike_power.md)能力的判定结果，**不认本能力的 ×1.5**。想让这类联动触发，得靠 12.5% 自然暴击或[锁定I](/powers/lock_one_power.md)/[锁定II](/powers/lock_two_power.md)。

## 小贴士

- **可与自然暴击叠乘**：若同一次攻击 12.5% 自然暴击也命中，总倍率 ×1.5 ×1.5 = **×2.25**（两个独立乘区）。[群星的礼赠](/relics/starter/elemental_core.md)开局给全场（玩家与怪物）挂上暴击系统，所以这个叠乘随时可能发生。
- **与锁定II 同理**：[锁定II](/powers/lock_two_power.md)强制暴击（×1.5 且触发暴击联动），再叠加本能力 → 同样 ×2.25。
- **多段攻击收益最大**：段数越多，×1.5 覆盖的伤害总量越大；配合多 hits 的攻击牌打出来最划算。
- **倒吊人的发动机**：持有[倒吊人](/relics/common/tarot_hanged_man.md)时每次受到伤害都会获得本能力——挨打越多，下一刀越痛；注意倒吊人自身还有"造成伤害时追伤+回血"，攻防两端形成正反馈。
- **敌方持有时的信号**：盖亚（不灭斗气）、哈耶克（灭魂天葬击）、谱尼（圣光气）挂上本能力图标后，**下一回合的攻击大概率是重击**——提前铺格挡或开减伤。

## 相关卡牌

- [梦祈天怜](/cards/character/dream_pray_heaven.md)（施加 1 点）
- [黎羽幻生](/cards/character/feather_phantom.md)（施加 2 点——但依然只强化下一次攻击）

## 相关能力

- [暴击](/powers/critical_strike_power.md)（暴击系统引擎，×1.5 可与本能力叠乘）
- [冲天霸气](/powers/tiger_crit_counter_power.md)（计数器版"下 2 次必定致命一击"）
- [精神同步](/powers/next_attack_double_damage_power.md)（同模式但 ×2）
- [锁定I](/powers/lock_one_power.md) / [锁定II](/powers/lock_two_power.md)（改写暴击率，能触发真暴击联动）

## 源码

- `SeerNextGuaranteedCritPower.cs`（`ModifyDamageMultiplicative` 返回 1.5m；`AfterAttack` 中 `PowerCmd.Remove` 整体移除）
