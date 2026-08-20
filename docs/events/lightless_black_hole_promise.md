# 无光黑洞的长老许诺

机缘巧合之下，你闯入大暗黑天的老巢无光黑洞。人去楼空的洞中唯有风殇影翼·飞镰独自修行——它正试图掌控泰坦之锤，却被狂暴的力量反噬压制，只能向你发出微弱的求救，并许诺事成之后封你为大暗黑天的常长老。

<a href="/events/">← 返回事件图鉴</a>

<img src="/images/events/seer_lightless_black_hole_promise.png" alt="无光黑洞的长老许诺" style="max-width:360px;width:100%;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**：剧情抉择事件
- **战斗**：否

## 选项一览

| 选项 | 代价 | 收益 |
|---|---|---|
| 全然不信，趁人之危 | — | <span style="color:#3aa675;font-weight:600">150</span> 金币 + [风殇影翼·飞镰](/relics/rare/flying_scythe.md)（已拥有飞镰则改为随机 1 件未拥有的赛尔罕见遗物） |
| 选择信任，出手相救 | 移除 <span style="color:#3aa675;font-weight:600">1</span> 张牌 | 从 <span style="color:#3aa675;font-weight:600">8</span> 件大暗黑天专属遗物中随机获得 <span style="color:#3aa675;font-weight:600">1</span> 件未拥有的 |

## 大暗黑天专属遗物池（信任线）

| 遗物 | 效果概要 |
|---|---|
| [艾夏拉](/relics/rare/constancy.md) | 敌方回合开始消除其全属性强化，消除成功令其睡眠 2 回合 |
| [混沌天蛇太祖](/relics/rare/chaotic_snake.md) | 受击按伤害分支恢复 PP/给缓冲，打牌 20% 概率令对手睡眠 |
| [幽冥帝尊·修罗](/relics/rare/nether_emperor.md) | 血线高于 70% 得先制、低于则全暴击；击杀敌人连锁伤害回血 |
| [终末之灭·天邪龙王](/relics/rare/dragon_of_doom.md) | 按双方生命对比走进攻/防守分支 |
| [厉魇魔王·咤克斯](/relics/rare/demon_king.md) | 战斗开始增伤/减伤各 5%，每胜场各 +2%，附带低概率秒杀 |
| [邪冥·兽皇](/relics/rare/evil_beast_emperor.md) | 敌方回合开始时每个敌人意图 25% 概率被无效化 |
| [万古邪皇·威斯克](/relics/rare/ancient_evil_emperor.md) | 打技能牌随机诅咒、打攻击牌附固定伤害 |
| [风殇影翼·飞镰](/relics/rare/flying_scythe.md) | 回合开始全敌力量/命中 -1，按承伤切换无实体/先制 |

## 小贴士

- **不信线是"金币 + 确定遗物"的稳定收益**：<span style="color:#3aa675;font-weight:600">150</span> 金币外加[风殇影翼·飞镰](/relics/rare/flying_scythe.md)——每回合开始全体敌人[力量](/powers/strength_power.md)/[命中](/powers/accuracy_power.md) -1 的滚雪球削弱，还会按上回合承伤自动切换[无实体](/powers/intangible_power.md)（破防伤害>40 时）或[先制](/powers/first_strike_power.md)。金币与稀有遗物双收，泛用首选。
- **飞镰重复不浪费**：已拥有飞镰时，遗物位自动改为随机 1 件未拥有的赛尔**罕见级**遗物（事件文案写作"稀有"，实际抽取池为罕见 Uncommon 级）——不会出现"抽到重复"的空奖励，两条线都不会白跑。
- **信任线是"删牌 + 定向池抽奖"**：8 件大暗黑天专属遗物里随机给 1 件未拥有的。池子整体质量高于普通随机稀有池（每件都有成体系的战斗效果），但具体抽到哪件不可控——想要某件特定遗物的话，这里给不了保证。
- **信任线附带的 1 次删牌自带价值**：本 mod 删牌渠道稀缺，大牌组跑法里"指定移除 1 张"本身就能清掉一张诅咒或废牌；配合池子抽奖，信任线的期望收益并不比 150 金 + 飞镰低。
- **决策思路**：要稳定兑现（金币 + 确定的强力遗物）选不信；需要清污删牌、或想要更高上限的遗物抽奖选信任。已集齐全部 8 件大暗黑天遗物时（极罕见），信任线只剩删牌，此时选不信更值。
- **剧情对应**：信任线结局"成为大暗黑天常长老"对应赛尔号剧情中飞镰的阵营线；两条线都没有后续战斗，拿完奖励直接走人。

## 源码

- `SeerLightlessBlackHolePromise.cs`
