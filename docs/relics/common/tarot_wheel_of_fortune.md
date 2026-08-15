# 命运之轮

<img src="/images/relics/tarot_wheel_of_fortune.png" alt="命运之轮" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 塔罗遗物
- **稀有度**: 普通

### 数值参数

| 参数 | 数值 |
|---|---|
| 最小伤害 | 1 |
| 最大伤害 | 7 |

## 描述

回合结束时，对所有敌人造成<span style="color:#3aa675;font-weight:600">1</span>至<span style="color:#3aa675;font-weight:600">7</span>点随机伤害。

- **触发时机**：自己回合结束时。
- **伤害范围**：<span style="color:#3aa675;font-weight:600">1</span>~<span style="color:#3aa675;font-weight:600">7</span> 随机，对所有敌人造成同一数值。
- **伤害类型**：攻击伤害，可被[格挡](/mechanics/block.md)。

## 风味文字

<span style="color:#d44;font-weight:600">命运。</span>

## 小贴士

- **全员等额刮痧**：回合结束时对所有敌人造成1~7点随机伤害，且所有敌人吃同一个随机值。平均约4点，多敌人场合总收益翻倍。
- **可被格挡**：属于攻击伤害，会被敌人的[格挡](/mechanics/block.md)抵消。好在敌人通常不会在玩家回合结束时格挡，多数情况下能实打实扣血。
- **联动思路**：和[死神](tarot_death.md)、[灾厄](/powers/doom_power.md)流配合良好——刮痧压低血量后更容易触达灾厄斩杀线。
- **性价比**：普通遗物里纯被动的小伤害来源，单挑场合收益偏低。多敌人战斗中作为免费AOE还算合格，但不必优先选取。

## 源码

- `SeerTarotWheelOfFortune.cs`
