# 渺小

<img src="/images/cards/tiny.png" alt="渺小" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 诅咒牌
- **类型**: 诅咒
- **稀有度**: 诅咒
- **关键词**: [不可打出](/mechanics/unplayable.md)
- **可升级**: 是（最高 99 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 每张每次打出牌受到的伤害 | 2 | 3（每级 +1） |

## 描述

[<span style="color:#d4a017;font-weight:600">不可打出</span>](/mechanics/unplayable.md)。打出卡牌时，每张[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)中的渺小牌造成<span style="color:#3aa675;font-weight:600">2</span>点伤害。

## 升级后

[<span style="color:#d4a017;font-weight:600">不可打出</span>](/mechanics/unplayable.md)。打出卡牌时，每张[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)中的渺小牌造成<span style="color:#3aa675;font-weight:600">3</span>点伤害。

## 小贴士

- **按"打出牌的次数"计费，不是按回合**：只要你每打出一张牌，手牌中**每张**渺小就对你造成一次伤害——手里攥 1 张渺小、一回合打 5 张牌，就是 5×2=<span style="color:#3aa675;font-weight:600">10</span> 点；攥 2 张渺小就是 20 点。它的杀伤力与**出牌速度和渺小张数同时成正比**——快攻/低费连打卡组受罚最重，慢速控制卡组几乎无感。
- **多张渺小合并结算**：每张渺小按各自的当前伤害数值求和后，一次性对你结算合计伤害。
- **伤害可以被格挡挡下**：结算的是普通伤害——回合开始先挂[格挡](/mechanics/block.md)再出牌，渺小的惩罚可以被完全吸收；对防战类卡组它接近白板。
- **警惕局内升级**：渺小最高可升到 99 级、每级伤害 +1。任何"升级手牌/强化卡牌"的随机效果砸到它身上都会让惩罚永久膨胀（2→3→4…），升级型增益要谨慎使用；变牌效果把它变成别的牌则是净化。
- **不可打出，但可净化**：它带[不可打出](/mechanics/unplayable.md)关键词无法主动打出，消耗、变牌类效果是唯一出路；它不带[永恒](/mechanics/eternal.md)，局外也可直接删除。手牌中同时存在多张渺小时，优先一次性清掉。
- **节奏建议**：抽到渺小的回合，宁可少打几张牌、把关键牌一次打足，也别为了铺场连打低费牌白吃伤害——出牌次数本身就是它的计费器。

## 相关机制

- [不可打出](/mechanics/unplayable.md)（无法主动打出）
- [格挡](/mechanics/block.md)（伤害可被格挡吸收）
- [手牌](/mechanics/hand.md)（判定与结算位置）

## 源码

- `SeerTiny.cs`
- `SeerTinyPower.cs`（打出牌时的伤害结算）
