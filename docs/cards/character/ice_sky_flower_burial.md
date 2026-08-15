# 冰天花葬

<img src="/images/cards/ice_sky_flower_burial.png" alt="冰天花葬" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 5
- **能量消耗**: 1
- **类型**: 技能
- **稀有度**: 罕见
- **目标**: 敌方单体
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 能量消耗 | 1 | 0 |
| 冰封层数 | 1 | 1 |
| 冻伤层数 | 1 | 1 |
| 失败抽牌 | 2 | 2 |
| 失败人工制品 | 1 | 1 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> [<span style="color:#d44;font-weight:600">冰封</span>](/powers/freeze_power.md)敌人，失败则抽<span style="color:#3aa675;font-weight:600">2</span>张牌。[<span style="color:#9b59b6;font-weight:600">冻伤</span>](/powers/frostbite_power.md)敌人，失败则获得<span style="color:#3aa675;font-weight:600">1</span>层[<span style="color:#d4a017;font-weight:600">人工制品</span>](/powers/artifact_power.md)。

## 升级后

耗能<span style="color:#3aa675;font-weight:600">-1</span>。PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> [<span style="color:#d44;font-weight:600">冰封</span>](/powers/freeze_power.md)敌人，失败则抽<span style="color:#3aa675;font-weight:600">2</span>张牌。[<span style="color:#9b59b6;font-weight:600">冻伤</span>](/powers/frostbite_power.md)敌人，失败则获得<span style="color:#3aa675;font-weight:600">1</span>层[<span style="color:#d4a017;font-weight:600">人工制品</span>](/powers/artifact_power.md)。

## 小贴士

- **双控叠加**：对同一敌人先施加 1 层[冰封](/powers/freeze_power.md)，再施加 1 层[冻伤](/powers/frostbite_power.md)。两个都是冰系异常状态，叠加压制力强。
- **失败有补偿**：冰封施加失败（敌人免疫或被[人工制品](/powers/artifact_power.md)抵挡）则抽 2 张牌；冻伤施加失败则获得 1 层[人工制品](/powers/artifact_power.md)。无论成功失败都有收益，容错设计。冰封/冻伤均为可叠加型，对已有层数的敌人施加会叠加而非失败。
- **对免疫敌人反而获益**：面对冰封免疫的敌人，冰封必失败 = 白抽 2 张牌；面对冻伤免疫的敌人，冻伤必失败 = 白得 1 层人工制品。免疫敌人反而让这张牌变成纯增益。
- **0 费双控超值**：升级后 0 费打出双控 + 容错补偿。0 费换两个异常状态或两张牌/一层人工制品，性价比极高。
- **配合冰系加成**：配合增加冰封/冻伤层数的能力（如冰系遗物），可以让失败判定更难触发，确保双控成功。

## 相关能力

- [冰封](/powers/freeze_power.md)（异常状态，攻击伤害降低）
- [冻伤](/powers/frostbite_power.md)（减益，回合开始受到伤害）
- [人工制品](/powers/artifact_power.md)（原版增益，抵消下一次减益）

## 源码

- `SeerIceSkyFlowerBurial.cs`
