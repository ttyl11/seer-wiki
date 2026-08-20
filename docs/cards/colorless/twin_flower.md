# 双生花

<img src="/images/cards/twin_flower.png" alt="双生花" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 无色牌
- **能量消耗**: 0
- **类型**: 能力
- **稀有度**: 罕见
- **目标**: 自身
- **关键词**: [保留](/mechanics/retain.md)
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 睡眠概率 | 30 | 45 |
| 睡眠回合 | 2 | 2 |

## 描述

每回合开始时，有<span style="color:#9b59b6;font-weight:600">晓</span>则失去<span style="color:#9b59b6;font-weight:600">晓</span>，获得<span style="color:#9b59b6;font-weight:600">清</span>。有<span style="color:#9b59b6;font-weight:600">清</span>则失去<span style="color:#9b59b6;font-weight:600">清</span>，获得<span style="color:#9b59b6;font-weight:600">晓</span>。

## 升级后

每回合开始时，有<span style="color:#9b59b6;font-weight:600">晓</span>则失去<span style="color:#9b59b6;font-weight:600">晓</span>，获得<span style="color:#9b59b6;font-weight:600">清</span>。有<span style="color:#9b59b6;font-weight:600">清</span>则失去<span style="color:#9b59b6;font-weight:600">清</span>，获得<span style="color:#9b59b6;font-weight:600">晓</span>。

## 小贴士

- **关键词**：此牌带有[保留](/mechanics/retain.md)关键词——回合结束不弃牌，可以挑一个舒服的时机再启动。
- **交替顺序**：打出后，**下一个自己回合开始时先获得[晓](/powers/dawn_power.md)**，再下回合换成[清](/powers/clarity_power.md)，之后晓、清每回合交替——隐藏的"双生花"能力负责轮换，晓/清本身在当回合结束时就移除，场上永远只留一个。
- **[晓](/powers/dawn_power.md)的效果**：本回合你每打出一张**攻击牌**，有 <span style="color:#3aa675;font-weight:600">30</span>% 概率令随机一名敌人[睡眠](/powers/sleep_power.md) <span style="color:#3aa675;font-weight:600">2</span> 回合。
- **[清](/powers/clarity_power.md)的效果**：本回合你每打出一张**非攻击牌**（技能/能力），同样有 <span style="color:#3aa675;font-weight:600">30</span>% 概率令随机一名敌人[睡眠](/powers/sleep_power.md) <span style="color:#3aa675;font-weight:600">2</span> 回合。
- **概率独立判定**：每次打牌都单独掷一次概率（期望约每 3~4 张牌睡一次），不是"攒够层数必触发"；目标是**随机**敌人，多人战斗中无法指名睡谁。
- **升级效果**：睡眠概率从 <span style="color:#3aa675;font-weight:600">30</span>% 提升至 <span style="color:#3aa675;font-weight:600">45</span>%（期望约每 2~3 张牌睡一次），睡眠回合数不变。
- **攻技混打全覆盖**：晓回合多出攻击牌、清回合多出技能/能力牌，都能触发——交替节奏与手牌结构天然匹配，混编牌组几乎每回合都有触发窗口。
- **睡眠是软控制，不是硬控**：[睡眠](/powers/sleep_power.md)的机制是敌人**攻击伤害 -50%**，且敌人受到任意未被格挡的伤害就**立即打醒**——要么忍住不打它、吃它减半的输出，要么照常输出把它唤醒，收益直接砍半。晓回合天然要出攻击牌，睡住的敌人大概率当回合就被打醒，更适合同伴回合或下回合的敌方高危攻击。

## 相关机制

- [保留](/mechanics/retain.md)（此牌关键词）
- [晓](/powers/dawn_power.md)（攻击牌触发睡眠）
- [清](/powers/clarity_power.md)（非攻击牌触发睡眠）
- [睡眠](/powers/sleep_power.md)（控制效果）

## 源码

- `SeerTwinFlower.cs`
- `SeerTwinFlowerPower.cs`
- `SeerDawnPower.cs`
- `SeerClarityPower.cs`
