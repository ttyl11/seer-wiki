# 腐化

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物随机池——[群星的礼赠](/relics/starter/elemental_core.md)随机能力池赋予怪物（遭遇时按概率自带，概率随探索房间数增长）

<img src="/images/powers/corrupt_power.png" alt="腐化" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 单例（不可叠加）
- **可见**: 是

## 描述

对面每造成一次伤害，对面<span style="color:#d4a017;font-weight:600">力量</span>、<span style="color:#d4a017;font-weight:600">命中</span>、<span style="color:#d4a017;font-weight:600">速度</span>、<span style="color:#d4a017;font-weight:600">防御</span>各-<span style="color:#3aa675;font-weight:600">1</span>。

## 详细机制

- **受击反噬四维**：`AfterDamageReceived` 钩子——持有者（怪物）每次受到伤害（`TotalDamage > 0`，含被[格挡](/mechanics/block.md)的部分）时，给**伤害来源**施加 [力量](/powers/strength_power.md)/[命中](/powers/accuracy_power.md)/[速度](/powers/speed_power.md)/[防御](/powers/defense_power.md) 各 -1。
- **不过滤伤害类型**：与[汲血](/powers/blood_suck_one_power.md)不同，腐化**没有** `IsPoweredAttack` 过滤——攻击、[固定伤害](/powers/fixed_damage_power.md)、DoT 跳伤都会触发（只要 dealer 存在且非它自己）。
- **每次伤害独立结算**：多段攻击每段各触发一次——3 段攻击 = 四维各 -3。
- **格挡不豁免**：伤害全被格挡也照样 -1（判定基数是格挡前的 `TotalDamage`）。

## 小贴士

- **多段流自断经脉**：3 段攻击一回合四维各 -3，两回合后[命中](/powers/accuracy_power.md)转负开始落空、[力量](/powers/strength_power.md)掉光伤害崩盘——打腐化怪只出**单段高伤**，把每次挨刀的代价压到最低。
- **伤害类型无法绕开**：固伤/DoT 同样触发（无类型过滤）——真正免疫的办法只有"不造成伤害"，或者靠属性加成对冲每回合的 -1。
- **速杀优先级最高的词缀之一**：腐化是越拖越死的局——第一二回合用最大爆发处理它，比磨到后期四维全负再挣扎便宜得多。
- **队友注意**（多人模式）：腐化反噬作用于**实际造成伤害的一方**——让四维最厚的队友主攻、属性依赖型队友停手，分摊腐化代价。

## 源码

- `SeerCorruptPower.cs`（`AfterDamageReceived`，对 dealer 施加 `StrengthPower`/`SeerAccuracyPower`/`SeerSpeedPower`/`SeerDefensePower` 各 `-StatReduction`）
