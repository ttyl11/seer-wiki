# 小丑

<img src="/images/cards/joker.png" alt="小丑" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 衍生牌
- **最大PP**: 5
- **能量消耗**: 0
- **类型**: 技能
- **稀有度**: 衍生
- **目标**: 自身
- **可升级**: 否
- **关键词**: [戏法](/mechanics/trick.md)

### 数值参数

| 参数 | 数值 |
|---|---|
| 弃牌数量 | 1 |
| PP | 5 |
| 最大PP | 5 |

## 描述

PP: 5/5 选择1张[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)置入[<span style="color:#d4a017;font-weight:600">弃牌堆</span>](/mechanics/discard_pile.md)。

## 小贴士

- **0 费换牌器**：选 <span style="color:#3aa675;font-weight:600">1</span> 张[手牌](/mechanics/hand.md)（不能选小丑自己）置入[弃牌堆](/mechanics/discard_pile.md)，随后[戏法](/mechanics/trick.md)触发——若弃牌堆非空，随机抽 <span style="color:#3aa675;font-weight:600">1</span> 张回手。一进一出，本质是用手牌质量做筛选。
- **弃什么有讲究**：换回来的牌是弃牌堆里**随机**的，不是自选。想提高换到好牌的概率，先让优质牌进弃牌堆（比如早回合弃掉高费卡），再打小丑"捞鱼"。
- **刚弃的牌可能被立即抽回**：时序是先弃后抽，弃的那张牌已躺在弃牌堆里参与随机——弃牌堆只有一两张牌时大概率白忙一场。弃牌堆越厚，换牌越"随机"，最好在弃牌堆有 5 张以上时使用。
- **开场是半个白板**：战斗刚开始弃牌堆为空，打出小丑只弃不抽，纯亏一张手牌质量。先垫几张牌进弃牌堆（正常出牌即可）再让小丑登场。
- **PP 5 = 一场最多用 5 次**：每次打出消耗 <span style="color:#3aa675;font-weight:600">1</span> 点 PP，PP: 5/5 意味着单场战斗最多换 5 次牌，长战斗里是持续的手牌过滤器。
- **恶魔男爵的专属产物**：由遗物[恶魔男爵](/relics/uncommon/demon_baron.md)在**每场战斗胜利后**向牌组加入 <span style="color:#3aa675;font-weight:600">1</span> 张（永久保留、越攒越多）。战斗中不会被其它效果生成。
- **牌组膨胀是双刃剑**：小丑每场+1 张，几十场后牌组里会有一沓小丑。好在它 0 费不卡手、还能过滤手牌，是"良性填充"——但追求抽卡精度的构筑（依赖关键单卡上手）要意识到它在稀释抽到核心牌的概率。

## 相关遗物

- [恶魔男爵](/relics/uncommon/demon_baron.md)（唯一获取来源：战斗胜利后加入牌组）

## 相关机制

- [戏法](/mechanics/trick.md)（弃牌堆非空时随机抽 1 张回手）
- [手牌](/mechanics/hand.md)（弃牌选择范围，不含小丑自身）
- [弃牌堆](/mechanics/discard_pile.md)（弃牌去向 + 戏法抽牌来源）

## 源码

- `SeerJoker.cs`
