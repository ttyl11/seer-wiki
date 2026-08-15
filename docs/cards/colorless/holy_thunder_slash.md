# 圣灵雷霆斩

<img src="/images/cards/holy_thunder_slash.png" alt="圣灵雷霆斩" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 无色牌
- **能量消耗**: 4
- **类型**: 技能
- **稀有度**: 罕见
- **目标**: 所有敌方
- **可升级**: 是（1 级）
- **升级后关键词**: [<span style="color:#d4a017;font-weight:600">保留</span>](/mechanics/retain.md)

### 数值参数

| 参数 | 数值 |
|---|---|
| 充能球数 | 4 |

## 描述

获得<span style="color:#3aa675;font-weight:600">4</span>个随机[<span style="color:#d4a017;font-weight:600">充能球</span>](/mechanics/orb.md)。<span style="color:#d4a017;font-weight:600">生成</span>本场战斗所<span style="color:#d4a017;font-weight:600">生成</span>[<span style="color:#d4a017;font-weight:600">充能球</span>](/mechanics/orb.md)个数的<span style="color:#d4a017;font-weight:600">爪击</span>。

## 升级后

获得<span style="color:#3aa675;font-weight:600">4</span>个随机[<span style="color:#d4a017;font-weight:600">充能球</span>](/mechanics/orb.md)。<span style="color:#d4a017;font-weight:600">生成</span>本场战斗所<span style="color:#d4a017;font-weight:600">生成</span>[<span style="color:#d4a017;font-weight:600">充能球</span>](/mechanics/orb.md)个数的<span style="color:#d4a017;font-weight:600">爪击</span>。

## 小贴士

- **随机充能球**：从扩展充能球池（原版 + 玻璃球、圣杯球、PP 球等多种 mod 球）中随机生成 <span style="color:#3aa675;font-weight:600">4</span> 个[充能球](/mechanics/orb.md)。每生成一个，累计计数 +1（跨回合保存）。
- **爪击生成**：生成等于本场战斗累计[充能球](/mechanics/orb.md)生成数的爪击卡牌，逐张加入[手牌](/mechanics/hand.md)。
- **战斗结束重置**：每场战斗重新计数。
- **升级效果**：升级后获得[保留](/mechanics/retain.md)关键词，回合结束时不被弃置。

## 源码

- `SeerHolyThunderSlash.cs`
