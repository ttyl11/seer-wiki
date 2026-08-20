# 黎羽幻生

<img src="/images/cards/feather_phantom.png" alt="黎羽幻生" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

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
| 力量 | +1 | +1 |
| 速度 | +1 | +1 |
| 命中 | +1 | +1 |
| 防御 | +1 | +1 |
| 神耀能量 | 1层 | 2层 |
| 必定暴击 | 2次 | 2次 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> <span style="color:#d4a017;font-weight:600">全属性</span><span style="color:#3aa675;font-weight:600">+1</span>。获得<span style="color:#3aa675;font-weight:600">1</span>层<span style="color:#d44;font-weight:600">神耀能量</span>。下两次攻击必定暴击。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> <span style="color:#d4a017;font-weight:600">全属性</span><span style="color:#3aa675;font-weight:600">+1</span>。获得<span style="color:#3aa675;font-weight:600">2</span>层<span style="color:#d44;font-weight:600">神耀能量</span>。下两次攻击必定暴击。

## 小贴士

- **三合一增益牌**：1 费同时给全属性 +1 + [神耀能量](/powers/divine_energy_power.md) + [必定暴击](/powers/next_guaranteed_crit_power.md)，是 mod 中少有的全维度增益牌。
- **PP 5 的含金量**：PP 5 = 单场战斗最多打出 5 次（每次正常付 1 费、扣 1 PP），每次打出全部效果重复获得。一场战斗打满 5 次 = 全属性 +5、10 层必定暴击、神耀能量 5 层（升级后 10 层）。它不是一次性的爆发牌，而是可以反复铺场的成长引擎——手里只要留 1 张，整场都在变强。
- **全属性详解**：[力量](/powers/strength_power.md)+1（每层攻击伤害 +1）、[速度](/powers/speed_power.md)+1（每 2 层回合开始多抽 1 张，单独 +1 不够，打第二次凑到 2 层才生效）、[命中](/powers/accuracy_power.md)+1（正命中本身无直接效果，价值在于抵消负命中——如[极度冰点](/cards/character/extreme_freeze.md)给自己挂的 -12 命中每层 5% 落空率）、[防御](/powers/defense_power.md)+1（每层受到的攻击伤害 -1，最低减到 0）。
- **神耀能量减伤**：每层减少 12% 受到的攻击伤害，**封顶 6 层（72%）**——超出 6 层的部分无效。只对敌人的攻击伤害生效，灼烧/中毒/固定伤害等非攻击伤害照常全额结算。未升级打满 5 次共 5 层（60% 减伤）；升级后每次 2 层，打 3 次即触顶。
- **必定暴击爆发**：每次打出获得 2 层必定暴击——接下来 2 次攻击判定伤害 ×1.5。粒度是"攻击判定"而非"攻击牌"：多段攻击的每一段独立消耗 1 层并独立 ×1.5，一张 3 段攻击牌会吃掉 3 层。暴击同样只对攻击伤害生效。
- **配合建议**：打出后立刻用多段攻击牌收割暴击——2 次暴击配 3 段牌等于 3 段全 ×1.5，收益最大化；力量/防御/速度是常驻 Power，整场累积。全属性 +1 的设计也让它和任何体系都不冲突，属于"看到就能拿"的润滑剂。
- **升级的关键性**：只提升神耀能量 1→2 层。升级前打满 5 次只有 60% 减伤，升级后 3 次即 72% 封顶，还省下 2 次 PP 用于别的牌。升级优先级中等偏高。
- **性价比**：1 费换四项属性 + 12% 起步的常驻减伤 + 2 次暴击，单次已回本；叠加 PP 5 之后是罕见的"成长+防御+爆发"三位一体，无愧罕见卡定位。

## 相关能力

- [神耀能量](/powers/divine_energy_power.md)（每层减伤 12%，封顶 6 层）
- [必定暴击](/powers/next_guaranteed_crit_power.md)（下两次攻击判定 ×1.5）
- [力量](/powers/strength_power.md)（每层攻击伤害 +1）
- [速度](/powers/speed_power.md)（每 2 层多抽 1 张）
- [命中](/powers/accuracy_power.md)（正层抵消负命中的落空率）
- [防御](/powers/defense_power.md)（每层受到攻击伤害 -1）

## 相关机制

- [PP 系统](/mechanics/pp-system.md)
- [暴击](/mechanics/critical-strike.md)

## 源码

- `SeerFeatherPhantom.cs`
