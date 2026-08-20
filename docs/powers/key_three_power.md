# 要点探寻III

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物随机池——[群星的礼赠](/relics/starter/elemental_core.md)随机能力池赋予怪物（遭遇时按概率自带，概率随探索房间数增长）

<img src="/images/powers/key_three_power.png" alt="要点探寻III" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 单例（不可叠加，Amount 恒为 1）
- **可见**: 是

## 描述

攻击<span style="color:#3aa675;font-weight:600">100%</span>几率伤害翻倍。

## 详细机制

- **必暴**：无概率判定——持有者（怪物）的每次**常规攻击**（`IsPoweredAttack`）伤害恒定 <span style="color:#3aa675;font-weight:600">×2</span>（`ModifyDamageMultiplicative` 直接返回 `2`）。
- **与 I/II 的区别**：[要点探寻I](/powers/key_one_power.md)（15% 掷骰）/[要点探寻II](/powers/key_two_power.md)（30% 掷骰）还有波动，III 是确定性翻倍——没有"运气好躲过"这回事。

## 小贴士

- **意图数值直接 ×2 读**：它展示 10 点攻击意图就按 20 点准备——[格挡](/mechanics/block.md)预算、血线评估全部按双倍算，这是 III 档最需要刻进肌肉记忆的一条。
- **组合怪警报**：必暴 ×2 与[汲血](/powers/blood_suck_one_power.md)（吸血按格挡前伤害）同挂时，它每次攻击的吸血量也翻倍——输出-回复双重恶化，优先击杀顺序放到最前。

## 源码

- `SeerKeyThreePower.cs`（`ModifyDamageMultiplicative` 对常规攻击恒返回 `2`，无掷骰）
- 随机池配置：`SeerElementalCore.cs:101`（`0.000005/房`，与[神话](/powers/myth_power.md)同档的稀有度）
