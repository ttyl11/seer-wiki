# 邪龙勿用

<img src="/images/cards/evil_dragon_unused.png" alt="邪龙勿用" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 7
- **能量消耗**: 0
- **类型**: 攻击
- **稀有度**: 稀有
- **目标**: 敌方单体
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 伤害 | 1 | 1 |
| 每打出伤害增加 | 2 | 3 |
| PP | 7 | 7 |
| 最大PP | 7 | 7 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">7</span>/<span style="color:#3aa675;font-weight:600">7</span> 造成<span style="color:#3aa675;font-weight:600">1</span>点伤害。本场战斗中每打出一次此牌，伤害+<span style="color:#3aa675;font-weight:600">2</span>。打出其他牌时回到[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">7</span>/<span style="color:#3aa675;font-weight:600">7</span> 造成<span style="color:#3aa675;font-weight:600">1</span>点伤害。本场战斗中每打出一次此牌，伤害+<span style="color:#3aa675;font-weight:600">3</span>。打出其他牌时回到[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)。

## 小贴士

- **核心定位**：0 费递增攻击牌，越打越强。打出其他牌时回到手牌，可以反复使用。是 mod 中少有的"0 费主力输出"卡——配合递增机制和回手牌特性，可以在一回合内多次打出，伤害滚雪球。稀有稀有度合理，0 费递增输出本就稀缺。
- **伤害递增机制（核心价值）**：实际伤害 = 基础伤害 + 累计打出次数 × 每打出伤害增加。累计打出次数本场战斗保存，战斗胜利后重置。递进示例：
 - 未升级：第 1 次 <span style="color:#3aa675;font-weight:600">1</span>，第 2 次 <span style="color:#3aa675;font-weight:600">3</span>，第 3 次 <span style="color:#3aa675;font-weight:600">5</span>，第 4 次 <span style="color:#3aa675;font-weight:600">7</span>...
 - 升级后：第 1 次 <span style="color:#3aa675;font-weight:600">1</span>，第 2 次 <span style="color:#3aa675;font-weight:600">4</span>，第 3 次 <span style="color:#3aa675;font-weight:600">7</span>，第 4 次 <span style="color:#3aa675;font-weight:600">10</span>...
 
 越往后打伤害越高，配合回手牌机制可以一回合多次输出。
- **回手牌机制（反复使用）**：打出其他牌时，若此牌不在[手牌](/mechanics/hand.md)中，则移回手牌底部。这意味着**每打出一张其他牌，此牌就回手一次**——可以在一回合内交替打出此牌和其他牌，实现多次递增输出。
- **0 费优势**：0 费打出不消耗能量，配合回手牌机制，一回合内打出 5-6 次不是难事，递增后伤害可观。
- **配合建议**：
 - **连击流**：配合低费牌（如 0 费或 1 费牌）可以交替打出，触发回手牌机制，一回合多次递增。
 - 配合[力量](/powers/strength_power.md)等增伤能力可以提升每次伤害——递增基数 + 力量加成 = 滚雪球。
 - 在长线战斗中（如 Boss 战），递增次数多，伤害可观。短线战斗来不及滚雪球。
- **升级的关键性**：每打出伤害增加从 <span style="color:#3aa675;font-weight:600">2</span> 增至 <span style="color:#3aa675;font-weight:600">3</span>（+1），基础伤害不变。升级提升显著——打 5 次后，未升级累计伤害 1+3+5+7+9=25，升级后 1+4+7+10+13=35（+40%）。升级优先级高，是体系成型的关键节点。
- **性价比**：0 费递增攻击 + 回手牌机制，可在一回合内多次输出且递增。稀有稀有度合理——0 费递增输出本就稀缺。适合连击流和长线体系，短线战斗可能来不及滚雪球。

## 相关机制

- [手牌](/mechanics/hand.md)（打出其他牌时回到手牌）

## 源码

- `SeerEvilDragonUnused.cs`
