# 森罗万象

<img src="/images/cards/forest_all_things.png" alt="森罗万象" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 5
- **能量消耗**: 3
- **类型**: 技能
- **稀有度**: 普通
- **目标**: 自身
- **可升级**: 是（1 级）
- **关键词**: [奇巧](/mechanics/sly.md)

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 森林充能球 | 2 | 3 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> [生成](/mechanics/channeling.md)<span style="color:#3aa675;font-weight:600">2</span>个[森林](/orbs/forest_orb.md)[充能球](/mechanics/orb.md)。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> [生成](/mechanics/channeling.md)<span style="color:#3aa675;font-weight:600">3</span>个[森林](/orbs/forest_orb.md)[充能球](/mechanics/orb.md)。

## 小贴士

- **充能球生成牌**：打出后生成 2 个[森林充能球](/orbs/forest_orb.md)（升级后 3 个），填入充能球栏位。森林充能球的被动是回合结束时对随机敌人施加 3 层[中毒](/powers/poison_power.md)，激发时对所有敌人施加 3 层[感染](/powers/infect_power.md)。
- **奇巧关键词**：基础拥有[奇巧](/mechanics/sly.md)关键词——如果这张牌在回合结束前从手牌中被丢弃，则免费将其打出。注意是"被丢弃时"触发，不是"回合结束自动触发"。
- **栏位管理**：充能球栏位有限，生成超过栏位上限时最早的充能球会被激发。打出前注意当前栏位余量，避免浪费已有的充能球。
- **配合建议**：配合[集中](/powers/focus_power.md)可以提升森林充能球的被动和激发数值。多个森林充能球同时在场时，每回合被动叠中毒、激发时全体感染，输出和控场兼备。
- **升级的关键性**：充能球数从 2 增至 3，多 1 个森林球意味着每回合多 1 次 3 层中毒被动。升级优先级中等。
- **性价比**：3 费换 2 个森林充能球，每回合自动施加中毒 + 激发时全体感染，持续输出性价比合理。

## 相关机制

- [充能球](/mechanics/orb.md)（生成森林充能球）
- [奇巧](/mechanics/sly.md)（基础关键词，被丢弃时免费打出）

## 相关充能球

- [森林](/orbs/forest_orb.md)（被动：中毒，激发：感染）

## 源码

- `SeerForestAllThings.cs`
