# 圣光

<img src="/images/cards/holy_light.png" alt="圣光" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 先古牌
- **最大PP**: 1
- **能量消耗**: 1
- **类型**: 技能
- **稀有度**: 先古
- **目标**: 无
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| PP | 1 | 1 |
| 最大PP | 1 | 1 |
| 耗能减免 | 1 | 1 |
| 抽牌数 | 2 | 2 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 本回合你的所有牌耗能<span style="color:#3aa675;font-weight:600">-1</span>。抽<span style="color:#3aa675;font-weight:600">2</span>张牌。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 本回合你的所有牌耗能<span style="color:#3aa675;font-weight:600">-1</span>。抽<span style="color:#3aa675;font-weight:600">2</span>张牌。（<span style="color:#3aa675;font-weight:600">0</span>费）

## 详细机制

- **圣光庇护增益**：打出后获得[圣光耗能减免](/powers/holy_light_cost_reduction_power.md)增益，本回合你的所有牌耗能 -1（最低降到 0）。
- **固定 -1，多张不叠加**：减耗固定为 1，打出多张圣光不会让减耗变成 -2——增益层数只记录叠加次数，实际效果始终是 -1。
- **持续本回合**：回合结束时增益移除，不延续到下回合。
- **升级效果**：升级后此牌自身耗能从 1 降为 0，打出更轻松。
- **来源**：由圣光灵神遗物的"净化"效果生成——将抽牌堆的诅咒牌和状态牌转化为圣光。

## 小贴士

- **升级后 0 费过牌 + 全场减费**：升级后 0 费打出：本回合所有牌 -1 费 + 抽 2 张——白嫖一次过牌还润滑整个回合的爆发。先古牌只能打 1 次，最佳时机是手中有大量高费牌时。
- **多张圣光是抽牌引擎，不是减费引擎**：减耗固定 -1 不叠加，但每张圣光都抽 2 张牌——净化攒下的多张圣光，价值在"每张 2 张过牌"，而不是把减费堆到 -N。连续打出 2 张圣光 = 抽 4 张 + 全场 -1 费，爆费爆牌两不误。
- **先打出再打高费牌**：减费持续到回合结束，先把圣光甩出去再打高费牌，一张 3 费牌变 2 费、两张 2 费牌变两张 1 费——当回合多省下的能量足够多打一张牌。
- **净化产生的免费资源**：原本会卡手的诅咒/状态牌被转化为可用的减费+过牌资源，是把负面牌转化为正面收益的核心手段。

## 相关能力

- [圣光耗能减免](/powers/holy_light_cost_reduction_power.md)（本牌授予的减费增益，所有牌耗能 -1）

## 源码

- `SeerHolyLight.cs`
- `SeerHolyLightCostReductionPower.cs`
