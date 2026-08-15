# 飞燕游龙

<img src="/images/cards/flying_swallow_dragon.png" alt="飞燕游龙" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 5
- **能量消耗**: 7（动态减少）
- **类型**: 攻击
- **稀有度**: 罕见
- **目标**: 所有敌方
- **可升级**: 是（1 级）
- **关键词**: 升级后获得 [保留](/mechanics/retain.md)

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 基础耗能 | 7 | 7 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 敌人每有一种<span style="color:#d44;font-weight:600">异常状态</span>，耗能<span style="color:#3aa675;font-weight:600">-1</span>。对所有敌人造成<span style="color:#d44;font-weight:600">异常状态</span>种类数阶乘的伤害。

## 升级后

[<span style="color:#d4a017;font-weight:600">保留</span>](/mechanics/retain.md)。PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 敌人每有一种<span style="color:#d44;font-weight:600">异常状态</span>，耗能<span style="color:#3aa675;font-weight:600">-1</span>。对所有敌人造成<span style="color:#d44;font-weight:600">异常状态</span>种类数阶乘的伤害。

## 小贴士

- **阶乘伤害核心**：伤害等于所有敌人身上可见[异常状态](/mechanics/abnormal-status.md)种类数的阶乘。统计的是跨所有敌人的**种类数**（同种异常状态在不同敌人身上只算 1 种）。0 种 → 1 伤害，1 种 → 1 伤害，2 种 → 2 伤害，3 种 → 6 伤害，4 种 → 24 伤害，5 种 → 120 伤害，6 种 → 720 伤害，7 种 → 5040 伤害。阶乘增长极快，5 种以上即可秒杀多数敌人。
- **费用随异常状态递减**：基础耗能 7，敌人每有 1 种异常状态耗能 -1，最低降至 0。7 种异常状态时此牌 0 费打出 + 5040 伤害——费用和伤害都与异常状态种类数挂钩，铺得越广越强。
- **攻击伤害性质**：造成的伤害是攻击伤害，受[力量](/powers/strength_power.md)加成、受[易伤](/powers/vulnerable_power.md)增伤、受自身[虚弱](/powers/weak_power.md)减免、可被[格挡](/mechanics/block.md)。
- **铺状态优先**：打出前应先在敌人身上铺多种不同异常状态。异常状态种类越多，耗能越低、伤害呈阶乘爆炸。重点在于"广度"（种类多）而非"深度"（单种层数高）——同种异常状态叠多层只算 1 种。
- **配合建议**：配合能施加多种不同异常状态的卡牌使用，在铺满异常状态后打出飞燕游龙收割。异常状态种类不足时此牌几乎没有价值（1-2 种异常状态仅 1-2 伤害 + 高耗能）。
- **升级的关键性**：添加[保留](/mechanics/retain.md)关键词，让你可以等到异常状态铺满后再打出，不被回合结束弃掉。升级优先级高——此牌依赖铺垫，保留能确保在最佳时机出手。
- **性价比**：7 费基础 + 动态减费，本质是"铺状态后的一击必杀"牌。异常状态种类足够时 0 费打出数千伤害，种类不足时是废牌。

## 相关机制

- [异常状态](/mechanics/abnormal-status.md)（伤害和耗能的计算基础）
- [保留](/mechanics/retain.md)（升级后获得）

## 源码

- `SeerFlyingSwallowDragon.cs`
