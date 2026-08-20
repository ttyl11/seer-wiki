# 战斗专家

雷蒙教官对着一面墙自言自语，猛然转头用锐利的目光扫视你，咧嘴一笑露出几颗金牙："小赛尔！我看你骨骼惊奇，但打法还是太嫩。要不要学学我的绝活？"

<a href="/events/">← 返回事件图鉴</a>

<img src="/images/events/seer_combat_expert.png" alt="战斗专家" style="max-width:360px;width:100%;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**：功能事件
- **战斗**：否
- **机制**：四套"流派套餐"四选一，每套 = 1 张专属诅咒牌 + 若干带指定附魔的卡牌

## 流派一览

| 流派 | 额外代价 | 获得内容 |
|---|---|---|
| 开龟 | 移除最多 <span style="color:#3aa675;font-weight:600">2</span> 张牌 | [开龟](/cards/curse/turtle.md) + 带[注能](/enchantments/imbued.md)的"余象"、"势不可当" |
| 拖50 | 移除最多 <span style="color:#3aa675;font-weight:600">3</span> 张牌 | [拖50](/cards/curse/drag_burden.md) + 带[灵魂之力](/enchantments/souls_power.md)的"巨镰"、"遗传算法" |
| 云玩家 | 移除最多 <span style="color:#3aa675;font-weight:600">1</span> 张牌 | [云玩家](/cards/curse/cloud_gamer.md) + 带[冷却时间](/enchantments/cooldown_time_enchantment.md)的"禁忌魔典"、"灵体" |
| 保底 | **复制整个牌组 <span style="color:#3aa675;font-weight:600">2</span> 次** | [保底](/cards/curse/guaranteed.md) + <span style="color:#3aa675;font-weight:600">2</span> 张带[华彩](/enchantments/glam.md)的"心灵震慑" |

## 小贴士

- **四套套餐都是"诅咒 + 附魔牌"的组合拳**：流派专属牌本身是诅咒（有负面效果），但配套送的两张牌都带强力附魔——接受诅咒才能白嫖附魔牌，是典型的风险换成长。
- **开龟：防御反击流**：[注能](/enchantments/imbued.md)强化的"余象""势不可当"都是防御端名牌，[开龟](/cards/curse/turtle.md)诅咒的代价相对温和，外加 <span style="color:#3aa675;font-weight:600">2</span> 张删牌额度——四套里最稳、泛用性最高。
- **拖50：消耗拖延流**：[拖50](/cards/curse/drag_burden.md)的负面与"拖长战斗"的玩法自洽（本来就打算拖），[灵魂之力](/enchantments/souls_power.md)的"巨镰""遗传算法"在长战斗里滚雪球。删牌额度最多（<span style="color:#3aa675;font-weight:600">3</span> 张）。
- **云玩家：节奏特化流**：[冷却时间](/enchantments/cooldown_time_enchantment.md)附魔的"禁忌魔典""灵体"提供独特的打牌节奏，适合能驾驭复杂循环的玩家；[云玩家](/cards/curse/cloud_gamer.md)诅咒对操作型牌组影响需事先评估。
- **保底：数学题选项，慎选**：**整副牌组复制 2 次**（40 张变 120 张）——[保底](/cards/curse/guaranteed.md)与[华彩](/enchantments/glam.md)心灵震慑的收益随牌组数量放大，但牌组膨胀三倍意味着核心牌抽到率暴跌到 1/3，没有强力抽牌引擎就是自断经脉。量变引起质变的前提是"质"能被抽到。
- **决策树**：通用首选开龟（最稳）；已有拖延/消耗体系 → 拖50；追求构筑花样 → 云玩家；抽牌引擎成型且理解风险 → 保底。

## 源码

- `SeerCombatExpert.cs`
