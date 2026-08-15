# 超频宝石

<img src="/images/enchantments/seer_overclock_gem.png" alt="超频宝石" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

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

打出时，获得<span style="color:#3aa675;font-weight:600">3</span>回合[<span style="color:#d4a017;font-weight:600">超频</span>](/powers/overclock_power.md)。

## 详细机制

- **触发时机**：卡牌打出时触发
- **施加状态**：对自身施加对应状态，持续 3 回合
- **可附魔牌类型**：攻击 / 技能 / 能力

## 相关状态

- [超频](/powers/overclock_power.md)：增益（Buff）。回合开始获得 <span style="color:#3aa675;font-weight:600">1</span> 层[先制](/powers/first_strike_power.md)（每回合固定 1 层，不随超频层数增长）；被移除时施加 <span style="color:#3aa675;font-weight:600">2</span> 层[瘫痪](/powers/paralysis_power.md)；每回合末层数 -1

## 小贴士

- **自身增益+先制联动**：超频宝石对**自身**施加超频（与其他状态宝石对敌施加不同），每回合给 1 层[先制](/powers/first_strike_power.md)让下张牌耗能 -1，适合配合高耗能连击牌。
- **注意副作用**：超频被移除时自叠 2 层[瘫痪](/powers/paralysis_power.md)，长线战需注意移除时机，避免关键回合被瘫痪反制。

## 源码

- `SeerOverclockGem.cs`（重写 OnPlay，对自身施加 `SeerOverclockPower`）
