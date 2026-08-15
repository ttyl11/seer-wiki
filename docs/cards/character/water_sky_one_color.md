# 水天一色

<img src="/images/cards/water_sky_one_color.png" alt="水天一色" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 1
- **能量消耗**: 0
- **类型**: 能力
- **稀有度**: 罕见
- **目标**: 自身
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 持续回合 | 3 | 3 |
| 伤害提升 | 140% | 250% |
| PP | 1 | 1 |
| 最大PP | 1 | 1 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> [<span style="color:#d4a017;font-weight:600">弃牌堆</span>](/mechanics/discard_pile.md)为空时才能打出。<span style="color:#3aa675;font-weight:600">3</span>回合内，伤害提升<span style="color:#3aa675;font-weight:600">140</span>%。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> [<span style="color:#d4a017;font-weight:600">弃牌堆</span>](/mechanics/discard_pile.md)为空时才能打出。<span style="color:#3aa675;font-weight:600">3</span>回合内，伤害提升<span style="color:#3aa675;font-weight:600">250</span>%。

## 小贴士

- **弃牌堆空才能打**：打出条件是[弃牌堆](/mechanics/discard_pile.md)为空（且 PP 大于 0）。需要先把弃牌堆清空——靠消耗、抽干或回手等手段。满足条件时卡牌金色高亮提示可打。
- **攻击伤害倍增**："提升 140%"是加算倍率，实际攻击伤害 ×2.4；升级后 250% 对应 ×3.5。注意只加成攻击牌伤害，不加成固定伤害或能力伤害。
- **持续 3 回合**：每回合末减 1 层，3 回合后消失。要在 3 回合内尽量多打攻击牌吃满加成。
- **0 费低 PP 大爆发**：0 费仅 1PP，条件满足后几乎无成本换来数倍攻击伤害，是构筑核心爆发件。但条件苛刻，需要专门搭配"清空弃牌堆"的手段。
- **升级质变**：140%→250%，从 2.4 倍跳到 3.5 倍，提升明显。这张牌本身强度依赖升级，有条件应优先升级。
- **性价比**：0 费换 3 回合 2.4-3.5 倍攻击伤害，理论性价比极高，但"弃牌堆空"的门槛把实际价值拉到看构筑——能稳定清空弃牌堆的牌组里是顶级爆发，否则容易卡手。

## 相关能力

- [回合增伤](/powers/turn_damage_boost_power.md)（攻击伤害按百分比提升，持续数回合）

## 相关机制

- [弃牌堆](/mechanics/discard_pile.md)（打出条件的判定牌堆）

## 源码

- `SeerWaterSkyOneColor.cs`
