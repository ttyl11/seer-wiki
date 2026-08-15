# 圣灵魔闪光

<img src="/images/cards/holy_flash.png" alt="圣灵魔闪光" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 5
- **能量消耗**: X
- **类型**: 攻击
- **稀有度**: 稀有
- **目标**: 敌方单体
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 额外X | 0 | +1 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 随机[<span style="color:#d4a017;font-weight:600">消耗</span>](/mechanics/exhaust.md)[<span style="color:#d4a017;font-weight:600">抽牌堆</span>](/mechanics/draw_pile.md)<span style="color:#3aa675;font-weight:600">X</span>张牌。造成敌方<span style="color:#3aa675;font-weight:600">1/8</span>当前生命值的伤害<span style="color:#3aa675;font-weight:600">X</span>次。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 随机[<span style="color:#d4a017;font-weight:600">消耗</span>](/mechanics/exhaust.md)[<span style="color:#d4a017;font-weight:600">抽牌堆</span>](/mechanics/draw_pile.md)<span style="color:#3aa675;font-weight:600">X+1</span>张牌。造成敌方<span style="color:#3aa675;font-weight:600">1/8</span>当前生命值的伤害<span style="color:#3aa675;font-weight:600">X+1</span>次。

## 小贴士

- **X 耗能弹性**：X = 打出时投入的能量值，升级后额外 +1。投多少费就消耗多少张、打多少次。
- **随机消耗抽牌堆**：从[抽牌堆](/mechanics/draw_pile.md)随机选 X 张牌[消耗](/mechanics/exhaust.md)，被消耗的 PP 卡 pp 清零。消耗是双刃剑——既减少后续抽牌资源，也清空了 PP 卡的储备。
- **1/8 当前生命值攻击伤害**：每次造成目标当前生命值 1/8 的**攻击伤害**（受[力量](/powers/strength_power.md)/[易伤](/powers/vulnerable_power.md)影响），下限 1 点。每次重新计算当前生命值，所以伤害会随目标血量下降而递减。
- **对高血 Boss 爆发**：对 400 血 Boss 打 X=3，首次 50 伤、第二次 43 伤、第三次 37 伤，合计 130+。血量越高的敌人收益越大；残血敌人则效率很低。
- **X 费的合理性**：X 费换 X 次 1/8 血量百分比伤害，对高血 Boss 是超模斩杀手段；代价是消耗抽牌堆 X 张 + 清空 PP。超模伤害与资源代价对等，定价合理。

## 相关机制

- [消耗](/mechanics/exhaust.md)（随机消耗抽牌堆 X 张）
- [抽牌堆](/mechanics/draw_pile.md)（消耗来源）

## 源码

- `SeerHolyFlash.cs`
