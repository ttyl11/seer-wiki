# 核威强袭

<img src="/images/cards/nuclear_assault.png" alt="核威强袭" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 事件牌
- **最大PP**: 3
- **能量消耗**: 0
- **类型**: 攻击
- **稀有度**: 衍生
- **目标**: 所有敌方
- **可升级**: 是（1 级）
- **关键词**: [<span style="color:#d4a017;font-weight:600">保留</span>](/mechanics/retain.md)

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 伤害百分比 | 30 | 50 |
| 瘫痪回合 | 2 | 2 |
| PP | 3 | 3 |
| 最大PP | 3 | 3 |

## 描述

PP: 3/3 打出后回到[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)。令所有对手[<span style="color:#d4a017;font-weight:600">瘫痪</span>](/powers/paralysis_power.md)<span style="color:#3aa675;font-weight:600">2</span>回合，召唤奥斯提对所有敌人造成其最大生命值<span style="color:#3aa675;font-weight:600">30</span>%的伤害。

## 升级后

PP: 3/3 打出后回到[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)。令所有对手[<span style="color:#d4a017;font-weight:600">瘫痪</span>](/powers/paralysis_power.md)<span style="color:#3aa675;font-weight:600">2</span>回合，召唤奥斯提对所有敌人造成其最大生命值<span style="color:#3aa675;font-weight:600">50</span>%的伤害。

## 小贴士

- **触发时机**：打出时先对所有敌人施加[瘫痪](/powers/paralysis_power.md)，再召唤奥斯提造成伤害，最后将此牌回到[手牌](/mechanics/hand.md)。
- **目标选取**：所有敌方。
- **瘫痪施加**（异常状态）：遍历所有对手施加 <span style="color:#3aa675;font-weight:600">2</span> 回合[瘫痪](/powers/paralysis_power.md)。
- **奥斯提伤害**：若玩家拥有奥斯提且未死亡，对其最大生命值的 <span style="color:#3aa675;font-weight:600">30</span>% 造成伤害（固定伤害，不可[格挡](/mechanics/block.md)且不受力量/暴击/易伤影响）。伤害基于**奥斯提的最大生命值**，非敌人最大生命值。
- **回到手牌**：将此牌添加到[手牌](/mechanics/hand.md)顶部，打出后回到手牌。
- **保留**（[<span style="color:#d4a017;font-weight:600">查看机制页</span>](/mechanics/retain.md)，原版关键词）：回合结束时不被弃置，保留在手牌中。
- **升级效果**：升级后，伤害百分比从 <span style="color:#3aa675;font-weight:600">30</span>% 提升至 <span style="color:#3aa675;font-weight:600">50</span>%。

## 相关能力

- [瘫痪](/powers/paralysis_power.md)（异常状态，令对手无法行动）

## 源码

- `SeerNuclearAssault.cs`
