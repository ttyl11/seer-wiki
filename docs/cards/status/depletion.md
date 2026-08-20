# 枯竭

<img src="/images/cards/depletion.png" alt="枯竭" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 状态牌
- **能量消耗**: 不可打出
- **类型**: 状态
- **稀有度**: 状态
- **目标**: 无
- **关键词**: [不能被打出](/mechanics/unplayable.md)
- **可升级**: 否

### 数值参数

| 参数 | 数值 |
|---|---|
| 下回合能量损失 | 1（每张叠加） |

## 描述

在你的回合结束时，若此牌在你[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)中，你下回合开始时[<span style="color:#d4a017;font-weight:600">能量</span>](/mechanics/energy.md)-<span style="color:#3aa675;font-weight:600">1</span>。

## 小贴士

- **惩罚在"回合结束还在手"时记账**：判定时点是回合结束的[手牌](/mechanics/hand.md)——回合结束前通过消耗、变牌等效果把它移出手牌，就不吃下回合的[能量](/mechanics/energy.md)惩罚；正常弃牌发生在结算之后，**弃掉它并不能免罚**。
- **多张枯竭层层叠加**：每张枯竭在回合结束独立记 1 层能量损失——手里同时攥 2 张枯竭，下回合就 −2 能量。抽牌堆里枯竭越多，能量节奏越惨。
- **惩罚是"下回合开始一次性扣能量"**：结算发生在下回合能量重置的瞬间（扣完即清账），不影响再下下个回合——只要之后没有新的枯竭滞留，能量节奏就恢复正常。
- **无法主动处理**：枯竭带[不能被打出](/mechanics/unplayable.md)关键词，自身没有消耗/虚无关键词，常规手段只能等它随弃牌循环。消耗类、变牌类效果是把它移出循环的主要出路。
- **能量管理建议**：抽到枯竭的当回合若无法消耗它，就默认接受"下回合 −1 能量"的账单，本回合把能量花干净、别留高费计划给下回合；预测到下回合要打关键组合时，优先用消耗/变牌效果清掉手里的枯竭——1 点能量差往往就是一张核心牌打不打得出来的区别。

## 相关机制

- [能量](/mechanics/energy.md)（下回合开始时损失）
- [手牌](/mechanics/hand.md)（回合结束判定位置）
- [不能被打出](/mechanics/unplayable.md)（无法主动打出）

## 源码

- `SeerDepletion.cs`
- `SeerDepletionPower.cs`（能量扣除的隐藏状态）
