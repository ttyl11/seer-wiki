# 十一月的柑橘

<img src="/images/cards/november_citrus.png" alt="十一月的柑橘" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 1
- **能量消耗**: 3
- **类型**: 能力
- **稀有度**: 普通
- **目标**: 无
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| PP | 1 | 1 |
| 最大PP | 1 | 1 |

## 描述

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 每打出1张牌，恢复等于打出数量的生命。每回合重置。

## 升级后

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 每打出1张牌，恢复等于打出数量的生命。每回合重置。耗能降至<span style="color:#3aa675;font-weight:600">2</span>。

## 小贴士

- **递增回血——第 N 张牌回 N 点血**：本回合每打出一张牌，恢复等于**已打出牌数**的生命。第 <span style="color:#3aa675;font-weight:600">1</span> 张回 <span style="color:#3aa675;font-weight:600">1</span> 血，第 <span style="color:#3aa675;font-weight:600">2</span> 张回 <span style="color:#3aa675;font-weight:600">2</span> 血，第 <span style="color:#3aa675;font-weight:600">3</span> 张回 <span style="color:#3aa675;font-weight:600">3</span> 血，以此类推。一回合打 <span style="color:#3aa675;font-weight:600">5</span> 张牌总共回 <span style="color:#3aa675;font-weight:600">15</span> 血（1+2+3+4+5），打 <span style="color:#3aa675;font-weight:600">10</span> 张牌回 <span style="color:#3aa675;font-weight:600">55</span> 血——过牌越多回血滚雪球越猛。
- **每回合重置计数**：计数器在自己回合开始时归零，每回合重新从 <span style="color:#3aa675;font-weight:600">1</span> 开始累积。所以这张牌的价值取决于**每回合能打多少张牌**——过牌流派的回合出牌数越多，回血收益越大。
- **只算自己打的牌**：多人模式下队友打牌不触发回血——只有自己打出的牌才计数。所以这张牌在多人模式下不会因为队友多打牌而加速回血。
- **是增益，能被消增益清除**：柑橘是增益类型能力，整场战斗持续，但被消除增益的效果会直接清掉，递增回血立即停止。
- **3 费启动偏贵，升级 2 费是关键**：<span style="color:#3aa675;font-weight:600">3</span> 费能力牌在前期很难打出——打出后当回合剩余能量少，无法多打牌触发回血。升级降至 <span style="color:#3aa675;font-weight:600">2</span> 费后启动更轻松，打出后还能用剩余能量打 <span style="color:#3aa675;font-weight:600">1</span>-<span style="color:#3aa675;font-weight:600">2</span> 张牌开始累积回血。
- **性价比**：<span style="color:#3aa675;font-weight:600">3</span> 费（升级 <span style="color:#3aa675;font-weight:600">2</span> 费）换整场战斗递增回血，过牌流派续航核心，出牌越多性价比越高，升级 <span style="color:#3aa675;font-weight:600">2</span> 费让启动更可行。

## 相关能力

- [柑橘](/powers/november_citrus_power.md)：增益，每打出一张牌恢复等于本回合已打出牌数的生命，每回合重置计数

## 源码

- `SeerNovemberCitrus.cs`
