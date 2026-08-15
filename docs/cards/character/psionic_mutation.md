# 异能突变

<img src="/images/cards/psionic_mutation.png" alt="异能突变" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 5
- **能量消耗**: 0
- **类型**: 技能
- **稀有度**: 普通
- **目标**: 无
- **可升级**: 是（1 级）
- **关键词**: [异变](/mechanics/aberration.md)

### 数值参数

| 参数 | 数值 |
|---|---|
| 抽牌数量 | 3 |
| PP | 5 |
| 最大PP | 5 |

## 描述

PP: 5/5 回到手牌。50%抽<span style="color:#3aa675;font-weight:600">3</span>张，50%获得<span style="color:#3aa675;font-weight:600">2</span>点[<span style="color:#d4a017;font-weight:600">能量</span>](/mechanics/energy.md)。

## 升级后

PP: 5/5 [<span style="color:#d4a017;font-weight:600">保留</span>](/mechanics/retain.md)。回到手牌。50%抽<span style="color:#3aa675;font-weight:600">3</span>张，50%获得<span style="color:#3aa675;font-weight:600">2</span>点[<span style="color:#d4a017;font-weight:600">能量</span>](/mechanics/energy.md)。

## 小贴士

- **0 费 50/50 赌局——抽 3 张或获 2 能量**：<span style="color:#3aa675;font-weight:600">50</span>% 概率抽 <span style="color:#3aa675;font-weight:600">3</span> 张牌，<span style="color:#3aa675;font-weight:600">50</span>% 概率获得 <span style="color:#3aa675;font-weight:600">2</span> 点[能量](/mechanics/energy.md)。两种结果都是资源收益——<span style="color:#3aa675;font-weight:600">0</span> 费打出绝不亏。
- **打出后回到手牌——可重复使用**：打出后不进[弃牌堆](/mechanics/discard_pile.md)，直接回到[手牌](/mechanics/hand.md)。每回合都能打一次，是持续的资源供给牌。
- **异变副作用——每次打出给自己 1 种随机异常状态**：带[异变](/mechanics/aberration.md)关键词，打出时对自己施加随机 <span style="color:#3aa675;font-weight:600">1</span> 种[异常状态](/mechanics/abnormal-status.md)（持续 <span style="color:#3aa675;font-weight:600">2</span> 回合）。这是代价——反复使用会累积异常状态，需要有清除异常的手段配合。
- **升级加保留——回合间留存**：升级后获得[保留](/mechanics/retain.md)关键词，回合结束时不丢弃，可以攒在手里等需要的时机打出。
- **性价比**：<span style="color:#3aa675;font-weight:600">0</span> 费 <span style="color:#3aa675;font-weight:600">50</span>/<span style="color:#3aa675;font-weight:600">50</span> 资源牌，打出回手牌可反复使用；异变副作用是代价，配合清异常手段可最大化收益。

## 源码

- `SeerPsionicMutation.cs`
