# 米咔

<img src="/images/cards/mika.png" alt="米咔" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 事件牌
- **最大PP**: 5
- **能量消耗**: 3
- **类型**: 攻击
- **稀有度**: 衍生
- **目标**: 所有敌方
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 |
|---|---|
| 格挡 | 3 |
| 全体攻击伤害 | 3 |
| 随机异常状态 | 1 种 × 3 层 |
| 全体固定伤害 | 3 |
| 出牌数惩罚阈值 | 3 张 |
| PP | 5 |
| 最大PP | 5 |

## 描述

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 回合结束时若在[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)中则自动打出。一回合打出超过<span style="color:#3aa675;font-weight:600">3</span>张牌时，此牌移入[<span style="color:#d4a017;font-weight:600">弃牌堆</span>](/mechanics/discard_pile.md)。获得<span style="color:#3aa675;font-weight:600">3</span>点[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)。对所有敌人造成<span style="color:#3aa675;font-weight:600">3</span>点伤害，附加<span style="color:#3aa675;font-weight:600">1</span>种随机[<span style="color:#d44;font-weight:600">异常状态</span>](/mechanics/abnormal-status.md)<span style="color:#3aa675;font-weight:600">3</span>回合，造成<span style="color:#3aa675;font-weight:600">3</span>点<span style="color:#d4a017;font-weight:600">固定伤害</span>。

## 升级后

获得[<span style="color:#d4a017;font-weight:600">奇巧</span>](/mechanics/sly.md)。

> **勘误**：游戏内升级文本显示"保留"，但源码 `SeerMika.OnUpgrade` 实际施加的是 CardKeyword.Sly（[奇巧](/mechanics/sly.md)：回合结束前从手牌被丢弃时免费打出）。本页以实际效果为准。

## 小贴士

- **🔑 别手动打，留着让它自己免费触发**：回合结束时米咔还在手牌就会**自动打出且不消耗能量**——免费白拿 <span style="color:#3aa675;font-weight:600">3</span> 格挡 + 全体 <span style="color:#3aa675;font-weight:600">3</span> 攻击伤害 + 全体随机异常 3 层 + 全体 <span style="color:#3aa675;font-weight:600">3</span> 固伤。手动打出要花 <span style="color:#3aa675;font-weight:600">3</span> 费，收益完全相同——**能量永远花在别的牌上，米咔攥到回合结束就行**。
- **惩罚连击爆发回合**：当你一回合打出**第 4 张牌**的瞬间，手牌里所有米咔立即移入[弃牌堆](/mechanics/discard_pile.md)——失去本回合的免费自动打出（除非再从弃牌堆抽回来）。想保住米咔的自动触发，当回合出牌数控制在 <span style="color:#3aa675;font-weight:600">3</span> 张以内；要打 4 张以上的爆发回合，就接受米咔进弃牌堆、之后再抽回来的安排。
- **每次触发消耗 1 PP，一场最多 5 次**：自动打出同样消耗 PP（PP: 5/5）。长战斗里它是每回合稳定触发的免费收益引擎，5 次额度用完就变普通 3 费牌——前期省着用不如前期每回合都触发，PP 上限就是设计好的触发次数预算。
- **随机异常是同一种、全体覆盖**：每次触发从异常状态池随机 <span style="color:#3aa675;font-weight:600">1</span> 种，对**所有敌人**施加**同一种**异常 3 层——群体战中歪到灼烧/中毒这类 DoT 异常就是 3 层 × 敌人数的收益。随机性不可控，但 3 层的量足以让每次触发都不亏。
- **伤害构成是"格挡+三段伤害"**：3 点攻击伤害吃[力量](/powers/strength_power.md)/易伤加成；3 点[固定伤害](/powers/fixed_damage_power.md)不受格挡和力量影响；3 格挡正常获得。数值单看都小，但**免费**两个字让它纯赚。
- **升级价值：奇巧**：升级后米咔获得[奇巧](/mechanics/sly.md)（被弃时免费打出）——配合各种"弃牌"类效果，弃掉米咔等于再白嫖一次触发；注意游戏内升级文本误写为"保留"，实际行为以奇巧为准。
- **衍生生成、战斗结束消失**：米咔由事件/其它效果生成入手牌（`CreateInHand`），本场战斗有效，战斗结束后消失，不会留在牌组。

## 相关机制

- [手牌](/mechanics/hand.md)（回合结束自动打出的位置判定）
- [弃牌堆](/mechanics/discard_pile.md)（一回合打出超过 3 张后移入）
- [异常状态](/mechanics/abnormal-status.md)（随机 1 种 × 3 层，全体覆盖）
- [固定伤害](/powers/fixed_damage_power.md)（无视格挡/力量的伤害段）
- [奇巧](/mechanics/sly.md)（升级后：被弃时免费打出）

## 源码

- `SeerMika.cs`（自动打出/出牌数惩罚/升级加奇巧）
