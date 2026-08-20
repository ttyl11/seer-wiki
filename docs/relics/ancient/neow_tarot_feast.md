# 诡宴占星盘

<img src="/images/relics/neow_tarot_feast.png" alt="诡宴占星盘" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 先古

### 数值参数

| 参数 | 数值 |
|---|---|
| 塔罗数量 | 5 |

## 描述

拾起时，获得<span style="color:#3aa675;font-weight:600">5</span>个随机<span style="color:#d4a017;font-weight:600">塔罗遗物</span>，将<span style="color:#3aa675;font-weight:600">1</span>张随机<span style="color:#d44;font-weight:600">赛尔诅咒牌</span>加入牌组。

- **塔罗池**：从全套 22 张大阿卡纳塔罗遗物（愚者到世界）中洗牌取前 5 张，**互不重复**，逐张加入遗物栏。
- **诅咒来源**：从赛尔诅咒牌池中随机抽 1 张加入牌组。

## 风味文字

<span style="color:#d44;font-weight:600">诅咒的代价。</span>

## 小贴士

- **一次拿满半副塔罗**：22 张大阿卡纳直接发 5 张（互不重复），开局就是塔罗体系半成型——对比[涅奥的猩红牌盒](/relics/ancient/neow_blood_tarot.md)（2 张塔罗无代价），多出的 3 张塔罗随便一张都是强力被动，1 张诅咒牌的代价九牛一毛。
- **抽到愚者直接变 7 张**：5 张候选里含[愚者](/relics/common/tarot_fool.md)的概率约 23%——愚者入手时自己还会再附赠 2 张随机塔罗，最终塔罗总数能滚到 **7 张**，占满大阿卡纳三分之一，堪称开局最大奖。
- **5 张塔罗的协同想象空间**：塔罗遗物之间互补性极强——[战车](/relics/common/tarot_chariot.md)（连打攻击递增）+[力量](/relics/common/tarot_strength.md)（战斗开始叠仪式）组成攻击流核心；[教皇](/relics/common/tarot_hierophant.md)（高血量增伤）+[皇帝](/relics/common/tarot_emperor.md)（高血量受伤封顶）撑起满血打法；[女皇](/relics/common/tarot_empress.md)（首次伤害后回血+格挡）+[正义](/relics/common/tarot_justice.md)（损血换增伤减伤）覆盖续航。5 张随机组合大概率凑出至少一条成体系的配合线。
- **诅咒牌是唯一的账单**：1 张随机赛尔诅咒牌进牌组，会持续卡手——早期路过删牌服务或净化类事件时优先清掉，别让它陪跑到终局；诅咒在手中的每局都是实打实的抽牌位损耗。
- **塔罗多 = 后续滚雪球更强**：塔罗体系的核心玩法就是"塔罗越多，单张塔罗的边际价值越高"（各类效果互相触发）——开局 5 张打底，后续遇到[愚者](/relics/common/tarot_fool.md)或其它发塔罗的事件/商店，继续往 22 张全收集推进。
- **随机结果多端一致**：塔罗和诅咒的抽选都走同步随机源，多人模式下两端抽到的塔罗和诅咒完全一致。

## 源码

- `SeerNeowTarotFeast.cs`
