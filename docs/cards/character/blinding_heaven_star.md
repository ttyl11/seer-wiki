# 灼目天星

<img src="/images/cards/blinding_heaven_star.png" alt="灼目天星" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 5
- **能量消耗**: 1
- **类型**: 技能
- **稀有度**: 普通
- **目标**: 自身
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 免疫回合 | 2 | 3 |
| 焚烬层数 | 1 | 1 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 获得<span style="color:#3aa675;font-weight:600">2</span>回合[<span style="color:#d4a017;font-weight:600">异常免疫</span>](/powers/debuff_immune_power.md)，对所有敌人[<span style="color:#d4a017;font-weight:600">焚烬</span>](/powers/ash_power.md)<span style="color:#3aa675;font-weight:600">1</span>回合。<br/>[<span style="color:#d4a017;font-weight:600">唱词：霍尔希德</span>](/powers/chant_khorshid_power.md)。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 获得<span style="color:#3aa675;font-weight:600">3</span>回合[<span style="color:#d4a017;font-weight:600">异常免疫</span>](/powers/debuff_immune_power.md)，对所有敌人[<span style="color:#d4a017;font-weight:600">焚烬</span>](/powers/ash_power.md)<span style="color:#3aa675;font-weight:600">1</span>回合。<br/>[<span style="color:#d4a017;font-weight:600">唱词：霍尔希德</span>](/powers/chant_khorshid_power.md)。

## 小贴士

- **三合一的复合卡**：一次打出同时做三件事——自身 2 回合异常免疫（硬控防护）、全体敌人 1 层焚烬（削弱敌人攻击+转化烧伤）、自身 1 层唱词：霍尔希德（PP 恢复触发器）。三件事相互独立，不依赖彼此触发。
- **焚烬的真实价值**：焚烬让敌人**造成的攻击伤害降低 20%**（乘算减攻），**且敌人回合结束时把 1 层焚烬转化为 2 层[烧伤](/powers/burn_power.md)**——烧伤会让敌人每回合自伤 3 点（不可格挡）并减攻 1 点。所以 1 层焚烬 ≈ 敌人 1 回合攻击 -20% + 之后 2 层烧伤的持续收益，对多敌人遭遇战性价比很高。
- **唱词：霍尔希德是 PP 引擎**：霍尔希德的触发条件是"造成攻击伤害后，且自身不为在场 HP 最高的单位"——实战中敌人血量通常高于你，所以基本等于"打出攻击牌就回 PP"。**恢复量等于唱词层数**，且唱词不随回合衰减，是常驻触发器；恢复范围覆盖手牌/抽牌堆/弃牌堆中所有 PP 未满的 PP 牌。配合多段攻击牌可以一次恢复多张 PP 牌的 PP，是 PP 循环的核心。注意满血站撸时（自己是全场最高 HP）不会触发——血线压着打反而 PP 循环更顺。
- **"异常免疫"只挡异常状态，不挡原版减益**：免疫范围和[亢龙有悔](./arrogant_dragon_repents.md)的反弹一样只认 25 种异常状态——原版的虚弱、易伤、缩小等普通减益**不在防护范围内**，会被正常施加。
- **免疫的"2 回合"数的是敌方回合**：免疫层数在**对方回合结束**时才递减——敌方施放异常的时机都在敌方回合，所以 2 层恰好完整覆盖敌方接下来的 2 个回合，本方回合打出不打折。
- **升级只加免疫回合**：焚烬层数和唱词层数都不变。2→3 回合免疫，多覆盖一个敌方回合的异常波次，对依赖异常控制的精英/Boss 战价值明显。
- **性价比**：1 费合理——三合一效果（群体减伤+自身免疫+PP 引擎），不占能耗便于百搭。

## 相关能力

- [异常免疫](/powers/debuff_immune_power.md)（核心授予能力）
- [唱词：霍尔希德](/powers/chant_khorshid_power.md)（核心授予能力）
- [焚烬](/powers/ash_power.md)（对敌人施加的异常状态）

## 源码

- `SeerBlindingHeavenStar.cs`
