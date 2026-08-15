# 致命裂痕

<img src="/images/powers/fatal_rift_power.png" alt="致命裂痕" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 减益（Debuff）
- **叠加方式**: 计数器叠加
- **可见**: 是
- **允许负值**: 否

## 数值参数

| 参数 | 数值 |
|---|---|
| 减伤百分比 | 10 |
| 增伤百分比 | 20 |
| 先制层数 | 1 |

## 描述

根据层数触发不同效果：<span style="color:#d4a017;font-weight:600">1层</span>：造成伤害降低 <span style="color:#3aa675;font-weight:600">10</span>%。<span style="color:#d4a017;font-weight:600">2层</span>：受到伤害增加 <span style="color:#3aa675;font-weight:600">20</span>%。<span style="color:#d4a017;font-weight:600">3层</span>：使用技能[先制](/powers/first_strike_power.md)-<span style="color:#3aa675;font-weight:600">1</span>。

## 详细机制

- **<span style="color:#d4a017;font-weight:600">1层及以上</span>（减伤）**：该敌人造成的所有伤害降低 <span style="color:#3aa675;font-weight:600">10</span>%。这是固定值，不会随层数增加而叠加——无论 <span style="color:#3aa675;font-weight:600">1</span> 层、<span style="color:#3aa675;font-weight:600">2</span> 层还是 <span style="color:#3aa675;font-weight:600">3</span> 层，减伤都是 <span style="color:#3aa675;font-weight:600">10</span>%。
- **<span style="color:#d4a017;font-weight:600">2层及以上</span>（增伤）**：该敌人受到的所有伤害增加 <span style="color:#3aa675;font-weight:600">20</span>%。同样是固定值，不会随层数叠加。
- **<span style="color:#d4a017;font-weight:600">3层及以上</span>（先制-1）**：该敌人的[先制](/powers/first_strike_power.md)降低 <span style="color:#3aa675;font-weight:600">1</span> 点。先制影响出牌顺序，先制低的一方后出手。
- **固定阈值不是线性叠加**：<span style="color:#3aa675;font-weight:600">1</span> 层只有减伤 <span style="color:#3aa675;font-weight:600">10</span>%，<span style="color:#3aa675;font-weight:600">2</span> 层同时有减伤 <span style="color:#3aa675;font-weight:600">10</span>% + 增伤 <span style="color:#3aa675;font-weight:600">20</span>%，<span style="color:#3aa675;font-weight:600">3</span> 层同时有减伤 <span style="color:#3aa675;font-weight:600">10</span>% + 增伤 <span style="color:#3aa675;font-weight:600">20</span>% + 先制 -<span style="color:#3aa675;font-weight:600">1</span>。不是每层减 <span style="color:#3aa675;font-weight:600">10</span>%、每层增 <span style="color:#3aa675;font-weight:600">20</span>%。
- **触发方式**：[弑序神罗](/relics/legendary/order_killing_god_luo.md)的②效果——自身受到伤害后，给伤害来源附加 <span style="color:#3aa675;font-weight:600">1</span> 层[<span style="color:#9b59b6;font-weight:600">致命裂痕</span>](/powers/fatal_rift_power.md)。敌人攻击越频繁，裂痕叠得越快。

## 相关遗物

- [弑序神罗](/relics/legendary/order_killing_god_luo.md)

## 源码

- `SeerFatalRiftPower.cs`
