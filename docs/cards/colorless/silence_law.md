# 缄默律令

<img src="/images/cards/silence_law.png" alt="缄默律令" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 无色牌
- **能量消耗**: 1
- **类型**: 技能
- **稀有度**: 罕见
- **目标**: 自身
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 卡牌数量 | 3 | 3 |

## 描述

将随机<span style="color:#3aa675;font-weight:600">3</span>张静默猎手的牌加入[<span style="color:#d4a017;font-weight:600">抽牌堆</span>](/mechanics/draw_pile.md)，获得[<span style="color:#d4a017;font-weight:600">奇巧</span>](/mechanics/sly.md)。

## 升级后

将随机<span style="color:#3aa675;font-weight:600">3</span>张<span style="color:#d4a017;font-weight:600">升级</span>后的静默猎手的牌加入[<span style="color:#d4a017;font-weight:600">抽牌堆</span>](/mechanics/draw_pile.md)，获得[<span style="color:#d4a017;font-weight:600">奇巧</span>](/mechanics/sly.md)。

## 小贴士

- **🔑 白嫖原版静默猎手全池 + 奇巧附赠**：从**当前解锁**的原版静默猎手（Silent）卡池随机生成 <span style="color:#3aa675;font-weight:600">3</span> 张加入[抽牌堆](/mechanics/draw_pile.md)**底部**——中毒/小刀/弃牌各系强牌都可能白嫖到手，任何构筑都能开一条跨池补给线。
- **每张生成牌自带[奇巧](/mechanics/sly.md)**：奇巧 = 这张牌被弃掉时**免费自动打出**——3 张牌从抽牌堆摸上来后，无论是手动弃、还是回合结束弃牌，都会触发免费打出。等于 3 张"弃不掉的输出"。
- **弃牌引擎的完美燃料**：弃牌触发的构筑（弃牌换抽/换增益类）与它是天作之合——弃掉 = 免费打出 = 还触发弃牌联动收益——**一份牌吃两份收益**；即使没有弃牌联动，回合结束自动弃牌时它们也会免费倾泻，绝不浪费。
- **生成在抽牌堆底部——需要抽牌配合**：3 张牌沉入抽牌堆**底部**而非直接上手——需要抽牌引擎或长战斗把它们摸回来，速攻局里可能一张都用不上。
- **升级后 3 张全部升级形态**：升级不减费——生成的每张卡自动升级（数值全面放大），期望收益直接上浮一档。
- **衍生牌战斗结束消失**：生成的静默牌是战斗内衍生牌，不进局外牌组——纯本战工具，无长期代价。
- **多人同步**：随机选牌走同步随机源，两端生成结果一致。

## 源码

- `SeerSilenceLaw.cs`
