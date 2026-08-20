# 过载能源

<img src="/images/cards/overload_energy.png" alt="过载能源" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 10
- **能量消耗**: 0
- **类型**: 技能
- **稀有度**: 罕见
- **目标**: 无
- **可升级**: 是（1 级）
- **关键词**: [化墟](/mechanics/ruination.md)

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 抽牌数量 | 1 | 2 |
| PP | 10 | 10 |
| 最大PP | 10 | 10 |

## 描述

PP: 10/10 抽<span style="color:#3aa675;font-weight:600">1</span>张牌。获得<span style="color:#3aa675;font-weight:600">3</span>点[<span style="color:#d4a017;font-weight:600">能量</span>](/mechanics/energy.md)。

## 升级后

PP: 10/10 抽<span style="color:#3aa675;font-weight:600">2</span>张牌。获得<span style="color:#3aa675;font-weight:600">3</span>点[<span style="color:#d4a017;font-weight:600">能量</span>](/mechanics/energy.md)。

## 小贴士

- **0 费净赚 3 能量的爆发牌**：打出不花能量，反而获得 <span style="color:#3aa675;font-weight:600">3</span> 点[能量](/mechanics/energy.md)。手牌消耗一张但立刻抽 <span style="color:#3aa675;font-weight:600">1</span> 张补回（升级后抽 <span style="color:#3aa675;font-weight:600">2</span> 张、净增 <span style="color:#3aa675;font-weight:600">1</span> 张），相当于无代价换来一波能量和手牌——单卡资源收益极大。
- **PP 10 的能量引擎——单场最多白嫖 30 能量**：这张牌 PP 高达 <span style="color:#3aa675;font-weight:600">10</span>，且每次打出都是 <span style="color:#3aa675;font-weight:600">0</span> 费换 <span style="color:#3aa675;font-weight:600">3</span> 能量——每打一次净赚 <span style="color:#3aa675;font-weight:600">3</span> 能量，手牌数还不变（抽 <span style="color:#3aa675;font-weight:600">1</span> 补 <span style="color:#3aa675;font-weight:600">1</span>）。抽到后整场战斗随时可以把富余手牌位换成能量：单场打满 <span style="color:#3aa675;font-weight:600">10</span> 次就是 <span style="color:#3aa675;font-weight:600">30</span> 能量 + <span style="color:#3aa675;font-weight:600">10</span> 抽（升级后 <span style="color:#3aa675;font-weight:600">20</span> 抽），是 mod 里最纯粹的循环资源引擎。唯一代价是化墟的累计状态牌——打得越多弃牌堆越脏，长线战斗要配清理手段。
- **化墟往弃牌堆塞一张原版状态牌**：[化墟](/mechanics/ruination.md)打出时从原版状态牌池随机选一张加入[弃牌堆](/mechanics/discard_pile.md)。状态牌通常有害（自伤、占手牌位等），但因直接进弃牌堆而非手牌，只有后续被抽到时才生效——短期战斗中影响极小，长线战斗需用消耗或弃牌手段清理。
- **能量匮乏回合的关键启动牌**：手中攥着高费牌但能量不够时，这张牌瞬间提供 <span style="color:#3aa675;font-weight:600">3</span> 能量启动。也适合多张低费牌的流派——<span style="color:#3aa675;font-weight:600">3</span> 能量可连续打出 <span style="color:#3aa675;font-weight:600">3</span> 张 <span style="color:#3aa675;font-weight:600">1</span> 费牌，把一回合出牌密度拉满。
- **升级提升抽牌而非能量**：升级后抽牌 <span style="color:#3aa675;font-weight:600">1</span>→<span style="color:#3aa675;font-weight:600">2</span>，能量不变。升级让手牌净增 <span style="color:#3aa675;font-weight:600">1</span> 张，进一步放大资源优势——常靠这张牌启动时升级优先级高。
- **性价比**：0 费换 <span style="color:#3aa675;font-weight:600">3</span> 能量 + <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">2</span> 抽牌，化墟副作用短期内几乎无感——资源收益远超代价。

## 相关机制

- [能量](/mechanics/energy.md)：打出时获得 3 点
- [化墟](/mechanics/ruination.md)：打出时向弃牌堆加入一张随机状态牌

## 源码

- `SeerOverloadEnergy.cs`
