# 荒烬涂天

<img src="/images/cards/desolate_ash_sky.png" alt="荒烬涂天" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 1
- **能量消耗**: 0
- **类型**: 能力
- **稀有度**: 稀有
- **目标**: 自身
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 先制回合 | 99 | 99 |
| 先制数值 | 2 | 2 |
| 烧伤层数 | 1 | 1 |
| 焚烬层数 | 1 | 1 |
| 保留 | 否 | 是 |
| PP | 1 | 1 |
| 最大PP | 1 | 1 |

## 描述

PP: 1/1 [<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)每有一张牌耗能<span style="color:#3aa675;font-weight:600">+1</span>。<span style="color:#3aa675;font-weight:600">99</span>回合内每回合[<span style="color:#d4a017;font-weight:600">先制</span>](/powers/first_strike_power.md)+<span style="color:#3aa675;font-weight:600">2</span>。每回合对手获得<span style="color:#3aa675;font-weight:600">1</span>层[<span style="color:#9b59b6;font-weight:600">烧伤</span>](/powers/burn_power.md)和[<span style="color:#9b59b6;font-weight:600">焚烬</span>](/powers/ash_power.md)。

## 升级后

[<span style="color:#d4a017;font-weight:600">保留</span>](/mechanics/retain.md)。PP: 1/1 [<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)每有一张牌耗能<span style="color:#3aa675;font-weight:600">+1</span>。<span style="color:#3aa675;font-weight:600">99</span>回合内每回合[<span style="color:#d4a017;font-weight:600">先制</span>](/powers/first_strike_power.md)+<span style="color:#3aa675;font-weight:600">2</span>。每回合对手获得<span style="color:#3aa675;font-weight:600">1</span>层[<span style="color:#9b59b6;font-weight:600">烧伤</span>](/powers/burn_power.md)和[<span style="color:#9b59b6;font-weight:600">焚烬</span>](/powers/ash_power.md)。

## 小贴士

- **动态费用——手牌越多越贵（含它自己）**：实际耗能 = 基础 0 + 当前手牌张数（打出结算时它自己还在手牌里，也计入）。手牌 5 张时耗能 5，手牌 10 张时耗能 10。这意味着**最佳打出时机是手牌最少时**——回合末只剩 1-2 张时只需 1-2 费。
- **荒灰天**（[<span style="color:#d4a017;font-weight:600">查看能力页</span>](/powers/desolate_ash_sky_power.md)，mod 能力）：打出时对自身施加 <span style="color:#3aa675;font-weight:600">99</span> 层[荒灰天](/powers/desolate_ash_sky_power.md)（增益，可叠加）。每个**己方回合开始**时触发：
 - 获得 <span style="color:#3aa675;font-weight:600">2</span> 层[先制](/powers/first_strike_power.md)（mod 能力）：每层使下一张牌耗能 -1，打出牌后移除所有先制。
 - 对所有敌人施加 <span style="color:#3aa675;font-weight:600">1</span> 层[烧伤](/powers/burn_power.md)和 <span style="color:#3aa675;font-weight:600">1</span> 层[焚烬](/powers/ash_power.md)。
 - 效果结算完当回合开始就 -1 层——回合中途打出，从**下一个自己的回合**开始逐回合触发，99 层 = 99 次触发。
- **99 回合 ≈ 整场战斗**：99 层持续 99 回合，实际上几乎所有战斗都不会打到 99 回合，所以这张牌等于**整场战斗永久生效**——每回合先制 +2 + 全体敌人烧伤 + 焚烬。
- **先制的价值**：每回合获得 2 层先制，每层让下一张牌耗能 -1。意味着每回合第一张牌可以减 2 费——等于每回合免费打出一张 2 费牌。配合高费卡牌收益极高。
- **烧伤+焚烬的双重 DOT**：每回合给所有敌人 1 层[烧伤](/powers/burn_power.md) + 1 层[焚烬](/powers/ash_power.md)，两者咬合：
 - **烧伤**：敌方回合开始时固定自伤 3 点（不可格挡）+ 造成的攻击伤害固定 -1，结算后 -1 层——层数即持续回合数，越叠越持久、越打越软。
 - **焚烬**：持有者**造成的攻击伤害 -20%**（乘算，注意是削弱其输出而非保护它）；敌方回合结束时每层焚烬再转化出 2 层烧伤后自身 -1 层——焚烬是"延迟放大器"，1 层焚烬 = 下回合起多 2 层烧伤在滚。

 多回合累积后，敌人每回合自动掉大量血且攻击力骤降，是纯防御牌组磨死精英/Boss 的核心引擎。
- **本地化术语说明**：荒灰天能力的本地化描述中作"灰烬"，实际指[焚烬](/powers/ash_power.md)能力。
- **配合建议**：配合低手牌时打出——如回合末手牌剩 1-2 张时只需 1-2 费。先制 +2 配合高费攻击牌（如 3-4 费的大伤害牌）等于免费打出。烧伤 + 焚烬配合[灼目天星](./blinding_heaven_star.md)（焚烧流）可以快速叠加 DOT。
- **升级的价值**：获得[保留](/mechanics/retain.md)关键词，回合结束时不被弃置。这至关重要——让你可以**等到手牌最少时再打出**，而不是被迫在手牌多时支付高昂费用。升级优先级极高。
- **性价比**：基础 0 费但动态加价，打出成本取决于时机。整场战斗每回合先制 +2 + 全体 DOT 的效果极强，只要能在低费时打出就超值。

## 相关能力

- [荒灰天](/powers/desolate_ash_sky_power.md)（打出时对自身施加 99 层）
- [先制](/powers/first_strike_power.md)（每回合获得 2 层）
- [烧伤](/powers/burn_power.md)（每回合对敌人施加 1 层）
- [焚烬](/powers/ash_power.md)（每回合对敌人施加 1 层）

## 相关机制

- [保留](/mechanics/retain.md)（升级后获得的关键词）

## 源码

- `SeerDesolateAshSky.cs`
- `SeerDesolateAshSkyPower.cs`（荒灰天能力逻辑）
