# 无限·虚数湮灭

<img src="/images/cards/infinite_void_annihilation.png" alt="无限·虚数湮灭" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 3
- **能量消耗**: 2
- **类型**: 技能
- **稀有度**: 罕见
- **目标**: 所有敌方
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 能量消耗 | 2 | 1 |
| 抽牌 | 1 | 1 |
| PP | 3 | 3 |
| 最大PP | 3 | 3 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">3</span>/<span style="color:#3aa675;font-weight:600">3</span> 将所有敌人非攻击意图无效化。抽<span style="color:#3aa675;font-weight:600">1</span>张牌。

## 升级后

耗能<span style="color:#3aa675;font-weight:600">-1</span>。PP: <span style="color:#3aa675;font-weight:600">3</span>/<span style="color:#3aa675;font-weight:600">3</span> 将所有敌人非攻击意图无效化。抽<span style="color:#3aa675;font-weight:600">1</span>张牌。

## 小贴士

- **无效化逐条生效，只取消非攻击部分**：对每个敌人意图**逐条**检查——非攻击意图（格挡、增益、召唤、施加诅咒等）被替换为"无行动"，**攻击意图原样保留照常出手**。敌人"攻击+增益"的组合回合会跳过增益、照常打你；纯技能回合（蓄力/召唤/纯增益）则整回合空过。用前先看敌方意图栏——它惩罚的是"蓄力回合"而非"输出回合"。
- **纯攻击意图的敌人完全不受影响**：意图全是攻击的敌人打出此牌只有抽 1 张牌的收益，无效化部分全部落空，2 费花得冤枉——留给有明确技能意图的回合再用。
- **全敌人覆盖**：对所有存活敌人生效，多敌人遭遇战中价值放大；被无效化敌人的后续行动链正常衔接，不会卡在原地。
- **抽牌回补卡位**：抽 <span style="color:#3aa675;font-weight:600">1</span> 张牌，打出此牌不亏手牌数。
- **2 费与升级**：2 费换"全敌人技能回合跳过 + 1 抽牌"，意图控制类效果稀有且全屏覆盖；升级后 1 费，灵活性大幅提升，可更随意地当过渡牌打。

## 相关机制

- [抽牌堆](/mechanics/draw_pile.md)（抽 1 张牌的来源）

## 源码

- `SeerInfiniteVoidAnnihilation.cs`
