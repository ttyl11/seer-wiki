# 杂音

<img src="/images/cards/noise.png" alt="杂音" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 状态牌
- **最大PP**: 1
- **能量消耗**: 1
- **类型**: 状态
- **稀有度**: 状态
- **目标**: 无
- **可升级**: 否
- **关键词**: [<span style="color:#d4a017;font-weight:600">保留</span>](/mechanics/retain.md)、[<span style="color:#d4a017;font-weight:600">消耗</span>](/mechanics/exhaust.md)

### 数值参数

| 参数 | 数值 |
|---|---|
| PP | 1 |
| 最大PP | 1 |

## 描述

你的回合开始时，自我复制一份到[手牌](/mechanics/hand.md)。

## 升级后

你的回合开始时，自我复制一份到[手牌](/mechanics/hand.md)。

## 小贴士

- **触发时机**：打出时向自身施加杂音复制能力；该能力在玩家回合开始时复制一份杂音到[手牌](/mechanics/hand.md)。
- **目标选取**：自身（无目标）。
- **保留**（[<span style="color:#d4a017;font-weight:600">查看机制页</span>](/mechanics/retain.md)，原版关键词）：回合结束时不被弃置，保留在手牌中。
- **消耗**（[<span style="color:#d4a017;font-weight:600">查看机制页</span>](/mechanics/exhaust.md)，原版关键词）：打出后从手牌移除，放入[消耗牌堆](/mechanics/exhaust_pile.md)。
- **复制机制**：打出杂音后，能力不重复叠加，会在后续回合开始时持续向[手牌](/mechanics/hand.md)复制杂音，形成"打出一次、持续复制"的循环。
- **不可战斗生成**：战斗中不会随机生成此牌。
- **不可升级**：此牌无法升级。

## 源码

- `SeerNoise.cs`
