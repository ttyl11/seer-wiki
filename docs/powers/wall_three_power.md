# 铁壁III

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物随机池——[群星的礼赠](/relics/starter/elemental_core.md)随机能力池赋予怪物（遭遇时按概率自带，概率随探索房间数增长）

<img src="/images/powers/wall_three_power.png" alt="铁壁III" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 单例（不可叠加）
- **可见**: 是

## 描述

自身免疫低于15点的伤害。

## 详细机制

- **门槛式免疫**：持有者每次 HP 损失结算时，若损失量低于 <span style="color:#3aa675;font-weight:600">15</span> 点则直接归 0（`ModifyHpLostBeforeOsty` 钩子，在奥斯提结算前判定）。
- **不是减伤**：伤害 ≥ <span style="color:#3aa675;font-weight:600">15</span> 时**全额生效**——"全免或全不免"，不是"减免 15 点"。
- **逐次判定**：多段攻击每段单独过门槛。

## 小贴士

- **低中伤攻击全面报废**：15 点门槛高于多数攻击牌的单段基础伤害——没叠[力量](/powers/strength_power.md)/[易伤](/powers/vulnerable_power.md)的输出基本挠痒痒，先叠增伤再出手。
- **DoT 需要攒层**：[灼烧](/powers/burn_power.md)/[中毒](/powers/poison_power.md)前期每跳不足 15 会被完全免疫，只有层数堆高后（每跳 ≥15）才开始真正掉血——要么早铺早攒，要么放弃 DoT 改走大单段。
- **对比**：[铁壁I](/powers/wall_one_power.md)（<4）/[铁壁II](/powers/wall_two_power.md)（<8）——III 是完全体，与[抑锋](/powers/suppress_one_power.md)同时出现时输出窗口极窄，是随机词缀里最恶心的防御组合。

## 源码

- `SeerWallThreePower.cs`
