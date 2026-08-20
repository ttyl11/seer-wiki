# 电石混地

<img src="/images/cards/flint_stone_earth.png" alt="电石混地" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 无色牌
- **能量消耗**: 1
- **类型**: 能力
- **稀有度**: 普通
- **目标**: 自身
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 每牌格挡 | 3 | 3 |

## 描述

每打出1张牌，获得<span style="color:#3aa675;font-weight:600">3</span>点[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)。每有<span style="color:#3aa675;font-weight:600">2</span>点[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)，造成的伤害<span style="color:#3aa675;font-weight:600">-1</span>。

## 升级后

耗能降至<span style="color:#3aa675;font-weight:600">0</span>。每打出1张牌，获得<span style="color:#3aa675;font-weight:600">3</span>点[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)。每有<span style="color:#3aa675;font-weight:600">2</span>点[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)，造成的伤害<span style="color:#3aa675;font-weight:600">-1</span>。

## 小贴士

- **⚠️ 削的是你自己的攻击伤害——攻击流慎用**：减伤方向是**你造成的**攻击伤害：每有 <span style="color:#3aa675;font-weight:600">2</span> 点当前[格挡](/mechanics/block.md)，你的攻击伤害 -<span style="color:#3aa675;font-weight:600">1</span>。格挡攒到 20 时每次攻击 -10——出牌越多防御越厚、拳头越软，这是刻意的攻防交换设计，**不是防御增益的全家桶**。
- **固伤/DoT 流的完全白嫖引擎**：减伤只作用于 Powered 攻击伤害——[固定伤害](/mechanics/fixed-damage.md)、[灼烧](/powers/burn_power.md)/[中毒](/powers/poison_power.md) 等 DoT 结算完全不受影响。固伤流挂上它 = 每打一张牌白拿 3 格挡、零代价——纯粹的防御印钞机。
- **格挡累积速度可观**：一回合打 10 张牌 = <span style="color:#3aa675;font-weight:600">30</span> 点格挡（非攻击格挡，不吃[虚弱](/powers/weak_power.md)衰减？以格挡来源判定为准）——铺场型构筑一回合就能攒出半血级别的护盾。
- **攻防交换比是 3:1.5**：每张牌 +3 格挡的代价是最多 -1.5 攻击伤害（3/2）——对依赖攻击输出的构筑是净亏损；对不依赖攻击伤害的构筑是纯收益。**先想清楚你的伤害来源再拿它**。
- **升级 0 费 = 无条件白嫖**：升级后 0 费挂能力，哪怕只为了固伤流的防御也是稳定收益——能升就升。
- **配合"格挡联动"双倍收割**：格挡量挂钩的遗物/能力（格挡转伤害、格挡反伤类）与它的出牌攒盾节奏天然契合——盾越厚联动越强，攻击减免的代价被联动收益覆盖。

## 相关能力

- [<span style="color:#d4a017;font-weight:600">电石混地</span>](/powers/flint_stone_earth_power.md)：每打出一张牌获得 3 点格挡，每 2 点格挡减 1 攻击伤害

## 相关机制

- [格挡](/mechanics/block.md)（获得格挡，并基于格挡值减少伤害）

## 源码

- `SeerFlintStoneEarth.cs`
