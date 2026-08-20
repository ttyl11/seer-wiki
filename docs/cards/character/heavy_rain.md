# 大雨滂沱

<img src="/images/cards/heavy_rain.png" alt="大雨滂沱" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 7
- **能量消耗**: 2
- **类型**: 技能
- **稀有度**: 罕见
- **目标**: 所有敌方
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 格挡 | 9 | 9 |
| 敌人全属性 | -1 | -1 |
| 冰封回合 | 2 | 2 |
| PP | 7 | 7 |
| 最大PP | 7 | 7 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">7</span>/<span style="color:#3aa675;font-weight:600">7</span> 获得<span style="color:#3aa675;font-weight:600">9</span><span style="color:#d4a017;font-weight:600">格挡</span>。所有敌人<span style="color:#d4a017;font-weight:600">全属性</span><span style="color:#3aa675;font-weight:600">-1</span>。<span style="color:#d4a017;font-weight:600">冰封</span><span style="color:#3aa675;font-weight:600">2</span>回合，失败则自身所有PP卡牌PP<span style="color:#3aa675;font-weight:600">-2</span>。

## 升级后

耗能<span style="color:#3aa675;font-weight:600">-1</span>。PP: <span style="color:#3aa675;font-weight:600">7</span>/<span style="color:#3aa675;font-weight:600">7</span> 获得<span style="color:#3aa675;font-weight:600">9</span><span style="color:#d4a017;font-weight:600">格挡</span>。所有敌人<span style="color:#d4a017;font-weight:600">全属性</span><span style="color:#3aa675;font-weight:600">-1</span>。<span style="color:#d4a017;font-weight:600">冰封</span><span style="color:#3aa675;font-weight:600">2</span>回合，失败则自身所有PP卡牌PP<span style="color:#3aa675;font-weight:600">-2</span>。

## 小贴士

- **格挡+全体削弱+冰封三合一**：2 费获得 9 [格挡](/mechanics/block.md) + 所有敌人力量/速度/命中/防御各 -1 + 全体施加 2 层[冰封](/powers/freeze_power.md)，一张牌覆盖防、削弱、控三条线。
- **冰封链路**：冰封期间敌人攻击伤害 -20%（固定值，不随层数），敌方回合结束时冰封移除并转为 2 层[冻伤](/powers/frostbite_power.md)（之后 2 个敌方回合开始各掉 5 点血）。
- **冰封失败惩罚是逐敌人叠加的**：每个敌人独立判定"冰封层数是否增加"——**任何一个**免疫敌人失败，就把你手牌/抽牌堆/弃牌堆/消耗堆里**所有 PP 卡**（含这张自己）PP -2；**多个**免疫敌人失败会**重复触发**——3 个免疫敌人 = PP 一次性 -6，基本报废整场 PP 资源。遇到已知免疫异常的敌群（尤其多目标战斗）千万别打这张。
- **已有冰封可以叠加**：对已带冰封的敌人重复施加（2→4 层）判定为成功，不触发惩罚——真正失败的只有"层数完全没涨"（免疫/被拦截）。
- **全属性 -1 的收益面**：力量 -1 削敌攻击、防御 -1 让敌人多挨 1 点攻击伤害、命中 -1 抵消敌人正命中（若敌人命中归负则出现落空率）、速度 -1 累积到 -2 时全体玩家多抽 1 张——与[飞龙在天](/cards/character/flying_dragon_sky.md)的减速体系天然联动。
- **配合建议**：与冰封/冻伤/减速体系组队；打之前先确认敌方无异常免疫（或已用探针类效果验证）；PP 7 的量意味着惩罚触发时损失面极大，风险意识优先。
- **升级的关键性**：2 费→1 费，三合一效果的性价比直接跃升，优先级高。
- **性价比**：效果密度全场顶级的群控技能，但惩罚条款苛刻——对普通敌群是超值好牌，对免疫敌群是自杀按钮，敌情侦察决定它的价值。

## 相关能力

- [冰封](/powers/freeze_power.md)（攻击伤害 -20%，回合结束转为冻伤）
- [冻伤](/powers/frostbite_power.md)（冰封转化的持续掉血，每层每回合 5 点）
- [力量](/powers/strength_power.md)（敌人 -1，攻击伤害 -1）
- [防御](/powers/defense_power.md)（敌人 -1，受到攻击伤害 +1）
- [速度](/powers/speed_power.md)（敌人 -1）
- [命中](/powers/accuracy_power.md)（敌人 -1）

## 相关机制

- [格挡](/mechanics/block.md)（获得 9 点格挡）

## 源码

- `SeerHeavyRain.cs`
