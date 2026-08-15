# 暴君史莱姆

<img src="/images/relics/tyrant_slime_relic.png" alt="暴君史莱姆" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 事件

### 数值参数

| 参数 | 数值 |
|---|---|
| 翻倍概率 | 50（%） |
| 固定伤害层数 | 15 |
| 速度降低 | 2 |
| 命中降低 | 2 |

## 描述

每回合开始时，[消耗](/mechanics/exhaust.md)自身所有"黏液"，每消耗一张，对随机敌人施加1层<span style="color:#d4a017;font-weight:600">[凝滞](/powers/stasis_power.md)</span>。受到攻击伤害时，令敌方[速度](/powers/speed_power.md)-<span style="color:#3aa675;font-weight:600">2</span>、[命中](/powers/accuracy_power.md)-<span style="color:#3aa675;font-weight:600">2</span>。造成伤害时，<span style="color:#3aa675;font-weight:600">50</span>%概率伤害翻倍，否则为目标施加<span style="color:#3aa675;font-weight:600">15</span>层<span style="color:#9b59b6;font-weight:600">[固定伤害](/powers/fixed_damage_power.md)</span>。战斗结束时，移除牌组中一张"黏液"。

- **黏液消耗**：每回合开始消耗手牌/抽牌堆/弃牌堆中所有"黏液"卡牌，每张对随机敌人施加 1 层[凝滞](/powers/stasis_power.md)。
- **受伤反击**：受到攻击伤害时，令攻击者[速度](/powers/speed_power.md)-2、[命中](/powers/accuracy_power.md)-2。
- **伤害翻倍**：造成攻击伤害时 50% 概率额外造成等量未格挡伤害（翻倍），否则施加 15 层[固定伤害](/powers/fixed_damage_power.md)。
- **战后清理**：战斗胜利后从牌组移除 1 张"黏液"。

## 风味文字

<span style="color:#d44;font-weight:600">暴政的终点是黏液的深渊。</span>

## 小贴士

- **黏液变凝滞武器**：每回合开始消耗所有黏液卡，每张对随机敌人施加1层凝滞。黏液越多凝滞越多——把负面黏液转化为控制手段，废物利用。配合会往牌组塞黏液的卡牌/事件可以持续产出凝滞。
- **受伤反击削属性**：受到攻击伤害时，攻击者速度-2、命中-2。挨打越多敌人越弱，配合高血量或减伤可以安全叠debuff，让敌人速度越来越慢、命中越来越低。
- **50%翻倍或15层固定伤害**：造成攻击伤害时50%概率伤害翻倍，否则施加15层固定伤害。两种结果都不亏——翻倍是即时爆发，固定伤害是延迟斩杀（目标下回合开始受到15点不可格挡伤害）。
- **翻倍有防重入**：翻倍的额外伤害不会再次触发本效果，不会无限递归。坐骑造成的伤害也能触发。
- **战后自动清理黏液**：每场战斗胜利移除牌组1张黏液，逐渐减少黏液污染。长期战斗后牌组会越来越干净，但每场只清1张，黏液多时需要多打几场。
- **性价比**：事件稀有度合理——黏液转凝滞+受伤反击+伤害翻倍/固定伤害的多效果组合，强度看黏液数量和战斗时长。

## 源码

- `SeerTyrantSlimeRelic.cs`
