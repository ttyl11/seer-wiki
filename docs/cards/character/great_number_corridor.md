# 大数回廊

<img src="/images/cards/great_number_corridor.png" alt="大数回廊" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 5
- **能量消耗**: 1
- **类型**: 技能
- **稀有度**: 罕见
- **目标**: 自身
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 人工制品层数 | 1 | 1 |
| 回血触发阈值 | 25% | 25% |
| 回血目标比例 | 50% | 60% |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 获得<span style="color:#3aa675;font-weight:600">1</span>层<span style="color:#d4a017;font-weight:600">人工制品</span>，消失后清除对手<span style="color:#d4a017;font-weight:600">全属性</span>加成。生命低于<span style="color:#3aa675;font-weight:600">25</span>%时回血至<span style="color:#3aa675;font-weight:600">50</span>%，下回合再次检查。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 获得<span style="color:#3aa675;font-weight:600">1</span>层<span style="color:#d4a017;font-weight:600">人工制品</span>，消失后清除对手<span style="color:#d4a017;font-weight:600">全属性</span>加成。生命低于<span style="color:#3aa675;font-weight:600">25</span>%时回血至<span style="color:#3aa675;font-weight:600">60</span>%，下回合再次检查。

## 小贴士

- **三重效果**：1 费获得[人工制品](/powers/artifact_power.md) + 人工制品层数减少后清除对手全属性加成 + 生命低于 25% 时回血至 50%（升级后 60%）。
- **人工制品保命**：获得 1 层人工制品——免疫下一次受到的负面效果（虚弱/易伤/力量下降等）。**清除属性效果不是人工制品消失时立即触发**，而是在玩家自己回合开始时检查——若人工制品层数比上回合记录的少（被消耗了），才清除对手全属性加成。所以人工制品在敌人回合被消耗后，要等到自己下回合开始才结算清除。
- **全属性范围**：清除对手力量/命中/防御/速度四种 seer 属性的**正层数**——逐项检查，若为正则施加等量负层数移除。不清除原版的敏捷/虚弱/易伤等，也不清除负层数或零层数的属性。所以这牌对力量流 Boss 尤其致命。
- **回血机制**：打出时立即检查生命值，若低于 25% 则回血至 50%（升级后 60%）。下回合开始时再次检查——相当于连续两次回血窗口。
- **回血计算**：以最大生命值百分比计算。例如最大生命 100，当前生命 20（20%），回血至 50% = 回复 30 点生命。升级后回血至 60% = 回复 40 点。
- **配合建议**：适合在低血量时打出——既是保命牌（人工制品+回血），又能清除对手全属性加成。配合高最大生命的 流派 回血收益更大。
- **升级的关键性**：回血目标从 50% 提升至 60%，多回 10% 最大生命的血量。升级优先级中等——回血比例提升对高最大生命 流派 收益更大。
- **性价比**：1 费换人工制品+清属性+回血三重保命，价格合理。罕见稀有度配得上这三重效果，低血量时打出收益最大。

## 相关能力

- [人工制品](/powers/artifact_power.md)（免疫 1 次负面效果，消失后清除对手全属性加成）

## 源码

- `SeerGreatNumberCorridor.cs`
