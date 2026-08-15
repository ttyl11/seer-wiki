# 阑珊百转

<img src="/images/cards/waning_turns.png" alt="阑珊百转" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 5
- **能量消耗**: 1
- **类型**: 技能
- **稀有度**: 罕见
- **目标**: 自身
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 免疫反弹回合 | 4 | 4 |
| 缓冲（条件获得） | 1 | 1 |
| 保留 | 否 | 是 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 解除自身[<span style="color:#d4a017;font-weight:600">全属性</span>](/mechanics/all_attributes.md)下降，成功则[<span style="color:#d4a017;font-weight:600">缓冲</span>](/powers/buffer_power.md)+<span style="color:#3aa675;font-weight:600">1</span>。<span style="color:#3aa675;font-weight:600">4</span>回合内免疫并反弹[<span style="color:#d44;font-weight:600">异常状态</span>](/mechanics/abnormal-status.md)。

## 升级后

[<span style="color:#d4a017;font-weight:600">保留</span>](/mechanics/retain.md)。PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 解除自身[<span style="color:#d4a017;font-weight:600">全属性</span>](/mechanics/all_attributes.md)下降，成功则[<span style="color:#d4a017;font-weight:600">缓冲</span>](/powers/buffer_power.md)+<span style="color:#3aa675;font-weight:600">1</span>。<span style="color:#3aa675;font-weight:600">4</span>回合内免疫并反弹[<span style="color:#d44;font-weight:600">异常状态</span>](/mechanics/abnormal-status.md)。

## 小贴士

- **解负属性才给缓冲**：检测力量/防御/命中/速度四项[全属性](/mechanics/all_attributes.md)是否为负。只要任意一项为负，就施加等量正层数清零，并奖励 1 层[缓冲](/powers/buffer_power.md)。四项都没负值时只给免疫反弹，不给缓冲——所以缓冲是"解负奖励"，不是无条件给。
- **清零不反转**：解除是"把负层数加回零"，不是取反成正层数。比如 -3 力量变成 0，不会变成 +3。别指望用它刷正向属性。
- **异常免疫反弹 4 回合**：获得 4 回合异常免疫·反弹——期间免疫所有[异常状态](/mechanics/abnormal-status.md)，并把受到的异常反弹给所有敌人。注意这是 seer 异常状态体系（烧伤/中毒/冰封/失明/麻痹等 25 种），不免疫原版虚弱/易伤。
- **反弹给全体敌人**：反弹目标是所有敌人，多敌人场景下反弹收益更大。适合对抗爱挂异常的精英/Boss（如墨杜萨石化系列、奇幻之粉多异常）。
- **升级加保留**：升级仅添加[保留](/mechanics/retain.md)，不增加免疫回合数。保留让这张防御牌能攒手里等敌人挂异常或降属性的回合再打，时机更灵活。
- **性价比**：1 费换"解负+缓冲+4 回合异常免疫反弹"三合一，对抗异常/降属性敌人时极强，但敌人不挂异常不解属性时价值打折。是张针对性防御牌。

## 相关能力

- [缓冲](/powers/buffer_power.md)（成功解除全属性下降时获得 1 层）
- 异常免疫·反弹（免疫并反弹异常状态的能力）

## 相关机制

- [全属性](/mechanics/all_attributes.md)（力量/命中/防御/速度的合称）
- [异常状态](/mechanics/abnormal-status.md)（被免疫并反弹的独立状态体系）
- [保留](/mechanics/retain.md)（升级后获得的关键词）

## 源码

- `SeerWaningTurns.cs`
