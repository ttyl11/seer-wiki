# 战·圣灵天威

<img src="/images/cards/holy_heavenly_might.png" alt="战·圣灵天威" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 无色牌
- **能量消耗**: 3
- **类型**: 技能
- **稀有度**: 罕见
- **目标**: 所有敌方
- **可升级**: 是（1 级）
- **升级后关键词**: [<span style="color:#d4a017;font-weight:600">保留</span>](/mechanics/retain.md)

### 数值参数

| 参数 | 数值 |
|---|---|
| 回复数量 | 3 |
| 易伤层数 | 3 |
| 每易伤伤害 | 3 |

## 描述

恢复<span style="color:#3aa675;font-weight:600">3</span>生命。生命值每变动一次，获得<span style="color:#3aa675;font-weight:600">1</span>[<span style="color:#d4a017;font-weight:600">能量</span>](/mechanics/energy.md)并抽<span style="color:#3aa675;font-weight:600">1</span>张牌。所有敌人<span style="color:#3aa675;font-weight:600">3</span>层[<span style="color:#9b59b6;font-weight:600">易伤</span>](/powers/vulnerable_power.md)，每层对随机敌人造成<span style="color:#3aa675;font-weight:600">3</span>伤害。

## 升级后

[<span style="color:#d4a017;font-weight:600">保留</span>](/mechanics/retain.md)。恢复<span style="color:#3aa675;font-weight:600">3</span>生命。生命值每变动一次，获得<span style="color:#3aa675;font-weight:600">1</span>[<span style="color:#d4a017;font-weight:600">能量</span>](/mechanics/energy.md)并抽<span style="color:#3aa675;font-weight:600">1</span>张牌。所有敌人<span style="color:#3aa675;font-weight:600">3</span>层[<span style="color:#9b59b6;font-weight:600">易伤</span>](/powers/vulnerable_power.md)，每层对随机敌人造成<span style="color:#3aa675;font-weight:600">3</span>伤害。

## 小贴士

- **🔑 四段连招一卡打完**：①回 <span style="color:#3aa675;font-weight:600">3</span> 血 → ②全场敌人各 <span style="color:#3aa675;font-weight:600">3</span> 层[易伤](/powers/vulnerable_power.md) → ③按**累计易伤计数**随机轰炸 → ④按**累计生命变动次数**补能量+抽牌。后两段的数值由前两段和整场战斗的历史"喂"出来——越打越大的滚雪球牌。
- **轰炸计数 = 你本场施加过的易伤总层数（含所有来源）**：这张牌给 3 个敌人各上 3 层 = 立刻 +<span style="color:#3aa675;font-weight:600">9</span> 次轰炸；你之前用其它卡施加的每一层易伤也都计入。每 1 次轰炸 = 对随机敌人 <span style="color:#3aa675;font-weight:600">3</span> 点攻击伤害——**攻击伤害吃[力量](/powers/strength_power.md)，且此时全场已挂着刚上的易伤（受攻击伤害 +50%），自引自爆**。
- **能量/抽牌计数 = 你本场的生命变动次数（掉血、回血双向都算）**：卖血流/自伤体系每挨一下都在给它攒燃料；这张牌自己先回 3 血也算 <span style="color:#3aa675;font-weight:600">1</span> 次——打出至少保底 1 能量 1 抽牌，实际一局 5~10 次变动 = 补回大半张牌的费用。
- **3 费的回本账**：3 层易伤（3 回合增伤窗）+ 9×3=27 点基准轰炸（3 敌场合）+ 若干能量/抽牌——多敌遭遇战里单次打出的直接收益就超票价，后续重复打出计数更高。
- **升级[保留](/mechanics/retain.md) = 攒计数再引爆**：回合结束不弃——先用易伤铺场/卖血攒变动次数，把这张留到计数高位再打，轰炸次数和补牌数量都上一个档次。
- **随机目标注意溢出**：轰炸目标随机选取，单体 Boss 时全部命中同一目标（等效集火）；残血敌人提前死亡则剩余轰炸自动落空。

## 相关能力

- [易伤](/powers/vulnerable_power.md)：原版减益能力，受到的攻击伤害增加 50%
- 生命变动追踪（mod 能力）：记录生命变动与易伤施加次数，无对应能力页

## 源码

- `SeerHolyHeavenlyMight.cs`
