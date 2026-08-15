# 妙时天女

<img src="/images/relics/maiden_of_wondrous_time.png" alt="妙时天女" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 史诗（自定义稀有度）

### 数值参数

| 参数 | 数值 |
|---|---|
| HundredDayTurns（百天浮世络持续回合） | 3 |
| BodhiTurns（怀生菩怜态持续回合） | 9 |
| WrathTurns（拒赦怒威态持续回合） | 9 |
| HpThreshold（体力阈值百分比） | 54 |
| DrawCount（抽牌数量） | 1 |
| HealAmount（恢复生命） | 1 |

## 描述

登场时进入 <span style="color:#3aa675;font-weight:600">3</span> 回合<span style="color:#9b59b6;font-weight:600">[百天浮世络](/powers/hundred_day_floating_world_power.md)</span>。<span style="color:#9b59b6;font-weight:600">[百天浮世络](/powers/hundred_day_floating_world_power.md)</span>消失后，若自身当前体力大于 <span style="color:#3aa675;font-weight:600">54</span>%，自身进入<span style="color:#9b59b6;font-weight:600">[怀生菩怜态](/powers/compassionate_bodhi_power.md)</span> <span style="color:#3aa675;font-weight:600">9</span> 回合；若期间自身当前体力小于 <span style="color:#3aa675;font-weight:600">54</span>%，自身进入<span style="color:#9b59b6;font-weight:600">[拒赦怒威态](/powers/wrathful_judgment_power.md)</span> <span style="color:#3aa675;font-weight:600">9</span> 回合。每次进入或退出任一种三态时，抽 <span style="color:#3aa675;font-weight:600">1</span> 张牌，选择弃 1 张牌，恢复 <span style="color:#3aa675;font-weight:600">1</span> 点生命。

- **三态流程**：第 1 回合开始进入 <span style="color:#3aa675;font-weight:600">3</span> 回合[百天浮世络](/powers/hundred_day_floating_world_power.md)；其消失后按体力分流转入[怀生菩怜态](/powers/compassionate_bodhi_power.md)或[拒赦怒威态](/powers/wrathful_judgment_power.md)。
- **体力阈值**：以当前生命占最大生命的百分比与 <span style="color:#3aa675;font-weight:600">54</span>% 比较。百天后大于阈值进怀生菩怜态；怀生期间受击后低于阈值切换为拒赦怒威态。
- **状态转换效果**：每次进入或退出任一三态时触发：抽 <span style="color:#3aa675;font-weight:600">1</span> 张牌、可弃 0~1 张牌（可取消）、回复 <span style="color:#3aa675;font-weight:600">1</span> 点生命。
- **⚠️ 本地化与源码不一致**：本地化描述为"选择弃 1 张牌"，实际为可选择弃 0~1 张牌且允许取消。实际效果以实际效果为准。

## 风味文字

<span style="color:#d44;font-weight:600">妙时天女。</span>

## 小贴士

- **三态自动流转，攻防智能切换**：登场 3 回合[百天浮世络](/powers/hundred_day_floating_world_power.md)（免疫并反弹异常）→按体力分流→9 回合[怀生菩怜态](/powers/compassionate_bodhi_power.md)（高血量，控制）或[拒赦怒威态](/powers/wrathful_judgment_power.md)（低血量，输出）。遗物根据血量自动切换攻防模式，整场战斗都有一层"状态底薪"。
- **百天浮世络的 3 回合 = 3 个敌方回合**：免疫反弹的生效窗口是敌方出手的时候——敌人第 1、2、3 回合施加的异常状态与力量/防御/命中/速度下降全部无效并原样弹回。你自己的回合它不衰减，所以第 3 个敌方回合结束后才精确到期。
- **反弹是弹给全场敌人**：不是只弹给施加者——拦截到的异常/属性下降会施加给所有存活敌人。面对多怪群攻异常（群体上中毒、群体衰弱）时一次能弹满全场，收益翻倍。
- **转态无缝衔接**：百天浮世络到期消失的同一瞬间，遗物立刻施加下一个状态——你的下个回合直接享受怀生菩怜态/拒赦怒威态效果，中间没有"裸奔回合"。状态转换发生在对方回合结束时，不会打断你的出牌节奏。
- **怀生菩怜态是控制态**：高血量（>54%）时进入，变光系，打出牌后随机对敌人施加 1 种异常状态。适合安全时打控制，配合多打牌可频繁上异常。
- **拒赦怒威态是输出态**：低血量（≤54%）时进入，变混沌系，[先制](/powers/first_strike_power.md)+1，攻击伤害 +30%。适合残血时速杀——被打残了就自动转输出模式。
- **血量 54% 是分水岭，也是唯一可控的旋钮**：百天结束时 >54% 进怀生菩怜态（控制），≤54% 进拒赦怒威态（输出）。这个数字看着奇怪（不是整数），实际是围绕百天期掉血幅度设计的——满血进战斗，挨 3 回合打后大概率还在线上方；刻意卖血则能主动"点单"拒赦怒威态的 +30% 伤害。
- **转态只往一个方向流，拒赦是终点**：百天→怀生→拒赦可以，但拒赦怒威态 9 回合结束后不会再回到百天浮世络——之后的战斗就"裸奔"了（只剩转换瞬间的抽弃回）。它不是循环引擎，是一场战斗前中期的节奏器。
- **每次状态转换抽弃回**：进入或退出任一三态时抽 1 张牌、可弃 0~1 张牌（可取消）、回 1 点生命。完整流转一次（进入百天→退出百天→进入怀生→退出怀生）就有 4 次触发 = 4 张牌 + 4 点生命；中途被切到拒赦再算 2 次。转换发生在对方回合结束时，抽到的牌在你下回合直接可用。
- **注意属性被清除**：怀生菩怜态和拒赦怒威态回合开始时清除现有元素属性，分别变光系/混沌系。如果你之前叠了其他元素属性，进入新态时会被清除——与元素流卡组有冲突。

## 源码

- `SeerMaidenOfWondrousTime.cs`
