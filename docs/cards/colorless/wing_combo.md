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

- **分类**：无色牌，能力牌，带[寂灭](/mechanics/nirvana.md)关键词。耗能 <span style="color:#3aa675;font-weight:600">3</span>。
- **触发时机**：打出后先获得追踪能力，再随机选择手牌赋予重放。
- **目标选取**：自身。重放目标为[手牌](/mechanics/hand.md)中随机一张非自身卡牌。
- **追踪能力**（mod 不可见能力）：仅当自身尚未拥有该能力时施加 <span style="color:#3aa675;font-weight:600">1</span> 层。该能力使战斗结束时向手牌加入一张"异鸟扑击"。
- **重放赋予**：随机选择[手牌](/mechanics/hand.md)中一张非自身的卡牌，赋予其重放，使其下次打出后再额外打出 <span style="color:#3aa675;font-weight:600">1</span> 次。
- **寂灭**（[<span style="color:#d4a017;font-weight:600">查看机制页</span>](/mechanics/nirvana.md)，mod 关键词）：打出后，本场战斗结束后从牌组中移除此牌。
- **升级效果**：耗能从 <span style="color:#3aa675;font-weight:600">3</span> 降至 <span style="color:#3aa675;font-weight:600">2</span>。

## 相关机制

- [重放](/mechanics/replay.md)（赋予随机手牌 1 次重放）
- [手牌](/mechanics/hand.md)（重放目标选取范围）
- [寂灭](/mechanics/nirvana.md)（打出后从牌组移除）

## 源码

- `SeerWingCombo.cs`
- `SeerWingComboTrackerPower.cs`
