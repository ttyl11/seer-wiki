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

- **印钞机+放血器**：带[保留](/mechanics/retain.md)不弃牌，每回合结束稳定 +<span style="color:#3aa675;font-weight:600">50</span> 金币——是全游戏最猛的[金币](/mechanics/money_pouch.md)引擎之一。代价是同步放血：先入账 50 金币，再按**入账后的金币总额** <span style="color:#3aa675;font-weight:600">8</span>% 结算伤害，且该伤害**不可[格挡](/mechanics/block.md)**。
- **伤害滚雪球**：金币越多，每回合掉血越狠——300 金币时每回合 -24，600 金币时 -48，900 金币时 -72。把它留在手里越久，经济越富、血线越危，是典型的"富贵险中求"。
- **打出的天价赎身费**：主动打出（<span style="color:#3aa675;font-weight:600">1</span> 费）要扣除**等于你最大生命值**的金币（金币不够则全部扣光、不会变负）。满血 80 就是 80 金币的解约金——血量越高赎身越贵，低血量时反而便宜。
- **最优使用节奏**：想最大化收益，就在"金币尚少、血线健康"的窗口多留几回合攒钱，赶在金币总额的 8% 开始疼之前打出止血；或者干脆整局不打出，用回复能力硬吃递增伤害换全图购买力。两种打法都成立，最忌讳犹犹豫豫拖到中期——那时金币已多，赎身贵、放血也重。
- **与金币体系的联动**：配合消耗金币的遗物/事件，把每回合的 50 金币即时花掉，能让 8% 的伤害基数始终压在低位——花得越快，贪婪越无害。

## 相关机制

- [手牌](/mechanics/hand.md)（回合结束时若在手牌中触发）
- [保留](/mechanics/retain.md)（回合结束时不弃置，惩罚持续生效）
- [金币](/mechanics/money_pouch.md)（获得和扣除金币）

## 源码

- `SeerGreed.cs`（位于 `Cards/Curses/` 目录）
