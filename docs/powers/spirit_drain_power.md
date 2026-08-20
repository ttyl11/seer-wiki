# 耗灵

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物随机池——[群星的礼赠](/relics/starter/elemental_core.md)随机能力池赋予怪物（遭遇时按概率自带，概率随探索房间数增长）

<img src="/images/powers/spirit_drain_power.png" alt="耗灵" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 单例（不可叠加）
- **可见**: 是

## 描述

在你的回合开始时，随机清空对手一张<span style="color:#d4a017;font-weight:600">PP牌</span>的<span style="color:#d4a017;font-weight:600">PP</span>。

## 详细机制

- **回合开始定点清除**：持有者（怪物）自己回合开始时（`AfterSideTurnStart`），对**每个玩家**各随机挑一张 PP 牌（抽牌堆 + 手牌 + 弃牌堆三堆合集中 `Pp > 0` 的），PP 直接**清零**（`ForceSetPp(0)`）。
- **清零不是 -1**：与[暗滞](/powers/dark_stagnation_power.md)的"随机 -1"完全不同量级——PP5 牌被盯上等于**全部 5 次使用机会一次性蒸发**。
- **随机不可引导**：三堆等概率抽取（`Rng.CombatCardSelection`）——囤手牌、藏关键牌都没有保护作用。
- **双人模式双倍伤**：逻辑逐玩家独立执行——每个玩家每回合各被清空一张。

## 小贴士

- **PP 体系的头号杀手**：每回合稳定蒸发一张 PP 牌的全部剩余次数——3 回合平均废掉 3 张 PP 牌。PP 流卡组遇到耗灵怪，**第一优先集火目标就是它**，拖得越久账越亏。
- **高 PP 牌最伤**：PP5 续航牌（如[光之盾](/cards/character/light_shield.md)）单张被清就是 5 次使用机会归零——打出顺序上优先倾泻大 PP 牌，缩小被清空的单张损失。
- **与暗滞的应对差异**：[暗滞](/powers/dark_stagnation_power.md)（打牌时随机 -1）靠"少打牌慢节奏"能拖；耗灵按回合固定结算——**拖字诀无效**，只有速杀。
- **无牌可清时空转**：三堆里没有 PP > 0 的牌时本回合什么都不做——非 PP 卡组几乎无视此词缀。

## 源码

- `SeerSpiritDrainPower.cs`（`AfterSideTurnStart`：三堆合集过滤 `Pp > 0` → `Rng.CombatCardSelection.NextItem` 随机一张 → `ForceSetPp(0)`）
- 随机池配置：`SeerElementalCore.cs:69`（`0.00005/房`）
