# 冲锋

<img src="/images/cards/charge.png" alt="冲锋" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 诅咒牌
- **类型**: 诅咒
- **稀有度**: 诅咒
- **可升级**: 否

### 数值参数

| 参数 | 数值 |
|---|---|
| 伤害阈值 | 20 |
| 惩罚伤害 | 15 |

## 描述

此牌在[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)中时，若一回合造成的伤害未超过<span style="color:#3aa675;font-weight:600">20</span>，在你的回合结束时受到<span style="color:#3aa675;font-weight:600">15</span>点伤害。

## 小贴士

- **触发条件**：此牌必须在[手牌](/mechanics/hand.md)中时才生效。若在[抽牌堆](/mechanics/draw_pile.md)、[消耗牌堆](/mechanics/exhaust_pile.md)中则不触发。
- **伤害统计**：（不可见能力）会记录本回合造成的所有未格挡伤害，回合结束时若低于阈值则受到惩罚。
- **惩罚伤害类型**：惩罚伤害为固定伤害，不受[格挡](/mechanics/block.md)减免。
- **不可打出**（[<span style="color:#d4a017;font-weight:600">查看机制页</span>](/mechanics/unplayable.md)，原版关键词）：无法被打出。
- **回合结束清除**：每回合结束时重置伤害计数，下回合重新计算。

## 相关机制

- [手牌](/mechanics/hand.md)（触发条件位置）
- [不能被打出](/mechanics/unplayable.md)（原版关键词）
- [格挡](/mechanics/block.md)（惩罚伤害不受格挡减免）

## 源码

- `SeerCharge.cs`
- `SeerChargePower.cs`（内部不可见能力）
