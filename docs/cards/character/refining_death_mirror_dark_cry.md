# 炼·死镜冥啼

<img src="/images/cards/refining_death_mirror_dark_cry.png" alt="炼·死镜冥啼" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 3
- **能量消耗**: 9
- **类型**: 攻击
- **稀有度**: 稀有
- **目标**: 所有敌方
- **关键词**: [炼狱](/mechanics/purgatory.md)
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 伤害 | 14 | 14 |
| 生命流失每层 | 3 | 3 |
| PP | 3 | 3 |
| 最大PP | 3 | 3 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">3</span>/<span style="color:#3aa675;font-weight:600">3</span> 对所有敌人造成<span style="color:#3aa675;font-weight:600">14</span>点伤害。场上每有<span style="color:#3aa675;font-weight:600">1</span>种[<span style="color:#d44;font-weight:600">异常状态</span>](/mechanics/abnormal-status.md)耗能<span style="color:#3aa675;font-weight:600">-1</span>。转移对手[<span style="color:#d44;font-weight:600">异常状态</span>](/mechanics/abnormal-status.md)到自身，每层使所有敌人流失<span style="color:#3aa675;font-weight:600">3</span>点生命。

## 升级后

[<span style="color:#d4a017;font-weight:600">奇巧</span>](/mechanics/sly.md)。PP: <span style="color:#3aa675;font-weight:600">3</span>/<span style="color:#3aa675;font-weight:600">3</span> 对所有敌人造成<span style="color:#3aa675;font-weight:600">14</span>点伤害。场上每有<span style="color:#3aa675;font-weight:600">1</span>种[<span style="color:#d44;font-weight:600">异常状态</span>](/mechanics/abnormal-status.md)耗能<span style="color:#3aa675;font-weight:600">-1</span>。转移对手[<span style="color:#d44;font-weight:600">异常状态</span>](/mechanics/abnormal-status.md)到自身，每层使所有敌人流失<span style="color:#3aa675;font-weight:600">3</span>点生命。

## 结算顺序

打出时按以下顺序结算（[炼狱](/mechanics/purgatory.md)关键词先于牌效果触发）：

1. **炼狱**：对自己施加随机 <span style="color:#3aa675;font-weight:600">1</span> 种[异常状态](/mechanics/abnormal-status.md)（共 25 种）<span style="color:#3aa675;font-weight:600">5</span> 层
2. **全体伤害**：对所有敌人造成 <span style="color:#3aa675;font-weight:600">14</span> 点攻击伤害，被炼狱翻倍为 <span style="color:#3aa675;font-weight:600">28</span> 点
3. **转移**：所有敌人身上的异常状态（层数取绝对值）全部移除并施加到自身
4. **生命流失**：统计自身所有异常状态总层数（炼狱 <span style="color:#3aa675;font-weight:600">5</span> 层 + 转移层数 + 原有层数），每层使所有敌人流失 <span style="color:#3aa675;font-weight:600">3</span> 点不可格挡的生命

## 小贴士

- **炼狱先行——保底 5 层异常垫底**：打出时炼狱先给自己 <span style="color:#3aa675;font-weight:600">5</span> 层随机异常，再结算牌效果。因此哪怕场上没有任何异常，这张牌也有 <span style="color:#3aa675;font-weight:600">5</span> × <span style="color:#3aa675;font-weight:600">3</span> = <span style="color:#3aa675;font-weight:600">15</span> 点全体生命流失保底，加上 <span style="color:#3aa675;font-weight:600">28</span> 点攻击伤害，不会空转。
- **9 费但异常减费——全场去重计种类**：场上（己方 + 敌方所有生物）每有 <span style="color:#3aa675;font-weight:600">1</span> 种异常状态（按种类去重，不看层数），耗能 <span style="color:#3aa675;font-weight:600">-1</span>，最低 <span style="color:#3aa675;font-weight:600">0</span>。异常满天飞的战斗中几乎免费；转移后异常从敌人挪到自身，种类数不变，PP 的第二三次打出依旧享受减费。
- **转移是把双刃剑——会给敌人"解控"**：异常状态对敌人是[负面状态](/mechanics/abnormal-status.md)。把[睡眠](/powers/sleep_power.md)、[冰封](/powers/freeze_power.md)、[瘫痪](/powers/paralysis_power.md)这类控制异常转走，等于解除对敌人的控制——敌人提前恢复行动。转移前想清楚：这 <span style="color:#3aa675;font-weight:600">3</span> 点/层的流失收益，值不值得放敌人自由行动。
- **转移的异常会在自己身上持续生效**：转来的[烧伤](/powers/burn_power.md)、[中毒](/powers/poison_power.md)、[流血](/powers/bleed_power.md)等持续伤害型异常会照常在自己回合结算——层数越多，流失弹药越足，自伤也越痛。这是"死镜"的镜像代价，血量不健康时慎打。
- **流失吃总层数——敌人越脏伤害越爆炸**：流失基数 = 炼狱 <span style="color:#3aa675;font-weight:600">5</span> 层 + 敌人转移来的全部层数 + 自身原有异常层数。敌人挂满异常时打出，一次性收割：例如敌人共 <span style="color:#3aa675;font-weight:600">40</span> 层异常，流失 = (<span style="color:#3aa675;font-weight:600">40</span>+<span style="color:#3aa675;font-weight:600">5</span>) × <span style="color:#3aa675;font-weight:600">3</span> = <span style="color:#3aa675;font-weight:600">135</span> 点全体不可格挡伤害。
- **翻倍只作用于攻击伤害**：炼狱的 ×2 只翻倍 <span style="color:#3aa675;font-weight:600">14</span> 点攻击伤害（→<span style="color:#3aa675;font-weight:600">28</span>），后续的生命流失不受翻倍影响。
- **PP3 连打越打越痛**：第一次转移后异常全在自己身上，第二次打出的流失基数 = 自身存量 + 新炼狱 <span style="color:#3aa675;font-weight:600">5</span> 层，通常比第一次更高（但敌人已无异常可转）。适合作为终结手段连收。
- **升级加奇巧**：升级后获得[奇巧](/mechanics/sly.md)关键词，增加出牌灵活性，数值不变。
- **性价比**：异常多的战斗中 <span style="color:#3aa675;font-weight:600">9</span> 费大减免，换全体 <span style="color:#3aa675;font-weight:600">28</span> 伤 + 大额不可格挡流失 + 清敌人异常；代价是自吞异常与可能的解控，适合异常体系构筑。

## 相关机制

- [异常状态](/mechanics/abnormal-status.md)：耗能减免依据、转移对象、生命流失计数依据
- [炼狱](/mechanics/purgatory.md)：伤害翻倍 + 自施 5 层随机异常
- [奇巧](/mechanics/sly.md)：升级后获得的关键词
- [格挡](/mechanics/block.md)：生命流失不可格挡

## 源码

- `SeerRefiningDeathMirrorDarkCry.cs`
- `SeerKeywordEffectManager.cs`（炼狱：`ApplyPurgatory`、`ModifyDamageMultiplicative`）
