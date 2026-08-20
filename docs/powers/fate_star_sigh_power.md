# 命寻星叹

> **归属**：玩家可施加
> **施加来源**：玩家获得——[岳·命寻星叹](/cards/event/yue_fate_star_sigh.md)（卡牌）

<img src="/images/powers/fate_star_sigh_power.png" alt="命寻星叹" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 单次生效
- **可见**: 是
- **来源**: mod

## 描述

下个回合所有牌会多打出一次。

## 详细机制

- **施加时机**：打出[岳·命寻星叹](/cards/event/yue_fate_star_sigh.md)时对自身施加 1 层，当回合不生效。
- **激活时机**：下一次**自身回合开始**时激活（闪现提示），激活期间你打出的每一张牌（含自动打出的牌）**结算次数 +1**——即打一张牌、效果执行两遍，与原版"爆发"同款机制。
- **移除时机**：激活后的自身回合结束时移除自身，只生效一个回合。
- **叠加特性**：单次生效型，重复施加不叠加层数。

## 相关卡牌

- [岳·命寻星叹](/cards/event/yue_fate_star_sigh.md)（唯一来源：打出时施加；配合其[悼](/mechanics/mourning.md)关键词，瓦库代打的牌同样吃双倍结算）

## 源码

- `SeerFateStarSighPower.cs`
- `SeerYueFateStarSigh.cs`
