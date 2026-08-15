# 腐化

<img src="/images/enchantments/corrupted.png" alt="腐化" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 原版附魔
- **可附魔牌类型**: 攻击
- **显示数量**: 否
- **来源**: 原版

### 数值参数

| 参数 | 数值 |
|---|---|
| 伤害倍率 | 1.5（+50%） |
| 自损生命 | 2 |

## 描述

造成的伤害增加<span style="color:#3aa675;font-weight:600">50%</span>，但会失去<span style="color:#3aa675;font-weight:600">2</span>生命。

## 详细机制

- **伤害加成**：对已充能攻击（powered attack）造成 1.5 倍伤害；非充能攻击不生效。
- **自损**：打出此牌时，对自身造成 2 点不可格挡、不受力量影响的伤害。
- **附魔限制**：仅可附魔于攻击牌。

## 小贴士

- **高伤攻击收益最大**：腐化的 1.5 倍乘算对高基础伤害攻击收益最大（如 10 伤→15 伤），适合附在重击型攻击牌上。
- **自损2点需注意**：自损 2 点生命是不可格挡的非攻击伤害，低血时慎用，可配合[不朽之躯](../relics/rare/ancient_evil_emperor.md)等反制自损的遗物。

## 相关关键词

无

## 源码

- `Corrupted.cs`（原版）
