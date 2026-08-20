# 好女孩

<img src="/images/cards/good_girl.png" alt="好女孩" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

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
| 异常状态数量 | 2 | 3 |
| 持续回合 | 1 | 1 |

## 描述

每回合开始时，令对手随机获得<span style="color:#3aa675;font-weight:600">2</span>种[<span style="color:#9b59b6;font-weight:600">异常状态</span>](/mechanics/abnormal-status.md)<span style="color:#3aa675;font-weight:600">1</span>回合。

## 升级后

每回合开始时，令对手随机获得<span style="color:#3aa675;font-weight:600">2</span>种[<span style="color:#9b59b6;font-weight:600">异常状态</span>](/mechanics/abnormal-status.md)<span style="color:#3aa675;font-weight:600">1</span>回合。

## 小贴士

- **🔑 全自动异常撒布机**：1 费挂上能力后，之后**每个你的回合开始前**自动向随机敌人撒 <span style="color:#3aa675;font-weight:600">2</span> 种（升级后 <span style="color:#3aa675;font-weight:600">3</span>）随机[异常状态](/mechanics/abnormal-status.md)各 <span style="color:#3aa675;font-weight:600">1</span> 回合——全程零费用零手牌成本的白嫖控场。
- **触发时机在回合开始前——敌人是"带病行动"**：异常在你的回合开始前就挂到敌人身上，敌人接下来的行动已经吃满效果——抽到[瘫痪](/powers/paralysis_power.md)/[石化](/powers/petrify_power.md)这类硬控可能直接跳过行动，[灼烧](/powers/burn_power.md)则在它回合结束立刻掉血。**打出当回合不触发**（时机已过），第一次生效是下个回合开始前。
- **状态和目标都是每次独立随机**：每一次撒布单独随机状态（从 <span style="color:#3aa675;font-weight:600">24</span> 种异常池）和目标（从所有可攻击敌人）——两次可以抽中同一种状态砸向同一个敌人（叠 2 回合），也可以分散到不同敌人身上；单体 Boss 战目标必中不浪费，多敌群战则是随机点名。
- **随机性是双刃剑**：池子里既有[睡眠](/powers/sleep_power.md)/[瘫痪](/powers/paralysis_power.md)/[石化](/powers/petrify_power.md)这类硬控神牌，也有灼烧/中毒 1 层这类低价值平牌——单次抽取命中特定状态的概率仅 <span style="color:#3aa675;font-weight:600">1/24</span>（约 4.2%），升级后每回合 3 次 ≈ 12.5% 概率命中你想要的那一种。把它当"每回合免费抽异常彩票"，别指望稳定控某个敌人。
- **1 回合的控场价值高于消耗**：灼烧/中毒类 DoT 只挂 1 层数值可忽略，真正值钱的是 1 回合的**行动干扰**（睡眠/瘫痪/石化/冻结/束缚）和**输出增伤**（易伤/恐惧类）——只要抽中任一硬控，等于白换敌人一个回合。
- **与异常联动体系天然契合**：依赖"敌人带异常"的增伤能力、异常层数转化类效果与它的全自动覆盖节奏完美配合——你不需要专门出牌铺异常，引擎每回合自动帮你铺。
- **对[异常免疫](/mechanics/abnormal-status.md)的敌人会空转**：敌人免疫对应异常时施加无效——面对高免疫覆盖率的目标，此牌的期望收益大幅下降。
- **[固有](/mechanics/innate.md)+1 费，越早挂越赚**：开局必在手、首回合即可挂上，第 2 回合起每回合生效——长战、精英、Boss 战的累计收益最高，速攻局意义有限。
- **升级性价比：每回合 +1 次撒布**：2→3 次 = 期望收益直接 +50%，还能提高重复叠加同一硬控的概率，必升。

## 相关能力

- [好女孩](/powers/good_girl_power.md)（回合开始前随机施加异常状态）

## 相关机制

- [异常状态](/mechanics/abnormal-status.md)（24 种异常状态随机施加，含衰减规则与免疫说明）
- [固有](/mechanics/innate.md)（战斗开始时必定在手牌）

## 源码

- `SeerGoodGirl.cs`
