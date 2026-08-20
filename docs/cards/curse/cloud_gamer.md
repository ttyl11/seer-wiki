# 云玩家

<img src="/images/cards/cloud_gamer.png" alt="云玩家" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 诅咒牌
- **能量消耗**: 3
- **类型**: 诅咒
- **稀有度**: 诅咒
- **关键词**: [固有](/mechanics/innate.md)、[保留](/mechanics/retain.md)、[消耗](/mechanics/exhaust.md)
- **可升级**: 否

## 描述

此牌在[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)中时，所有<span style="color:#d4a017;font-weight:600">PP</span>卡牌无法打出。打出后解除封锁。

## 小贴士

- **封锁是动态判定的**：封锁状态每时每刻都在重新检查——**云玩家在手牌中**时，你手牌中的 [PP 卡](/mechanics/pp-system.md)全部无法主动打出；它一旦离手（被打出、被消耗、被变牌），封锁立即自动解除，无需任何额外操作。封锁的施加前提是你的卡组中存在 PP 卡（任意位置都算，圣灵谱尼的卡组必然满足）。
- **固有=从第一回合就开始封锁**：云玩家带[固有](/mechanics/innate.md)关键词，开局必在手牌——对 PP 体系角色来说等于**从战斗第一回合起核心出牌权就被冻结**，直到你腾出 3 点能量把它打出去。
- **破封锁要花 3 费**：它耗能 <span style="color:#3aa675;font-weight:600">3</span> 点，是诅咒牌中最高的一档，且带[消耗](/mechanics/exhaust.md)——打出后离场、封锁解除，一场战斗只需处理一次。但一个回合同时挤 3 费解封 + 剩余能量打 PP 牌，节奏压力不小。
- **保留=不解封就一直在手**：带[保留](/mechanics/retain.md)关键词，回合结束不弃牌。如果你选择不解封，它会整场赖在手里持续封锁——几乎不存在"熬过去就没事"的选项，早晚得付这 3 费。
- **仅锁手动打出的 PP 卡**：封锁只作用于你手牌中**手动打出**的 PP 卡——非 PP 卡（攻击/技能/能力牌）不受影响可正常打出；由其它效果**自动打出**的 PP 卡也不在封锁范围内。圣灵谱尼之外的角色如果没往卡组里塞 PP 卡，这张诅咒对它基本无牙。
- **应对策略**：要么第一时间攒 3 费打出解除封锁，要么用消耗/变牌效果把它从手牌移走（同样立即解锁）。对重度 PP 构筑，这张是优先级最高的处理对象。

## 相关机制

- [手牌](/mechanics/hand.md)（触发条件位置）
- [固有](/mechanics/innate.md)（开局必在手牌）
- [保留](/mechanics/retain.md)（回合结束不弃牌）
- [消耗](/mechanics/exhaust.md)（打出后离场）
- [PP 系统](/mechanics/pp-system.md)（被封锁的出牌对象）

## 源码

- `SeerCloudGamer.cs`
- `SeerCloudGamerPower.cs`（内部不可见能力）
