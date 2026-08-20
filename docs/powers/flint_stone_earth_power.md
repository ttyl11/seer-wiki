# 电石混地

> **归属**：玩家可施加
> **施加来源**：玩家获得——[电石混地](/cards/colorless/flint_stone_earth.md)（卡牌）

<img src="/images/powers/flint_stone_earth_power.png" alt="电石混地" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 单例（2，层数隐藏，始终为 1）
- **可见**: 是

### 数值参数

| 参数 | 数值 | 说明 |
|---|---|---|
| 每牌格挡 | 3 | 每打出一张牌获得的格挡数 |

## 描述

你每打出一张牌，获得<span style="color:#3aa675;font-weight:600">3</span>点[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)。你身上每有<span style="color:#3aa675;font-weight:600">2</span>点[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)，造成的攻击伤害<span style="color:#3aa675;font-weight:600">-1</span>。

## 详细机制

- **格挡获取**：每打出一张牌时触发
  - 触发条件：出牌者为拥有者本人
  - 效果：获得 3 点[格挡](/mechanics/block.md)（不受力量影响的非攻击伤害类型）
- **伤害减少**：影响攻击伤害
  - 触发条件：拥有者造成攻击伤害时
  - 效果公式：每 2 点格挡减少 1 点攻击伤害（向下取整）
  - 这是加法修正，与力量等乘法修正不同，在乘法修正之前/之后叠加
- **特殊说明**：
  - 该能力层数始终为 1，不显示具体层数
  - 实际效果由"每牌格挡"变量决定，而非能力层数

## 相关能力

- [<span style="color:#d4a017;font-weight:600">力量</span>](/powers/strength_power.md)：同样是影响攻击伤害的能力，但力量是加法每层 +1，电石混地是基于格挡数的减法

## 相关卡牌

- [电石混地](/cards/colorless/flint_stone_earth.md)（无色牌，能力，施加 1 层电石混地）

## 源码

- `SeerFlintStoneEarthPower.cs`
