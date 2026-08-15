# 轮回

<img src="/images/cards/reincarnation.png" alt="轮回" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 1
- **能量消耗**: 4
- **类型**: 技能
- **稀有度**: 基础
- **目标**: 自身
- **可升级**: 是（1 级）
- **对应先古牌**: [神圣复苏](/cards/character/holy_revival.md)（由[起源流转](/relics/starter/origin_shift.md)转化）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 回复百分比 | 100 | 100 |
| PP | 1 | 1 |
| 最大PP | 1 | 1 |
| 耗能 | 4 | 4 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 恢复最大生命值的<span style="color:#3aa675;font-weight:600">100</span>%。每次使用后，恢复比例减半。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> [<span style="color:#d4a017;font-weight:600">保留</span>](/mechanics/retain.md)。恢复最大生命值的<span style="color:#3aa675;font-weight:600">100</span>%。每次使用后，恢复比例减半。

## 小贴士

- **首次满血，之后每次减半——递减回血**：第一次打出恢复最大生命 <span style="color:#3aa675;font-weight:600">100</span>%（满血），第二次 <span style="color:#3aa675;font-weight:600">50</span>%，第三次 <span style="color:#3aa675;font-weight:600">25</span>%，第四次 <span style="color:#3aa675;font-weight:600">12.5</span>%……每次使用后比例减半。
- **跨战斗持久化——整局 run 内的递减**：使用计数跨战斗不重置，是整局 run 内的累计。所以这张牌的"满血"只有第一次，后续每场战斗都是递减后的比例——不能每场战斗都靠它满血复活。注意 PP 本身是单场战斗资源，每场战斗重置为 1，但使用计数永久保存。
- **回复下限 < 1% 不再回复**：当回复比例低于 <span style="color:#3aa675;font-weight:600">1</span>% 时，打出这张牌不再回血——但仍消耗能量和 PP。前 <span style="color:#3aa675;font-weight:600">7</span> 次使用都会回复（比例从 <span style="color:#3aa675;font-weight:600">100</span>% 递减到约 <span style="color:#3aa675;font-weight:600">1.56</span>%），第 <span style="color:#3aa675;font-weight:600">8</span> 次开始比例低于 <span style="color:#3aa675;font-weight:600">1</span>% 不再回复。
- **首次使用是核心价值——满血救命**：第一次打出 <span style="color:#3aa675;font-weight:600">4</span> 费换满血，是 mod 里最强的救命牌之一。后续使用价值递减，但要珍惜首次——别在血量还健康时浪费。
- **升级加保留——可在手牌中留存等待时机**：升级后获得[保留](/mechanics/retain.md)，回合结束不弃置。这意味着你可以把它留在手牌里，等血量危急时再打出——配合首次满血效果，是终极保命手段。
- **4 费高耗能——不能随时打出**：<span style="color:#3aa675;font-weight:600">4</span> 费意味着基本要耗尽整回合能量，打出后这回合基本不能做其它事。所以要配合[先制](/powers/first_strike_power.md)或减费手段，或在危急时刻单独打出。
- **性价比**：<span style="color:#3aa675;font-weight:600">4</span> 费换首次满血是救命级性价比，后续递减后价值下降；升级加保留让"等危急再打"成为可能，显著提升战术价值。

## 相关机制

- [保留](/mechanics/retain.md)：升级后获得的关键词，回合结束不弃置
- 最大生命值：回复比例的基数

## 源码

- `SeerReincarnation.cs`
