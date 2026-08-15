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

- **格挡+全体削弱+冰封**：2 费获得 9 [格挡](/mechanics/block.md) + 所有敌人全属性 -1（力量/防御/命中/速度各 -1）+ 施加 2 层[冰封](/powers/freeze_power.md)，是攻防一体的群控技能。
- **冰封机制**：冰封使敌人攻击伤害降低，回合结束时移除并获得[冻伤](/powers/frostbite_power.md)层数。2 层冰封持续 2 回合。
- **冰封失败的代价**：如果冰封施加失败（敌人免疫冰封或已有冰封无法叠加），自身所有 PP 卡牌 PP -2 作为惩罚。注意敌人是否有冰封免疫能力。
- **全属性-1**：敌人力量 -1（攻击伤害 -1）、防御 -1（受到攻击伤害 +1）、速度 -1（需累积 -2 才影响玩家抽牌）、命中 -1（正数无直接效果，抵消敌人正命中）。
- **配合建议**：配合其他冰封/冻伤卡牌使用，冰封后敌人攻击伤害大幅降低。避免对有异常免疫的敌人使用——冰封失败会导致自身 PP 损失。
- **升级的关键性**：耗能从 2 降至 1，-1 费。2 费变 1 费提升灵活性极大。升级优先级高。
- **性价比**：2 费换 9 格挡+全体削弱+冰封三合一，罕见稀有度配得上这个攻防一体效果。冰封失败有 PP 代价，对异常免疫敌人需谨慎使用。

## 相关能力

- [冰封](/powers/freeze_power.md)（攻击伤害降低，回合结束转为冻伤）
- [力量](/powers/strength_power.md)（敌人 -1，攻击伤害 -1）
- [防御](/powers/defense_power.md)（敌人 -1，受到攻击伤害 +1）
- [速度](/powers/speed_power.md)（敌人 -1）
- [命中](/powers/accuracy_power.md)（敌人 -1）

## 相关机制

- [格挡](/mechanics/block.md)（获得 9 点格挡）

## 源码

- `SeerHeavyRain.cs`
