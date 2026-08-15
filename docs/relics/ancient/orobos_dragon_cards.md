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

- **龙牌判定**：按 Seer 卡牌的内部命名约定筛选，凡内部名带龙族标记（中英文都算）的卡牌均纳入候选。
- **抽取范围**：从 Seer 全卡池中筛龙牌后随机排序取前 5 张，随机结果多端一致。
- **加入位置**：直接进牌组（不是抽牌堆），永久保留至牌组被消耗或移除。

## 风味文字

<span style="color:#d44;font-weight:600">龙族的卡牌。</span>

## 小贴士

- **5 张龙牌一次性补齐**：拾起瞬间直接给牌组加 5 张龙牌，比[拣选者手札](/relics/ancient/orobos_card_pool.md)（15 选 5+，覆盖全卡池）更聚焦龙族主题，但无法挑选——给什么是什么。
- **按内部命名筛选而非本地化名筛选**：判定逻辑看的是 Seer 卡牌的内部命名约定，不是中文名是否含"龙"字。所以中文名带"龙"但不属于内部龙族标记的卡不入选，反之也有中文名不带"龙"但内部标记为龙族的卡入选——候选范围比表面更宽。
- **直接触发龙魂任务卡奖励线**：[龙魂](/cards/quest/dragon_soul.md)任务卡要求牌组中龙牌达到一定数量才结算奖励，这 5 张直接为龙魂卡牌加速；配合[龙王波](/cards/character/dragon_king_wave.md)（场上每个龙属性生物让伤害 ×2）也能在战斗中把龙属性生物铺出来。
- **5 张随机不可控**：龙牌池里有强度天花板（[真龙形态](/cards/character/true_dragon_form.md)、[龙舞九天](/cards/character/dragon_dance_nine_heavens.md)）也有冷门卡（[龙舞·祭](/cards/character/dragon_martial_sacrifice.md)），全凭运气。
- **性价比**：先古稀有度合理——5 张主题卡的固定补足是龙族牌组的核心启动器。

## 源码

- `SeerOrobosDragonCards.cs`
