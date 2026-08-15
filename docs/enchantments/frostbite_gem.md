# 冻伤宝石

<img src="/images/enchantments/seer_frostbite_gem.png" alt="冻伤宝石" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

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

打出时，对目标施加<span style="color:#3aa675;font-weight:600">3</span>回合[<span style="color:#9b59b6;font-weight:600">冻伤</span>](/powers/frostbite_power.md)。

## 详细机制

- **触发时机**：卡牌打出时触发
- **目标选取**：
  - 若卡牌目标为"所有敌方"，则作用于所有敌人
  - 若卡牌有指定目标，则作用于该目标
  - 否则默认作用于所有敌人
- **施加状态**：对目标施加对应状态，持续 3 回合
- **可附魔牌类型**：攻击 / 技能 / 能力

## 相关状态

- [冻伤](/powers/frostbite_power.md)：异常状态（Debuff）。回合开始受到 <span style="color:#3aa675;font-weight:600">5</span> 点伤害；每回合末层数 -1

## 小贴士

- **稳定直接伤害**：冻伤每回合固定 5 点伤害（不受力量/格挡影响），是稳定输出型异常，适合长线战。
- **可与冰封联动**：配合[冰封宝石](./freeze_gem.md)形成冰系扩散链——冰封回合末转 2 层冻伤，单次施加触发双重异常。

## 源码

- `SeerFrostbiteGem.cs`（继承 `SeerStatusGemEnchantment<SeerFrostbitePower>`）
