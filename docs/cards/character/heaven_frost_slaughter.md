# 天霜杀伐

<img src="/images/cards/heaven_frost_slaughter.png" alt="天霜杀伐" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 5
- **能量消耗**: 1
- **类型**: 技能
- **稀有度**: 普通
- **目标**: 所有敌方
- **可升级**: 是（1 级）
- **关键词**: 升级后获得 [戏法](/mechanics/trick.md)

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 冰封回合 | 2 | 2 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 所有敌人<span style="color:#9b59b6;font-weight:600">冰封</span><span style="color:#3aa675;font-weight:600">2</span>回合，冰封失败则无效化其攻击意图。

## 升级后

<span style="color:#d4a017;font-weight:600">戏法</span>。耗能<span style="color:#3aa675;font-weight:600">-1</span>。PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 所有敌人<span style="color:#9b59b6;font-weight:600">冰封</span><span style="color:#3aa675;font-weight:600">2</span>回合，冰封失败则无效化其攻击意图。

## 小贴士

- **全体冰封控制**：1 费对所有敌人施加 2 层[冰封](/powers/freeze_power.md)，使敌人攻击伤害降低，回合结束时冰封转为[冻伤](/powers/frostbite_power.md)。
- **冰封失败兜底**：如果敌人免疫冰封（冰封层数未增加），则无效化该敌人的攻击意图——攻击意图变为无效，本回合不会攻击。所以冰封成功的敌人伤害降低，冰封失败的敌人直接跳过攻击，两种情况都有兜底。
- **戏法关键词**：升级后获得[戏法](/mechanics/trick.md)——打出时若弃牌堆有牌，随机从弃牌堆抽 1 张牌到手中。升级同时降低 1 点耗能（1→0）。
- **0费全体控制**：升级后 0 费全体冰封 + 戏法抽牌，是极强的控制+循环牌。0 费打出不占能量节奏，还能从弃牌堆回收 1 张牌。
- **配合建议**：配合冰封/冻伤卡牌使用，冰封后敌人攻击伤害大幅降低。对有异常免疫的敌人也有效——冰封失败触发意图无效化。
- **升级的关键性**：获得戏法 + 耗能降至 0，质变升级。1 费变 0 费 + 抽牌效果，升级优先级极高。
- **性价比**：1 费全体冰封 2 回合+冰封失败兜底无效化攻击意图，普通稀有度容易获取，控制价值对得起 1 费。升级后 0 费+戏法抽牌，质变为顶级循环控制牌。

## 相关能力

- [冰封](/powers/freeze_power.md)（攻击伤害降低，回合结束转为冻伤）
- [冻伤](/powers/frostbite_power.md)（冰封结束时获得）

## 相关机制

- [戏法](/mechanics/trick.md)（打出时从弃牌堆随机抽 1 张牌，升级后获得）

## 源码

- `SeerHeavenFrostSlaughter.cs`
