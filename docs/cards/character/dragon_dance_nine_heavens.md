# 龙舞九天

<img src="/images/cards/dragon_dance_nine_heavens.png" alt="龙舞九天" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 1
- **能量消耗**: 9
- **类型**: 能力
- **稀有度**: 罕见
- **目标**: 自身
- **可升级**: 是（1 级）
- **关键词**: [虚无](/mechanics/ethereal.md)

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 覆甲 | 9 | 9 |
| 力量 | 9 | 9 |
| 防御 | 9 | 9 |
| PP | 1 | 1 |
| 最大PP | 1 | 1 |

## 描述

PP: 1/1 [<span style="color:#d4a017;font-weight:600">虚无</span>](/mechanics/ethereal.md)。获得<span style="color:#3aa675;font-weight:600">9</span>层[<span style="color:#d4a017;font-weight:600">覆甲</span>](/powers/plating_power.md)，<span style="color:#3aa675;font-weight:600">9</span>点[<span style="color:#d4a017;font-weight:600">力量</span>](/powers/strength_power.md)，<span style="color:#3aa675;font-weight:600">9</span>点[<span style="color:#d4a017;font-weight:600">防御</span>](/powers/defense_power.md)。本回合每打出一张牌，此牌耗能<span style="color:#3aa675;font-weight:600">-1</span>。

## 升级后

PP: 1/1 获得<span style="color:#3aa675;font-weight:600">9</span>层[<span style="color:#d4a017;font-weight:600">覆甲</span>](/powers/plating_power.md)，<span style="color:#3aa675;font-weight:600">9</span>点[<span style="color:#d4a017;font-weight:600">力量</span>](/powers/strength_power.md)，<span style="color:#3aa675;font-weight:600">9</span>点[<span style="color:#d4a017;font-weight:600">防御</span>](/powers/defense_power.md)。本回合每打出一张牌，此牌耗能<span style="color:#3aa675;font-weight:600">-1</span>。（移除[<span style="color:#d4a017;font-weight:600">虚无</span>](/mechanics/ethereal.md)）

## 小贴士

- **核心定位**：一张"九九九"巨型增益牌——9 层[覆甲](/powers/plating_power.md) + 9 点[力量](/powers/strength_power.md) + 9 点[防御](/powers/defense_power.md)。打出等于一波增益成型：之后每张攻击牌 +9 伤害，每次受到的攻击伤害 -9，且覆甲在 9 回合内持续供给格挡。基础 9 费看似天价，但配合动态减费机制可以 0 费打出。
- **费用随出牌递减（核心机制）**：实际耗能 = max(0, 9 - 本回合已打出的**自己的**牌数)。本回合每打出一张牌，此牌耗能 -1，最低为 0（逐张计数，实时刷新）。示例：
 - 本回合已打出 0 张牌 → 耗能 9
 - 本回合已打出 5 张牌 → 耗能 4
 - 本回合已打出 9+ 张牌 → 耗能 0
 
 这意味着**最佳打出时机是本回合末尾**——先用低费连击牌打出 9 张，最后 0 费打出此牌，等于免费获得一波巨额增益。
- **三重增益的协同**：
 - **9 层覆甲**（原版能力）：每次你的回合结束时获得**等同当前覆甲层数**的[格挡](/mechanics/block.md)，下回合开始覆甲 -1 层。9 层 = 从打出当回合结束起，连续 9 次获得递减格挡（9→8→7…→1），累计 **45 格挡**。对持久战与多波攻击防御极强。（原版多人规则下该能力按人数放大：双人游戏 ×3 = 27 层起步，累计 135 格挡。）
 - **9 点力量**（原版能力）：每层使自己造成的攻击伤害 +1，**整场持续**。9 力量 = 之后每张攻击牌 +9 伤害，多段攻击每段都吃 +9，收益爆炸。
 - **9 点防御**（mod 能力）：每层使自己**受到的攻击伤害**最终掉血 -1，**整场持续**（不随回合减少）。9 防御 = 之后每次挨打固定少掉 9 血（对固伤、DoT 无效）——与覆甲互补：覆甲供应当回合格挡，防御长期稳定减伤。
- **虚无的强约束**：带有[虚无](/mechanics/ethereal.md)关键词，回合结束时若仍在[手牌](/mechanics/hand.md)则被[消耗](/mechanics/exhaust.md)。这意味着**必须当回合打出**，不能保留到下回合。配合费用递减——你必须在本回合内打出足够多的牌让此牌减到 0 费，否则要么被迫 9 费硬打，要么被白白消耗。
- **配合建议**：
 - **低费连击流**：配合大量 0-1 费的连击牌（如[邪·龙舞未尽](./evil_dragon_unused.md)的 0 费回手）在本回合快速打出 9 张牌，最后 0 费打出此牌。
 - **能量生成**：配合[神域咒能](./divine_curse_energy.md)（塔罗遗物换能量）可以同时解决连击与能量问题（0 费打连击还能赚能量）。
 - **三重增益最大化**：打出后配合多段攻击牌（如[龙寤揭天](./dragon_awakening_sky.md)的先制多段，每段都吃 +9 力量）充分利用增伤；持久战中防御+覆甲双抗线让你几乎不掉血。
- **升级的关键性**：移除[虚无](/mechanics/ethereal.md)关键词。这是**质变升级**——升级前必须当回合打出（否则被消耗），升级后可以保留到合适的回合再爆发。让你可以在低费连击牌攒齐的回合再打出，而不是被迫每回合处理这张牌。升级优先级极高。
- **性价比**：基础 9 费看似极高，但动态减费后实际可 0 费打出。9 覆甲（45 格挡）+ 9 力量 + 9 防御的增益总量相当于 3 张普通增益牌的总和，0 费打出极其超值。能力牌常驻整场战斗，一次打出永久生效（PP 1 每场一次）。需要低费连击体系支撑才能发挥——无连击时 9 费硬打性价比一般。罕见稀有度合理。

## 相关能力

- [覆甲](/powers/plating_power.md)（获得 9 层）
- [力量](/powers/strength_power.md)（获得 9 点）
- [防御](/powers/defense_power.md)（获得 9 点）

## 相关机制

- [虚无](/mechanics/ethereal.md)（原版关键词，升级后移除）

## 源码

- `SeerDragonDanceNineHeavens.cs`
