# 黏液？

<img src="/images/cards/slime_quest.png" alt="黏液？" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 状态牌
- **最大PP**: 1
- **能量消耗**: 0
- **类型**: 状态
- **稀有度**: 状态
- **目标**: 无
- **关键词**: [保留](/mechanics/retain.md)、[消耗](/mechanics/exhaust.md)
- **可升级**: 是（无限级，但升级是负收益）

### 数值参数

| 参数 | 初始 | 每升 1 级 |
|---|---|---|
| 抽牌数量 | 2 | 不变 |
| 生成黏液数量 | 1 | +1 |

## 描述

抽<span style="color:#3aa675;font-weight:600">2</span>张牌。向你的[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)加入<span style="color:#3aa675;font-weight:600">1</span>张黏液。

## 小贴士

- **表面是污染，实际是抽牌引擎**：0 费打出抽 <span style="color:#3aa675;font-weight:600">2</span> 张牌，代价只是手里多 1 张黏液（原版 1 费状态牌：消耗、打出抽 <span style="color:#3aa675;font-weight:600">1</span> 张）。黏液本身还能再花 1 费抽 1——整条链是"0费抽2 → 1费抽1"的过牌流水线，纯抽牌效率并不亏。
- **升级是陷阱（红字升级）**：每次升级多塞 <span style="color:#3aa675;font-weight:600">1</span> 张黏液，抽牌数不变——**越升级手牌越堵**。[史莱姆国王](/monsters/normal/slime_king_monster.md)的"国王之怒"与[史莱姆王子](/monsters/normal/slime_prince_monster.md)的"能量震波"会**强制升级你所有的黏液？**，这就是它们的核心骚扰手段。任何"升级全牌堆"的效果（如休息点锻打全升级类）也会误伤它。
- **对史莱姆王：打出 = 喂异次元冲击**：黏液？与黏液都是状态牌且自带[消耗](/mechanics/exhaust.md)——被打出后进[消耗堆](/mechanics/exhaust_pile.md)，而国王的"异次元冲击"按你**消耗堆中状态牌数**附加等量[固定伤害](/powers/fixed_damage_power.md)。每打一张黏液？/黏液，下一次异次元冲击固伤 +1。抽牌收益与固伤风险要一起算：想压固伤就少消耗状态牌（靠[保留](/mechanics/retain.md)把黏液？攥在手里——但它会持续占手牌位）。
- **闪光漩涡的帮凶**：国王施加的"闪光漩涡"在每回合结束时检查你四个牌堆是否都有状态牌——黏液？四处堆积正好凑齐条件，战斗结束后牌组会被塞入黏液（永久污染）。及时把黏液？处理掉能掐断这条线。
- **保留 + 消耗的组合**：不打就[保留](/mechanics/retain.md)在手中（回合结束不弃牌），打出后因[消耗](/mechanics/exhaust.md)离场。两个关键词都给了你选择权：拖节奏（攥着）或立即兑现（打出抽 2）。
- **来源**：由[史莱姆国王](/monsters/normal/slime_king_monster.md)（国王之怒：3 回合每回合塞 2 张进抽牌堆）与[史莱姆王子](/monsters/normal/slime_prince_monster.md)向你的抽牌堆加入，战斗中可被生成。

## 相关卡牌

- 黏液（原版 Slimed，打出时生成进手牌顶：1 费消耗，抽 1 张牌）

## 相关怪物

- [史莱姆国王](/monsters/normal/slime_king_monster.md)（国王之怒：升级所有黏液？并持续塞入）
- [史莱姆王子](/monsters/normal/slime_prince_monster.md)（能量震波：升级所有黏液？）

## 相关机制

- [保留](/mechanics/retain.md)（回合结束不弃牌）
- [消耗](/mechanics/exhaust.md)（打出后进消耗堆——注意会喂异次元冲击）
- [手牌](/mechanics/hand.md)（黏液的加入位置）

## 源码

- `SeerSlimeQuest.cs`
