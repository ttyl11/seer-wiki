# 日月安属

<img src="/images/cards/sun_moon_belong.png" alt="日月安属" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 5
- **能量消耗**: 2
- **类型**: 技能
- **稀有度**: 罕见
- **目标**: 敌方单体
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 沉默概率 | 80% | 80% |
| 沉默层数 | 2 | 2 |
| 属性锁定回合 | 3 | 3 |
| 能量消耗 | 2 | 1 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> <span style="color:#3aa675;font-weight:600">80</span>%<span style="color:#d44;font-weight:600">沉默</span>对手，失败则下回合将受到的伤害反弹为[<span style="color:#d4a017;font-weight:600">固定伤害</span>](/powers/fixed_damage_power.md)。<span style="color:#3aa675;font-weight:600">3</span>回合内，敌方属性无法提升，我方属性无法下降。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> <span style="color:#3aa675;font-weight:600">80</span>%<span style="color:#d44;font-weight:600">沉默</span>对手，失败则下回合将受到的伤害反弹为[<span style="color:#d4a017;font-weight:600">固定伤害</span>](/powers/fixed_damage_power.md)。<span style="color:#3aa675;font-weight:600">3</span>回合内，敌方属性无法提升，我方属性无法下降。耗能降至<span style="color:#3aa675;font-weight:600">1</span>。

## 小贴士

- **沉默是伤害封顶不是禁言**：[沉默](/powers/silence_power.md)并非阻止敌人出牌，而是封顶其单次攻击伤害——若敌人单次攻击伤害超过 <span style="color:#3aa675;font-weight:600">30</span> 点，则该次伤害降为 <span style="color:#3aa675;font-weight:600">0</span>。对依赖大招的 Boss 极其有效，对小怪几乎无用。沉默施加 <span style="color:#3aa675;font-weight:600">2</span> 层，敌方回合结束时对其造成 <span style="color:#3aa675;font-weight:600">1</span> 点伤害并减少 <span style="color:#3aa675;font-weight:600">1</span> 层。
- **失败补偿比想象中稳**：判定走 <span style="color:#3aa675;font-weight:600">80</span>% 概率（多人同步 RNG），失败的 <span style="color:#3aa675;font-weight:600">20</span>% **以及敌人免疫沉默的情况**都会改为自身获得[日月安属·反击](/powers/sun_moon_belong_power.md)。反击记录你受到的**最后一次**伤害（后一次覆盖前一次，非累计），且记录的是**格挡前**总伤害——格挡挡掉的部分照样计入。当这个能力消失时（被敌方消除增益类效果移除等），将记录值作为[固定伤害](/powers/fixed_damage_power.md)附加给所有对手。注意反击本身**没有自动衰减**，会一直留在身上直到被移除，所以它更像"悬在头顶的威慑"而非下回合必爆的反伤。
- **属性锁定的双向保护**：无论沉默是否成功，都获得 <span style="color:#3aa675;font-weight:600">3</span> 层[日月安属·还原](/powers/sun_moon_belong_restore_power.md)——敌方[全属性](/mechanics/all_attributes.md)提升时立刻回降等量，我方全属性下降时立刻回升等量。覆盖力量、敏捷、命中、防御、速度五项。衰减在**对方回合结束**进行（每层对应一个敌方回合），<span style="color:#3aa675;font-weight:600">3</span> 层恰好锁满 3 个敌方回合的属性变化。
- **升级降费不改变机制**：升级后耗能从 <span style="color:#3aa675;font-weight:600">2</span> 降为 <span style="color:#3aa675;font-weight:600">1</span>，沉默概率、层数、属性锁定回合数均不变。升级纯粹提升打出灵活性。
- **性价比**：2 费偏贵但机制全面——沉默或反击加属性锁定双重控制，升级后 1 费更灵活，适合应对叠属性或大招型 Boss。

## 相关能力

- [沉默](/powers/silence_power.md)（伤害封顶异常状态）
- [日月安属·反击](/powers/sun_moon_belong_power.md)（失败补偿，伤害反弹）
- [日月安属·还原](/powers/sun_moon_belong_restore_power.md)（属性锁定）
- [固定伤害](/powers/fixed_damage_power.md)（反弹伤害类型）

## 相关机制

- [全属性](/mechanics/all_attributes.md)（力量 / 敏捷 / 命中 / 防御 / 速度）
- [异常状态](/mechanics/abnormal-status.md)

## 源码

- `SeerSunMoonBelong.cs`
