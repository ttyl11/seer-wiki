# 无尽能源

<img src="/images/cards/endless_energy.png" alt="无尽能源" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 无色牌
- **能量消耗**: 0
- **类型**: 技能
- **稀有度**: 稀有
- **目标**: 无
- **可升级**: 是（1 级）

## 描述

获得<span style="color:#3aa675;font-weight:600">999</span>点[<span style="color:#d4a017;font-weight:600">能量</span>](/mechanics/energy.md)。本回合每打出一张牌，向[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)加入1张随机赛尔诅咒。

## 升级后

获得<span style="color:#3aa675;font-weight:600">999</span>点[<span style="color:#d4a017;font-weight:600">能量</span>](/mechanics/energy.md)。本回合每打出一张牌，向[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)加入1张随机赛尔诅咒。

> 升级后获得[保留](/mechanics/retain.md)关键词。

## 小贴士

- **🔑 0 费换一个无限费回合**：<span style="color:#3aa675;font-weight:600">999</span> 点能量 = 本回合费用实际上无限——抽牌、出牌循环全开，一回合把抽牌堆里所有能打的牌全部倾泻出去。注意能量回合结束清空，**必须在当回合花完**，憋着等于白拿。
- **代价实时结算——每打一张塞一张诅咒**：此牌打出后，本回合你每打出一张牌（包括随后打出的每一张），就从赛尔诅咒池随机塞 <span style="color:#3aa675;font-weight:600">1</span> 张诅咒到手牌底部。打得越多诅咒越多——输出爆发的同时手牌质量实时崩坏。
- **诅咒只污染本场，不进局外牌组**：塞进来的诅咒是战斗内生成的衍生牌，战斗结束全部消失——**不会弄脏你的局外牌组**。代价仅限本场战斗的手牌/弃牌堆循环。
- **本场的滚雪球代价**：打 15 张牌 = 15 张诅咒入循环——弃牌堆被塞满，洗牌后再抽回来，后续回合手牌全是诅咒。**这是斩杀牌不是发育牌**：确保本回合打死或打残敌人再用，打成持久战就是自毁手感。
- **配合诅咒收益构筑可反转代价**：若构筑里有"诅咒联动"（消耗诅咒、诅咒触发类效果），诅咒从代价变成燃料——无限能源反而成为诅咒引擎的启动器。
- **先打关键牌再让诅咒进手**：诅咒塞到手牌**底部**，爆发顺序上先打核心输出、后打填充牌——诅咒最后进手，减少对当回合操作的影响。
- **升级保留——攒到斩杀回合**：升级后获得[保留](/mechanics/retain.md)，回合结束不弃——抽到后攥在手里，等敌人进斩杀线的那一回合一键倾泻，把诅咒代价压到最低。
- **性价比**：0 费换无限能量回合，代价是本场手牌污染——斩杀回合使用 = 纯赚；发育回合使用 = 自残。

## 相关能力

- [无尽能源](/powers/endless_energy_power.md)（打出后施加此能力）

## 相关机制

- [能量](/mechanics/energy.md)（获得 999 点能量）
- [手牌](/mechanics/hand.md)（诅咒牌加入手牌）
- [保留](/mechanics/retain.md)（升级后获得的关键词）

## 源码

- `SeerEndlessEnergy.cs`
