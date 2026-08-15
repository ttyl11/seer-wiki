# 八月的流火

<img src="/images/cards/august_flame.png" alt="八月的流火" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 1
- **能量消耗**: 2
- **类型**: 能力
- **稀有度**: 罕见
- **目标**: 无
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 烧伤回合 | 5 | 7 |
| PP | 1 | 1 |
| 最大PP | 1 | 1 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 自身[<span style="color:#d4a017;font-weight:600">烧伤</span>](/powers/burn_power.md)<span style="color:#3aa675;font-weight:600">5</span>回合。此后每打出一张牌，对随机敌人造成等于自身<span style="color:#d4a017;font-weight:600">烧伤</span>回合数的伤害。（获得[<span style="color:#d4a017;font-weight:600">八月的流火</span>](/powers/august_flame_power.md)）

## 升级后

PP: <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 自身[<span style="color:#d4a017;font-weight:600">烧伤</span>](/powers/burn_power.md)<span style="color:#3aa675;font-weight:600">7</span>回合。此后每打出一张牌，对随机敌人造成等于自身<span style="color:#d4a017;font-weight:600">烧伤</span>回合数的伤害。（获得[<span style="color:#d4a017;font-weight:600">八月的流火</span>](/powers/august_flame_power.md)）

## 小贴士

- **自伤换输出的设计**：这张牌的核心是"用自身烧伤的层数当伤害源"——给自身挂 5 层烧伤，此后每打一张牌就对随机敌人造成等于当前烧伤层数的伤害。层数越高，单次触发越疼；但烧伤每回合 -1，层数也在掉，所以是个**递减输出窗口**。
- **烧伤的真实效果**：烧伤每回合开始自伤 3 点（**不可格挡的非攻击伤害**，不吃力量/易伤），并使你造成的攻击伤害 -1（固定值减伤，不是百分比）。注意：自伤和减伤都是固定值，**与烧伤层数无关**——5 层烧伤和 1 层烧伤都是每回合掉 3 血、攻击伤害 -1。
- **八月的流火能力的伤害特性**：能力触发时对随机敌人造成的是非攻击伤害——**可格挡**，但**不吃力量/易伤**。所以这张牌的输出不会被敌人的格挡完全挡掉（烧伤自伤那部分不可格挡），但能力触发的伤害部分会被格挡吃。
- **结算时机的小细节**：能力记录的是**出牌瞬间**的烧伤层数，结算伤害时按这个层数算。这意味着如果出牌过程中烧伤层数发生变化（如某张牌会清除自身烧伤），伤害按**出牌瞬间**的层数算，不是结算瞬间。
- **目标随机**：每次出牌都从可命中敌人中随机选一个，多敌人遭遇战中无法指定目标，但长时间看会均匀分布。**多人模式下两端结果一致**。
- **升级的价值**：烧伤回合从 5 增至 7，触发窗口延长 2 回合。按每回合打 3 张牌估算，升级后总输出提升约 40%，且自伤仍是固定 3 点/回合，性价比极高。
- **风险提示**：自身烧伤会持续掉血，低血量时慎用。注意烧伤的攻击减伤效果会影响你的攻击牌输出。
- **性价比**：2 费合理——能力牌常驻整场，烧伤联动出牌的额外伤害回本快。

## 源码

- `SeerAugustFlame.cs`
