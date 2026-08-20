# 雷盖之交

<img src="/images/cards/thunder_gaia_bond.png" alt="雷盖之交" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 事件牌
- **最大PP**: 1
- **能量消耗**: 0
- **类型**: 能力
- **稀有度**: 衍生
- **目标**: 无
- **可升级**: 是（1 级）
- **来源**: 事件「决战回响：混沌深渊的宿命对决」选择「援助战神联盟」

### 数值参数

| 参数 | 数值 |
|---|---|
| PP | 1 |
| 最大PP | 1 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 每打出一张攻击牌，[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)加入<span style="color:#3aa675;font-weight:600">1</span>张赛尔技能牌；每打出一张技能牌，[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)加入<span style="color:#3aa675;font-weight:600">1</span>张赛尔攻击牌。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 每打出一张攻击牌，[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)加入<span style="color:#3aa675;font-weight:600">1</span>张赛尔技能牌；每打出一张技能牌，[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)加入<span style="color:#3aa675;font-weight:600">1</span>张赛尔攻击牌。（获得[<span style="color:#d4a017;font-weight:600">固有</span>](/mechanics/innate.md)与[<span style="color:#d4a017;font-weight:600">保留</span>](/mechanics/retain.md)）

## 小贴士

- **🔑 攻击与技能互为永动机**：打出后自身获得 <span style="color:#3aa675;font-weight:600">1</span> 层[雷霆盖亚之契](/powers/thunder_gaia_bond_power.md)（增益，持续整场）。打出攻击牌 → 手牌补 <span style="color:#3aa675;font-weight:600">1</span> 张技能牌；打出这张技能牌 → 又补 <span style="color:#3aa675;font-weight:600">1</span> 张攻击牌——只要还有能量，手牌永远打不空，每打一张回一张，长战斗里收益指数级放大。
- **生成的牌来自整个赛尔卡池，不是你的牌组**：每次生成是从**全部已解锁的赛尔角色牌**里随机抽一张对应类型的牌加入手牌——你构筑里没拿过的牌也能白嫖到手，甚至能摸到高费强牌。缺点是无法控制生成内容，关键回合可能只来一张用不上的牌。
- **能力牌不触发生成**：只有攻击牌和技能牌参与循环，打出能力牌（包括雷盖之交自己）不会生成新牌。想维持循环，手里至少要保留一张攻击或技能牌作为"火种"。
- **能量是唯一的瓶颈**：生成的牌正常消耗能量打出——契约本身不提供能量。0 费牌、能量引擎（[能量供给](/cards/character/energy_supply.md)类）越多，永动机转得越快；能量见底时契约只是干转。
- **PP 1/1，一场只能启动一次**：打出即获得整场契约，重复拿这张牌没有额外收益；没打出去之前它只是占 <span style="color:#3aa675;font-weight:600">1</span> 个手牌位的死牌。
- **升级价值：固有 + 保留**：升级后获得[固有](/mechanics/innate.md)（开局必定在手，第一回合就能 <span style="color:#3aa675;font-weight:600">0</span> 费启动永动机）和[保留](/mechanics/retain.md)（回合结束不弃，留到需要的回合再打）。

## 相关能力

- [雷霆盖亚之契](/powers/thunder_gaia_bond_power.md)（打出攻击/技能牌时随机将另一类型的牌加入手牌）

## 源码

- `SeerThunderGaiaBond.cs`
- `SeerThunderGaiaBondPower.cs`
