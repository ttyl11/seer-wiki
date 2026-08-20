# 铁壁II

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物随机池——[群星的礼赠](/relics/starter/elemental_core.md)随机能力池赋予怪物（遭遇时按概率自带，概率随探索房间数增长）

<img src="/images/powers/wall_two_power.png" alt="铁壁II" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 单例（不可叠加）
- **可见**: 是

## 描述

自身免疫低于8点的伤害。

## 详细机制

- **门槛式免疫**：持有者每次 HP 损失结算时，若损失量低于 <span style="color:#3aa675;font-weight:600">8</span> 点则直接归 0（`ModifyHpLostBeforeOsty` 钩子，在奥斯提结算前判定）。
- **不是减伤**：伤害 ≥ <span style="color:#3aa675;font-weight:600">8</span> 时**全额生效**——"全免或全不免"，不是"减免 8 点"。
- **逐次判定**：多段攻击每段单独过门槛。

## 小贴士

- **多数杂兵攻击被免疫**：8 点门槛已覆盖玩家的常规低费攻击与小刀段伤——每段必须 ≥8 才掉血，否则白打。
- **DoT 同样被吃**：[灼烧](/powers/burn_power.md)/[中毒](/powers/poison_power.md)每跳若低于 8 也归零——此时只能堆高单跳数值（大量叠层后的 DoT 每跳仍可过线）或用单段大攻击。
- **对比**：[铁壁I](/powers/wall_one_power.md)（<4）/[铁壁III](/powers/wall_three_power.md)（<15）——门槛随阶递增，遇到 III 时多数攻击牌基础段伤都需要增伤支援。

## 源码

- `SeerWallTwoPower.cs`
