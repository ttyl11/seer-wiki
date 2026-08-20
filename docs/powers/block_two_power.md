# 格挡II

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物随机池——[群星的礼赠](/relics/starter/elemental_core.md)随机能力池赋予怪物（遭遇时按概率自带，概率随探索房间数增长）

<img src="/images/powers/block_two_power.png" alt="格挡II" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益
- **叠加方式**: 单例（不可叠加）
- **可见**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| 固定减伤 | 4 |

## 描述

减少受到的伤害<span style="color:#3aa675;font-weight:600">4</span>点。

## 详细机制

- **逐次减伤**：`ModifyDamageAdditive` 钩子——持有者每次受到**常规攻击伤害**（`IsPoweredAttack`：受[力量](/powers/strength_power.md)/[易伤](/powers/vulnerable_power.md)影响的攻击）时，伤害量直接 <span style="color:#3aa675;font-weight:600">-4</span>，再进格挡结算。
- **固定值不可叠加**：单例能力，减伤量取自固定常量——重复施加不会提高减伤，永远每次攻击 -<span style="color:#3aa675;font-weight:600">4</span>。
- **只管常规攻击**：[固定伤害](/powers/fixed_damage_power.md)、[烧伤](/powers/burn_power.md)等非攻击伤害完全无视。

## 小贴士

- **小攻击正式报废**：≤4 伤的攻击单发清零，多段攻击每段都挨 -4——打格挡II 怪时把攻击牌筛一遍，只出手 8+ 伤的单段攻击才不亏。
- **三段攻击实测亏 12**：3×5 伤的名义 15 点输出，实际只剩 3 点——这就是"多段流被格挡系克制"的量化直觉。
- **系列对比**：[格挡I](/powers/block_one_power.md)（-2）/[格挡III](/powers/block_three_power.md)（-6），机制完全相同仅数值递增——应对思路一致：单段大伤、堆增伤、或走固伤/DoT 通道。

## 源码

- `SeerBlockTwoPower.cs`（`ModifyDamageAdditive`，仅 `IsPoweredAttack` 时返回 `-Amount`）
