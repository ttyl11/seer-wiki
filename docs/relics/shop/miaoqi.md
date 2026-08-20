# 喵奇

<img src="/images/relics/miaoqi.png" alt="喵奇" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 商店

### 数值参数

| 参数 | 数值 |
|---|---|
| Gold（获得金币） | 30 |

## 描述

打出牌后，若该牌为<span style="color:#d4a017;font-weight:600">[PP](/mechanics/pp-system.md)</span>牌且当前<span style="color:#d4a017;font-weight:600">PP</span>为0，获得<span style="color:#3aa675;font-weight:600">30</span>金币。

- **触发条件**：仅自身打出的 PP 牌（有 PP 上限）且当前 PP 为 0 时触发，获得 30 金币。非 PP 牌不触发。

## 风味文字

<span style="color:#d44;font-weight:600">招财。</span>

## 小贴士

- **PP 耗尽时打牌赚金币**：打出 PP 为 0 的 PP 牌时获得 30 金币。鼓励在 PP 耗尽后继续打出 PP 牌——原本空 PP 的 PP 牌毫无价值，有了喵奇后每次打出都能回本。
- **只对 PP 牌生效**：非 PP 牌（无 PP 系统）不触发，只有 PP 牌且当前 PP 为 0 时才给金币。PP 牌的 PP 上限必须 >0。
- **配合 PP 消耗手段**：配合能消耗 PP 的效果，快速把 PP 牌的 PP 降到 0，然后打出赚金币。PP 牌越多、PP 消耗越快，金币收益越高。
- **多次触发累积金币**：每张 PP 为 0 的 PP 牌都触发，一回合打多张可累积大量金币用于商店消费。长线战斗中是稳定的金币来源。

## 源码

- `SeerMiaoqi.cs`
