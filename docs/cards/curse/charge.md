# 冲锋

<img src="/images/cards/charge.png" alt="冲锋" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 诅咒牌
- **类型**: 诅咒
- **稀有度**: 诅咒
- **关键词**: [永恒](/mechanics/eternal.md)、[不可打出](/mechanics/unplayable.md)
- **可升级**: 否

### 数值参数

| 参数 | 数值 |
|---|---|
| 伤害阈值 | 20 |
| 惩罚伤害 | 15 |

## 描述

此牌在[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)中时，若一回合造成的伤害未超过<span style="color:#3aa675;font-weight:600">20</span>，在你的回合结束时受到<span style="color:#3aa675;font-weight:600">15</span>点伤害。

## 小贴士

- **触发链是"进手牌挂状态→回合结束判定"**：冲锋第一次进入[手牌](/mechanics/hand.md)时，给自身施加一个不可见状态，由它负责记账和结算惩罚。
- **⚠️ 判定并不只统计你自己的伤害**：描述写"你造成的伤害"，但记账逻辑不区分伤害来源——**战斗中所有生物**（包括敌人打你、你的[固定伤害](/powers/fixed_damage_power.md)、DoT 结算等）造成的未格挡伤害都会累计进同一本账。敌人打你 <span style="color:#3aa675;font-weight:600">20</span> 点以上、你全程划水的回合，冲锋一样不会罚你——实际惩罚只会在"全场几乎无伤害流动"的低活跃回合触发，比描述听起来宽松得多。
- **⚠️ 状态挂上后不再离手**：即使冲锋之后离开手牌（被消耗、被变牌），记账状态也不会移除，会一直生效到战斗结束——不要以为把它移出手牌就高枕无忧，低伤害回合照样结算。
- **惩罚伤害不可格挡**：结算的 <span style="color:#3aa675;font-weight:600">15</span> 点伤害不可被[格挡](/mechanics/block.md)减免，直接扣血。
- **每回合重置**：伤害计数在自己回合结束时清零重算，判定周期与回合对齐。
- **永恒=无法净化**：冲锋带[永恒](/mechanics/eternal.md)关键词，删牌、变牌、吞噬类效果都无法把它从卡组里移除——拿到就只能带一整局，靠"每回合打出足量伤害"消化它。
- **不可打出**：无法主动打出（[查看机制页](/mechanics/unplayable.md)），只能靠消耗类效果移出手牌，但注意状态仍会常驻。

## 相关机制

- [手牌](/mechanics/hand.md)（触发条件位置）
- [永恒](/mechanics/eternal.md)（不可从卡组移除）
- [不可打出](/mechanics/unplayable.md)（无法主动打出）
- [格挡](/mechanics/block.md)（惩罚伤害不受格挡减免）

## 源码

- `SeerCharge.cs`
- `SeerChargePower.cs`（内部不可见能力）
