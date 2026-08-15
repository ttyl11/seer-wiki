# 节制

<img src="/images/relics/tarot_temperance.png" alt="节制" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 塔罗遗物
- **稀有度**: 普通

## 描述

回合开始时，从[消耗](/mechanics/exhaust.md)牌堆随机将1张牌放入[手牌](/mechanics/hand.md)。<br/>若该牌为<span style="color:#9b59b6;font-weight:600">PP牌</span>，将其[PP](/mechanics/pp-system.md)回满。

- **触发时机**：自己回合开始。
- **PP回满**：若选中的牌为 PP 牌，将其 PP 回满。
- **空堆不触发**：[消耗](/mechanics/exhaust.md)牌堆为空时不触发。

## 风味文字

<span style="color:#d44;font-weight:600">节制。</span>

## 小贴士

- **消耗牌回收**：回合开始时从[消耗](/mechanics/exhaust.md)牌堆随机抽1张牌回手。每回合稳定回收1张被消耗的牌，等于变相扩大手牌来源。
- **PP回满**：若回收的是PP牌，PP直接回满。对依赖PP机制的卡组是免费充电。
- **随机性**：回收哪张完全随机，无法指定。消耗牌堆越大，随机性越强，关键牌不一定能回手。
- **联动思路**：消耗流卡组的核心续航件——主动消耗高价值牌后靠它循环复用；搭配PP牌消耗流派，回满PP等于无限弹药。
- **性价比**：普通遗物里独特的资源循环件，消耗牌多的卡组收益极高。消耗牌堆常空的卡组则完全不触发，等于白板。

## 源码

- `SeerTarotTemperance.cs`
