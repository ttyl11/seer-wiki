# 枯萎能量

<img src="/images/cards/withered_energy.png" alt="枯萎能量" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色卡牌
- **最大PP**: 5
- **能量消耗**: 0
- **类型**: 技能
- **稀有度**: 普通
- **目标**: 自身
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 能量获取 | 2 | 3 |
| 格挡数值 | 8 | 8 |
| 凋零数量 | 2 | 2 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: 5/5 向[<span style="color:#d4a017;font-weight:600">抽牌堆</span>](/mechanics/draw_pile.md)和[<span style="color:#d4a017;font-weight:600">弃牌堆</span>](/mechanics/discard_pile.md)各加入一张[<span style="color:#9b59b6;font-weight:600">凋零</span>](/cards/status/wither.md)。获得<span style="color:#3aa675;font-weight:600">2</span>点[<span style="color:#d4a017;font-weight:600">能量</span>](/mechanics/energy.md)。获得<span style="color:#3aa675;font-weight:600">8</span>点[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)。

## 升级后

PP: 5/5 向[<span style="color:#d4a017;font-weight:600">抽牌堆</span>](/mechanics/draw_pile.md)和[<span style="color:#d4a017;font-weight:600">弃牌堆</span>](/mechanics/discard_pile.md)各加入一张[<span style="color:#9b59b6;font-weight:600">凋零</span>](/cards/status/wither.md)。获得<span style="color:#3aa675;font-weight:600">3</span>点[<span style="color:#d4a017;font-weight:600">能量</span>](/mechanics/energy.md)。获得<span style="color:#3aa675;font-weight:600">8</span>点[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)。

## 小贴士

- **0 费纯资源卡**：打出白赚 <span style="color:#3aa675;font-weight:600">2</span> 点[能量](/mechanics/energy.md)（升级后 <span style="color:#3aa675;font-weight:600">3</span> 点）+ <span style="color:#3aa675;font-weight:600">8</span> 点[格挡](/mechanics/block.md)。能量引擎与防御填充一肩挑，任何构筑都不嫌弃。
- **代价是牌堆污染**：每次打出向[抽牌堆](/mechanics/draw_pile.md)和[弃牌堆](/mechanics/discard_pile.md)**顶部**各塞 1 张[凋零](/cards/status/wither.md)。凋零[不可打出](/mechanics/unplayable.md)、纯占手牌位，抽到时[防御](/powers/defense_power.md) −2（之后受到的攻击伤害 +2/层，**永久叠加至战斗结束**）。
- **两路污染节奏不同**：抽牌堆顶那张**很快就会抽到**（防御 −2 近期生效）；弃牌堆那张要等洗牌后才来（延迟生效）。也就是说眼前的污染只有一半，另一半在洗牌周期后到账。
- **PP 5 = 一场最多打 5 次**：满打满算 <span style="color:#3aa675;font-weight:600">10</span> 能量 + <span style="color:#3aa675;font-weight:600">40</span> 格挡，代价是全场 <span style="color:#3aa675;font-weight:600">10</span> 张凋零——若全部抽到，防御累计 −20，长战斗后半段每挨一刀多掉 20 血。
- **短战斗放开用**：凋零与防御减益都是**战斗内**概念，战斗结束全部清空。遭遇战、速攻局里 PP 用光都不心疼；Boss 战、精英战这类长战斗建议打到防御 −6~−10 就收手，靠其它手段补格挡。
- **凋零是"手牌地雷"**：抽到凋零的回合它既不能打出也不能白弃，白白占用 1 个手牌位——手牌上限紧张时要预判抽牌堆里埋了几张。
- **升级价值高**：能量 2→3（+50%），一张一循环里多赚的 1 能量乘以 PP 5 = 全场多 5 能量，而代价（凋零数量）不变。

## 相关卡牌

- [凋零](/cards/status/wither.md)（每次打出生成 2 张，抽到时防御 −2）

## 相关能力

- [防御](/powers/defense_power.md)（凋零抽到时 −2 层，受伤增加的根源）

## 相关机制

- [抽牌堆](/mechanics/draw_pile.md)（凋零加入位置之一，顶部）
- [弃牌堆](/mechanics/discard_pile.md)（凋零加入位置之一，顶部）
- [能量](/mechanics/energy.md)（获得 2/3 点）
- [格挡](/mechanics/block.md)（获得 8 点）

## 源码

- `SeerWitheredEnergy.cs`
