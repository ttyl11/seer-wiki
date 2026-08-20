# 迅捷III

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物随机池——[群星的礼赠](/relics/starter/elemental_core.md)随机能力池赋予怪物（遭遇时按概率自带，概率随探索房间数增长）

<img src="/images/powers/swift_three_power.png" alt="迅捷III" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 单例（不可叠加）
- **可见**: 是

## 描述

每场战斗开始时获得<span style="color:#3aa675;font-weight:600">2</span>层<span style="color:#d4a017;font-weight:600">先制</span>。

## 详细机制

- **开局给怪物挂 2 层先制**：`BeforeCombatStart` 时给**怪物自己**施加 <span style="color:#3aa675;font-weight:600">2</span> 层[先制](/powers/first_strike_power.md)——敌方持有的先制是**反制效果**：你打出的卡牌耗能每层 <span style="color:#d44;font-weight:600">+1</span>。
- **第一张牌 +2 费**：2 层一次性压在你的首张牌上——0 费变 2 费、1 费变 3 费；打出任意一张牌后先制**全部移除**，之后整场不再触发。
- **多怪叠加**：两只迅捷III 同场 = 首张牌 +<span style="color:#d44;font-weight:600">4</span> 费（4 费牌直接变 8 费，几乎不可打出）。

## 小贴士

- **垫牌优先级拉满**：+2 费税比[迅捷I](/powers/swift_one_power.md)重一倍——开局第一张**必须**是 0 费牌（变 2 费踩掉全部 2 层）；0 费牌被 +2 后仍是最低代价，1 费以上硬吃会直接打乱前两回合节奏。
- **手里没低费牌时的取舍**：宁可首回合空过攒牌，也别让核心启动牌（3 费变 5 费）吃满税——第二回合先制已消失，满费启动更顺。
- **一次性威胁**：踩掉后整场无影响——迅捷III 是"开局下马威"，扛过第一张牌就赢了一半；持久战压力反而低于[迅捷II](/powers/swift_two_power.md)的每回合税。

## 源码

- `SeerSwiftThreePower.cs`（`BeforeCombatStart`，`Apply<SeerFirstStrikePower>` 2 层）
- 先制结算：`SeerFirstStrikePower.cs`（敌方持有时玩家耗能 +层数；玩家打出任意牌后移除）
- 随机池配置：`SeerElementalCore.cs:88`（`0.00001/房`）
