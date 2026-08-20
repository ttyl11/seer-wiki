# 驱散

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物随机池——[群星的礼赠](/relics/starter/elemental_core.md)随机能力池赋予怪物（遭遇时按概率自带，概率随探索房间数增长）

<img src="/images/powers/dispel_power.png" alt="驱散" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 单例（不可叠加）
- **可见**: 是

## 描述

在对手回合开始时，消除其<span style="color:#d4a017;font-weight:600">力量</span>、<span style="color:#d4a017;font-weight:600">命中</span>、<span style="color:#d4a017;font-weight:600">速度</span>、<span style="color:#d4a017;font-weight:600">防御</span>的提升。

## 详细机制

- **每回合例行清洗**：`AfterSideTurnStart`（玩家回合开始时）——遍历玩家方全体，**移除**[力量](/powers/strength_power.md)/[命中](/powers/accuracy_power.md)/[速度](/powers/speed_power.md)/[防御](/powers/defense_power.md)中**正数值**的部分（`Amount > 0` 才删）。
- **负数保留**：只清增益不清减益——你身上的负命中/负防御不会被"顺便"洗掉。
- **全量移除而非递减**：删的是整个 Power（不是 -1），20 层力量在驱散面前一回合清零。
- **不是一次性**：每个玩家回合开始都执行，持有者活着就持续生效。

## 小贴士

- **力量流的死敌**：靠叠[力量](/powers/strength_power.md)滚雪球的构筑遇到驱散怪基本残废——你叠的每一点正四维都在下回合开局归零，投入全部白费。
- **当回合内闭环是活路**：驱散在回合**开始**触发——同一回合内"加力量 → 打攻击 → 收益"的顺序依然成立，只是 buff 无法跨回合留存：把加成牌和输出牌塞进同一回合打出。
- **不吃四维的体系无视它**：[烧伤](/powers/burn_power.md)/[中毒](/powers/poison_power.md)等 DoT、[固定伤害](/powers/fixed_damage_power.md)、[缔结印记](/powers/knot_mark_power.md)类独立乘区增伤完全不经过四维——驱散怪对这类构筑等于白板。
- **先杀后叠**：集火优先级参考[幽滞](/powers/dark_stagnation_power.md)——处理掉持有者后再慢慢叠 buff 最稳。

## 源码

- `SeerDispelPower.cs`（`AfterSideTurnStart` + `GetOpponentsOf` 遍历，`SafeRemovePower` 移除正数值四维 Power）
