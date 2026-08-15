# 石破天惊

<img src="/images/cards/stone_breaker.png" alt="石破天惊" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 10
- **能量消耗**: 0
- **类型**: 攻击
- **稀有度**: 普通
- **目标**: 敌方单体
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 伤害 | 3 | 6 |
| PP | 10 | 10 |
| 最大PP | 10 | 10 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">10</span>/<span style="color:#3aa675;font-weight:600">10</span> 造成<span style="color:#3aa675;font-weight:600">3</span>点伤害。消除目标[<span style="color:#d4a017;font-weight:600">全属性</span>](/mechanics/all_attributes.md)的提升。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">10</span>/<span style="color:#3aa675;font-weight:600">10</span> 造成<span style="color:#3aa675;font-weight:600">6</span>点伤害。消除目标[<span style="color:#d4a017;font-weight:600">全属性</span>](/mechanics/all_attributes.md)的提升。

## 小贴士

- **先伤后消的顺序**：先打出 <span style="color:#3aa675;font-weight:600">3</span> 点攻击伤害，再逐项检查目标的[力量](/powers/strength_power.md)、[命中](/powers/accuracy_power.md)、[防御](/powers/defense_power.md)、[速度](/powers/speed_power.md)——只要某项为正层数就整个移除。注意是"移除整个能力"而非"清零到 0"，原能力的来源信息会丢失。
- **只消增益不碰减益**：仅移除正层数的[全属性](/mechanics/all_attributes.md)增益，对负层数（如已[衰弱](/powers/weaken_power.md)的目标）无影响。不用担心"帮敌人清掉负面"。
- **消除范围限定四属性**：只处理力量、命中、防御、速度四项 seer 属性，不触碰原版虚弱/易伤等减益，也不影响暴击、先制等其它能力。
- **保留给叠增益的强敌**：<span style="color:#3aa675;font-weight:600">3</span> 点伤害本身微不足道，真正的价值在于消除属性——留给叠力量/防御的精英或 Boss 才划算。遇到不爱叠属性的敌人，这张牌基本等于 0 费打 3，价值很低。
- **性价比**：0 费合理——3 点伤害几乎白送，核心价值是属性消除。无增益敌人面前是废件，有增益 Boss 面前是关键解牌。

## 相关机制

- [全属性](/mechanics/all_attributes.md)（力量 / 命中 / 防御 / 速度）

## 源码

- `SeerStoneBreaker.cs`
