# 感染

<img src="/images/powers/infect_power.png" alt="感染" style="max-width:120px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 异常状态（Debuff）
- **叠加方式**: 计数器（1，层数可见，回合结束 -1）
- **异常状态**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| 伤害降低百分比 | 20 |

## 描述

攻击伤害降低<span style="color:#3aa675;font-weight:600">20</span>%。在你的回合结束时减少<span style="color:#3aa675;font-weight:600">1</span>层并获得<span style="color:#3aa675;font-weight:600">2</span>层[中毒](/powers/poison_power.md)。

## 详细机制

- **伤害降低**：
  - 触发条件：拥有者造成攻击伤害时
  - 效果公式：伤害 × <span style="color:#3aa675;font-weight:600">0.8</span>（降低 <span style="color:#3aa675;font-weight:600">20</span>%）
- **回合结束**：
  1. 如果层数 > 0，对拥有者施加 <span style="color:#3aa675;font-weight:600">2</span> 层[中毒](/powers/poison_power.md)
  2. 层数 -<span style="color:#3aa675;font-weight:600">1</span>
- **连锁效果**：感染 → 回合结束 → 施加中毒 → 下回合开始 → 中毒造成伤害

## 小贴士

- **越拖越痛**：每回合自叠 2 层中毒，中毒伤害随层数非线性递增。感染持续多回合后中毒伤害会很高。

## 相关能力

- [<span style="color:#d44;font-weight:600">中毒</span>](/powers/poison_power.md)：回合结束时获得 2 层中毒

## 相关卡牌

- [曙光普照](/cards/character/shining_light.md)

## 相关充能球

- [森林](/orbs/forest_orb.md)（激发：对所有敌人施加 3 层感染）

## 源码

- `SeerInfectPower.cs`
