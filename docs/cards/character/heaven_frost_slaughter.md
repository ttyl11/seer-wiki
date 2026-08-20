# 天霜杀伐

<img src="/images/cards/heaven_frost_slaughter.png" alt="天霜杀伐" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 5
- **能量消耗**: 1
- **类型**: 技能
- **稀有度**: 普通
- **目标**: 所有敌方
- **可升级**: 是（1 级）
- **关键词**: 升级后获得 [戏法](/mechanics/trick.md)

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 冰封回合 | 2 | 2 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 所有敌人<span style="color:#9b59b6;font-weight:600">冰封</span><span style="color:#3aa675;font-weight:600">2</span>回合，冰封失败则无效化其攻击意图。

## 升级后

<span style="color:#d4a017;font-weight:600">戏法</span>。耗能<span style="color:#3aa675;font-weight:600">-1</span>。PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 所有敌人<span style="color:#9b59b6;font-weight:600">冰封</span><span style="color:#3aa675;font-weight:600">2</span>回合，冰封失败则无效化其攻击意图。

## 小贴士

- **全体冰控链**：1 费对所有敌人施加[冰封](/powers/freeze_power.md)，形成"减攻 → 转冻伤掉血"的两段控制链：冰封期间敌人攻击伤害 **-20%**；敌方回合结束时冰封整体移除，敌人获得 2 层[冻伤](/powers/frostbite_power.md)——之后 2 个敌方回合开始各掉 5 点血（共 10 点 DoT）。
- **层数的真实语义**：冰封显示 2 层，但减攻幅度固定 20%（不随层数增长）、转化冻伤固定 2 层（不读冰封当前层数）——**同一回合连打多张天霜杀伐纯属浪费**（减攻仍是 20%、转化仍是 2 层）。PP 5 的正确用法是**跨回合铺**：每回合打一次，让每个敌方回合都有冰封减攻 + 不断续上冻伤 DoT，最多 5 个敌方回合的循环覆盖。
- **冰封失败兜底**：若某敌人冰封层数未增加（免疫/被拦截），则无效化**该敌人的攻击意图**（只替换攻击意图，非攻击行为如增益/召唤不受影响）——对免疫异常的敌人反而变成"跳过攻击"，两种结果都有兜底。注意判定是"层数未增加"：对已有冰封的敌人重复施加（层数 2→4）也算成功，不触发意图无效化。
- **戏法关键词**：升级后获得[戏法](/mechanics/trick.md)——打出时若弃牌堆有牌，随机从弃牌堆抽 1 张到手中。升级同时降 1 费（1→0）。
- **0 费循环引擎**：升级后 0 费全体冰控 + 戏法抽牌——每回合白嫖一次全体减攻 20% + 冻伤续链 + 抽 1 张，不占能量还回手牌，普通卡里的顶级升级收益。
- **配合建议**：与冻伤/冰系体系叠 DoT；面对高攻 Boss 时每个敌方回合的 20% 减攻等价于巨额格挡；对免疫异常的敌人主动打它触发意图无效化，等于变相眩晕。
- **性价比**：1 费换"1 个敌方回合全体减攻 20% + 全体 10 点 DoT + 免疫兜底"，控制密度对得起价格；升级后质变为 0 费循环牌，优先级极高。

## 相关能力

- [冰封](/powers/freeze_power.md)（攻击伤害降低，回合结束转为冻伤）
- [冻伤](/powers/frostbite_power.md)（冰封结束时获得）

## 相关机制

- [戏法](/mechanics/trick.md)（打出时从弃牌堆随机抽 1 张牌，升级后获得）

## 源码

- `SeerHeavenFrostSlaughter.cs`
