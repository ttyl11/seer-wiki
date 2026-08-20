# 欢梦芳逝

<img src="/images/cards/phantom_dream_fade.png" alt="欢梦芳逝" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 1
- **能量消耗**: 1
- **类型**: 攻击
- **稀有度**: 稀有
- **目标**: 所有敌人
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 |
|---|---|
| 自损生命 | 13 |
| 伤害 | 13 |
| 舞台持续回合 | 99 |

## 描述

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 自损<span style="color:#3aa675;font-weight:600">13</span>点生命，对所有敌人造成等量伤害。下场战斗开启[<span style="color:#9b59b6;font-weight:600">灵籁泳馆</span>](/powers/ling_lai_swim_hall_power.md)和[<span style="color:#9b59b6;font-weight:600">星璨舞台</span>](/powers/star_stage_power.md)<span style="color:#3aa675;font-weight:600">99</span>回合。

## 升级后

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 自损<span style="color:#3aa675;font-weight:600">13</span>点生命，对所有敌人造成等量伤害。下场战斗开启[<span style="color:#9b59b6;font-weight:600">灵籁泳馆</span>](/powers/ling_lai_swim_hall_power.md)和[<span style="color:#9b59b6;font-weight:600">星璨舞台</span>](/powers/star_stage_power.md)<span style="color:#3aa675;font-weight:600">99</span>回合。（耗能降为<span style="color:#3aa675;font-weight:600">0</span>）

## 小贴士

- **自损换AOE的爆发件**：自损13生命对全体敌人造成13点攻击伤害。注意两边伤害类型不一样：**自损是生命损失**（不可格挡、不吃任何减伤），**对敌是攻击伤害但不吃力量加成**——力量流派的玩家别指望这 13 点跟着力量涨。PP1单场一次，升级后 0 费更是无成本启动。
- **跨战斗舞台是核心价值**：打出后下场战斗自动开启[灵籁泳馆](/powers/ling_lai_swim_hall_power.md)（免疫力量/防御/命中/速度下降 + 每回合回 3 血）和[星璨舞台](/powers/star_stage_power.md)（造成伤害 +25% + 每回合结束恢复 3 张随机卡牌 1 点 PP）99 回合。等于用一张牌换下场战斗 99 回合的双重增益，数值上基本等于"整场战斗常驻"。
- **标记一次性，仅下场战斗生效**：两个舞台的标记在下一场战斗开始时读取并立刻清零——只生效一场，不是打出后场场都开。想让每场都享受舞台就得每场战斗里都打出（PP 每场回满，或靠 PP 重置手段重复利用同一张）。
- **自损13血的代价**：需要13点生命作为代价（生命损失不可格挡），低血量时使用风险极大。配合回血手段或高血量流派才能安全使用。适合在当前战斗快结束时打出（最后一回合），为下场战斗铺路——当前战斗的 13 点 AOE 顺带收尾，代价几乎白付。

## 源码

- `SeerPhantomDreamFade.cs`
