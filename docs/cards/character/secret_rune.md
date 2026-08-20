# 秘纹护体

<img src="/images/cards/secret_rune.png" alt="秘纹护体" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 5
- **能量消耗**: 1
- **类型**: 技能
- **稀有度**: 罕见
- **目标**: 自身
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 基础恢复 | 1 | 1 |
| 每次累加 | 2 | 5 |
| 烧伤回合 | 2 | 2 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 恢复<span style="color:#3aa675;font-weight:600">1</span>点生命。每次使用多恢复<span style="color:#3aa675;font-weight:600">2</span>点。生成一个[<span style="color:#d4a017;font-weight:600">火山充能球</span>](/orbs/volcano_orb.md)，所有敌人[<span style="color:#d44;font-weight:600">烧伤</span>](/powers/burn_power.md)<span style="color:#3aa675;font-weight:600">2</span>回合。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 恢复<span style="color:#3aa675;font-weight:600">1</span>点生命。每次使用多恢复<span style="color:#3aa675;font-weight:600">5</span>点。生成一个[<span style="color:#d4a017;font-weight:600">火山充能球</span>](/orbs/volcano_orb.md)，所有敌人[<span style="color:#d44;font-weight:600">烧伤</span>](/powers/burn_power.md)<span style="color:#3aa675;font-weight:600">2</span>回合。

## 小贴士

- **三合一复利型投资牌**：单次打出同时做三件事——回血、生成一个[火山充能球](/orbs/volcano_orb.md)（被动施加烧伤和焚烬）、给所有敌人挂 2 回合[烧伤](/powers/burn_power.md)。1 费换三件事，本身就是合格收益，但真正的强度在复利机制上。
- **复利核心：每打一次，所有同名牌永久变强**：打出后，本场战斗里你**手牌和牌堆中所有秘纹护体**的"基础恢复"都会**永久** +2（升级后 +5）。所以第二次打出恢复 1+2=3 点，第三次 1+2+2=5 点，依次类推。这张牌越打越香——单卡多次打出后恢复量线性叠加（1→3→5→7→9...），可成长为主治疗源。
- **升级只加速复利，不加初始值**：升级让每次累加量从 +2 跳到 +5（增幅 150%），但**基础恢复仍为 1**——所以升级的价值是"加速膨胀"而非"提升起点"。这意味着升级后必须连续打出多次才能拉开差距，单次打出和未升级几乎无差。
- **烧伤是群体效果——减攻是固定值**：对所有敌人挂 <span style="color:#3aa675;font-weight:600">2</span> 层[烧伤](/powers/burn_power.md)：敌方回合开始时受到 <span style="color:#3aa675;font-weight:600">3</span> 点不可格挡伤害并减 <span style="color:#3aa675;font-weight:600">1</span> 层，同时攻击伤害固定 <span style="color:#3aa675;font-weight:600">-1</span>（不随层数增长，层数只决定持续回合数）。配合火山充能球的被动可形成持续火焰压制。
- **降级反而白赚一笔——历史累加翻倍补偿**：若被降级（降级商店等机制），除已累加的恢复量全额保留外，还会把历史累加总量**一次性再加一遍**（基础恢复 + 历史累加），仅后续每次累加回落为 <span style="color:#3aa675;font-weight:600">+2</span>——降级不仅不打水漂，反而瞬间变强一截。
- **性价比**：<span style="color:#3aa675;font-weight:600">1</span> 费合理——三合一效果 + 复利成长性，前期投资后期回报。

## 相关能力

- [烧伤](/powers/burn_power.md)（群体施加的持续伤害状态）

## 相关机制

- [火山充能球](/orbs/volcano_orb.md)（生成一个充能球，被动施加烧伤和焚烬）

## 源码

- `SeerSecretRune.cs`
