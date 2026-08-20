# 一莲托生·世母

<img src="/images/cards/lotus_birth_world_mother.png" alt="一莲托生·世母" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

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

PP: <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 进入[<span style="color:#9b59b6;font-weight:600">怀生菩怜态</span>](/powers/compassionate_bodhi_power.md)<span style="color:#3aa675;font-weight:600">3</span>回合；处于<span style="color:#d4a017;font-weight:600">三态</span>时，清除后进入<span style="color:#3aa675;font-weight:600">6</span>回合。

## 升级后

耗能<span style="color:#3aa675;font-weight:600">-1</span>。PP: <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 进入[<span style="color:#9b59b6;font-weight:600">怀生菩怜态</span>](/powers/compassionate_bodhi_power.md)<span style="color:#3aa675;font-weight:600">3</span>回合；处于<span style="color:#d4a017;font-weight:600">三态</span>时，清除后进入<span style="color:#3aa675;font-weight:600">6</span>回合。

## 小贴士

- **三态互斥是核心——切换状态换双倍持续时间**：不处于三态时进入 3 回合，已处于三态时清除后进入 6 回合——切换状态换取双倍持续时间。注意这是**能力牌**，打出即离场、PP1 单场只能打一次——想吃到 6 回合分支，必须先打出**另一张**三态牌（如先[孽妣](/cards/character/lotus_birth_sin_ancestor.md)进 3 回合，再打这张换怀生菩怜 6 回合，合计 <span style="color:#3aa675;font-weight:600">9</span> 回合状态覆盖）。怀生菩怜态是控制型状态（随机施加异常），适合过牌流派持续触发异常施加。
- **三态系统**：<span style="color:#d4a017;font-weight:600">三态</span>是[百天浮世络](/powers/hundred_day_floating_world_power.md)、[怀生菩怜态](/powers/compassionate_bodhi_power.md)、[拒赦怒威态](/powers/wrathful_judgment_power.md)三种状态的统称，三者互斥——进入任一状态前会先清除已有的三态。
- **怀生菩怜态效果**：存续期间**每个回合开始**都会清除自身现有<span style="color:#d4a017;font-weight:600">元素属性</span>、变为[<span style="color:#d4a017;font-weight:600">光系</span>](/powers/light_power.md)（状态期间元素被"锁死"，其它卡改的元素活不过回合切换）；**自己**每打出一张牌，随机对随机敌人附加 <span style="color:#3aa675;font-weight:600">1</span> 种[异常状态](/mechanics/abnormal-status.md) <span style="color:#3aa675;font-weight:600">1</span> 层（敌人与种类都随机）——过牌越多异常铺得越广，配合[怀晦之亟盼](/cards/character/longing_for_darkness.md)按种类计数换石化收益爆炸；回合结束减 1 层。是控制型状态。
- **触发逻辑**：
  - **不处于三态**：直接进入怀生菩怜态 <span style="color:#3aa675;font-weight:600">3</span> 回合。
  - **已处于三态**：清除全部三态后进入怀生菩怜态 <span style="color:#3aa675;font-weight:600">6</span> 回合——切换状态换取双倍持续时间。
- **使用时机**：配合过牌流派最大化异常施加触发次数。与[一莲托生·孽妣](/cards/character/lotus_birth_sin_ancestor.md)（拒赦怒威态）形成"控制+爆发"双态切换组合。
- **升级效果**：升级使耗能从 <span style="color:#3aa675;font-weight:600">1</span> 降至 <span style="color:#3aa675;font-weight:600">0</span>，0 费即可切换状态，灵活性大增。
- **性价比**：1 费换 3 回合怀生菩怜态（每打牌施加异常）合理——配合过牌流派可造成持续群体异常压制，切换状态再延长 6 回合，长战斗中控制收益极高。

## 相关能力

- [怀生菩怜态](/powers/compassionate_bodhi_power.md)：三态之一，使用牌后随机对随机敌人施加异常状态

## 源码

- `SeerLotusBirthWorldMother.cs`
