# 能量

## 基本信息

- **类型**: 原版资源机制
- **本地化来源**: `static_hover_tips.json` 的 `ENERGY`

## 描述

能量是杀戮尖塔2的核心资源机制。每回合开始时，玩家获得一定数量的能量（基础为 <span style="color:#3aa675;font-weight:600">3</span> 点）。打出卡牌通常需要消耗能量。未使用的能量在回合结束时清空。

## 详细机制

- **获取能量**：通过卡牌、遗物等效果获得能量。
  - 能量可以超过回合基础值（如通过卡牌、遗物额外获得）。
  - 部分卡牌会获得大量能量（如 [无尽能源](/cards/colorless/endless_energy.md) 获得 <span style="color:#3aa675;font-weight:600">999</span> 点能量）。
- **消耗能量**：打出卡牌时，根据卡牌的耗能消耗对应能量。
  - 部分卡牌的耗能会动态变化（如 [荒烬涂天](/cards/character/desolate_ash_sky.md) 的耗能 = 基础耗能 + 手牌数量）。
  - [先制](/powers/first_strike_power.md) 能力可以使下一张牌耗能 -<span style="color:#3aa675;font-weight:600">1</span>。
- **回合清空**：回合结束时，未使用的能量会清空（除非有特殊遗物保留）。
- **能量与PP的区别**：
  - **能量**：原版资源机制，每回合恢复，用于打出卡牌。
  - **PP**：mod 专有资源机制，参见 [PP系统](/mechanics/pp-system.md)。部分 mod 卡牌同时消耗能量和 PP。

## 相关卡牌

- [无尽能源](/cards/colorless/endless_energy.md)：获得 999 点能量
- [电脉充能](/cards/character/electric_pulse_charge.md)：获得 3 点能量
- [能量](/cards/basic/energy.md)：与能量相关的卡牌
- [能量护盾](/cards/character/energy_shield.md)：与能量相关的卡牌
- [能量供给](/cards/character/energy_supply.md)：与能量相关的卡牌
- [能量孕育](/cards/character/energy_nurture.md)：与能量相关的卡牌

## 源码

- `PlayerCmd.cs`（原版）
- `EnergyCost.cs`（原版）
