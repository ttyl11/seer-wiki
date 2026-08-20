# 负伤的丛林霸主

幽暗密林深处，你撞见一只浑身浴血的猛虎王——它刚和大暗黑天的追兵血战一场，此刻重伤瘫倒在地，唯有一双虎目还带着不肯屈服的凶光。

<a href="/events/">← 返回事件图鉴</a>

<img src="/images/events/seer_wounded_jungle_overlord.png" alt="负伤的丛林霸主" style="max-width:360px;width:100%;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**：剧情抉择事件
- **战斗**：否

## 选项一览

| 选项 | 代价 | 收益 |
|---|---|---|
| 趁虚而入，发起攻击 | 失去等同于**牌组张数**的生命（不可格挡） | 选择 <span style="color:#3aa675;font-weight:600">2</span> 张牌升级 |
| 出手相助，为其疗伤 | — | 获得[狩·无限连爪](/cards/character/infinite_claw.md) |
| 孤身追敌，截杀大暗黑天 | 永久失去 <span style="color:#d44;font-weight:600">5</span> 点最大生命 | 获得[王·联盟审判](/cards/character/king_alliance_judgment.md)，生命回满 |

## 小贴士

- **攻击选项的代价按"牌组张数"算，本 mod 慎选**：生命损失直接等同于局外牌组的卡牌总数，且是不可格挡的直接扣血（格挡完全无效）。本 mod 鼓励 60 张的大牌组构筑（如[正义大裁决](/cards/character/justice_judgment.md)按牌组数降费），60 张牌组选这项就是**白扣 60 血**；血量低于牌组张数时会直接死亡。只有 30 张上下的小牌组、且当前血量充裕时，"30 血换 2 次升级"才勉强算笔交易。
- **先扣血、后升级**：选项先结算生命损失，再进入升级选牌界面——血量撑不住就没有后悔药，选之前先看一眼牌组张数和当前血线。
- **疗伤是唯一的零代价选项**：白拿稀有攻击[狩·无限连爪](/cards/character/infinite_claw.md)（X 费，对随机敌人 7×X 次 1 点伤害，PP 5/5）。多段随机弹射配合[力量](/powers/strength_power.md)/[易伤](/powers/vulnerable_power.md)收益成倍放大；短板是单次仅 1 伤，敌人有格挡时会被一点一点吞掉。不确定选什么时就选它，永远不会亏。
- **追敌线 = 5 点上限换"回满血 + Boss 核弹"**：[王·联盟审判](/cards/character/king_alliance_judgment.md)是 5 费 35 伤的稀有攻击，Boss 房伤害翻倍（70），还附带[麻痹](/powers/ma_power.md)+[害怕](/powers/fear_power.md)双压制与"下次受伤减半/下次输出翻倍"。真正的即期价值在**生命回满**——刚打完硬仗、血线见底时，5 点最大生命换满血是三选一里最赚的急救；满血时选它则纯属亏 5 点上限攒一张卡。
- **决策树**：残血 → 孤身追敌（回满血＋拿强卡）；小牌组＋血量充裕＋急需升级 → 趁虚而入；其余情况 → 疗伤白拿稀有卡。
- **剧情梗**：疗伤用的"雷诺的急救包"对应原版药水[雷诺的急救](/potions/reno_first_aid_potion.md)的赛尔号梗，追敌线则是战神联盟驰援的经典桥段。

## 源码

- `SeerWoundedJungleOverlord.cs`
