# 好男孩

<img src="/images/cards/good_boy.png" alt="好男孩" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 无色牌
- **能量消耗**: 1
- **类型**: 能力
- **稀有度**: 普通
- **目标**: 自身
- **关键词**: [固有](/mechanics/innate.md)
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 力量损失 | 1 | 1 |
| 防御获取 | 1 | 1 |
| 格挡 | 8 | 12 |

## 描述

每回合结束时，失去<span style="color:#3aa675;font-weight:600">1</span>点[<span style="color:#d4a017;font-weight:600">力量</span>](/powers/strength_power.md)，获得<span style="color:#3aa675;font-weight:600">1</span>点[<span style="color:#d4a017;font-weight:600">防御</span>](/powers/defense_power.md)和<span style="color:#3aa675;font-weight:600">8</span>点[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)。

## 升级后

每回合结束时，失去<span style="color:#3aa675;font-weight:600">1</span>点[<span style="color:#d4a017;font-weight:600">力量</span>](/powers/strength_power.md)，获得<span style="color:#3aa675;font-weight:600">1</span>点[<span style="color:#d4a017;font-weight:600">防御</span>](/powers/defense_power.md)和<span style="color:#3aa675;font-weight:600">8</span>点[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)。

## 小贴士

- **🔑 自动运转的"力量→防御"转换器**：挂上后每个回合结束自动结算一轮：[力量](/powers/strength_power.md) -<span style="color:#3aa675;font-weight:600">1</span>、[防御](/powers/defense_power.md) +<span style="color:#3aa675;font-weight:600">1</span>、[格挡](/mechanics/block.md) +<span style="color:#3aa675;font-weight:600">8</span>（升级后 <span style="color:#3aa675;font-weight:600">12</span>）。**打出当回合的回合结束就触发第一次**——之后每回合白拿，无需再管。
- **游戏内卡面文案写"回合开始时"，实际结算在回合结束时**：源码与能力提示均以**回合结束时**触发（AfterSideTurnEnd）。这个时点其实更好——回合结束刚拿的格挡正好完整覆盖敌方的下一个回合。
- **[防御](/powers/defense_power.md)是永久累积的攻击减伤**：每层防御使你受到的**攻击伤害**掉血 -1（在格挡之后直接减免 HP 损失）；对[固定伤害](/mechanics/fixed-damage.md)和[灼烧](/powers/burn_power.md)/[中毒](/powers/poison_power.md)等 DoT 无效。防御层数不随回合清空，越叠越厚。
- **固伤/DoT 流的完全白嫖引擎**：[力量](/powers/strength_power.md)只加成**攻击伤害**——[固定伤害](/mechanics/fixed-damage.md)和 DoT 完全不吃力量。走非攻击伤害路线时，"力量 -1"的代价等于零，每回合净赚 1 防御 + 8 格挡，纯粹的生存印钞机。
- **攻击流的慢性自杀，慎拿**：力量损失没有下限、可以减到负数（负力量 = 攻击伤害倒扣）。5 回合后累计 -5 力量，攻击伤害大幅缩水；依赖攻击输出的构筑拿它等于自断手臂。
- **长战累计收益**：挂上 N 个回合后 ≈ 力量 -N / 防御 +N / 累计格挡 8N（升级后 12N）。10 回合的 Boss 战 = +10 防御 + 累计 80~120 格挡——防御型长战构筑的核心引擎。
- **[固有](/mechanics/innate.md)+1 费 = 越早挂越赚**：开局必在手、1 费即可挂上，第一回合结束就开始产生收益。能力是 Instanced 实例——重复挂两张 = 两个实例各自独立结算，每回合双倍转换（-2 力量/+2 防御/+16 格挡），防御流可以叠。
- **升级性价比：每回合 +4 格挡**：8→12 是纯数值升级（+50%），10 回合累计多 40 格挡，必升。

## 相关能力

- [好男孩](/powers/good_boy_power.md)（回合结束时力量-1、防御+1、获得格挡）
- [力量](/powers/strength_power.md)（每回合 -1，可减至负数）
- [防御](/powers/defense_power.md)（每回合 +1，永久累积的攻击减伤）

## 相关机制

- [格挡](/mechanics/block.md)（获得 8 点格挡，升级后 12 点）
- [固有](/mechanics/innate.md)（战斗开始时必定在手牌）

## 源码

- `SeerGoodBoy.cs`
