# 嫉妒

<img src="/images/cards/envy.png" alt="嫉妒" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 诅咒牌
- **类型**: 诅咒
- **稀有度**: 诅咒
- **关键词**: [无法打出](/mechanics/unplayable.md)
- **可升级**: 否

### 数值参数

| 参数 | 数值 |
|---|---|
| 移除战斗数 | 4 |

## 描述

<span style="color:#3aa675;font-weight:600">4</span>场战斗后从[<span style="color:#d4a017;font-weight:600">牌组</span>](/mechanics/draw_pile.md)移除。回合结束时若在[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)中，战斗结束随机添加一张打击或防御牌（每场战斗最多一张）。

## 小贴士

- **无法打出**（原版关键词）：此牌无法被打出，只能保留在手中或被其他效果弃置/消耗。
- **回合结束触发**：回合结束时标记本战斗已触发，每场战斗最多触发一次。
- **战斗结束生成牌**：战斗结束时，若本战斗已触发，50% 概率随机创建一张打击（原版牌）或防御（原版牌）加入[牌组](/mechanics/draw_pile.md)。
- **自动移除**：在[牌组](/mechanics/draw_pile.md)中时，本场战斗累计计数每场战斗 +1，达到 <span style="color:#3aa675;font-weight:600">4</span> 后从[牌组](/mechanics/draw_pile.md)移除。

## 相关机制

- [手牌](/mechanics/hand.md)（回合结束时若在手牌中触发效果）
- [无法打出](/mechanics/unplayable.md)（关键词）

## 源码

- `SeerEnvy.cs`（位于 `Curses/` 子目录）
