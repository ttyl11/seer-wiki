# 千里击涛!!!

<img src="/images/cards/thousand_miles_wave.png" alt="千里击涛!!!" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 无色牌
- **能量消耗**: 0
- **类型**: 能力
- **稀有度**: 稀有
- **目标**: 自身
- **关键词**: [悼](/mechanics/mourning.md)
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 增伤百分比 | 200 | 300 |
| 每回合卡牌数 | 3 | 3 |

## 描述

获得<span style="color:#3aa675;font-weight:600">200</span>%伤害加成。每回合打出<span style="color:#3aa675;font-weight:600">3</span>张牌后强制结束回合。

## 升级后

获得<span style="color:#3aa675;font-weight:600">300</span>%伤害加成。每回合打出<span style="color:#3aa675;font-weight:600">3</span>张牌后强制结束回合。

## 小贴士

- **关键词**：此牌带有[悼](/mechanics/mourning.md)关键词。
- **增伤幅度**：200% 伤害加成 = 你造成的攻击伤害 **×3**（升级后 300% = **×4**），属于[乘法区](/powers/permanent_damage_boost_power.md)加成，与力量、易伤等加算区增益是相乘关系——先叠力量再开千里击涛，收益最大化。
- **增伤范围**：只作用于**自己造成的常规攻击伤害**（吃[力量](/powers/strength_power.md)影响的那类攻击伤害）。[固定伤害](/mechanics/fixed-damage.md)、灼烧/中毒等 DoT、以及标明"不受力量影响"的伤害均**不吃**此加成。
- **增伤持续整场战斗**：施加的[永久增伤](/powers/permanent_damage_boost_power.md)是 Buff 类型，整场战斗持续不衰减，也不影响队友（仅自身输出生效）。
- **强制结束回合**：每回合打出第 <span style="color:#3aa675;font-weight:600">3</span> 张牌（含此牌自己）结算完毕后**立即强制结束回合，无法撤销**——多余的牌只能憋到下回合。
- **此牌自己算第 1 张**：能力在打出瞬间生效，本牌的打出事件也会被计数——打出当回合实际只能**再打 2 张**牌，后续回合才是完整的 3 张额度。
- **计数规则**：只统计你**自己**打出的牌（队友打牌不占你的额度），含攻击/技能/能力所有类型；每回合结束计数清零。
- **PP 连打会快速撞墙**：PP 牌每次重复打出都计入计数——高 PP 牌一口气连放很容易直接触发强制结束，规划好出牌顺序再动手。
- **使用节奏**：3~4 倍乘伤是全 mod 顶级输出增益，但每回合 3 张的限制要求牌组"少而精"——适合高单卡质量、靠[能量](/mechanics/energy.md)堆伤害的斩杀构筑；牌越杂、过渡牌越多，限制的代价越明显。

## 相关机制

- [悼](/mechanics/mourning.md)（此牌关键词）
- [永久增伤](/powers/permanent_damage_boost_power.md)（伤害加成能力）
- [力量](/powers/strength_power.md)（乘法区叠加对象）

## 源码

- `SeerThousandMilesWave.cs`
- `SeerPermanentDamageBoostPower.cs`
- `SeerThousandMilesWavePower.cs`
