# 氪金

<img src="/images/cards/pay_to_win.png" alt="氪金" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 诅咒牌
- **能量消耗**: 1
- **类型**: 诅咒
- **稀有度**: 诅咒
- **关键词**: [消耗](/mechanics/exhaust.md)
- **可升级**: 否

### 数值参数

| 参数 | 数值 |
|---|---|
| 金币百分比损失 | 6 |
| 易伤层数 | 99 |
| 虚弱层数 | 99 |

## 描述

加入[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)时，失去当前<span style="color:#d4a017;font-weight:600">金币</span>的<span style="color:#3aa675;font-weight:600">6</span>%。打出时，自身附加99层[<span style="color:#d44;font-weight:600">易伤</span>](/powers/vulnerable_power.md)和[<span style="color:#d44;font-weight:600">虚弱</span>](/powers/weak_power.md)。

## 小贴士

- **每次进入手牌都扣钱，不是只扣一次**：扣钱判定挂在"进入手牌"这一事件上——抽到扣、被洗牌重抽再扣、任何效果把它塞回手里也扣。放任它在[抽牌堆](/mechanics/draw_pile.md)和[弃牌堆](/mechanics/discard_pile.md)之间循环，每转一圈就再失去一次金币（向下取整）。越早处理掉，总损失越小。
- **这张牌可以打出**：氪金没有[不可打出](/mechanics/unplayable.md)关键词，能量足够就能主动打出——但打出时给自己附加 <span style="color:#3aa675;font-weight:600">99</span> 层[易伤](/powers/vulnerable_power.md)（受到攻击伤害 +50%）和 <span style="color:#3aa675;font-weight:600">99</span> 层[虚弱](/powers/weak_power.md)（造成攻击伤害 −25%），随后因[消耗](/mechanics/exhaust.md)离场。
- **99 层≈整场战斗**：两种减益每回合只衰减 1 层，99 层意味着战斗打完都消不掉。打出氪金后你在本场战斗里攻防两端全面劣化，除非战斗只剩 1~2 回合收尾，否则基本等于自废。
- **何时值得打**：仅两种局面——战斗下回合必胜（减益没机会结算几层）、或你急需腾出手牌位且正好有 1 点富余能量。其余情况宁可吃金币损失也别打。
- **更好的出路**：氪金不带[永恒](/mechanics/eternal.md)，属于可净化诅咒——用消耗类效果移出手牌、局内变牌、或战斗后直接删牌都是正解，一张都不该留到下一场。
- **金币损失幅度**：损失量 = 当前金币 × 6% 向下取整。金币越多单次损失越大，囤钱阶段抽到它格外肉疼。

## 相关机制

- [手牌](/mechanics/hand.md)（触发条件位置）
- [易伤](/powers/vulnerable_power.md) / [虚弱](/powers/weak_power.md)（打出惩罚）
- [消耗](/mechanics/exhaust.md)（打出后离场）
- [抽牌堆](/mechanics/draw_pile.md) / [弃牌堆](/mechanics/discard_pile.md)（循环重抽会重复扣钱）

## 源码

- `SeerPayToWin.cs`
