# 狩·无限连爪

<img src="/images/cards/infinite_claw.png" alt="狩·无限连爪" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 5
- **能量消耗**: X
- **类型**: 攻击
- **稀有度**: 稀有
- **目标**: 随机敌方
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 每点能量命中数 | 7 | 9 |
| 单次伤害 | 1 | 1 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 对随机敌人造成<span style="color:#3aa675;font-weight:600">7</span>*X次<span style="color:#3aa675;font-weight:600">1</span>点伤害。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 对随机敌人造成<span style="color:#3aa675;font-weight:600">9</span>*X次<span style="color:#3aa675;font-weight:600">1</span>点伤害。

## 小贴士

- **X 费机制**：此牌为 X 费卡牌，打出时消耗所有[能量](/mechanics/energy.md)，X 等于消耗的能量数。X 越高命中次数越多。
- **多段随机伤害**：总命中次数 = X × 每点能量命中数（<span style="color:#3aa675;font-weight:600">7</span>），每次命中 <span style="color:#3aa675;font-weight:600">1</span> 点攻击伤害，随机分配给敌人。X=2 时 14 次命中，X=3 时 21 次命中。
- **配合力量加成**：每次命中是独立攻击伤害，[力量](/powers/strength_power.md)每层让每次命中 +1 伤。X=2 配 3 层力量 = 14×(1+3) = 56 伤，多段卡牌配合力量收益翻倍；[易伤](/powers/vulnerable_power.md)同理对每次命中独立乘算，多段是放大百分比增伤的最佳载体。
- **单次 1 伤怕格挡**：每次命中只 <span style="color:#3aa675;font-weight:600">1</span> 点攻击伤害，敌人有格挡时单次会被完全抵消（3 点格挡 = 吞掉 3 次命中）。适合对无格挡或格挡已耗尽的敌人使用。
- **升级提升命中数**：每点能量命中数 <span style="color:#3aa675;font-weight:600">7</span> → <span style="color:#3aa675;font-weight:600">9</span>。X=2 时 14 → 18 次，X=3 时 21 → 27 次，能量越多升级收益越大。

## 相关机制

- [能量](/mechanics/energy.md)（X 费消耗所有能量）
- [力量](/powers/strength_power.md)（每次命中 +1 攻击伤害）
- [易伤](/powers/vulnerable_power.md)（每次命中独立乘算增伤）

## 源码

- `SeerInfiniteClaw.cs`
