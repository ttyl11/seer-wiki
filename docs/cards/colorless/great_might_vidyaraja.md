# 大威势明王

<img src="/images/cards/great_might_vidyaraja.png" alt="大威势明王" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 无色牌
- **能量消耗**: 10
- **类型**: 能力
- **稀有度**: 罕见
- **目标**: 自身
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 基础耗能 | 10 | 8 |

## 描述

每损失<span style="color:#3aa675;font-weight:600">10</span>%生命，耗能<span style="color:#3aa675;font-weight:600">-1</span>。将所有敌人生命比例调整至与自身相同。本场战斗受击时反转其[<span style="color:#d4a017;font-weight:600">全属性</span>](/mechanics/all_attributes.md)提升。

## 升级后

每损失<span style="color:#3aa675;font-weight:600">10</span>%生命，耗能<span style="color:#3aa675;font-weight:600">-1</span>。将所有敌人生命比例调整至与自身相同。本场战斗受击时反转其[<span style="color:#d4a017;font-weight:600">全属性</span>](/mechanics/all_attributes.md)提升。（基础耗能 <span style="color:#3aa675;font-weight:600">-2</span>）

## 小贴士

- **🔑 越残血越便宜的"斩血令"**：耗能 = 基础费 − 已损生命% ÷ <span style="color:#3aa675;font-weight:600">10</span>（向下取整）。血量 <span style="color:#3aa675;font-weight:600">50</span>% 时 10 费版只要 <span style="color:#3aa675;font-weight:600">5</span> 费；血量 <span style="color:#3aa675;font-weight:600">20</span>% 时升级版（基础 8 费）直接 <span style="color:#3aa675;font-weight:600">0</span> 费——刻意压血线把它变成免费斩杀。
- **比例调整是无视格挡的真实伤害**：差额伤害标记为 Unblockable+Unpowered——[格挡](/mechanics/block.md)挡不住、[易伤](/mechanics/abnormal-status.md)/增伤/减伤一概不影响。你 <span style="color:#3aa675;font-weight:600">50</span>% 血打出 = 满血 Boss 当场被削到半血（按比例削血，不吃任何防御体系）。
- **你血比敌人高时会奶敌人**：比例调整是双向的——敌人生命比例**低于**你时，差额会变成**治疗**把它奶到你的比例。满血打出 = 把残血敌人直接奶满！务必在你血线低于敌人时才打。
- **受击反转全属性（N → −N）**：之后本场每次受击（实际掉血），所有敌人的[全属性](/mechanics/all_attributes.md)（[力量](/powers/strength_power.md)/命中/[防御](/powers/defense_power.md)/速度）中的**正值** N 被施加 −2N——即 +N 反转成 −N。克制疯狂叠属性的 Boss：它叠 +10 力量，你挨一巴掌它变 −10（攻击伤害反而暴跌），负[防御](/powers/defense_power.md)还让它受攻击伤害增加。
- **反转只针对正增益**：属性本来就是 0 或负数的敌人不受影响——对不叠属性的普通怪价值有限，本质是"属性战特化"反制牌。
- **三段式定位**：①残血时低价打出 ②按你血线压斩全场 ③之后每次挨打都在惩罚属性增益敌人——一张牌把"卖血流/斩杀/反制"三条线全部占齐，10 费的基础定价是它唯一的门槛。
- **升级的本质是降低启动血线**：基础 8 费后，损失 <span style="color:#3aa675;font-weight:600">60</span>% 血（剩 40%）即 2 费、损失 <span style="color:#3aa675;font-weight:600">80</span>%（剩 20%）免费——比 10 费版（需剩 20% 血才 2 费）提前一整档进入斩杀区，必升。

## 相关能力

- [大威势明王](/powers/great_might_vidyaraja_power.md)（受击时反转敌人全属性）

## 相关机制

- [全属性](/mechanics/all_attributes.md)（力量/防御/命中/速度）

## 源码

- `SeerGreatMightVidyaraja.cs`
