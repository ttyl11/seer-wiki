# 圣战福利：百分百宝石附魔机

刻进 DNA 里的记忆动了！你在路边发现一台从赛尔号巅峰圣战里流出来的宝石附魔机——最离谱的是，这台机器直接把宝石概率焊死在了 100%：没有保底陷阱，没有概率暗改，童叟无欺。只要付出对应的代价，就能稳稳拿到附魔效果。

<a href="/events/">← 返回事件图鉴</a>

<img src="/images/events/seer_gem_enchantment_machine.png" alt="圣战福利：百分百宝石附魔机" style="max-width:360px;width:100%;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**：功能事件
- **战斗**：否
- **机制**：三种价位的三档附魔服务，附魔**必定成功**，但附魔类型**随机**

## 选项一览

| 选项 | 代价 | 收益 |
|---|---|---|
| 免费单次随机附魔 | — | 为 <span style="color:#3aa675;font-weight:600">1</span> 张牌附加随机赛尔附魔 |
| 小额付费双牌附魔 | <span style="color:#d44;font-weight:600">10</span> 金币 | 为 <span style="color:#3aa675;font-weight:600">2</span> 张牌附加随机附魔 |
| 半数赛尔豆五牌拉满 | 当前 <span style="color:#d44;font-weight:600">50%</span> [赛尔豆](/mechanics/currency.md)（向下取整） | 为 <span style="color:#3aa675;font-weight:600">5</span> 张牌附加随机附魔 |

## 附魔规则

- **只能选当前没有附魔的卡**：已带附魔的卡不可再附（也不可覆盖）。
- **你选卡，机器随机贴附魔**：从 30 种赛尔专属[附魔](/mechanics/enchantment.md)中，先按"能否附在这张卡上"过滤，再随机贴一条——不会贴出完全不适配的组合，但具体是哪条不可控。
- **附魔池构成**：主体是各类异常宝石（[燃烧](/enchantments/burn_gem.md)/[冰冻](/enchantments/freeze_gem.md)/[中毒](/enchantments/poison_gem.md)/[流血](/enchantments/bleed_gem.md)/[恐惧](/enchantments/fear_gem.md)/[麻痹](/enchantments/paralysis_gem.md)/[沉默](/enchantments/silence_gem.md)/[衰弱](/enchantments/weaken_gem.md)等），外加[冷却时间](/enchantments/cooldown_time_enchantment.md)、星皇之怒、永恒辉光、五音系列等功能型附魔。
- **资格检查**：金币不足 <span style="color:#3aa675;font-weight:600">10</span>、赛尔豆除以 2 后为 0（即不足 2）、或牌组里没有未附魔的卡，对应选项会空手结束事件。

## 小贴士

- **免费单抽永远不亏**：白拿一条附魔，只要牌组里还有未附魔的卡就没有理由不选——但如果只剩一张"烂卡"没附魔，也可以考虑付费档多贴几张主力。
- **10 金 2 张（5 金/张）是性价比档**：金币要和商店卡牌/遗物、删牌服务、药水竞争，10 金换 2 条随机附魔通常比商店附魔服务便宜，中路遇到、金币宽裕时值得花。
- **半数赛尔豆是"倾家荡产"档，先想清楚豆子用来干嘛**：[赛尔豆](/mechanics/currency.md)是精英货币，[赛尔豆商店](/events/elite_shop.md)里既能抽金蛋拿[永久属性](/mechanics/permanent-bonus.md)，又能兑换遗物——掏一半豆等于直接砍掉一半的永久属性抽取次数。豆库存很高时（攒了几十上百）花一半换 5 条附魔才划算；豆子见底时这选项等于破产价。
- **附魔目标优先贴高频卡**：附魔随卡牌永久保存，优先贴在每场战斗都会反复打出的核心卡上；随机附魔虽不可控，但异常宝石类（燃烧/中毒/流血等）普遍"每次命中就生效"，贴给多段攻击或 0 费循环卡期望收益最高。
- **与其它附魔渠道对比**：[战斗专家](/events/combat_expert.md)给的是**指定**附魔的成套组合（但要吃诅咒），[罗开](/events/luokai_xiang.md)卖刻印宝石、本机器是**随机**附魔——想要特定附魔去前者，想要数量白嫖来这儿。
- **多张同附魔不叠加的常识**：同一张卡只能有一条附魔（本机器也只认未附魔的卡），想要多条效果得靠多张卡分别贴。

## 源码

- `SeerGemEnchantmentMachine.cs`
