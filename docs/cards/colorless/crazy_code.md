# 疯狂编码

<img src="/images/cards/crazy_code.png" alt="疯狂编码" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 无色牌
- **能量消耗**: 4
- **类型**: 技能
- **稀有度**: 罕见
- **目标**: 自身
- **可升级**: 是（1 级）
- **标签**: 故障机器人

### 数值参数

| 参数 | 数值 |
|---|---|
| 卡牌数量 | 4 |
| 重放次数 | 1 |

## 描述

将随机<span style="color:#3aa675;font-weight:600">4</span>张故障机器人牌加入[<span style="color:#d4a017;font-weight:600">抽牌堆</span>](/mechanics/draw_pile.md)，耗能<span style="color:#3aa675;font-weight:600">+1</span>，[<span style="color:#d4a017;font-weight:600">重放</span>](/mechanics/replay.md)<span style="color:#3aa675;font-weight:600">1</span>。

## 升级后

将随机<span style="color:#3aa675;font-weight:600">4</span>张<span style="color:#d4a017;font-weight:600">升级</span>后的故障机器人牌加入[<span style="color:#d4a017;font-weight:600">抽牌堆</span>](/mechanics/draw_pile.md)，耗能<span style="color:#3aa675;font-weight:600">+1</span>，[<span style="color:#d4a017;font-weight:600">重放</span>](/mechanics/replay.md)<span style="color:#3aa675;font-weight:600">1</span>。

## 小贴士

- **卡池来源**：从原版故障机器人（Defect）的卡池中随机选牌，获取当前解锁状态下的可用卡牌。
- **多人同步**：随机选牌使用同步随机源，确保多人游戏中两端生成相同的卡牌。
- **生成卡属性**：每张生成的卡牌会：
 - 耗能 +1（仅本战斗有效）
 - [重放](/mechanics/replay.md)次数 +1（打出时额外重放一次）
 - 添加到[抽牌堆](/mechanics/draw_pile.md)底部
 - 生成的卡牌为衍生牌，战斗结束后消失
- **升级效果**：升级后，生成的卡牌会自动以升级形态加入抽牌堆。其他参数（卡牌数量、重放次数、耗能）不变。
- **高耗能**：基础耗能 4 点，生成的卡牌还有额外 +1 耗能，需要配合能量生成手段使用。

## 相关机制

- [抽牌堆](/mechanics/draw_pile.md)（生成卡牌加入抽牌堆底）
- [重放](/mechanics/replay.md)（生成卡牌重放 1 次）

## 源码

- `SeerCrazyCode.cs`
