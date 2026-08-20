# 唤龙逆鳞

<img src="/images/relics/orobos_dragon_cards.png" alt="唤龙逆鳞" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 先古

### 数值参数

| 参数 | 数值 |
|---|---|
| 卡牌数量 | 5 |

## 描述

拾起时，从 Seer 卡池中筛选龙族主题卡牌，随机抽取<span style="color:#3aa675;font-weight:600">5</span>张加入牌组。

- **龙牌判定**：按卡牌**内部类名**筛选——类名包含 "Dragon" 或 "龙" 即入选，与中文名是否带"龙"字无直接关系。
- **抽取范围**：从 Seer 全卡池筛出龙牌后洗牌取前 5 张，**互不重复**，随机结果多端一致。
- **加入位置**：直接进牌组（不是抽牌堆），永久保留直到被消耗或移除。
- **无稀有度过滤**：候选含全部稀有度的龙牌，也无状态/诅咒混入（龙牌判定天然排除）。

## 风味文字

<span style="color:#d44;font-weight:600">龙族的卡牌。</span>

## 小贴士

- **5 张龙牌直接铺底**：拾起瞬间牌组进 5 张互不重复的龙牌——龙卡流的构筑起点直接完成一半，后续只需围绕这些牌补配合件；对比[拣选者手札](/relics/ancient/orobos_card_pool.md)（15 选 5 覆盖全卡池）主题更聚焦但**没有选择权**，给什么用什么。
- **龙魂任务的头号加速器**：[龙魂](/cards/quest/dragon_soul.md)要求牌组攒齐 9 张龙牌触发奖励（打包全部龙遗物）——逆鳞一次贡献 5 张，等于任务进度直接过半，再捡 4 张龙牌即可达标；注意达标结算时会**清空牌组所有龙牌**换一包龙遗物，拿逆鳞冲龙魂线时想清楚这个终局置换。
- **判定看内部类名，比中文名宽**：筛选逻辑认的是代码类名里的 "Dragon"/"龙"——[龙威](/cards/character/dragon_awe.md)、[龙烙](/cards/character/dragon_brand.md)、[龙宴](/cards/character/dragon_feast.md)、[龙王波](/cards/character/dragon_king_wave.md)、[真龙形态](/cards/character/true_dragon_form.md)、[滔天龙汲水](/cards/character/soaring_dragon_water.md)等 20+ 张都在池内；个别中文名带"龙"但类名不带的不入选，反之亦然。
- **与龙系遗物的天然联动**：[镇世·乔特鲁德](/relics/legendary/world_suppressor_jortrud.md)的格挡与攻击增伤按牌组龙牌数结算（每张龙牌 = 每回合 +1 格挡 + 攻击 +5%）——开局拿逆鳞 + 后续入手乔特鲁德，5 张底仓直接换成每回合 +7 格挡 + 攻击 +35% 的持续收益。
- **5 张随机不可控**：龙牌池里有天花板（[真龙形态](/cards/character/true_dragon_form.md)、[龙舞九天](/cards/character/dragon_dance_nine_heavens.md)）也有冷门件，全凭运气——但龙牌整体主题内聚，随便 5 张凑一起都有基础配合（龙属性计数、龙牌联动类效果共享同一判定标准）。
- **随机结果多端一致**：抽选走同步随机源，多人模式下两端抽到的 5 张完全相同。

## 源码

- `SeerOrobosDragonCards.cs`
