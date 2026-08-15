# 乌合之势

<img src="/images/cards/mob_momentum.png" alt="乌合之势" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 5
- **能量消耗**: 1
- **类型**: 技能
- **稀有度**: 普通
- **目标**: 无
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 场上每有一个生物，抽<span style="color:#3aa675;font-weight:600">1</span>张牌，获得<span style="color:#3aa675;font-weight:600">1</span>点能量，[<span style="color:#d4a017;font-weight:600">速度</span>](/powers/speed_power.md)-<span style="color:#3aa675;font-weight:600">1</span>。

## 升级后

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 场上每有一个生物，抽<span style="color:#3aa675;font-weight:600">1</span>张牌，获得<span style="color:#3aa675;font-weight:600">1</span>点能量，[<span style="color:#d4a017;font-weight:600">速度</span>](/powers/speed_power.md)-<span style="color:#3aa675;font-weight:600">1</span>。耗能降至<span style="color:#3aa675;font-weight:600">0</span>。

## 小贴士

- **"生物"包含自己——3 个敌人 = 4 个生物**：场上生物数 = 所有敌方生物 + 所有己方生物（包括你自己）。单人对战时 3 个敌人就是 <span style="color:#3aa675;font-weight:600">4</span> 个生物（<span style="color:#3aa675;font-weight:600">1</span> 自己 + <span style="color:#3aa675;font-weight:600">3</span> 敌人），抽 <span style="color:#3aa675;font-weight:600">4</span> 张 + <span style="color:#3aa675;font-weight:600">4</span> 能量，但速度 <span style="color:#3aa675;font-weight:600">-4</span>。
- **速度惩罚是永久的，不会自动衰减**：施加的负[速度](/powers/speed_power.md)没有回合衰减机制——打完这张牌后，速度 <span style="color:#3aa675;font-weight:600">-4</span> 就一直挂着，直到战斗结束或被主动清除。这意味着后续**每一回合**都少抽 <span style="color:#3aa675;font-weight:600">2</span> 张牌，越拖越亏。
- **整数除法有收益拐点**：速度每 <span style="color:#3aa675;font-weight:600">2</span> 层影响 <span style="color:#3aa675;font-weight:600">1</span> 张抽牌数（整数除法向零截断）。所以 <span style="color:#3aa675;font-weight:600">2</span>-<span style="color:#3aa675;font-weight:600">3</span> 个生物都只少抽 <span style="color:#3aa675;font-weight:600">1</span> 张，<span style="color:#3aa675;font-weight:600">4</span>-<span style="color:#3aa675;font-weight:600">5</span> 个生物都只少抽 <span style="color:#3aa675;font-weight:600">2</span> 张。3 生物场景（2 个敌人 + 自己）打出最划算——用 <span style="color:#3aa675;font-weight:600">-1</span> 抽牌的代价换 <span style="color:#3aa675;font-weight:600">3</span> 抽 <span style="color:#3aa675;font-weight:600">3</span> 能量的爆发。
- **负速度是减益，能被清除**：负速度在游戏中是减益类型，可被清除减益的效果直接清掉。清掉后等于白嫖了一轮爆发——抽牌和能量到手，速度惩罚被抹除。所以配合减益清除能力可以把这张牌变成无损爆发。
- **透支未来的交易**：本回合大抽大赚，但后续每回合的抽牌数永久下降。核心矛盾在于——爆发回合能结束战斗就赚，拖久了速度惩罚会持续侵蚀手牌供给。适合在 boss 战或精英战的关键回合打出，配合速战速决或减益清除使用。
- **升级 0 费让爆发更灵活**：升级后耗能从 <span style="color:#3aa675;font-weight:600">1</span> 降至 <span style="color:#3aa675;font-weight:600">0</span>，打出不占能量——本回合能量全部用于后续出牌，爆发回合的操作空间更大。
- **性价比**：<span style="color:#3aa675;font-weight:600">1</span> 费（升级 <span style="color:#3aa675;font-weight:600">0</span> 费）换 N 张牌 + N 能量，爆发价公道，永久速度代价是隐性长期成本需配合速战速决或减益清除。

## 相关能力

- [速度](/powers/speed_power.md)：每2层影响1张抽牌数，正值多抽，负值少抽

## 源码

- `SeerMobMomentum.cs`
