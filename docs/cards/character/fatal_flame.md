# 绝命火焰

<img src="/images/cards/fatal_flame.png" alt="绝命火焰" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 5
- **能量消耗**: 1
- **类型**: 攻击
- **稀有度**: 普通
- **目标**: 敌方单体
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 伤害 | 5 | 5 |
| 即死概率 | 14% | 20% |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 造成<span style="color:#3aa675;font-weight:600">5</span>点伤害。<span style="color:#3aa675;font-weight:600">14</span>%概率秒杀（对Boss无效）。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 造成<span style="color:#3aa675;font-weight:600">5</span>点伤害。<span style="color:#3aa675;font-weight:600">20</span>%概率秒杀（对Boss无效）。

## 小贴士

- **即死赌命牌**：1 费 5 伤害 + 14% 秒杀概率（升级后 20%），是 mod 中最容易获取的即死卡（普通稀有度）。对非 Boss 敌人一张牌可能直接清空血条，对 Boss 仍是正常的 5 点攻击伤害。
- **即死机制**：打出时掷一次随机判定，若命中且目标不在 Boss 房间，造成等于目标最大生命值的伤害（不可[格挡](/mechanics/block.md)的非攻击伤害，直接清空血条）。14% 概率秒杀非 Boss 敌人——无论多少血，86% 概率造成正常的 5 点攻击伤害。
- **Boss 房间无效**：在 Boss 房间中即死概率不生效，仅造成 5 点攻击伤害。所以这张牌对 Boss 战价值有限，主要用于精英战和小怪战。
- **正常伤害吃力量**：未触发秒杀时造成的 5 点攻击伤害可[格挡](/mechanics/block.md)，受[力量](/powers/strength_power.md)/[虚弱](/powers/weak_power.md)/[易伤](/powers/vulnerable_power.md)影响。配合力量体系可以提升保底伤害。
- **多次打出累积概率**：5 次打出至少 1 次秒杀的概率约 53%（升级后约 67%）。多张绝命火焰连续打出可以对高血量精英快速赌命。
- **升级的关键性**：即死概率从 14% 提升至 20%（+6%），概率提升约 43%。升级优先级中等——普通牌通常留给后期升级。
- **性价比**：1 费 5 伤害 + 14% 秒杀，普通稀有度容易获取，即死时收益爆炸、未即死时保底 5 点伤害。适合前期过渡和精英战斩杀。

## 相关能力

- [力量](/powers/strength_power.md)（正常伤害部分受力量加成）

## 相关机制

- [格挡](/mechanics/block.md)（正常伤害可格挡，即死伤害不可格挡）

## 源码

- `SeerFatalFlame.cs`
