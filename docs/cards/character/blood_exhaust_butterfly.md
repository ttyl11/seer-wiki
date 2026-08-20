# 竭血残蝶

<img src="/images/cards/blood_exhaust_butterfly.png" alt="竭血残蝶" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 1
- **能量消耗**: 0
- **类型**: 技能
- **稀有度**: 罕见
- **目标**: 自身
- **关键词**: 寂灭
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 生命消耗 | 9 | 6 |
| PP | 1 | 1 |
| 最大PP | 1 | 1 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 消耗自身<span style="color:#3aa675;font-weight:600">9</span>点生命。下一场战斗中获得[<span style="color:#d4a017;font-weight:600">必定暴击</span>](/powers/turn_guaranteed_crit_power.md)和[<span style="color:#d44;font-weight:600">异常状态</span>](/mechanics/abnormal-status.md)免疫。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 消耗自身<span style="color:#3aa675;font-weight:600">6</span>点生命。下一场战斗中获得[<span style="color:#d4a017;font-weight:600">必定暴击</span>](/powers/turn_guaranteed_crit_power.md)和[<span style="color:#d44;font-weight:600">异常状态</span>](/mechanics/abnormal-status.md)免疫。

## 小贴士

- **寂灭意味着一次性**：[寂灭](/mechanics/nirvana.md)——打出时，本场战斗结束后从你的牌组中移除此牌（没打出就结束战斗则不会移除）。所以这张牌是"用 9 点血换下一场战斗的开局优势"，摸到不打就永远只是一张白板。
- **下场增益按层预存**：打出时为下一场战斗累计 <span style="color:#3aa675;font-weight:600">1</span> 层预备——下场战斗开始时兑现为 <span style="color:#3aa675;font-weight:600">1</span> 层[回合必定暴击](/powers/turn_guaranteed_crit_power.md)（该回合所有攻击暴击）+ 整场[异常免疫](/powers/debuff_immune_power.md)。注意：免疫同亢龙有悔一样只挡 25 种异常状态，不挡虚弱/易伤等原版减益。
- **自伤直接扣血**：9 点生命消耗为不可格挡的非攻击伤害，不吃力量/易伤，也不触发"受到攻击"类效果。前期 9 点偏贵，升级降到 6 点后压力小很多。
- **性价比**：0 费合理——血量换下一场战斗全局优势；若当前战斗必赢且下场是精英/Boss，这是最划算的购买时机。
- **升级优先级高**：9→6 是 33% 的代价降幅，且这张牌打一次就消失，升级窗口只有一次机会，**摸到就该升**。

## 相关能力

- [回合必定暴击](/powers/turn_guaranteed_crit_power.md)（下一场战斗获得，每层覆盖一个回合）
- [异常免疫](/powers/debuff_immune_power.md)（下一场战斗获得，999 层≈整场）
- [暴击](/powers/critical_strike_power.md)（必定暴击的底层机制）

## 源码

- `SeerBloodExhaustButterfly.cs`
