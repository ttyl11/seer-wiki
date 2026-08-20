# 铁壁I

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物随机池——[群星的礼赠](/relics/starter/elemental_core.md)随机能力池赋予怪物（遭遇时按概率自带，概率随探索房间数增长）

<img src="/images/powers/wall_one_power.png" alt="铁壁I" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 单例（不可叠加，Amount 恒为 1）
- **可见**: 是

## 描述

自身免疫低于4点的伤害。

## 详细机制

- **门槛式免疫**：持有者每次 HP 损失结算时，若损失量低于 <span style="color:#3aa675;font-weight:600">4</span> 点则直接归 0（`ModifyHpLostBeforeOsty` 钩子，在奥斯提结算前判定）。
- **不是减伤**：伤害 ≥ <span style="color:#3aa675;font-weight:600">4</span> 时**全额生效**——是"全免或全不免"的门槛判定，不是"减免 4 点"。
- **逐次判定**：多段攻击每段单独过门槛，多段低伤攻击（如 3 伤 × 3 次）在铁壁I 面前全部归零。

## 小贴士

- **怪物带它时多段小伤报废**：小刀流/多段低伤攻击（每段 1~3 点）对此怪完全无效——切换成单次 ≥4 点的攻击牌或[灼烧](/powers/burn_power.md)/[中毒](/powers/poison_power.md)类 DoT。
- **与[抑锋](/powers/suppress_one_power.md)组合是灾难**：铁壁免 <4、抑锋免 >80，同时出现时只有 4~80 区间伤害有效——此时 DoT 小跳伤害也会被铁壁吃掉，只能靠中等数值单段攻击硬打。
- **高阶变体**：[铁壁II](/powers/wall_two_power.md)（<8 免疫）/[铁壁III](/powers/wall_three_power.md)（<15 免疫）门槛更高，多段流愈发无力，务必保证每段伤害过线。

## 源码

- `SeerWallOnePower.cs`
