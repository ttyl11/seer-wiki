# "大奖！"

<img src="/images/cards/surprise_grand_prize.png" alt="&quot;大奖！&quot;" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

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

[<span style="color:#d4a017;font-weight:600">消耗</span>](/mechanics/exhaust.md)。将<span style="color:#3aa675;font-weight:600">3</span>张耗能为<span style="color:#3aa675;font-weight:600">3</span>的牌加入你的[<span style="color:#d4a017;font-weight:600">弃牌堆</span>](/mechanics/discard_pile.md)。

## 小贴士

- **筛选范围是你自己的角色卡池**：从当前角色**已解锁的卡池**中筛选能量消耗恰好为 <span style="color:#3aa675;font-weight:600">3</span>（不含 X 费）的牌，随机抽 <span style="color:#3aa675;font-weight:600">3</span> 张加入[弃牌堆](/mechanics/discard_pile.md)。3 费位通常是角色的大招与核心卡。
- **进弃牌堆，不是手牌**：生成的牌**当回合摸不到**——要等[抽牌堆](/mechanics/draw_pile.md)抽干、弃牌堆洗牌后才有机会抽到。这是三种大奖变体里"到账最慢"的一种，价值完全取决于还有多少回合可打。
- **长战斗才值回票价**：Boss 战、精英战这类要洗好几次牌的长战斗里，3 张 3 费核心牌迟早抽上手；战斗一两个回合就结束的遭遇战里，它约等于白板——打出只为过牌。
- **可能抽到重复卡**：三张各自独立随机，可能出现同名卡扎堆。
- **能量账同样要算**：牌白给但打出要付 3 能量/张，抽到后按局势挑着打，不必强求全出。
- **与"大奖？"的区别**：["大奖？"](/cards/token/grand_prize.md) 直接进**手牌**当回合可用；这张进**弃牌堆**延迟到账。即时爆发选前者，长线运营后者也能兑现。
- **生成的牌只在本场战斗有效**：战斗结束后消失，不进入牌组。
- **自带消耗**：打出后本牌移入消耗堆离场。升级无任何效果。
- **获取途径**：由事件[奸商](/events/swindler.md)（SeerSwindler）发放——豪掷 200 金随机获得三种大奖之一，或击败事件中的四史莱姆后三种大奖各得一张。

## 相关卡牌

- ["大奖？"](/cards/token/grand_prize.md)（兄弟版本：3 费牌进手牌）
- 大奖（原版 Jackpot 卡，三种大奖变体之一）

## 相关机制

- [消耗](/mechanics/exhaust.md)（打出后消耗）
- [弃牌堆](/mechanics/discard_pile.md)（生成的卡牌进入此处，等待洗牌抽回）
- [能量](/mechanics/energy.md)（生成的 3 费牌打出时仍需支付能量）

## 源码

- `SeerSurpriseGrandPrize.cs`
