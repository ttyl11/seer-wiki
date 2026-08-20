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

- **受伤的是你自己**：描述读起来像"敌人挨打"，实际是对**你自身**结算——伤害总量 = 当前场上敌人数 × 每敌基数。单怪场合抽到只掉 <span style="color:#3aa675;font-weight:600">4</span> 点，双怪 <span style="color:#3aa675;font-weight:600">8</span> 点，三怪混战 <span style="color:#3aa675;font-weight:600">12</span> 点——**怪越多，抽到它越痛**，与"多怪关需要更多过牌"的需求正面冲突。
- **伤害不可格挡**：结算伤害不受[格挡](/mechanics/block.md)减免，直接扣血。
- **女王场合大幅恶化**：场上存在女王（Boss）时基数从 4 跳到 <span style="color:#3aa675;font-weight:600">7</span>——女王+小怪的组合里每抽到一次就是 7×怪数，是这张诅咒最凶的场合。
- **触发时机是"进手牌"**：从抽牌堆抽到、被检索/回收入手都会触发；在抽牌堆、弃牌堆里躺着时无害。
- **永恒+无法打出=无法根除**：带[永恒](/mechanics/eternal.md)（删牌、变牌、吞噬都无法移除）和[无法打出](/mechanics/unplayable.md)——它每场战斗都会随洗牌循环回到你手里，多怪战斗中长期放血。应对只能靠压缩过牌频率、或在高怪量场合优先用消耗类效果把它当回合移出手。
- **相关线索**：色欲是七宗罪系列诅咒之一（[嫉妒](/cards/curse/envy.md)、[暴食](/cards/curse/gluttony.md)、[贪婪](/cards/curse/greed.md)等同系列），系列共性是"无法打出、靠行为代价结账"。

## 相关机制

- [手牌](/mechanics/hand.md)（进入手牌时触发）
- [永恒](/mechanics/eternal.md)（不可从卡组移除）
- [无法打出](/mechanics/unplayable.md)（无法主动打出）
- [格挡](/mechanics/block.md)（伤害不受格挡减免）

## 源码

- `SeerLust.cs`（位于 `Cards/Curses/` 目录）
