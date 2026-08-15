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
| 召唤数量 | 3 |

## 描述

[<span style="color:#d4a017;font-weight:600">召唤</span>](/mechanics/summon.md)<span style="color:#3aa675;font-weight:600">3</span>。给予所有敌人等同于奥斯提最大生命值的[<span style="color:#9b59b6;font-weight:600">灾厄</span>](/powers/doom_power.md)。

## 升级后

[<span style="color:#d4a017;font-weight:600">保留</span>](/mechanics/retain.md)。[<span style="color:#d4a017;font-weight:600">召唤</span>](/mechanics/summon.md)<span style="color:#3aa675;font-weight:600">3</span>。给予所有敌人等同于奥斯提最大生命值的[<span style="color:#9b59b6;font-weight:600">灾厄</span>](/powers/doom_power.md)。

## 小贴士

- **召唤奥斯提**：召唤一只奥斯提（原版亡灵法师的召唤物），[召唤](/mechanics/summon.md)数量为 <span style="color:#3aa675;font-weight:600">3</span>。
- **灾厄机制**：对所有可命中敌人施加 [灾厄](/powers/doom_power.md)（原版 Debuff），层数等于奥斯提的最大生命值。灾厄效果：敌方回合结束时，若其生命值 ≤ 灾厄值，直接死亡。
- **奥斯提生命检测**：召唤后检测友方阵营中是否存在奥斯提，若未找到或其最大生命值 ≤ 0，则不施加灾厄。
- **升级效果**：添加[保留](/mechanics/retain.md)关键词，回合结束时不被弃置。

## 相关能力

- [灾厄](/powers/doom_power.md)（原版 Debuff，回合结束时生命≤灾厄值则死亡）

## 相关机制

- [召唤](/mechanics/summon.md)（召唤奥斯提）
- [保留](/mechanics/retain.md)（升级后获得的关键词）

## 源码

- `SeerDarkOblivion.cs`
