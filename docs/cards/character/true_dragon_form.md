# 真龙形态

<img src="/images/cards/true_dragon_form.png" alt="真龙形态" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 1
- **能量消耗**: 3
- **类型**: 能力
- **稀有度**: 稀有
- **目标**: 自身
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 固有 | 无 | 有 |
| PP | 1 | 1 |
| 最大PP | 1 | 1 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 记录当前生命值，将生命恢复满。战斗结束时调整生命值不大于记录值。

## 升级后

[<span style="color:#d4a017;font-weight:600">固有</span>](/mechanics/innate.md)。PP: <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 记录当前生命值，将生命恢复满。战斗结束时调整生命值不大于记录值。

## 小贴士

- **战斗内满血、战后回收**：打出时先记下当前体力，再立刻回满；战斗结束时，若体力高于记录值会被压回记录值。本质是"向未来借体力"——本场战斗拥有满血坦度，但多出来的部分战后要还。
- **记录值即战后上限**：你打出它时的体力就是战后保留的上限。残血时打收益最大（回血多、缓冲大）；满血时打几乎等于没回，只锁了个上限。
- **净收益基本为正**：只要没有其它续航，你战后绝不会比"没打这张牌"更惨——最差也是回到记录值。它真正会"亏"的场景，是你战斗中还有其它回血把体力顶到记录值以上，那部分会被白白削掉。
- **一次性回满、整场挂着**：回满是打出瞬间的一次性效果；压体力的能力则整场存在、到战斗结束才结算。中途再受伤不会触发二次回血。
- **升级固有保开局**：升级附加[<span style="color:#d4a017;font-weight:600">固有</span>](/mechanics/innate.md)，使其出现在起手牌中，第一回合就能挑准残血或硬仗时机把满血贷出来。
- **性价比**：3 费换一次当回合满血，扛高强度战斗的保命能力牌，但别在有大量续航时叠加使用。

## 相关能力

- [真龙形态](/powers/true_dragon_form_power.md)（战后体力上限回收）

## 相关机制

- [固有](/mechanics/innate.md)（升级附加的起手关键词）

## 源码

- `SeerTrueDragonForm.cs`
- `SeerTrueDragonFormPower.cs`
