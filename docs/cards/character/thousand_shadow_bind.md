# 千重影缠身

<img src="/images/cards/thousand_shadow_bind.png" alt="千重影缠身" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 5
- **能量消耗**: 1
- **类型**: 攻击
- **稀有度**: 普通
- **目标**: 所有敌人
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 最低伤害 | 3 | 5 |
| 最高伤害 | 24 | 30 |
| 每次使用最低值提升 | 5 | 5 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 对所有敌人随机造成<span style="color:#3aa675;font-weight:600">3</span>-<span style="color:#3aa675;font-weight:600">24</span>点伤害。战斗中每使用一次，最低值+<span style="color:#3aa675;font-weight:600">5</span>。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 对所有敌人随机造成<span style="color:#3aa675;font-weight:600">5</span>-<span style="color:#3aa675;font-weight:600">30</span>点伤害。战斗中每使用一次，最低值+<span style="color:#3aa675;font-weight:600">5</span>。

## 小贴士

- **战斗内滚雪球**：每打出一次，下一次的最低伤害+<span style="color:#3aa675;font-weight:600">5</span>（计数在造成伤害后才+1，所以本次打出的仍是旧下限）。PP5 意味着一场战斗最多打 5 次，下限依次为 <span style="color:#3aa675;font-weight:600">3</span>→<span style="color:#3aa675;font-weight:600">8</span>→<span style="color:#3aa675;font-weight:600">13</span>→<span style="color:#3aa675;font-weight:600">18</span>→<span style="color:#3aa675;font-weight:600">23</span>，第 5 发几乎贴着上限 <span style="color:#3aa675;font-weight:600">24</span> 随机。注意计数每场战斗结束重置，下一场从 <span style="color:#3aa675;font-weight:600">3</span> 重新爬起。
- **每个敌人独立随机**：伤害对每个敌人单独掷骰（3-24 各 roll 各的），对群体时每个敌人都有机会吃到高伤，总伤期望 = 敌人数 × 平均值，多敌场合收益放大。
- **常规攻击伤害**：吃力量/[<span style="color:#d44;font-weight:600">易伤</span>](/powers/vulnerable_power.md)加成、可被格挡——先上易伤再连发，滚雪球效果更好。
- **升级抬高两端**：升级把区间从 3-24 抬到 5-30（下限+2、上限+6），下限起点更高、上限提升 25%。升级后的 5 连发下限为 <span style="color:#3aa675;font-weight:600">5</span>→<span style="color:#3aa675;font-weight:600">10</span>→<span style="color:#3aa675;font-weight:600">15</span>→<span style="color:#3aa675;font-weight:600">20</span>→<span style="color:#3aa675;font-weight:600">25</span>，收尾稳定且爆发更高。
- **性价比**：1 费 AOE 自带成长，单场多次打出后质变为稳定高伤全体攻击，是普通牌里的多敌战主力；单体 Boss 战收益减半（只有一次掷骰），价值随敌人数量上升。

## 源码

- `SeerThousandShadowBind.cs`
