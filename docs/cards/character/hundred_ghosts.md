# 百鬼夜行

<img src="/images/cards/hundred_ghosts.png" alt="百鬼夜行" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **标签**: 亡灵契约师
- **最大PP**: 10
- **能量消耗**: X
- **类型**: 攻击
- **稀有度**: 普通
- **目标**: 敌方单体
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 数量扣减 | 1 | 0 |
| PP | 10 | 10 |
| 最大PP | 10 | 10 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">10</span>/<span style="color:#3aa675;font-weight:600">10</span> 耗能X，造成X点伤害，将X-<span style="color:#3aa675;font-weight:600">1</span>张鬼火加入[<span style="color:#d4a017;font-weight:600">弃牌堆</span>](/mechanics/discard_pile.md)，将X-<span style="color:#3aa675;font-weight:600">1</span>张<span style="color:#d4a017;font-weight:600">灵魂</span>加入[<span style="color:#d4a017;font-weight:600">抽牌堆</span>](/mechanics/draw_pile.md)。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">10</span>/<span style="color:#3aa675;font-weight:600">10</span> 耗能X，造成X点伤害，将X-<span style="color:#3aa675;font-weight:600">0</span>张鬼火加入[<span style="color:#d4a017;font-weight:600">弃牌堆</span>](/mechanics/discard_pile.md)，将X-<span style="color:#3aa675;font-weight:600">0</span>张<span style="color:#d4a017;font-weight:600">灵魂</span>加入[<span style="color:#d4a017;font-weight:600">抽牌堆</span>](/mechanics/draw_pile.md)。

## 小贴士

- **X 耗能弹性**：X = 打出时投入的能量值，伤害与衍生牌数量都随 X 走。伤害本体只是 X 点攻击伤害（受[力量](/powers/strength_power.md)/[易伤](/powers/vulnerable_power.md)影响），真正的价值在两张衍生牌上。
- **衍生牌真面目**：鬼火和灵魂都是原版亡灵契约师体系的 0 费技能牌，且自带[消耗](/mechanics/exhaust.md)——**鬼火：打出获得 1 点能量**；**灵魂：打出抽 2 张牌**。也就是说这张卡实际是"能量回充 + 过牌"引擎，伤害只是附赠。
- **能量经济学**：鬼火每张回 1 能量，未升级时 X-1 张鬼火几乎抵消全部 X 费投入（净成本仅 1 费），还附带 2(X-1) 张抽牌量；**升级后 X 张鬼火恰好完全回本 X 费**——净 0 费打出 X 点伤害 + 抽 2X 张牌。以升级后 X=3 为例：0 净费用 = 3 伤 + 3 能量回充 + 过 6 张牌，性价比远超表面的"1 费换 1 伤"。
- **入堆位置有讲究**：灵魂加入[抽牌堆](/mechanics/draw_pile.md)**底部**，本回合若抽牌堆还有余牌，要等下一轮洗牌后才抽得到；鬼火进[弃牌堆](/mechanics/discard_pile.md)同样需要洗牌回收。因此这张卡的衍生收益是"延迟到账"的，适合在抽牌堆将空时打出，让灵魂尽快进手。
- **体系联动**：灵魂是亡灵契约师体系的核心燃料——持有"吞噬生命"（打出灵魂时召唤 1）或"纠缠"（打出灵魂时随机敌人失去 3 点生命）时，大量灵魂意味着持续触发；遗物葬礼面具每场战斗开局送的灵魂也能与本卡互相补量。本卡与亡灵律动、[亡灵风暴](/cards/character/undead_storm.md)、夜·冥昭瞢闇同属亡灵契约师标签，可围绕灵魂/鬼火体系构筑。
- **警惕反制**：部分敌人（如持有"丧魂之剑"招式的怪物）会将你所有的灵魂移至消耗牌堆，囤灵魂前先看一眼敌方意图。

## 相关机制

- [弃牌堆](/mechanics/discard_pile.md)（鬼火加入位置）
- [抽牌堆](/mechanics/draw_pile.md)（灵魂加入位置，底部）
- [消耗](/mechanics/exhaust.md)（鬼火/灵魂均自带消耗关键词）

## 源码

- `SeerHundredGhosts.cs`（衍生牌参考原版 `Wisp.cs`、`Soul.cs`）
