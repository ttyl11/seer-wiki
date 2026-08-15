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
- **全属性详解**：[力量](/powers/strength_power.md)+1（每层攻击伤害 +1）、[速度](/powers/speed_power.md)+1（需累积到 2 层才多抽 1 张，单 +1 不增加抽牌）、[命中](/powers/accuracy_power.md)+1（正数对自身无直接效果，主要用于抵消负命中）、[防御](/powers/defense_power.md)+1（每层受到的攻击伤害 -1）。
- **神耀能量减伤**：每层减少 12% 受到的攻击伤害（只对攻击伤害生效，非攻击伤害不减），最高 6 层。1 层 = 减伤 12%，升级后 2 层 = 减伤 24%。
- **必定暴击爆发**：获得 2 层必定暴击——下两次攻击伤害 ×1.5。暴击只对攻击伤害生效（非攻击伤害不暴击），每次攻击消耗 1 层。
- **配合建议**：打出后立刻用多段攻击牌触发暴击——2 次暴击配多段攻击收益最大化。力量 +1 和防御 +1 是常驻增益，整场战斗有效。
- **升级的关键性**：神耀能量从 1 层提升到 2 层，减伤从 12% 提升至 24%。升级优先级中等。
- **性价比**：1 费换全属性 +1 + 1 层神耀能量 + 2 次必定暴击，三合一增益性价比极高。

## 相关能力

- [神耀能量](/powers/divine_energy_power.md)（每层减伤 12%，最高 6 层）
- [必定暴击](/powers/next_guaranteed_crit_power.md)（下两次攻击 ×1.5）
- [力量](/powers/strength_power.md)（每层攻击伤害 +1）
- [速度](/powers/speed_power.md)（每 2 层影响 1 张抽牌数）
- [命中](/powers/accuracy_power.md)（正数抵消负命中）
- [防御](/powers/defense_power.md)（每层受到攻击伤害 -1）

## 源码

- `SeerFeatherPhantom.cs`
