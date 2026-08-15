# 冷却时间

<img src="/images/enchantments/seer_cooldown_time_enchantment.png" alt="冷却时间" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 特殊附魔
- **可附魔牌类型**: 攻击 / 技能 / 能力
- **显示数量**: 是
- **额外卡牌文本**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| 重放次数（Times） | 1 |

## 描述

这张牌获得[<span style="color:#d4a017;font-weight:600">重放</span>](/mechanics/replay.md)+<span style="color:#3aa675;font-weight:600">1</span>，然后[<span style="color:#d4a017;font-weight:600">消耗</span>](/mechanics/exhaust.md)。

## 详细机制

- **附魔时**：卡牌立即获得[消耗](/mechanics/exhaust.md)关键词。
- **重放增加**：打出时重放次数 +1（`EnchantPlayCount = originalPlayCount + Times`），即此牌会被打出 2 次（原 1 次 + 重放 1 次），然后消耗。
- **可附魔牌类型**：攻击 / 技能 / 能力（CardType 1-3，扩展支持能力牌，如禁忌魔典）。
- **悬停提示**：鼠标悬停可查看重放次数与消耗说明。

## 小贴士

- **双倍触发换消耗**：冷却时间让卡牌打出 2 次（原 1+重放 1）后消耗，是"双倍效果换一次性"的附魔——适合附在强力一次性卡牌上爆发。
- **与[华彩](./glam.md)对比**：华彩每场战斗重放 1 次但不消耗（可下回合再触发），冷却时间重放 1 次后消耗（一次性）——冷却时间更爆发，华彩更续航。

## 相关关键词

- [重放](/mechanics/replay.md)：打出后额外重放 1 次
- [消耗](/mechanics/exhaust.md)：附魔后获得消耗关键词

## 源码

- `SeerCooldownTimeEnchantment.cs`
