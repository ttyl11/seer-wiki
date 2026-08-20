# 格挡III

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物随机池——[群星的礼赠](/relics/starter/elemental_core.md)随机能力池赋予怪物（遭遇时按概率自带，概率随探索房间数增长）

<img src="/images/powers/block_three_power.png" alt="格挡III" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益
- **叠加方式**: 单例（不可叠加）
- **可见**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| 固定减伤 | 6 |

## 描述

减少受到的伤害<span style="color:#3aa675;font-weight:600">6</span>点。

## 详细机制

- **逐次减伤**：`ModifyDamageAdditive` 钩子——持有者每次受到**常规攻击伤害**（`IsPoweredAttack`：受[力量](/powers/strength_power.md)/[易伤](/powers/vulnerable_power.md)影响的攻击）时，伤害量直接 <span style="color:#3aa675;font-weight:600">-6</span>，再进格挡结算。
- **固定值不可叠加**：单例能力，减伤量取自固定常量——重复施加不会提高减伤，永远每次攻击 -<span style="color:#3aa675;font-weight:600">6</span>。
- **只管常规攻击**：[固定伤害](/powers/fixed_damage_power.md)、[烧伤](/powers/burn_power.md)等非攻击伤害完全无视。

## 小贴士

- **多段小伤流的天敌**：每段 -6 意味着 6 伤以下攻击段全部清零——小刀流/多段流遇到格挡III 基本失业，立刻切换思路：单段 10+ 大攻击、[力量](/powers/strength_power.md)增伤把每段抬过线、或走固伤/DoT。
- **与[铁壁](/powers/wall_one_power.md)组合的绝望墙**：铁壁免小伤 + 格挡III 砍中伤，中间只剩"单段 ≥15 且够大"的窄通道——此时[易伤](/powers/vulnerable_power.md)+力量的单段爆发是唯一正解。
- **系列对比**：[格挡I](/powers/block_one_power.md)（-2）/[格挡II](/powers/block_two_power.md)（-4）机制完全相同——III 是最高档，实战等价于"你的每张攻击牌永久 -6 伤"。

## 源码

- `SeerBlockThreePower.cs`（`ModifyDamageAdditive`，仅 `IsPoweredAttack` 时返回 `-Amount`）
