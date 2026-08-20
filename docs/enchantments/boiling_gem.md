# 沸涌宝石

<img src="/images/enchantments/seer_boiling_gem.png" alt="沸涌宝石" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

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

打出时，对目标施加<span style="color:#3aa675;font-weight:600">3</span>回合[<span style="color:#d44;font-weight:600">沸涌</span>](/powers/boiling_power.md)。

## 详细机制

- **触发时机**：卡牌打出时触发
- **目标选取**：
  - 若卡牌目标为"所有敌方"，则作用于所有敌人
  - 若卡牌有指定目标，则作用于该目标
  - 否则默认作用于所有敌人
- **施加状态**：对目标施加对应状态，持续 3 回合
- **可附魔牌类型**：攻击 / 技能 / 能力

## 相关状态

- [沸涌](/powers/boiling_power.md)：异常状态（Debuff）。持有者受到的攻击伤害至少为 <span style="color:#3aa675;font-weight:600">5</span> 点；受到[暴击](/powers/critical_strike_power.md)时暴击倍率提升至 <span style="color:#3aa675;font-weight:600">2</span> 倍；每回合末层数 -1

## 小贴士

- **伤害下限封锁**：沸涌让目标受到的攻击伤害至少 5 点，克制低伤多段攻击（如多段 1-2 伤害的攻击），让每次命中都强制达到下限。
- **暴击协同**：沸涌状态下目标被暴击时倍率从 1.5 倍提升至 2 倍——先挂沸涌再打暴击，高伤攻击反而被进一步放大，不只设下限。

## 源码

- `SeerBoilingGem.cs`（继承 `SeerStatusGemEnchantment<SeerBoilingPower>`）
