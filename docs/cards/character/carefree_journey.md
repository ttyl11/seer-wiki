# 逍遥游

<img src="/images/cards/carefree_journey.png" alt="逍遥游" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 1
- **能量消耗**: 0
- **类型**: 能力
- **稀有度**: 罕见
- **目标**: 无
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| PP | 1 | 1 |
| 最大PP | 1 | 1 |

## 描述

PP: 1/1 从[<span style="color:#d4a017;font-weight:600">消耗牌堆</span>](/mechanics/exhaust_pile.md)选一张牌置入[<span style="color:#d4a017;font-weight:600">抽牌堆</span>](/mechanics/draw_pile.md)顶并恢复PP。

## 升级后

PP: 1/1 [保留](/mechanics/retain.md)。从[<span style="color:#d4a017;font-weight:600">消耗牌堆</span>](/mechanics/exhaust_pile.md)选一张牌置入[<span style="color:#d4a017;font-weight:600">抽牌堆</span>](/mechanics/draw_pile.md)顶并恢复PP。

## 小贴士

- **一次性回收**：虽然是能力牌类型，但效果是**打出时一次性触发**——从消耗堆选 1 张牌放入抽牌堆顶并恢复 PP。不是常驻效果，打出后本牌从游戏中移除（能力牌机制）。
- **选牌范围**：从[消耗牌堆](/mechanics/exhaust_pile.md)中任选 1 张牌。消耗堆为空时不触发效果（但仍消耗能量打出），所以前期消耗堆没牌时不要急着打出。
- **置入抽牌堆顶**：选中的牌放入[抽牌堆](/mechanics/draw_pile.md)**顶**，意味着**下回合抽牌时第一张就抽到它**。可以精准规划下回合的核心操作。
- **PP 恢复**：选中的牌若为 PP 卡，其 PP 会**恢复至上限**。这让被消耗的高 PP 卡牌可以满状态回归，不会因为之前用过而 PP 归零。
- **配合建议**：配合大量消耗牌的卡组最佳——如[禁术·契灭](./contract_destruction.md)（消耗手牌 PP 卡）、[镂月裁云](./cloud_cutting_moon.md)（消耗诅咒/状态牌）等。回收的关键牌可以是你主动消耗的高伤攻击牌、关键防御牌或 PP 卡。
- **升级的价值**：获得[保留](/mechanics/retain.md)关键词，回合结束时不被弃置。这让你可以**把这张牌留到消耗堆有值得回收的牌时再打出**，而不是被迫在没好目标时浪费。升级优先级高。
- **性价比**：0 费回收消耗堆的牌 + 恢复 PP，0 成本的一次性回收非常超值。关键在于打出时机——等消耗堆有高价值目标后再用。

## 相关机制

- [消耗牌堆](/mechanics/exhaust_pile.md)（选牌来源）
- [抽牌堆](/mechanics/draw_pile.md)（置入目标）
- [保留](/mechanics/retain.md)（升级后获得的关键词）

## 源码

- `SeerCarefreeJourney.cs`
