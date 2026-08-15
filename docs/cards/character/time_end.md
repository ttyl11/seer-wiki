# 终末·时之彼端

<img src="/images/cards/time_end.png" alt="终末·时之彼端" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 5
- **能量消耗**: 1
- **类型**: 攻击
- **稀有度**: 罕见
- **目标**: 敌方单体
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 反伤阈值 | 20 | 12 |
| 先制 | 1 | 1 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> [<span style="color:#d4a017;font-weight:600">先制</span>](/powers/first_strike_power.md)+<span style="color:#3aa675;font-weight:600">1</span>。下次受到的伤害<span style="color:#3aa675;font-weight:600">100</span>%反馈，若><span style="color:#3aa675;font-weight:600">20</span>则恢复等量<span style="color:#d4a017;font-weight:600">体力</span>。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> [<span style="color:#d4a017;font-weight:600">先制</span>](/powers/first_strike_power.md)+<span style="color:#3aa675;font-weight:600">1</span>。下次受到的伤害<span style="color:#3aa675;font-weight:600">100</span>%反馈，若><span style="color:#3aa675;font-weight:600">12</span>则恢复等量<span style="color:#d4a017;font-weight:600">体力</span>。

## 小贴士

- **反伤穿盾、立即结算**：下次被敌人击中时，把你"未被格挡"的那部分伤害 <span style="color:#3aa675;font-weight:600">100</span>% 以直接伤害弹回给攻击者。这笔反馈无视攻击者的格挡、不吃力量，并且是当场生效——它不属于[<span style="color:#d4a017;font-weight:600">固定伤害</span>](/powers/fixed_damage_power.md)那样的延迟结算。
- **阈值是回血开关**：只有这次受到的未格挡伤害达到阈值（基础 <span style="color:#3aa675;font-weight:600">20</span>，升级后 <span style="color:#3aa675;font-weight:600">12</span>）才会触发等量体力恢复；达不到阈值只反弹、不回血。这张牌鼓励你硬吃一发大的——挨得越疼，反弹越狠，还能把血回满。
- **先挨打再反伤**：伤害会先扣在你身上，然后才反弹和回血。这意味着你必须扛得住那一击，靠它挡致命伤是来不及的——血量见底时别指望它救命。
- **格挡是减益**：反弹量和回血判定都基于"未格挡伤害"。你格挡得越多，剩余的未格挡伤害越少，反弹越弱、也越难够到回血阈值。想发挥这张牌就得刻意留护甲、硬扛那一下。
- **附赠先制减费**：打出后获得 <span style="color:#3aa675;font-weight:600">1</span> 层[<span style="color:#d4a017;font-weight:600">先制</span>](/powers/first_strike_power.md)，使你下一张牌耗能 -<span style="color:#3aa675;font-weight:600">1</span>。等于这 <span style="color:#3aa675;font-weight:600">1</span> 费的代价被下一张牌"找补"回来，连击更顺。
- **选敌只是形式、一次性触发**：必须指定一个敌方目标才能打出，但全部效果都落在自己身上，选谁都不影响结果；反伤触发后能力立即移除，只挡下一次受击，是预判大招的对策牌而非常驻反甲。
- **性价比**：1 费换一次全额反伤 + 减费 + 潜在满血，预判 Boss 大招时收益爆炸，平时裸放则一般。

## 相关能力

- [时之彼端](/powers/time_end_power.md)（反伤与回血）
- [先制](/powers/first_strike_power.md)（减费增益）

## 源码

- `SeerTimeEnd.cs`
- `SeerTimeEndPower.cs`
