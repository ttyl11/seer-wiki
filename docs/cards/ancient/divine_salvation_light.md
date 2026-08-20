# 神灵救世光

<img src="/images/cards/divine_salvation_light.png" alt="神灵救世光" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 先古牌
- **最大PP**: 7
- **能量消耗**: 0
- **类型**: 攻击
- **稀有度**: 先古
- **目标**: 任意敌方（自动打出时随机选敌）
- **可升级**: 否
- **关键词**: [真神](/mechanics/true_god.md)

### 数值参数

| 参数 | 数值 |
|---|---|
| PP | 7 |
| 最大PP | 7 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">7</span>/<span style="color:#3aa675;font-weight:600">7</span><br/>造成<span style="color:#3aa675;font-weight:600">|[抽牌堆](/mechanics/draw_pile.md)-[弃牌堆](/mechanics/discard_pile.md)|</span>伤害。恢复<span style="color:#3aa675;font-weight:600">[消耗牌堆](/mechanics/exhaust_pile.md)数</span>生命。将一张随机[<span style="color:#d4a017;font-weight:600">真神</span>](/mechanics/true_god.md)牌放入[<span style="color:#d4a017;font-weight:600">真神牌堆</span>](/mechanics/true-god-pile.md)。重复打出直至PP耗尽。

## 详细机制

- **真神关键词**：此牌不能手动打出，只能被自动打出——[奇巧](/mechanics/sly.md)、破灭等强制打出效果是唯一的启动方式。
- **一次性倾泻全部 PP**：被触发后进入循环：每轮先消耗 <span style="color:#3aa675;font-weight:600">1</span> PP，然后执行一轮完整效果（伤害+回血+塞真神牌），**循环到 PP 耗尽才停**。触发时剩多少 PP 就连打多少轮，不存在"留一点下次用"——PP 7 的满状态一次触发就是 7 连发。
- **每轮伤害独立结算**：伤害 = |抽牌堆数 − 弃牌堆数|，取绝对值。攻击伤害属性，每轮独立吃[力量](/powers/strength_power.md)/[易伤](/powers/vulnerable_power.md)增伤。循环期间两堆数量不变（效果本身不抽牌不出牌），所以每轮伤害相同——总伤害 = |抽−弃| × 轮数。
- **每轮回血一次**：回复量 = 消耗牌堆张数，每轮都回复一次——消耗堆 10 张、7 轮打满就是 70 点总回复。
- **每轮塞一张真神牌**：每轮向[真神牌堆](/mechanics/true-god-pile.md)添加 <span style="color:#3aa675;font-weight:600">1</span> 张随机真神牌，7 轮 = 7 张，为真神体系持续供弹。
- **循环终止**：每轮结算后检查目标是否存活，目标死亡立即终止剩余轮次。

## 小贴士

- **🔑 一轮三收益，越触发越赚**：单轮 = 伤害 + 回血 + 塞真神牌，全部效果每轮重复。它同时是输出件、续航件和真神牌堆的弹药厂——一张牌干三件事，先古稀有度名副其实。
- **牌堆失衡就是伤害**：伤害看抽/弃两堆的差值——**两堆越失衡伤害越高**。抽干抽牌堆的回合（抽 0 弃 N）伤害就是 N；抽弃各半时伤害反而是 0。打出它之前先算一下两堆数量，别在两堆均衡时浪费触发。
- **消耗堆构筑的双重收益**：消耗牌越多，每轮回血越多——大量消耗牌的构筑里它同时是回复引擎。配合把牌堆消耗/转移的手段，回血量轻松破百。
- **真神牌堆的永动弹药**：真神牌堆里的牌被自动打出后，又能触发新的真神牌入场——7 张入堆意味着后续多轮自动打出机会，真神体系滚雪球的起点。
- **满 PP 再触发收益最大**：循环轮数 = 触发时的剩余 PP，正常一次触发就打光全部 7 PP。唯一会"剩 PP"的情况是目标死亡提前终止——比如第 3 轮击杀目标时还剩 4 PP，下次触发只能打 4 轮。所以多敌人战斗里把它当收割尾刀用会亏轮数，Boss 战满状态触发才是完全体。
- **目标选择是随机的**：自动打出时不指定目标，从可攻击的敌人中随机选择——多敌人战斗里伤害和后续轮次可能落在小怪身上浪费（小怪死后终止循环）。单体 Boss 战是它的最佳舞台。

## 相关机制

- [真神](/mechanics/true_god.md)（只能被自动打出）
- [真神牌堆](/mechanics/true-god-pile.md)（每轮获得一张随机真神牌）
- [抽牌堆](/mechanics/draw_pile.md)（伤害计算依据）
- [弃牌堆](/mechanics/discard_pile.md)（伤害计算依据）
- [消耗牌堆](/mechanics/exhaust_pile.md)（回复量计算依据）

## 源码

- `SeerDivineSalvationLight.cs`
