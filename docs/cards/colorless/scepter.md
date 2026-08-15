# 权杖

<img src="/images/cards/scepter.png" alt="权杖" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 无色牌
- **能量消耗**: 1
- **类型**: 技能
- **稀有度**: 罕见
- **目标**: 敌方单体
- **可升级**: 否

### 数值参数

| 参数 | 数值 |
|---|---|
| 伤害倍率 | 140 |

## 描述

对目标附加自己已损失生命值<span style="color:#3aa675;font-weight:600">140</span>%的[<span style="color:#d4a017;font-weight:600">固定伤害</span>](/powers/fixed_damage_power.md)。

## 升级后

对目标附加自己已损失生命值<span style="color:#3aa675;font-weight:600">140</span>%的[<span style="color:#d4a017;font-weight:600">固定伤害</span>](/powers/fixed_damage_power.md)。

## 小贴士

- **固定伤害**（[<span style="color:#d4a017;font-weight:600">查看能力页</span>](/powers/fixed_damage_power.md)，mod 能力）：一种无视格挡与减免的真实伤害。本卡将计算好的伤害值以层数形式附加到目标身上。
- **保留**（[<span style="color:#d4a017;font-weight:600">查看机制页</span>](/mechanics/retain.md)，原版关键词）：此牌在回合结束时不会被弃掉，保留在手牌中。
- **触发时机**：打出时计算伤害。
- **目标选取**：敌方单体。
- **伤害计算**：伤害 =（自身最大生命值 − 自身当前生命值）× <span style="color:#3aa675;font-weight:600">140</span>%。生命值越低，造成的固定伤害越高。
- **升级效果**：本卡不可升级。

## 源码

- `SeerScepter.cs`
