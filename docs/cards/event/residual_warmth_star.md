# 余温之辰

<img src="/images/cards/residual_warmth_star.png" alt="余温之辰" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 事件牌
- **最大PP**: 10
- **能量消耗**: X
- **类型**: 技能
- **稀有度**: 衍生
- **目标**: 无
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 每 X 生成温数量 | 2 | 3 |
| PP | 10 | 10 |
| 最大PP | 10 | 10 |

## 描述

PP: 10/10 回合开始时若在[<span style="color:#d4a017;font-weight:600">抽牌堆</span>](/mechanics/draw_pile.md)则自动打出。将<span style="color:#3aa675;font-weight:600">2</span>X张「温」加入[<span style="color:#d4a017;font-weight:600">消耗牌堆</span>](/mechanics/exhaust_pile.md)。牌堆洗牌时，[<span style="color:#d4a017;font-weight:600">消耗</span>](/mechanics/exhaust.md)此牌，将所有「温」变为「辰」并移入[<span style="color:#d4a017;font-weight:600">抽牌堆</span>](/mechanics/draw_pile.md)。

## 详细机制

- **自动打出条件**：回合开始时，此牌若在[抽牌堆](/mechanics/draw_pile.md)中则自动打出（在手牌/弃牌堆时不触发）。自动打出同样消耗 X 点能量——X 取**当前剩余能量**，能量越多温越多。
- **温的即时收益**：每张[温](/cards/status/warmth.md)进[消耗堆](/mechanics/exhaust_pile.md)时立即提供 <span style="color:#3aa675;font-weight:600">4</span> 点[格挡](/mechanics/block.md)。X 耗能下立即获得 8X 格挡（升级后 12X）。
- **洗牌转化**：牌堆洗牌时此牌自身被[消耗](/mechanics/exhaust.md)，所有温（含此前囤积在消耗堆里的全部温）转化为[辰](/cards/status/morning_star.md)并移入抽牌堆。辰被抽到时每张提供 <span style="color:#3aa675;font-weight:600">2</span> 辉星 + <span style="color:#3aa675;font-weight:600">1</span> 能量 + <span style="color:#3aa675;font-weight:600">1</span> 张储君卡。
- **0 能量不出温**：能量为 0 时自动打出不产生任何温（但也不扣能量）。

## 小贴士

- **一张牌两段收益**：打出瞬间 = 防御（8X/12X 格挡），洗牌之后 = 资源（每温 2 辉星 + 1 能量 + 1 张储君卡）。先保命后发育，全程无废点。
- **算总账（X=3，升级前）**：花 3 能量 → 立即 <span style="color:#3aa675;font-weight:600">24</span> 格挡；洗牌后 6 张辰陆续抽到 → 共 <span style="color:#3aa675;font-weight:600">12</span> 辉星 + <span style="color:#3aa675;font-weight:600">6</span> 能量 + <span style="color:#3aa675;font-weight:600">6</span> 张储君卡。能量上净赚一倍还倒拿一堆资源——升级后（3X=9 温）各项再乘 1.5。
- **能量越多越赚，但要留操作费**：X 吃的是打出瞬间的**全部剩余能量**。自动打发出现在回合开始（抽牌后、出牌前），若此时能量满格，整回合能量都被吞掉——务必保证手里还有低费牌可打，或干脆靠遗物白送的能量（见下）。
- **配套遗物"余烬星核"是天生一对**：[余烬星核](/relics/ancient/tezcatara_warmth_shield.md)拾起时给这张卡，且每场战斗第 1 回合白送 2 点能量。注意时序：自动打出（Power 钩子）先结算、遗物补能量（Relic 钩子）后结算——**X 只吃基础能量，白送的 2 点是自动打出后留给你的操作费**，正好解决"能量被吞光没牌费打"的窘境。
- **温会被其它效果提前抽走吗**：温躺在消耗堆里，常规抽牌摸不到它——只有洗牌事件会把它转化为辰。消耗堆里的温是"定期存款"，到期（洗牌）自动转为活期（辰进抽牌堆）。
- **多张余温之辰叠加**：PP: 10/10。注意自动打出只认**抽牌堆里**的副本——打出后进弃牌堆的那张不会再触发（弃牌堆回抽牌堆必经洗牌，而洗牌时本体会被直接消耗离场）。单张实际每场只自动打出 1 次；拿到多张（如复制）时，后续回合抽牌堆里剩余的副本可再次自动打出。
- **升级优先级高**：每 X 温量 2→3（+50%），所有下游收益（格挡、辉星、能量、储君卡）等比放大。

## 相关卡牌

- [温](/cards/status/warmth.md)（打出生成，进消耗堆时给格挡）
- [辰](/cards/status/morning_star.md)（洗牌转化产物，抽到时三重收益）

## 相关遗物

- [余烬星核](/relics/ancient/tezcatara_warmth_shield.md)（唯一常规获取来源，且每场开始补 2 能量）

## 相关机制

- [抽牌堆](/mechanics/draw_pile.md)：自动打出判定位置、「辰」移入目标
- [消耗牌堆](/mechanics/exhaust_pile.md)：「温」存放位置
- [消耗](/mechanics/exhaust.md)：洗牌时消耗此牌
- [能量](/mechanics/energy.md)：X 耗能，自动打出时失去
- [格挡](/mechanics/block.md)：每张温立即提供 4 点

## 源码

- `SeerResidualWarmthStar.cs`
- `SeerResidualWarmthStarAutoPlayPower.cs`
