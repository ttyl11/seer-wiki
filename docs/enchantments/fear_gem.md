# 害怕宝石

<img src="/images/enchantments/seer_fear_gem.png" alt="害怕宝石" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

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

打出时，对目标施加<span style="color:#3aa675;font-weight:600">3</span>回合[<span style="color:#d44;font-weight:600">害怕</span>](/powers/fear_power.md)。

## 详细机制

- **触发时机**：卡牌打出时触发
- **目标选取**：
  - 若卡牌目标为"所有敌方"，则作用于所有敌人
  - 若卡牌有指定目标，则作用于该目标
  - 否则默认作用于所有敌人
- **施加状态**：对目标施加对应状态，持续 3 回合
- **可附魔牌类型**：攻击 / 技能 / 能力

## 相关状态

- [害怕](/powers/fear_power.md)：异常状态（Debuff）。持有者攻击伤害降低 <span style="color:#3aa675;font-weight:600">30</span>%；每回合末层数 -1

## 小贴士

- **纯输出压制**：害怕仅降低攻击伤害 30%/层，是单一降伤异常，适合压制高攻单体敌人。
- **可与多异常叠加**：害怕不与其他降攻异常冲突，可同时叠加[烧伤](/powers/burn_power.md)、[瘫痪](/powers/paralysis_power.md)等形成多层降攻。

## 源码

- `SeerFearGem.cs`（继承 `SeerStatusGemEnchantment<SeerFearPower>`）
