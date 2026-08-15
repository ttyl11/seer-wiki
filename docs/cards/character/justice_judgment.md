# 正义大裁决

<img src="/images/cards/justice_judgment.png" alt="正义大裁决" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌（带关键词）
- **最大PP**: 1
- **能量消耗**: 60
- **类型**: 攻击
- **稀有度**: 稀有
- **目标**: 敌方单体
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 基础能量消耗 | 60 | 60 |
| 攻击伤害 | 100 | 100 |
| 固定伤害 | 100 | 250 |
| PP | 1 | 1 |
| 最大PP | 1 | 1 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 造成<span style="color:#3aa675;font-weight:600">100</span>点伤害，并给对手附加<span style="color:#3aa675;font-weight:600">100</span>点[<span style="color:#9b59b6;font-weight:600">固定伤害</span>](/powers/fixed_damage_power.md)。自身<span style="color:#d4a017;font-weight:600">牌组</span>每有一张牌，能耗<span style="color:#3aa675;font-weight:600">-1</span>。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 造成<span style="color:#3aa675;font-weight:600">100</span>点伤害。并给对手附加<span style="color:#3aa675;font-weight:600">250</span>点[<span style="color:#9b59b6;font-weight:600">固定伤害</span>](/powers/fixed_damage_power.md)。自身<span style="color:#d4a017;font-weight:600">牌组</span>每有一张牌，能耗<span style="color:#3aa675;font-weight:600">-1</span>。

## 小贴士

- **攻击伤害**：造成 <span style="color:#3aa675;font-weight:600">100</span> 点攻击伤害。
- **固定伤害**：附加[固定伤害](/powers/fixed_damage_power.md)。基础 <span style="color:#3aa675;font-weight:600">100</span> 点，升级后 <span style="color:#3aa675;font-weight:600">250</span> 点。
- **能耗减免**：实际能耗 = max(0, 60 - 牌组张数)。牌组每有一张牌能耗 <span style="color:#3aa675;font-weight:600">-1</span>，动态计算。
- **芜生关键词**：带有[芜生](/mechanics/void_birth.md)关键词，打出后此牌转化为"芜"。
- **升级效果**：升级使固定伤害从 <span style="color:#3aa675;font-weight:600">100</span> 提升至 <span style="color:#3aa675;font-weight:600">250</span>。

## 相关能力

- [固定伤害](/powers/fixed_damage_power.md)：mod 减益能力，目标下回合开始时受到等于层数的固定伤害后移除

## 相关机制

- [芜生](/mechanics/void_birth.md)（打出后此牌转化为"芜"）

## 源码

- `SeerJusticeJudgment.cs`
