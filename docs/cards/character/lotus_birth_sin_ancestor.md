# 一莲托生·孽妣

<img src="/images/cards/lotus_birth_sin_ancestor.png" alt="一莲托生·孽妣" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 1
- **能量消耗**: 1
- **类型**: 能力
- **稀有度**: 普通
- **目标**: 自身
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 进入回合数 | 3 | 3 |
| 切换回合数 | 6 | 6 |
| 能量消耗 | 1 | 0 |
| PP | 1 | 1 |
| 最大PP | 1 | 1 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 若不处于<span style="color:#d4a017;font-weight:600">三态</span>，进入[<span style="color:#9b59b6;font-weight:600">拒赦怒威态</span>](/powers/wrathful_judgment_power.md)<span style="color:#3aa675;font-weight:600">3</span>回合。否则清除后进入[<span style="color:#9b59b6;font-weight:600">拒赦怒威态</span>](/powers/wrathful_judgment_power.md)<span style="color:#3aa675;font-weight:600">6</span>回合。

## 升级后

耗能<span style="color:#3aa675;font-weight:600">-1</span>。PP: <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 若不处于<span style="color:#d4a017;font-weight:600">三态</span>，进入[<span style="color:#9b59b6;font-weight:600">拒赦怒威态</span>](/powers/wrathful_judgment_power.md)<span style="color:#3aa675;font-weight:600">3</span>回合。否则清除后进入[<span style="color:#9b59b6;font-weight:600">拒赦怒威态</span>](/powers/wrathful_judgment_power.md)<span style="color:#3aa675;font-weight:600">6</span>回合。

## 小贴士

- **三态互斥是核心——切换状态换双倍持续时间**：不处于三态时进入 3 回合，已处于三态时清除后进入 6 回合——切换状态换取双倍持续时间。注意这是**能力牌**，打出即离场、PP1 单场只能打一次——想吃到 6 回合分支，必须先打出**另一张**三态牌（如先[世母](/cards/character/lotus_birth_world_mother.md)进 3 回合，再打这张换拒赦怒威 6 回合，合计 <span style="color:#3aa675;font-weight:600">9</span> 回合状态覆盖）。
- **三态系统**：<span style="color:#d4a017;font-weight:600">三态</span>是[百天浮世络](/powers/hundred_day_floating_world_power.md)、[怀生菩怜态](/powers/compassionate_bodhi_power.md)、[拒赦怒威态](/powers/wrathful_judgment_power.md)三种状态的统称，三者互斥——进入任一状态前会先清除已有的三态。
- **拒赦怒威态效果**：存续期间**每个回合开始**都会清除自身现有<span style="color:#d4a017;font-weight:600">元素属性</span>、变为[<span style="color:#d4a017;font-weight:600">混沌系</span>](/powers/chaos_power.md)、获得 <span style="color:#3aa675;font-weight:600">1</span> 层[先制](/powers/first_strike_power.md)——<span style="color:#3aa675;font-weight:600">6</span> 回合状态总共白拿 <span style="color:#3aa675;font-weight:600">6</span> 层先制；同时自身所有攻击伤害提升 <span style="color:#3aa675;font-weight:600">30</span>%（乘法增伤）；回合结束减 1 层。是爆发输出型状态。
- **注意：状态期间元素属性被"锁死"为混沌系**：每回合开始都会清掉现有元素再变混沌——你用其它卡牌改的元素属性活不过回合切换。靠元素克制打伤害的流派与三态天然冲突，切换前想清楚。
- **触发逻辑**：
  - **不处于三态**：直接进入拒赦怒威态 <span style="color:#3aa675;font-weight:600">3</span> 回合。
  - **已处于三态**：清除全部三态后进入拒赦怒威态 <span style="color:#3aa675;font-weight:600">6</span> 回合——切换状态换取双倍持续时间。
- **使用时机**：状态持续 <span style="color:#3aa675;font-weight:600">3</span>~<span style="color:#3aa675;font-weight:600">6</span> 回合，适合在需要爆发的窗口前打出建立输出节奏。配合三态切换类卡牌（如[一莲托生·世母](/cards/character/lotus_birth_world_mother.md)）可灵活切换状态。
- **升级效果**：升级使耗能从 <span style="color:#3aa675;font-weight:600">1</span> 降至 <span style="color:#3aa675;font-weight:600">0</span>，0 费即可切换状态，灵活性大增。
- **性价比**：1 费换 3 回合拒赦怒威态（攻击 +30%、先制 +1、属性清除）合理——单次就建立爆发输出节奏，切换状态再延长 6 回合，长战斗中价值极高。

## 相关能力

- [拒赦怒威态](/powers/wrathful_judgment_power.md)：三态之一，攻击伤害提升 30%，回合开始清除元素属性变混沌系并获先制

## 源码

- `SeerLotusBirthSinAncestor.cs`
