# 进化

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物随机池——[群星的礼赠](/relics/starter/elemental_core.md)随机能力池赋予怪物（遭遇时按概率自带，概率随探索房间数增长）

<img src="/images/powers/evolve_power.png" alt="进化" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 单例（不可叠加）
- **可见**: 是

## 描述

每造成一次伤害，自身<span style="color:#d4a017;font-weight:600">力量</span>、<span style="color:#d4a017;font-weight:600">命中</span>、<span style="color:#d4a017;font-weight:600">速度</span>、<span style="color:#d4a017;font-weight:600">防御</span>各+1。

## 详细机制

- **造成伤害即成长**：`AfterDamageGiven` 钩子——持有者（怪物）每次对玩家造成伤害（`TotalDamage > 0`，**含被[格挡](/mechanics/block.md)的部分**）后，自身[力量](/powers/strength_power.md)/[命中](/powers/accuracy_power.md)/[速度](/powers/speed_power.md)/[防御](/powers/defense_power.md)各 +1。
- **不过滤伤害类型**：无 `IsPoweredAttack` 过滤——它的攻击、固伤类效果、DoT（若有）全部喂进化。
- **每次伤害独立结算**：它的多段攻击每段各 +1——3 段攻击一回合四维各 +3。
- **格挡挡不住成长**：判定基数是格挡前伤害，防御流只能保血、拦不住它变强。

## 小贴士

- **攻防一体雪球**：力量加攻、防御加坦、命中防落空——进化怪每动一次全面变强，4~5 回合后从杂兵膨胀成小 Boss，**越早处理代价越小**。
- **格挡流的两难**：挡住攻击不掉血但它照样+1；不挡则血和它的成长一起崩——真正解法是[眩晕](/mechanics/stun.md)/无效化意图（打不出伤害=不进化）或速杀。
- **与[汲血](/powers/blood_suck_one_power.md)组合加倍恶心**：打你回血 + 打你变强，双重奖励它输出——这种词缀组合的怪请当作最高集火优先级。

## 源码

- `SeerEvolvePower.cs`（`AfterDamageGiven`，`dealer == Owner && TotalDamage > 0` 时对自身施加四维 Power 各 +1）
