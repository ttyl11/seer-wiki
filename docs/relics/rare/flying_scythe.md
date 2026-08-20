# 风殇影翼·飞镰

<img src="/images/relics/flying_scythe.png" alt="风殇影翼·飞镰" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 稀有

### 数值参数

| 参数 | 数值 |
|---|---|
| 力量减少 | 1 |
| 命中减少 | 1 |
| 先制层数 | 1 |
| 无实体层数 | 1 |
| 伤害阈值 | 40 |

## 描述

回合开始时，令所有敌人<span style="color:#d4a017;font-weight:600">[力量](/powers/strength_power.md)</span>-<span style="color:#3aa675;font-weight:600">1</span>、<span style="color:#9b59b6;font-weight:600">[命中](/powers/accuracy_power.md)</span>-<span style="color:#3aa675;font-weight:600">1</span>。<br/>若上回合受到的未被格挡伤害><span style="color:#3aa675;font-weight:600">40</span>，获得<span style="color:#3aa675;font-weight:600">1</span>层<span style="color:#9b59b6;font-weight:600">[无实体](/powers/intangible_power.md)</span>；否则获得<span style="color:#3aa675;font-weight:600">1</span>层<span style="color:#d4a017;font-weight:600">[先制](/powers/first_strike_power.md)</span>。

- **每回合削弱敌人**：拥有者回合开始时，所有敌人力量 -1、命中 -1。
- **挨打多少决定增益**：上回合受到的未格挡攻击伤害超过 40 时，自身获得 1 层无实体（受伤降为 1）；否则获得 1 层先制。

## 风味文字

<span style="color:#d44;font-weight:600">风殇影翼，飞镰。</span>

## 小贴士

- **每回合稳定削弱敌人攻防**：己方回合开始时，所有存活敌人[力量](/powers/strength_power.md) -1、[命中](/powers/accuracy_power.md) -1。力量是加法修正，敌人每 -1 点攻击牌伤害直接少 1；命中每 -1，敌人攻击多 5% 概率 Miss。回合拖得越久敌人越弱，是标准的滚雪球遗物。
- **先制是降费，不是抢先行动**：没挨重打时获得 1 层[先制](/powers/first_strike_power.md)——效果是**下一张打出的牌耗能 -1**，打出后消耗。等于每回合白送"第一张牌 1 费折扣"：3 费大招当回合按 2 费结算。先制还能跨回合保留，没用到不会消失。
- **挨打超过 40 换无实体，硬抗整个敌方回合**：上回合未格挡攻击伤害累计超过 40 时，改为获得 1 层[无实体](/powers/intangible_power.md)——从获得时起直到敌方回合结束，你受到的**每一次**伤害/生命损失全部封顶为 1 点（攻击、[固定伤害](/powers/fixed_damage_power.md)、异常掉血都算），**不是只挡一次**。挨了重击后自动套盾，正好硬抗接下来的一整轮围殴。
- **伤害统计只认攻击、只算破防部分**：累计的只是**攻击伤害**中未被格挡的部分——毒、烧伤等非攻击伤害不算，被格挡挡掉的也不算。面对靠异常磨血的敌人基本永远走先制分支，面对重击型敌人才会换来无实体。
- **严格大于 40，恰好 40 走先制**：判定是严格大于，40 点整不触发，需要 41+。统计窗口是"自上个己方回合开始以来"——敌方回合挨的打、己方回合被荆棘反伤的攻击伤害全都算在内。
- **攻防自适应，无需操作**：挨打重 → 无实体保命；挨打轻 → 先制降费进攻。自动根据上回合承伤切换模式，是攻防一体的自适应遗物。

## 源码

- `SeerFlyingScythe.cs`
