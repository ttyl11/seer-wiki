# 夜·冥昭瞢闇

<img src="/images/cards/dark_oblivion.png" alt="夜·冥昭瞢闇" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 无色牌
- **能量消耗**: 1
- **类型**: 技能
- **稀有度**: 罕见
- **目标**: 自身
- **可升级**: 是（1 级）
- **标签**: 亡灵法师

### 数值参数

| 参数 | 数值 |
|---|---|
| 奥斯提最大生命增量 | 3 |

## 描述

[<span style="color:#d4a017;font-weight:600">召唤</span>](/mechanics/summon.md)<span style="color:#3aa675;font-weight:600">3</span>。给予所有敌人等同于奥斯提最大生命值的[<span style="color:#9b59b6;font-weight:600">灾厄</span>](/powers/doom_power.md)。

## 升级后

[<span style="color:#d4a017;font-weight:600">保留</span>](/mechanics/retain.md)。[<span style="color:#d4a017;font-weight:600">召唤</span>](/mechanics/summon.md)<span style="color:#3aa675;font-weight:600">3</span>。给予所有敌人等同于奥斯提最大生命值的[<span style="color:#9b59b6;font-weight:600">灾厄</span>](/powers/doom_power.md)。

## 详细机制

- **"召唤 3"的真实含义——奥斯提 +3 最大生命**：数字 3 不是召唤数量，是给[奥斯提](/mechanics/summon.md)的最大生命增量——奥斯提存活时直接 +3 最大生命；死亡或不在场时以 <span style="color:#3aa675;font-weight:600">3</span> 点生命召唤/复活它。
- **灾厄层数 = 奥斯提的当前最大生命值**：打出后检测友方第一只奥斯提的**最大生命**（含本次 +3 与此前所有养成），把它作为[灾厄](/powers/doom_power.md)层数施加给所有可命中敌人。奥斯提养成越厚，处决线画得越高。
- **灾厄是永久处决线，不衰减**：灾厄没有回合衰减——敌方**回合结束前**检查"当前生命 ≤ 灾厄层数"，满足即被直接击杀（处决不是伤害，[格挡](/mechanics/block.md)无法抵挡）。一次施加，整场有效。
- **灾厄可叠加**：重复打出此牌时灾厄层数累加（每次叠上奥斯提当前最大生命值）——配合养成流反复拉高处决线。
- **前置条件**：奥斯提不存在或最大生命 ≤ 0 时不施加灾厄（召唤失败则白打）。

## 小贴士

- **🔑 奥斯提养成有多深，处决线就有多高**：这张牌把"宠物养成"直接兑换成"群体斩杀线"。奥斯提堆到 50 血 = 全体敌人 50 血以下的处决宣告——配合亡灵法师体系的养成牌（喂最大生命的召唤牌），处决线能一路涨到 Boss 半血以上。
- **处决不需要你补刀**：把敌人压到线以下的任何手段都行——[灼烧](/powers/burn_power.md)/[中毒](/powers/poison_power.md) 等 DoT 把血量压过线后，下一次敌方回合结束前的检查就会将其处决；[固定伤害](/mechanics/fixed-damage.md)压血同样有效。压血即斩杀。
- **1 费全体处决线的性价比**：1 费 = 宠物 +3 血 + 全体敌人一条不衰减的处决线——即使奥斯提零养成，1 费换 3 血线也稳赚（小怪 3 血以下必斩）；养成成型后是 1 费定音的 Boss 收割机。
- **升级保留——攒着等奥斯提养厚再打**：升级后获得[保留](/mechanics/retain.md)，回合结束不弃——抽到后可以攥在手里，等奥斯提养成到足够厚的回合再打出，灾厄线一次性拉满。
- **对 Boss 的战略价值**：Boss 血厚，常规灾厄线够不着——但灾厄不衰减，多轮叠加 + 奥斯提持续养成，长战斗里线会越爬越高，终局一锤定音。

## 相关能力

- [灾厄](/powers/doom_power.md)（原版 Debuff，回合结束时生命≤灾厄值则死亡）

## 相关机制

- [召唤](/mechanics/summon.md)（召唤奥斯提）
- [保留](/mechanics/retain.md)（升级后获得的关键词）

## 源码

- `SeerDarkOblivion.cs`
