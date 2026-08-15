# 太阳

<img src="/images/relics/tarot_sun.png" alt="太阳" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 塔罗遗物
- **稀有度**: 普通

### 数值参数

| 参数 | 数值 |
|---|---|
| 焚烬层数 | 2 |
| 烧伤层数 | 2 |

## 描述

自身任意[全属性](/mechanics/all_attributes.md)被移除时，令所有敌人获得<span style="color:#3aa675;font-weight:600">2</span>层[焚烬](/powers/ash_power.md)和<span style="color:#3aa675;font-weight:600">2</span>层[烧伤](/powers/burn_power.md)。

- **触发条件**：自身[力量](/powers/strength_power.md)、[防御](/powers/defense_power.md)、[命中](/powers/accuracy_power.md)、[速度](/powers/speed_power.md)中任意一个被移除时触发（仅完全移除生效，单纯削减层数不触发）。
- **作用范围**：对所有可击中敌人各施加[焚烬](/powers/ash_power.md)与[烧伤](/powers/burn_power.md)。
- **战斗收尾保护**：战斗结束或正在结束流程时不触发，避免误伤。

## 风味文字

<span style="color:#d44;font-weight:600">太阳。</span>

## 小贴士

- **反制属性剥夺**：这件遗物专门惩罚那些会"消除/剥夺"你全属性的敌人——你被消除1个属性，所有敌人就吃2层[焚烬](/powers/ash_power.md)+2层[烧伤](/powers/burn_power.md)。注意仅"完全移除"触发，单纯被削减层数不算。
- **焚烬烧伤联动**：焚烬会让敌人攻击伤害降低20%，且每回合结束额外生成烧伤；烧伤每回合开始造成3点伤害并削减攻击伤害。两者叠加形成持续掉血加输出削弱的复合减益，越拖越疼。
- **多次移除可叠加触发**：若敌人一次性消除你多个属性（如同时消力量和速度），每个属性被移除都会独立触发一次，全员减益层数成倍叠加，对群驱型boss反制力度极强。
- **纯靠减益吃饭**：施加的焚烬/烧伤层数固定为2层，不随你的力量/命中变化，任何流派都能用，尤其契合减益流。

**性价比**：普通稀有度换一个反制属性剥夺的群体减益，触发条件虽偏被动，但一旦遇到驱散型敌人收益爆炸。没有驱散敌人的战斗里它就是件摆设，上下限差距大但整体合格。

## 源码

- `SeerTarotSun.cs`
