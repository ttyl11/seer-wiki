# 史莱姆的加冕

开阔地上聚集着密密麻麻、五颜六色的史莱姆。它们没有攻击你，反而围着你咕噜咕噜地叫着，用 Q 弹的身体蹭着你的腿——看起来，它们似乎想和你进行某种交流。

<a href="/events/">← 返回事件图鉴</a>

<img src="/images/events/seer_slime_coronation.png" alt="史莱姆的加冕" style="max-width:360px;width:100%;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**：剧情抉择事件
- **战斗**：否

## 选项一览

| 选项 | 代价 | 收益 |
|---|---|---|
| 听不懂，思密达 | 加入 <span style="color:#3aa675;font-weight:600">2</span> 张"史莱姆" | <span style="color:#3aa675;font-weight:600">100</span> 金币 |
| 加冕为王 | 加入 <span style="color:#3aa675;font-weight:600">5</span> 张"黏液" | 获得[黄金史莱姆](/relics/event/gold_slime_relic.md)和[暴政统治者](/cards/event/tyrant_ruler.md) |
| 疗愈与净化 | — | 回复 <span style="color:#3aa675;font-weight:600">24%</span> 最大生命，移除最多 <span style="color:#3aa675;font-weight:600">2</span> 张牌 |
| 集结勇士 | — | 获得 <span style="color:#3aa675;font-weight:600">2</span> 张升级后的随机"史莱姆"牌 |

## 小贴士

- **史莱姆体系的核心事件**：无色牌里有一整套史莱姆牌（[史莱姆攻击](/cards/colorless/slime_attack.md)、[史莱姆防御](/cards/colorless/slime_defense.md)、[史莱姆加速](/cards/colorless/slime_speed.md)、[史莱姆体力](/cards/colorless/slime_stamina.md)），而[暴政统治者](/cards/event/tyrant_ruler.md)会"自动随机打出牌组中所有的史莱姆牌"——加冕路线正是这套体系的启动器。
- **加冕 = 遗物 + 核心卡 + 5 张黏液的代价**：[黄金史莱姆](/relics/event/gold_slime_relic.md)（每场战斗开始按牌组黏液数回血）+ 暴政统治者直接到位，配合集结来的史莱姆牌能快速成型"史莱姆大军"流。代价是 <span style="color:#3aa675;font-weight:600">5</span> 张黏液——好在黏液不是死牌：它是 <span style="color:#3aa675;font-weight:600">1</span> 费状态牌，打出后抽 <span style="color:#3aa675;font-weight:600">1</span> 张牌并消耗，等于花 1 费换一张手牌。真正的负担是占抽牌位和[黄金史莱姆](/relics/event/gold_slime_relic.md)每场胜利后还会再塞 1 张——不打史莱姆流时这笔账依然偏亏。
- **集结勇士是最干净的白嫖**：2 张**已升级**的随机史莱姆牌，零代价。史莱姆流用它补兵；非史莱姆流拿了也不心疼（史莱姆牌本身是可用的普通牌，不是诅咒）。
- **疗愈与净化 = 回血 + 删牌二合一**：<span style="color:#3aa675;font-weight:600">24%</span> 最大生命回复 + 最多 <span style="color:#3aa675;font-weight:600">2</span> 张指定移除。残血且牌组臃肿时的救急首选，泛用性全事件前列。
- **思密达 = 100 金币 + 2 张史莱姆的"拜拜礼"**：不想参与史莱姆主题时的默认离场，顺带 <span style="color:#3aa675;font-weight:600">100</span> 金币零花。注意同样要收 <span style="color:#3aa675;font-weight:600">2</span> 张史莱姆牌，并非完全无损。
- **决策树**：走史莱姆流 → 加冕为王（体系直接成型）；缺回复或缺删牌 → 疗愈与净化；想要点小收益 → 集结或思密达。

## 源码

- `SeerSlimeCoronation.cs`
