# 易伤

<img src="/images/powers/vulnerable_power.png" alt="易伤" style="max-width:120px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 减益（Debuff）
- **叠加方式**: 计数器（层数可见，每回合自动 -1）
- **来源**: 原版能力

### 数值参数

| 参数 | 数值 | 说明 |
|---|---|---|
| 伤害增加 | 1.5 | 受到的攻击伤害乘以 1.5（即增加 50%） |

## 描述

易伤的生物从攻击中受到的伤害增加<span style="color:#3aa675;font-weight:600">50</span>%。

## 详细机制

- **触发时机**：在伤害计算阶段生效
- **触发条件**：
  - 受到伤害的是拥有者本人
  - 为攻击伤害（受力量影响）
- **效果公式**：受到的攻击伤害 × 1.5（即增加 50%）
- **遗物/能力交互**：
  - 纸蛙遗物：增加易伤的伤害倍率
  - 残暴能力：增加易伤的伤害倍率
  - mod 衰弱能力：修改易伤的伤害倍率
- **持续时间递减**：敌方回合结束时，层数 -1

## 相关能力

- [<span style="color:#9b59b6;font-weight:600">虚弱</span>](/powers/weak_power.md)：对应的攻击减益，造成攻击伤害减少 25%
- [<span style="color:#9b59b6;font-weight:600">脆弱</span>](/powers/frail_power.md)：另一种减益（影响格挡获取）

## 相关卡牌

- [蛟龙出水](/cards/character/flood_dragon_emerging.md)（对所有敌人施加 2 层易伤）
- 其他原版与 mod 卡牌中所有施加易伤的卡牌

## 源码

- `VulnerablePower.cs`（原版能力）
