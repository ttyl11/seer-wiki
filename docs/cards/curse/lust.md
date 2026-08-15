# 色欲

<img src="/images/cards/lust.png" alt="色欲" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 诅咒牌
- **类型**: 诅咒
- **稀有度**: 诅咒
- **关键词**: [永恒](/mechanics/eternal.md)、[无法打出](/mechanics/unplayable.md)
- **可升级**: 否

### 数值参数

| 参数 | 数值 |
|---|---|
| 伤害每敌人 | 4 |
| Boss伤害每敌人 | 7 |

## 描述

抽到时，场上每有一个敌人受到<span style="color:#3aa675;font-weight:600">4</span>点伤害（女王为<span style="color:#3aa675;font-weight:600">7</span>点）。

## 小贴士

- **永恒**：（原版关键词）。此牌无法从牌组中移除或变化，战斗中消耗后战斗结束仍会回到牌组。
- **无法打出**：（原版关键词）。此牌无法主动打出，只能留在手牌或被其他效果弃置/消耗。
- **触发时机**：当此牌从其他牌堆进入[手牌](/mechanics/hand.md)（即抽到）时触发，对**自身**（拥有者）造成伤害。
- **伤害计算**：默认每有 1 个敌人造成 <span style="color:#3aa675;font-weight:600">4</span> 点伤害。
- **女王加伤**：若场上存在女王，伤害值提升为 <span style="color:#3aa675;font-weight:600">7</span> 点（按所有敌人计算）。面对女王时单次抽牌伤害大幅上升。

## 源码

- `SeerLust.cs`（位于 `Cards/Curses/` 目录）
