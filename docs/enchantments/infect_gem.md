# 感染宝石

<img src="/images/enchantments/seer_infect_gem.png" alt="感染宝石" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

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

打出时，对目标施加<span style="color:#3aa675;font-weight:600">3</span>回合[<span style="color:#d44;font-weight:600">感染</span>](/powers/infect_power.md)。

## 详细机制

- **触发时机**：卡牌打出时触发
- **目标选取**：
  - 若卡牌目标为"所有敌方"，则作用于所有敌人
  - 若卡牌有指定目标，则作用于该目标
  - 否则默认作用于所有敌人
- **施加状态**：对目标施加对应状态，持续 3 回合
- **可附魔牌类型**：攻击 / 技能 / 能力

## 相关状态

- [感染](/powers/infect_power.md)：异常状态（Debuff）。持有者攻击伤害降低 <span style="color:#3aa675;font-weight:600">20</span>%；回合末施加 <span style="color:#3aa675;font-weight:600">2</span> 层[中毒](/powers/poison_power.md)；每回合末层数 -1

## 小贴士

- **毒系扩散**：感染回合末自动转 2 层中毒，形成"感染→中毒"的扩散链，与[焚烬](/powers/ash_power.md)（→烧伤）形成平行机制。
- **降攻+持续伤害双效**：感染既降攻 20%（与中毒的持续伤害叠加），适合压制 Boss 长线战。

## 源码

- `SeerInfectGem.cs`（继承 `SeerStatusGemEnchantment<SeerInfectPower>`）
