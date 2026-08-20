# 亡灵律动

<img src="/images/cards/undead_rhythm.png" alt="亡灵律动" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 无色牌
- **能量消耗**: 2
- **类型**: 技能
- **稀有度**: 罕见
- **目标**: 自身
- **标签**: 亡灵契约师
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 |
|---|---|
| 生成卡牌数量 | 2 |
| 奥斯提最大生命 | 10 |

## 描述

将随机<span style="color:#3aa675;font-weight:600">2</span>张亡灵契约师的牌加入[<span style="color:#d4a017;font-weight:600">抽牌堆</span>](/mechanics/draw_pile.md)。[<span style="color:#d4a017;font-weight:600">召唤</span>](/mechanics/summon.md)<span style="color:#3aa675;font-weight:600">10</span>。

## 升级后

将随机<span style="color:#3aa675;font-weight:600">2</span>张<span style="color:#d4a017;font-weight:600">升级</span>后的亡灵契约师的牌加入[<span style="color:#d4a017;font-weight:600">抽牌堆</span>](/mechanics/draw_pile.md)。[<span style="color:#d4a017;font-weight:600">召唤</span>](/mechanics/summon.md)<span style="color:#3aa675;font-weight:600">10</span>。

## 小贴士

- **召唤奥斯提**：召唤亡灵契约师的召唤物[奥斯提](/mechanics/summon.md)——数字 <span style="color:#3aa675;font-weight:600">10</span> 不是召唤数量，是给奥斯提的**最大生命增量**：奥斯提存活时直接 +10 最大生命；死亡或不在场时以 10 点生命召唤/复活它。
- **生成卡牌**：从亡灵契约师（Necrobinder）卡池的**所有已解锁卡**中随机抽 <span style="color:#3aa675;font-weight:600">2</span> 张，逐张加入[抽牌堆](/mechanics/draw_pile.md)**底部**——想尽快摸到需要抽牌引擎配合。
- **生成的牌不附带消耗**：与[千劫战意](/cards/colorless/thousand_tribulation.md)不同，生成的亡灵契约师卡没有额外关键词，本场战斗内可正常反复使用、进弃牌堆洗回。
- **升级效果**：升级后生成的每张卡自动以升级形态加入（生成数量、召唤数值均不变）。
- **与千劫战意对比**：同为"借角色卡池"的无色牌——千劫战意 0 费只给 1 张且附带消耗，亡灵律动 2 费给 2 张还附带一次召唤/治疗奥斯提，量大且持久。

## 相关机制

- [抽牌堆](/mechanics/draw_pile.md)（生成的牌加入底部）
- [召唤](/mechanics/summon.md)（召唤/强化奥斯提）

## 源码

- `SeerUndeadRhythm.cs`
