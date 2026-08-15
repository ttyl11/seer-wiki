# 蓝色龙鳞

<img src="/images/powers/blue_dragon_scale_power.png" alt="蓝色龙鳞" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益
- **来源**: [武心婵](/relics/legendary/wu_xin_chan.md)
- **叠加方式**: 不叠加（触发即消失）
- **可见**: 是

## 描述

免疫属性下降。触发免疫时消除对手<span style="color:#d4a017;font-weight:600">护盾</span>，然后自身消失。

## 数值

| 参数 | 数值 |
|---|---|
| 免疫类型 | 力量、防御、命中、速度的下降 |
| 触发后效果 | 消除所有对手护盾 |
| 持续 | 触发后消失 |

## 详细机制

- **免疫范围**：免疫[力量](/powers/strength_power.md)、[防御](/powers/defense_power.md)、[命中](/powers/accuracy_power.md)、[速度](/powers/speed_power.md)四项核心属性的下降（仅限负层数施加，正值不受影响）。
- **反击破盾**：触发免疫的回合结束时，消除所有对手的全部护盾（格挡），然后自身消失。
- **一次性保护**：触发后自身消失，每场战斗仅一次保护。
- **合成白色龙鳞**：由[武心婵](/relics/legendary/wu_xin_chan.md)赋予，失去所有红/黄/蓝龙鳞后合成为[白色龙鳞](/powers/white_dragon_scale_power.md)。

## 小贴士

- **专防属性下降**：免疫四项核心属性（力量/防御/命中/速度）的负层数施加，对抗削属性流敌人极强。
- **反击破全体护盾**：触发免疫时消除所有对手护盾，配合红/黄龙鳞的其它免疫可形成连击破盾。

## 源码

- `SeerBlueDragonScalePower.cs`
