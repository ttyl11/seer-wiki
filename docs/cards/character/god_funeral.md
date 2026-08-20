# 神明送葬

<img src="/images/cards/god_funeral.png" alt="神明送葬" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 1
- **能量消耗**: 1
- **类型**: 能力
- **稀有度**: 罕见
- **目标**: 自身
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 受伤触发次数 | 2 | 4 |
| 圣诰层数 | 3 | 3 |
| PP | 1 | 1 |
| 最大PP | 1 | 1 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 进入<span style="color:#d4a017;font-weight:600">邪魇形态</span>。自身下<span style="color:#3aa675;font-weight:600">2</span>次受到伤害时，为所有敌人施加<span style="color:#3aa675;font-weight:600">3</span>层<span style="color:#9b59b6;font-weight:600">圣诰</span>。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 进入<span style="color:#d4a017;font-weight:600">邪魇形态</span>。自身下<span style="color:#3aa675;font-weight:600">4</span>次受到伤害时，为所有敌人施加<span style="color:#3aa675;font-weight:600">3</span>层<span style="color:#9b59b6;font-weight:600">圣诰</span>。

## 小贴士

- **邪魇形态**：打出后进入[邪魇形态](/powers/evil_form_power.md)（若当前处于圣洁形态则直接转换，已有邪魇不重复施加）——免疫属性下降（力量/敏捷/防御/命中/速度的负向施加归零）、受到伤害 -25%、你的攻击造成伤害时对目标施加邪诲、受到敌方伤害时对来源施加 1 层圣诰。
- **受伤触发全体圣诰**：另获得[神明送葬](/powers/god_funeral_power.md)追踪能力，下 2 次（升级 4 次）**实际受到伤害**（TotalDamage > 0）时，为**所有敌人**施加 3 层[圣诰](/powers/holy_edict_power.md)，次数用尽自动消失。注意两处细节：①被格挡完全挡掉的攻击（总伤害为 0）**既不触发也不消耗次数**——高格挡下这 2/4 次机会可以留到真正破防时；②不要求伤害来自敌人——中毒/灼烧等 DoT 掉血同样触发并消耗次数。
- **圣诰的完整效果**：敌人带圣诰时，每次**被你的攻击伤害命中**有 60% 概率陷入[疲惫](/powers/fatigue_power.md) 2 层——疲惫使敌人攻击伤害 -20%，且每次造成实际伤害**自反层数点固伤**（2 层 = 出手一次掉 2 血）。圣诰掉层条件苛刻：敌人受到的总伤害低于圣诰层数 ×50% 才 -1 层——正常输出下圣诰几乎不消耗，铺一次管很久。
- **双通道圣诰引擎**：邪魇形态受击给来源 1 层 + 神明送葬受击给全体 3 层——受伤时同一瞬间来源敌人吃 4 层、其余敌人吃 3 层。配合主动受击/卖血打法的卡组，圣诰铺层速度惊人。
- **疲劳滚雪球**：圣诰触发疲惫后，敌人越爱出手自伤越重（每次出手-2 血+减攻 20%），高攻速敌群会被自己的行动磨死——这张牌对"多段攻击型"敌人的压制力远超面板。
- **配合建议**：卖血流（主动承伤换收益）、格挡流（精准控制哪次伤害破防触发）都契合；先手铺圣诰再贴脸输出，60% 触发率配合多段攻击一轮打满疲惫。
- **升级的关键性**：触发次数 2→4，全体圣诰总产出翻倍（12→24 层），收益直接 ×2，优先级高。
- **性价比**：1 费换形态（减伤+免降属性+双反制）+ 2 次全体圣诰，罕见卡里攻防反制三位一体的优质能力牌。

## 相关能力

- [邪魇形态](/powers/evil_form_power.md)（免疫属性下降，减伤，攻击施加邪诲，受击施加圣诰）
- [圣诰](/powers/holy_edict_power.md)（被攻击命中时 60% 概率疲惫，低伤害才掉层）
- [疲惫](/powers/fatigue_power.md)（攻击伤害 -20%，每次造成伤害自反层数点）
- [神明送葬](/powers/god_funeral_power.md)（追踪受伤次数，触发全体圣诰）

## 源码

- `SeerGodFuneral.cs`
