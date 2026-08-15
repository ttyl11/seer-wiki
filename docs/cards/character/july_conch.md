# 七月的海螺

<img src="/images/cards/july_conch.png" alt="七月的海螺" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 1
- **能量消耗**: 1
- **类型**: 能力
- **稀有度**: 稀有
- **目标**: 无
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 呼唤加入数 | 3 | 3 |
| 异常状态回合 | 3 | 4 |
| PP | 1 | 1 |
| 最大PP | 1 | 1 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 向[抽牌堆](/mechanics/draw_pile.md)加入<span style="color:#3aa675;font-weight:600">3</span>张呼唤。每有一张状态牌，所有敌人获得1种随机[异常状态](/mechanics/abnormal-status.md)<span style="color:#3aa675;font-weight:600">3</span>回合。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 向[抽牌堆](/mechanics/draw_pile.md)加入<span style="color:#3aa675;font-weight:600">3</span>张呼唤。每有一张状态牌，所有敌人获得1种随机[异常状态](/mechanics/abnormal-status.md)<span style="color:#3aa675;font-weight:600">4</span>回合。

## 小贴士

- **呼唤是原版状态牌**：向抽牌堆加入 <span style="color:#3aa675;font-weight:600">3</span> 张呼唤。呼唤在手牌中回合结束扣生命，是加入抽牌堆的代价。
- **状态牌联动触发**：打出时统计所有状态牌（抽牌堆+手牌+弃牌堆原有 + 新加入 <span style="color:#3aa675;font-weight:600">3</span> 张呼唤），每张让所有敌人获得 <span style="color:#3aa675;font-weight:600">1</span> 种随机异常状态。无原有状态牌时 = 3 次随机异常 × 所有敌人。
- **25 种异常随机**：从 <span style="color:#3aa675;font-weight:600">25</span> 种异常状态（睡眠、凝滞、烧伤、冰封、中毒、流血、冻伤、害怕、瘫痪、沉默、衰弱、狂暴、束缚、沸涌、石化、感染、超频、焚烬、失明、诅咒、臣服、寄生、麻痹、神游、易燃）中随机选取，多人模式两端一致。
- **1 费换全敌人异常**：1 费换 3 次随机异常 × 所有敌人 × 3 回合。多敌人时价值放大，3 个敌人 = 9 次异常施加。代价是 3 张呼唤进抽牌堆（回合结束扣血）。
- **升级增异常回合**：异常回合 <span style="color:#3aa675;font-weight:600">3</span> → <span style="color:#3aa675;font-weight:600">4</span>。每多 1 回合 = 异常多触发 1 轮，控制效果延长。

## 相关机制

- [异常状态](/mechanics/abnormal-status.md)（25 种 mod 异常状态随机施加）
- [抽牌堆](/mechanics/draw_pile.md)（加入 3 张呼唤状态牌）

## 源码

- `SeerJulyConch.cs`
- `SeerAbnormalStatus.cs`（异常状态列表）
