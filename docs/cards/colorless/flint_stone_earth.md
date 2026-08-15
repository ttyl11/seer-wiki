# 电石混地

<img src="/images/cards/flint_stone_earth.png" alt="电石混地" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 无色牌
- **能量消耗**: 1
- **类型**: 能力
- **稀有度**: 普通
- **目标**: 自身
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 每牌格挡 | 3 | 3 |

## 描述

每打出1张牌，获得<span style="color:#3aa675;font-weight:600">3</span>点[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)。每有<span style="color:#3aa675;font-weight:600">2</span>点[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)，造成的伤害<span style="color:#3aa675;font-weight:600">-1</span>。

## 升级后

耗能降至<span style="color:#3aa675;font-weight:600">0</span>。每打出1张牌，获得<span style="color:#3aa675;font-weight:600">3</span>点[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)。每有<span style="color:#3aa675;font-weight:600">2</span>点[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)，造成的伤害<span style="color:#3aa675;font-weight:600">-1</span>。

## 小贴士

- **电石混地**（[查看能力页](/powers/flint_stone_earth_power.md)）：增益效果（层数始终为 1）。获得此能力后，每当拥有者打出一张牌时获得 <span style="color:#3aa675;font-weight:600">3</span> 点[格挡](/mechanics/block.md)（非攻击伤害）。
- **伤害减免**：当拥有者造成攻击伤害时，每 <span style="color:#3aa675;font-weight:600">2</span> 点当前[格挡](/mechanics/block.md)减少 <span style="color:#3aa675;font-weight:600">1</span> 点伤害（向下取整）。例：拥有 7 点格挡时，攻击伤害 -3。
- **升级效果**：使耗能从 <span style="color:#3aa675;font-weight:600">1</span> 降至 <span style="color:#3aa675;font-weight:600">0</span>。

## 相关能力

- [<span style="color:#d4a017;font-weight:600">电石混地</span>](/powers/flint_stone_earth_power.md)：每打出一张牌获得 3 点格挡，每 2 点格挡减 1 攻击伤害

## 相关机制

- [格挡](/mechanics/block.md)（获得格挡，并基于格挡值减少伤害）

## 源码

- `SeerFlintStoneEarth.cs`
