# 增伤

<img src="/images/powers/next_damage_boost_power.png" alt="增伤" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 计数器（1，层数可见，需通过 action 增减）

### 数值参数

| 参数 | 数值 | 说明 |
|---|---|---|
| 增伤百分比 | 10 | 默认基础值（实际值由施加方决定，如首发压制为 333） |

> 注：能力自身默认增伤百分比为 10，但实际数值由施加方传入，并在层数变化时同步到增伤百分比变量。

## 描述

下一次攻击伤害提升<span style="color:#3aa675;font-weight:600">10</span>%。

> 注：默认值为 10%，实际数值由施加方卡牌决定（如[首发压制](/cards/colorless/first_strike_suppress.md)施加 333%）。

## 详细机制

- **触发时机**：在伤害计算阶段生效
- **触发条件**：
  - 伤害来源为拥有者本人
  - 为攻击伤害（受力量影响）
- **效果公式**：伤害 × (1 + 增伤百分比/100)
  - 例：增伤 333% → 伤害 × 4.333（增加 333%）
- **移除时机**：拥有者攻击后移除自身
- **动态变量同步**：层数变化时同步到增伤百分比变量，确保悬浮提示显示正确数值

## 相关能力

- [<span style="color:#d4a017;font-weight:600">必定暴击</span>](/powers/next_guaranteed_crit_power.md)：同样是"下一次攻击"类增益，但效果是必定暴击
- [<span style="color:#d4a017;font-weight:600">减伤</span>](/powers/next_damage_reduction_power.md)：对应减益版本，下一次受到的攻击伤害减少

## 相关卡牌

- [首发压制](/cards/colorless/first_strike_suppress.md)（无色牌，能力，施加 333% 增伤）
- [寂·妖胧天鸣](/cards/character/silent_demon_cry.md)（消耗牌堆每放回 1 张下次攻击 +X% 伤害）
- [王·联盟审判](/cards/character/king_alliance_judgment.md)（下次造成伤害翻倍）
- [傳馥明王最胜语](/cards/character/fragrant_king_supreme_word.md)（拒赦怒威态时下一次伤害提升 54%）
- [婵·命定星缘](/cards/character/destined_star_bond.md)（下一次攻击伤害 2.5 倍）

## 源码

- `SeerNextDamageBoostPower.cs`
