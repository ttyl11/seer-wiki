# 脆弱

<img src="/images/powers/frail_power.png" alt="脆弱" style="max-width:120px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 减益（Debuff）
- **叠加方式**: 计数器（层数可见，每回合自动 -1）
- **来源**: 原版能力

### 数值参数

| 参数 | 数值 | 说明 |
|---|---|---|
| 格挡减少倍率 | 0.75 | 从卡牌中获得的格挡乘以 0.75（即减少 25%） |

## 描述

脆弱时，从卡牌中获得的<span style="color:#d4a017;font-weight:600">格挡</span>值减少<span style="color:#3aa675;font-weight:600">25</span>%。

## 详细机制

- **触发时机**：在格挡计算阶段生效
- **触发条件**：
  - 获得格挡的是拥有者本人
  - 格挡来自卡牌或怪物招式
- **效果公式**：从卡牌中获得的格挡 × 0.75（即减少 25%）
- **悬浮提示**：注册了格挡悬浮提示
- **持续时间递减**：敌方回合结束时，层数 -1

## 相关能力

- [<span style="color:#9b59b6;font-weight:600">易伤</span>](/powers/vulnerable_power.md)：受击减益，受到攻击伤害增加 50%
- [<span style="color:#9b59b6;font-weight:600">虚弱</span>](/powers/weak_power.md)：攻击减益，造成攻击伤害减少 25%
- mod 能力 [<span style="color:#9b59b6;font-weight:600">衰弱</span>](/powers/weaken_power.md)：注意与原版"虚弱"区分

## 源码

- `FrailPower.cs`（原版能力）
