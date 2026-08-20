# 圣耀明瞳斩

<img src="/images/cards/holy_eye_slash.png" alt="圣耀明瞳斩" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 无色牌
- **能量消耗**: 0
- **类型**: 技能
- **稀有度**: 罕见
- **目标**: 自身
- **可升级**: 是（1 级）
- **升级后关键词**: [<span style="color:#d4a017;font-weight:600">保留</span>](/mechanics/retain.md)

### 数值参数

| 参数 | 数值 |
|---|---|
| 铸造 | 1 |
| 辉星获取 | 1 |

## 描述

[<span style="color:#d4a017;font-weight:600">铸造</span>](/mechanics/forge.md)<span style="color:#3aa675;font-weight:600">1</span>。本场战斗中每[<span style="color:#d4a017;font-weight:600">铸造</span>](/mechanics/forge.md)过一次，获得<span style="color:#3aa675;font-weight:600">1</span>点[<span style="color:#d4a017;font-weight:600">辉星</span>](/mechanics/star.md)、<span style="color:#3aa675;font-weight:600">1</span>张随机辉星牌入[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)，并将<span style="color:#3aa675;font-weight:600">1</span>张碎屑放入[<span style="color:#d4a017;font-weight:600">抽牌堆</span>](/mechanics/draw_pile.md)。

## 升级后

[<span style="color:#d4a017;font-weight:600">铸造</span>](/mechanics/forge.md)<span style="color:#3aa675;font-weight:600">1</span>。本场战斗中每[<span style="color:#d4a017;font-weight:600">铸造</span>](/mechanics/forge.md)过一次，获得<span style="color:#3aa675;font-weight:600">1</span>点[<span style="color:#d4a017;font-weight:600">辉星</span>](/mechanics/star.md)、<span style="color:#3aa675;font-weight:600">1</span>张随机辉星牌入[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)，并将<span style="color:#3aa675;font-weight:600">1</span>张碎屑放入[<span style="color:#d4a017;font-weight:600">抽牌堆</span>](/mechanics/draw_pile.md)。

## 小贴士

- **🔑 计数是"本场全部铸造"，不只这张牌**：追踪能力统计的是本场战斗**所有来源**的铸造次数——你打出的其它圣剑牌（[圣雷斩](/cards/colorless/holy_thunder_slash.md)/[圣山压](/cards/colorless/holy_mountain_crush.md)等）每铸造一次，这张牌的收益就+1 档。打出时先自身铸造 <span style="color:#3aa675;font-weight:600">1</span> 次，然后按**当前累计总数**逐次结算：每次 +<span style="color:#3aa675;font-weight:600">1</span> [辉星](/mechanics/star.md) + <span style="color:#3aa675;font-weight:600">1</span> 张随机辉星牌入手 + <span style="color:#3aa675;font-weight:600">1</span> 张碎屑进抽牌堆。
- **圣剑体系的收益放大器**：单独一张 = 打出时结算 1 次（1 星 1 牌）；再拿一张圣雷斩后打出 = 结算 2 次（2 星 2 牌）——**成套拿圣剑，这张牌的边际收益线性上涨**，是铸造体系的滚雪球核心。
- **辉星牌池 = 原版储君的 17 张星牌**：新月之矛、流星、粒子墙、星尘、共振、七星等原版 Regent 星系牌随机到手——直接上手（不是进抽牌堆），当回合就能打，0 费上手即战力。
- **辉星立即到账**：获得的辉星当回合可用（源码特意注释"立即获得，而非下回合"）——配合手中其它吃辉星的储君牌无缝衔接。
- **碎屑是代价：不可打出的 1 费废牌**：每次铸造塞 <span style="color:#3aa675;font-weight:600">1</span> 张碎屑（1 费状态牌，无法主动打出）进[抽牌堆](/mechanics/draw_pile.md)——抽到它就白占一个手牌位。铸造次数越多，牌库污染越重；用消耗/毁灭类效果清理碎屑可以回收手牌质量。
- **0 费 = 零门槛引爆器**：不占能量，手里有它就随时可以引爆累计的铸造数；抽到即打不亏，唯一决策是"现在打还是再等等"。
- **升级[保留](/mechanics/retain.md) = 等 Count 攒高再收**：升级后回合结束不弃牌——手里同时握着多张铸造牌时，先打其它圣剑把计数抬高，此牌留到下回合再引爆，单次收益更高。铸造数不涨的场合（只剩这张）则即打即赚。

## 相关能力

- 铸造追踪（mod 能力）：记录本场战斗铸造次数，无对应能力页

## 相关机制

- [铸造](/mechanics/forge.md)（执行铸造并按全场铸造数结算收益）
- [辉星](/mechanics/star.md)（每次铸造获得 1 点，立即到账）
- [保留](/mechanics/retain.md)（升级后获得）

## 源码

- `SeerHolyEyeSlash.cs`
