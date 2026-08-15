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

- **回复生命**：恢复 <span style="color:#3aa675;font-weight:600">3</span> 点生命。
- **生命变动反馈**：追踪本回合生命值变动次数，每变动一次获得 <span style="color:#3aa675;font-weight:600">1</span> 点[能量](/mechanics/energy.md)并抽 <span style="color:#3aa675;font-weight:600">1</span> 张牌。
- **易伤施加**：对所有敌人施加 <span style="color:#3aa675;font-weight:600">3</span> 层[<span style="color:#9b59b6;font-weight:600">易伤</span>](/powers/vulnerable_power.md)。
- **随机伤害**：每层已施加的易伤对随机敌人造成 <span style="color:#3aa675;font-weight:600">3</span> 点攻击伤害（受[力量](/powers/strength_power.md)影响），目标随机选取。
- **追踪能力**：记录生命变动与易伤施加次数，战斗开始前预施加。
- **升级效果**：升级后获得[保留](/mechanics/retain.md)关键词，回合结束时不被弃置。数值参数不变。

## 相关能力

- [易伤](/powers/vulnerable_power.md)：原版减益能力，受到的攻击伤害增加 50%
- 生命变动追踪（mod 能力）：记录生命变动与易伤施加次数，无对应能力页

## 源码

- `SeerHolyHeavenlyMight.cs`
