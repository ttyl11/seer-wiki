# 亡灵风暴

<img src="/images/cards/undead_storm.png" alt="亡灵风暴" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 10
- **能量消耗**: 1
- **类型**: 技能
- **稀有度**: 普通
- **目标**: 所有敌方
- **标签**: 亡灵契约师
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 灾厄层数 | 2 | 3 |
| 重放次数 | 2 | 2 |
| PP | 10 | 10 |
| 最大PP | 10 | 10 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">10</span>/<span style="color:#3aa675;font-weight:600">10</span> 赋予所有敌人<span style="color:#3aa675;font-weight:600">2</span>层[<span style="color:#9b59b6;font-weight:600">灾厄</span>](/powers/doom_power.md)。[<span style="color:#d4a017;font-weight:600">重放</span>](/mechanics/replay.md)<span style="color:#3aa675;font-weight:600">2</span>。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">10</span>/<span style="color:#3aa675;font-weight:600">10</span> 赋予所有敌人<span style="color:#3aa675;font-weight:600">3</span>层[<span style="color:#9b59b6;font-weight:600">灾厄</span>](/powers/doom_power.md)。[<span style="color:#d4a017;font-weight:600">重放</span>](/mechanics/replay.md)<span style="color:#3aa675;font-weight:600">2</span>。

## 小贴士

- **重放让灾厄三倍化**：牌面写每次 2 层，但"重放 2"意味着这张牌总共打出 3 次，每次都重新对所有敌人挂灾厄。所以实际每敌人叠 6 层（基础）/9 层（升级）。别被牌面数字骗了，真正的压制力是三倍。
- **灾厄是斩杀线**：灾厄在敌人回合结束时结算——若其当前生命不高于灾厄层数，直接死亡，无视[格挡](/mechanics/block.md)。所以先压血再挂灾厄，让斩杀线覆盖敌人血量，能跨甲收割。
- **多敌人场景价值最大**：对所有可命中敌人施加，敌人越多越赚。1 费打 3 次群挂灾厄，群体压制效率极高，是亡灵契约师体系里少有的群体斩杀启动件。
- **升级抬高五成斩杀线**：升级把每次层数从 2 提到 3，重放次数不变。总灾厄 6→9，斩杀线明显抬高，能威胁更多残血敌人。升级收益集中在数值而非机制。
- **性价比**：1 费换 3 次群体灾厄挂载，群体斩杀启动效率极高。亡灵契约师体系的核心群压件。

## 相关能力

- [灾厄](/powers/doom_power.md)（回合结束时生命不高于灾厄值则立即死亡）

## 相关机制

- [重放](/mechanics/replay.md)（额外打出 2 次，总计 3 次）

## 源码

- `SeerUndeadStorm.cs`
