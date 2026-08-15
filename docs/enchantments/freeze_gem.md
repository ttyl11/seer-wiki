# 冰封宝石

<img src="/images/enchantments/seer_freeze_gem.png" alt="冰封宝石" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

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

打出时，对目标施加<span style="color:#3aa675;font-weight:600">3</span>回合[<span style="color:#d44;font-weight:600">冰封</span>](/powers/freeze_power.md)。

## 详细机制

- **触发时机**：卡牌打出时触发
- **目标选取**：
  - 若卡牌目标为"所有敌方"，则作用于所有敌人
  - 若卡牌有指定目标，则作用于该目标
  - 否则默认作用于所有敌人
- **施加状态**：对目标施加对应状态，持续 3 回合
- **可附魔牌类型**：攻击 / 技能 / 能力

## 相关状态

- [冰封](/powers/freeze_power.md)：异常状态（Debuff）。持有者攻击伤害降低 <span style="color:#3aa675;font-weight:600">20</span>%；回合结束时施加 <span style="color:#3aa675;font-weight:600">2</span> 层[冻伤](/powers/frostbite_power.md)并移除自身

## 小贴士

- **冰系扩散**：冰封回合末自动转 2 层冻伤，形成"冰封→冻伤"的冰系扩散链，单次施加触发双重异常。
- **不递减直接移除**：冰封不像其他异常每回合 -1，而是回合末直接移除并转冻伤，扩散时机固定。

## 源码

- `SeerFreezeGem.cs`（继承 `SeerStatusGemEnchantment<SeerFreezePower>`）
