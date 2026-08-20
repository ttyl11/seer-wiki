# 硬化

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物随机池——[群星的礼赠](/relics/starter/elemental_core.md)随机能力池赋予怪物（遭遇时按概率自带，概率随探索房间数增长）

<img src="/images/powers/harden_power.png" alt="硬化" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 单例（不可叠加）
- **可见**: 是

## 描述

只承受<span style="color:#d4a017;font-weight:600">暴击</span>伤害。

## 详细机制

- **非暴击全免**：`ModifyHpLostBeforeOsty` 钩子——持有者（怪物）受到伤害时，默认把 HP 损失**归零**，只有两种情况放行：
  1. **暴击伤害**：攻击者持有[暴击](/powers/critical_strike_power.md)能力且本次攻击判定为暴击（`IsCurrentAttackCritical()`）——正常掉血。
  2. **无来源伤害**：`dealer == null` 的伤害（[流血](/powers/bleed_power.md)/[烧伤](/powers/burn_power.md)等 DoT 跳伤没有来源者）——正常掉血。
- **普通攻击完全无效**：非暴击的攻击（无论多大数值）全部归零——这不是减伤，是免疫。
- **DoT 是漏洞**：DoT 结算时没有 dealer，绕过硬化判定——哪怕没有暴击体系，DoT 也能稳定磨血。

## 小贴士

- **先检查自己的暴击能力**：能否稳定打暴击（[暴击](/powers/critical_strike_power.md)层数/暴击率加成）决定了这只怪是"白板"还是"铁壁"——暴击流打它毫无压力，无暴击构筑则攻击全废。
- **DoT 是万能备用钥匙**：[流血](/powers/bleed_power.md)/[烧伤](/powers/burn_power.md)跳伤没有来源者，完全无视硬化——非暴击构筑遇到硬化怪，立刻切 DoT 磨血是最稳路线。
- **别浪费资源砸普通攻击**：非暴击攻击打上去全部 0——把增伤 buff、能量全部投给暴击判定或 DoT，普通攻击牌宁可丢着。

## 源码

- `SeerHardenPower.cs`（`ModifyHpLostBeforeOsty`：`dealer == null` 或攻击者暴击时放行，否则返回 `0`）
