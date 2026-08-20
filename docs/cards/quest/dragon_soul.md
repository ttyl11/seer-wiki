# 龙魂

<img src="/images/cards/dragon_soul.png" alt="龙魂" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 任务牌
- **类型**: 任务
- **稀有度**: 任务
- **能量消耗**: -1（无）
- **可升级**: 否
- **关键词**: [不能被打出](/mechanics/unplayable.md)

### 数值参数

| 参数 | 数值 |
|---|---|
| 龙牌阈值 | 9 |
| 当前龙牌数 | 0 |

## 描述

[不可打出](/mechanics/unplayable.md)。每场战斗开始时获得[<span style="color:#d4a017;font-weight:600">龙属性</span>](/powers/dragon_power.md)。[<span style="color:#d4a017;font-weight:600">牌组</span>](/mechanics/draw_pile.md)中龙牌：<span style="color:#3aa675;font-weight:600">0</span>/<span style="color:#3aa675;font-weight:600">9</span>。达到<span style="color:#3aa675;font-weight:600">9</span>张时获得神秘奖励并移除此牌。

## 小贴士

- **任务牌特性**：类型为任务牌，稀有度为任务。带有[不能被打出](/mechanics/unplayable.md)，不参与抽牌/弃牌，仅存在于主牌组。
- **龙属性**（mod 能力）：每场战斗开始时，若此牌在主牌组中，获得 <span style="color:#3aa675;font-weight:600">1</span> 层[龙属性](/powers/dragon_power.md)——这是**全程白嫖的永久增益**，哪怕最终凑不齐 9 张龙牌，这张牌也一直在赚。
- **🔑 龙牌判定看的是内部类名含「Dragon」**：[龙威](/cards/character/dragon_awe.md)、[龙烙](/cards/character/dragon_brand.md)、[龙宴](/cards/character/dragon_feast.md)、[龙王波](/cards/character/dragon_king_wave.md)、[真龙形态](/cards/character/true_dragon_form.md)、[滔天龙汲水](/cards/character/soaring_dragon_water.md)等 <span style="color:#3aa675;font-weight:600">20</span>+ 张牌都算；判定与升级、费用、类型无关，只看类名。凑 9 张并不难，龙牌浓度高的构筑顺手就达标。
- **达标的代价是龙牌全部清空**：触发奖励时会**移除牌组中所有龙牌**（仅保留龙魂自身直到离场）——你的龙体系输出核心会被连根拔起。这是终局转型奖励：拿一整套龙遗物、放弃龙牌构筑，多张核心龙牌在手时要掂量一下时机。
- **神秘奖励**：达到 <span style="color:#3aa675;font-weight:600">9</span> 张龙牌时（战斗结束时结算）触发：
 1. 移除[牌组](/mechanics/draw_pile.md)中所有龙牌（排除自身）。
 2. 获得**所有**带"龙"的遗物（限普通/罕见/稀有/史诗/传说五个品级，**已拥有的不重复获得**）——一次性打包全部龙遗物。
- **跨战斗持久化**：奖励领取状态跨战斗保存，只会触发一次。奖励领取后，进入下一个房间时从[牌组](/mechanics/draw_pile.md)移除此牌。
- **龙牌计数更新**：每场战斗结束时重新统计牌组中的龙牌数量，加牌/删牌都会实时反映在下一场结算里。

## 相关能力

- [龙属性](/powers/dragon_power.md)（每场战斗开始时获得）

## 相关机制

- [不能被打出](/mechanics/unplayable.md)（原版关键词，无法主动打出）

## 源码

- `SeerDragonSoul.cs`
