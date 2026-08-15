# 一月的雪鹄

<img src="/images/cards/january_snow_owl.png" alt="一月的雪鹄" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 1
- **能量消耗**: 2
- **类型**: 能力
- **稀有度**: 普通
- **目标**: 无
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 冻伤回合数 | 2 | 3 |
| PP | 1 | 1 |
| 最大PP | 1 | 1 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> [冻伤](/powers/frostbite_power.md)所有敌人<span style="color:#3aa675;font-weight:600">2</span>回合。每有一层[冻伤](/powers/frostbite_power.md)，抽1张牌。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> [冻伤](/powers/frostbite_power.md)所有敌人<span style="color:#3aa675;font-weight:600">3</span>回合。每有一层[冻伤](/powers/frostbite_power.md)，抽1张牌。

## 小贴士

- **冻伤叠加抽牌**：对所有敌人施加冻伤，每层冻伤（含原有层数）抽 <span style="color:#3aa675;font-weight:600">1</span> 张牌。3 个敌人无原有冻伤时：施加 2×3=6 层，抽 6 张牌。
- **配合冰系叠加**：先施加冻伤再打出此牌，原有层数 + 新层数一起计入抽牌。配合其它冰系卡牌（冰封、冻伤）可放大抽牌数。
- **多敌人价值放大**：敌人越多，施加层数越多，抽牌越多。单 Boss 时只抽 2-3 张，多敌人遭遇战价值翻倍。
- **2 费合理**：2 费换全敌人冻伤 + 大量抽牌。冻伤每层每回合造成 <span style="color:#3aa675;font-weight:600">5</span> 点不可格挡伤害，2 层 = 10 伤/回合，3 个敌人 = 30 伤/回合，外加 6 张抽牌，性价比极高。
- **升级增冻伤回合**：冻伤回合数 <span style="color:#3aa675;font-weight:600">2</span> → <span style="color:#3aa675;font-weight:600">3</span>。多敌人时每多 1 回合 = 多抽敌人数张牌 + 多 1 轮 5 点伤害，收益显著。

## 相关能力

- [冻伤](/powers/frostbite_power.md)（mod 减益，回合开始时受到 5 点不可格挡伤害并减少 1 层）

## 源码

- `SeerJanuarySnowOwl.cs`
- `SeerFrostbitePower.cs`
