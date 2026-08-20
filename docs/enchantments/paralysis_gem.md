# 瘫痪宝石

<img src="/images/enchantments/seer_paralysis_gem.png" alt="瘫痪宝石" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

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

打出时，对目标施加<span style="color:#3aa675;font-weight:600">3</span>回合[<span style="color:#d44;font-weight:600">瘫痪</span>](/powers/paralysis_power.md)。

## 详细机制

- **触发时机**：卡牌打出时触发
- **目标选取**：
  - 若卡牌目标为"所有敌方"，则作用于所有敌人
  - 若卡牌有指定目标，则作用于该目标
  - 否则默认作用于所有敌人
- **施加状态**：对目标施加对应状态，持续 3 回合
- **可附魔牌类型**：攻击 / 技能 / 能力

## 相关状态

- [瘫痪](/powers/paralysis_power.md)：异常状态（Debuff）。持有者攻击伤害降低 <span style="color:#3aa675;font-weight:600">10</span>%；若回合开始时上回合未造成伤害，则附加[虚弱](/powers/weak_power.md)/[易伤](/powers/vulnerable_power.md)/[缩小](/powers/shrink_power.md)各 <span style="color:#3aa675;font-weight:600">1</span> 层；每回合末层数 -1

## 小贴士

- **惩罚不输出**：瘫痪对"上回合没造成伤害"的目标追加 3 种异常，让对方越拖越弱，适合压制 Boss 或龟缩敌人。
- **适合群攻牌**：附在群攻牌上一次性瘫痪多个敌人，让多个目标陷入"输出降低+不输出受罚"的双重压制。

## 源码

- `SeerParalysisGem.cs`（继承 `SeerStatusGemEnchantment<SeerParalysisPower>`）
