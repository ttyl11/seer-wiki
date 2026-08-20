# 炼狱

> mod 关键词

## 基本信息

- **类型**: mod 卡牌关键词
- **来源**: mod 自定义关键词

## 描述

此牌伤害翻倍。打出时，对自己施加随机 <span style="color:#3aa675;font-weight:600">1</span> 种[异常状态](/mechanics/abnormal-status.md)，持续 <span style="color:#3aa675;font-weight:600">5</span> 回合。

## 详细机制

- **伤害翻倍**：当带有炼狱关键词的卡牌由其拥有者打出且为攻击伤害时，伤害 ×2。
- **异常状态触发**：在卡牌打出时触发，确保异常状态在牌效果之前施加。
- **依赖异常层数的效果**（如炼·死镜冥啼的流失生命）能正确包含炼狱的异常层数。
- **异常状态池**：从 25 种异常状态中随机选取一种。
- **随机选取**：随机选取一种异常状态，多人模式下两端结果一致。
- **施加量**：施加 <span style="color:#3aa675;font-weight:600">5</span> 层（本地化表述为"持续 5 回合"）。
- **目标**：对自己施加。

## 相关机制

- [异常状态](/mechanics/abnormal-status.md)（25 种异常状态池）

## 源码

- `SeerKeywordEffectManager.cs`（关键词效果管理器）
- `SeerKeywordCardModel.cs`（关键词卡牌基类）
- `card_keywords.json`（本地化：`SEER_KEYWORD_PURGATORY.title` = "炼狱"）
