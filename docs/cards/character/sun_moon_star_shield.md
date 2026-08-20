# 日月星盾

<img src="/images/cards/sun_moon_star_shield.png" alt="日月星盾" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 3
- **能量消耗**: 1
- **辉星消耗**: 1
- **类型**: 技能
- **稀有度**: 普通
- **目标**: 自身
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 格挡 | 9 | 15 |
| 异常免疫反弹回合 | 3 | 3 |
| 辉星消耗 | 1 | 1 |
| PP | 3 | 3 |
| 最大PP | 3 | 3 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">3</span>/<span style="color:#3aa675;font-weight:600">3</span> 获得<span style="color:#3aa675;font-weight:600">9</span>点[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)。<span style="color:#3aa675;font-weight:600">3</span>回合内，免疫并反弹受到的[<span style="color:#d44;font-weight:600">异常状态</span>](/mechanics/abnormal-status.md)。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">3</span>/<span style="color:#3aa675;font-weight:600">3</span> 获得<span style="color:#3aa675;font-weight:600">15</span>点[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)。<span style="color:#3aa675;font-weight:600">3</span>回合内，免疫并反弹受到的[<span style="color:#d44;font-weight:600">异常状态</span>](/mechanics/abnormal-status.md)。

## 小贴士

- **格挡加异常免疫反弹的双重防御**：获得 <span style="color:#3aa675;font-weight:600">9</span> 点[格挡](/mechanics/block.md)挡攻击伤害，同时 <span style="color:#3aa675;font-weight:600">3</span> 回合内免疫所有[异常状态](/mechanics/abnormal-status.md)并将施加者反弹给全体敌方。格挡防物理，免疫反弹防异常，两种防御覆盖不同威胁。
- **反弹的是异常状态不是伤害**：[异常免疫·反弹](/powers/debuff_immune_reflect_power.md)只拦截异常状态（如[焚烬](/powers/ash_power.md)、[沉默](/powers/silence_power.md)、[烧伤](/powers/burn_power.md)等），不拦截普通攻击伤害或[固定伤害](/powers/fixed_damage_power.md)。敌人试图给你挂异常时，异常被免疫并原样反弹给所有敌方。
- **辉星消耗是额外代价**：除了 <span style="color:#3aa675;font-weight:600">1</span> 点能量，这张牌还消耗 <span style="color:#3aa675;font-weight:600">1</span> 颗[辉星](/mechanics/star.md)。辉星是稀缺资源，所以这张牌不能随意连打，需要权衡时机。
- **升级只加格挡不加免疫**：升级后格挡从 <span style="color:#3aa675;font-weight:600">9</span> 提升到 <span style="color:#3aa675;font-weight:600">15</span>，异常免疫反弹回合数不变（仍为 <span style="color:#3aa675;font-weight:600">3</span> 回合）。升级强化的是硬扛攻击的能力，不延长异常免疫窗口。
- **性价比**：1 费加 1 辉星合理——9 格挡加 3 回合异常免疫反弹，在异常状态密集的战斗中是顶级防御牌，辉星代价限制了滥用。

## 相关能力

- [异常免疫·反弹](/powers/debuff_immune_reflect_power.md)（免疫并反弹异常状态）

## 相关机制

- [格挡](/mechanics/block.md)
- [异常状态](/mechanics/abnormal-status.md)

## 源码

- `SeerSunMoonStarShield.cs`
