# 雷神天明闪

<img src="/images/cards/thunder_god_flash.png" alt="雷神天明闪" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 5
- **能量消耗**: 2
- **类型**: 攻击
- **稀有度**: 普通
- **目标**: 敌方单体
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 伤害 | 12 | 12 |
| 暴击概率 | 20% | 40% |
| 暴击倍率 | 4 | 4 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 造成<span style="color:#3aa675;font-weight:600">12</span>点伤害。有<span style="color:#3aa675;font-weight:600">20</span>%概率伤害×<span style="color:#3aa675;font-weight:600">4</span>。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 造成<span style="color:#3aa675;font-weight:600">12</span>点伤害。有<span style="color:#3aa675;font-weight:600">40</span>%概率伤害×<span style="color:#3aa675;font-weight:600">4</span>。

## 小贴士

- **内置倍率，独立于暴击能力**：这张牌的"概率×4"是卡牌自带的随机判定，与[<span style="color:#d4a017;font-weight:600">暴击</span>](/mechanics/critical-strike.md)能力系统互不相干——堆暴击层数不会提高本牌的触发概率，本牌触发也不会消耗暴击能力。把它当成一张"自带抽奖的攻击牌"更准确。
- **倍率先乘，增伤后乘**：判定触发时先把基础伤害 <span style="color:#3aa675;font-weight:600">12</span>×<span style="color:#3aa675;font-weight:600">4</span>=<span style="color:#3aa675;font-weight:600">48</span>，再走力量/易伤/格挡的常规结算。也就是说易伤、力量等增伤会把这个被放大的基数继续放大，配合减益一发暴击收益惊人。
- **高方差赌牌**：基础期望约 <span style="color:#3aa675;font-weight:600">19.2</span> 点（<span style="color:#3aa675;font-weight:600">12</span>×0.8 + <span style="color:#3aa675;font-weight:600">48</span>×0.2），2 费略偏高但极不稳定——非暴击时只有 <span style="color:#3aa675;font-weight:600">12</span> 点偏亏，暴击时 <span style="color:#3aa675;font-weight:600">48</span> 点超模。不适合追求稳定输出的流派。
- **升级拉均值而非上限**：升级把概率 <span style="color:#3aa675;font-weight:600">20</span>%→<span style="color:#3aa675;font-weight:600">40</span>%，单发上限仍是 <span style="color:#3aa675;font-weight:600">48</span>，但期望跃升到约 <span style="color:#3aa675;font-weight:600">26.4</span> 点，稳定性大幅改善。想要这张牌靠谱就得升级。
- **性价比**：2 费赌牌，未升级方差过大不推荐带，升级后期望可观才值得编入。

## 相关机制

- [暴击](/mechanics/critical-strike.md)（参考：本牌倍率为卡牌内置，独立于暴击能力系统）

## 源码

- `SeerThunderGodFlash.cs`
