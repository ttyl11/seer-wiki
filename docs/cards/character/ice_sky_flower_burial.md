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

- **冰封→冻伤是一条转化链**：[冰封](/powers/freeze_power.md)使敌人**攻击伤害固定降低 20%**（减伤幅度不随层数增长），到敌人回合结束时自动**转化为 2 层[冻伤](/powers/frostbite_power.md)并消失**；冻伤则让敌人每回合开始受到 5 点伤害/层并衰减 1 层。这张卡先冰封再直接补 1 层冻伤，双双重叠在同一个敌人身上。
- **成功链的完整收益**：两者都施加成功时——敌人本回合攻击 -20%；回合结束冰封转为 2 层冻伤，加上直接施加的 1 层共 3 层，下回合开始敌人自动受 15 点伤害，之后每回合 10、5 点递减。一次施法同时拿到"当回合减攻 + 后续三回合 DoT"。
- **失败判定看层数**：判定标准是目标身上该异常的层数是否增加——只有免疫或被[人工制品](/powers/artifact_power.md)抵挡（层数未涨）才算失败；对已有冰封/冻伤的敌人施加属于正常叠加，不算失败。
- **失败也有收益**：冰封失败 → 抽 2 张牌；冻伤失败 → 自己获得 1 层人工制品。面对免疫冰系异常的敌人，这张卡直接变成"抽 2 张 + 得 1 层人工制品"的纯增益，无论成败都不亏。
- **0 费控场超值**：升级后 0 费打出，即使两项都失败也有抽牌+人工制品兜底，是攻防两端都合格的万能填充牌。

## 相关能力

- [冰封](/powers/freeze_power.md)（异常状态：敌人攻击伤害降低 20%，其回合结束时转化为 2 层冻伤）
- [冻伤](/powers/frostbite_power.md)（异常状态：每回合开始受到 5 点伤害/层并衰减 1 层）
- [人工制品](/powers/artifact_power.md)（原版增益，抵消下一次减益）

## 源码

- `SeerIceSkyFlowerBurial.cs`
