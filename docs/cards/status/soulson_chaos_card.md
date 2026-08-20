# 混沌

<img src="/images/cards/soulson_chaos_card.png" alt="混沌" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 状态牌（[索伦森](/monsters/boss/soulson_monster.md) Boss 战专属）
- **最大PP**: 1
- **能量消耗**: 1
- **类型**: 状态
- **稀有度**: 状态
- **目标**: 无
- **可升级**: 否
- **关键词**: [保留](/mechanics/retain.md)

### 数值参数

| 参数 | 数值 |
|---|---|
| 混沌迭印触发阈值 | 7 的倍数（不清零） |
| 每次触发施加的双倍消耗 | 1 层 |
| 双倍消耗效果 | 下一张牌耗能 ×2 |
| 灵之殇直接加层 | +10 |

## 描述

<span style="color:#d4a017;font-weight:600">混沌</span>。无事发生。

## 小贴士

- **来源：索伦森的"灵之殇"和"消亡"**：索伦森血量 > 50% 时的**灵之殇**（每回合放）和血量 < 50% 后的**消亡**都会向你的[弃牌堆](/mechanics/discard_pile.md)顶加入 <span style="color:#3aa675;font-weight:600">1</span> 张混沌——半血前后的塞牌来源切换，但污染从第一回合持续到战斗结束。
- **动一次 = 喂索伦森一层**：这张牌每次**改变位置**（洗牌、抽到、打出、弃掉）都会给索伦森叠加 <span style="color:#3aa675;font-weight:600">1</span> 层[混沌迭印](/powers/soulson_chaos_counter_power.md)。此外灵之殇每次释放直接 **+10 层**——10 层可能一次跨越两个 7 的倍数（如 4→14），瞬间给你 <span style="color:#3aa675;font-weight:600">2</span> 层[双倍消耗](/powers/soulson_chaos_energy_double_power.md)。
- **🔑 攥在手里 = 冻结计数（与圣灵相反）**：混沌自带[保留](/mechanics/retain.md)——回合结束**不弃牌、不移动、不触发计数**。只要不打出去，它就永远安静地占 <span style="color:#3aa675;font-weight:600">1</span> 个手牌位，索伦森的混沌迭印只剩灵之殇的 +10 在涨。这是这张牌最核心的处理方式：**能不碰就不碰**。
- **打出去反而亏**：混沌打出只花 <span style="color:#3aa675;font-weight:600">1</span> 费（PP 1/1，一场一次），"无事发生"，且没有[消耗](/mechanics/exhaust.md)——打出手牌→弃牌堆这 1 次移动就 +1 计数，之后进弃牌堆继续洗牌循环（每圈再 +2）。打出它的唯一理由是手牌位被占满影响关键牌上手。
- **双倍消耗是 Debuff，可被驱散**：混沌迭印每跨越 <span style="color:#3aa675;font-weight:600">7</span> 的倍数（6→7、13→14、20→21...）给你 <span style="color:#3aa675;font-weight:600">1</span> 层双倍消耗：**下一张牌耗能 ×2**，打出后消耗 1 层。它是 Debuff 类型——任何"移除自身负面效果"的能力（如净化、驱散类）可以提前清掉；[先制](/powers/first_strike_power.md)等增费效果与它叠加时费用会叠乘得非常离谱。
- **X 费牌和 0 费牌免疫**：双倍消耗对 X 耗能牌不生效（X 牌费用由选择的 X 值决定），负费牌也不翻倍。0 费牌 ×2 仍是 0——**用 0 费/X 费牌"吃掉"双倍消耗是零成本解法**，打一张 0 费牌就白消耗它一层。
- **与"混沌化身"的死亡连招**：索伦森开局给你施加的[混沌化身](/powers/soulson_chaos_incarnation_power.md)允许你在能量不足时打牌、超额部分扣最大生命。混沌迭印叠高 → 双倍消耗多层 → 费用暴增 → 频繁触发"能量不足" → 最大生命被当燃料烧。混沌层数越高，这套组合越致命——冻结混沌牌、及时驱散双倍消耗，是在切断这条连招链。
- **邪灵魔闪光的斩杀线**：索伦森每回合必放的**邪灵魔闪光**会让你损失"混沌迭印 ÷ 10（向下取整）"点最大生命——混沌 <span style="color:#3aa675;font-weight:600">20</span> 层 = 每回合白损 <span style="color:#3aa675;font-weight:600">2</span> 点生命上限。混沌迭印只涨不清（灵之殇 +10 是主增长源），拖到后期每回合的永久失血会越滚越大，这是"速战速决"的最强理由。

## 相关能力

- [混沌迭印](/powers/soulson_chaos_counter_power.md)（索伦森侧计数器，不清零，每 7 的倍数触发）
- [双倍消耗](/powers/soulson_chaos_energy_double_power.md)（施加给你的 Debuff，下一张牌耗能 ×2）
- [混沌化身](/powers/soulson_chaos_incarnation_power.md)（能量不足时扣最大生命打牌，与双倍消耗形成连招）

## 相关机制

- [保留](/mechanics/retain.md)（回合结束不弃牌，冻结位置变化的核心）
- [能量](/mechanics/energy.md)（双倍消耗的直接作用对象）

## 相关怪物

- [索伦森](/monsters/boss/soulson_monster.md)（第三层最终 Boss · 混沌降临）

## 源码

- `SeerSoulsonChaosCard.cs`
- `SeerSoulsonChaosCounterPower.cs`（混沌迭印）
- `SeerSoulsonChaosEnergyDoublePower.cs`（双倍消耗）
