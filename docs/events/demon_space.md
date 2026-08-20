# 伏魔空间

推开沉重的石门，一片广阔的竞技场——空气中弥漫着杀意与低吼。这里是魔之尊者伊扎克的领域：场中三道巨影（梦魔、血魔、龙魔），更深处还有一尊更加庞大的魔影。

> ⚠️ 事件文本中的"梦魔、血魔、龙魔"为称号，实际遭遇战怪物为[狄修斯](/monsters/normal/dixius_monster.md)、[泰沃斯](/monsters/normal/taiwosi_monster.md)、[加布](/monsters/normal/jiabu_monster.md)。

<a href="/events/">← 返回事件图鉴</a>

<img src="/images/events/seer_demon_space.png" alt="伏魔空间" style="max-width:360px;width:100%;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**：剧情抉择事件
- **战斗**：是（可选）

## 选项一览

| 选项 | 代价 | 收益 |
|---|---|---|
| 挑战伏魔三巨头 | 一场高难度战斗（[狄修斯](/monsters/normal/dixius_monster.md)/[泰沃斯](/monsters/normal/taiwosi_monster.md)/[加布](/monsters/normal/jiabu_monster.md)） | 随机[史诗](/mechanics/custom-rarity.md)遗物 |
| 直接挑战魔尊伊扎克 | 一场极高难度战斗 | 随机[传说](/mechanics/custom-rarity.md)遗物 |
| 仓皇逃离 | 失去等同于 <span style="color:#d44;font-weight:600">50%</span> 最大生命数值的生命 | 指定移除最多 <span style="color:#3aa675;font-weight:600">3</span> 张牌 |

## 小贴士

- **风险与回报直接挂钩**：三巨头 → 史诗遗物；魔尊伊扎克 → 传说遗物。伊扎克战的强度显著更高，传说遗物也对应本 mod 遗物体系的最高[自定义稀有度](/mechanics/custom-rarity.md)——战力成型后再来挑战，收益最稳。
- **战斗失败即游戏结束**：事件战斗战败会直接结束跑局，请确保血量和牌组状态健康再开战；打得过三巨头但打不过伊扎克时，果断选低难度拿史诗保底。
- **逃跑是"卖血换删牌"**：失去的血量按**最大生命的 50% 数值**计算（不是当前生命，向下取整），例如 <span style="color:#3aa675;font-weight:600">80</span> 上限就固定掉 <span style="color:#d44;font-weight:600">40</span> 点、<span style="color:#3aa675;font-weight:600">75</span> 上限掉 <span style="color:#d44;font-weight:600">37</span> 点。该损失**不可被格挡**（当前格挡挡不住它），也吃不到增伤/减伤加成——残血时这笔伤害可能直接致死（先扣血再删牌，人没了删牌也就没意义了），满血时则是一笔不错的删牌交易。
- **删牌选项的隐藏价值**：本 mod 鼓励大牌组，但诅咒/状态牌污染牌组时，这里的一次性 <span style="color:#3aa675;font-weight:600">3</span> 张指定移除是珍贵的清污窗口；如果被[咤克斯的诅咒](/relics/event/zhakes_curse_relic.md)每场塞诅咒，逃跑反而可能是最优解。
- **量力而行的决策树**：血量 >70% 且牌组能速攻 → 挑战伊扎克；血量中等 → 三巨头；血量危险或牌组急需精简 → 逃离删牌。

## 源码

- `SeerDemonSpace.cs`
