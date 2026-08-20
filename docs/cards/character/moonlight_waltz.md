# 月下华尔兹

<img src="/images/cards/moonlight_waltz.png" alt="月下华尔兹" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 5
- **能量消耗**: 2
- **类型**: 攻击
- **稀有度**: 稀有
- **目标**: 敌方单体
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| PP | 5 | 5 |
| 最大PP | 5 | 5 |
| 伤害 | 22 | 33 |

## 描述

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 造成<span style="color:#3aa675;font-weight:600">22</span>点伤害。体力低于<span style="color:#3aa675;font-weight:600">50%</span>翻<span style="color:#3aa675;font-weight:600">2</span>倍，低于<span style="color:#3aa675;font-weight:600">20%</span>翻<span style="color:#3aa675;font-weight:600">3</span>倍，为<span style="color:#3aa675;font-weight:600">1</span>时翻<span style="color:#3aa675;font-weight:600">10</span>倍。

## 升级后

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 造成<span style="color:#3aa675;font-weight:600">33</span>点伤害。体力低于<span style="color:#3aa675;font-weight:600">50%</span>翻<span style="color:#3aa675;font-weight:600">2</span>倍，低于<span style="color:#3aa675;font-weight:600">20%</span>翻<span style="color:#3aa675;font-weight:600">3</span>倍，为<span style="color:#3aa675;font-weight:600">1</span>时翻<span style="color:#3aa675;font-weight:600">10</span>倍。

## 小贴士

- **4 档倍率，1 血是终极赌命**：伤害倍率按血量分四档——生命值 <span style="color:#3aa675;font-weight:600">1</span> 点时 ×<span style="color:#3aa675;font-weight:600">10</span>、当前血/最大血 &lt; <span style="color:#3aa675;font-weight:600">20%</span> 时 ×<span style="color:#3aa675;font-weight:600">3</span>、&lt; <span style="color:#3aa675;font-weight:600">50%</span> 时 ×<span style="color:#3aa675;font-weight:600">2</span>、其它 ×<span style="color:#3aa675;font-weight:600">1</span>。基础 <span style="color:#3aa675;font-weight:600">22</span> 伤在 1 血时变 <span style="color:#3aa675;font-weight:600">220</span>，升级 <span style="color:#3aa675;font-weight:600">33</span> 伤变 <span style="color:#3aa675;font-weight:600">330</span>——这是 mod 里单卡伤害上限最高的牌之一。
- **标准攻击伤害，倍率只是基础值**：本牌伤害走攻击结算——吃[力量](/powers/strength_power.md)/[易伤](/powers/vulnerable_power.md)加成、可[暴击](/powers/critical_strike_power.md)（×<span style="color:#3aa675;font-weight:600">1.5</span>），也会被格挡。1 血 ×<span style="color:#3aa675;font-weight:600">10</span> 再叠暴击与易伤，实际一击可达 <span style="color:#3aa675;font-weight:600">220×1.5×1.5=495</span> 级别——赌命的成功率可以用增伤手段拉满。
- **"为 1"是 1 点生命值，不是 1%**：最容易误解的地方。本地化写"为 1 时翻 10 倍"，指的是生命值剩 <span style="color:#3aa675;font-weight:600">1</span> 点（绝对值），不是 1% 血量。所以 <span style="color:#3aa675;font-weight:600">80</span> 最大血的 <span style="color:#3aa675;font-weight:600">1%</span> 是 <span style="color:#3aa675;font-weight:600">0.8</span> 血，和"<span style="color:#3aa675;font-weight:600">1</span> 点血"完全不同。要精确控血到 <span style="color:#3aa675;font-weight:600">1</span> 点才能触发 10 倍。
- **判断顺序：先判 1 血**：倍率判定有优先级——先查是否 ≤<span style="color:#3aa675;font-weight:600">1</span> 血（10 倍），再查 &lt;20%（3 倍），再查 &lt;50%（2 倍）。所以 1 血时是 10 倍不是 3 倍，虽然 1 血也满足 &lt;20%。
- **健康时只是普通伤害牌**：<span style="color:#3aa675;font-weight:600">2</span> 费 <span style="color:#3aa675;font-weight:600">22</span> 伤在满血时只是中规中矩的攻击牌。这张牌的价值完全在濒血区间——血量健康时打出等于浪费，必须留到血量压低后再爆发。
- **控血是核心玩法**：配合自伤机制（如烧伤/扣血换增益的卡）精确把血压到 <span style="color:#3aa675;font-weight:600">1</span> 点，再配合护盾/无敌/缓冲保命，是这张牌的正确打开方式。纯防御流用不出来——你得敢把自己压到 1 血才配拿 10 倍伤害。
- **性价比**：<span style="color:#3aa675;font-weight:600">2</span> 费换 <span style="color:#3aa675;font-weight:600">22</span>→<span style="color:#3aa675;font-weight:600">220</span> 伤害，濒血爆发价极公道。但代价是必须把自己置于 1 血的死亡边缘——这是一张赌命牌，回报匹配风险。

## 源码

- `SeerMoonlightWaltz.cs`
