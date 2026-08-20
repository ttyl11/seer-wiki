# 强体1

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物随机池——[群星的礼赠](/relics/starter/elemental_core.md)随机能力池赋予怪物（遭遇时按概率自带，概率随探索房间数增长）

<img src="/images/powers/strong_body_one_power.png" alt="强体1" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 单例（不可叠加）
- **可见**: 是

## 描述

战斗开始时，获得最大生命值15%的最大生命值。

## 详细机制

- **开局一次性膨胀**：`BeforeCombatStart` 钩子——战斗开始的瞬间，最大生命 +<span style="color:#3aa675;font-weight:600">15%</span>（按当前 MaxHp 计算、向下取整，至少 +1）。
- **加血即满血**：走 `CreatureCmd.GainMaxHp`——内置等量回血（上限加多少、当前血同时回多少）——效果是**满血状态整体膨胀 15%**，不是"多出一段空血条"。
- **只在开局结算一次**：之后不再成长，与[生息](/powers/life_breath_one_power.md)系的每回合复利完全不同。

## 小贴士

- **看到的血条就是最终血条**：加成在战斗开始前已结算完毕——按面板直接规划斩杀线即可，不需要自己再乘 1.15。
- **纯数值词缀、优先级最低**：只加血量、不加输出不改机制——多怪战斗里它永远是最后集火的那个，先拆带功能词缀（[进化](/powers/evolve_power.md)/[汲取](/powers/drain_one_power.md)等）的。
- **随机池最高频词缀**：成长率 0.0005/房是全池并列最高（与[决心](/powers/resolve_power.md)同档）——后期遭遇里强体一出现率最高，30 房后单怪约 1.5% 概率自带。
- **系列对比**：[强体2](/powers/strong_body_two_power.md)（+30%）/[强体3](/powers/strong_body_three_power.md)（+50%）——高档位出现率依次减半，遇到强体三等于有效血量 ×1.5，斩杀线要提前拉高。

## 源码

- `SeerStrongBodyOnePower.cs`（`BeforeCombatStart`，`GainMaxHp(MaxHp * 0.15)`）
- 随机池配置：`SeerElementalCore.cs:63`（`0.0005/房`，全池最高档）
