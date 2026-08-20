# 蛟龙出水

<img src="/images/cards/flood_dragon_emerging.png" alt="蛟龙出水" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 5
- **能量消耗**: 4
- **类型**: 技能
- **稀有度**: 普通
- **目标**: 自身
- **可升级**: 是（1 级）
- **关键词**: [奇巧](/mechanics/sly.md)，升级后获得 [保留](/mechanics/retain.md)

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 格挡 | 8 | 8 |
| 易伤 | 2层 | 2层 |
| 虚弱 | 2层 | 2层 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 获得<span style="color:#3aa675;font-weight:600">8</span>点<span style="color:#d4a017;font-weight:600">格挡</span>。为所有敌人附加<span style="color:#3aa675;font-weight:600">2</span>层<span style="color:#d4a017;font-weight:600">易伤</span>和<span style="color:#3aa675;font-weight:600">2</span>层<span style="color:#d4a017;font-weight:600">虚弱</span>。

## 升级后

[<span style="color:#d4a017;font-weight:600">保留</span>](/mechanics/retain.md)。PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 获得<span style="color:#3aa675;font-weight:600">8</span>点<span style="color:#d4a017;font-weight:600">格挡</span>。为所有敌人附加<span style="color:#3aa675;font-weight:600">2</span>层<span style="color:#d4a017;font-weight:600">易伤</span>和<span style="color:#3aa675;font-weight:600">2</span>层<span style="color:#d4a017;font-weight:600">虚弱</span>。

## 小贴士

- **三效合一技能牌**：4 费获得 8 [格挡](/mechanics/block.md) + 全体 2 层[易伤](/powers/vulnerable_power.md) + 全体 2 层[虚弱](/powers/weak_power.md)，攻防一体的群控技能。
- **奇巧是这张牌的灵魂**：4 费很贵，但带[奇巧](/mechanics/sly.md)——被任何弃牌效果弃置时会**免费自动打出**。手里有弃牌类卡牌时，这张 4 费大招等于 0 费结算，弃牌选择界面上它还会金光提示"可白嫖"。注意结算顺序：它先进入弃牌堆、再自动打出（照样算一次"弃牌"，配合弃牌触发类效果两不误）。
- **回合结束不触发奇巧**：只有牌的主动弃牌效果才触发；回合结束的常规清手牌不触发（走的是另一条结算路径）。所以别指望"过回合白打"——要么主动弃它，要么老实付 4 费。
- **易伤与虚弱详解**：易伤使敌人受到的攻击伤害 ×1.5，虚弱使敌人造成的攻击伤害 ×0.75，都只影响攻击伤害（DoT/固伤不受影响）。2 层 = 持续 2 次自身回合结束（Counter 型每回合 -1 层）。
- **升级后攻守兼备**：添加[保留](/mechanics/retain.md)后回合结束不再被清掉，可以一直攥到有弃牌效果或能量充裕的回合——奇巧（被弃白嫖）与保留（没弃就留着）形成完美互补：有弃牌效果时弃它白打，没有时它也不丢。
- **配合建议**：配合多段攻击牌收益最大化——全体易伤后多段攻击每段都 ×1.5；弃牌抽牌类卡牌是它的最佳拍档（弃出=白嫖+腾手牌）。格挡保底让你输出的同时不裸奔。
- **性价比**：4 费直接打偏贵，但奇巧把它改造成"0 费爆发选项"；对标原版群体易伤+虚弱的束缚类药水还附送 8 格挡，拿到弃牌引擎后性价比极高。

## 相关能力

- [易伤](/powers/vulnerable_power.md)（受到攻击伤害 +50%）
- [虚弱](/powers/weak_power.md)（造成攻击伤害 -25%）

## 相关机制

- [奇巧](/mechanics/sly.md)（基础关键词，被丢弃时免费打出）
- [保留](/mechanics/retain.md)（升级后获得）
- [格挡](/mechanics/block.md)（获得 8 点格挡）

## 源码

- `SeerFloodDragonEmerging.cs`
