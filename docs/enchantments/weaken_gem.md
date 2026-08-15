# 衰弱宝石

<img src="/images/enchantments/seer_weaken_gem.png" alt="衰弱宝石" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

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

打出时，对目标施加<span style="color:#3aa675;font-weight:600">3</span>回合[<span style="color:#d44;font-weight:600">衰弱</span>](/powers/weaken_power.md)。

## 详细机制

- **触发时机**：卡牌打出时触发
- **目标选取**：
  - 若卡牌目标为"所有敌方"，则作用于所有敌人
  - 若卡牌有指定目标，则作用于该目标
  - 否则默认作用于所有敌人
- **施加状态**：对目标施加对应状态，持续 3 回合
- **可附魔牌类型**：攻击 / 技能 / 能力

## 相关状态

- [衰弱](/powers/weaken_power.md)：异常状态（Debuff）。持有者受到的攻击伤害每层 +<span style="color:#3aa675;font-weight:600">25</span>%（受伤放大）；每回合末层数 -1

## 小贴士

- **受伤放大**：衰弱不降低对方输出，而是放大其受到的伤害，配合高伤攻击牌可快速击杀。
- **可与易伤叠加**：衰弱与原版[易伤](/powers/vulnerable_power.md)叠加（易伤+50%、衰弱+25%/层），形成双重受伤放大。

## 源码

- `SeerWeakenGem.cs`（继承 `SeerStatusGemEnchantment<SeerWeakenPower>`）
