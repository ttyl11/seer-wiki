# 流血宝石

<img src="/images/enchantments/seer_bleed_gem.png" alt="流血宝石" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 状态宝石附魔
- **可附魔牌类型**: 攻击 / 技能 / 能力
- **显示数量**: 否
- **额外卡牌文本**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| 持续回合 | 3 |

## 描述

打出时，对目标施加<span style="color:#3aa675;font-weight:600">3</span>回合[<span style="color:#d44;font-weight:600">流血</span>](/powers/bleed_power.md)。

## 详细机制

- **触发时机**：卡牌打出时触发
- **目标选取**：
  - 若卡牌目标为"所有敌方"，则作用于所有敌人
  - 若卡牌有指定目标，则作用于该目标
  - 否则默认作用于所有敌人
- **施加状态**：对目标施加对应状态，持续 3 回合
- **可附魔牌类型**：攻击 / 技能 / 能力

## 相关状态

- [流血](/powers/bleed_power.md)：异常状态（Debuff）。回合末受到等于当前层数的伤害；受到伤害时层数 +<span style="color:#3aa675;font-weight:600">1</span>；每回合末层数 -1

## 小贴士

- **层数自我放大**：流血目标每受一次伤害层数 +1，配合多段攻击（如[百鬼夜行](../cards/character/hundred_ghosts.md)）可快速堆叠层数，回合末一次性爆发伤害。
- **不适合开场**：流血初始层数低（3 回合 = 3 层），首回合伤害只有 3，需多段攻击叠加后才显威力。

## 源码

- `SeerBleedGem.cs`（继承 `SeerStatusGemEnchantment<SeerBleedPower>`）
