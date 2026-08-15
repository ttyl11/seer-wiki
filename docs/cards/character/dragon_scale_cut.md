# 龙鳞切割

<img src="/images/cards/dragon_scale_cut.png" alt="龙鳞切割" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 10
- **能量消耗**: 2
- **类型**: 攻击
- **稀有度**: 普通
- **目标**: 随机敌方
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 伤害 | 2 | 2 |
| 命中次数 | 2 | 3 |
| 防御减少 | 1 | 1 |
| 重放次数 | 1 | 1 |
| PP | 10 | 10 |
| 最大PP | 10 | 10 |

## 描述

PP: 10/10 对随机敌人造成<span style="color:#3aa675;font-weight:600">2</span>点伤害<span style="color:#3aa675;font-weight:600">2</span>次，每次令其[<span style="color:#d4a017;font-weight:600">防御</span>](/powers/defense_power.md)<span style="color:#3aa675;font-weight:600">-1</span>。[<span style="color:#d4a017;font-weight:600">重放</span>](/mechanics/replay.md)<span style="color:#3aa675;font-weight:600">1</span>。

## 升级后

PP: 10/10 对随机敌人造成<span style="color:#3aa675;font-weight:600">2</span>点伤害<span style="color:#3aa675;font-weight:600">3</span>次，每次令其[<span style="color:#d4a017;font-weight:600">防御</span>](/powers/defense_power.md)<span style="color:#3aa675;font-weight:600">-1</span>。[<span style="color:#d4a017;font-weight:600">重放</span>](/mechanics/replay.md)<span style="color:#3aa675;font-weight:600">1</span>。

## 小贴士

- **核心定位**：2 费多段随机攻击 + 防御削弱。直接伤害偏低（每次命中仅 2 点），但通过多次命中叠加防御削弱，为后续攻击牌铺路。是一张"起手削防"的功能型攻击牌，价值在于削弱而非输出。
- **重放机制（买一送一）**：[重放](/mechanics/replay.md) 1 意味着这张牌会**自动额外打出一次**，不消耗额外能量。升级前 2 次命中 × 2 次打出 = **4 次命中**；升级后 3 次命中 × 2 次打出 = **6 次命中**。重放让这张牌的削防效果翻倍，是性价比的关键。
- **防御削弱联动（核心价值）**：每次命中令目标[防御](/powers/defense_power.md) -1（施加负数层数）。防御每层减少 1 点受到的攻击伤害，所以 -N 防御意味着目标受到的攻击伤害 +N。升级后总共 -6 防御，相当于**后续每张攻击牌 +6 伤害**——这才是这张牌的真正价值。直接伤害 12 点只是附属，削防后的联动收益才是大头。
- **随机目标**：每次命中从所有可命中敌人中随机选一个目标，多人模式两端一致。多敌人时伤害和削防分散到不同目标，单敌人时全部集中——**单敌人 Boss 战收益最大**，6 点防御削弱全堆在一个目标上。
- **配合建议**：
 - **先手削防，后手输出**：先打龙鳞切割叠削防，再用高伤攻击牌（如[龙王波](./dragon_king_wave.md)）输出，每张牌都吃 +6 伤害加成。
 - **配合受击触发类减益**：每次命中都是一次独立的攻击伤害结算，能触发目标的[流血](/powers/bleed_power.md)（受击时额外获层）、[易燃](/powers/flammable_power.md)（受击时获烧伤）等"受击触发"效果——多段命中让这些减益快速叠层。
 - 配合多段攻击牌可以充分利用削防——多段攻击每段都吃防御削弱加成。
 - 单敌人遭遇战中优先使用，集中削防收益最高。
- **升级的关键性**：命中次数从 <span style="color:#3aa675;font-weight:600">2</span> 提升至 <span style="color:#3aa675;font-weight:600">3</span>（+1）。加上重放，总命中从 4 提升至 6（+2）。直接伤害从 8 提升至 12（+4），防御削弱从 -4 提升至 -6（+2）。升级提升中等——削防效果提升 50%，但基础削防已经够用。升级优先级中等。
- **性价比**：2 费 8 点伤害（升级后 12 点） + 4 点防御削弱（升级后 6 点），直接伤害偏低但削防价值高。普通稀有度合理——作为"削防起手"功能牌，不需要稀有标签。适合多段攻击体系和 Boss 战削防流。

## 相关能力

- [防御](/powers/defense_power.md)（每次命中令其防御 -1）

## 相关机制

- [重放](/mechanics/replay.md)（原版状态，额外打出一次）

## 源码

- `SeerDragonScaleCut.cs`
