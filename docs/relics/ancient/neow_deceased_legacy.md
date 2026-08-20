# 不死之人

<img src="/images/relics/neow_deceased_legacy.png" alt="不死之人" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 先古

## 描述

拾起时，获得遗物<span style="color:#d4a017;font-weight:600">[逝者巨樽](/relics/event/deceased_giant_jar.md)</span>。每场战斗结束后，获得<span style="color:#3aa675;font-weight:600">1</span>张随机非 Seer 卡牌加入牌组。

- **遗物联动**：拾起时附带获得[逝者巨樽](/relics/event/deceased_giant_jar.md)——召唤流引擎遗物，等于一次入手两个遗物。
- **卡牌筛选**：从所有原版（非 Seer）卡牌中随机抽 1 张加入牌组，已排除[诅咒牌](/mechanics/curse-system.md)与状态牌（只可能是攻击/技能/能力牌）。
- **⚠️ 本地化与源码补充**：本地化仅说"随机非 Seer 卡牌"，实际还排除了诅咒牌和状态牌。

## 风味文字

<span style="color:#d44;font-weight:600">不朽。</span>

## 小贴士

- **一买一送的打包交易**：入手即附赠[逝者巨樽](/relics/event/deceased_giant_jar.md)——它每回合按 X 值[召唤](/mechanics/summon.md)、击杀敌人永久涨 X（跨战斗保留），是召唤流的核心引擎；但代价是每场战斗开始移除你的现有属性转为混沌属性，且每次吃未被格挡的攻击伤害 X-1，**X 跌破 0 直接死亡**。签下这份契约前先掂量自己的格挡能力。
- **每场战斗白送 1 张原版卡**：战斗结束随机入手 1 张非 Seer 卡（诅咒/状态已排除，只出攻击/技能/能力），一整局爬塔几十场战斗累积下来是几十张免费卡——抽到原版稀有牌直接血赚。
- **⚠️ 牌组膨胀是双刃剑**：每场 +1 张的增速会让牌组迅速变大——核心牌上手率被稀释，精简流派的玩家会觉得是持续放毒；但走大牌组路线反而是燃料：[正义大裁决](/cards/character/justice_judgment.md)的能耗随局外牌组张数下降（60 张直接 0 费），这张遗物等于它的专属充电器。
- **原版卡与 Seer 体系脱节**：送的原版卡没有 PP/元素/异常体系配合，大部分只能当白板用——及时通过休息点删牌或商店清理，只留下真正能打的。
- **随机结果多端一致**：抽选走同步随机源，多人模式下两端送的卡完全相同。

## 源码

- `SeerNeowDeceasedLegacy.cs`
