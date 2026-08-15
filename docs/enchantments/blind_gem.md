# 失明宝石

<img src="/images/enchantments/seer_blind_gem.png" alt="失明宝石" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

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

打出时，对目标施加<span style="color:#3aa675;font-weight:600">3</span>回合[<span style="color:#d44;font-weight:600">失明</span>](/powers/blind_power.md)。

## 详细机制

- **触发时机**：卡牌打出时触发
- **目标选取**：
  - 若卡牌目标为"所有敌方"，则作用于所有敌人
  - 若卡牌有指定目标，则作用于该目标
  - 否则默认作用于所有敌人
- **施加状态**：对目标施加对应状态，持续 3 回合
- **可附魔牌类型**：攻击 / 技能 / 能力

## 相关状态

- [失明](/powers/blind_power.md)：异常状态（Debuff）。持有者攻击时 <span style="color:#3aa675;font-weight:600">50</span>% 概率改为自伤原伤害的 <span style="color:#3aa675;font-weight:600">20</span>%，否则攻击伤害降低 <span style="color:#3aa675;font-weight:600">50</span>%；每回合末层数 -1

## 小贴士

- **双向随机削弱**：失明每次攻击 50% 概率自伤（反伤效果）、50% 概率降伤，对方越攻击越可能受伤，适合压制高攻速敌人。
- **对玩家同样生效**：失明对玩家也生效（玩家攻击 50% 自伤），需注意对方也会施加失明反制玩家。

## 源码

- `SeerBlindGem.cs`（继承 `SeerStatusGemEnchantment<SeerBlindPower>`）
