# 好男孩

> **归属**：玩家可施加
> **施加来源**：玩家获得——[好男孩](/cards/colorless/good_boy.md)（卡牌）

<img src="/images/powers/good_boy_power.png" alt="好男孩" style="max-width:120px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 实例化（每次施加独立实例，各自计数）
- **可见**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| 力量损失 | 1 |
| 防御获取 | 1 |
| 格挡 | 4（实际由卡牌传入） |

## 描述

在你的回合结束时，自身扣除<span style="color:#3aa675;font-weight:600">1</span>点[<span style="color:#d4a017;font-weight:600">力量</span>](/powers/strength_power.md)，获得<span style="color:#3aa675;font-weight:600">1</span>点[<span style="color:#d4a017;font-weight:600">防御</span>](/powers/defense_power.md)和等于层数的[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)。

## 详细机制

- **触发时机**：在拥有者一方回合结束时触发。
- **力量损失**：扣除 <span style="color:#3aa675;font-weight:600">1</span> 点[力量](/powers/strength_power.md)。
- **防御获取**：获得 <span style="color:#3aa675;font-weight:600">1</span> 点[防御](/powers/defense_power.md)。
- **格挡获取**：获得等于层数的[格挡](/mechanics/block.md)。层数由卡牌施加时传入（好男孩卡牌传入 <span style="color:#3aa675;font-weight:600">8</span>，升级后 <span style="color:#3aa675;font-weight:600">12</span>）。
- **叠加特性**：按计数叠加，实例化（每次施加独立实例）。

## 相关卡牌

- [好男孩](/cards/colorless/good_boy.md)（获得 8 层好男孩，升级后 12 层）

## 源码

- `SeerGoodBoyPower.cs`
