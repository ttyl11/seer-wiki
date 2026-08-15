# 燃料

> 原版衍生卡牌（Fuel）

## 基本信息

- **类型**: 原版衍生卡牌
- **卡牌类型**: 技能
- **稀有度**: 衍生（Token）
- **目标**: 自身
- **耗能**: <span style="color:#3aa675;font-weight:600">0</span>
- **关键词**: [消耗](/mechanics/exhaust.md)
- **本地化来源**: 原版卡牌池

## 描述

获得 <span style="color:#3aa675;font-weight:600">1</span> 点[能量](/mechanics/energy.md)，抽 <span style="color:#3aa675;font-weight:600">1</span> 张牌。消耗。

## 详细机制

- **零耗能**: 燃料本身不消耗能量，打出后反而获得 1 点能量，等于净增 1 能量。
- **附带抽牌**: 除获得能量外，还抽 1 张牌，补充手牌资源。
- **消耗**: 打出后进入[消耗牌堆](/mechanics/exhaust_pile.md)，本场战斗不再可用。
- **升级效果**: 升级后抽牌数 +1（变为抽 2 张牌），能量不变。

## 相关机制

- [能量](/mechanics/energy.md)（燃料获得的核心资源）
- [消耗](/mechanics/exhaust.md)（燃料的关键词）
- [消耗牌堆](/mechanics/exhaust_pile.md)（燃料打出后进入的牌堆）

## 源码

- `Fuel.cs`（原版卡牌定义——0 耗能、消耗、获得能量+抽牌）
- `TokenCardPool.cs`（衍生卡牌池注册）
