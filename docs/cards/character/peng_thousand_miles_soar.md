# 鹏·万里遨游

<img src="/images/cards/peng_thousand_miles_soar.png" alt="鹏·万里遨游" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 3
- **能量消耗**: 3
- **类型**: 攻击
- **稀有度**: 罕见
- **目标**: 敌方单体
- **可升级**: 是（1 级）
- **关键词**: [悼](/mechanics/mourning.md)

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 伤害 | 36 | 54 |
| 先制加成 | 3 | 3 |
| PP | 3 | 3 |
| 最大PP | 3 | 3 |

## 描述

PP: 3/3 造成<span style="color:#3aa675;font-weight:600">36</span>点伤害。击杀敌人则将此牌放回手中，[<span style="color:#d4a017;font-weight:600">先制</span>](/powers/first_strike_power.md)+<span style="color:#3aa675;font-weight:600">3</span>。未击杀则将一张附魔[<span style="color:#9b59b6;font-weight:600">本能</span>](/enchantments/instinct.md)的<span style="color:#d4a017;font-weight:600">鲲·千里击涛</span>放入抽牌堆顶。

## 升级后

PP: 3/3 造成<span style="color:#3aa675;font-weight:600">54</span>点伤害。击杀敌人则将此牌放回手中，[<span style="color:#d4a017;font-weight:600">先制</span>](/powers/first_strike_power.md)+<span style="color:#3aa675;font-weight:600">3</span>。未击杀则将一张附魔[<span style="color:#9b59b6;font-weight:600">本能</span>](/enchantments/instinct.md)的<span style="color:#d4a017;font-weight:600">鲲·千里击涛</span>放入抽牌堆顶。

## 小贴士

- **击杀回手牌 + 3 先制——连锁收割引擎**：击杀敌人时此牌回[手牌](/mechanics/hand.md)**底**并获得 <span style="color:#3aa675;font-weight:600">3</span> 层[先制](/powers/first_strike_power.md)——先制的实际效果是"你打出的**任意一张**牌费用 -<span style="color:#3aa675;font-weight:600">3</span>（最低 <span style="color:#3aa675;font-weight:600">0</span>），打出后先制消失"，等价于下一张牌免费/大幅减费。回手 + 免费下一张，收割残血敌人越杀越赚。
- **未击杀送本能鲲·千里击涛——保底不亏**：未击杀时全新生成一张附魔[本能](/enchantments/instinct.md)（"这张牌的攻击伤害翻倍"）的[鲲·千里击涛](/cards/character/kun_thousand_miles_wave.md)放入[抽牌堆](/mechanics/draw_pile.md)**顶**——下回合开局必抽到，36 伤翻倍成 72 伤的输出。注意鲲本身也带[悼](/mechanics/mourning.md)——打出后**再**触发一轮瓦库行动，形成"鹏→鲲→瓦库→鲲→瓦库"的连锁。
- **悼关键词——下回合瓦库代替行动**：带[悼](/mechanics/mourning.md)关键词，打出后下个回合由瓦库代替你行动——循环自动打出手中所有可打出的牌（最多 <span style="color:#3aa675;font-weight:600">99</span> 张）。关键配合：**瓦库打出的牌不消耗 PP**，等于白嫖一轮手牌。
- **升级 36→54——击杀线提升 50%**：升级后伤害从 <span style="color:#3aa675;font-weight:600">36</span> 提升至 <span style="color:#3aa675;font-weight:600">54</span>，击杀线大幅提升——更容易触发击杀回手 + 先制的连锁。
- **性价比**：<span style="color:#3aa675;font-weight:600">3</span> 费 <span style="color:#3aa675;font-weight:600">36</span>/<span style="color:#3aa675;font-weight:600">54</span> 伤，击杀回手 + 先制连锁收割，未击杀送本能鲲·千里击涛保底——两种结果都不亏。

## 源码

- `SeerPengThousandMilesSoar.cs`
