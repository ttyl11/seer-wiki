# 白霞逐夜

<img src="/images/cards/white_dawn_chase_night.png" alt="白霞逐夜" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 5
- **能量消耗**: 1
- **类型**: 技能
- **稀有度**: 普通
- **目标**: 自身
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 格挡 | 8 | 13 |
| 冻伤层数 | 3 | 3 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 获得<span style="color:#3aa675;font-weight:600">8</span>点[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)。若此牌为本回合首张打出的牌，对所有敌人施加<span style="color:#3aa675;font-weight:600">3</span>层[<span style="color:#9b59b6;font-weight:600">冻伤</span>](/powers/frostbite_power.md)。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 获得<span style="color:#3aa675;font-weight:600">13</span>点[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)。若此牌为本回合首张打出的牌，对所有敌人施加<span style="color:#3aa675;font-weight:600">3</span>层[<span style="color:#9b59b6;font-weight:600">冻伤</span>](/powers/frostbite_power.md)。

## 详细机制

- **首张判定只看自己**：判定统计的是**你本人**本回合已打出的牌数（队友出牌不算）。打出瞬间本牌还在出牌区，计数含它自身——扣除后若为 0，即"之前没打过牌"，触发全体冻伤。
- **冻伤是固定流失而非按层数放大**：[冻伤](/powers/frostbite_power.md)每回合开始固定流失 <span style="color:#3aa675;font-weight:600">5</span> 点生命（不受格挡），然后层数 -<span style="color:#3aa675;font-weight:600">1</span>——层数决定持续几个回合（3 层 = 3 个回合），不放大单回合伤害。3 层总计 <span style="color:#3aa675;font-weight:600">15</span> 点不可格挡流失。
- **升级只加格挡**：8→13，冻伤仍为 3 层，首张判定条件不变。

## 小贴士

- **首张牌双重收益**：作为本回合首张牌打出时，<span style="color:#3aa675;font-weight:600">8</span> 格挡 + 全体 <span style="color:#3aa675;font-weight:600">3</span> 层[冻伤](/powers/frostbite_power.md)（3 回合共 <span style="color:#3aa675;font-weight:600">15</span> 点/敌人的不可格挡流失）——一张牌同时覆盖防御与持续输出，密度极高。
- **非首张打出只有格挡**：本回合已打过任何牌（含免费的自动出牌）再打它，就只剩 8/13 点格挡，冻伤完全不触发。**出牌顺序是这张牌的全部技巧**——开局第一张必须留给它，或用 0 费牌也得排在它后面。
- **冻伤不吃格挡、不被力量增伤**：冻伤结算是固定生命流失，敌人格挡再高也照扣，也与力量/易伤等攻击增伤无关。与[冰封](/powers/freeze_power.md)（回合末转为冻伤）构成 mod 冰系的两层体系，面对高格挡敌人尤其稳。
- **多来源冻伤叠加层数而非单回合伤害**：[昊海垂天](/cards/character/vast_sea_sky.md)生成的[海洋](/orbs/ocean_orb.md)球被动也挂冻伤——两个来源的冻伤**层数累加**（3+3=6 层），但每回合流失量仍是固定 <span style="color:#3aa675;font-weight:600">5</span> 点，叠层的收益是**延长持续回合**，不是提高单回合伤害。
- **升级抬高非首张保底价值**：升级后 13 点格挡接近一张标准防御牌，即使错过首张时机也不亏太多；首张打出的理想循环不变。
- **性价比**：<span style="color:#3aa675;font-weight:600">1</span> 费换 8/13 格挡 +（首张时）全体 15 点不可格挡流失，普通牌里的优质起手位；错过首张就贬值成半张防御牌。

## 相关能力

- [冻伤](/powers/frostbite_power.md)（首张打出时对全体敌人施加 3 层，每回合开始固定 5 点流失并递减）

## 相关机制

- [格挡](/mechanics/block.md)（无条件获得 8/13 点）
- [冰封](/powers/freeze_power.md)（冻伤的上游状态，回合结束时转化为冻伤）

## 源码

- `SeerWhiteDawnChaseNight.cs`
