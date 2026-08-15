# 懒惰

<img src="/images/powers/sloth_power.png" alt="懒惰" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 减益（Debuff）
- **叠加方式**: 递减（计数型）
- **可见**: 是
- **允许负值**: 否

## 描述

你在每个回合不能打出超过<span style="color:#3aa675;font-weight:600">3</span>张牌。

## 详细机制

- **打出限制**：当卡牌拥有者的生物是持有者时，若本回合已打出卡牌数达到层数，则不能打出。
  - 即每回合最多打出层数张牌（默认 <span style="color:#3aa675;font-weight:600">3</span> 张）。
- **打出计数**：出牌前，若卡牌拥有者是持有者的玩家，已打出牌数自增并更新显示。
- **回合重置**：持有者一方回合开始前，已打出牌数重置为 <span style="color:#3aa675;font-weight:600">0</span>。
- **显示层数**：显示的是已打出牌数，而非能力层数。
- **仅限制持有者**：只限制持有者打出的卡牌，其他玩家不受影响。

## 相关卡牌

- [神灵之触](/cards/ancient/divine_touch.md)（提及无视懒惰的限制）

## 源码

- `SlothPower.cs`（原版）
