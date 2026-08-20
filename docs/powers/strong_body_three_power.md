# 强体3

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物随机池——[群星的礼赠](/relics/starter/elemental_core.md)随机能力池赋予怪物（遭遇时按概率自带，概率随探索房间数增长）

<img src="/images/powers/strong_body_three_power.png" alt="强体3" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 单例（不可叠加）
- **可见**: 是

## 描述

每场战斗开始时，获得<span style="color:#d4a017;font-weight:600">最大生命</span>值50%的<span style="color:#d4a017;font-weight:600">最大生命</span>值。

## 详细机制

- **开局一次性膨胀**：`BeforeCombatStart` 钩子——战斗开始的瞬间，最大生命 +<span style="color:#3aa675;font-weight:600">50%</span>（按当前 MaxHp 计算、向下取整，至少 +1）。
- **加血即满血**：走 `CreatureCmd.GainMaxHp`——内置等量回血（上限加多少、当前血同时回多少）——效果是**满血状态整体膨胀 50%**。
- **只在开局结算一次**：之后不再成长，与[生息](/powers/life_breath_one_power.md)系的每回合复利完全不同。

## 小贴士

- **看到的血条就是最终血条**：加成在战斗开始前已结算完毕——按面板直接规划斩杀线即可，不需要自己再乘 1.5。
- **纯数值词缀、优先级最低**：只加血量、不加输出不改机制——多怪战斗里它永远是最后集火的那个，先拆带功能词缀（[进化](/powers/evolve_power.md)/[汲取](/powers/drain_one_power.md)等）的。
- **三档最稀有**：成长率 0.0001/房只有[强体1](/powers/strong_body_one_power.md)的 1/5——全程遭遇频率极低，但撞上厚血 Boss 时等于凭空多打半条血。
- **系列对比**：[强体1](/powers/strong_body_one_power.md)（+15%）/[强体2](/powers/strong_body_two_power.md)（+30%）——三档有效血量 ×1.5 是纯词缀里的天花板，斩杀线必须提前拉高。

## 源码

- `SeerStrongBodyThreePower.cs`（`BeforeCombatStart`，`GainMaxHp(MaxHp * 0.50)`）
- 随机池配置：`SeerElementalCore.cs:65`（`0.0001/房`）
