# 蚀能1

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物随机池——[群星的礼赠](/relics/starter/elemental_core.md)随机能力池赋予怪物（遭遇时按概率自带，概率随探索房间数增长）

<img src="/images/powers/erosion_energy_one_power.png" alt="蚀能1" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 单例（不可叠加）
- **可见**: 是

## 描述

对手使用<span style="color:#d4a017;font-weight:600">PP</span>卡牌<span style="color:#d4a017;font-weight:600">消耗</span>的<span style="color:#d4a017;font-weight:600">PP</span>翻倍。

## 详细机制

- **PP 消耗 ×2**：实现位于 `SeerPpCardModel.CalculateModifiedCost`——玩家打出 [PP 牌](/mechanics/pp-system.md)时，遍历场上所有怪物，持有蚀能1 的存在使本次 PP 消耗 ×2（打一次扣 2 点 PP 而非 1 点）。
- **实时计算**：每次出牌即时检测——持有者死亡后立刻恢复正常消耗（×2 与 +N 类词缀不同，直接改乘区）。
- **只影响 PP，不影响能量**：[能量](/mechanics/energy.md)照常，亏的是 PP 牌的重复打出次数。

## 小贴士

- **续航腰斩**：PP5 的牌在蚀能1 面前只能打 2 次（消耗 2+2）——依赖 PP 牌循环的构筑等于被打了对折，斩杀前先心算每张 PP 牌的真实可用次数。
- **与[幽滞](/powers/dark_stagnation_power.md)的恐怖叠加**：幽滞烧存量 PP、蚀能翻倍消耗——双词缀齐上时 PP 体系基本瘫痪，这种遭遇必须速战速决。
- **非 PP 构筑无感**：不带 PP 牌的卡组完全不受影响——随机词缀池里这是"针对型"词缀，没被针对就当白板打。

## 源码

- `SeerErosionEnergyOnePower.cs`（空壳 Power 类，效果在 `SeerPpCardModel.CalculateModifiedCost`：`num *= 2`）
