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
- **全属性 +1（永久增益）**：力量、防御、命中、速度各 +1，持续整场战斗（除非被清除）。具体效果（四个 Power 源码逐一验证）：
 - [力量](/powers/strength_power.md) +1：每层使自己造成的攻击伤害 +1（多段攻击每段都吃 +1，段数越多总加成越大）
 - [防御](/powers/defense_power.md) +1：每层使自己**受到的攻击伤害**最终掉血 -1（对固伤、DoT 等非攻击伤害无效）
 - [命中](/powers/accuracy_power.md) +1：命中为正时没有任何额外收益——这 +1 层的价值是把"负命中"拉回 0（敌人给你叠了 -N 命中时，每层负命中有 5% 概率让你的攻击伤害整次归零，+1 命中可以抵消一层）
 - [速度](/powers/speed_power.md) +1：每 2 层回合抽牌 +1（1 层无效果，需攒到 2/4/6 层才分别多抽 1/2/3 张）
 
 力量和防御是即时见效的核心收益；命中主要用作"保险"抵消负面；速度需累积才有收益。多次打出可叠加全属性（PP 5 单场最多打 5 次 = 全属性各 +5），后期收益递增。
- **必定暴击（下次攻击 ×1.5，消耗规则宽松）**：获得"下一次攻击必定暴击"（伤害 ×1.5），经验证的具体规则：
 - **整张攻击牌的所有段都暴击**：暴击增益在整次攻击结算完毕后才移除——5×4 的多段攻击牌是每一段都 ×1.5，不是只翻第一段。
 - **只对"攻击伤害"生效**：攻击牌、以及用攻击指令造成直伤的技能牌都算；[固定伤害](/mechanics/fixed-damage.md)、灼烧等 DoT 不翻倍。
 - **不攻击就不消耗**：打纯 buff/防御技能不会触发攻击结算，增益一直留着，直到你真正打出一次攻击。
 - 由于是乘法 ×1.5，用在哪张攻击牌上相对收益都一样（+50%）；自然应留给**总伤害最高**的一次攻击（如满 buff 的爆发回合或全体攻击），绝对收益最大。
- **格挡（即时防御）**：获得 <span style="color:#3aa675;font-weight:600">10</span> 点[格挡](/mechanics/block.md)，当回合有效。配合防御 +1，当回合减伤效果显著——格挡扛第一波，防御持续减后续攻击伤害。
- **配合建议**：
 - **暴击爆发流**：先打梦祈天怜挂必定暴击，再用高总伤攻击触发 ×1.5——与[饮血屠龙](./drink_blood_dragon_slaying.md)的龙属性翻倍同回合叠加时是 1.5×2=3 倍伤害（两者互不冲突，可同时吃）。
 - **多段攻击**：每段都吃力量 +1 和必定暴击 ×1.5——多段攻击牌是力量与暴击增益的最佳载体。
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
