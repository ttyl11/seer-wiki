# 曙光普照

<img src="/images/cards/shining_light.png" alt="曙光普照" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 5
- **能量消耗**: 1
- **类型**: 技能
- **稀有度**: 稀有
- **目标**: 敌方单体
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 异常状态种数 | 2 | 2 |
| 异常状态回合 | 2 | 2 |
| 缓冲层数 | 1 | 1 |
| 能量消耗 | 1 | 0 |
| 每次打出费用增加 | +1 | +1 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 随机附加<span style="color:#3aa675;font-weight:600">2</span>种[<span style="color:#d44;font-weight:600">异常状态</span>](/mechanics/abnormal-status.md)<span style="color:#3aa675;font-weight:600">2</span>回合。获得<span style="color:#3aa675;font-weight:600">1</span>层[<span style="color:#d4a017;font-weight:600">缓冲</span>](/powers/buffer_power.md)。打出后置入[<span style="color:#d4a017;font-weight:600">抽牌堆</span>](/mechanics/draw_pile.md)顶，每次打出费用<span style="color:#3aa675;font-weight:600">+1</span>。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 耗能降至<span style="color:#3aa675;font-weight:600">0</span>。随机附加<span style="color:#3aa675;font-weight:600">2</span>种[<span style="color:#d44;font-weight:600">异常状态</span>](/mechanics/abnormal-status.md)<span style="color:#3aa675;font-weight:600">2</span>回合。获得<span style="color:#3aa675;font-weight:600">1</span>层[<span style="color:#d4a017;font-weight:600">缓冲</span>](/powers/buffer_power.md)。打出后置入[<span style="color:#d4a017;font-weight:600">抽牌堆</span>](/mechanics/draw_pile.md)顶，每次打出费用<span style="color:#3aa675;font-weight:600">+1</span>。

## 小贴士

- **自循环的随机异常生成器**：打出后回到[抽牌堆](/mechanics/draw_pile.md)顶，下回合必然再抽到——形成"每回合自动到手"的循环。每次随机给敌方挂 2 种[异常状态](/mechanics/abnormal-status.md)（2 回合）+ 自身 1 层[缓冲](/powers/buffer_power.md)，是持续的控场 + 防御工具。
- **费用递增是核心限制**：每次打出后本场战斗费用 +1，所以第一次 <span style="color:#3aa675;font-weight:600">1</span> 费、第二次 <span style="color:#3aa675;font-weight:600">2</span> 费、第三次 <span style="color:#3aa675;font-weight:600">3</span> 费……费用线性增长，不可能无限循环。必须在费用涨到不可承受前打出足够多的价值，或配合减费机制延长循环。
- **25 种异常状态随机——但有 2 种会空转**：从 <span style="color:#3aa675;font-weight:600">25</span> 种异常状态中随机选取 <span style="color:#3aa675;font-weight:600">2</span> 种（不重复）施加——包括[睡眠](/powers/sleep_power.md)、[凝滞](/powers/stasis_power.md)、[冰封](/powers/freeze_power.md)、[失明](/powers/blind_power.md)、[臣服](/powers/subjugation_power.md)、[狂暴](/powers/fury_power.md)等强力控制，也包括[中毒](/powers/poison_power.md)、[烧伤](/powers/burn_power.md)等持续伤害。注意：随机到神游或易燃时该次施加**不生效**（实现未覆盖这两种，等于白占一个随机位，各 <span style="color:#3aa675;font-weight:600">2/25</span> 概率）。随机性既是优势（不可预测、防不胜防）也是劣势（可能抽到对当前敌人收益低的状态）。
- **缓冲的防御价值**：每打出一次获得 1 层[缓冲](/powers/buffer_power.md)，抵消下一次生命值损失。配合自循环机制，每回合都有缓冲保护，能有效抵御敌人的爆发伤害。
- **升级让循环多走一轮**：升级后初始耗能从 <span style="color:#3aa675;font-weight:600">1</span> 降至 <span style="color:#3aa675;font-weight:600">0</span>，相当于第一次打出免费——让循环可以多走一轮（0→1→2→3... 相比 1→2→3...），前期节奏更顺畅。
- **性价比**：1 费合理——随机双异常 + 缓冲 + 自循环，价值随战斗时长递增。升级后 0 费启动让这张牌从"可用"变成"强卡"。

## 相关能力

- [缓冲](/powers/buffer_power.md)（原版增益，每层抵消一次生命值损失）

## 相关机制

- [异常状态](/mechanics/abnormal-status.md)（25 种随机异常状态池）
- [抽牌堆](/mechanics/draw_pile.md)（打出后置入抽牌堆顶，形成循环）

## 源码

- `SeerShiningLight.cs`
