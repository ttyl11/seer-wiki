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

| 参数 | 数值 | 升级后 |
|---|---|---|
| 卡牌数量 | 5 | 5 |
| 辉星获取 | 12 | 12 |
| 生成卡形态 | 基础 | 升级形态 |

## 描述

将随机<span style="color:#3aa675;font-weight:600">5</span>张储君的牌加入[<span style="color:#d4a017;font-weight:600">抽牌堆</span>](/mechanics/draw_pile.md)。获得<span style="color:#3aa675;font-weight:600">12</span>点[<span style="color:#d4a017;font-weight:600">辉星</span>](/mechanics/star.md)。

## 升级后

将随机<span style="color:#3aa675;font-weight:600">5</span>张[<span style="color:#d4a017;font-weight:600">升级</span>](/mechanics/keywords.md)过的储君的牌加入[<span style="color:#d4a017;font-weight:600">抽牌堆</span>](/mechanics/draw_pile.md)。获得<span style="color:#3aa675;font-weight:600">12</span>点[<span style="color:#d4a017;font-weight:600">辉星</span>](/mechanics/star.md)。

## 小贴士

- **🔑 牌和弹药一起发——自洽的微型储君体系**：部分储君牌需要消耗[辉星](/mechanics/star.md)才能打出——这张牌发 5 张储君牌的**同时**附赠 <span style="color:#3aa675;font-weight:600">12</span> 点辉星作为启动弹药，牌池和资源配套齐全。任何角色抽到它都能当场运转一套储君小体系。
- **卡池来自原版储君（Regent）**：从**当前解锁状态**下的原版储君卡池随机生成 5 张——你没构筑过的储君强牌也能白嫖到手，但内容完全随机，可能来一堆不需要辉星的普通牌（弹药浪费）也可能来辉星大炮。
- **生成在抽牌堆底部——需要抽牌配合**：5 张牌全部沉入[抽牌堆](/mechanics/draw_pile.md)**底部**而非直接上手——需要抽牌引擎或长战斗把它们抽回来，速攻局里可能一张都摸不到。
- **辉星是通用资源，不浪费**：辉星直接进你的资源条——即使生成的 5 张牌都不吃辉星，后续抽到的其它储君牌（或再次生成的）照样能花。多张予天繁星的辉星可叠加。
- **升级是质变：5 张全部升级形态**：升级后每张生成牌自动升级——数值全面放大，价值远超普通升级。
- **3 费的节奏定位**：中等费用发育牌——适合战斗中期铺资源，配合抽牌在后续回合展开；缺能量的构筑里优先级靠后。
- **衍生牌战斗结束消失**：生成的储君牌不进局外牌组——纯本战工具，无长期代价。
- **多人同步**：随机选牌走同步随机源，两端生成结果一致。

## 相关机制

- [抽牌堆](/mechanics/draw_pile.md)（生成的卡牌加入抽牌堆底部）
- [辉星](/mechanics/star.md)（获得 12 点辉星，储君卡牌的打出资源）

## 源码

- `SeerGiveHeavenStars.cs`
