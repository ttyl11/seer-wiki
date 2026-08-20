# 虚弱



<img src="/images/powers/weak_power.png" alt="虚弱" style="max-width:120px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 减益（Debuff）
- **叠加方式**: 计数器（层数可见，每回合自动 -1）
- **来源**: 原版能力

### 数值参数

| 参数 | 数值 | 说明 |
|---|---|---|
| 伤害减少 | 0.75 | 造成的攻击伤害乘以 0.75（即减少 25%） |

## 描述

虚弱的生物造成的攻击伤害减少<span style="color:#3aa675;font-weight:600">25</span>%。

## 详细机制

- **触发时机**：在伤害计算阶段生效
- **触发条件**：
  - 造成伤害的是拥有者本人
  - 为攻击伤害（受力量影响）
- **效果公式**：造成的攻击伤害 × 0.75（即减少 25%）
- **遗物/能力交互**：
  - 纸鹤遗物：增加虚弱的伤害减免
  - mod 衰弱能力：修改虚弱的伤害减免
- **持续时间递减**：敌方回合结束时，层数 -1

## 相关能力

- [<span style="color:#9b59b6;font-weight:600">易伤</span>](/powers/vulnerable_power.md)：对应的受击减益，受到攻击伤害增加 50%
- [<span style="color:#9b59b6;font-weight:600">脆弱</span>](/powers/frail_power.md)：另一种减益（影响格挡获取）
- mod 能力 [<span style="color:#9b59b6;font-weight:600">衰弱</span>](/powers/weaken_power.md)：注意与原版"虚弱"区分，mod 的"衰弱"是不同的能力

## 相关卡牌

- [蛟龙出水](/cards/character/flood_dragon_emerging.md)（对所有敌人施加 2 层虚弱）
- 其他原版与 mod 卡牌中所有施加虚弱的卡牌

## 源码

- `WeakPower.cs`（原版能力）
