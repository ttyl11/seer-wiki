# 爆破先锋

<img src="/images/relics/blast_pioneer.png" alt="爆破先锋" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 罕见

### 数值参数

| 参数 | 数值 |
|---|---|
| 自伤 | 7 |
| 易伤层数 | 1 |
| 重放次数 | 3 |

## 描述

拾起时，向<span style="color:#d4a017;font-weight:600">牌组</span>中加入1张附带<span style="color:#9b59b6;font-weight:600">[重放](/mechanics/replay.md)3</span>和<span style="color:#9b59b6;font-weight:600">[注能](/mechanics/enchantment.md)</span>附魔的<span style="color:#d4a017;font-weight:600">炸弹</span>。<br/><span style="color:#d4a017;font-weight:600">炸弹</span>爆炸时，对所有友方造成<span style="color:#3aa675;font-weight:600">7</span>点伤害并施加<span style="color:#3aa675;font-weight:600">1</span>层<span style="color:#d44;font-weight:600">[易伤](/powers/vulnerable_power.md)</span>。

- **炸弹卡牌**：拾起遗物时生成一张炸弹卡加入牌组，附加 [重放](/mechanics/replay.md) <span style="color:#3aa675;font-weight:600">3</span> 与[注能](/mechanics/enchantment.md)附魔。
- **爆炸触发**：当炸弹能力从玩家身上移除时触发（即炸弹爆炸瞬间），对所有友方造成伤害并施加[易伤](/powers/vulnerable_power.md)。
- **目标范围**：同侧所有存活生物（玩家、队友、宠物），逐个造成伤害。

## 风味文字

<span style="color:#d44;font-weight:600">Boom! </span>

## 小贴士

- **拾起获得强化炸弹**：获得 1 张炸弹牌，附带[重放](/mechanics/replay.md) 3（额外打 3 次）和[注能](/mechanics/enchantment.md)附魔。炸弹本身是范围伤害，重放 3 意味着可以爆炸 4 次（原 1 + 重放 3）。
- **炸弹爆炸伤友方**：炸弹爆炸时对所有友方（包括自己、队友、宠物）造成 7 点伤害并施加 1 层[易伤](/powers/vulnerable_power.md)。每次爆炸都会伤友方，重放 3 次 = 友方挨 4 次 7 点伤害 + 4 层易伤。
- **自伤风险极高**：4 次爆炸 = 自身承受 28 点伤害 + 4 层易伤。需要高血量或减伤能力才能扛住。多人模式中队友也会被波及。
- **爆炸伤害为非攻击伤害**：不吃力量加成，不触发攻击相关反应。配合减伤/免疫非攻击伤害的能力可以降低或抵消自伤。

## 源码

- `SeerBlastPioneer.cs`
