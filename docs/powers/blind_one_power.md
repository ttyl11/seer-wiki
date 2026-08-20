# 致盲I

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物随机池——[群星的礼赠](/relics/starter/elemental_core.md)随机能力池赋予怪物（遭遇时按概率自带，概率随探索房间数增长）

<img src="/images/powers/blind_one_power.png" alt="致盲I" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 单例（不可叠加，Amount 恒为 1）
- **可见**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| 层数 | 1 |

## 描述

在你的回合开始时，对面所有人<span style="color:#d4a017;font-weight:600">命中</span>-<span style="color:#3aa675;font-weight:600">1</span>。

## 详细机制

- **回合开始触发**：持有者（怪物）自己回合开始时（`AfterSideTurnStart`），给**玩家方全体**施加[命中](/powers/accuracy_power.md) -<span style="color:#3aa675;font-weight:600">1</span>（负层数命中）。
- **落空判定**：负命中每层提供 <span style="color:#3aa675;font-weight:600">5%</span> 未命中概率——命中 -1 时每次攻击 <span style="color:#3aa675;font-weight:600">5%</span> 概率整刀落空（伤害 ×0，`ModifyDamageMultiplicative` 归 0），且随回合持续累积。
- **多段攻击共享判定**：落空掷骰在 `BeforeAttack`（整个攻击命令前一次）——"攻击 ×3"要么**三段全部落空**、要么**全部命中**，不是每段单独判定。
- **只影响常规攻击**（`IsPoweredAttack`）——[固定伤害](/powers/fixed_damage_power.md)、DoT 不吃命中判定，负命中再多也照跳。
- **持续恶化**：不自然消退，拖到后期命中 -5 时每次攻击 25% 落空。

## 小贴士

- **命中持续流失**：每过一个怪物回合全体玩家命中 -1——长战斗中输出期望不断下滑，速战速决或用命中加成（如[神谕](/orbs/oracle_orb.md)球、命中类卡牌）对冲。
- **负命中是 Debuff 可净化**：命中在负数时类型自动变为减益——持有净化自身负面效果的卡牌/遗物可以定期清掉累积的负命中，重置落空率。
- **不吃命中的伤害是安全区**：[固定伤害](/powers/fixed_damage_power.md)、[烧伤](/powers/burn_power.md)等 DoT 完全绕过落空判定——命中被叠得很深时切换 DoT 输出止损。

## 源码

- `SeerBlindOnePower.cs`（`AfterSideTurnStart` 对所有对手 `Apply<SeerAccuracyPower>` -1）
- 落空判定：`SeerAccuracyPower.cs:56-80`（`BeforeAttack` 掷骰 `5% × |负层数|`）、`:100-120`（miss 时乘区归 0）、`:22`（Amount < 0 时类型为 Debuff）
- 随机池配置：`SeerElementalCore.cs:113`（`0.0001/房`）
