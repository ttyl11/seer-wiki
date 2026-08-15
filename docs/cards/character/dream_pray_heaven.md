# 梦祈天怜

<img src="/images/cards/dream_pray_heaven.png" alt="梦祈天怜" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 5
- **能量消耗**: 2
- **类型**: 技能
- **稀有度**: 普通
- **目标**: 自身
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 格挡 | 10 | 15 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: 5/5 [<span style="color:#d4a017;font-weight:600">全属性</span>](/mechanics/all_attributes.md)<span style="color:#3aa675;font-weight:600">+1</span>。下一次攻击[<span style="color:#d4a017;font-weight:600">必定暴击</span>](/powers/next_guaranteed_crit_power.md)。获得<span style="color:#3aa675;font-weight:600">10</span>点[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)。

## 升级后

PP: 5/5 [<span style="color:#d4a017;font-weight:600">全属性</span>](/mechanics/all_attributes.md)<span style="color:#3aa675;font-weight:600">+1</span>。下一次攻击[<span style="color:#d4a017;font-weight:600">必定暴击</span>](/powers/next_guaranteed_crit_power.md)。获得<span style="color:#3aa675;font-weight:600">15</span>点[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)。

## 小贴士

- **核心定位**：2 费全能辅助技能牌。一次打出同时提供进攻（力量+1、必定暴击）、防御（防御+1、10 格挡）、命中+1、速度+1。是 mod 中少有的"全属性提升"卡牌，适合任何体系作为通用增益——攻防两端兼顾。
- **全属性 +1（永久增益）**：力量、防御、命中、速度各 +1，持续整场战斗（除非被清除）。具体效果：
 - [力量](/powers/strength_power.md) +1：每层 +1 攻击伤害
 - [防御](/powers/defense_power.md) +1：每层 -1 受击伤害
 - [命中](/powers/accuracy_power.md) +1：命中为正时自身不受影响；此 +1 主要用于抵消敌人施加的负命中（负命中每层 5% 概率使自身攻击伤害降为 0）
 - [速度](/powers/speed_power.md) +1：每 2 层 +1 抽牌数，单 +1 不增加抽牌，需叠加到 2 层才见效
 
 力量和防御是即时见效的核心收益；命中主要用作"保险"抵消负面；速度需累积才有收益。多次打出可叠加全属性，后期收益递增。
- **必定暴击（一次性爆发）**：下一次攻击必定暴击（1.5 倍伤害），触发后消失。配合高伤攻击牌收益最大——一张 20 点伤害的攻击牌暴击后变成 30 点。注意只对"下一次"攻击生效，要留给最高伤的攻击牌。
- **格挡（即时防御）**：获得 <span style="color:#3aa675;font-weight:600">10</span> 点[格挡](/mechanics/block.md)，当回合有效。配合防御 +1，当回合减伤效果显著——格挡扛第一波，防御扛后续。
- **配合建议**：
 - **暴击爆发流**：先打梦祈天怜挂必定暴击，再用高伤攻击牌（如[魔·决裂黎明](./demon_breaking_dawn.md)）触发暴击，伤害 ×1.5。
 - 配合多段攻击牌可以让每段都吃力量 +1 加成——多段攻击是力量增益的最佳载体。
 - 配合防御流可以叠加防御，提升减伤——多次打出后防御层数可观。
 - 速度需累积，配合其它速度提升（达到 2 层倍数）才增加抽牌。
- **升级的关键性**：格挡从 <span style="color:#3aa675;font-weight:600">10</span> 提升至 <span style="color:#3aa675;font-weight:600">15</span>（+5）。全属性和必定暴击不变。升级提升中等——只是格挡多了 5 点，核心价值（全属性+暴击）不变。升级优先级低，建议留给其它关键牌升级。
- **性价比**：2 费换来全属性 +1 + 必定暴击 + 10 格挡，功能丰富。普通稀有度合理——作为通用增益卡，不需要稀有标签。适合任何体系，尤其全能型和续航型。

## 相关能力

- [力量](/powers/strength_power.md)（全属性 +1 之一）
- [命中](/powers/accuracy_power.md)（全属性 +1 之一）
- [防御](/powers/defense_power.md)（全属性 +1 之一）
- [速度](/powers/speed_power.md)（全属性 +1 之一）
- [必定暴击](/powers/next_guaranteed_crit_power.md)（下一次攻击必定暴击）

## 相关机制

- [全属性](/mechanics/all_attributes.md)（力量、命中、防御、速度各 +1）
- [格挡](/mechanics/block.md)（获得 10/15 点格挡）

## 源码

- `SeerDreamPrayHeaven.cs`
