# 圣盾护佑

<img src="/images/cards/holy_shield.png" alt="圣盾护佑" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 10
- **能量消耗**: 1
- **类型**: 技能
- **稀有度**: 罕见
- **目标**: 自身
- **获得格挡**: 是
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 每张消耗PP | 3 | 2 |
| PP | 10 | 10 |
| 最大PP | 10 | 10 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">10</span>/<span style="color:#3aa675;font-weight:600">10</span> 获得等于当前手牌PP之和的[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)，并消耗每张牌至多<span style="color:#3aa675;font-weight:600">3</span>点PP。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">10</span>/<span style="color:#3aa675;font-weight:600">10</span> 获得等于当前手牌PP之和的[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)，并消耗每张牌至多<span style="color:#3aa675;font-weight:600">2</span>点PP。

## 小贴士

- **格挡 = 手牌 PP 总和**：先累加[手牌](/mechanics/hand.md)中所有 PP 卡的当前 pp，再获得等量[格挡](/mechanics/block.md)。格挡受[敏捷](/powers/dexterity_power.md)加成、受[脆弱](/powers/frail_power.md)削减（与正常格挡规则一致）。手牌里 PP 卡越多、pp 越满，格挡越高。
- **先获得格挡再消耗 PP**：顺序很重要——先按当前 pp 总和获得格挡，然后才消耗每张牌至多 3 点 pp（升级后 2 点）。所以获得的格挡是消耗前的满额。
- **升级减少 PP 消耗**：每张牌消耗从 3 点降至 2 点。保留更多 PP 用于后续 PP 卡的使用，是显著的续航提升。
- **1 费换大量格挡**：手牌 5 张 PP 卡各 pp 10 时，一次获得 50 点格挡。1 费换 50 格挡超模，代价是消耗 15 点 PP（升级后 10 点）。
- **PP 卡越多越超值**：这张牌的价值与手牌 PP 卡数量正相关。PP 卡多的牌组里是核心格挡手段；PP 卡少的牌组里格挡有限。

## 相关机制

- [格挡](/mechanics/block.md)（等于手牌 PP 之和，受敏捷/脆弱影响）
- [手牌](/mechanics/hand.md)（PP 来源）

## 源码

- `SeerHolyShield.cs`
