# 保底

<img src="/images/cards/guaranteed.png" alt="保底" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 诅咒牌
- **类型**: 诅咒
- **稀有度**: 诅咒
- **关键词**: [固有](/mechanics/innate.md)、[保留](/mechanics/retain.md)、[无法打出](/mechanics/unplayable.md)
- **可升级**: 否

### 数值参数

| 参数 | 数值 |
|---|---|
| 伤害概率 | 99% |
| 奖励概率 | 1% |
| 伤害 | 10 |

## 描述

抽到时<span style="color:#3aa675;font-weight:600">99</span>%概率受到<span style="color:#3aa675;font-weight:600">10</span>点伤害。战斗结束<span style="color:#3aa675;font-weight:600">1</span>%概率获得一张随机稀有牌。

## 小贴士

- **固有**：（原版关键词）。此牌在战斗开始时必定在手牌中。
- **保留**：（原版关键词）。此牌在回合结束时不会弃置。
- **无法打出**：（原版关键词）。此牌无法被打出，只能通过其他效果处理。
- **抽到时伤害**：当此牌进入手牌时，<span style="color:#3aa675;font-weight:600">99</span>% 概率受到 <span style="color:#3aa675;font-weight:600">10</span> 点伤害。
- **战斗结束奖励**：战斗结束时若手牌中有"保底"，<span style="color:#3aa675;font-weight:600">1</span>% 概率获得一张随机稀有牌。

## 相关机制

- [固有](/mechanics/innate.md)（战斗开始时必定在手牌）
- [保留](/mechanics/retain.md)（回合结束时不弃置）
- [无法打出](/mechanics/unplayable.md)（无法主动打出）

## 源码

- `SeerGuaranteed.cs`（位于 `Cards/Curses/` 目录）
