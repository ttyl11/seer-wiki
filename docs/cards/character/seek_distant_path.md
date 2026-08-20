# 寻己遥途

<img src="/images/cards/seek_distant_path.png" alt="寻己遥途" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 5
- **能量消耗**: 0
- **类型**: 技能
- **稀有度**: 罕见
- **目标**: 无
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 能量获取 | 4 | 6 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 将一张[<span style="color:#9b59b6;font-weight:600">心魔</span>](/cards/status/inner_demon.md)加入[<span style="color:#d4a017;font-weight:600">抽牌堆</span>](/mechanics/draw_pile.md)。获得<span style="color:#3aa675;font-weight:600">4</span>点[<span style="color:#d4a017;font-weight:600">能量</span>](/mechanics/energy.md)。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 将一张[<span style="color:#9b59b6;font-weight:600">心魔</span>](/cards/status/inner_demon.md)加入[<span style="color:#d4a017;font-weight:600">抽牌堆</span>](/mechanics/draw_pile.md)。获得<span style="color:#3aa675;font-weight:600">6</span>点[<span style="color:#d4a017;font-weight:600">能量</span>](/mechanics/energy.md)。

## 小贴士

- **0 费换 4 能量的爆炸性收益**：打出本牌不耗能，立即获得 <span style="color:#3aa675;font-weight:600">4</span> 点[能量](/mechanics/energy.md)——当回合可用能量直接翻倍还多。配合手牌中其它高费输出牌，本回合可瞬间铺开 5+ 费的操作。PP <span style="color:#3aa675;font-weight:600">5</span> 意味着单场最多打 5 次，理论能量注入上限达 20 点。
- **心魔的真实代价**：心魔是[状态牌](/cards/status/inner_demon.md)，**抽到时必须先打出**（手牌中有心魔时其它手牌无法手动打出，强制锁定出牌顺序），且打出需要消耗 <span style="color:#3aa675;font-weight:600">2</span> 点能量——而心魔本体**没有任何效果**，这 2 费纯属沉没成本。所以这笔交易的实际净能量是 +4−2=+2，不是表面上的 +4。心魔还会占一个抽牌位和回合内的出牌位。
- **心魔加入抽牌堆底**：心魔会放到抽牌堆**底部**，所以不会立刻抽到——但当抽牌堆抽完洗牌或抽到底部时会遇到它。心魔抽到时**必须先打出**（强制锁定出牌顺序，消耗 2 能量），会打断你当回合的出牌节奏。
- **升级让净收益翻倍**：升级后能量从 <span style="color:#3aa675;font-weight:600">4</span> 增至 <span style="color:#3aa675;font-weight:600">6</span>，扣掉心魔 2 费后净 +4 能量——比未升级的 +2 翻了一倍，性价比飙升。优先升级这张牌能极大提升连击能力。
- **多次打出心魔会累积**：每次打出本牌都会往抽牌堆塞一张**新的**心魔——PP <span style="color:#3aa675;font-weight:600">5</span> 打满 5 次就是 5 张心魔、10 费沉没成本。心魔是普通状态牌（无 PP），打出后进弃牌堆，洗牌循环中还会再次抽到、再次锁节奏。短战斗刷 PP 血赚，长战斗心魔会越积越多。
- **配合心魔特化套路**：若有遗物或能力可让心魔变成收益（如打出状态牌回血、消耗状态牌加增益等），心魔代价可被抵消甚至反转为收益——这时这张牌就是纯赚。
- **性价比**：0 费合理——一次性大能量注入，但附带出牌节奏被打乱的代价。适合在"本回合就要爆发"的关键回合打出，而不是每回合无脑刷 PP。

## 相关机制

- [心魔](/cards/status/inner_demon.md)（生成的状态牌，强制先打且耗能 2）
- [抽牌堆](/mechanics/draw_pile.md)（心魔加入抽牌堆底）
- [能量](/mechanics/energy.md)（立即获得的资源）

## 源码

- `SeerSeekDistantPath.cs`
