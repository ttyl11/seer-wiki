# 束缚宝石

<img src="/images/enchantments/seer_constrict_gem.png" alt="束缚宝石" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

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

打出时，对目标施加<span style="color:#3aa675;font-weight:600">3</span>回合[<span style="color:#d44;font-weight:600">束缚</span>](/powers/constrict_power.md)。

## 详细机制

- **触发时机**：卡牌打出时触发
- **目标选取**：
  - 若卡牌目标为"所有敌方"，则作用于所有敌人
  - 若卡牌有指定目标，则作用于该目标
  - 否则默认作用于所有敌人
- **施加状态**：对目标施加对应状态，持续 3 回合
- **可附魔牌类型**：攻击 / 技能 / 能力

## 相关状态

- [束缚](/powers/constrict_power.md)：异常状态（Debuff）。阻止持有者获得[先制](/powers/first_strike_power.md)层数（拦截 Power 施加）；每回合末层数 -1

## 小贴士

- **针对性反制**：束缚专门克制依赖先制的对手（如[仐](./five_tone_umbrella.md)附魔、[超频](/powers/overclock_power.md)能力），让其先制层数无法生效。
- **不降直接输出**：束缚不降低对方攻击伤害，对纯输出型敌人收益有限，需配合其他异常状态形成压制。

## 源码

- `SeerConstrictGem.cs`（继承 `SeerStatusGemEnchantment<SeerConstrictPower>`）
