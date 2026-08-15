# 智能起源

<img src="/images/cards/intelligence_origin.png" alt="智能起源" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 1
- **能量消耗**: 1
- **类型**: 能力
- **稀有度**: 稀有
- **目标**: 自身
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 体力损失（×回合数） | 7 | 5 |
| 每能量所需牌数 | 2 | 2 |
| PP | 1 | 1 |
| 最大PP | 1 | 1 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 扣除自身<span style="color:#3aa675;font-weight:600">7</span>×当前回合数点体力。每打出<span style="color:#3aa675;font-weight:600">2</span>张牌，获得<span style="color:#3aa675;font-weight:600">1</span>点[能量](/mechanics/energy.md)。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 扣除自身<span style="color:#3aa675;font-weight:600">5</span>×当前回合数点体力。每打出<span style="color:#3aa675;font-weight:600">2</span>张牌，获得<span style="color:#3aa675;font-weight:600">1</span>点[能量](/mechanics/energy.md)。

## 小贴士

- **一次性扣血代价**：打出时一次性扣除 <span style="color:#3aa675;font-weight:600">7</span>×当前回合数点体力（不可格挡的非攻击伤害）。第 1 回合扣 7，第 3 回合扣 21，越晚打出代价越高。
- **持续能量生成**：获得[智能起源](/powers/intelligence_origin_power.md)能力（减益类型），每打出 <span style="color:#3aa675;font-weight:600">2</span> 张牌获得 <span style="color:#3aa675;font-weight:600">1</span> 点能量，每回合计数重置。适合低费连击流派。
- **越早打越划算**：第 1 回合打出扣 7 体力，后续回合靠能量生成回本。第 5 回合打出要扣 35 体力，代价过高。建议起手打出。
- **1 费换能量引擎**：1 费 + 体力代价换持续能量生成。配合低费牌密集出牌流派（每回合出 4-6 张牌 = 2-3 点能量），收益稳定。
- **升级降扣血**：每回合体力损失 <span style="color:#3aa675;font-weight:600">7</span> → <span style="color:#3aa675;font-weight:600">5</span>，第 5 回合打出从 35 降至 25，长战斗中显著降低代价。

## 相关能力

- [智能起源](/powers/intelligence_origin_power.md)（mod 减益，每打出 2 张牌获得 1 点能量，每回合重置计数）

## 相关机制

- [能量](/mechanics/energy.md)（每 2 张牌获得 1 点能量）

## 源码

- `SeerIntelligenceOrigin.cs`
- `SeerIntelligenceOriginPower.cs`
