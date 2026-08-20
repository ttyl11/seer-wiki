# 婵·命定星缘

<img src="/images/cards/destined_star_bond.png" alt="婵·命定星缘" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 衍生牌
- **最大PP**: 1
- **能量消耗**: 0
- **类型**: 技能
- **稀有度**: 衍生
- **目标**: 自身
- **可升级**: 是（1 级）
- **关键词**: 碎心

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 固定伤害 | 20 | 30 |
| 最大生命百分比 | 25 | 25 |
| 回复百分比 | 30 | 50 |
| 增伤百分比 | 150 | 150 |
| 异常数量 | 2 | 2 |
| 异常回合 | 2 | 2 |
| PP | 1 | 1 |
| 最大PP | 1 | 1 |

## 描述

PP: 1/1 [<span style="color:#d4a017;font-weight:600">碎心</span>](/mechanics/shattered_heart.md)。下一次攻击伤害<span style="color:#3aa675;font-weight:600">2.5</span>倍。对所有敌人造成<span style="color:#3aa675;font-weight:600">20</span>+自身最大生命值<span style="color:#3aa675;font-weight:600">25</span>%的[<span style="color:#d4a017;font-weight:600">固定伤害</span>](/mechanics/fixed-damage.md)，施加<span style="color:#3aa675;font-weight:600">2</span>种随机[<span style="color:#d44;font-weight:600">异常状态</span>](/mechanics/abnormal-status.md)<span style="color:#3aa675;font-weight:600">2</span>回合。恢复<span style="color:#3aa675;font-weight:600">30</span>%已损失生命。

## 升级后

PP: 1/1 [<span style="color:#d4a017;font-weight:600">碎心</span>](/mechanics/shattered_heart.md)。下一次攻击伤害<span style="color:#3aa675;font-weight:600">2.5</span>倍。对所有敌人造成<span style="color:#3aa675;font-weight:600">30</span>+自身最大生命值<span style="color:#3aa675;font-weight:600">25</span>%的[<span style="color:#d4a017;font-weight:600">固定伤害</span>](/mechanics/fixed-damage.md)，施加<span style="color:#3aa675;font-weight:600">2</span>种随机[<span style="color:#d44;font-weight:600">异常状态</span>](/mechanics/abnormal-status.md)<span style="color:#3aa675;font-weight:600">2</span>回合。恢复<span style="color:#3aa675;font-weight:600">50</span>%已损失生命。

## 小贴士

- **四合一终极卡**：一次打出同时做四件事——下次攻击 2.5 倍增伤、全体固定伤害、全体随机异常状态、回血。攻防兼备的衍生终结技。
- **碎心代价**：打出时失去 <span style="color:#3aa675;font-weight:600">2</span> 点最大生命值（[碎心](/mechanics/shattered_heart.md)关键词效果），在其它效果前触发。相对四合一的效果，代价微不足道。
- **2.5 倍增伤的爆发窗口**：对自身施加 <span style="color:#3aa675;font-weight:600">150</span>% [增伤](/powers/next_damage_boost_power.md)，下一次攻击伤害 ×2.5。增伤只对**攻击伤害**生效、触发一次即消耗——打出这张牌的同回合或下回合要立即接高伤攻击牌收割。
- **固定伤害是延迟结算**：全体伤害走[固定伤害](/mechanics/fixed-damage.md)模型——**不是立即扣血**，而是先给每个敌人挂 Debuff，敌人**下回合开始时**才受到 20（升级后 30）+ 自身最大生命 25% 的伤害。血条上会先出现粉橙色预扣段。
- **固定伤害无视常规防御**：结算时不吃格挡、不吃力量/虚弱/易伤、不吃元素克制——但**可被免疫固定伤害/回合免疫/长效体力免疫，也可被坚毅反弹**。面对带固伤免疫的敌人（部分 Boss/精英）这一条伤害会落空，但异常与回血仍然生效。
- **最大生命越高伤害越高**：固定伤害 = 基础 20 + 自身最大生命 × 25%。最大生命 100 时全体 45，200 时全体 70——最大生命流派直接放大这张牌的输出。
- **2 种随机异常**：从全部异常状态中随机选 2 种（不重复），对所有敌人施加 2 回合。随机性意味着每次效果不同——可能抽到强控，也可能抽到弱状态。多人模式两端随机同步。
- **回血保命**：恢复 30%（升级后 50%）已损失生命。残血时回血量最高——已损失 50 血时回复 15（升级后 25），危急时刻兼具反杀能力。
- **升级的价值**：固定伤害 +10（20→30），回复百分比 +20（30%→50%）。最大生命 100 时全体伤害从 45 提到 55，回血能力提升 67%，升级优先级高。
- **获取途径**：由遗物[武心婵](/relics/legendary/wu_xin_chan.md)生成——三色龙鳞全部失去、觉醒白色龙鳞时加入手牌。每场战斗最多一张，把握好打出时机。

## 相关能力

- [增伤](/powers/next_damage_boost_power.md)（下一次攻击伤害 2.5 倍）

## 相关机制

- [碎心](/mechanics/shattered_heart.md)（打出时失去 2 点最大生命值）
- [固定伤害](/mechanics/fixed-damage.md)（延迟结算、可免疫可反弹的全体伤害）
- [异常状态](/mechanics/abnormal-status.md)（施加 2 种随机异常状态）

## 源码

- `SeerDestinedStarBond.cs`
