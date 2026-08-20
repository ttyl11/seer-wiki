# 荆棘

> **归属**：玩家与怪物均可持有

<img src="/images/powers/thorns_power.png" alt="荆棘" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 叠加（Counter）
- **可见**: 是
- **来源**: 原版能力

## 描述

每次受到攻击伤害时，对攻击者反弹<span style="color:#3aa675;font-weight:600">层数</span>点伤害。

## 详细机制

- **按层数固定反弹**：原版 `ThornsPower`（`BeforeDamageReceived`）——持有者每次受到**常规攻击**伤害（`IsPoweredAttack`，含 Omnislice 特例）时，立即对攻击者反弹**当前层数**点伤害——反弹量与受到的伤害大小**无关**，只看层数。
- **反弹类型**：`ValueProp.Unpowered`——不吃[力量](/powers/strength_power.md)/[易伤](/powers/vulnerable_power.md)增减，但**可被[格挡](/mechanics/block.md)**。
- **只反常规攻击**：技能类伤害、[固定伤害](/powers/fixed_damage_power.md)、DoT 跳伤（无来源）均不触发。
- **多段攻击段段吃**：反弹按"每次受伤"独立结算——多段攻击每段都挨一次反弹。
- **反弹先于自身受伤结算**：触发时序在 `BeforeDamageReceived`——敌人打你 20 点的同时你先反它 N 点。若反伤直接把濒死敌人打死：**本段伤害仍会打在你身上**（伤害管线不会中断），但多段攻击的**后续段数全部作废**（攻击者已死，攻击命令直接中断）。

## 小贴士

- **防反一体词缀**：对玩家是防御性收益（挨打时白嫖反伤），对怪物是攻击税——同一机制两边读法不同，怪物的荆棘按回合成长时（如[祸移](/powers/calamity_shift_power.md)）优先速杀。
- **反弹量≠受伤量**：3 层荆棘被打 20 点也只反 3 点——低层数时是象征性反制，堆高层数（10+）才形成真正的攻击税。
- **攻击高荆棘怪用单段大伤害**：一次结算只吃一次反弹；多段攻击在荆棘面前是成倍送血。
- **格挡能完全中和**：反弹是 Unpowered——攻击回合留足格挡，荆棘税可以实打实吃下。

## 源码

- 原版 `ThornsPower.cs:17-24`（`BeforeDamageReceived`：`IsPoweredAttack` 时 `Damage(dealer, Amount, Unpowered)`）
