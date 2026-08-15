# 净世新生

<img src="/images/cards/pure_rebirth.png" alt="净世新生" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 1
- **能量消耗**: 1
- **类型**: 能力
- **稀有度**: 罕见
- **目标**: 自身
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 治疗次数 | 2 | 4 |
| 邪诲层数 | 3 | 3 |
| PP | 1 | 1 |
| 最大PP | 1 | 1 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 进入[<span style="color:#d4a017;font-weight:600">圣谕形态</span>](/powers/divine_form_power.md)。自身下<span style="color:#3aa675;font-weight:600">2</span>次恢复生命时，为所有敌人施加<span style="color:#3aa675;font-weight:600">3</span>层[<span style="color:#9b59b6;font-weight:600">邪诲</span>](/powers/evil_teaching_power.md)。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 进入[<span style="color:#d4a017;font-weight:600">圣谕形态</span>](/powers/divine_form_power.md)。自身下<span style="color:#3aa675;font-weight:600">4</span>次恢复生命时，为所有敌人施加<span style="color:#3aa675;font-weight:600">3</span>层[<span style="color:#9b59b6;font-weight:600">邪诲</span>](/powers/evil_teaching_power.md)。

## 小贴士

- **圣谕形态 + 邪诲的正循环引擎**：进入[圣谕形态](/powers/divine_form_power.md)（免疫[固定伤害](/powers/fixed_damage_power.md)和[异常状态](/mechanics/abnormal-status.md)），下 <span style="color:#3aa675;font-weight:600">2</span> 次回血时给所有敌人 <span style="color:#3aa675;font-weight:600">3</span> 层[邪诲](/powers/evil_teaching_power.md)。邪诲让敌人受到攻击时攻击者回复体力——回血触发邪诲，邪诲反过来促进攻击回血，形成正循环。
- **触发次数有限——需要主动回血配合**：<span style="color:#3aa675;font-weight:600">2</span> 次（升级 <span style="color:#3aa675;font-weight:600">4</span> 次）回血触发，用完就消失。需要配合回血卡牌/遗物/能力才能快速触发——如果只靠站着挨打，触发速度太慢，正循环转不起来。
- **圣谕形态本身攻防一体**：免疫固定伤害和异常状态是防御面；造成攻击伤害时给对手圣诰、受到攻击伤害时给攻击者邪诲是进攻面。净世新生额外注入的邪诲把进攻面进一步放大。
- **升级翻倍触发次数——收益巨大**：触发次数 <span style="color:#3aa675;font-weight:600">2</span>→<span style="color:#3aa675;font-weight:600">4</span>，每次 <span style="color:#3aa675;font-weight:600">3</span> 层邪诲——升级后共 <span style="color:#3aa675;font-weight:600">12</span> 层 vs 未升级 <span style="color:#3aa675;font-weight:600">6</span> 层，升级收益直接翻倍。
- **性价比**：<span style="color:#3aa675;font-weight:600">1</span> 费进入圣谕形态 + 邪诲正循环引擎，配合回血手段收益极高。

## 相关能力

- [圣谕形态](/powers/divine_form_power.md)：增益，免疫固定伤害和异常状态，造成攻击伤害时给对手圣诰，受到伤害时给攻击者邪诲
- [邪诲](/powers/evil_teaching_power.md)：减益，持有者受到攻击时攻击者回复体力，伤害低于阈值时减层

## 源码

- `SeerPureRebirth.cs`
