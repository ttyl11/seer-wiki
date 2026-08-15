# 灼目天星

<img src="/images/cards/blinding_heaven_star.png" alt="灼目天星" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 5
- **能量消耗**: 1
- **类型**: 技能
- **稀有度**: 普通
- **目标**: 自身
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 免疫回合 | 2 | 3 |
| 焚烬层数 | 1 | 1 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 获得<span style="color:#3aa675;font-weight:600">2</span>回合[<span style="color:#d4a017;font-weight:600">异常免疫</span>](/powers/debuff_immune_power.md)，对所有敌人[<span style="color:#d4a017;font-weight:600">焚烬</span>](/powers/ash_power.md)<span style="color:#3aa675;font-weight:600">1</span>回合。<br/>[<span style="color:#d4a017;font-weight:600">唱词：霍尔希德</span>](/powers/chant_khorshid_power.md)。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 获得<span style="color:#3aa675;font-weight:600">3</span>回合[<span style="color:#d4a017;font-weight:600">异常免疫</span>](/powers/debuff_immune_power.md)，对所有敌人[<span style="color:#d4a017;font-weight:600">焚烬</span>](/powers/ash_power.md)<span style="color:#3aa675;font-weight:600">1</span>回合。<br/>[<span style="color:#d4a017;font-weight:600">唱词：霍尔希德</span>](/powers/chant_khorshid_power.md)。

## 小贴士

- **三合一的复合卡**：一次打出同时做三件事——自身 2 回合异常免疫（硬控防护）、全体敌人 1 层焚烬（群体减伤+转化烧伤）、自身 1 层唱词：霍尔希德（PP 恢复触发器）。三件事相互独立，不依赖彼此触发。
- **焚烬的真实价值**：焚烬让敌人攻击伤害降低 20%，**且每回合结束时把焚烬转化为 2 层烧伤**——烧伤会让敌人每回合自伤 3 点并减攻 1 点。所以 1 层焚烬 ≈ 1 回合 20% 减伤 + 2 层烧伤的后续收益，对多敌人遭遇战性价比很高。
- **唱词：霍尔希德是 PP 引擎**：霍尔希德的触发条件是"造成攻击伤害后，且自身不为在场 HP 最高的单位"。打出这张牌后，后续任何造成攻击伤害的牌都可能触发 PP 恢复，**恢复范围覆盖手牌/抽牌堆/弃牌堆中所有 PP 未满的 PP 牌**。配合多段攻击牌可以一次恢复多张 PP 牌的 PP，是 PP 循环的核心。
- **升级只加免疫回合**：焚烬层数和唱词层数都不变。2→3 回合免疫看似不多，但覆盖的是"精英/Boss 的异常施加周期"——很多 Boss 的关键异常在第 3 回合施加，3 回合免疫正好挡住，2 回合就漏了。
- **性价比**：1 费合理——三合一效果（群体减伤+自身免疫+PP 引擎），不占能耗便于百搭。

## 相关能力

- [异常免疫](/powers/debuff_immune_power.md)（核心授予能力）
- [唱词：霍尔希德](/powers/chant_khorshid_power.md)（核心授予能力）
- [焚烬](/powers/ash_power.md)（对敌人施加的异常状态）

## 源码

- `SeerBlindingHeavenStar.cs`
