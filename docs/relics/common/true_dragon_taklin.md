# 真龙·塔克林

<img src="/images/relics/true_dragon_taklin.png" alt="真龙·塔克林" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 普通

### 数值参数

| 参数 | 数值 |
|---|---|
| 防御获取 | 1 |

## 描述

回合开始时，获得<span style="color:#3aa675;font-weight:600">1</span>层<span style="color:#9b59b6;font-weight:600">[防御](/powers/defense_power.md)</span>。<br/>若自身<span style="color:#9b59b6;font-weight:600">[防御](/powers/defense_power.md)</span>为正被削减至≤0，阻止该削减。

- **防御获取**：每回合开始获得 1 层[防御](/powers/defense_power.md)。
- **削减阻止**：当[防御](/powers/defense_power.md)为正值且即将被削减至 0 或以下时，完全阻止该次削减。

## 风味文字

<span style="color:#d44;font-weight:600">真龙塔克林。</span>

## 小贴士

- **每回合稳定叠防御**：回合开始获得1层防御，稳定积累。配合其他防御来源可以叠出高防御值，防御越高受到的攻击伤害越低。
- **防御不被击穿**：当防御为正且即将被削减至0或以下时，完全阻止该次削减。敌人的强力削防技能（如-5防御）打不掉你的正防御——只要防御还有1层，就不会被一次清零。
- **只防越界不防正常削减**：如果削减后仍大于0（如3层被削到1层），正常削减不阻止。只有从正变0或负的越界才触发保护，所以低防御时保护效果最明显。
- **性价比**：普通稀有度合理——稳定叠防+防击穿，防御流的核心保命件。

## 源码

- `SeerTrueDragonTaklin.cs`
