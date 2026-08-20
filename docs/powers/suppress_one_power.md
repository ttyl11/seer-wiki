# 抑锋I

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物随机池——[群星的礼赠](/relics/starter/elemental_core.md)随机能力池赋予怪物（遭遇时按概率自带，概率随探索房间数增长）

<img src="/images/powers/suppress_one_power.png" alt="抑锋I" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 单例（不可叠加）
- **可见**: 是

## 描述

自身免疫高于<span style="color:#3aa675;font-weight:600">80</span>点的伤害。

## 详细机制

- **上限免疫**：每次 HP 损失结算时，若损失量**高于** <span style="color:#3aa675;font-weight:600">80</span> 点则直接归 0（`ModifyHpLostBeforeOsty` 钩子，在奥斯提结算前判定）；≤ 80 点的伤害全额生效。
- **一刀流克星**：单次伤害 81+ 归零，但 80 及以下照常掉血——和[铁壁I](/powers/wall_one_power.md)（免疫低于 4 点）恰好相反，一个砍上限、一个砍下限。
- **逐次判定**：多段攻击每段单独过门槛，每段只要 ≤80 都有效。

## 小贴士

- **怪物带它时禁用大招**：出现此词缀的怪物，单次 81+ 的重击（蓄爆一刀、终结技）全部打空——把爆发拆成多段中等伤害（每段 ≤80）反而刀刀见效。
- **DoT 完全绕过**：[灼烧](/powers/burn_power.md)/[中毒](/powers/poison_power.md)等每跳数值小，从不触发 80 上限，是打抑锋怪最稳的输出方式。
- **最怕的组合**：抑锋 + [铁壁](/powers/wall_one_power.md)同时出现时只有 4~80 区间的伤害有效——低伤高伤全免，此时靠 DoT 和[固定伤害](/mechanics/fixed-damage.md)小数值磨血最可靠。

## 源码

- `SeerSuppressOnePower.cs`
