# 岳·命寻星叹

<img src="/images/cards/yue_fate_star_sigh.png" alt="岳·命寻星叹" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 事件牌
- **最大PP**: 1
- **能量消耗**: 0
- **类型**: 能力
- **稀有度**: 衍生
- **目标**: 自身
- **关键词**: [悼](/mechanics/mourning.md)
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| PP | 1 | 1 |
| 最大PP | 1 | 1 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> [<span style="color:#d4a017;font-weight:600">悼</span>](/mechanics/mourning.md)。下个回合所有牌会多打出一次。

## 升级后

[<span style="color:#d4a017;font-weight:600">保留</span>](/mechanics/retain.md)。PP: <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> [<span style="color:#d4a017;font-weight:600">悼</span>](/mechanics/mourning.md)。下个回合所有牌会多打出一次。

## 小贴士

- **事件牌**：属于事件/能力牌类型。
- **悼**（[<span style="color:#d4a017;font-weight:600">查看机制页</span>](/mechanics/mourning.md)，mod 关键词）：打出后对自身施加命运星叹能力（1 层，不可见减益）。下回合进入自动打出阶段时，从**手牌**中循环找出可打出的卡牌自动打出（最多 99 张），打完后移除该能力。
- **触发时机**：打出时对自身施加命运星叹能力。
- **目标选取**：自身（1）。
- **命运星叹能力**（mod 能力）：对自身施加 <span style="color:#3aa675;font-weight:600">1</span> 层，使下个回合所有牌会多打出一次。
- **升级效果**：升级后获得[<span style="color:#d4a017;font-weight:600">保留</span>](/mechanics/retain.md)关键词，回合结束时不弃置。

## 相关机制

- [悼](/mechanics/mourning.md)（打出后下回合由瓦库代替行动）
- [保留](/mechanics/retain.md)（升级后获得的关键词）

## 源码

- `SeerYueFateStarSigh.cs`
- `SeerFateStarSighPower.cs`
