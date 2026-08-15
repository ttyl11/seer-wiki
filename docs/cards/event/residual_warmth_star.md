# 余温之辰

<img src="/images/cards/residual_warmth_star.png" alt="余温之辰" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 事件牌
- **最大PP**: 10
- **能量消耗**: 0
- **类型**: 技能
- **稀有度**: 衍生
- **目标**: 无
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 |
|---|---|
| 每X温生成数 | 2 |
| PP | 10 |
| 最大PP | 10 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">10</span>/<span style="color:#3aa675;font-weight:600">10</span> 回合开始时若在[<span style="color:#d4a017;font-weight:600">抽牌堆</span>](/mechanics/draw_pile.md)则自动打出。将<span style="color:#3aa675;font-weight:600">2</span>X张「温」加入[<span style="color:#d4a017;font-weight:600">消耗牌堆</span>](/mechanics/exhaust_pile.md)。牌堆洗牌时，[<span style="color:#d4a017;font-weight:600">消耗</span>](/mechanics/exhaust.md)此牌，将所有「温」变为「辰」并移入[<span style="color:#d4a017;font-weight:600">抽牌堆</span>](/mechanics/draw_pile.md)。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">10</span>/<span style="color:#3aa675;font-weight:600">10</span> 回合开始时若在[<span style="color:#d4a017;font-weight:600">抽牌堆</span>](/mechanics/draw_pile.md)则自动打出。将<span style="color:#3aa675;font-weight:600">2</span>X张「温」加入[<span style="color:#d4a017;font-weight:600">消耗牌堆</span>](/mechanics/exhaust_pile.md)。牌堆洗牌时，[<span style="color:#d4a017;font-weight:600">消耗</span>](/mechanics/exhaust.md)此牌，将所有「温」变为「辰」并移入[<span style="color:#d4a017;font-weight:600">抽牌堆</span>](/mechanics/draw_pile.md)。

## 小贴士

- **触发时机**：回合开始前施加自动打出能力；打出时执行卡牌效果。
- **自动打出**：回合开始时，若此牌在[抽牌堆](/mechanics/draw_pile.md)中，自动打出（无目标）。
- **X 耗能**：X 耗能卡，X 值由当前[能量](/mechanics/energy.md)决定。自动打出时失去 X 点[能量](/mechanics/energy.md)。
- **温生成**：打出时将 <span style="color:#3aa675;font-weight:600">2</span>X 张「温」加入[消耗牌堆](/mechanics/exhaust_pile.md)顶部。升级后变为 <span style="color:#3aa675;font-weight:600">3</span>X 张。
- **洗牌触发**：牌堆洗牌时[消耗](/mechanics/exhaust.md)此牌，将所有「温」变化为「辰」并移入[抽牌堆](/mechanics/draw_pile.md)。
- **升级效果**：每 X 的温生成数从 <span style="color:#3aa675;font-weight:600">2</span> 提升至 <span style="color:#3aa675;font-weight:600">3</span>。

## 相关机制

- [抽牌堆](/mechanics/draw_pile.md)：自动打出判定位置、「辰」移入目标
- [消耗牌堆](/mechanics/exhaust_pile.md)：「温」存放位置
- [消耗](/mechanics/exhaust.md)：洗牌时消耗此牌
- [能量](/mechanics/energy.md)：X 耗能，自动打出时失去

## 源码

- `SeerResidualWarmthStar.cs`
- `SeerResidualWarmthStarAutoPlayPower.cs`
