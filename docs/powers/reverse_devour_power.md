# 逆噬

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物随机池——[群星的礼赠](/relics/starter/elemental_core.md)随机能力池赋予怪物（遭遇时按概率自带，概率随探索房间数增长）

<img src="/images/powers/reverse_devour_power.png" alt="逆噬" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 单例（不可叠加）
- **可见**: 是

## 描述

每受到1次攻击，降低对手随机卡牌<span style="color:#3aa675;font-weight:600">2</span>点PP值。

## 详细机制

- **受击即扣 PP**：`AfterDamageReceived` 钩子——持有者（怪物）每次受到伤害（`TotalDamage > 0`）且来源是玩家时，从**该玩家**的抽牌堆 + 手牌 + 弃牌堆三堆合集中随机挑一张 PP > 0 的 PP 牌，PP <span style="color:#3aa675;font-weight:600">-2</span>（最低归 0）。
- **格挡挡不住触发**：判定的是 `TotalDamage`（格挡**前**总伤害）——哪怕伤害被[格挡](/mechanics/block.md)完全吸收，只要打了就算一次，照样扣 PP。
- **多段攻击段段触发**：每次伤害结算独立走钩子——5 段连击一次出牌 = 随机扣 5 次 × 2 PP。
- **只认玩家来源**：`dealer.Player != null` 过滤——DoT 跳伤（无来源）、怪物间伤害不触发。

## 小贴士

- **打它的每一刀都有 2 PP 代价**：攻击收益必须覆盖这个隐性成本——1 点伤害的蹭刀在这里是纯亏（掉 2 PP 换 1 伤）。
- **多段攻击卡是自杀行为**：×5 连击 = 一次出牌蒸发 10 PP——PP 流卡组遇到逆噬怪，**多段攻击牌全部雪藏**，换大额单段攻击（一次结算只触发一次反噬）。
- **三种 PP 削减轴对照**：[暗滞](/powers/dark_stagnation_power.md)按"打牌次数"扣、[耗灵](/powers/spirit_drain_power.md)按"回合数"清零、逆噬按"攻击次数"扣——逆噬最克制高频攻击流，非攻击体系（技能/固伤主输出）几乎无感。
- **先拆后打**：多怪场合优先集火逆噬怪本身——它死后反噬立刻消失（实时判定，无残留）。

## 源码

- `SeerReverseDevourPower.cs`（`AfterDamageReceived`：`TotalDamage > 0` 且 `dealer.Player != null` → 三堆合集随机一张 `ForceSetPp(Pp - 2)`）
- 随机池配置：`SeerElementalCore.cs:70`（`0.0002/房`）
