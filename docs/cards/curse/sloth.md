# 懒惰

<img src="/images/cards/sloth.png" alt="懒惰" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 诅咒牌
- **能量消耗**: 3
- **类型**: 诅咒
- **稀有度**: 诅咒
- **关键词**: [固有](/mechanics/innate.md)、[消耗](/mechanics/exhaust.md)
- **可升级**: 否

### 数值参数

| 参数 | 数值 |
|---|---|
| 攻击伤害上限 | 0 |

## 描述

此牌在[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)中时，你造成的攻击伤害为<span style="color:#3aa675;font-weight:600">0</span>。

## 小贴士

- **固有=开局攻击权就被没收**：懒惰带[固有](/mechanics/innate.md)关键词，每场战斗开局必在手牌——**第一回合你的攻击牌就全部打不出伤害**，对快攻卡组是非常致命的开局节奏破坏。
- **只封"卡牌攻击"，其它伤害照常**：封顶判定只作用于**由卡牌打出的攻击类型伤害**——技能牌的能力效果、[固定伤害](/powers/fixed_damage_power.md)、灼烧中毒等 DoT、能力触发的伤害统统不受影响。抽到懒惰的回合，靠固伤/DoT/技能效果输出完全正常。
- **判定是动态的，弃掉就恢复**：封顶状态实时检查"手牌中是否还有懒惰"——回合结束懒惰随[手牌](/mechanics/hand.md)正常弃掉后（它不带[保留](/mechanics/retain.md)），下回合攻击立即恢复；洗牌重抽到它，攻击再次归零。它只污染"抽到它的那些回合"。
- **这张牌可以打出**：懒惰没有[不可打出](/mechanics/unplayable.md)关键词。花 <span style="color:#3aa675;font-weight:600">3</span> 费打出可当场移除封顶效果并因[消耗](/mechanics/exhaust.md)离场、本场不再回来——**抽到它的当回合若需要攻击输出，3 费买回攻击权往往是值得的**；若当回合本来就走技能/固伤路线，也可以白留一张牌在手里，等回合结束自动弃掉。
- **别浪费在它身上**：它不带[永恒](/mechanics/eternal.md)，局内消耗、变牌、局外删牌均可永久处理。
- **攻击依赖度决定痛感**：纯攻击卡组（尤其依赖[力量](/powers/strength_power.md)成长的构筑）每场开局都像断了一条腿；固伤流、技能流卡组几乎无感——评估手牌时按自己的输出构成区别对待。

## 相关机制

- [固有](/mechanics/innate.md)（开局必在手牌）
- [消耗](/mechanics/exhaust.md)（打出后离场）
- [手牌](/mechanics/hand.md)（动态判定位置）

## 源码

- `SeerSloth.cs`
- `SeerSlothPower.cs`（攻击伤害封顶的隐藏状态）
