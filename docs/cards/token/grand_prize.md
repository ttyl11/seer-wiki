# "大奖？"

<img src="/images/cards/grand_prize.png" alt="&quot;大奖？&quot;" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 衍生牌
- **能量消耗**: 0
- **类型**: 技能
- **稀有度**: 事件
- **目标**: 自身
- **关键词**: [消耗](/mechanics/exhaust.md)
- **可升级**: 是（1 级，无实际效果）

### 数值参数

| 参数 | 数值 |
|---|---|
| 生成卡牌数量 | 3 |
| 目标卡牌费用 | 3 |

## 描述

[<span style="color:#d4a017;font-weight:600">消耗</span>](/mechanics/exhaust.md)。将<span style="color:#3aa675;font-weight:600">3</span>张耗能为<span style="color:#3aa675;font-weight:600">3</span>的牌加入你的[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)。

## 小贴士

- **筛选范围是你自己的角色卡池**：从当前角色**已解锁的卡池**中筛选能量消耗恰好为 <span style="color:#3aa675;font-weight:600">3</span>（不含 X 费）的牌，随机抽 <span style="color:#3aa675;font-weight:600">3</span> 张全部加入[手牌](/mechanics/hand.md)。3 费位通常是角色的大招与核心卡——相当于 0 费白嫖三张"候选大招"。
- **生成的牌只在本场战斗有效**：生成的卡走战斗内生成路径，战斗结束后消失、不进入牌组。这是"本场爆发资源"，不是永久收益。
- **可能抽到重复卡**：三张是各自独立随机抽取，可能出现两张甚至三张同名卡——想要的效果成对到手时爆发力翻倍。
- **注意能量账**：牌是白给的，但要把它们**打出来**仍需支付每张 3 点[能量](/mechanics/energy.md)。3 张全打 = 9 能量，一般回合打不完——优先打出最契合当前局势的 1~2 张，其余留到下回合（注意手牌位与弃牌风险）。
- **与"大奖！"的区别**：这张把牌直接送进**手牌**（当回合立即可用）；["大奖！"](/cards/token/surprise_grand_prize.md) 送进**弃牌堆**（要等洗牌抽回）。本卡适合当回合就有富余能量的爆发窗口，即时性远胜后者。
- **自带消耗**：打出后本牌移入消耗堆离场，一场战斗（若有多张）每张各用一次。
- **升级无效果**：升级不改变任何数值。
- **获取途径**：由事件[奸商](/events/swindler.md)（SeerSwindler）发放——豪掷 200 金随机获得三种大奖之一，或击败事件中的四史莱姆后三种大奖各得一张。

## 相关卡牌

- ["大奖！"](/cards/token/surprise_grand_prize.md)（兄弟版本：3 费牌进弃牌堆）
- 大奖（原版 Jackpot 卡，三种大奖变体之一）

## 相关机制

- [消耗](/mechanics/exhaust.md)（打出后消耗）
- [手牌](/mechanics/hand.md)（生成的卡牌加入手牌）
- [能量](/mechanics/energy.md)（生成的 3 费牌打出时仍需支付能量）

## 源码

- `SeerGrandPrize.cs`
