# 贪婪

<img src="/images/cards/greed.png" alt="贪婪" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 诅咒牌
- **能量消耗**: 1
- **类型**: 诅咒
- **稀有度**: 诅咒
- **关键词**: [保留](/mechanics/retain.md)
- **可升级**: 否

### 数值参数

| 参数 | 数值 |
|---|---|
| 金币获取 | 50 |
| 伤害百分比 | 8% |

## 描述

回合结束时若在[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)中，获得<span style="color:#3aa675;font-weight:600">50</span>[<span style="color:#d4a017;font-weight:600">金币</span>](/mechanics/money_pouch.md)并受到当前[<span style="color:#d4a017;font-weight:600">金币</span>](/mechanics/money_pouch.md)数<span style="color:#3aa675;font-weight:600">8</span>%的伤害。打出：扣除等于最大生命值的[<span style="color:#d4a017;font-weight:600">金币</span>](/mechanics/money_pouch.md)。

## 小贴士

- **保留**：（原版关键词）。此牌在回合结束时不会弃置，保留在手牌中。
- **回合结束触发**：若此牌在手牌中回合结束：
 - 获得 <span style="color:#3aa675;font-weight:600">50</span> 金币
 - 受到当前金币数 <span style="color:#3aa675;font-weight:600">8</span>% 的伤害
- **打出惩罚**：打出时扣除等于最大生命值的金币，最多扣除至 <span style="color:#3aa675;font-weight:600">0</span> 金币。
- **风险与收益**：保留在手牌中每回合获得 <span style="color:#3aa675;font-weight:600">50</span> 金币，但伤害随金币累积增加。打出可避免伤害但损失大量金币。

## 相关机制

- [手牌](/mechanics/hand.md)（回合结束时若在手牌中触发）
- [保留](/mechanics/retain.md)（回合结束时不弃置）
- [金币](/mechanics/money_pouch.md)（获得和扣除金币）

## 源码

- `SeerGreed.cs`（位于 `Cards/Curses/` 目录）
