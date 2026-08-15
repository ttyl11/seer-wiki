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

- **邪魇形态**：打出后进入[邪魇形态](/powers/evil_form_power.md)，免疫属性下降（力量/敏捷/防御/命中/速度的减少），受到伤害减少<span style="color:#3aa675;font-weight:600">25</span>%，攻击造成伤害时对目标施加邪诲，受到敌人伤害时对伤害来源施加圣诰。
- **受伤触发圣诰**：进入邪魇形态后，自身下 2 次受到伤害时，为所有敌人施加 3 层[圣诰](/powers/holy_edict_power.md)。圣诰使敌人受到攻击时有概率陷入疲惫。升级后触发次数从 2 提升至 4。
- **邪魇形态自身也产圣诰**：邪魇形态本身在受到敌人伤害时就会对伤害来源施加 1 层圣诰——配合神明送葬的受伤触发效果，受伤时同时产出圣诰（全体3层 + 来源1层）。
- **主动受击策略**：打出后可以在敌人攻击次数多的回合最大化收益——每次受击都给全体敌人3层圣诰。2次受击 = 全体6层圣诰，4次 = 全体12层。
- **配合建议**：配合能多次受击的卡组（高格挡/回血），在承受伤害的同时叠加全体圣诰。邪魇形态的减伤效果让你更容易存活触发全部次数。
- **升级的关键性**：受伤触发次数从 2 提升至 4，收益翻倍。升级优先级高——能力牌升级后整场战斗有效。
- **性价比**：1 费进入邪魇形态 + 2 次受伤全体3层圣诰，攻防一体性价比高。

## 相关能力

- [邪魇形态](/powers/evil_form_power.md)（免疫属性下降，减伤，攻击施加邪诲，受击施加圣诰）
- [圣诰](/powers/holy_edict_power.md)（受攻击时有概率疲惫）
- [神明送葬](/powers/god_funeral_power.md)（追踪受伤次数，触发全体圣诰）

## 源码

- `SeerGodFuneral.cs`
