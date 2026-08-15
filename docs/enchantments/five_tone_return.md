# 囙

<img src="/images/enchantments/seer_five_tone_return.png" alt="囙" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 五音附魔
- **可附魔牌类型**: 攻击 / 技能 / 能力
- **显示数量**: 否

## 描述

打出后，自身所有 PP 恢复 <span style="color:#3aa675;font-weight:600">1</span> 点。

## 详细机制

- **打出时触发**：当被附魔的卡牌打出时，遍历自身玩家的手牌、抽牌堆、弃牌堆中的所有卡牌。
- **筛选 PP 卡**：仅处理 PP 未满的赛尔 PP 卡。
- **恢复 PP**：每张符合条件的卡牌恢复 <span style="color:#3aa675;font-weight:600">1</span> 点 PP，但不超过最大值。
- **范围**：仅影响自身玩家拥有的卡牌，不影响对手。

## 小贴士

- **跨堆恢复PP**：囙恢复手牌、抽牌堆、弃牌堆中所有 PP 未满的赛尔 PP 卡 +1 PP，是少数能恢复抽牌堆/弃牌堆 PP 的手段。
- **适合 PP 卡多的卡组**：卡组中 PP 卡越多收益越大，配合多 PP 卡的卡组可大幅提升续航。

## 相关能力/关键词

- [PP 系统](/mechanics/pp-system.md)：本附魔恢复的卡牌资源

## 源码

- `SeerFiveToneReturn.cs`
