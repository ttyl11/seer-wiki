# 免疫

> **归属**：预留能力（当前无获取途径）
> **施加来源**：无——没有任何卡牌、遗物、怪物或事件施加本能力；它是凝滞等异常免疫判定的源码参考实现，正常游玩不会见到

<img src="/images/powers/immunity_power.png" alt="免疫" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 无（不使用层数）
- **可见**: 是
- **多人同步缩放**: 是

## 描述

免疫负面效果。

## 详细机制

- **双轨免疫**：同时免疫所有 25 种 Seer [异常状态](/mechanics/abnormal-status.md)**和所有被判定为减益（Debuff）的能力**——施加量一律归零，覆盖面与[永久异常免疫](/powers/permanent_debuff_immune_power.md)相同。
- **不可见能力不免疫**：仅对可见的能力生效，隐藏的内部能力照常施加。
- **无层数、不衰减**：单次型能力，整场战斗持续生效。
- **判定基准**：本能力的免疫判定（"是否为 Debuff 或异常状态"）是 [凝滞](/powers/stasis_power.md) 等其它免疫能力的源码参考实现——凝滞复用了同一套判定，只是把范围收窄到异常状态。

## 小贴士

- 正常游玩**无法获得**本能力：全 mod 没有任何施加入口。若未来版本开放获取途径，本页会同步更新。
- 与同类免疫的范围对比：[永久异常免疫](/powers/permanent_debuff_immune_power.md)（异常+Debuff，可获取）、[异常免疫](/powers/debuff_immune_power.md)（仅异常，按回合消耗）——本能力机制上等同前者，但无来源。

## 相关能力

- [凝滞](/powers/stasis_power.md)（免疫判定的参考来源）
- [永久异常免疫](/powers/permanent_debuff_immune_power.md)（机制等价的可获取版本）
- [异常免疫](/powers/debuff_immune_power.md)（仅免 Seer 异常的版本）

## 源码

- `SeerImmunityPower.cs`（`IsDebuffOrAbnormalStatus` 判定 + 施加量归零）
