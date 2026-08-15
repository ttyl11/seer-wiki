# 寄生宝石

<img src="/images/enchantments/seer_parasite_gem.png" alt="寄生宝石" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

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

打出时，对目标施加<span style="color:#3aa675;font-weight:600">3</span>回合[<span style="color:#d44;font-weight:600">寄生</span>](/powers/parasite_power.md)。

## 详细机制

- **触发时机**：卡牌打出时触发
- **目标选取**：
  - 若卡牌目标为"所有敌方"，则作用于所有敌人
  - 若卡牌有指定目标，则作用于该目标
  - 否则默认作用于所有敌人
- **施加状态**：对目标施加对应状态，持续 3 回合
- **可附魔牌类型**：攻击 / 技能 / 能力

## 相关状态

- [寄生](/powers/parasite_power.md)：异常状态（Debuff）。回合开始持有者受到 <span style="color:#3aa675;font-weight:600">2</span> 点伤害，并治疗所有对手 <span style="color:#3aa675;font-weight:600">2</span> 点生命；每回合末层数 -1

## 小贴士

- **吸血反向版**：寄生让目标每回合受伤 2 点并治疗其所有对手 2 点，多人战中收益放大（治疗所有队友）。
- **适合多敌人战**：附在群攻牌上让多个敌人寄生，多人战每回合治疗所有队友 2×敌人数，是强力团辅异常。

## 源码

- `SeerParasiteGem.cs`（继承 `SeerStatusGemEnchantment<SeerParasitePower>`）
