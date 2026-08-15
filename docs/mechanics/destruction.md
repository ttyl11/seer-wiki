# 毁灭

> mod 关键词

## 基本信息

- **类型**: mod 卡牌关键词
- **来源**: mod 自定义关键词

## 描述

打出时，将你的[消耗牌堆](/mechanics/exhaust_pile.md)中的所有牌移动到[销毁牌堆](/mechanics/destroyed_pile.md)。

## 详细机制

- **触发时机**：在卡牌打出时触发（OnPlay 阶段），移动消耗堆的时机在牌效果之前。
- **依赖消耗堆计数的效果**（如屠·扼心恶世的 X 计算）能正确反映移动后的状态。
- **移动方式**：将所有消耗堆卡牌移动到销毁牌堆（不是直接移出战斗）。
- **销毁牌堆**：战斗内自定义牌堆，相当于"暂时移出游戏"，战斗结束时清空。详见 [销毁牌堆](/mechanics/destroyed_pile.md)。

::: tip 为什么移动到销毁牌堆而非直接移出
直接移出战斗（RemoveFromCombat）会让卡牌彻底脱离战斗状态，某些遍历牌堆或检查卡牌存在性的逻辑可能因此出错。移动到销毁牌堆保留了卡牌的战斗状态归属，同时让它不参与常规牌堆交互，是一种更安全的"隔离"方式。对玩家而言，销毁牌堆中的牌无法再被使用，与"移出战斗"的效果一致。
:::

## 相关机制

- [销毁牌堆](/mechanics/destroyed_pile.md)（卡牌移动的目标）
- [消耗牌堆](/mechanics/exhaust_pile.md)（被移动卡牌的来源）
- [消耗](/mechanics/exhaust.md)（卡牌进入消耗牌堆的方式）

## 源码

- `SeerKeywordEffectManager.cs`（`ApplyDestruction` 方法）
- `SeerKeywordCardModel.cs`（基类，OnPlay 中触发）
- `SeerDestroyedPileHelper.cs`（销毁牌堆注册与获取）
- `card_keywords.json`（本地化）
