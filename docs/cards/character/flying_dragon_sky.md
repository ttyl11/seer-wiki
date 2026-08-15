# 飞龙在天

<img src="/images/cards/flying_dragon_sky.png" alt="飞龙在天" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 10
- **能量消耗**: 1
- **类型**: 技能
- **稀有度**: 普通
- **目标**: 无
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 格挡 | 7 | 11 |
| 速度（敌人） | -1 | -1 |
| PP | 10 | 10 |
| 最大PP | 10 | 10 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">10</span>/<span style="color:#3aa675;font-weight:600">10</span> 获得<span style="color:#3aa675;font-weight:600">7</span>点<span style="color:#d4a017;font-weight:600">格挡</span>。令所有对手<span style="color:#d4a017;font-weight:600">速度</span><span style="color:#3aa675;font-weight:600">-1</span>。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">10</span>/<span style="color:#3aa675;font-weight:600">10</span> 获得<span style="color:#3aa675;font-weight:600">11</span>点<span style="color:#d4a017;font-weight:600">格挡</span>。令所有对手<span style="color:#d4a017;font-weight:600">速度</span><span style="color:#3aa675;font-weight:600">-1</span>。

## 小贴士

- **格挡+减速双效**：1 费获得 7 [格挡](/mechanics/block.md)（升级后 11）+ 全体敌人[速度](/powers/speed_power.md) -1，是攻防一体的群体减速技能。
- **速度机制详解**：敌人身上的负速度会使**玩家多抽牌**——每有 -2 速度，所有玩家多抽 1 张。但单次 -1 速度由于整数除法不生效，需叠加到 -2 才有效果。打出 2 次飞龙在天 → 全体敌人 -2 速度 → 玩家多抽 1 张。
- **格挡是主要价值**：7 格挡（升级后 11）是这张牌的核心价值，速度减速是附带效果——单次打出时速度无实际影响，但叠加后有额外收益。
- **配合建议**：多张飞龙在天连续打出可叠加速度效果。配合其他施加敌人负速度的卡牌也可以叠加到 -2 阈值。
- **升级的关键性**：格挡从 7 提升至 11，+57%。速度不变。升级优先级中等。
- **性价比**：1 费换 7 格挡 + 全体减速，格挡性价比合理。速度效果需叠加才生效，单次打出时主要是格挡牌。

## 相关能力

- [速度](/powers/speed_power.md)（每 2 层影响 1 张抽牌数，敌人负速度使玩家多抽）

## 相关机制

- [格挡](/mechanics/block.md)（获得 7/11 点格挡）

## 源码

- `SeerFlyingDragonSky.cs`
