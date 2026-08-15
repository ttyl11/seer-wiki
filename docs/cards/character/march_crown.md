# 三月的皇冠

<img src="/images/cards/march_crown.png" alt="三月的皇冠" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 1
- **能量消耗**: 2
- **类型**: 能力
- **稀有度**: 罕见
- **目标**: 自身
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| PP | 1 | 1 |
| 最大PP | 1 | 1 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 自身所有攻击牌获得[<span style="color:#d4a017;font-weight:600">饮血</span>](/mechanics/vampiric.md)。

## 升级后

<span style="color:#d4a017;font-weight:600">固有</span>。PP: <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 自身所有攻击牌获得[<span style="color:#d4a017;font-weight:600">饮血</span>](/mechanics/vampiric.md)。

## 小贴士

- **所有攻击牌变吸血——每次攻击都是"打人 + 回血"**：打出后自身所有攻击牌（手牌、抽牌堆、弃牌堆中的）全部获得[饮血](/mechanics/vampiric.md)，造成伤害时回复伤害值 <span style="color:#3aa675;font-weight:600">20</span>% 的生命值。伤害越高回血越多，把攻击牌从纯输出变成输出 + 续航双重收益。
- **每回合自动刷新新抽的攻击牌**：能力在每回合开始时重新检查所有攻击牌——新抽到的攻击牌也会自动获得饮血，不需要重新打出这张能力牌。
- **是增益，能被消增益清除**：皇冠是增益类型能力，整场战斗持续，但被消除增益的效果（如敌人的消增益技能）会直接清掉，所有攻击牌失去饮血。
- **多段攻击牌回血最猛**：饮血按每次造成伤害单独结算——多段攻击牌每一段都触发 <span style="color:#3aa675;font-weight:600">20</span>% 回血，多段高伤攻击牌一张就能回大量血。
- **升级固有让首回合就能启动**：升级后获得[固有](/mechanics/innate.md)，战斗开始即入手牌。能力牌最怕的就是抽不到，固有直接解决启动问题——首回合打出，整场战斗享受饮血续航。
- **性价比**：<span style="color:#3aa675;font-weight:600">2</span> 费换整场战斗所有攻击牌饮血，攻击流派续航核心的合理定价，升级固有让启动更快。

## 相关能力

- [皇冠](/powers/march_crown_power.md)：增益，使自身所有攻击牌获得饮血
- [饮血](/mechanics/vampiric.md)：关键词，造成伤害时回复 20% 生命值

## 源码

- `SeerMarchCrown.cs`
