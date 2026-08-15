# 暴食

<img src="/images/cards/gluttony.png" alt="暴食" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 诅咒牌
- **类型**: 诅咒
- **稀有度**: 诅咒
- **关键词**: [虚无](/mechanics/ethereal.md)、[无法打出](/mechanics/unplayable.md)
- **可升级**: 否

### 数值参数

| 参数 | 数值 |
|---|---|
| 最大生命获取 | 1 |
| 诅咒数量 | 2 |

## 描述

进入[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)时获得<span style="color:#3aa675;font-weight:600">1</span>点最大生命值。回合结束时若在[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)中，下回合加入<span style="color:#3aa675;font-weight:600">2</span>张随机[<span style="color:#9b59b6;font-weight:600">诅咒</span>](/mechanics/keywords.md)。

## 小贴士

- **虚无**：（原版关键词）。若此牌在回合结束时仍在手牌中，则被消耗。
- **无法打出**：（原版关键词）。此牌无法被打出，只能通过其他效果处理。
- **进入手牌**：当此牌从其他牌堆进入手牌时，永久获得 <span style="color:#3aa675;font-weight:600">1</span> 点最大生命值。
- **回合结束标记**：若此牌在手牌中回合结束，会被标记以触发下回合效果。
- **下回合加诅咒**：下回合开始时，从诅咒池中随机抽取 <span style="color:#3aa675;font-weight:600">2</span> 张诅咒加入手牌。

## 相关机制

- [手牌](/mechanics/hand.md)（进入手牌时触发效果）
- [虚无](/mechanics/ethereal.md)（回合结束时消耗）
- [无法打出](/mechanics/unplayable.md)（无法主动打出）

## 源码

- `SeerGluttony.cs`（位于 `Cards/Curses/` 目录）
