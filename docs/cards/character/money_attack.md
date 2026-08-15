# 金钱攻击

<img src="/images/cards/money_attack.png" alt="金钱攻击" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 10
- **能量消耗**: 1
- **类型**: 攻击
- **稀有度**: 罕见
- **目标**: 敌方单体
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| PP | 10 | 10 |
| 最大PP | 10 | 10 |
| 赛尔豆获取 | 50万 | 80万 |
| 伤害换算 | 50万 | 50万 |

## 描述

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">10</span>/<span style="color:#3aa675;font-weight:600">10</span> 获得<span style="color:#3aa675;font-weight:600">50</span>万<span style="color:#d4a017;font-weight:600">赛尔豆</span>，造成等于当前<span style="color:#d4a017;font-weight:600">赛尔豆</span>数÷<span style="color:#3aa675;font-weight:600">50</span>万的伤害。

## 升级后

[PP](/mechanics/pp-system.md): <span style="color:#3aa675;font-weight:600">10</span>/<span style="color:#3aa675;font-weight:600">10</span> 获得<span style="color:#3aa675;font-weight:600">80</span>万<span style="color:#d4a017;font-weight:600">赛尔豆</span>，造成等于当前<span style="color:#d4a017;font-weight:600">赛尔豆</span>数÷<span style="color:#3aa675;font-weight:600">50</span>万的伤害。

## 小贴士

- **把赛尔豆变成伤害——经济流派的伤害出口**：伤害 = 当前赛尔豆总数 ÷ <span style="color:#3aa675;font-weight:600">50</span> 万（整数除法）。打出时**先获得 <span style="color:#3aa675;font-weight:600">50</span> 万赛尔豆再结算伤害**，所以第一次打出至少 <span style="color:#3aa675;font-weight:600">1</span> 伤，第二次 <span style="color:#3aa675;font-weight:600">2</span> 伤，越打越疼——滚雪球是核心玩法。
- **赛尔豆是 run 级货币，伤害随经济浮动**：赛尔豆在整局 run 中会被精英商店抽奖、遗物兑换消耗——余额越高伤害越高，花完了伤害就低。打出前尽量别乱花赛尔豆，保持高余额才能打出高伤。
- **升级 80 万加速滚雪球**：升级后获得 <span style="color:#3aa675;font-weight:600">80</span> 万赛尔豆（基础 <span style="color:#3aa675;font-weight:600">50</span> 万），每次打出多 <span style="color:#3aa675;font-weight:600">30</span> 万累积——滚雪球速度更快，多次打出后伤害差距越拉越大。
- **性价比**：<span style="color:#3aa675;font-weight:600">1</span> 费换 <span style="color:#3aa675;font-weight:600">50</span> 万赛尔豆 + 伤害，经济流派的核心伤害价，升级 <span style="color:#3aa675;font-weight:600">80</span> 万让滚雪球更快。

## 相关机制

- [赛尔豆与泰坦之灵](/mechanics/currency.md)：run级货币，用于精英商店抽奖和遗物兑换，影响本牌伤害

## 源码

- `SeerMoneyAttack.cs`
