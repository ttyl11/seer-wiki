# 元素

<img src="/images/cards/element.png" alt="元素" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 5
- **能量消耗**: 1
- **类型**: 攻击
- **稀有度**: 基础
- **目标**: 敌方单体
- **可升级**: 是（1 级）
- **对应先古牌**: [神灵之触](/cards/ancient/divine_touch.md)（由[起源流转](/relics/starter/origin_shift.md)转化）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 伤害 | 3 | 3 |
| 固定伤害 | 6 | 10 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: 5/5 造成<span style="color:#3aa675;font-weight:600">3</span>点伤害。附加<span style="color:#3aa675;font-weight:600">6</span>点[<span style="color:#d4a017;font-weight:600">固定伤害</span>](/powers/fixed_damage_power.md)。

## 升级后

PP: 5/5 造成<span style="color:#3aa675;font-weight:600">3</span>点伤害。附加<span style="color:#3aa675;font-weight:600">10</span>点[<span style="color:#d4a017;font-weight:600">固定伤害</span>](/powers/fixed_damage_power.md)。

## 小贴士

- **核心定位**：1 费基础攻击牌，谱尼初始卡牌之一。3 点攻击伤害 + 6 点固定伤害，总计 9 点伤害（升级后 13 点）。固定伤害绕过[格挡](/mechanics/block.md)，是 mod 中少有的"混合伤害"基础牌——即使目标高格挡，固定伤害也能稳定输出。
- **固定伤害机制（绕格挡）**：6 点固定伤害以减益形式施加（[固定伤害](/powers/fixed_damage_power.md)），**目标自己的回合开始时**一次性掉血并移除，绕过[格挡](/mechanics/block.md)。可被[免疫固定伤害](/powers/immune_fixed_damage_power.md)类能力阻挡（免疫时层数直接清除、不掉血），目标持有[意志](/powers/resolve_power.md)时自身不掉血、改为对它的所有对手（我方全体）各造成等量固定伤害；同目标重复施加会**叠层**，目标回合开始按总层数一次结算——PP 5 意味着单场最多打 5 次（详见[PP系统](/mechanics/pp-system.md)），全打可叠 30 层固伤（升级后 50 层），配合"拖到敌人回合前多打几次"收益最高。血条上会显示固伤预扣段。
- **混合伤害优势**：3 点攻击伤害（可被格挡）+ 6 点固定伤害（绕过格挡）。即使目标有高格挡，固定伤害也能稳定输出 6 点。这种"双轨伤害"让基础牌在面对高防敌人时仍有价值。
- **配合建议**：
 - 配合增伤能力（如[力量](/powers/strength_power.md)）可以提升攻击伤害部分——3 点伤害部分吃力量加成，固定伤害部分不受力量影响。
 - 作为基础牌，是早期输出的主力，配合其它固定伤害卡牌形成"绕格挡"体系。
- **升级的关键性**：固定伤害从 <span style="color:#3aa675;font-weight:600">6</span> 提升至 <span style="color:#3aa675;font-weight:600">10</span>（+4）。总伤害从 9 提升至 13（+4）。升级提升中等——固定伤害提升 67%，但基础牌升级优先级通常较低（有更强牌需要升级时）。
- **性价比**：1 费 9 点伤害（升级后 13 点），其中 6 点绕过格挡。基础牌性价比合理——作为初始卡，1 费 9 点伤害已经不错。适合早期过渡和固定伤害体系，后期可被更强攻击牌替代。

## 相关能力

- [固定伤害](/powers/fixed_damage_power.md)（对目标施加固定伤害）

## 源码

- `SeerElement.cs`
