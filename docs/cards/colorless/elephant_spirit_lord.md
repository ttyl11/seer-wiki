# 御象灵尊

<img src="/images/cards/elephant_spirit_lord.png" alt="御象灵尊" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 无色牌
- **能量消耗**: 9
- **类型**: 能力
- **稀有度**: 罕见
- **目标**: 自身
- **关键词**: [保留](/mechanics/retain.md)
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 最大蓄力 | 6 | 9 |

## 描述

每回合，此牌耗能<span style="color:#3aa675;font-weight:600">-2</span>。自身获得等于当前回合数的[<span style="color:#d4a017;font-weight:600">蓄力</span>](/powers/accumulate_power.md)（最多为<span style="color:#3aa675;font-weight:600">6</span>）。

## 升级后

每回合，此牌耗能<span style="color:#3aa675;font-weight:600">-2</span>。自身获得等于当前回合数的[<span style="color:#d4a017;font-weight:600">蓄力</span>](/powers/accumulate_power.md)（最多为<span style="color:#3aa675;font-weight:600">9</span>）。

## 详细机制

- **[保留](/mechanics/retain.md)关键词**：回合结束不弃置，可一直攥在手里等降费。
- **每回合开始双结算**：你的回合开始时——①此牌耗能 <span style="color:#3aa675;font-weight:600">-2</span>；②内部回合计数 +1。
- **降费时间表**：初始 <span style="color:#3aa675;font-weight:600">9</span> 费 → 第 1 回合 <span style="color:#3aa675;font-weight:600">7</span> → 第 2 回合 <span style="color:#3aa675;font-weight:600">5</span> → 第 3 回合 <span style="color:#3aa675;font-weight:600">3</span> → 第 4 回合 <span style="color:#3aa675;font-weight:600">1</span> → 第 5 回合起 <span style="color:#3aa675;font-weight:600">0</span> 费。
- **打出时蓄力 = min(当前回合数, 上限)**：第 6 回合及以后打出 = 满 <span style="color:#3aa675;font-weight:600">6</span> 层（升级后第 9 回合起满 <span style="color:#3aa675;font-weight:600">9</span> 层）。
- **[蓄力](/powers/accumulate_power.md)每层的三重价值**（能力，整场持续）：
  1. 你造成的攻击伤害 +<span style="color:#3aa675;font-weight:600">35</span>%×当前层数（乘区增伤）
  2. 你每打出一套攻击后层数 -1（一次攻击消耗一层，增伤随之下降）
  3. 你的回合开始时获得[先制](/powers/first_strike_power.md)+<span style="color:#3aa675;font-weight:600">1</span>（下一张牌费用 -1）

## 小贴士

- **🔑 第 6 回合是免费满层时点**：第 5 回合起 0 费、第 6 回合蓄力满 6 层——**第 6 回合打出 = 0 费拿满全部层数**，一费不花白嫖一个后期引擎。攥着不打是正确操作，前 4 回合的 9/7/5/3 费都是陷阱价。
- **蓄力是递减型爆发引擎**：6 层蓄力的总收益 = 第 1 次攻击 +210%、第 2 次 +175%、……逐次递减 35%，直到打空。前置攻击越痛收益越大——把蓄力和手里最重的攻击牌排在一起打出，先打蓄力加成下的重击再打小伤害。
- **先制赠送是隐藏续航**：只要蓄力还在，**每个回合开始都白送先制+1**（下一张牌 -1 费）——即使蓄力被攻击消耗殆尽之前，每回合 1 费减免也在默默回血经济。
- **速攻战斗是死牌**：前 4 回合高费打不出、短战斗撑不到第 6 回合——速攻局它就是手牌里的石头。[保留](/mechanics/retain.md)让它不弃，但也持续占用手牌位。精英/Boss 长战才是主场。
- **升级 6→9 层 = +50% 总量**：满层 9 层 = 9 次递减攻击增伤（首次 +315%）+ 更长的先制赠送期——但要多等 3 回合（第 9 回合才满）。长战斗升级质变，短战斗升级意义不大。
- **性价比**：0 费能力换 6 次攻击的 35%/层 递减增伤 + 数回合先制——后期白嫖引擎，唯一的成本是前期占手牌位。

## 相关能力

- [蓄力](/powers/accumulate_power.md)（自身获得等于当前回合数的蓄力）

## 相关机制

- [保留](/mechanics/retain.md)（关键词）

## 源码

- `SeerElephantSpiritLord.cs`
