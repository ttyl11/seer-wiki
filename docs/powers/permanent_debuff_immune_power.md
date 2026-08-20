# 永久异常免疫

> **归属**：玩家可施加
> **施加来源**：
> - [超算鲁比克](/relics/rare/rubik_supercomputer.md)（遗物——每场战斗开始时矩阵秩为 0）
> - 薇尔诗关键词——与薇尔诗牌**隔位**的牌被打出后，本场战斗生效
> - [殉道者圣别](/cards/colorless/martyr_holy_divine.md)（卡牌——三件套选择免疫分支后，下一场战斗生效）

<img src="/images/powers/permanent_debuff_immune_power.png" alt="永久异常免疫" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 单次（Single，无层数）
- **可见**: 是

## 描述

永久免疫所有[<span style="color:#d44;font-weight:600">异常状态</span>](/mechanics/abnormal-status.md)和<span style="color:#d44;font-weight:600">debuff</span>。

## 详细机制

- **双轨免疫**：同时免疫所有 25 种 Seer [异常状态](/mechanics/abnormal-status.md)**和所有原版 Debuff**（虚弱、易伤、缩小等施加量一律归零）——覆盖面比[异常免疫](/powers/debuff_immune_power.md)（仅免 Seer 异常）更广。
- **无层数、不衰减**：没有层数概念，整场战斗持续生效，不存在"按回合 -1"或"按次数 -1"的消耗。
- **不可见能力不免疫**：仅对可见的能力生效。

## 小贴士

- 三个来源的获取难度：薇尔诗隔位最容易（手里有薇尔诗牌时打它隔位的牌即可），超算鲁比克需要 PP 牌矩阵秩为 0 的刻意构筑，殉道者圣别是三件套的免疫分支（下一场战斗才生效，本战斗没有）。
- [竭血残蝶](/cards/character/blood_exhaust_butterfly.md)的次战免疫走的是 **999 层"异常免疫"**（另一个能力，只免 Seer 异常、不含原版 Debuff），并非本能力——收益类似但范围不同。
- 原版 Debuff 一并被免疫意味着虚弱/易伤/缩小流对持有者完全失效，是应对多异常怪（如奇幻之粉）的顶级保命手段。

## 相关卡牌

- [殉道者圣别](/cards/colorless/martyr_holy_divine.md)（免疫分支 → 下一场战斗）
- [竭血残蝶](/cards/character/blood_exhaust_butterfly.md)（关联参照：次战给 999 层异常免疫）

## 相关遗物

- [超算鲁比克](/relics/rare/rubik_supercomputer.md)（秩为 0 时获得）

## 相关关键词

- [薇尔诗](/mechanics/keywords.md)（隔位打出 → 本场战斗免疫异常）

## 源码

- `SeerPermanentDebuffImmunePower.cs`
