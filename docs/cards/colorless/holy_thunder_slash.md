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

- **🔑 球与爪击的复利引擎**：打出 = 立刻随机引导 <span style="color:#3aa675;font-weight:600">4</span> 个[充能球](/mechanics/orb.md) + 生成**累计引导数**张[爪击](/mechanics/keywords.md)入手。爪击计数只算**这张牌自己**引导过的球（其它球源不计入），且**跨回合累计**——第一次打出 4 球 4 爪击，第二次 4 球 8 爪击，第三次 4 球 12 爪击……**每重复一次，爪击产出+4**。
- **爪击是"越打越疼"的原版攻击**：爪击 0 费 <span style="color:#3aa675;font-weight:600">4</span> 伤，且每次打出任意爪击，本场所有爪击伤害 +<span style="color:#3aa675;font-weight:600">2</span>——12 张爪击连打 = 4/6/8/10…递增伤害链，配合[力量](/powers/strength_power.md)/[易伤](/powers/vulnerable_power.md)再乘一层。
- **随机球池 = 原版全部 + 10 种 mod 球**：火山/海洋/森林/塔/星/Oracle/PP/圣杯/玻璃等全在池内——4 费买 4 球，被动产出与激发储备同时铺开；[充能球栏位](/mechanics/orb.md)不够时多余引导会顶替最旧的球，注意预留栏位。
- **4 费的回本账**：4 个球（被动价值+激发储备）+ 首轮 4 张 0 费爪击（16 点基准伤害、还递增）——当回合就能把一半费用打回来，第二轮起纯赚。
- **战斗结束计数清零**：爪击累计是**单场战斗**内有效，新战斗从 0 重新滚——长战斗/Boss 战是它的主场。
- **升级[保留](/mechanics/retain.md) = 复利节奏器**：回合结束不弃——刻意把这张留在手里跨回合反复打出，让爪击计数一路滚到 16/20+，配合抽牌引擎把它抽回来是核心玩法；充能球构筑（[圣杯](/cards/colorless/holy_grail.md)扩栏位后）几乎是必拿核心。

## 相关机制

- [充能球](/mechanics/orb.md)（随机引导与栏位交互）
- [保留](/mechanics/retain.md)（升级后获得）

## 源码

- `SeerHolyThunderSlash.cs`
