# 狂能激发

<img src="/images/cards/frenzy_excitation.png" alt="狂能激发" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 5
- **能量消耗**: 0
- **类型**: 技能
- **稀有度**: 普通
- **目标**: 无
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 敌人狂暴层数 | 6 | 4 |
| 获得能量 | 5 | 5 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 场上所有敌人获得<span style="color:#3aa675;font-weight:600">6</span>层<span style="color:#9b59b6;font-weight:600">狂暴</span>。获得<span style="color:#3aa675;font-weight:600">5</span>点<span style="color:#d4a017;font-weight:600">能量</span>。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 场上所有敌人获得<span style="color:#3aa675;font-weight:600">4</span>层<span style="color:#9b59b6;font-weight:600">狂暴</span>。获得<span style="color:#3aa675;font-weight:600">5</span>点<span style="color:#d4a017;font-weight:600">能量</span>。

## 小贴士

- **高风险高回报**：0 费换 5 点能量——但代价是所有敌人获得 6 层[狂暴](/powers/fury_power.md)（每层攻击伤害 +25%，6 层 = +150%）。敌人接下来的攻击伤害提升 150%，持续 6 回合（每回合结束 -1 层）。
- **层数即持续回合**：狂暴 6 层意味着敌人持续 6 回合享受攻击伤害加成。第一回合最危险（+150%），之后逐回合递减（5 层 +125%，4 层 +100%...）。
- **使用时机**：最佳时机是敌人即将死亡或无法攻击时——用 5 点能量在一回合内击杀敌人，让狂暴来不及发挥作用。避免在敌人存活能力强时使用，否则 6 回合的 +150% 攻击会压垮你的防御。
- **升级降低风险**：升级后狂暴从 6 层降至 4 层（+100% 而非 +150%），持续时间从 6 回合缩至 4 回合。能量收益不变（5 点）。升级是"减少代价"而非"增加收益"。
- **配合建议**：配合高爆发攻击牌在一回合内清场，让狂暴层数来不及产生影响。配合[格挡](/mechanics/block.md)牌和[力量](/powers/strength_power.md)增益可以同时攻防兼顾。
- **升级的关键性**：狂暴层数从 6 降至 4，风险降低 33%。0 费牌升级优先级高——不影响能量节奏，纯降风险。
- **性价比**：0 费换 5 能量，代价是敌人攻击伤害 +150%（升级后 +100%）。适合爆发清场节奏，不适合持久战。

## 相关能力

- [狂暴](/powers/fury_power.md)（每层攻击伤害 +25%，回合结束 -1 层）

## 相关机制

- [能量](/mechanics/energy.md)（获得 5 点能量）

## 源码

- `SeerFrenzyExcitation.cs`
