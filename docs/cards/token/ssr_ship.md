# 赛尔号

<img src="/images/cards/ssr_ship.png" alt="赛尔号" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 衍生牌
- **能量消耗**: 1
- **类型**: 能力
- **稀有度**: 衍生
- **目标**: 自身
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 |
|---|---|
| 遗物数量 | 2 |

## 描述

需在休息处<span style="color:#d4a017;font-weight:600">启动</span>后才能打出。打出时依次打出所有[<span style="color:#d4a017;font-weight:600">弃牌堆</span>](/mechanics/discard_pile.md)和[<span style="color:#d4a017;font-weight:600">抽牌堆</span>](/mechanics/draw_pile.md)中可打出的牌。战斗结束后获得<span style="color:#3aa675;font-weight:600">2</span>个随机普通遗物。

## 升级后

需在休息处<span style="color:#d4a017;font-weight:600">启动</span>后才能打出。打出时依次打出所有[<span style="color:#d4a017;font-weight:600">弃牌堆</span>](/mechanics/discard_pile.md)和[<span style="color:#d4a017;font-weight:600">抽牌堆</span>](/mechanics/draw_pile.md)中可打出的牌。战斗结束后获得<span style="color:#3aa675;font-weight:600">3</span>个随机普通遗物。

## 小贴士

- **🔑 一键倾泻全牌库 + 战后遗物收割**：打出后**依次自动打出[弃牌堆](/mechanics/discard_pile.md)和[抽牌堆](/mechanics/draw_pile.md)中所有可打出的牌——不受能量限制**，1 费引爆你整个牌组的"打出时"效果；本场战斗结束后再收割 <span style="color:#3aa675;font-weight:600">2</span> 个（升级后 <span style="color:#3aa675;font-weight:600">3</span> 个）随机普通遗物。
- **需在休息处启动——每场一次的使用权**：初始带"不可打出"，必须路过休息处选择启动才能解锁；打出后启动状态重置，**下一场又要重新启动**——规划路线时留好休息点。
- **[固有](/mechanics/innate.md)必在手——启动当回合直接引爆**：启动后的那场战斗它开局就在手里，第一回合 1 费打出 = 当场倾泻弃牌堆+抽牌堆（此时手牌还没铺开，倾泻的是两堆里的全部可打出牌），敌人还没动你就把牌库过完一轮。
- **自动打出过滤规则**：跳过"不可打出"、诅咒、状态牌——其余全部自动结算；被自动打出的攻击牌由系统自动选目标。所有"打出时触发"的效果（抽牌、增伤、召唤等）全部正常触发——**牌库越厚、单卡打出效果越强，收益越大**。
- **自动倾泻不受你控制**：所有可打出的牌按顺序强制打出——手里捏着的 combo 会被拆、关键时机牌被提前消耗——它是"爆发收割"不是"精细操作"，适合直接伤害型牌库，不适合需要精确目标选择的控制流。
- **战后 2~3 遗物是核心经济收益**：遗物从随机普通（Common）池抽取——一局游戏里启动 3~4 次 = 白嫖 6~12 个遗物，遗物滚雪球价值远超单场战斗收益。
- **升级 +1 遗物**：2→3 个，每场启动的期望收益 +50%，必升。

## 相关机制

- [固有](/mechanics/innate.md)（开局必在手牌）
- [弃牌堆](/mechanics/discard_pile.md)/[抽牌堆](/mechanics/draw_pile.md)（打出时自动倾泻两堆）

## 源码

- `SeerSsrShip.cs`
