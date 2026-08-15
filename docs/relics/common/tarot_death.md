# 死神

<img src="/images/relics/tarot_death.png" alt="死神" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 塔罗遗物
- **稀有度**: 普通

## 描述

回合结束时，为所有敌人附加等同于剩余手牌数的[灾厄](/powers/doom_power.md)层数。

- **触发时机**：自己回合结束时。
- **层数来源**：当前手牌数。
- **目标范围**：对所有敌人施加。

## 风味文字

<span style="color:#d44;font-weight:600">死神。</span>

## 小贴士

- **手牌即灾厄**：回合结束时，每留1张手牌就给所有敌人叠1层[灾厄](/powers/doom_power.md)。手牌越多，斩杀线越低。
- **灾厄即斩杀**：[灾厄](/powers/doom_power.md)在敌人回合结束时，若层数不低于其生命则直接死亡，绕过[格挡](/mechanics/block.md)和[无实体](/powers/intangible_power.md)。
- **留牌的艺术**：和常规"打光手牌"的思路相反，这张遗物鼓励把牌留到回合结束。需要权衡本回合要打的牌和留给灾厄的牌。
- **联动思路**：搭配[隐者](tarot_hermit.md)空过回合可让手牌全转化为灾厄；搭配抽牌、手牌上限提升能力，灾厄层数能轻松堆到两位数。
- **性价比**：普通遗物里少有的稳定斩杀手段，长线战斗中灾厄累积起来能越过血量门槛秒杀精英。手牌消耗大的卡组收益有限，控制流则如虎添翼。

## 源码

- `SeerTarotDeath.cs`
