# 属性内卷的路边争论

一群低等精灵围着"万能属性添加机"疯狂内卷属性数量——"双属性才是潮流！""三属性才是版本答案！""堆 100 个才是最厉害的！"

<a href="/events/">← 返回事件图鉴</a>

<img src="/images/events/seer_attribute_inflation.png" alt="属性内卷的路边争论" style="max-width:360px;width:100%;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**：剧情抉择事件
- **战斗**：否
- **机制**：三个"添加属性"选项都会获得（或叠加）[属性加成](/relics/event/attribute_bonus_relic.md)遗物，效果持续整局

## 选项一览

| 选项 | 代价 | 收益 |
|---|---|---|
| 全都打一顿，当场抢劫 | 受到 <span style="color:#d44;font-weight:600">25</span> 点伤害 | <span style="color:#3aa675;font-weight:600">300</span> 金币 |
| 免费试用，添加 2 个属性 | — | [属性加成](/relics/event/attribute_bonus_relic.md)：每场战斗开始时额外获得 <span style="color:#3aa675;font-weight:600">2</span> 个随机[元素属性](/mechanics/element-affinity.md)，战后 <span style="color:#3aa675;font-weight:600">+2</span> 金币 |
| 小额付费，添加 3 个属性 | <span style="color:#3aa675;font-weight:600">500</span> 万[赛尔豆](/mechanics/currency.md) | 每场战斗开始时额外获得 <span style="color:#3aa675;font-weight:600">3</span> 个随机元素属性，战后 <span style="color:#3aa675;font-weight:600">+3</span> 金币 |
| 全额梭哈，添加 6 个属性 | <span style="color:#3aa675;font-weight:600">5</span> [泰坦之灵](/mechanics/currency.md) | 每场战斗开始时额外获得 <span style="color:#3aa675;font-weight:600">6</span> 个随机元素属性，战后 <span style="color:#3aa675;font-weight:600">+6</span> 金币 |

## 小贴士

- **属性即克制倍率**：[元素属性](/mechanics/element-affinity.md)决定攻击的克制关系——克制 ×<span style="color:#3aa675;font-weight:600">1.5</span>、被克 ×<span style="color:#3aa675;font-weight:600">0.75</span>。每场战斗白送 2~6 个随机属性，意味着你的攻击有更大概率吃到克制加成；属性越多，平均期望倍率越向 <span style="color:#3aa675;font-weight:600">1.0</span> 以上靠拢。
- **免费试用是白给的**：零代价拿 2 属性 + 每场战后 <span style="color:#3aa675;font-weight:600">2</span> 金币的"低保"。一局打 <span style="color:#3aa675;font-weight:600">20</span> 场战斗就是 <span style="color:#3aa675;font-weight:600">40</span> 金币的细水长流，怎么说都不亏。
- **付费档看货币存量**：<span style="color:#3aa675;font-weight:600">500</span> 万赛尔豆换 3 层、<span style="color:#3aa675;font-weight:600">5</span> 泰坦之灵换 6 层。泰坦之灵是稀缺货币（[泰坦之灵商店](/events/boss_shop.md)的抽卡资金），除非属性流派成型否则别梭哈；赛尔豆在中后期通常花不完，3 层档的性价比更平滑。
- **属性流派的核心供应商**：围绕元素克制构筑（多属性、频繁变属性）的牌组，6 层属性每场稳定提供大量克制机会，是把这套体系从"随缘"变成"稳定触发"的关键投资。
- **抢劫是反味选项**：<span style="color:#d44;font-weight:600">25</span> 点直接伤害换 <span style="color:#3aa675;font-weight:600">300</span> 金币——金币在 mod 里购买力有限（商店/删牌），而属性加成是整局生效的成长型收益。除非你完全不打元素体系且急需金币，否则不建议。
- **本事件可重复遇到**：属性加成遗物可以叠加，多次遇到本事件时层数会继续累积，属性流的长线梦想是堆出每场 10+ 属性的"全属性炮台"。

## 源码

- `SeerAttributeInflation.cs`
