# 五月的锋芒

<img src="/images/cards/may_edge.png" alt="五月的锋芒" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 1
- **能量消耗**: 1
- **类型**: 能力
- **稀有度**: 普通
- **目标**: 自身
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| PP | 1 | 1 |
| 最大PP | 1 | 1 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 自身打出[<span style="color:#d4a017;font-weight:600">暴击</span>](/powers/critical_strike_power.md)时，[<span style="color:#d4a017;font-weight:600">先制</span>](/powers/first_strike_power.md)+<span style="color:#3aa675;font-weight:600">1</span>。

## 升级后

<span style="color:#d4a017;font-weight:600">固有</span>。PP: <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 自身打出[<span style="color:#d4a017;font-weight:600">暴击</span>](/powers/critical_strike_power.md)时，[<span style="color:#d4a017;font-weight:600">先制</span>](/powers/first_strike_power.md)+<span style="color:#3aa675;font-weight:600">1</span>。

## 小贴士

- **暴击转先制的正循环引擎**：每次打出[暴击](/powers/critical_strike_power.md)（攻击 <span style="color:#3aa675;font-weight:600">12.5%</span> 概率，<span style="color:#3aa675;font-weight:600">1.5</span> 倍伤害）就获得 <span style="color:#3aa675;font-weight:600">1</span> 层[先制](/powers/first_strike_power.md)（每层让下张牌减 <span style="color:#3aa675;font-weight:600">1</span> 费）。暴击越多 → 先制越多 → 后续高费牌越便宜 → 更容易打出更多攻击 → 更多暴击机会，形成正循环。
- **每次攻击只触发一次**：即便一次攻击打多个目标（如群体攻击），暴击也只加 <span style="color:#3aa675;font-weight:600">1</span> 层先制——不会因为打多个目标就多次累积。
- **是增益，能被消增益清除**：锋芒是增益类型能力，整场战斗持续，但被消除增益的效果会直接清掉，暴击不再转先制。
- **暴击率决定收益上限**：这张牌的价值完全取决于暴击率。<span style="color:#3aa675;font-weight:600">12.5%</span> 基础暴击率意味着平均每 <span style="color:#3aa675;font-weight:600">8</span> 次攻击才触发一次先制——需要配合增加暴击率的能力或遗物才能让正循环真正转起来。
- **升级固有让首回合就能启动**：升级后获得[固有](/mechanics/innate.md)，战斗开始即入手牌。能力牌最怕抽不到，固有直接解决启动问题——首回合打出，后续全程享受暴击转先制。
- **性价比**：<span style="color:#3aa675;font-weight:600">1</span> 费换整场战斗暴击转先制，暴击流派加速器的合理定价，升级固有让启动更快。

## 相关能力

- [锋芒](/powers/may_edge_power.md)：增益，自身打出暴击时先制 +1
- [暴击](/powers/critical_strike_power.md)：攻击时 12.5% 概率造成 1.5 倍伤害
- [先制](/powers/first_strike_power.md)：增益，每层使下一张牌耗能 -1

## 源码

- `SeerMayEdge.cs`
