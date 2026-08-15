# 烧伤宝石

<img src="/images/enchantments/seer_burn_gem.png" alt="烧伤宝石" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

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

打出时，对目标施加<span style="color:#3aa675;font-weight:600">3</span>回合[<span style="color:#d44;font-weight:600">烧伤</span>](/powers/burn_power.md)。

## 详细机制

- **触发时机**：卡牌打出时触发
- **目标选取**：
  - 若卡牌目标为"所有敌方"，则作用于所有敌人
  - 若卡牌有指定目标，则作用于该目标
  - 否则默认作用于所有敌人
- **施加状态**：对目标施加对应状态，持续 3 回合
- **可附魔牌类型**：攻击 / 技能 / 能力

## 相关状态

- [烧伤](/powers/burn_power.md)：异常状态（Debuff）。回合开始受到 <span style="color:#3aa675;font-weight:600">3</span> 点伤害；持有者攻击伤害固定降低 <span style="color:#3aa675;font-weight:600">1</span> 点（非百分比）；每回合末层数 -1

## 小贴士

- **稳定直接伤害**：烧伤每回合固定 3 点伤害（不受力量/格挡影响），是稳定输出型异常，适合长线战。
- **可与焚烬联动**：配合[焚烬宝石](./ash_gem.md)形成火系扩散——焚烬回合末转 2 层烧伤，单次施加触发双重异常。

## 源码

- `SeerBurnGem.cs`（继承 `SeerStatusGemEnchantment<SeerBurnPower>`）
