# 致盲II

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物随机池——[群星的礼赠](/relics/starter/elemental_core.md)随机能力池赋予怪物（遭遇时按概率自带，概率随探索房间数增长）

<img src="/images/powers/blind_two_power.png" alt="致盲II" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 单例（不可叠加，Amount 恒为 1）
- **可见**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| 层数 | 2 |

## 描述

在你的回合开始时，对面所有人<span style="color:#d4a017;font-weight:600">命中</span>-<span style="color:#3aa675;font-weight:600">2</span>。

## 详细机制

- **回合开始触发**：持有者（怪物）自己回合开始时（`AfterSideTurnStart`），给**玩家方全体**施加[命中](/powers/accuracy_power.md) -<span style="color:#3aa675;font-weight:600">2</span>（负层数命中）。
- **落空判定**：负命中每层提供 <span style="color:#3aa675;font-weight:600">5%</span> 未命中概率——命中 -2 时每次攻击 <span style="color:#3aa675;font-weight:600">10%</span> 概率整刀落空（伤害 ×0），且随回合持续累积。
- **多段攻击共享判定**：落空掷骰在 `BeforeAttack`（整个攻击命令前一次）——多段攻击要么全部落空、要么全部命中。
- **只影响常规攻击**（`IsPoweredAttack`）——[固定伤害](/powers/fixed_damage_power.md)、DoT 不吃命中判定。
- **强化版**：与[致盲I](/powers/blind_one_power.md)（每回合 -1）同机制，数值翻倍。

## 小贴士

- **命中崩塌速度 ×2**：5 个怪物回合后命中 -10，每次攻击 50% 落空——输出直接腰斩，此词缀的怪必须最优先击杀。
- **对冲手段**：命中加成类卡牌/遗物每回合补正；负命中是 Debuff、可用净化自身负面效果的卡牌/遗物定期清除；或依靠不吃命中的伤害（[固定伤害](/powers/fixed_damage_power.md)、[烧伤](/powers/burn_power.md)等 DoT）绕过落空判定。

## 源码

- `SeerBlindTwoPower.cs`（`AfterSideTurnStart` 对所有对手 `Apply<SeerAccuracyPower>` -2）
- 落空判定：`SeerAccuracyPower.cs:56-80`（`BeforeAttack` 掷骰 `5% × |负层数|`）、`:100-120`（miss 时乘区归 0）
- 随机池配置：`SeerElementalCore.cs:114`（`0.000035/房`）
