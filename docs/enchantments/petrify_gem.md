# 石化宝石

<img src="/images/enchantments/seer_petrify_gem.png" alt="石化宝石" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

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

打出时，对目标施加<span style="color:#3aa675;font-weight:600">3</span>回合[<span style="color:#d44;font-weight:600">石化</span>](/powers/petrify_power.md)。

## 详细机制

- **触发时机**：卡牌打出时触发
- **目标选取**：
  - 若卡牌目标为"所有敌方"，则作用于所有敌人
  - 若卡牌有指定目标，则作用于该目标
  - 否则默认作用于所有敌人
- **施加状态**：对目标施加对应状态，持续 3 回合
- **可附魔牌类型**：攻击 / 技能 / 能力

## 相关状态

- [石化](/powers/petrify_power.md)：异常状态（Debuff）。持有者攻击伤害降低 <span style="color:#3aa675;font-weight:600">70</span>%；攻击后获得原伤害值 <span style="color:#3aa675;font-weight:600">70</span>% 的[格挡](/mechanics/block.md)；每回合末层数 -1

## 小贴士

- **最强降攻异常**：石化降攻 70%，是所有降攻异常中幅度最大的，单层即可让 Boss 输出近乎归零。
- **降攻附带反坦**：石化目标攻击后还会获得 70% 原伤害的格挡，对方越打越硬，适合压制多段攻击型敌人。

## 源码

- `SeerPetrifyGem.cs`（继承 `SeerStatusGemEnchantment<SeerPetrifyPower>`）
