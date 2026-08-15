# 魂缚

> 原版 affliction（卡牌状态），由 [魂缚锁链](/powers/chains_of_binding_power.md) 能力施加。

## 基本信息

- **类型**: affliction（卡牌状态）
- **本地化来源**: `afflictions.json` 的 `BOUND`

## 描述

每回合只能打出<span style="color:#3aa675;font-weight:600">1</span>张魂缚卡牌。卡牌会在回合结束时失去魂缚。

## 详细机制

- **打出限制**：每回合只能打出 <span style="color:#3aa675;font-weight:600">1</span> 张魂缚卡牌。若本回合已打出过魂缚卡牌，其他魂缚卡牌无法被打出。
- **回合结束清除**：回合结束时，所有卡牌上的魂缚状态会被清除。
- **施加方式**：由 [魂缚锁链](/powers/chains_of_binding_power.md) 能力在抽牌时自动施加。
  - 每回合抽到的前 N 张牌会被魂缚，N 等于魂缚锁链的层数。
- **卡牌文本**：魂缚卡牌上会显示"魂缚"标记。
- **可被魂缚的卡牌**：部分特殊卡牌可能免疫魂缚。

## 相关能力

- [魂缚锁链](/powers/chains_of_binding_power.md)（施加魂缚的原版能力）

## 相关卡牌

- [侵蚀](/cards/status/erosion.md)（抽到时获得 <span style="color:#3aa675;font-weight:600">1</span> 层魂缚锁链，触发魂缚 affliction）

## 源码

- `Bound.cs`（原版 affliction）
- `ChainsOfBindingPower.cs`（施加魂缚的能力）
