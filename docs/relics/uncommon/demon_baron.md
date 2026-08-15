# 恶魔男爵

<img src="/images/relics/demon_baron.png" alt="恶魔男爵" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 罕见

### 数值参数

| 参数 | 数值 |
|---|---|
| JugglingStacks（杂耍层数） | 1 |

## 描述

战斗开始时获得<span style="color:#3aa675;font-weight:600">1</span>层<span style="color:#d4a017;font-weight:600">[杂耍](/powers/juggling_power.md)</span>。<br/>回合开始时，给予所有敌人等于回合数的<span style="color:#d4a017;font-weight:600">[灾厄](/powers/doom_power.md)</span>。<br/>战斗结束时，向<span style="color:#d4a017;font-weight:600">牌组</span>中加入1张<span style="color:#d4a017;font-weight:600">[小丑](/cards/token/joker.md)</span>。

- **⚠️ 本地化与源码不一致**：本地化③"战斗结束时"实际仅在**战斗胜利**时触发加入小丑，战败不会加入。实际效果以实际效果为准。
- **回合计数**：回合计数在战斗开始时重置为 0，每次自身回合开始时 +1，灾厄层数 = 当前回合数（即第 N 回合开始时给 N 层）。
- **目标范围**：遍历所有可击中敌人，逐个施加灾厄。
- **小丑永久加入**：战斗胜利时将小丑加入永久牌组，跨战斗保留。

## 风味文字

<span style="color:#d44;font-weight:600">灾厄缠身。</span>

## 小贴士

- **回合计数非持久化**：回合计数每场战斗重置；与小丑卡牌的累积形成"长线收益"。
- **触发顺序**：战斗开始时先施加杂耍（1 层），随后每回合开始给灾厄，最后战斗胜利时加小丑。
- **悬浮提示**：注册了杂耍、灾厄、小丑卡牌三种悬浮提示。

## 源码

- `SeerDemonBaron.cs`
