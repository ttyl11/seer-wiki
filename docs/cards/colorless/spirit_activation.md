# 元神启动

<img src="/images/cards/spirit_activation.png" alt="元神启动" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 无色牌
- **能量消耗**: 1
- **类型**: 能力
- **稀有度**: 罕见
- **目标**: 自身
- **可升级**: 是（1 级）

## 描述

每回合开始时，<span style="color:#d4a017;font-weight:600">生成</span>一个[<span style="color:#d4a017;font-weight:600">神谕充能球</span>](/orbs/oracle_orb.md)。

## 升级后

每回合开始时，<span style="color:#d4a017;font-weight:600">生成</span>一个[<span style="color:#d4a017;font-weight:600">神谕充能球</span>](/orbs/oracle_orb.md)。

## 小贴士

- **🔑 永续神谕球泵**：挂上后每个回合开始前自动引导 <span style="color:#3aa675;font-weight:600">1</span> 个[神谕充能球](/orbs/oracle_orb.md)——[神谕球](/orbs/oracle_orb.md)被动 = 回合开始随机 +<span style="color:#3aa675;font-weight:600">1</span> [力量](/powers/strength_power.md)/[防御](/powers/defense_power.md)/命中/[速度](/powers/speed_power.md) 四选一，**每回合稳定白赚一项全属性成长**，整场战斗滚下来属性全面上涨。
- **栏位满时自动触发激发循环**：[充能球栏位](/mechanics/orb.md)占满后，每回合新引导的神谕球会顶掉最旧的一颗——顶掉 = 自动[激发](/mechanics/evoke.md) = **给随机手牌施加随机附魔**——形成"每回合 +1 属性 + 1 次附魔"的永动循环，手牌附魔越滚越多。
- **附魔是长线复利**：mod 的[附魔](/mechanics/enchantment.md)系统给卡牌追加词条——被激发附魔的卡整场保持强化；元神启动等于开了一条"免费附魔流水线"，抽到的关键牌都可能被随机强化。
- **[虚无](/mechanics/ethereal.md)的节奏压力**：抽到它的回合若不打，回合结束直接[消耗](/mechanics/exhaust.md)——好在它只是 1 费能力，抽到即挂基本无压力；唯一纠结点是抽到它的回合恰好能量紧张。
- **升级移除虚无 = 可以择机打**：升级后回合结束不再自毁——能量紧张的回合可以先留着，下回合再挂，损失一个球 Cycle 换节奏自由。
- **神谕球不吃[集中](/powers/focus_power.md)**：数值固定（被动 1 属性/激发 1 附魔），集中流拿它没有额外加成——它的强度全在"每回合稳定触发"本身。

## 相关机制

- [充能球](/mechanics/orb.md)（每回合引导神谕球）
- [虚无](/mechanics/ethereal.md)（升级前：不打即消耗）

## 源码

- `SeerSpiritActivation.cs`
