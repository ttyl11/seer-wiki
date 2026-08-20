# 格挡I

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物随机池——[群星的礼赠](/relics/starter/elemental_core.md)随机能力池赋予怪物（遭遇时按概率自带，概率随探索房间数增长）

<img src="/images/powers/block_one_power.png" alt="格挡I" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益
- **叠加方式**: 单例（不可叠加）
- **可见**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| 固定减伤 | 2 |

## 描述

减少受到的伤害<span style="color:#3aa675;font-weight:600">2</span>点。

## 详细机制

- **逐次减伤**：`ModifyDamageAdditive` 钩子——持有者每次受到**常规攻击伤害**（`IsPoweredAttack`：受[力量](/powers/strength_power.md)/[易伤](/powers/vulnerable_power.md)影响的攻击）时，伤害量直接 <span style="color:#3aa675;font-weight:600">-2</span>，再进格挡结算。
- **固定值不可叠加**：单例能力，减伤量取自固定常量（不随施加层数变化）——重复施加不会变成 -4/-6，永远每次攻击 -<span style="color:#3aa675;font-weight:600">2</span>。
- **只管常规攻击**：[固定伤害](/powers/fixed_damage_power.md)、[烧伤](/powers/burn_power.md)等非攻击伤害**完全无视**此减伤——与[铁壁](/powers/wall_one_power.md)（门槛免疫）不同，这是数值直减，任何大小的攻击都被砍 2 点。

## 小贴士

- **低费小攻击最亏**：1~3 伤的攻击牌打它几乎白打（-2 直接吃掉大半）——优先用中高伤害攻击或增伤后的输出，让 -2 的相对损失最小化。
- **多段攻击每段都挨刀**：3 段攻击被减 3 次（共 -6），比单段等额伤害亏得多——打格挡系怪物时单段大伤优先于多段小伤。
- **绕过手段**：[固定伤害](/powers/fixed_damage_power.md)与 DoT 不吃这个减伤，是打格挡怪的理论最优通道；同理它也不影响你的[格挡](/mechanics/block.md)收益，正常防御即可。
- **系列对比**：[格挡II](/powers/block_two_power.md)/[格挡III](/powers/block_three_power.md) 为同机制更高数值（4/6 点），III 级时多段小伤流基本报废。

## 源码

- `SeerBlockOnePower.cs`（`ModifyDamageAdditive`，仅 `IsPoweredAttack` 时返回 `-2`，取 `DynamicVars["Amount"]` 固定常量）
