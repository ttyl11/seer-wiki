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

- **奇巧**（[<span style="color:#d4a017;font-weight:600">查看机制页</span>](/mechanics/sly.md)，原版关键词）：若此牌在回合结束前从手牌中被丢弃，则免费将其打出。本卡为生成的每张牌附加奇巧关键词。
- **静默猎手**：卡池，包含静默猎手职业的卡牌。本卡从该卡池中随机选取卡牌加入抽牌堆。
- **触发时机**：打出时从静默猎手卡池随机生成卡牌加入抽牌堆顶部。
- **目标选取**：自身（无目标）。
- **升级效果**：升级后，生成的卡牌会自动以升级形态加入抽牌堆。

## 源码

- `SeerSilenceLaw.cs`
