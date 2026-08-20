# 赤胆缀银枪

<img src="/images/cards/red_bold_spear.png" alt="赤胆缀银枪" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 5
- **能量消耗**: 7
- **类型**: 攻击
- **稀有度**: 罕见
- **目标**: 所有敌方
- **关键词**: [化墟](/mechanics/ruination.md)（未升级时）
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 伤害 | 7 | 7 |
| 固定伤害每增益 | 7 | 7 |
| 回复阈值 | 3 | 3 |
| 回复百分比 | 50 | 50 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 自身每有一种[<span style="color:#d4a017;font-weight:600">属性提升</span>](/mechanics/all_attributes.md)，耗能<span style="color:#3aa675;font-weight:600">-1</span>，对所有敌人造成<span style="color:#3aa675;font-weight:600">7</span>点伤害并随机附加<span style="color:#3aa675;font-weight:600">7</span>点[<span style="color:#d4a017;font-weight:600">固定伤害</span>](/powers/fixed_damage_power.md)。打出时耗能<<span style="color:#3aa675;font-weight:600">3</span>，恢复已损失生命<span style="color:#3aa675;font-weight:600">50</span>%。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 自身每有一种[<span style="color:#d4a017;font-weight:600">属性提升</span>](/mechanics/all_attributes.md)，耗能<span style="color:#3aa675;font-weight:600">-1</span>，对所有敌人造成<span style="color:#3aa675;font-weight:600">7</span>点伤害并随机附加<span style="color:#3aa675;font-weight:600">7</span>点[<span style="color:#d4a017;font-weight:600">固定伤害</span>](/powers/fixed_damage_power.md)。打出时耗能<<span style="color:#3aa675;font-weight:600">3</span>，恢复已损失生命<span style="color:#3aa675;font-weight:600">50</span>%。（升级后移除[<span style="color:#d4a017;font-weight:600">化墟</span>](/mechanics/ruination.md)副作用）

## 小贴士

- **7 费但属性减费——四种属性全有时降至 3 费**：自身每有一种[属性提升](/mechanics/all_attributes.md)（[力量](/powers/strength_power.md)、[防御](/powers/defense_power.md)、[命中](/powers/accuracy_power.md)、[速度](/powers/speed_power.md)且层数 > <span style="color:#3aa675;font-weight:600">0</span>），耗能 <span style="color:#3aa675;font-weight:600">-1</span>。基础 <span style="color:#3aa675;font-weight:600">7</span> 费，四种全有时降至 <span style="color:#3aa675;font-weight:600">3</span> 费——需要提前叠加属性才能打出。
- **全体 7 伤 + 固定伤害——属性越多伤害越高**：对所有敌人造成 <span style="color:#3aa675;font-weight:600">7</span> 点攻击伤害，同时施加 <span style="color:#3aa675;font-weight:600">7</span> × 属性种类数层[固定伤害](/powers/fixed_damage_power.md)（描述中的"随机附加"为文案措辞，实际数值固定——没有任何属性提升时**完全不施加**固定伤害）。四种属性全有时，每个敌人吃 <span style="color:#3aa675;font-weight:600">7</span> 伤 + <span style="color:#3aa675;font-weight:600">28</span> 层固定伤害——群体核弹级输出。
- **核心矛盾：回血阈值 < 3，但属性减费最多到 3**：实际耗能 < <span style="color:#3aa675;font-weight:600">3</span> 时恢复已损失生命的 <span style="color:#3aa675;font-weight:600">50</span>%。但四种属性最多减到 <span style="color:#3aa675;font-weight:600">3</span> 费，刚好卡在阈值临界点——需要配合其它减费手段才能触发回血。这是这张牌最精妙的设计：属性减费和回血条件互相拉扯。
- **化墟副作用——未升级时塞状态牌**：未升级时带[化墟](/mechanics/ruination.md)关键词，打出时往[弃牌堆](/mechanics/discard_pile.md)加一张随机状态牌。升级后移除化墟，无副作用。
- **升级只移除化墟——数值不变**：升级后伤害/固定伤害/回血条件都不变，只移除化墟副作用。
- **性价比**：<span style="color:#3aa675;font-weight:600">7</span> 费换全体 <span style="color:#3aa675;font-weight:600">7</span> 伤 + 固定伤害 + 条件回血，属性减费后实际费用大降；升级移除化墟副作用。

## 相关机制

- [属性提升（全属性）](/mechanics/all_attributes.md)：力量、防御、命中、速度四种能力
- [固定伤害](/powers/fixed_damage_power.md)：根据属性种类数附加
- [化墟](/mechanics/ruination.md)：未升级时携带的 mod 关键词

## 源码

- `SeerRedBoldSpear.cs`
