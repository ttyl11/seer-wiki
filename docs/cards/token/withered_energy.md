# 枯萎能量

<img src="/images/cards/withered_energy.png" alt="枯萎能量" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 衍生牌
- **最大PP**: 5
- **能量消耗**: 0
- **类型**: 技能
- **稀有度**: 衍生
- **目标**: 自身
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 能量获取 | 2 | 3 |
| 格挡数值 | 8 | 8 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 向[<span style="color:#d4a017;font-weight:600">抽牌堆</span>](/mechanics/draw_pile.md)和[<span style="color:#d4a017;font-weight:600">弃牌堆</span>](/mechanics/discard_pile.md)各加入一张[<span style="color:#9b59b6;font-weight:600">凋零</span>](/cards/status/wither.md)。获得<span style="color:#3aa675;font-weight:600">2</span>点[<span style="color:#d4a017;font-weight:600">能量</span>](/mechanics/energy.md)。获得<span style="color:#3aa675;font-weight:600">8</span>点[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 向[<span style="color:#d4a017;font-weight:600">抽牌堆</span>](/mechanics/draw_pile.md)和[<span style="color:#d4a017;font-weight:600">弃牌堆</span>](/mechanics/discard_pile.md)各加入一张[<span style="color:#9b59b6;font-weight:600">凋零</span>](/cards/status/wither.md)。获得<span style="color:#3aa675;font-weight:600">2</span>点[<span style="color:#d4a017;font-weight:600">能量</span>](/mechanics/energy.md)。获得<span style="color:#3aa675;font-weight:600">8</span>点[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)。

## 小贴士

- **衍生牌**：属于衍生卡池，不会在正常卡牌奖励中出现，由特定效果生成。
- **触发时机**：打出时依次生成凋零、获得能量、获得格挡。
- **目标选取**：自身。
- **凋零生成**：创建两张[凋零](/cards/status/wither.md)，分别加入[抽牌堆](/mechanics/draw_pile.md)顶部和[弃牌堆](/mechanics/discard_pile.md)顶部。
- **能量获取**：获得 <span style="color:#3aa675;font-weight:600">2</span> 点[能量](/mechanics/energy.md)，升级后 <span style="color:#3aa675;font-weight:600">3</span> 点。
- **格挡获取**：获得 <span style="color:#3aa675;font-weight:600">8</span> 点[格挡](/mechanics/block.md)。
- **升级效果**：升级使能量获取从 <span style="color:#3aa675;font-weight:600">2</span> 提升至 <span style="color:#3aa675;font-weight:600">3</span>。

## 相关卡牌

- [凋零](/cards/status/wither.md)（生成两张，分别加入抽牌堆与弃牌堆）

## 相关机制

- [抽牌堆](/mechanics/draw_pile.md)（凋零加入位置之一）
- [弃牌堆](/mechanics/discard_pile.md)（凋零加入位置之一）
- [能量](/mechanics/energy.md)（获得 2/3 点）
- [格挡](/mechanics/block.md)（获得 8 点）

## 源码

- `SeerWitheredEnergy.cs`
