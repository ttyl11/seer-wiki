# 圣剑二

<img src="/images/cards/holy_sword_two.png" alt="圣剑二" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 衍生牌
- **最大PP**: 1
- **能量消耗**: 0
- **类型**: 技能
- **稀有度**: 衍生
- **目标**: 无
- **可升级**: 否

### 数值参数

| 参数 | 数值 |
|---|---|
| 固定伤害比例 | 50% |
| PP | 1 |
| 最大PP | 1 |

## 描述

PP: 1/1 你的<span style="color:#d4a017;font-weight:600">君王之剑</span>命中后对目标施加50%伤害的[<span style="color:#d4a017;font-weight:600">固定伤害</span>](/powers/fixed_damage_power.md)。[<span style="color:#d4a017;font-weight:600">先制</span>](/powers/first_strike_power.md)+1。

## 小贴士

- **按格挡前的总伤害计算**：固伤基数是本次攻击的**伤害总量**（被[格挡](/mechanics/block.md)吸收的部分也算）——也就是说哪怕攻击被敌人格挡完全挡住，命中后依然会施加 <span style="color:#3aa675;font-weight:600">50%</span> 的[固定伤害](/powers/fixed_damage_power.md)，而固伤本身结算时**不受格挡减免**。
- **结算时机**：固定伤害以能力形式施加在目标身上，在其**下回合开始时**才实际掉血，本回合先以预览形式显示在血条上。可被"免疫固定伤害"类效果防御。
- **每段命中独立触发**：君王之剑若打出多段攻击（Repeat 提升），每一段命中都会各自结算一次 <span style="color:#3aa675;font-weight:600">50%</span> 固伤，多段攻击的固伤收益是线性叠加的。
- **隐藏增益持续整场**：效果以隐形能力挂在自身身上（无图标、不可驱散），本场战斗内你的每一张君王之剑都享受加成。
- **伤害越高，固伤越痛**：先打出[圣剑三](/cards/token/holy_sword_three.md)把剑伤害变成 3 倍，每段命中的固伤基数也随之变为 3 倍，配合收益极高。
- **先制**（[<span style="color:#d4a017;font-weight:600">查看能力页</span>](/powers/first_strike_power.md)，mod 增益）：获得 <span style="color:#3aa675;font-weight:600">1</span> 层[先制](/powers/first_strike_power.md)。
- **生成来源**：由[圣铸](/powers/holy_forge_counter_power.md)能力累计铸造 <span style="color:#3aa675;font-weight:600">30</span> 时自动生成进手牌，每场战斗最多一张。

## 相关卡牌

- [圣剑三](/cards/token/holy_sword_three.md)（伤害三倍化后，固伤基数同步放大）
- 君王之剑（原版卡牌，触发固伤的效果来源）

## 相关能力

- [固定伤害](/powers/fixed_damage_power.md)：命中后施加的核心伤害能力
- [圣铸](/powers/holy_forge_counter_power.md)：圣剑二的生成来源
- [先制](/powers/first_strike_power.md)：打出后获得 1 层

## 相关机制

- [格挡](/mechanics/block.md)：固伤基数包含被格挡吸收的部分，且固伤本身不受格挡减免

## 源码

- `SeerHolySwordTwo.cs`
- `SeerHolySwordTwoPower.cs`
