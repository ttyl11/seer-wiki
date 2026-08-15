# 终末·赫星黎明（攻击）

<img src="/images/cards/final_star_dawn_attack.png" alt="终末·赫星黎明（攻击）" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 衍生牌
- **最大PP**: 1
- **能量消耗**: 0
- **类型**: 攻击
- **稀有度**: 衍生
- **目标**: 所有敌人
- **可升级**: 是
- **获取途径**: 仅 [奥菲利娅](/relics/legendary/ophelia.md)整局游戏首次死亡复活后，本场战斗结束时加入牌组（不进卡池，无法通过奖励/商店获取）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| PP | 1 | 1 |
| 最大PP | 1 | 1 |
| 基础伤害（对所有敌人） | 20 | 20 |
| 基础格挡（自身） | 20 | 20 |
| 获得支援层数 | 3 | 5 |
| 支援效果翻倍次数 | 3 | 5 |

### 敌人数换算表

| 存活敌人数 | 伤害（每个敌人） | 自身格挡 |
|---|---|---|
| 1 | 20 | 20 |
| 2 | 40 | 40 |
| 3 | 80 | 80 |
| 4 | 160 | 160 |
| 5 | 320 | 320 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 对所有敌人造成 <span style="color:#3aa675;font-weight:600">20</span> 点伤害，附加 <span style="color:#3aa675;font-weight:600">20</span> 点格挡。每有 <span style="color:#3aa675;font-weight:600">1</span> 个敌人，上述数值翻倍。<br/>获得 <span style="color:#3aa675;font-weight:600">3</span> 层[<span style="color:#9b59b6;font-weight:600">支援</span>](/powers/support_power.md)，下 <span style="color:#3aa675;font-weight:600">3</span> 次[<span style="color:#9b59b6;font-weight:600">支援效果翻倍</span>](/powers/support_double_power.md)。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 对所有敌人造成 <span style="color:#3aa675;font-weight:600">20</span> 点伤害，附加 <span style="color:#3aa675;font-weight:600">20</span> 点格挡。每有 <span style="color:#3aa675;font-weight:600">1</span> 个敌人，上述数值翻倍。<br/>获得 <span style="color:#3aa675;font-weight:600">5</span> 层[<span style="color:#9b59b6;font-weight:600">支援</span>](/powers/support_power.md)，下 <span style="color:#3aa675;font-weight:600">5</span> 次[<span style="color:#9b59b6;font-weight:600">支援效果翻倍</span>](/powers/support_double_power.md)。

## 详细机制

- **指数翻倍公式**：伤害与格挡 = 基础 20 × 2^(敌人数-1)。**首个敌人是基准**（不吃翻倍），之后每多 1 个敌人翻 1 倍——1 敌 20、2 敌 40、3 敌 80、4 敌 160、5 敌 320。敌人数按**打出瞬间**的存活敌人计算，打出到结算中途死掉的怪不影响本次数值。
- **伤害与格挡永远是同一个数**：两者用同一个翻倍系数——3 个敌人时对每个敌人造成 80 伤害，同时自己拿 80 格挡。攻击就是防御，防御就是攻击。
- **AoE 全体打击**：对**所有敌人**各造成全额伤害（不是分摊），单体伤害就是总伤害的完全复制品。
- **支援 + 翻倍无条件发放**：获得 3 层支援和 3 次支援效果翻倍，**不看当前支援状态**——与技能版的"无支援补层/有支援翻倍"二选一分支不同，这张牌两个都给。
- **升级只加支援数值**：支援 3→5 层、翻倍 3→5 次，伤害/格挡的 20 基础值与翻倍规则不变。
- **永久资产**：加入牌组后每场战斗都可能抽到，0 费不占能量。

## 小贴士

- **多怪场就是核弹**：数值随敌人数**指数**增长——普通遭遇战（3 怪）每个敌人吃 80，4 怪群每个 160，5 怪大群每个 320。同样是 0 费牌，清场能力和单体场完全是两张牌：Boss 单体战退化为基础 20 伤 + 20 挡 + 3 支援 + 3 翻倍，保底不亏但不出彩。
- **攻防一体的翻倍结构**：格挡跟着伤害同步指数涨——3 怪场 80 格挡基本抵消一轮普攻，5 怪场 320 格挡直接原地站桩。怪越多越危险？这张牌的答案是"怪越多我越硬"。
- **和技能版是完美互补**：这张**无条件**给 3 层支援 + 3 次翻倍——先打这张，支援从 0 变 3，再打[技能版](/cards/character/final_star_dawn_skill.md)时必定走"有支援"的翻倍分支，翻倍叠到 6 次（升级后 5+5=10 次）。两张同名牌的组合技：攻击版点火、技能版增压。
- **翻倍层数和支援层数是两条油路**：翻倍不会过期，支援烧完翻倍还在，补层后继续吃。这张牌自己就是补层手段之一——0 费打出白送 3 层支援，支援引擎烧干了就来一张。
- **升级的收益算账**：3→5 层支援 = 多 2 次支援触发机会（多 2 层晨星 + 4 层庇护），翻倍 3→5 = 多 2 次双倍产出。支援体系成型后升级收益稳定；只当 AoE 输出用的话升级优先级可以放后。
- **复活时机的战略价值**：这张牌是奥菲利娅首次死亡的复活奖励——多怪多的地图段落（遭遇战密集层）拿到它价值最高。死亡无法规划，但拿到之后请把它留给怪堆，Boss 决战它就是张 0 费填缝。
- **性价比**：0 费 + 指数 AoE + 同值格挡 + 白送支援/翻倍，唯一门槛是"死一次"——而奥菲利娅的复活本来就是整局白送的。多怪场它是全场最优牌，单体场是合格的 0 费填充。

## 相关能力

- [支援](/powers/support_power.md)（打出即获得 3/5 层）
- [支援效果翻倍](/powers/support_double_power.md)（打出即施加 3/5 次）
- [命运晨星](/powers/fate_morning_star_power.md)（支援触发的最终产出）

## 相关遗物

- [奥菲利娅](/relics/legendary/ophelia.md)（唯一获取来源：首次死亡复活后赠送）

## 相关卡牌

- [终末·赫星黎明（技能）](/cards/character/final_star_dawn_skill.md)（同名稀有牌，卡池获取，补层/翻倍开关，与本牌构成组合技）

## 源码

- `SeerFinalStarDawnAttack.cs`
