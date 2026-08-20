# 宙轨重回

<img src="/images/cards/orbit_return.png" alt="宙轨重回" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 1
- **能量消耗**: 2
- **类型**: 能力
- **稀有度**: 普通
- **目标**: 无
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 环绕轨道获取 | 1 | 1 |
| PP | 1 | 1 |
| 最大PP | 1 | 1 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 每2回合获得<span style="color:#3aa675;font-weight:600">1</span>层<span style="color:#d4a017;font-weight:600">环绕轨道</span>。

## 升级后

[<span style="color:#d4a017;font-weight:600">固有</span>](/mechanics/innate.md)。PP: <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 每2回合获得<span style="color:#3aa675;font-weight:600">1</span>层<span style="color:#d4a017;font-weight:600">环绕轨道</span>。

## 小贴士

- **2 费换永久被动产环绕轨道**：打出后获得[轨道回归](/powers/orbit_return_power.md)，无需再消耗能量，每 <span style="color:#3aa675;font-weight:600">2</span> 回合自动产出 <span style="color:#3aa675;font-weight:600">1</span> 层<span style="color:#d4a017;font-weight:600">环绕轨道</span>，越拖越赚，适合长线战斗。
- **每 2 个自己的回合触发一次**：在你每个回合开始时计数一次，计满 <span style="color:#3aa675;font-weight:600">2</span> 回合即触发并产出环绕轨道，随后重新计数。打出当回合的回合开始已经过去、不再计数，所以首次产出要等到打出后的第 <span style="color:#3aa675;font-weight:600">2</span> 个自己回合开始时。
- **叠加层数会让收益平方增长**：卡面写的 <span style="color:#3aa675;font-weight:600">1</span> 层是首次打出的基础值；重复打出此牌会让轨道回归层数 +<span style="color:#3aa675;font-weight:600">1</span>，而每次实际产出的环绕轨道数等于轨道回归当前层数的平方——<span style="color:#3aa675;font-weight:600">1</span> 层得 <span style="color:#3aa675;font-weight:600">1</span>，<span style="color:#3aa675;font-weight:600">2</span> 层得 <span style="color:#3aa675;font-weight:600">4</span>，<span style="color:#3aa675;font-weight:600">3</span> 层得 <span style="color:#3aa675;font-weight:600">9</span>，叠得越多回报越猛。
- **怎么重复打出叠层**：这张牌 PP 只有 <span style="color:#3aa675;font-weight:600">1</span>，单场战斗自身只能打出一次。想叠层有两条路：①**牌组里带多张**——同名卡各自 PP 独立，抽到第二张再打一次即 +<span style="color:#3aa675;font-weight:600">1</span> 层；②**PP 重置手段**——如[永昌玺](/powers/eternal_seal_power.md)每回合结束把弃牌堆一张 PP 牌设回 <span style="color:#3aa675;font-weight:600">1</span>，让同一张打出第二遍。平方收益值得专门投资。
- **环绕轨道是能量续航来源——每花 4 回层数**：产出的<span style="color:#d4a017;font-weight:600">环绕轨道</span>按"每累计消耗 <span style="color:#3aa675;font-weight:600">4</span> 点能量，返还等于环绕轨道层数的能量"结算——<span style="color:#3aa675;font-weight:600">3</span> 层环绕轨道相当于高耗牌 <span style="color:#3aa675;font-weight:600">75</span>% 折扣，配合高耗能牌能大幅缓解能量压力，层数越高续航越稳。
- **升级只加固有**：升级后各项数值不变，仅添加[固有](/mechanics/innate.md)，保证战斗开始即在手牌中，能更早启动被动。
- **性价比**：2 费换一个永久被动，单次打出每 2 回合产 1 层环绕轨道，启动偏慢但稳定；真正的高回报来自叠加层数后的平方爆发，适合长线续航流派。

## 相关能力

- [轨道回归](/powers/orbit_return_power.md)：增益，每 2 回合触发一次，根据层数赋予环绕轨道

## 相关机制

- [固有](/mechanics/innate.md)：战斗开始时即在手牌中

## 源码

- `SeerOrbitReturn.cs`
