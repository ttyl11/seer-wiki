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

- **圣谕形态 + 邪诲的正循环引擎**：进入[圣谕形态](/powers/divine_form_power.md)（免疫[固定伤害](/powers/fixed_damage_power.md)和[异常状态](/mechanics/abnormal-status.md)），下 <span style="color:#3aa675;font-weight:600">2</span> 次回血时给所有敌人 <span style="color:#3aa675;font-weight:600">3</span> 层[邪诲](/powers/evil_teaching_power.md)。邪诲让敌人**每次受到你造成的伤害时，你回复该次伤害 <span style="color:#3aa675;font-weight:600">20</span>% 的体力**——回血触发邪诲注入，攻击又借邪诲回血，形成正循环。若当前已处于[邪魇形态](/powers/evil_form_power.md)，打出这张牌会直接切换为圣谕形态，且**切换时额外获得 <span style="color:#3aa675;font-weight:600">1</span> 层[先制](/powers/first_strike_power.md)**（形态转换自带，白赚一层降耗资源）。
- **任何回血都触发**：回血判定监听的是生命值上升（delta > <span style="color:#3aa675;font-weight:600">0</span>）——吸血、药水、遗物、技能回血都算一次触发，不限于主动治疗。每次触发后剩余次数 -<span style="color:#3aa675;font-weight:600">1</span>，归零自动消失。
- **触发次数有限——需要主动回血配合**：<span style="color:#3aa675;font-weight:600">2</span> 次（升级 <span style="color:#3aa675;font-weight:600">4</span> 次）回血触发，用完就消失。需要配合回血卡牌/遗物/能力才能快速触发——如果只靠站着挨打，触发速度太慢，正循环转不起来。
- **圣谕形态本身攻防一体**：免疫固定伤害和异常状态是防御面——**施加瞬间直接归零**：敌人再也无法给你上新[固定伤害](/powers/fixed_damage_power.md)或新[异常状态](/mechanics/abnormal-status.md)（已有的异常照常结算，所以越早开形态越干净）；造成攻击伤害时给对手 <span style="color:#3aa675;font-weight:600">1</span> 层[圣诰](/powers/holy_edict_power.md)、受到**任意来源**敌方伤害（攻击/固定伤害均算）时给伤害来源 <span style="color:#3aa675;font-weight:600">1</span> 层邪诲是进攻面。净世新生额外注入的邪诲把进攻面进一步放大。
- **邪诲会自我消耗**：敌人每次受到的伤害**低于邪诲层数 × <span style="color:#3aa675;font-weight:600">50</span>%** 时，邪诲 -<span style="color:#3aa675;font-weight:600">1</span> 层——小刀刮痧反而会磨掉邪诲，用大额伤害打才能维持住层数。
- **升级翻倍触发次数——收益巨大**：触发次数 <span style="color:#3aa675;font-weight:600">2</span>→<span style="color:#3aa675;font-weight:600">4</span>，每次 <span style="color:#3aa675;font-weight:600">3</span> 层邪诲——升级后共 <span style="color:#3aa675;font-weight:600">12</span> 层 vs 未升级 <span style="color:#3aa675;font-weight:600">6</span> 层，升级收益直接翻倍。
- **性价比**：<span style="color:#3aa675;font-weight:600">1</span> 费进入圣谕形态 + 邪诲正循环引擎，配合回血手段收益极高。

## 相关能力

- [圣谕形态](/powers/divine_form_power.md)：增益，免疫固定伤害和异常状态的施加，造成攻击伤害时给对手圣诰，受到任意敌方伤害时给伤害来源邪诲
- [邪诲](/powers/evil_teaching_power.md)：减益，持有者受到敌方伤害时，攻击者回复该次伤害 20% 的体力；单次伤害低于层数 × 50% 时层数 -1

## 源码

- `SeerPureRebirth.cs`
