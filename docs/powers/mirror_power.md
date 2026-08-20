# 镜反

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物随机池——[群星的礼赠](/relics/starter/elemental_core.md)随机能力池赋予怪物（遭遇时按概率自带，概率随探索房间数增长）

<img src="/images/powers/mirror_power.png" alt="镜反" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 单例（不可叠加）
- **可见**: 是

## 描述

免疫并反弹<span style="color:#d4a017;font-weight:600">暴击</span>伤害。

## 详细机制

- **暴击伤害归零**：`ModifyHpLostBeforeOsty` 钩子——持有者（怪物）受到伤害时，若伤害来源持有[暴击](/powers/critical_strike_power.md)且本次攻击判定为暴击（`IsCurrentAttackCritical()`：当次掷骰命中 12.5% 暴击，或[锁二](/powers/lock_two_power.md)类 100% 暴击），HP 损失直接归 <span style="color:#3aa675;font-weight:600">0</span>——**暴击打它一点血都不掉**。
- **原量反弹**：`BeforeDamageReceived` 钩子——被暴击命中的瞬间，立即对攻击者反弹**本次攻击的完整伤害量**（格挡前数值），类型为 `ValueProp.Unpowered`：不吃[力量](/powers/strength_power.md)/[易伤](/powers/vulnerable_power.md)增减，但**可被[格挡](/mechanics/block.md)**。
- **判定的是攻击者侧**：看的是**你**（攻击者）的暴击状态，与怪物自己有没有暴击无关——[群星的礼赠](/relics/starter/elemental_core.md)开局给你自带的暴击、[北冥之刃](/powers/north_sea_blade_power.md)的必暴击，全都会被镜反惩罚。
- **普攻/固伤/DoT 无碍**：非暴击的常规攻击正常掉血；[固定伤害](/powers/fixed_damage_power.md)、灼烧等无来源伤害不触发反弹（`BeforeDamageReceived` 有 `dealer != null` 过滤）。

## 小贴士

- **与[铁壁](/powers/harden_power.md)完全相反的克制关系**：铁壁逼你"只能打暴击"（普攻全免），镜反罚你"千万别打暴击"（暴击零伤害 + 被反打）——同一场遭遇若两怪分别带铁壁和镜反，输出必须分怪规划：暴击体系打铁壁怪、普攻打镜反怪。
- **开局暴击是负资产**：[群星的礼赠](/relics/starter/elemental_core.md)给玩家方全体自带的 12.5% 概率暴击，在这里期望每 8 次攻击就有 1 次"零伤害 + 被原量反弹"——输出主力打镜反怪前先把格挡留足（反弹是 Unpowered，格挡实打实吃得下）。
- **北冥刀体系禁用**：持有[北冥之刃](/powers/north_sea_blade_power.md)/[北冥狂刃](/powers/north_sea_mad_blade_power.md)（攻击必定暴击）时打镜反怪等于**每次攻击都自杀**——伤害归零还被原量反弹，先集火拆掉镜反怪或换其它手段输出。
- **最稳解法是绕开暴击**：普攻、[固定伤害](/powers/fixed_damage_power.md)、DoT 全部不受镜反影响——镜反只惩罚"暴击"这一条伤害路径，本质是针对暴击流的机制怪。

## 源码

- `SeerMirrorPower.cs`（`BeforeDamageReceived` 原量反弹 `ValueProp.Unpowered`；`ModifyHpLostBeforeOsty` 暴击伤害归 0）
- 注：`ModifyHpLostBeforeOsty` 内 `dealer.GetPower` 未判空（对比 `SeerHardenPower.cs:27` 的判空写法），来源为 null 的 DoT 跳伤存在 NRE 风险
