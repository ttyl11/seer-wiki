# 殉道者圣别

<img src="/images/cards/martyr_holy_divine.png" alt="殉道者圣别" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 无色牌
- **能量消耗**: 0
- **类型**: 技能
- **稀有度**: 稀有
- **目标**: 自身
- **关键词**: [寂灭](/mechanics/nirvana.md)
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 生命损失百分比 | 40 | 27 |
| 覆甲数量 | 12 | 12 |

## 描述

扣除自身<span style="color:#3aa675;font-weight:600">40</span>%当前生命。下场战斗获得<span style="color:#3aa675;font-weight:600">12</span>层[<span style="color:#d4a017;font-weight:600">覆甲</span>](/powers/plating_power.md)、<span style="color:#d4a017;font-weight:600">壁垒</span>和[<span style="color:#d44;font-weight:600">异常状态</span>](/mechanics/abnormal-status.md)免疫。

## 升级后

扣除自身<span style="color:#3aa675;font-weight:600">40</span>%当前生命。下场战斗获得<span style="color:#3aa675;font-weight:600">12</span>层[<span style="color:#d4a017;font-weight:600">覆甲</span>](/powers/plating_power.md)、<span style="color:#d4a017;font-weight:600">壁垒</span>和[<span style="color:#d44;font-weight:600">异常状态</span>](/mechanics/abnormal-status.md)免疫。

## 小贴士

- **🔑 用今天的血买明天的开局堡垒**：0 费打出，扣除自身 <span style="color:#3aa675;font-weight:600">40</span>%（升级后 <span style="color:#3aa675;font-weight:600">27</span>%）**当前生命**（无视[格挡](/mechanics/block.md)的直伤），换下一场战斗开局三件套：<span style="color:#3aa675;font-weight:600">12</span> 层[覆甲](/powers/plating_power.md) + 壁垒 + [异常状态](/mechanics/abnormal-status.md)免疫。
- **⚠️ 没有[群星的礼赠](/relics/starter/elemental_core.md)遗物就是纯自杀**：三件套增益由群星的礼赠遗物承载——没拿过该遗物时打出这张牌 = 白白扣掉 40% 当前生命、什么都得不到。拿它之前先确认群星的礼赠在手。
- **覆甲×壁垒是本牌的灵魂联动**：[覆甲](/powers/plating_power.md)在你的回合结束时获得等于层数的[格挡](/mechanics/block.md)、每回合开始 -1 层；壁垒让回合结束的格挡**不再清空**——12 层覆甲 = 12/11/10…逐回合递增的永续格挡墙（累计 78 点），叠加保留的旧格挡，下一场开局就是铁桶。
- **异常免疫 = 25 种异常全免**：烧伤/中毒/衰弱/瘫痪……全部异常状态无法上身——对异常型敌人（上异常的精英/Boss）是碾压级开局。
- **血价按"当前生命"百分比结算——残血时打最省**：满血 100/100 打出 = 扣 40 点；打完一场剩 30 血时打出 = 只扣 12 点。**最优节奏：本场战斗收尾、血线已低时打出**，几乎白嫖三件套。
- **[寂灭](/mechanics/nirvana.md)一次性交易**：本场战斗结束时从牌组移除——不存在重复刷血价的问题，一局一张用完即走；收益窗口严格限定"下一场"，Boss/精英前使用价值最大。
- **升级减 13% 血价**：40%→27% 是显著降价（满血打出从扣 40 变扣 27），0 费卡升级零负担，拿到必升。

## 相关机制

- [寂灭](/mechanics/nirvana.md)（mod 关键词，打出后从牌组移除）
- [异常状态](/mechanics/abnormal-status.md)（下场战斗免疫全部 24 种异常）

## 源码

- `SeerMartyrHolyDivine.cs`
