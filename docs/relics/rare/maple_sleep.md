# 枫眠

<img src="/images/relics/maple_sleep.png" alt="枫眠" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 稀有

### 数值参数

| 参数 | 数值 |
|---|---|
| HealAmount（回复生命） | 3 |
| PpRestore（恢复PP） | 1 |
| BurnTurns（施加烧伤层数） | 2 |

## 描述

回合开始时，若自身无任一属性提升，下次攻击必定暴击。

对每个敌人：若有属性提升，消除之并施加<span style="color:#3aa675;font-weight:600">2</span>层<span style="color:#d44;font-weight:600">[烧伤](/powers/burn_power.md)</span>；若无属性提升，施加<span style="color:#3aa675;font-weight:600">2</span>层<span style="color:#d44;font-weight:600">[烧伤](/powers/burn_power.md)</span>，若失败则消除其所有<span style="color:#d4a017;font-weight:600">增益</span>。

回合结束时，若双方任意一方处于<span style="color:#d44;font-weight:600">[异常状态](/mechanics/abnormal-status.md)</span>，回复<span style="color:#3aa675;font-weight:600">3</span>点生命，恢复消耗牌堆中随机1张卡牌<span style="color:#3aa675;font-weight:600">1</span>点<span style="color:#d4a017;font-weight:600">[PP](/mechanics/pp-system.md)</span>。

- **自身判定**：回合开始时检测[力量](/powers/strength_power.md)、[防御](/powers/defense_power.md)、[速度](/powers/speed_power.md)、[命中](/powers/accuracy_power.md)是否有正值。全无正值则获得 1 层[下次必暴](/powers/next_guaranteed_crit_power.md)；有任一正值则移除已有的[下次必暴](/powers/next_guaranteed_crit_power.md)。
- **敌人处理**：对每个敌人，若有属性正值则消除其正值属性并施加 <span style="color:#3aa675;font-weight:600">2</span> 层[烧伤](/powers/burn_power.md)；若无属性正值则施加 <span style="color:#3aa675;font-weight:600">2</span> 层[烧伤](/powers/burn_power.md)，若敌人免疫烧伤则清空其所有可见增益。
- **回合结束回复**：若自身或任一敌人处于[异常状态](/mechanics/abnormal-status.md)，回复 <span style="color:#3aa675;font-weight:600">3</span> 点生命，并从消耗堆随机选 1 张 PP 未满的 PP 牌恢复 <span style="color:#3aa675;font-weight:600">1</span> 点 PP。

## 风味文字

<span style="color:#d44;font-weight:600">枫眠。</span>

## 小贴士

- **无属性提升时必暴**：回合开始时若自身 4 种属性（力量/防御/速度/命中）均无正值，获得 1 层[下次必暴](/powers/next_guaranteed_crit_power.md)（下次攻击必定暴击）。有任一正值则移除必暴——需要保持"净身"（不叠属性）才能触发必暴，与属性流卡组天然冲突。
- **敌人有属性则消除并烧伤**：对每个敌人，若有属性正值则先消除其正值属性再施加 2 层[烧伤](/powers/burn_power.md)。克制叠力量/防御的精英怪和 Boss。
- **敌人无属性则烧伤或清增益**：对无属性正值的敌人施加 2 层烧伤，若敌人免疫烧伤则清空其所有可见增益。兜底处理免疫烧伤的敌人，不会空手而归。
- **烧伤是异常状态，触发回血回 PP**：[烧伤](/powers/burn_power.md)属于异常状态，枫眠施加烧伤后回合结束就能触发"回复 3 生命 + 恢复消耗堆 PP 牌 1 点 PP"。每回合稳定触发，攻防一体。
- **消耗堆 PP 牌回收**：回合结束时从消耗堆随机选 1 张 PP 未满的 PP 牌恢复 1 点 PP。配合会消耗 PP 牌的卡组，能回收已消耗的 PP 牌资源。

## 源码

- `SeerMapleSleep.cs`
