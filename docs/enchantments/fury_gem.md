# 狂暴宝石

<img src="/images/enchantments/seer_fury_gem.png" alt="狂暴宝石" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

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

打出时，获得<span style="color:#3aa675;font-weight:600">3</span>回合[<span style="color:#9b59b6;font-weight:600">狂暴</span>](/powers/fury_power.md)。

## 详细机制

- **触发时机**：卡牌打出时触发
- **施加状态**：对自身施加对应状态，持续 3 回合
- **可附魔牌类型**：攻击 / 技能 / 能力

## 相关状态

- [狂暴](/powers/fury_power.md)：异常状态（Buff）。持有者攻击伤害每层 +<span style="color:#3aa675;font-weight:600">25</span>%；每回合末层数 -1

## 小贴士

- **自身增益**：狂暴宝石对**自身**施加狂暴（与其他状态宝石对敌方施加不同），是少数增益型状态宝石之一。
- **适合高伤攻击**：附在高伤攻击牌上，3 回合内自身攻击伤害 +25%/层，多回合叠加层数后伤害放大显著。

## 源码

- `SeerFuryGem.cs`（重写 OnPlay，对自身施加 `SeerFuryPower`）
