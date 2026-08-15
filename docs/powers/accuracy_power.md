# 命中

<img src="/images/powers/accuracy_power.png" alt="命中" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff，正层数）/ 减益（Debuff，负层数）
- **叠加方式**: 递减（计数型）
- **可见**: 是
- **允许负值**: 是
- **来源**: mod 能力

### 数值参数

| 参数 | 数值 |
|---|---|
| 每层未命中概率 | 5 |

## 描述

负数层数时每层有<span style="color:#3aa675;font-weight:600">5</span>%几率使伤害降为<span style="color:#3aa675;font-weight:600">0</span>。

## 详细机制

- **未命中判定**：当层数为负数时，每层提供 5% 未命中概率，由随机数判定是否未命中。
- **伤害归零**：若判定为未命中且为攻击伤害，伤害降为 0。
- **玩家与怪物均生效**：负命中同样作用于怪物的攻击——给敌人叠负命中后，它的攻击有概率直接落空。
- **正层数**：正层数时无特殊效果，仅作为属性存在（主要用于抵消负命中）。
- **多人同步**：随机判定使用框架随机数，确保多端一致。
- **类型随层数变化**：层数 ≥ 0 时为 Buff，层数 < 0 时为 Debuff。

## 相关卡牌

- [黎羽幻生](/cards/character/feather_phantom.md)（全属性+1，包含命中+1）
- [宇宙胎动](/cards/character/cosmic_movement.md)（全属性+1，包含命中+1）

## 相关机制

- [全属性](/mechanics/all_attributes.md)（命中是全属性之一）

## 源码

- `SeerAccuracyPower.cs`
