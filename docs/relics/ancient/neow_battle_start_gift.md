# 燃血战鼓

<img src="/images/relics/neow_battle_start_gift.png" alt="燃血战鼓" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 先古

### 数值参数

| 参数 | 数值 |
|---|---|
| 召唤数量 | 3 |
| 铸造数量 | 3 |
| 抽牌数量 | 1 |
| 能量获取 | 1 |
| 生命损失 | 1 |

## 描述

每场战斗首回合<span style="color:#d4a017;font-weight:600">[召唤](/mechanics/summon.md)</span><span style="color:#3aa675;font-weight:600">3</span>，<span style="color:#d4a017;font-weight:600">[铸造](/mechanics/forge.md)</span><span style="color:#3aa675;font-weight:600">3</span>，抽<span style="color:#3aa675;font-weight:600">1</span>张牌，获得<span style="color:#3aa675;font-weight:600">1</span>点<span style="color:#d4a017;font-weight:600">[能量](/mechanics/energy.md)</span>，失去<span style="color:#3aa675;font-weight:600">1</span>点生命。

- **触发时机**：每场战斗拥有者首回合开始时触发一次，整场战斗仅生效一次。
- **执行顺序**：依次进行 3 次欧斯提召唤 → 3 次铸造 → 抽 1 张牌 → 获得 1 点能量 → 自身失去 1 点生命。

## 风味文字

<span style="color:#d44;font-weight:600">全能。</span>

## 小贴士

- **首回合资源拉满**：开局同时拿到 3 点欧斯提、3 点铸造、1 张抽牌、1 点能量，相当于免费送一个完整启动回合。第一回合就能摆出欧斯提阵 + 铸造储备，节奏比对手快一拍。
- **召唤 / 铸造流派的核心起搏器**：依赖欧斯提数量或铸造层数的卡组收益最大，等于开局白嫖 3 点召唤 + 3 点铸造的基数。无相关流派时这遗物价值打折明显。
- **代价是 1 点不可格挡 HP 损失**：失去的 1 点生命类似中毒的 HP 损失，格挡无法抵消。单场战斗 1 点不算痛，但长跑图累积下来需要回血手段兜底。
- **性价比**：先古稀有度合理——首回合多重资源补给换 1 点生命，启动节奏强劲。

## 源码

- `SeerNeowBattleStartGift.cs`
