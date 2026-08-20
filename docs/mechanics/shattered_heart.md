# 碎心

> mod 关键词（SEER_KEYWORD_SHATTERED_HEART）

## 基本信息

- **类型**: mod 卡牌关键词
- **来源**: mod 自定义关键词

## 描述

打出时，失去 <span style="color:#3aa675;font-weight:600">2</span> 点最大生命值。

## 详细机制

- **触发时机**：在卡牌打出前触发，确保在牌效果（包括攻击伤害）之前执行，避免终结对手时漏扣血。
- **失去最大生命值**：直接减少最大生命值上限，不受[格挡](/mechanics/block.md)或伤害减免能力影响。
- **失去数值**：固定 <span style="color:#3aa675;font-weight:600">2</span> 点。
- **与恢复机制配合**：失去的最大生命值在战斗内不会自动恢复，需通过特定效果（如某些卡牌的回复效果）才能恢复。
- **跨战斗持久化**：失去的最大生命值会持续到整局游戏结束（除非有特殊恢复机制）。
- **升级移除**：部分卡牌升级后会移除碎心关键词。

## 相关卡牌

- [魔·决裂黎明](/cards/character/demon_breaking_dawn.md)（升级后移除碎心）
- [婵·命定星缘](/cards/token/destined_star_bond.md)（衍生卡，带有碎心）

## 源码

- `SeerKeywordCardModel.cs`（基类）
- `SeerKeywordEffectManager.cs`
- `card_keywords.json`（本地化）
