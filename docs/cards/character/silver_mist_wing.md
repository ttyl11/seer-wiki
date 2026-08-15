# 银雾之翼

<img src="/images/cards/silver_mist_wing.png" alt="银雾之翼" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 5
- **能量消耗**: 1
- **类型**: 攻击
- **稀有度**: 罕见
- **目标**: 敌方单体
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 伤害 | 2 | 5 |
| 神耀能量 | 1 | 1 |
| 暴击神耀能量 | 2 | 2 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 造成<span style="color:#3aa675;font-weight:600">2</span>点伤害。消除对手[<span style="color:#d4a017;font-weight:600">全属性</span>](/mechanics/all_attributes.md)提升。获得<span style="color:#3aa675;font-weight:600">1</span>层[<span style="color:#9b59b6;font-weight:600">神耀能量</span>](/powers/divine_energy_power.md)，打出[<span style="color:#d4a017;font-weight:600">暴击</span>](/powers/critical_strike_power.md)时获得<span style="color:#3aa675;font-weight:600">2</span>层。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 造成<span style="color:#3aa675;font-weight:600">5</span>点伤害。消除对手[<span style="color:#d4a017;font-weight:600">全属性</span>](/mechanics/all_attributes.md)提升。获得<span style="color:#3aa675;font-weight:600">1</span>层[<span style="color:#9b59b6;font-weight:600">神耀能量</span>](/powers/divine_energy_power.md)，打出[<span style="color:#d4a017;font-weight:600">暴击</span>](/powers/critical_strike_power.md)时获得<span style="color:#3aa675;font-weight:600">2</span>层。

## 小贴士

- **一牌三用的小费控场卡**：这张牌同时做三件事——打伤害、清对手增益、给自己叠防御减伤。1 费打出相当于一次轻攻击 + 一次净化 + 一次自我强化，密度极高。
- **只清正数层数的全属性**：消除对手身上层数为正的[力量](/powers/strength_power.md)、[命中](/powers/accuracy_power.md)、[防御](/powers/defense_power.md)、[速度](/powers/speed_power.md)。负数层数（即对手自身的减益）不会被动到，所以这张牌是纯净化工具，不是反向利用。面对靠叠力量爆发的 Boss（如各种狂暴型精英），一费把它的增益清空等于废掉它一回合的输出。
- **神耀能量是防御性增益**：分类为增益，效果是**每层减少自身受到的攻击伤害 12%，上限 6 层（共 72%）**。叠满后近 3/4 的攻击伤害被吃掉，等同于一张常驻的高额减伤。注意它只对攻击伤害生效，[固定伤害](/powers/fixed_damage_power.md)等非攻击伤害不受影响。
- **暴击翻倍神耀能量**：若此次攻击触发[暴击](/powers/critical_strike_power.md)，神耀能量获取从 1 层变 2 层。配合暴击体系（如堆暴击率的能力/遗物）能更快叠到 6 层上限，是这张牌的成长路径。
- **升级只加伤害**：伤害从 2 提到 5，让这张牌从"纯工具牌"变成"工具 + 还算能打"的小攻击。功能完全不变，升级优先级中等——先升主力输出牌再升它。
- **性价比**：1 费换"清增益 + 自叠减伤 + 一点伤害"非常划算，面对增益型 Boss 时是关键解牌。升级后伤害翻倍但功能不变，仍属合理消费。

## 相关能力

- [神耀能量](/powers/divine_energy_power.md)（自身减伤增益）
- [暴击](/powers/critical_strike_power.md)（触发翻倍条件）

## 相关机制

- [全属性](/mechanics/all_attributes.md)（消除对手提升的核心机制）

## 源码

- `SeerSilverMistWing.cs`
