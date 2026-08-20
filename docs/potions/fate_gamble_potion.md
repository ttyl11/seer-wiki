# 🎲 悬命药水

## 基本信息

- **分类**: 伤害输出
- **稀有度**: 普通
- **使用时机**: 战斗内
- **目标**: 自身

### 数值参数

| 参数 | 数值 |
|---|---|
| 伤害数值 | 50 |
| 正面概率 | 50% |
| 反面概率 | 50% |

## 描述

<span style="color:#3aa675;font-weight:600">50</span>%概率对所有敌人造成<span style="color:#3aa675;font-weight:600">50</span>点伤害，<span style="color:#d44;font-weight:600">50</span>%概率对自己造成<span style="color:#3aa675;font-weight:600">50</span>点伤害。

## 详细机制

- **随机判定**：50% 正面、50% 反面。多人模式两端结果一致。
- **正面（50%）**：对所有敌人一次性造成 50 点非攻击伤害，**可被[格挡](/mechanics/block.md)**，不受[力量](/powers/strength_power.md)/[易伤](/powers/vulnerable_power.md)影响。
- **反面（50%）**：对自身造成 50 点非攻击伤害，可被自身[格挡](/mechanics/block.md)。
- **群体伤害一次性施加**：正面时对全体敌人一次性结算，而非逐个遍历。
## 小贴士

- **赌博药水**：50% 对敌 50 伤 / 50% 自伤 50，期望收益为 0，纯看脸。
- **自伤可被格挡**：反面时自伤 50 是非攻击伤害，若有[格挡](/mechanics/block.md)可抵消；正面时敌人有格挡也会减伤。

## 源码

- `SeerFateGamblePotion.cs`
