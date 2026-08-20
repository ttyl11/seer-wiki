# 多元时间线

<img src="/images/cards/multiple_timeline.png" alt="多元时间线" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌（带关键词）
- **最大PP**: 5
- **能量消耗**: 0
- **类型**: 技能
- **稀有度**: 稀有
- **目标**: 自身
- **关键词**: [戏法](/mechanics/trick.md)、[预见](/mechanics/scry.md)
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 预见数量 | 0 | 1 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |
| 格挡 | 6 | 6 |

## 描述

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 获得<span style="color:#3aa675;font-weight:600">6</span>点[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)。从你的[<span style="color:#d4a017;font-weight:600">消耗牌堆</span>](/mechanics/exhaust_pile.md)中选择<span style="color:#3aa675;font-weight:600">1</span>张加入[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)（[<span style="color:#d4a017;font-weight:600">PP</span>](/mechanics/pp-system.md)卡回满PP）。

## 升级后

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> [预见](/mechanics/scry.md)<span style="color:#3aa675;font-weight:600">1</span>张。获得<span style="color:#3aa675;font-weight:600">6</span>点[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)。从你的[<span style="color:#d4a017;font-weight:600">消耗牌堆</span>](/mechanics/exhaust_pile.md)中选择<span style="color:#3aa675;font-weight:600">1</span>张加入[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)（[<span style="color:#d4a017;font-weight:600">PP</span>](/mechanics/pp-system.md)卡回满PP）。

## 小贴士

- **0 费多功能工具牌——格挡 + 消耗回收 + 戏法三合一**：<span style="color:#3aa675;font-weight:600">6</span> 点格挡保底，从消耗牌堆选 <span style="color:#3aa675;font-weight:600">1</span> 张加入手牌（PP 卡自动回满 PP），[戏法](/mechanics/trick.md)从弃牌堆随机抽 <span style="color:#3aa675;font-weight:600">1</span> 张到手牌顶。0 费多效，是工具卡里的瑞士军刀。
- **消耗回收是核心——PP 卡回满是附加福利**：从消耗牌堆选 <span style="color:#3aa675;font-weight:600">1</span> 张加入手牌，让消耗流派形成循环。如果捞回的是 PP 卡，还会自动回满 PP——消耗 + 回收 + 回 PP 的完整闭环。
- **空消耗堆时只有格挡 + 戏法**：消耗牌堆没牌时，回收效果空过——只能打 <span style="color:#3aa675;font-weight:600">6</span> 格挡 + 戏法。所以这张牌的价值取决于消耗堆里有没有值得捞的牌。
- **升级预见提供牌堆操控**：升级后添加[预见](/mechanics/scry.md) <span style="color:#3aa675;font-weight:600">1</span>，查看抽牌堆顶 <span style="color:#3aa675;font-weight:600">1</span> 张可丢弃——配合戏法的弃牌堆抽牌，形成双向牌堆操控。
- **性价比**：<span style="color:#3aa675;font-weight:600">0</span> 费换 <span style="color:#3aa675;font-weight:600">6</span> 格挡 + 消耗回收 + 戏法，多功能工具价公道，升级预见让操控更强。

## 相关机制

- [戏法](/mechanics/trick.md)：打出时若弃牌堆有牌，随机抽1张到手牌顶
- [预见](/mechanics/scry.md)：查看抽牌堆顶N张，可丢弃任意数量
- [格挡](/mechanics/block.md)：获得6点格挡
- [消耗牌堆](/mechanics/exhaust_pile.md)：选牌来源
- [手牌](/mechanics/hand.md)：选中的卡加入手牌底部

## 源码

- `SeerMultipleTimeline.cs`
