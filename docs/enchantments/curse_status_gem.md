# 诅咒宝石

<img src="/images/enchantments/seer_curse_status_gem.png" alt="诅咒宝石" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

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

打出时，对目标施加<span style="color:#3aa675;font-weight:600">3</span>回合[<span style="color:#d44;font-weight:600">诅咒</span>](/powers/curse_power.md)。

## 详细机制

- **触发时机**：卡牌打出时触发
- **目标选取**：
  - 若卡牌目标为"所有敌方"，则作用于所有敌人
  - 若卡牌有指定目标，则作用于该目标
  - 否则默认作用于所有敌人
- **施加状态**：对目标施加对应状态，持续 3 回合
- **可附魔牌类型**：攻击 / 技能 / 能力

## 相关状态

- [诅咒](/powers/curse_power.md)：异常状态（Debuff）。持有者攻击伤害降低 <span style="color:#3aa675;font-weight:600">10</span>%；玩家回合开始生成 1 张本回合免费[诅咒卡](../cards/curse/)，怪物回合末受到 <span style="color:#3aa675;font-weight:600">3~50</span> 随机伤害（1% 概率 50、9% 概率 8、40% 概率 5、其余 3）；每回合末层数 -1

## 小贴士

- **对玩家双刃剑**：诅咒对玩家回合开始生成 1 张免费诅咒卡，可能污染手牌；但同时降攻 10%，对玩家也是降伤反制。
- **对怪物收益高**：诅咒对怪物每回合随机伤害（3~50），1% 概率打出 50 点高伤，长线战期望收益可观。

## 源码

- `SeerCurseStatusGem.cs`（继承 `SeerStatusGemEnchantment<SeerCursePower>`）
