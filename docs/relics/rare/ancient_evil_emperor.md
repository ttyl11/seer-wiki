# 万古邪皇·威斯克

<img src="/images/relics/ancient_evil_emperor.png" alt="万古邪皇·威斯克" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 稀有

### 数值参数

| 参数 | 数值 |
|---|---|
| 诅咒回合 | 1 |
| 固定伤害 | 3 |

## 描述

①自身打出<span style="color:#d4a017;font-weight:600">技能牌</span>时，对随机敌人附加<span style="color:#3aa675;font-weight:600">1</span>层<span style="color:#d44;font-weight:600">[诅咒](/powers/curse_power.md)</span>。<br/>②自身打出<span style="color:#d4a017;font-weight:600">攻击牌</span>造成伤害时，对目标附加<span style="color:#3aa675;font-weight:600">3</span>点<span style="color:#d4a017;font-weight:600">[固定伤害](/powers/fixed_damage_power.md)</span>。

- **诅咒目标随机**：技能牌通常无指定目标，效果①从存活敌人中随机选一个施加<span style="color:#d44;font-weight:600">[诅咒](/powers/curse_power.md)</span>。
- **固定伤害针对攻击目标**：效果②对攻击牌命中的目标施加<span style="color:#d4a017;font-weight:600">[固定伤害](/powers/fixed_damage_power.md)</span>，不是随机。

## 风味文字

<span style="color:#d44;font-weight:600">万古邪皇·威斯克。</span>

## 小贴士

- **技能牌和攻击牌双触发**：①打技能牌给随机敌人上诅咒，②打攻击牌给命中目标上 3 点固定伤害。两种牌型各管一条效果互不冲突——混合卡组两条全吃，纯技能或纯攻击卡组也各有一条保底。
- **多段攻击是固伤放大器**：效果②按**每一次伤害结算**独立触发，不看牌数看段数——一张 5 段攻击牌 = 5 次 × 3 点 = 15 层[固定伤害](/powers/fixed_damage_power.md)。多段连击牌在这件遗物手里的固伤产量是单段牌的数倍。
- **攻击被格挡也照常附加**：②只看"攻击伤害事件发生"，不要求实际掉血——被敌方格挡完全吸收的攻击照样附 3 点固伤（下回合开始结算时绕过格挡）。打高格挡敌人时是稳定磨血手段。
- **诅咒的精确规格**：给敌人挂的[诅咒](/powers/curse_power.md)让它的攻击伤害 -10%，且它回合结束时受随机不可格挡伤害（50% 概率 3 点 / 40% 概率 5 点 / 9% 概率 8 点 / 1% 概率 50 点，期望约 4.7）。只挂 1 层、持续到它回合结束——想维持不断档需要持续打技能牌。
- **诅咒目标随机**：①的诅咒随机分配给存活敌人，无法指定。单体 Boss 无所谓；多敌人时可能歪到不该挂的目标身上，好在诅咒本身就是通用减益。
- **注意：诅咒能力≠诅咒牌**：万古邪皇给敌人的是诅咒**能力**（减攻 + 随机掉血），和卡组里的诅咒**牌**是两套独立机制——不能给[诅咒之神·狄修](/relics/epic/curse_god_dishu.md)铺诅咒牌，狄修统计的是牌组里的诅咒牌。

## 源码

- `SeerAncientEvilEmperor.cs`
