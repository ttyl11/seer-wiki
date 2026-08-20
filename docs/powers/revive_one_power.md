# 复苏I

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物随机池——[群星的礼赠](/relics/starter/elemental_core.md)随机能力池赋予怪物（遭遇时按概率自带，概率随探索房间数增长）

<img src="/images/powers/revive_one_power.png" alt="复苏I" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 单例（不可叠加）
- **可见**: 是

## 描述

首次死亡后恢复所有<span style="color:#d4a017;font-weight:600">体力</span>，并获得<span style="color:#d4a017;font-weight:600">力量</span>、<span style="color:#d4a017;font-weight:600">命中</span>、<span style="color:#d4a017;font-weight:600">速度</span>、<span style="color:#d4a017;font-weight:600">防御</span>各+<span style="color:#3aa675;font-weight:600">1</span>。

## 详细机制

- **首次死亡满血复活**：`ShouldDie` 拦截死亡（未复活过时不判死）→ `AfterPreventingDeath` 瞬间回满全部体力（`Heal(MaxHp)`），随后[力量](/powers/strength_power.md)/[命中](/powers/accuracy_power.md)/[速度](/powers/speed_power.md)/[防御](/powers/defense_power.md)各 +<span style="color:#3aa675;font-weight:600">1</span>，最后移除本能力——**只触发一次**。
- **复活瞬间无敌**：复活流程执行期间（`IsReviving`）伤害 ×0、一切 Power 施加归零、不可被选中——没有任何手段能打断复活或趁复活补刀。
- **等效双倍血量**：实战按"血条 ×2 + 复活后四维各 +1"规划。

## 小贴士

- **斩杀线直接翻倍**：复苏I 怪的真实血量 = 面板 ×2——第一管血打进斩杀线时别庆祝，第二管血是满血且它还比你初见时强一点（四维 +1）。
- **双管血之间的节奏**：它复活当口你的爆发已经交完、格挡可能也消耗了——把它打进复活的那一回合**留好防御**，第二管血从它满血满状态重新打起。
- **复活加成不质变**：四维各 +1 只是轻微变强（攻击 +1、防御 +1）——比[觉醒](/powers/awaken_power.md)/[进化](/powers/evolve_power.md)这类成长词缀温和得多，第二管血正常打即可。
- **系列对比**：[复苏II](/powers/revive_two_power.md)（复活 2 次、无属性加成）/[复苏III](/powers/revive_three_power.md)（复活 4 次）——I 档复活次数最少但唯一带属性成长，II/III 是纯粹的"多条命"。

## 源码

- `SeerReviveOnePower.cs`（`ShouldDie` 拦截 + `AfterPreventingDeath`：`Heal(MaxHp)` + 四维 `Apply` 各 1 + 移除自身；复活期间伤害 ×0/Power 免疫/不可选中）
- 随机池配置：`SeerElementalCore.cs:96`（`0.000025/房`）
