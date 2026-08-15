# 琉梦

<img src="/images/relics/liu_meng.png" alt="琉梦" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 史诗（自定义稀有度）

### 数值参数

| 参数 | 数值 |
|---|---|
| HealPercent（已损失生命回复百分比） | 20 |
| DamageReduction（克制时受到攻击伤害减免百分比） | 50 |

## 描述

在每场战斗开始时，获得1层<span style="color:#9b59b6;font-weight:600">[希望之花](/powers/flower_of_hope_power.md)</span>和等同于敌人数量+1层的<span style="color:#9b59b6;font-weight:600">[危机感](/powers/sense_of_crisis_power.md)</span>，首回合免疫<span style="color:#d44;font-weight:600">[异常状态](/mechanics/abnormal-status.md)</span>，回复<span style="color:#3aa675;font-weight:600">20</span>%的已损失生命。

在你的回合开始时，若自身[属性克制](/mechanics/element-affinity.md)任意敌人，所有<span style="color:#d4a017;font-weight:600">[PP牌](/mechanics/pp-system.md)</span>恢复1点<span style="color:#d4a017;font-weight:600">[PP](/mechanics/pp-system.md)</span>，获得1层<span style="color:#d4a017;font-weight:600">[先制](/powers/first_strike_power.md)</span>；若任意敌人属性克制自身，受到的攻击伤害减少<span style="color:#3aa675;font-weight:600">50</span>%。

- **开局施加**：战斗开始时获得 1 层[希望之花](/powers/flower_of_hope_power.md)；[危机感](/powers/sense_of_crisis_power.md)层数 = 存活敌人数 + 1（无敌人时为 1 层）。
- **首回合免疫**：第 1 回合免疫所有可见[异常状态](/mechanics/abnormal-status.md)，第 2 回合起失效。
- **首回合回复**：第 1 回合开始时回复已损失生命的 <span style="color:#3aa675;font-weight:600">20</span>%。
- **克制奖励**：每回合开始时若自身[属性克制](/mechanics/element-affinity.md)任一敌人，所有 PP 牌恢复 1 点 PP（不超过上限）并获得 1 层[先制](/powers/first_strike_power.md)。
- **被克减免**：若任一敌人属性克制自身，该回合受到的攻击伤害减少 <span style="color:#3aa675;font-weight:600">50</span>%。

## 风味文字

<span style="color:#d44;font-weight:600">希望之花。</span>

## 小贴士

- **首回合双重保障**：第 1 回合同时免疫所有可见异常状态（中毒、诅咒、寄生等）并回复 20% 已损失生命。开局安全感拉满，尤其克制开局就上异常的敌人——前几回合不用担心异常干扰，可以放心铺场。
- **危机感随敌人数量成长**：危机感层数 = 存活敌人数 + 1，作为[希望之花](/powers/flower_of_hope_power.md)的成长系数。多敌人战斗（如精英战、Boss+小怪）时希望之花成长更快，群战收益更高。
- **克制奖励攻防一体**：自身属性克制任一敌人时，所有 PP 牌恢复 1 点 PP 并获得 1 层[先制](/powers/first_strike_power.md)（下一张牌耗能 -1）。先制配合高耗能牌收益最大——把先制留给最贵的牌，相当于免费打出。
- **被克减伤 50% 仅限攻击伤害**：任一敌人属性克制自身时，该回合受到的攻击伤害减半。注意仅减免攻击伤害，非攻击伤害（如遗物、能力的直接伤害）不受影响。
- **克制与被克可同时触发**：面对多个不同属性敌人时，可能既触发克制奖励（PP + 先制）又触发被克减免（减伤），两者独立判定。例如敌人 A 被你克制、敌人 B 克制你，则两个效果同时生效。
- **免疫仅限首回合**：第 2 回合起不再免疫异常状态，需要尽快解决会上异常的敌人，或准备其他防护手段（如"空元·镀"等免疫能力）。
- **属性克制是核心**：克制/被克判定基于元素属性倍率。了解[属性克制](/mechanics/element-affinity.md)表、配合能改变自身元素属性的手段，能更稳定地触发克制奖励、避免被克减免。

## 源码

- `SeerLiuMeng.cs`
