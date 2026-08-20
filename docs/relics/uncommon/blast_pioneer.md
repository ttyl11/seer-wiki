# 爆破先锋

<img src="/images/relics/blast_pioneer.png" alt="爆破先锋" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 罕见

### 数值参数

| 参数 | 数值 |
|---|---|
| 友方伤害 | 7 |
| 易伤层数 | 1 |
| 重放次数 | 3 |

## 描述

拾起时，向<span style="color:#d4a017;font-weight:600">牌组</span>中加入1张附带<span style="color:#9b59b6;font-weight:600">[重放](/mechanics/replay.md)3</span>和<span style="color:#9b59b6;font-weight:600">[注能](/mechanics/enchantment.md)</span>附魔的<span style="color:#d4a017;font-weight:600">炸弹</span>。<br/><span style="color:#d4a017;font-weight:600">炸弹</span>爆炸时，对所有友方造成<span style="color:#3aa675;font-weight:600">7</span>点伤害并施加<span style="color:#3aa675;font-weight:600">1</span>层<span style="color:#d44;font-weight:600">[易伤](/powers/vulnerable_power.md)</span>。

- **炸弹卡牌**：拾起遗物时生成一张炸弹（原版卡，2 费技能：在 3 回合结束后对所有敌人造成 40 点伤害，升级后 50）加入牌组，附加 [重放](/mechanics/replay.md) <span style="color:#3aa675;font-weight:600">3</span> 与[注能](/mechanics/enchantment.md)附魔。
- **爆炸触发**：炸弹能力结算爆炸（从身上移除）的瞬间触发，对同侧所有存活生物（自己、队友、宠物）逐个造成伤害并施加[易伤](/powers/vulnerable_power.md)。
- **⚠️ 友方伤害无视格挡**：这 7 点属于"无视格挡 + 不受力量影响"的伤害——**格挡完全挡不住**，叠甲再高也得硬吃。

## 风味文字

<span style="color:#d44;font-weight:600">Boom! </span>

## 小贴士

- **先看炸弹本体**：炸弹是原版 2 费技能——打出后 3 回合结束时爆炸，对所有敌人造成 40 点（升级后 50）。对敌人的伤害不吃[力量](/powers/strength_power.md)、也不吃[易伤](/powers/vulnerable_power.md)增伤（属于非攻击伤害），但**能被格挡吸收**。
- **重放 3 = 一回合埋 4 颗雷**：重放 3 让炸弹打出后自动再打 3 次，共 4 次；每次打出的炸弹是**相互独立的实例**，3 回合后会连续爆炸 4 次——敌方吃 40×4=160 点（升级后 200），非常适合斩杀高血量 Boss 或清精英群。
- **代价同样×4**：每次爆炸都触发遗物的友方伤害——自己（和队友）共吃 7×4=28 点**无视格挡**的伤害，外加 4 层[易伤](/powers/vulnerable_power.md)。注意易伤不会反过来放大这 7 点伤害（非攻击伤害），它是纯粹的负面：让你在接下来几个敌方回合里挨的攻击伤害 +50%。
- **格挡救不了你，无实体可以**：友方伤害无视格挡，叠甲无用；但[无实体](/powers/intangible_power.md)能把它封顶在 1 点，回血、吸血类能力也能把血线拉回来。规划爆炸回合前先算好血量。
- **爆炸时机可以规划**：炸弹从打出起第 3 个回合结束时引爆，重放打出的 4 颗雷同回合连环炸。爆炸前你有 2 个整回合铺垫——攒格挡意义不大（挡不住友伤），不如用来输出或回复。
- **注能附魔锦上添花**：炸弹还附带[注能](/mechanics/enchantment.md)附魔，进一步强化这张牌的价值。
- **多人模式慎用**：队友和宠物全部会被波及，28 点无视格挡伤害 + 易伤对队友是实打实的重负，开黑先打招呼。
- **性价比**：罕见稀有度给一张"160 点延迟 AoE"的斩杀组件，代价是 28 点无视格挡自伤 + 4 层易伤——等价于花血买爆发。牌组有回复手段或能凑出无实体时是优质弹药，脆皮无回复时就是自杀按钮。

## 源码

- `SeerBlastPioneer.cs`
- `TheBomb.cs`（原版炸弹卡）
- `TheBombPower.cs`（原版炸弹能力）
