# 扼生一

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物随机池——[群星的礼赠](/relics/starter/elemental_core.md)随机能力池赋予怪物（遭遇时按概率自带，概率随探索房间数增长）

<img src="/images/powers/life_choke_one_power.png" alt="扼生一" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 单例（不可叠加）
- **可见**: 是

## 描述

敌人恢复生命时，受到<span style="color:#d44;font-weight:600">2</span>点固定伤害。

## 详细机制

- **回血即反噬**：`AfterCurrentHpChanged` 钩子——**玩家方任意成员每次恢复生命**（`delta > 0`）时，立即给该成员施加 <span style="color:#d44;font-weight:600">2</span> 层[固定伤害](/powers/fixed_damage_power.md)（在其回合开始时结算掉血）。
- **每次回血独立结算**：一回合回 3 次血 = 累计 6 层固伤——小额多次的回复（再生类）反而比一口大奶更容易累计反噬。
- **固伤不可格挡**：反噬走 `SeerFixedDamagePower`，不吃[格挡](/mechanics/block.md)与增减伤。
- **持有者是怪物**：持有者活着就持续监听，与[缔结印记](/powers/knot_mark_power.md) 7 层效果同模式（那个是玩家施加给敌人的版本）。

## 小贴士

- **回血变亏血**：每点回复都附带 2 点固伤代价——小额回复（回 3~5 的牌/遗物）直接变负收益，大额回复（回 15+）才勉强划算；带扼生怪的战斗里**除非快死否则别奶**。
- **被动回血要算进账**：每回合自动回复类效果（再生/遗物被动）在扼生面前每回合白吃 2 固伤——评估要不要刻意跳过这些回复节奏。
- **回复反噬体系的对冲**：先杀持有者再回血是最优解；撑血线优先用[格挡](/mechanics/block.md)（不触发回血事件）而不是治疗。

## 源码

- `SeerLifeChokeOnePower.cs`（`AfterCurrentHpChanged`，玩家 `delta > 0` 时施加 `SeerFixedDamagePower` 2 层）
