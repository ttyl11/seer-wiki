# 我思故我在

<img src="/images/cards/i_think_therefore_i_am.png" alt="我思故我在" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌（带关键词）
- **最大PP**: 5
- **能量消耗**: 3
- **类型**: 攻击
- **稀有度**: 罕见
- **目标**: 所有敌方
- **关键词**: [薇](/mechanics/vigil.md)
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 每敌人伤害 | 1 | 1 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |
| 固有 | — | ✓ |

## 描述

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 对所有敌人造成敌人数量×<span style="color:#3aa675;font-weight:600">1</span>点伤害。从[<span style="color:#d4a017;font-weight:600">抽牌堆</span>](/mechanics/draw_pile.md)[<span style="color:#d4a017;font-weight:600">消耗</span>](/mechanics/exhaust.md)等于敌人数量的牌。

## 升级后

[<span style="color:#d4a017;font-weight:600">固有</span>](/mechanics/innate.md)。PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 对所有敌人造成敌人数量×<span style="color:#3aa675;font-weight:600">1</span>点伤害。从[<span style="color:#d4a017;font-weight:600">抽牌堆</span>](/mechanics/draw_pile.md)[<span style="color:#d4a017;font-weight:600">消耗</span>](/mechanics/exhaust.md)等于敌人数量的牌。

## 小贴士

- **伤害随敌人数量放大**：每个敌人受到"敌人数量×1"点攻击伤害（受[力量](/powers/strength_power.md)/[易伤](/powers/vulnerable_power.md)影响）。3 个敌人时每个受 3 伤，合计 9 伤；5 个敌人时每个受 5 伤，合计 25 伤。敌人越多越超值。
- **薇关键词是这张牌的灵魂（别忘了他带薇）**：手牌中与它**左右相邻**的非"薇"牌被打出时，它会**免费自动打出**——3 费的能量一分不出，伤害+消耗全额结算。使用要点：
 - **摆位就是构筑**：把它夹在低费高频牌旁边，等于给相邻牌附赠一张免费 AOE。
 - **薇不连锁**：打出"薇"牌不会触发相邻的其它薇；左右都是薇时也只触发其中一张。
 - **自动打出仍要选牌**：触发时照样弹出"从抽牌堆消耗 N 张"的选牌界面，请留神选什么。
 - **自动打出照样扣 PP**：免费的是能量，PP 每次照扣 1。PP 5/5 意味着一场战斗（手动+自动合计）最多打出 5 次；**PP 耗尽后此牌不可打出，薇也无法再触发它**——除非持有[无为觉者](/relics/legendary/inaction_awakener.md)（PP 为 0 的牌仍可打出）。
- **消耗抽牌堆是双刃剑**：从抽牌堆**自选**消耗等于敌人数量的牌，既可主动剔除废牌/诅咒配合消耗体系（[耀武遗辉](/cards/character/glorious_remnant.md)还能事后给它们加重放），也减少后续抽牌资源。多敌人时一次消耗多张，牌堆薄的卡组要掂量。
- **3 费偏贵但有弹性**：手动打出是 3 费换 N² 伤 + N 张消耗，单敌人时（1 伤 + 1 消耗）严重亏本，多敌人时价值放大；靠薇白嫖则完全不同——0 费全额效果。
- **升级获得固有，与薇是绝配**：固有=每场起手必在手，天然保证"第一回合就摆好位置等相邻牌触发"，不需要等抽牌运气。升级后它从"偶尔白嫖"变成"每场开局的固定免费 AOE 引擎"，优先级高。

## 相关机制

- [薇](/mechanics/vigil.md)（相邻牌打出时自动打出）
- [消耗](/mechanics/exhaust.md)（消耗抽牌堆等于敌人数量的牌）
- [抽牌堆](/mechanics/draw_pile.md)（消耗来源）

## 源码

- `SeerIThinkThereforeIAm.cs`
