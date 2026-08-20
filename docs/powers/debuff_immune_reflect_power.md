# 异常免疫·反弹

> **归属**：玩家可施加
> **施加来源**：玩家获得——[亢龙有悔](/cards/character/arrogant_dragon_repents.md)（卡牌）、[染夜天妖](/cards/character/night_demon.md)（卡牌）、[日月星盾](/cards/character/sun_moon_star_shield.md)（卡牌）、[阑珊百转](/cards/character/waning_turns.md)（卡牌）、[妖族异术](/cards/character/yao_zu_yi_shu.md)（卡牌）

<img src="/images/powers/debuff_immune_reflect_power.png" alt="异常免疫·反弹" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 递减（计数型）
- **可见**: 是

## 描述

免疫[<span style="color:#d44;font-weight:600">异常状态</span>](/mechanics/abnormal-status.md)<span style="color:#3aa675;font-weight:600">层数</span>回合，并将受到的异常状态反弹给所有敌人。在对方回合结束时减少<span style="color:#3aa675;font-weight:600">1</span>层。

## 详细机制

- **免疫 + 原样反弹**：敌人试图给你施加异常状态时，施加量归零（完全免疫），同时把**同种异常、同层数**反弹给所有可被攻击的敌方。
- **只作用于异常状态**：拦截范围是全部 <span style="color:#3aa675;font-weight:600">25</span> 种[异常状态](/mechanics/abnormal-status.md)，普通减益（如非异常的属性类 debuff）和[固定伤害](/powers/fixed_damage_power.md)不在拦截范围内。
- **不反弹自己挂的**：自己施加的异常（如有自我施加机制的卡牌）不触发反弹；无施加来源的异常同样不反弹，但仍被免疫。
- **不拦截免疫类能力**：不会免疫/反弹"异常免疫"和"异常免疫·反弹"自身，避免递归。
- **对方回合结束递减**：在**对方**回合结束时层数 -<span style="color:#3aa675;font-weight:600">1</span>——生效窗口是敌方回合（敌方施加异常的时机），N 层恰好覆盖 N 个敌方回合，施加当回合不损耗。
- **与异常免疫的区别**：[异常免疫](/powers/debuff_immune_power.md)只免疫不反弹；本能力在免疫的同时让挂异常的敌方全体吃下同款异常。

## 相关卡牌

- [日月星盾](/cards/character/sun_moon_star_shield.md)（施加 <span style="color:#3aa675;font-weight:600">3</span> 层，消耗 <span style="color:#3aa675;font-weight:600">1</span> 颗[辉星](/mechanics/star.md)）
- [妖族异术](/cards/character/yao_zu_yi_shu.md)（先制 + 格挡 + 免疫反弹）

## 相关机制

- [异常状态](/mechanics/abnormal-status.md)

## 源码

- `SeerDebuffImmuneReflectPower.cs`
