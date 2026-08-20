# 首发压制

<img src="/images/cards/first_strike_suppress.png" alt="首发压制" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 无色牌
- **能量消耗**: 13（实际耗能由[弃牌堆](/mechanics/discard_pile.md)卡牌数动态减少）
- **类型**: 能力
- **稀有度**: 罕见
- **目标**: 自身
- **可升级**: 是（1 级）
- **关键词**: [固有](/mechanics/innate.md)（升级后移除）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 增伤百分比 | 333 | 333 |

## 描述

[<span style="color:#d4a017;font-weight:600">击晕</span>](/mechanics/stun.md)所有敌人。下一次攻击伤害增加<span style="color:#3aa675;font-weight:600">333</span>%（获得[<span style="color:#d4a017;font-weight:600">增伤</span>](/powers/next_damage_boost_power.md)）。[<span style="color:#d4a017;font-weight:600">弃牌堆</span>](/mechanics/discard_pile.md)每有一张牌，此牌耗能<span style="color:#3aa675;font-weight:600">-1</span>。

## 升级后

不再[<span style="color:#d4a017;font-weight:600">固有</span>](/mechanics/innate.md)。[<span style="color:#d4a017;font-weight:600">击晕</span>](/mechanics/stun.md)所有敌人。下一次攻击伤害增加<span style="color:#3aa675;font-weight:600">333</span>%（获得[<span style="color:#d4a017;font-weight:600">增伤</span>](/powers/next_damage_boost_power.md)）。[<span style="color:#d4a017;font-weight:600">弃牌堆</span>](/mechanics/discard_pile.md)每有一张牌，此牌耗能<span style="color:#3aa675;font-weight:600">-1</span>。

## 小贴士

- **🔑 固有是陷阱，升级移除固有才是真升级**：开局必在手的[固有](/mechanics/innate.md)听起来美好，但开局[弃牌堆](/mechanics/discard_pile.md)是空的——此牌开局全价 <span style="color:#3aa675;font-weight:600">13</span> 费根本打不出，固有只是让你每场开局白占一张死牌手位。升级移除固有后正常抽牌，配合弃牌堆降费才是完全体。
- **降费引擎：弃牌堆每张 -1，13 张 = 免费**：实际耗能 = max(0, 13 − 弃牌堆张数)。开局 0 张弃牌 = 13 费天价；打完一轮牌弃牌堆 10+ 张后骤降为 0~3 费。注意**洗牌时弃牌堆清空、费用回升**——降价窗口在两次洗牌之间。
- **全体击晕 = 白嫖一整轮**：所有敌人跳过下回合行动——你安全输出一整回合，敌人纹丝不动。多敌人精英战的价值极高。
- **+333% = 4.33 倍重击窗口**：下一次攻击伤害 +<span style="color:#3aa675;font-weight:600">333</span>%——击晕保你平安，把手里**最重的一张攻击牌**排在这之后打出（配合[力量](/powers/strength_power.md)/[易伤](/powers/vulnerable_power.md)进一步放大），是标准斩杀组合。
- **标准节奏**：前 1~2 回合正常出牌攒弃牌堆 → 弃牌堆 10 张以上时 0~3 费打出 → 敌人全体跳过 + 下张攻击 4.33 倍收头。它是**中期斩杀器**，不是开局牌。
- **能力牌即打即结**：击晕与增伤在打出瞬间全部结算完毕，牌本身离场——不占后续手牌循环。

## 相关能力

- [<span style="color:#d4a017;font-weight:600">增伤</span>](/powers/next_damage_boost_power.md)：下一次攻击伤害增加 333%

## 相关机制

- [击晕](/mechanics/stun.md)（对所有敌人施加击晕）
- [固有](/mechanics/innate.md)（升级前拥有，升级后移除）
- [弃牌堆](/mechanics/discard_pile.md)（影响此牌耗能）

## 源码

- `SeerFirstStrikeSuppress.cs`
