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

| 参数 | 数值 | 升级后 |
|---|---|---|
| 固定伤害 | 3 | 3 |
| 异常回合 | 3 | 3 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |
| 伤害 | 3 | 3 |
| 格挡 | 3 | 3 |

## 描述

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 回合结束时若在[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)中则自动打出。一回合打出超过<span style="color:#3aa675;font-weight:600">3</span>张牌时，此牌移入[<span style="color:#d4a017;font-weight:600">弃牌堆</span>](/mechanics/discard_pile.md)。获得<span style="color:#3aa675;font-weight:600">3</span>点[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)。对所有敌人造成<span style="color:#3aa675;font-weight:600">3</span>点伤害，附加<span style="color:#3aa675;font-weight:600">1</span>种随机[<span style="color:#d44;font-weight:600">异常状态</span>](/mechanics/abnormal-status.md)<span style="color:#3aa675;font-weight:600">3</span>回合，造成<span style="color:#3aa675;font-weight:600">3</span>点<span style="color:#d4a017;font-weight:600">固定伤害</span>。

## 升级后

[<span style="color:#d4a017;font-weight:600">保留</span>](/mechanics/retain.md)。[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 回合结束时若在[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)中则自动打出。一回合打出超过<span style="color:#3aa675;font-weight:600">3</span>张牌时，此牌移入[<span style="color:#d4a017;font-weight:600">弃牌堆</span>](/mechanics/discard_pile.md)。获得<span style="color:#3aa675;font-weight:600">3</span>点[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)。对所有敌人造成<span style="color:#3aa675;font-weight:600">3</span>点伤害，附加<span style="color:#3aa675;font-weight:600">1</span>种随机[<span style="color:#d44;font-weight:600">异常状态</span>](/mechanics/abnormal-status.md)<span style="color:#3aa675;font-weight:600">3</span>回合，造成<span style="color:#3aa675;font-weight:600">3</span>点<span style="color:#d4a017;font-weight:600">固定伤害</span>。

## 小贴士

- **触发时机**：
 - 回合结束时若在[手牌](/mechanics/hand.md)中且无[虚无](/mechanics/ethereal.md)关键词，自动打出。
 - 打出时执行格挡、伤害、异常、固定伤害结算。
 - 每回合打出牌数会被检测。
- **目标选取**：所有敌方，一次性对所有敌人造成伤害。
- **格挡获取**：获得 <span style="color:#3aa675;font-weight:600">3</span> 点[格挡](/mechanics/block.md)。
- **异常状态施加**：随机选择 <span style="color:#3aa675;font-weight:600">1</span> 种异常状态，对所有敌人施加 <span style="color:#3aa675;font-weight:600">3</span> 回合。
- **固定伤害**：对所有敌人各造成 <span style="color:#3aa675;font-weight:600">3</span> 点固定伤害，不受格挡/力量影响。
- **弃牌检测**：本回合打出牌数若超过 <span style="color:#3aa675;font-weight:600">3</span> 张，则将[手牌](/mechanics/hand.md)中所有米咔移入[弃牌堆](/mechanics/discard_pile.md)。
- **衍生生成**：此牌由其他卡牌/效果生成入手牌，战斗结束消失。
- **升级效果**：添加[<span style="color:#d4a017;font-weight:600">保留</span>](/mechanics/retain.md)关键词，回合结束时不弃置。

## 相关机制

- [手牌](/mechanics/hand.md)（自动打出位置）
- [弃牌堆](/mechanics/discard_pile.md)（打出超过 3 张后移入）
- [格挡](/mechanics/block.md)（获得 3 点格挡）
- [异常状态](/mechanics/abnormal-status.md)（随机施加 1 种 3 回合）
- [保留](/mechanics/retain.md)（升级后获得）

## 源码

- `SeerMika.cs`
