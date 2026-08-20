# 志旭之战

硝烟四起的志旭战场就在眼前，两大阵营的对峙已到白热化阶段，双方都向你递出了橄榄枝。当然，你也可以选择跳出纷争，走属于自己的正义之路。

<a href="/events/">← 返回事件图鉴</a>

<img src="/images/events/seer_zhixu_battle_event.png" alt="志旭之战" style="max-width:360px;width:100%;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**：剧情抉择事件（新手引导，不自然出现）
- **触发**：开局携带初始遗物[群星的礼赠](/relics/starter/elemental_core.md)时，第一幕的第一个事件必定被替换为本事件（每局一次）

## 选项一览

| 选项 | 代价 | 收益 |
|---|---|---|
| 投身匠心阵营 | — | 获得[匠心](/cards/quest/craftsman_heart.md)，可移除最多 <span style="color:#3aa675;font-weight:600">5</span> 张牌 |
| 投身龙魂阵营 | — | 获得[龙魂](/cards/quest/dragon_soul.md)，可移除最多 <span style="color:#3aa675;font-weight:600">5</span> 张牌 |
| 坚守自我正义 | — | 从赛尔卡池（普通 ≤50 + 罕见 ≤30 + 稀有 ≤10）中最多选 <span style="color:#3aa675;font-weight:600">7</span> 张加入牌组 |

## 小贴士

- **每局开局的固定事件**：[群星的礼赠](/relics/starter/elemental_core.md)会把第一幕的第一个房间强制变为事件房，并把首个事件替换为志旭之战，相当于本 mod 的开局阵营选择界面。它是每局只有一次的"职业分支"节点，选完就再也不会遇到。
- **两条任务线**：[匠心](/cards/quest/craftsman_heart.md)与[龙魂](/cards/quest/dragon_soul.md)都是任务牌，各自开启一条专属的强化路线——匠心线对应[匠心塔罗](/relics/event/craftsman_heart_tarot_relic.md)，龙魂线对应[龙魂附魔](/relics/event/dragon_soul_enchant_relic.md)、[龙魂宝珠](/relics/event/dragon_soul_orb_relic.md)、[龙魂药水](/relics/event/dragon_soul_potion_relic.md)等奖励。选阵营看的不是这 <span style="color:#3aa675;font-weight:600">1</span> 张牌本身，而是你想要哪条任务线的后续收益。
- **阵营选项自带删牌**：两条阵营路线都附赠最多 <span style="color:#3aa675;font-weight:600">5</span> 张的移除额度。开局牌组里通常有 <span style="color:#3aa675;font-weight:600">4</span>~<span style="color:#3aa675;font-weight:600">6</span> 张成长后就想扔掉的基础牌，这一波精简几乎等于把起手牌组直接打磨成型，价值极高。
- **独立路线是即时战力**：坚守自我正义最多白拿 <span style="color:#3aa675;font-weight:600">7</span> 张卡，且稀有度上限高（含最多 10 张稀有）。但它不提供任何删牌，牌组会迅速膨胀——如果你没有后续的删牌手段，前期抽到核心牌的概率反而会被稀释。
- **"100 张卡池"是剧情话术**：实际卡池构成为普通 ≤<span style="color:#3aa675;font-weight:600">50</span>、罕见 ≤<span style="color:#3aa675;font-weight:600">30</span>、稀有 ≤<span style="color:#3aa675;font-weight:600">10</span>，上限约 <span style="color:#3aa675;font-weight:600">90</span> 张，且过滤掉了诅咒/状态类型的牌。
- **可以少选**：三个选项的选牌数量都是"最多"，卡池里没有心仪的牌时选 <span style="color:#3aa675;font-weight:600">1</span>~<span style="color:#3aa675;font-weight:600">2</span> 张核心补强也完全合法，不必强行凑满。
- **性价比结论**：想要长线成长和稳定精简 → 选阵营（顺手删 5 张）；想要立刻成型的高质量卡组、且自带删牌手段 → 坚守自我正义。第一次玩建议先体验阵营线，任务奖励更直观。

## 源码

- `SeerZhixuBattleEvent.cs`
- `SeerElementalCore.cs`（触发替换）
