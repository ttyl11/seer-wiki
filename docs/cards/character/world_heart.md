# 万物之心

<img src="/images/cards/world_heart.png" alt="万物之心" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 5
- **能量消耗**: 1
- **类型**: 技能
- **稀有度**: 稀有
- **目标**: 自身
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 格挡 | 10 | 16 |
| 生成牌数（首次打出） | 1 | 1 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 获得<span style="color:#3aa675;font-weight:600">10</span>点[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)。随机获得1张耗能为0的牌。每打出一次，本场战斗多获得一张。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 获得<span style="color:#3aa675;font-weight:600">16</span>点[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)。随机获得1张耗能为0的牌。每打出一次，本场战斗多获得一张。

## 小贴士

- **0 费牌生成引擎**：每次打出随机获得 0 费牌加入[手牌](/mechanics/hand.md)，数量递增——第 1 次 1 张，第 2 次 2 张，第 3 次 3 张……越打越多。
- **递增本场持续**：战斗开始就挂载追踪计数，打出次数跨回合累积。所以多次打出这张牌能滚雪球，第 3 次就能一次塞 3 张 0 费牌进手牌。
- **0 费牌来源**：从谱尼角色卡池中已解锁的 0 费牌随机不重复选取。0 费牌池越大，生成多样性越高。生成的牌是临时牌（本场战斗有效）。
- **附带格挡**：10 点（升级 16 点）[格挡](/mechanics/block.md)作为基础防御，让这张牌不只是辅助，也能扛一波。
- **升级只加格挡**：10→16，+60% 格挡，生成机制不变。升级让防御更扎实，但不改变滚雪球节奏。
- **性价比**：1 费换格挡加递增 0 费牌，越往后越赚。稀有牌里偏滚雪球型，适合长战斗/Boss 战多次打出。

## 相关机制

- [格挡](/mechanics/block.md)（获得 10/16 点）
- [手牌](/mechanics/hand.md)（生成的 0 费卡牌加入位置）

## 源码

- `SeerWorldHeart.cs`
- `SeerWorldHeartTrackerPower.cs`
