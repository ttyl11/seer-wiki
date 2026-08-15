# 予天繁星

<img src="/images/cards/give_heaven_stars.png" alt="予天繁星" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 无色牌
- **标签**: 储君
- **能量消耗**: 3
- **类型**: 技能
- **稀有度**: 罕见
- **目标**: 自身
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 |
|---|---|
| 卡牌数量 | 5 |
| 辉星获取 | 12 |

## 描述

将随机<span style="color:#3aa675;font-weight:600">5</span>张储君的牌加入[<span style="color:#d4a017;font-weight:600">抽牌堆</span>](/mechanics/draw_pile.md)。获得<span style="color:#3aa675;font-weight:600">12</span>点[<span style="color:#d4a017;font-weight:600">辉星</span>](/mechanics/star.md)。

## 升级后

将随机<span style="color:#3aa675;font-weight:600">5</span>张[<span style="color:#d4a017;font-weight:600">升级</span>](/mechanics/keywords.md)过的储君的牌加入[<span style="color:#d4a017;font-weight:600">抽牌堆</span>](/mechanics/draw_pile.md)。获得<span style="color:#3aa675;font-weight:600">12</span>点[<span style="color:#d4a017;font-weight:600">辉星</span>](/mechanics/star.md)。

## 小贴士

- **储君卡池**：从储君卡池中获取已解锁且符合多人约束的卡牌。
- **随机抽取**：随机选取 <span style="color:#3aa675;font-weight:600">5</span> 张卡牌，多端同步。
- **加入位置**：将生成的卡牌加入抽牌堆底部。
- **辉星获取**：获得 <span style="color:#3aa675;font-weight:600">12</span> 点[辉星](/mechanics/star.md)。
- **升级效果**：升级后，生成的每张卡牌会自动以升级形态加入抽牌堆。

## 相关机制

- [抽牌堆](/mechanics/draw_pile.md)（生成的卡牌加入抽牌堆）
- [辉星](/mechanics/star.md)（获得 12 点辉星，储君专属资源）

## 源码

- `SeerGiveHeavenStars.cs`
