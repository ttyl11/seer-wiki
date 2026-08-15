# 绝灭·万物哀鸣

<img src="/images/cards/extinction.png" alt="绝灭·万物哀鸣" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 5
- **能量消耗**: 3
- **类型**: 攻击
- **稀有度**: 稀有
- **目标**: 敌方单体
- **关键词**: [虚无](/mechanics/ethereal.md)、[芜生](/mechanics/void_birth.md)
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 生命百分比 | 50 | 50 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 获得等量于当前PP的[<span style="color:#9b59b6;font-weight:600">魔王咒怨</span>](/powers/demon_king_curse_power.md)。若已有[<span style="color:#9b59b6;font-weight:600">魔王咒怨</span>](/powers/demon_king_curse_power.md)，对目标造成所有敌人生命值之和<span style="color:#3aa675;font-weight:600">50</span>%的伤害。

## 升级后

不再[虚无](/mechanics/ethereal.md)。PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 获得等量于当前PP的[<span style="color:#9b59b6;font-weight:600">魔王咒怨</span>](/powers/demon_king_curse_power.md)。若已有[<span style="color:#9b59b6;font-weight:600">魔王咒怨</span>](/powers/demon_king_curse_power.md)，对目标造成所有敌人生命值之和<span style="color:#3aa675;font-weight:600">50</span>%的伤害。

## 小贴士

- **核心定位**：一张"魔王咒怨"卡组的核心叠加+爆发卡。首次打出施加等量 PP 的魔王咒怨层数（蓄能），第二次起触发"所有敌人生命之和 × 50%"的巨额攻击伤害（爆发）。配合虚无+芜生关键词的限制，是一张高风险高回报的斩杀卡。稀有度合理——魔王咒怨体系的核心组件。
- **魔王咒怨（核心能力）**：[魔王咒怨](/powers/demon_king_curse_power.md)是 mod 增益能力，层数可叠加。每层提供：
 - 攻击伤害 +5%
 - 伤害减免 5%（上限 95%）
 - 攻击技能 3% 概率秒杀对面（秒杀传染同 HP 敌人）
 - 达到 10 层时自身免疫[异常状态](/mechanics/abnormal-status.md)
 
 魔王咒怨层数越多，攻防两端越强，且有秒杀概率。这张牌是魔王咒怨的主要叠加渠道。
- **伤害触发条件（关键细节）**：打出时先施加"当前 PP 值"等量的魔王咒怨层数，然后检查"之前已有的魔王咒怨层数"。**仅当之前已有层数 > 0 且本次打出时 PP > 0 时才触发伤害**。这意味着：
 - **首次打出**（已有 0 层）：之前已有层数 = 0，**仅施加层数不造成伤害**。
 - **第二次打出**（已有 N 层，且本次 PP > 0）：之前已有层数 = N > 0，触发伤害。
 - **PP 耗尽时打出**（PP = 0）：施加 0 层，且 PP = 0，**不触发伤害**。
 
 所以这张牌需要**至少打出 2 次**才能触发伤害，第一次是蓄能，第二次起是爆发。
- **伤害计算**：伤害 = 所有敌人当前生命值之和 × 50%。这是一个**全体血量百分比**伤害——多敌人遭遇战中伤害爆炸。示例：
 - 1 个敌人 100 血 → 伤害 50
 - 3 个敌人各 100 血 → 伤害 150（总和 300 × 50%）
 - 3 个敌人各 200 血 → 伤害 300（总和 600 × 50%）
 
 多敌人遭遇战中一张牌可以打出 150-300+ 伤害，但只对单一目标造成。
- **虚无+芜生（强约束）**：[虚无](/mechanics/ethereal.md)——回合结束在手牌则被消耗；[芜生](/mechanics/void_birth.md)——打出后转化为"芜"。两个关键词共同约束：**必须当回合打出**（否则虚无消耗），打出后又转化为芜（无法保留）。这让这张牌的打出时机非常紧迫——必须在抽到当回合用 3 费打出。
- **配合建议**：
 - **PP 恢复**：配合[永恒](./eternity.md)（恢复所有 PP）可以让这张牌多次打出——第一次蓄能，恢复 PP 后第二次爆发，再恢复再爆发。
 - **多敌人爆发**：在多敌人遭遇战中（如精英战）打出第二次，伤害按所有敌人血量之和计算，一张牌清场。
 - 升级后移除虚无，可以保留到 PP 充足或敌人血量高时再爆发。
- **升级的关键性**：移除[虚无](/mechanics/ethereal.md)关键词。这是**质变升级**——升级前必须当回合打出 3 费，否则被虚无消耗；升级后可以保留到 PP 充足或敌人血量高时再爆发。升级优先级极高。
- **性价比**：3 费换魔王咒怨叠加 + 巨额血量百分比伤害，但需要至少 2 次打出才能触发伤害。首次打出仅蓄能不触发伤害，性价比一般；第二次起伤害爆炸。适合魔王咒怨卡组和多敌人斩杀流，不适合快攻流（蓄能节奏太慢）。

## 相关能力

- [魔王咒怨](/powers/demon_king_curse_power.md)（获得等量于当前PP的层数）

## 相关机制

- [虚无](/mechanics/ethereal.md)（关键词，升级后移除）
- [芜生](/mechanics/void_birth.md)（mod 关键词）

## 源码

- `SeerExtinction.cs`
- `SeerDemonKingCursePower.cs`
