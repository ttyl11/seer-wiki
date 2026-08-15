# 璨灵圣光

<img src="/images/cards/radiant_holy_light.png" alt="璨灵圣光" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 先古牌
- **最大PP**: 1
- **能量消耗**: 1
- **类型**: 技能
- **稀有度**: 先古
- **目标**: 无
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 能量消耗 | 1 | 0 |
| PP | 1 | 1 |
| 最大PP | 1 | 1 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span><br/>清除自身debuff和敌方buff，每有<span style="color:#3aa675;font-weight:600">x</span>层数，敌方获得<span style="color:#3aa675;font-weight:600">x</span>种[<span style="color:#d44;font-weight:600">异常状态</span>](/mechanics/abnormal-status.md)<span style="color:#3aa675;font-weight:600">x</span>回合。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span><br/>清除自身debuff和敌方buff，每有<span style="color:#3aa675;font-weight:600">x</span>层数，敌方获得<span style="color:#3aa675;font-weight:600">x</span>种[<span style="color:#d44;font-weight:600">异常状态</span>](/mechanics/abnormal-status.md)<span style="color:#3aa675;font-weight:600">x</span>回合。耗能降至<span style="color:#3aa675;font-weight:600">0</span>。

## 小贴士

- **双效清除——自身减益和敌方增益一起算**：x = 自身负面减益总层数 + 敌方正面增益总层数。自身减益包括[虚弱](/powers/weak_power.md)、[易伤](/powers/vulnerable_power.md)等 Debuff 正层数；敌方增益包括[力量](/powers/strength_power.md)、[防御](/powers/defense_power.md)等 Buff 正层数。**两层相加才是 x**——所以这张牌在"自身被叠多重减益 + 敌方堆满 buff"的极端场景下收益爆炸。
- **清除范围严格——只清"负面/正面"，保留"正面/负面"**：自身只清减益保留增益，敌方只清增益保留减益。可以放心在自身堆满增益时使用——自身增益不受影响，敌方增益被清空。但要注意：**敌方的减益（如你之前挂的虚弱）不会被清**，所以这张牌不会"帮敌人解 debuff"。
- **x 种异常状态不重复——25 种上限**：从 <span style="color:#3aa675;font-weight:600">25</span> 种[异常状态](/mechanics/abnormal-status.md)中随机不重复选取 x 种，每种仅施加一次。x 超过 25 时最多施加 25 种。所以 x=10 时敌人会中 10 种不同异常，x=30 时也只中 25 种——**叠加再多层也不会浪费异常池**。
- **每种异常持续 x 回合——层数和回合数联动**：异常状态的持续回合数 = x。所以 x=5 时，每个敌人中 5 种异常各 5 回合；x=10 时，每个敌人中 10 种异常各 10 回合。**x 越大，惩罚的"广度"和"深度"同时放大**——这是这张牌最恐怖的设计。
- **每个敌方独立判定——多敌人场景收益倍增**：每个敌方都会独立获得 x 种异常状态，不是共享。所以 3 个敌人场景下，总异常施加量是 3×x 种——配合多敌人战斗收益极高。
- **层数计算规则——取绝对值**：自身减益的负层数（如 -3 速度）也会被计入，按绝对值 3 计算。所以哪怕你被叠的是"负层数减益"（如负速度、负命中），照样算进 x——这张牌不怕被叠负层数。
- **升级降费到 0 是质变**：1 费升级到 0 费，效果不变。0 费的双效清除+异常反弹可以随意打出，配合"受伤触发"或"出牌触发"能力形成循环。升级优先级最高——几乎必升。
- **配合"主动叠 buff 敌人"的遗物/能力**：某些遗物或能力会让敌人主动获得 buff（如让敌人获得力量再触发反伤），这张牌可以把这些 buff 转化为异常惩罚——**先让敌人叠 buff，再用这张牌清空+反弹**，收益最大化。
- **性价比**：1 费（升级 0 费）换双效清除 + x 种异常 × x 回合的群体惩罚——先古稀有度配得上，敌人增益越多自身减益越多越超模。

## 相关机制

- [异常状态](/mechanics/abnormal-status.md)：25 种异常状态池，根据清除层数随机不重复选取

## 源码

- `SeerRadiantHolyLight.cs`
