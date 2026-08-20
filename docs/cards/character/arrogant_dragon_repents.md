# 亢龙有悔

<img src="/images/cards/arrogant_dragon_repents.png" alt="亢龙有悔" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 10
- **能量消耗**: 1
- **类型**: 技能
- **稀有度**: 普通
- **目标**: 自身
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 反弹回合 | 2 | 4 |
| 格挡 | 7 | 7 |
| PP | 10 | 10 |
| 最大PP | 10 | 10 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">10</span>/<span style="color:#3aa675;font-weight:600">10</span> <span style="color:#3aa675;font-weight:600">2</span>回合内[<span style="color:#d4a017;font-weight:600">异常免疫·反弹</span>](/powers/debuff_immune_reflect_power.md)。获得<span style="color:#3aa675;font-weight:600">7</span>点[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">10</span>/<span style="color:#3aa675;font-weight:600">10</span> <span style="color:#3aa675;font-weight:600">4</span>回合内[<span style="color:#d4a017;font-weight:600">异常免疫·反弹</span>](/powers/debuff_immune_reflect_power.md)。获得<span style="color:#3aa675;font-weight:600">7</span>点[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)。

## 小贴士

- **反弹只认异常状态，不认普通减益**：**只反弹 25 种异常状态**（睡眠/凝滞/烧伤/冰封/中毒/流血/冻伤/恐惧/瘫痪/沉默/衰弱/狂暴/束缚/沸涌/石化/感染/超频/焚烬/失明/诅咒/臣服/寄生/麻痹/神游/易燃）。原版的虚弱、易伤、缩小等普通减益 **不在此列表里，会被正常施加，不反弹**。这是最常见的误判点——以为"异常免疫"等于"减益全免疫"，实际范围窄得多。
- **只反弹敌人施加的，不反弹自己施加的**：只有**敌方施加**的异常状态才会被反弹。自己烧伤自己、自己中毒自己这类操作不会被反弹，可以放心配合自伤流。
- **反弹给所有敌人**：反弹时对每个可命中敌人都施加等量同种异常状态。多敌人遭遇战中，敌方试图给你挂 1 层中毒，结果所有敌方各中 1 层中毒——净赚 N 倍。
- **反弹不保留原始施加者信息**：反弹时由反弹者重新施加，不保留原始施加者。这意味着某些"施加者触发"的额外效果不会因反弹而触发。
- **"2 回合"数的是敌方回合**：反弹层数在**对方回合结束**时才递减——所以 2 层实际覆盖的是敌方接下来的 2 个完整回合（包括敌方在这 2 回合里所有的挂状态尝试），本方回合打出不打折。升级 4 层 = 敌方连着 4 个回合的异常全部反弹回去。
- **格挡是额外附赠**：7 点格挡是这张牌的"副菜"，主菜是反弹。但 7 点格挡在 1 费牌里不算少，相当于一张小型防御——反弹期间你既有格挡减伤，又能反弹异常，生存能力极强。
- **升级的价值**：反弹回合从 2 增至 4，**翻倍**。2 回合只能挡一次关键波次，4 回合能覆盖整场精英战或 Boss 的两个技能周期。升级优先级高。
- **性价比**：1 费合理——反弹+格挡+异常免疫三合一。

## 相关能力

- [异常免疫·反弹](/powers/debuff_immune_reflect_power.md)（核心授予能力）
- [异常免疫](/powers/debuff_immune_power.md)（不带反弹的版本，本卡未授予但相关）

## 源码

- `SeerArrogantDragonRepents.cs`
