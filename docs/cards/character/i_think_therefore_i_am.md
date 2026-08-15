# 我思故我在

<img src="/images/cards/i_think_therefore_i_am.png" alt="我思故我在" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌（带关键词）
- **最大PP**: 5
- **能量消耗**: 3
- **类型**: 攻击
- **稀有度**: 罕见
- **目标**: 所有敌方
- **关键词**: [薇](/mechanics/vigil.md)
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 每敌人伤害 | 1 | 1 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |
| 固有 | — | ✓ |

## 描述

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 对所有敌人造成敌人数量×<span style="color:#3aa675;font-weight:600">1</span>点伤害。从[<span style="color:#d4a017;font-weight:600">抽牌堆</span>](/mechanics/draw_pile.md)[<span style="color:#d4a017;font-weight:600">消耗</span>](/mechanics/exhaust.md)等于敌人数量的牌。

## 升级后

[<span style="color:#d4a017;font-weight:600">固有</span>](/mechanics/innate.md)。PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 对所有敌人造成敌人数量×<span style="color:#3aa675;font-weight:600">1</span>点伤害。从[<span style="color:#d4a017;font-weight:600">抽牌堆</span>](/mechanics/draw_pile.md)[<span style="color:#d4a017;font-weight:600">消耗</span>](/mechanics/exhaust.md)等于敌人数量的牌。

## 小贴士

- **伤害随敌人数量放大**：每个敌人受到"敌人数量×1"点攻击伤害。3 个敌人时每个受 3 伤，合计 9 伤；5 个敌人时每个受 5 伤，合计 25 伤。敌人越多越超值。
- **薇关键词自动触发**：带有[薇](/mechanics/vigil.md)关键词，相邻的非"薇"卡牌被打出时，此牌自动免费打出。配合手牌位置可以白嫖伤害+消耗。
- **消耗抽牌堆是双刃剑**：从抽牌堆**自选**消耗等于敌人数量的牌，既可主动剔除废牌配合消耗体系，也减少后续抽牌资源。多敌人时消耗多张，需谨慎。
- **3 费偏贵但有弹性**：3 费换 N² 伤 + N 张消耗，单敌人时（1 伤 + 1 消耗）严重亏本，多敌人时价值放大。适合遭遇战多的场景。
- **升级获得固有**：起手必抽，配合薇关键词第一回合即可自动触发。但 3 费起手打出压力大，需配合能量生成。

## 相关机制

- [薇](/mechanics/vigil.md)（相邻牌打出时自动打出）
- [消耗](/mechanics/exhaust.md)（消耗抽牌堆等于敌人数量的牌）
- [抽牌堆](/mechanics/draw_pile.md)（消耗来源）

## 源码

- `SeerIThinkThereforeIAm.cs`
