# 昊海垂天

<img src="/images/cards/vast_sea_sky.png" alt="昊海垂天" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 5
- **能量消耗**: 5
- **类型**: 技能
- **稀有度**: 罕见
- **目标**: 自身
- **关键词**: [奇巧](/mechanics/sly.md)
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 充能球数 | 3 | 4 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> [<span style="color:#d4a017;font-weight:600">生成</span>](/mechanics/channeling.md)<span style="color:#3aa675;font-weight:600">3</span>个[<span style="color:#d4a017;font-weight:600">海洋</span>](/orbs/ocean_orb.md)<span style="color:#d4a017;font-weight:600">充能球</span>。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> [<span style="color:#d4a017;font-weight:600">生成</span>](/mechanics/channeling.md)<span style="color:#3aa675;font-weight:600">4</span>个[<span style="color:#d4a017;font-weight:600">海洋</span>](/orbs/ocean_orb.md)<span style="color:#d4a017;font-weight:600">充能球</span>。

## 小贴士

- **奇巧可白嫖这张 5 费大招**：这张牌带[奇巧](/mechanics/sly.md)关键词——若回合结束前从[手牌](/mechanics/hand.md)被弃置则免费打出。5 费的能耗很重，但靠奇巧触发就能绕过能耗，是典型的"留手里等弃牌"型大件。
- **海洋球的被动与激发**：[海洋](/orbs/ocean_orb.md)充能球回合结束时对随机敌人挂 <span style="color:#3aa675;font-weight:600">3</span> 层[冻伤](/powers/frostbite_power.md)（回合开始掉血并减层），被[激发](/mechanics/evoke.md)时对所有敌人挂 <span style="color:#3aa675;font-weight:600">3</span> 层[冰封](/powers/freeze_power.md)（降攻击伤害，回合末转冻伤）。被动单体、激发群体，两种冰系减益互相衔接。
- **栏位满时会连环激发**：[充能球](/mechanics/orb.md)栏位有限，栏位满时新生成会自动激发最早的球。所以打出前若栏位已满，铺 3-4 个球会触发连环激发，瞬间全屏冰封——可以主动利用这点打群体冰封爆发。
- **受集中加成**：海洋球的冻伤/冰封层数受[集中](/powers/focus_power.md)影响，集中越高冰系压制越强。配集中流时这张牌的收益会被放大。
- **升级加一球**：生成数 3→4，多一个被动冻伤源和多一次激发冰封潜力。栏位充足时是纯增量，栏位紧张时则会多触发一次激发。
- **性价比**：5 费很贵，但一次性铺 3-4 个海洋球建立冰系场面的价值配得上。靠奇巧白嫖时性价比爆炸，硬打则要确保场面收益足够。

## 相关充能球

- [海洋](/orbs/ocean_orb.md)：被动施加冻伤，激发施加冰封

## 相关机制

- [生成](/mechanics/channeling.md)（生成充能球）
- [充能球](/mechanics/orb.md)（充能球系统）
- [激发](/mechanics/evoke.md)（栏位满或主动激发时触发）
- [奇巧](/mechanics/sly.md)（被弃置时免费打出）

## 源码

- `SeerVastSeaSky.cs`
