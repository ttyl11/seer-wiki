# 侵蚀

<img src="/images/cards/erosion.png" alt="侵蚀" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 状态牌
- **最大PP**: 1
- **能量消耗**: 不可打出
- **类型**: 状态
- **稀有度**: 状态
- **目标**: 无
- **关键词**: [虚无](/mechanics/ethereal.md)、[无法打出](/mechanics/unplayable.md)
- **可升级**: 否

### 数值参数

| 参数 | 数值 |
|---|---|
| 抽到时魂缚锁链层数 | 1 |
| PP | 1 |
| 最大PP | 1 |

## 描述

抽到时，获得<span style="color:#3aa675;font-weight:600">1</span>层[<span style="color:#d4a017;font-weight:600">魂缚锁链</span>](/powers/chains_of_binding_power.md)。

## 小贴士

- **魂缚的杀伤在"后续抽牌"上**：抽到侵蚀的瞬间给你 +<span style="color:#3aa675;font-weight:600">1</span> 层[魂缚锁链](/powers/chains_of_binding_power.md)（挂在你自己身上）——它本身不伤不扣，污染的是你**接下来抽到的牌**：本回合内你抽到的牌会被依次打上[魂缚](/mechanics/bound.md)标记，额度等于锁链层数（1 层锁 1 张、2 层锁 2 张……先抽到的先被锁，额度用尽后抽到的牌安全）。
- **🔑 被锁的牌每回合合计只能打出 1 张**：魂缚的限制是**全局共享 1 个出牌名额**——不管本回合有几张牌被锁，你只能从中打出 1 张，其余全部堵在手牌。重抽牌/多段抽牌的回合里，被锁的关键牌越多，"这张回合只能放弃哪张"的抉择越痛苦。
- **魂缚锁链是 Debuff，可被驱散**：锁链本身是施加在你身上的负面效果——任何"移除自身负面效果"的能力（净化、驱散类）可以整条清掉，层数归零后当回合抽牌全部安全。抽到侵蚀后优先找驱散手段，比忍着划算。
- **标记每晚清空，层数每晚保留**：回合结束时所有魂缚标记会被清除、出牌名额重置；但魂缚锁链的**层数不衰减**——侵蚀每次被抽到就再 +1 层，锁链会越叠越厚（除非驱散）。长战斗里锁链层数 = 每回合被锁的牌数，持续膨胀。
- **虚无=不滞留**：侵蚀带[虚无](/mechanics/ethereal.md)关键词，回合结束自动消耗离场——它自己不会占着手牌位，威胁全在抽到的瞬间。
- **应对策略**：①有驱散能力就驱散锁链；②没驱散时注意锁定顺序——先抽到的牌先吃掉锁定名额，**后抽到的反而安全**，尽量让关键牌安排在抽牌序列靠后；③被锁的多余牌主动弃掉，别堵手牌。
- **来源**：侵蚀不在常规卡池随机出现，由特定卡牌/敌人效果塞入；此外遗物[状态牌诅咒](/relics/event/status_cards_next_combat_relic.md)会在本场战斗首回合随机混入 8 种状态牌之一（含侵蚀）。

## 相关能力

- [魂缚锁链](/powers/chains_of_binding_power.md)（抽到侵蚀时获得 1 层，Debuff 可驱散）

## 相关机制

- [魂缚](/mechanics/bound.md)（被锁的牌每回合合计只能打出 1 张）
- [虚无](/mechanics/ethereal.md)（回合结束自动消耗）
- [无法打出](/mechanics/unplayable.md)（无法主动打出）

## 相关遗物

- [状态牌诅咒](/relics/event/status_cards_next_combat_relic.md)（随机来源：8 种状态牌随机混入）

## 源码

- `SeerErosion.cs`
- `ChainsOfBindingPower.cs`（原版魂缚锁链）
