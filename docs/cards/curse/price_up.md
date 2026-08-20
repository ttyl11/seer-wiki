# 涨价

<img src="/images/cards/price_up.png" alt="涨价" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 诅咒牌
- **能量消耗**: 0
- **类型**: 诅咒
- **稀有度**: 诅咒
- **关键词**: [消耗](/mechanics/exhaust.md)
- **可升级**: 否

### 数值参数

| 参数 | 数值 |
|---|---|
| 抽到时费用增加 | 2 |
| 打出后下回合费用增加 | 1 |

## 描述

抽到时所有[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)费用+<span style="color:#3aa675;font-weight:600">2</span>，打出任何牌后移除。打出后下回合所有[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)费用+<span style="color:#3aa675;font-weight:600">1</span>，回合结束移除。

## 小贴士

- **第一张牌必然吃满 +2 费**：+2 效果从涨价进入[手牌](/mechanics/hand.md)的瞬间挂上，直到你打出**任意一张牌**才移除——而那张"任意牌"的费用在打出时已经加过 2。也就是说抽到涨价的当回合，你打出的第一张牌无论如何都贵 2 费，唯一回避方法是整回合不出牌（通常更亏）。
- **用低费牌"垫刀"清效果**：最优解是先打出一张 0 费或 1 费的牌——它变成 2~3 费，但吃掉惩罚后，本回合其余手牌全部恢复原价，把损失压到最小。别把高价核心牌当第一张打。
- **这张牌可以打出**：涨价没有[不可打出](/mechanics/unplayable.md)关键词。它的基础费用是 <span style="color:#3aa675;font-weight:600">0</span>，但只要它还在手里，连自己也被 +2——实际要花 <span style="color:#3aa675;font-weight:600">2</span> 费才能打出，随后因[消耗](/mechanics/exhaust.md)离场。
- **打出它的代价是下回合全场 +1 费**：打出涨价会给自身挂一个隐藏状态——**下个回合**你的所有手牌费用 +<span style="color:#3aa675;font-weight:600">1</span>，持续整个下回合，下回合结束时才移除。花 2 费清一张占位的诅咒，再搭上一个完整回合的降速，通常不划算；只有在手牌位极度紧张、或当回合确实没有任何牌可垫时才考虑。
- **多张涨价不叠加**：哪怕同时抽到两张涨价，费用增加仍固定为 +2（效果读取的是卡牌上的固定数值，不随张数翻倍），不必恐慌性清牌。
- **"抽到时"实际是"任何进手路径"**：洗牌重抽、效果生成塞入手中同样触发 +2，与[氪金](/cards/curse/pay_to_win.md)的扣钱判定同源。
- **可以净化**：涨价不带[永恒](/mechanics/eternal.md)，局内消耗、变牌或局外删牌都能永久处理掉。

## 相关机制

- [手牌](/mechanics/hand.md)（费用增加的作用范围）
- [能量](/mechanics/energy.md)（费用上涨直接影响出牌节奏）
- [消耗](/mechanics/exhaust.md)（打出后离场）
- [抽牌堆](/mechanics/draw_pile.md)（重抽会再次触发）

## 源码

- `SeerPriceUp.cs`
- `SeerPriceUpPower.cs`（抽到时的隐藏费用状态）
- `SeerPriceUpNextTurnPower.cs`（打出后的下回合费用状态）
