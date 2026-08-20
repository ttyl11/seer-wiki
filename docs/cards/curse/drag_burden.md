# 拖50

<img src="/images/cards/drag_burden.png" alt="拖50" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 诅咒牌
- **类型**: 诅咒
- **稀有度**: 诅咒
- **关键词**: [永恒](/mechanics/eternal.md)、[不可打出](/mechanics/unplayable.md)
- **可升级**: 否

### 数值参数

| 参数 | 数值 |
|---|---|
| 每回合伤害系数 | 2 |

## 描述

在你的回合结束时，若此牌在你[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)中，受到等同于当前回合数×<span style="color:#3aa675;font-weight:600">2</span>的伤害。

## 小贴士

- **伤害随回合数线性恶化**：结算公式是"当前回合数 × 2"——第 <span style="color:#3aa675;font-weight:600">3</span> 回合结束在手受 <span style="color:#3aa675;font-weight:600">6</span> 点，第 <span style="color:#3aa675;font-weight:600">5</span> 回合受 <span style="color:#3aa675;font-weight:600">10</span> 点，第 <span style="color:#3aa675;font-weight:600">10</span> 回合受 <span style="color:#3aa675;font-weight:600">20</span> 点。名字里的"拖50"就是警告：**拖到第 25 回合就是 50 点**——这张诅咒专罚拖延，长战斗/消耗流的克星。
- **伤害不可格挡**：结算伤害不受[格挡](/mechanics/block.md)减免，直接扣血。堆格挡挡不住它，只能靠尽快结束战斗或把它移出手牌。
- **触发条件是"在手牌中"**：只有回合结束它恰好在[手牌](/mechanics/hand.md)里才结算。它抽到手里被弃掉后再抽不到的回合（在抽牌堆/弃牌堆中）完全无事——伤害压力是间歇性的，取决于洗牌位置。
- **永恒+不可打出=双锁死**：带[永恒](/mechanics/eternal.md)（删牌、变牌、吞噬都无法把它从卡组移除）和[不可打出](/mechanics/unplayable.md)（无法主动打出）——一旦入手，只能靠消耗类卡牌效果把它从手牌移走，否则每回合都可能续上递增伤害。
- **应对策略**：尽快结束战斗是最好的解法；卡组里备一张"消耗手牌"类效果，在它进手的当回合处理掉，能跳过整轮惩罚。

## 相关机制

- [手牌](/mechanics/hand.md)（触发条件：此牌在手牌中）
- [永恒](/mechanics/eternal.md)（不可从卡组移除）
- [不可打出](/mechanics/unplayable.md)（无法主动打出）
- [格挡](/mechanics/block.md)（惩罚伤害不受格挡减免）

## 源码

- `SeerDragBurden.cs`
