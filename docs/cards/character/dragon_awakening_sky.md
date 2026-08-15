# 龙寤揭天

<img src="/images/cards/dragon_awakening_sky.png" alt="龙寤揭天" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 5
- **能量消耗**: 2
- **类型**: 攻击
- **稀有度**: 稀有
- **目标**: 随机敌方
- **可升级**: 是（1 级）
- **关键词**: [奇巧](/mechanics/sly.md)

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 伤害 | 3 | 3 |
| 异常数量 | 1 | 2 |
| 异常回合 | 2 | 2 |
| 回手牌所需卡数 | 4 | 4 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: 5/5 对随机敌人造成<span style="color:#3aa675;font-weight:600">3</span>点伤害。每层[<span style="color:#d4a017;font-weight:600">先制</span>](/powers/first_strike_power.md)额外打出一次。施加<span style="color:#3aa675;font-weight:600">1</span>种随机[<span style="color:#d44;font-weight:600">异常状态</span>](/mechanics/abnormal-status.md)<span style="color:#3aa675;font-weight:600">2</span>回合。每打出<span style="color:#3aa675;font-weight:600">4</span>张牌回到[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)。

## 升级后

PP: 5/5 对随机敌人造成<span style="color:#3aa675;font-weight:600">3</span>点伤害。每层[<span style="color:#d4a017;font-weight:600">先制</span>](/powers/first_strike_power.md)额外打出一次。施加<span style="color:#3aa675;font-weight:600">2</span>种随机[<span style="color:#d44;font-weight:600">异常状态</span>](/mechanics/abnormal-status.md)<span style="color:#3aa675;font-weight:600">2</span>回合。每打出<span style="color:#3aa675;font-weight:600">4</span>张牌回到[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)。

## 小贴士

- **先制驱动的多段输出**：基础打出 1 次，每层[先制](/powers/first_strike_power.md)额外打出 1 次。打出次数 = 1 + 先制层数。配合[荒烬涂天](./desolate_ash_sky.md)（每回合先制 +2）或其他先制来源，一张牌可以打出 3-5 次，每次 3 伤害 + 异常状态，总伤和异常覆盖远超单次。
- **奇巧关键词**：带有[奇巧](/mechanics/sly.md)关键词，可以被奇巧效果强制打出——不需要手动打出即可触发全部效果。配合奇巧触发牌可以在不占出牌权的情况下多段输出。
- **随机目标每次重选**：每次打出（含重放）都**重新随机选择**目标。多敌人遭遇战中伤害会分散到不同敌人；单体 Boss 战中所有伤害集中在一个目标。随机选取使用同步随机源，多人模式两端一致。
- **回手牌循环**：每打出 4 张牌时，此牌从[弃牌堆](/mechanics/discard_pile.md)回到[手牌](/mechanics/hand.md)底部。这意味着在快速出牌的卡组中（低费连击流），这张牌可以**反复回到手牌**实现循环输出。仅当此牌不在手牌中时触发。
- **异常状态随机**：从 24 种[异常状态](/mechanics/abnormal-status.md)中随机选 1 种（升级后 2 种），施加 2 回合。随机性意味着每次效果不同——可能抽到强力的石化/瘫痪，也可能抽到较弱的。升级后 2 种异常大幅提升覆盖率和控制力。
- **配合建议**：最佳配合是先制流——[荒烬涂天](./desolate_ash_sky.md)每回合先制 +2，配合此牌每回合打出 3 次（1+2 先制）= 9 伤害 + 3 种异常。低费连击流（快速打出 4 张牌触发回手）可以让此牌循环使用。奇巧触发牌可以在不占出牌权的情况下触发。
- **升级的价值**：异常数量从 1 提升至 2。每次打出施加 2 种异常而非 1 种，控制能力翻倍。配合先制多段打出（3 次 × 2 种 = 6 种异常/回合），几乎可以覆盖全部 24 种异常状态。升级优先级高。
- **性价比**：2 费 3 伤害看似偏低，但先制驱动多段 + 异常覆盖 + 回手循环的综合价值极高。需要先制流支撑才能发挥——无先制时仅 2 费 3 伤害 + 1 异常（性价比低）。

## 相关能力

- [先制](/powers/first_strike_power.md)（每层额外打出一次）

## 相关机制

- [奇巧](/mechanics/sly.md)（原版关键词）
- [异常状态](/mechanics/abnormal-status.md)（施加随机异常状态）
- [手牌](/mechanics/hand.md)（每打出 4 张牌回到手牌）

## 源码

- `SeerDragonAwakeningSky.cs`
