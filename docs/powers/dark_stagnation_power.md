# 幽滞

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物随机池——[群星的礼赠](/relics/starter/elemental_core.md)随机能力池赋予怪物（遭遇时按概率自带，概率随探索房间数增长）

<img src="/images/powers/dark_stagnation_power.png" alt="幽滞" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 叠加
- **可见**: 是

## 描述

对手每打出一张牌，降低对手任意卡牌<span style="color:#3aa675;font-weight:600">1</span>点<span style="color:#d4a017;font-weight:600">PP</span>。

## 详细机制

- **打牌即烧 PP**：`AfterCardPlayed` 钩子——**玩家每打出一张牌**，从玩家的抽牌堆 + 手牌 + 弃牌堆（三堆合集）中**随机**挑一张 PP > 0 的 PP 牌，PP 直接 -1（最低归 0）。
- **随机不可控**：选牌走 `Rng.CombatCardSelection`（多人同步），你无法指定烧哪张——核心 PP 引擎牌随时可能被点。
- **每张牌独立触发**：一回合打 8 张牌 = 随机烧 8 次 PP——出牌越多损失越大。
- **持续时间 = 层数**：怪物（持有者）自己回合结束时层数 -1——N 层幽滞 = 覆盖 N 个怪物回合周期，期间玩家打牌持续被烧。

## 小贴士

- **PP 引擎的隐形税**：[PP 牌](/mechanics/pp-system.md)是"单场可重复打出"的续航核心，幽滞期间每张 PP 牌的剩余次数都在被随机蚕食——依赖[光之盾](/cards/character/light_shield.md)类 PP 续航的构筑，遇到幽滞怪实际战力大打折扣。
- **节奏取舍**：幽滞持续期间"多打牌"与"保 PP"直接冲突——最划算的处理是**第一回合集火秒掉持有者**（层数随它死亡清空），而不是省着不打（省牌换不回已烧掉的 PP）。
- **烧到 0 不亏停**：PP 归 0 的 PP 牌不再进入随机池（只选 PP > 0），所以核心牌被烧空前每张牌都有风险——爆发回合尽量安排在幽滞到期（层数耗尽）之后。

## 源码

- `SeerDarkStagnationPower.cs`（`AfterCardPlayed` 对敌方玩家触发，`Rng.CombatCardSelection.NextItem` 随机选牌 + `ForceSetPp`；`AfterSideTurnEnd` 层数 -1）
