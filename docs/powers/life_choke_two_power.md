# 扼生二

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物随机池——[群星的礼赠](/relics/starter/elemental_core.md)随机能力池赋予怪物（遭遇时按概率自带，概率随探索房间数增长）

<img src="/images/powers/life_choke_two_power.png" alt="扼生二" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 单例（不可叠加）
- **可见**: 是

## 描述

敌人恢复生命时，受到<span style="color:#d44;font-weight:600">4</span>点固定伤害。

## 详细机制

- **回血即反噬**：`AfterCurrentHpChanged` 钩子——玩家方任意成员每次恢复生命（`delta > 0`）时，立即施加 <span style="color:#d44;font-weight:600">4</span> 层[固定伤害](/powers/fixed_damage_power.md)（回合开始时结算，不可[格挡](/mechanics/block.md)）。
- **每次回血独立结算**：与[扼生一](/powers/life_choke_one_power.md)同机制，反噬量翻倍。

## 小贴士

- **治疗体系近乎禁用**：4 点反噬下，多数回复牌（回 5~8）的净收益只剩 1~4——回 4 以下的牌/遗物是纯亏；除非一口大奶（回 15+）或救命，治疗全部雪藏。
- **先杀后奶铁律**：扼生二在场时正确顺序永远是"集火持有者 → 死后放心回血"——为了抢节奏先奶一口，等于白送它 4 点输出。

## 源码

- `SeerLifeChokeTwoPower.cs`（同扼生一，`DamageAmount = 4`）
