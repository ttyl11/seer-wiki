# 九月的枷锁

<img src="/images/cards/september_shackles.png" alt="九月的枷锁" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 1
- **能量消耗**: 1
- **类型**: 能力
- **稀有度**: 罕见
- **目标**: 无
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 束缚回合 | 4 | 4 |
| 命中变化 | -4 | -4 |
| 魂缚层数 | 2 | 2 |
| 能量消耗 | 1 | 0 |
| PP | 1 | 1 |
| 最大PP | 1 | 1 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 给予所有敌人[<span style="color:#d4a017;font-weight:600">束缚</span>](/powers/constrict_power.md)<span style="color:#3aa675;font-weight:600">4</span>回合，[<span style="color:#d4a017;font-weight:600">命中</span>](/powers/accuracy_power.md)<span style="color:#3aa675;font-weight:600">-4</span>。自身受到[<span style="color:#d4a017;font-weight:600">魂缚</span>](/powers/chains_of_binding_power.md)<span style="color:#3aa675;font-weight:600">2</span>。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 耗能降至<span style="color:#3aa675;font-weight:600">0</span>。给予所有敌人[<span style="color:#d4a017;font-weight:600">束缚</span>](/powers/constrict_power.md)<span style="color:#3aa675;font-weight:600">4</span>回合，[<span style="color:#d4a017;font-weight:600">命中</span>](/powers/accuracy_power.md)<span style="color:#3aa675;font-weight:600">-4</span>。自身受到[<span style="color:#d4a017;font-weight:600">魂缚</span>](/powers/chains_of_binding_power.md)<span style="color:#3aa675;font-weight:600">2</span>。

## 小贴士

- **双重削弱敌方输出**：[束缚](/powers/constrict_power.md)让敌方**无法获取先制**（<span style="color:#3aa675;font-weight:600">4</span> 回合），[命中](/powers/accuracy_power.md) −<span style="color:#3aa675;font-weight:600">4</span> 让敌方攻击有 <span style="color:#3aa675;font-weight:600">20</span>% 概率落空（每层 5%，共 4 层）——叠加起来相当于 4 回合内敌方 20% 攻击伤害归零且无法获得先制。一张牌同时压掉"先制"和"命中"两个输出维度，控场价值极高。
- **核心矛盾：控敌 vs 自缚**：自身受到 <span style="color:#3aa675;font-weight:600">2</span> 层[魂缚锁链](/powers/chains_of_binding_power.md)，意味着**之后每回合抽到的前 2 张牌都会被侵蚀为魂缚牌**，且每回合**只能打出 1 张魂缚牌**——被侵蚀的第 2 张牌本回合卡在手里打不出去，回合结束时侵蚀解除、下回合恢复可用。
- **侵蚀只影响"抽到的牌"**：魂缚侵蚀发生在**抽牌瞬间**——已经在手牌里的牌不会被侵蚀。所以少抽牌（甚至不抽牌）可以规避大部分侵蚀代价；反过来，重抽牌流派被这张牌克制得最狠。
- **能力牌的永久代价**：作为能力牌，打出后**整场战斗永久生效**——魂缚锁链不会随回合消散，每回合都会重新侵蚀新抽到的 2 张牌。所以这张牌不能像普通控场牌那样随手打出，必须想清楚"这把能接受每回合被锁 2 张抽牌吗"。
- **束缚 4 回合 + 命中 -4 永久**：束缚会随受击者回合结束递减（4 回合后消失），但命中 −4 **无衰减、永久生效**——长期来看这张牌的核心控场价值在命中压制上，束缚只是前 4 回合的额外保护。
- **最佳使用时机**：在预计战斗剩余回合不多、自己出牌需求低的局面打出（如 Boss 决胜回合前），或配合能"消耗魂缚牌""转化状态牌"的机制对冲副作用。不适合在手牌有很多关键牌要打出时使用。
- **性价比**：<span style="color:#3aa675;font-weight:600">1</span> 费 + PP <span style="color:#3aa675;font-weight:600">1</span>（单场仅 1 次）换双维度群体削弱——赚的是全场命中压制，失的是每回合出牌自由度。升级后 <span style="color:#3aa675;font-weight:600">0</span> 费让这张牌变成"白嫖控场"，升级优先级高。

## 相关能力

- [束缚](/powers/constrict_power.md)（群体施加，禁止敌方获取先制）
- [命中](/powers/accuracy_power.md)（群体施加负值，敌方攻击有概率落空）
- [魂缚锁链](/powers/chains_of_binding_power.md)（自身受到的代价，限制每回合出牌节奏）

## 源码

- `SeerSeptemberShackles.cs`
