# 飞翼连击

<img src="/images/cards/wing_combo.png" alt="飞翼连击" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 无色牌
- **能量消耗**: 3
- **类型**: 能力
- **稀有度**: 稀有
- **目标**: 自身
- **关键词**: [寂灭](/mechanics/nirvana.md)
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 重放次数 | 1 | 1 |
| 能量消耗 | 3 | 2 |

## 描述

令随机一张[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)获得[<span style="color:#d4a017;font-weight:600">重放</span>](/mechanics/replay.md)<span style="color:#3aa675;font-weight:600">1</span>。战斗结束时，向手牌加入一张<span style="color:#d4a017;font-weight:600">异鸟扑击</span>。

## 升级后

令随机一张[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)获得[<span style="color:#d4a017;font-weight:600">重放</span>](/mechanics/replay.md)<span style="color:#3aa675;font-weight:600">1</span>。战斗结束时，向手牌加入一张<span style="color:#d4a017;font-weight:600">异鸟扑击</span>。

## 小贴士

- **关键词**：此牌带有[寂灭](/mechanics/nirvana.md)关键词——本场战斗结束后从牌组中移除，是"租来用一场"的一次性能力。
- **重放赋予**：随机选择[手牌](/mechanics/hand.md)中一张**非自身**的卡牌，赋予其[重放](/mechanics/replay.md) <span style="color:#3aa675;font-weight:600">1</span> 次——该牌下次打出后再额外自动打出一次，等效白嫖一张牌的效果。
- **随机目标不可控**：重放落在哪张手牌上是随机的——手里牌越少、质量越齐，越容易砸中关键牌；手里废牌多时价值大打折扣。
- **战斗结束的奖励是永久的**：战斗结束时（需存活）向**牌组**永久加入一张"异鸟扑击"（原版事件卡：0 费攻击，造成 <span style="color:#3aa675;font-weight:600">14</span> 点伤害，可升级至 <span style="color:#3aa675;font-weight:600">18</span> 点）——描述中的"手牌"指结算展示，实际直接进局外牌组，后续战斗都能抽到。
- **一张换一张**：此牌自身因寂灭战后离场，换来一张 0 费 14 伤的异鸟扑击常驻牌组——牌组总数不变，白赚一次当回合的重放。
- **追踪能力**（mod 不可见能力）：打出时施加 <span style="color:#3aa675;font-weight:600">1</span> 层隐藏追踪能力，负责在战斗结束时发放异鸟扑击；重复打出此牌不会重复获得追踪能力（发放也只有一次）。
- **升级效果**：耗能从 <span style="color:#3aa675;font-weight:600">3</span> 降至 <span style="color:#3aa675;font-weight:600">2</span>，重放次数与奖励不变——纯粹的性价比提升。

## 相关机制

- [重放](/mechanics/replay.md)（赋予随机手牌 1 次重放）
- [手牌](/mechanics/hand.md)（重放目标选取范围）
- [寂灭](/mechanics/nirvana.md)（打出后从牌组移除）

## 源码

- `SeerWingCombo.cs`
- `SeerWingComboTrackerPower.cs`
- `ByrdSwoop.cs`（异鸟扑击，原版）
