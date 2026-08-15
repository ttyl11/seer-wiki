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
| 卡牌数量 | 2 |
| 召唤数量 | 10 |

## 描述

将随机<span style="color:#3aa675;font-weight:600">2</span>张亡灵契约师的牌加入[<span style="color:#d4a017;font-weight:600">抽牌堆</span>](/mechanics/draw_pile.md)。[<span style="color:#d4a017;font-weight:600">召唤</span>](/mechanics/summon.md)<span style="color:#3aa675;font-weight:600">10</span>。

## 升级后

将随机<span style="color:#3aa675;font-weight:600">2</span>张<span style="color:#d4a017;font-weight:600">升级</span>后的亡灵契约师的牌加入[<span style="color:#d4a017;font-weight:600">抽牌堆</span>](/mechanics/draw_pile.md)。[<span style="color:#d4a017;font-weight:600">召唤</span>](/mechanics/summon.md)<span style="color:#3aa675;font-weight:600">10</span>。

## 小贴士

- **触发时机**：打出时触发，目标为自身。
- **召唤奥斯提**：召唤奥斯提（原版亡灵契约师的召唤物），[召唤](/mechanics/summon.md)数量为 <span style="color:#3aa675;font-weight:600">10</span>。
- **生成卡牌**：从亡灵契约师卡池中随机选取 <span style="color:#3aa675;font-weight:600">2</span> 张已解锁卡牌，加入[抽牌堆](/mechanics/draw_pile.md)。
- **升级效果**：升级后，生成的每张卡牌会自动以升级形态加入抽牌堆。

## 相关机制

- [抽牌堆](/mechanics/draw_pile.md)（生成的牌加入抽牌堆）
- [召唤](/mechanics/summon.md)（召唤奥斯提）

## 源码

- `SeerUndeadRhythm.cs`
