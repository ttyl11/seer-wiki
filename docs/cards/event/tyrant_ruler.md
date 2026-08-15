# 暴政统治者

<img src="/images/cards/tyrant_ruler.png" alt="暴政统治者" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 事件牌
- **最大PP**: 5
- **能量消耗**: 1
- **类型**: 攻击
- **稀有度**: 衍生
- **目标**: 所有敌方
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 弃牌数量 | 3 | 3 |
| 先制 | 1 | 1 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |
| 伤害 | 6 | 9 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> [<span style="color:#d4a017;font-weight:600">先制</span>](/powers/first_strike_power.md)+<span style="color:#3aa675;font-weight:600">1</span>。对所有敌人造成<span style="color:#3aa675;font-weight:600">6</span>点伤害，获得<span style="color:#3aa675;font-weight:600">1</span>层[<span style="color:#d4a017;font-weight:600">缓冲</span>](/powers/buffer_power.md)。弃掉[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)中最多<span style="color:#3aa675;font-weight:600">3</span>张牌，对所有敌人施加<span style="color:#3aa675;font-weight:600">1</span>层[<span style="color:#9b59b6;font-weight:600">易伤</span>](/powers/vulnerable_power.md)。自动随机打出牌组中所有的史莱姆牌。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> [<span style="color:#d4a017;font-weight:600">先制</span>](/powers/first_strike_power.md)+<span style="color:#3aa675;font-weight:600">1</span>。对所有敌人造成<span style="color:#3aa675;font-weight:600">6</span>点伤害，获得<span style="color:#3aa675;font-weight:600">1</span>层[<span style="color:#d4a017;font-weight:600">缓冲</span>](/powers/buffer_power.md)。弃掉[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)中最多<span style="color:#3aa675;font-weight:600">3</span>张牌，对所有敌人施加<span style="color:#3aa675;font-weight:600">1</span>层[<span style="color:#9b59b6;font-weight:600">易伤</span>](/powers/vulnerable_power.md)。自动随机打出牌组中所有的史莱姆牌。

## 小贴士

- **触发时机**：打出时依次执行：对所有敌人造成伤害 → 施加[<span style="color:#d4a017;font-weight:600">先制</span>](/powers/first_strike_power.md) → 施加[<span style="color:#d4a017;font-weight:600">缓冲</span>](/powers/buffer_power.md) → 弃牌 → 施加[<span style="color:#9b59b6;font-weight:600">易伤</span>](/powers/vulnerable_power.md) → 自动打出史莱姆牌。
- **弃牌**：从[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)中选择最多 <span style="color:#3aa675;font-weight:600">3</span> 张牌弃掉（不含此牌本身）。
- **史莱姆牌**：从[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)、抽牌堆、弃牌堆中收集所有史莱姆牌，随机排序后自动打出。
- **目标选取**：所有敌方。
- **升级效果**：升级使伤害 +<span style="color:#3aa675;font-weight:600">3</span>，从 <span style="color:#3aa675;font-weight:600">6</span> 提升至 <span style="color:#3aa675;font-weight:600">9</span>。

## 源码

- `SeerTyrantRuler.cs`
