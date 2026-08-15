# 淬灵五芒石

<img src="/images/relics/orobos_enchant_five.png" alt="淬灵五芒石" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 先古

### 数值参数

| 参数 | 数值 |
|---|---|
| 附魔数量 | 5 |

## 描述

拾起时，为牌组中至多<span style="color:#3aa675;font-weight:600">5</span>张未附魔的卡牌附加随机Seer<span style="color:#9b59b6;font-weight:600">[附魔](/mechanics/enchantment.md)</span>。

- **目标筛选**：仅处理牌组中未附魔的卡牌，从前往后逐张匹配，至多 5 张。
- **附魔池来源**：从 Seer 全部 30 种[附魔](/mechanics/enchantment.md)中按可附魔性过滤后随机分配。
- **可附魔判定**：每张卡独立判定可用附魔列表（部分附魔对卡牌类型有要求），不会附上无效附魔。

## 风味文字

<span style="color:#d44;font-weight:600">附魔五连。</span>

## 小贴士

- **5 张随机附魔是开局牌质拉满**：拾起瞬间为 5 张未附魔的卡牌各附一个 Seer 附魔，相当于免费送 5 个附魔槽。Seer 附魔池有 30 种（含[冰封宝石](/mechanics/enchantment.md)、[失明宝石](/mechanics/enchantment.md)、[臣服宝石](/mechanics/enchantment.md)、[狂暴宝石](/mechanics/enchantment.md)、[麻痹宝石](/mechanics/enchantment.md)等异常状态附魔，也有仐/册/卩等机制型附魔），覆盖面极广。
- **附魔不可控是主要折扣**：每张卡附什么全随机，可能给"打击牌"配上"睡眠宝石"这种反向组合，也可能给关键输出牌配上"狂暴宝石"起飞。质量全凭运气。
- **优先附未附魔卡**：从前往后取前 5 张未附魔的卡，所以拾起时牌组里若已有附魔卡，新卡会优先被附——已附魔的不重复附加。
- **多端随机结果一致**：随机源同步——多人模式两端看到的附魔分配完全一致。
- **性价比**：先古稀有度合理——5 个随机附魔是开局牌质大幅拉满的免费强化，价值取决于运气。

## 源码

- `SeerOrobosEnchantFive.cs`
