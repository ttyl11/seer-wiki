# 祸移

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物自带——[仙人掌](/monsters/normal/cactus_monster.md)；怪物随机池——[群星的礼赠](/relics/starter/elemental_core.md)随机能力池赋予怪物（遭遇时按概率自带，概率随探索房间数增长）

<img src="/images/powers/calamity_shift_power.png" alt="祸移" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 单例（不可叠加）
- **可见**: 是

## 描述

在你的回合开始时，获得<span style="color:#3aa675;font-weight:600">1</span>点[荆棘](/powers/thorns_power.md)。

## 详细机制

- **回合开始攒荆棘**：持有者（怪物）自己回合开始时（`AfterSideTurnStart`），获得 <span style="color:#3aa675;font-weight:600">1</span> 层[荆棘](/powers/thorns_power.md)（Counter 型叠加，逐回合线性累积）。
- **荆棘的结算**（原版 `ThornsPower`）：它每次受到**常规攻击**伤害时，对攻击者反弹**荆棘层数**点固定量（`ValueProp.Unpowered`：不吃[力量](/powers/strength_power.md)/[易伤](/powers/vulnerable_power.md)，可被[格挡](/mechanics/block.md)）。
- **只反常规攻击**：技能类/非攻击伤害不触发荆棘；DoT 跳伤（无来源）也不触发。
- **第 N 回合 = N 层荆棘**：成长完全线性——3 回合后你每刀额外挨 3 点、6 回合后 6 点。

## 小贴士

- **回合数就是它的攻击性**：祸移怪拖得越久你的每一刀越贵——**前 3~4 回合内解决**是性价比线，之后荆棘开始显著吃你的血。
- **多段攻击是加倍亏**：荆棘按"每次受伤"结算——×3 连击在 4 层荆棘下等于额外白挨 12 点。打祸移怪优先用**大额单段**攻击。
- **非攻击轴完全免单**：[固定伤害](/powers/fixed_damage_power.md)、烧伤/中毒等 DoT 不触发荆棘——技能流卡组打祸移怪零反噬，是最优解法。
- **反弹可被格挡**：Unpowered 反弹走格挡——攻击回合留几点格挡能实打实中和荆棘税。
- **池中少有的"开局即有概率"词缀**：基础概率 0.00025 + 0.0001/房成长——前期也可能遇到（多数词缀基础为 0），开局扫词缀别漏它。

## 源码

- `SeerCalamityShiftPower.cs`（`AfterSideTurnStart`，`Apply<ThornsPower>` 1 层/回合）
- 荆棘反弹：原版 `ThornsPower.cs:17-24`（`BeforeDamageReceived` → 反弹 `Amount` 点 Unpowered）
- 随机池配置：`SeerElementalCore.cs:72`（`0.00025 + 0.0001/房`）
