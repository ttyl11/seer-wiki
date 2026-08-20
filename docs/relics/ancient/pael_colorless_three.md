# 佩尔之瞳

<img src="/images/relics/pael_colorless_three.png" alt="佩尔之瞳" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 先古

### 数值参数

| 参数 | 数值 |
|---|---|
| 展示卡牌数 | 5 |
| 最大选择数 | 3 |

## 描述

拾起时，从<span style="color:#3aa675;font-weight:600">5</span>张随机<span style="color:#d4a017;font-weight:600">无色卡牌</span>中选择至多<span style="color:#3aa675;font-weight:600">3</span>张加入牌组。

- **卡池来源**：使用无色卡池以均匀概率生成 5 张无色卡牌奖励。

## 风味文字

<span style="color:#d44;font-weight:600">无色。</span>

## 小贴士

- **无色卡是"体系外挂件"，平时一卡难求**：[无色牌](/cards/colorless/index.md)不占角色卡位、任何构筑都能挂，正常只能靠事件或特殊途径零散入手——佩尔之瞳一次给 5 张候选、至多挑 3 张，是无色卡最集中的批量获取渠道之一。对比[启程行囊](/relics/ancient/neow_first_gift.md)（6 选 3 锁 Seer 普通卡）和[双生印绶](/relics/ancient/neow_dual_blessing.md)（3 选 2 锁罕见卡），之瞳的池子横跨各种稀有度、全是机制独特的"异质件"。
- **池子里藏着真正的体系引擎**：35 张 Seer 无色卡里大量是能直接定义打法的牌——[宝剑](/cards/colorless/sword.md)（铸造 10 + 消耗手牌所有君王之剑，铸造流终结技）、[圣杯](/cards/colorless/holy_grail.md)（抽到生成圣杯球，充能球流供给）、[赛尔号](/cards/token/ssr_ship.md)（休息处启动后依次打出弃牌堆/抽牌堆所有可打牌，战后还送 2 个随机普通遗物）、[低等精灵](/cards/colorless/low_elf.md)/[十倍二长老？](/cards/colorless/ten_times_two_elder.md)（每回合白送一张卡的持续引擎）、[无尽能源](/cards/colorless/endless_energy.md)（999 能量换每打一张牌塞一张诅咒）。5 张候选里命中任意一张体系牌都值回票价。
- **也有需要敬而远之的危险品**：[千里击涛!!!](/cards/colorless/thousand_miles_wave.md)（+200% 增伤但每回合 3 张牌强制结束回合 + 悼接管）、[殉道者圣别](/cards/colorless/martyr_holy_divine.md)（扣 40% 当前生命换下战增益）这类牌收益猛但代价特殊——不确定能否驾驭时宁可不选。
- **候选走奖励流程，幕数越高越白嫖**：5 张候选按卡牌奖励的升级概率生成（普通/罕见卡 25% × 当前幕数，第三幕一半是升级版），后期先古节点拾起时拿到的多半直接是强化版——和[源无字卷](/relics/ancient/darv_remove_hand_and_choose.md)"越晚拿牌越好"是同一个道理。
- **可少选不可多选**：3 张是上限不是强制，5 张里只有 1-2 张契合构筑就只拿那几张——无色卡虽然通用，塞一堆用不上的异质件同样稀释牌组，别为了选满硬凑数。
- **随机结果多端一致**：候选生成走同步随机源，多人模式下两端看到的 5 张完全相同，选牌结果由选择方同步。

## 源码

- `SeerPaelColorlessThree.cs`
