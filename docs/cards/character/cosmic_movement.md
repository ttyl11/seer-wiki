# 宇宙胎动

<img src="/images/cards/cosmic_movement.png" alt="宇宙胎动" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

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
| 生命百分比 | 6 | 6 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: 5/5 <span style="color:#d4a017;font-weight:600">全属性</span><span style="color:#3aa675;font-weight:600">+1</span>。消耗自身最大生命值<span style="color:#3aa675;font-weight:600">6</span>%的生命，获得等量的[<span style="color:#d4a017;font-weight:600">活力</span>](/powers/vigor_power.md)与[<span style="color:#d4a017;font-weight:600">敏捷</span>](/powers/dexterity_power.md)。

## 升级后

耗能降至<span style="color:#3aa675;font-weight:600">0</span>。PP: 5/5 <span style="color:#d4a017;font-weight:600">全属性</span><span style="color:#3aa675;font-weight:600">+1</span>。消耗自身最大生命值<span style="color:#3aa675;font-weight:600">6</span>%的生命，获得等量的[<span style="color:#d4a017;font-weight:600">活力</span>](/powers/vigor_power.md)与[<span style="color:#d4a017;font-weight:600">敏捷</span>](/powers/dexterity_power.md)。

## 小贴士

- **"+1 全属性"价值并不均衡**：全属性 +1 意味着[力量](/powers/strength_power.md)、[命中](/powers/accuracy_power.md)、[防御](/powers/defense_power.md)、[速度](/powers/speed_power.md)各 +1 层，但四项的实际收益差距很大。+1 力量让每张攻击牌 +1 伤害，+1 防御让受到的攻击伤害 -1（仅攻击伤害，非攻击伤害不受影响）——这两项是即时收益。但 +1 命中**对自身无直接效果**，只用于抵消将来可能受到的负命中；+1 速度也不增加抽牌，需累积到 2 层才 +1 抽。所以这张牌的"+1 全属性"更像"力量+防御即时强化 + 命中速度备用储备"，不要指望命中和速度的 +1 立刻产生收益。
- **自伤换增益**：消耗最大生命 6% 的生命，获得等量[活力](/powers/vigor_power.md)与[敏捷](/powers/dexterity_power.md)。最大生命 100 时消耗 6 点 → 获得 6 层活力 + 6 层敏捷。最大生命越高，获得的增益越多——这张牌的收益随游戏进程递增。
- **活力的爆发性**：活力是下次攻击牌伤害加成，**攻击后层数清零**。6 层活力 = 下次攻击 +6 伤害。配合高伤单体攻击牌（如 PP 7-10 的攻击牌），一张攻击牌就能多打 6+ 伤害。
- **敏捷的持久性**：敏捷每层 +1 点[格挡](/mechanics/block.md)获取，**永久持续**。6 层敏捷 = 之后每张格挡牌多 6 点格挡。相比活力的爆发性，敏捷是长线收益，在多回合战斗中价值更高。
- **自伤不受加成**：自伤为不可格挡的非攻击伤害（最大生命 × 6%，整数截断），不受力量、易伤等加成影响。但会触发"受伤"相关效果（如某些遗物的受伤触发）。
- **配合建议**：适合高最大生命的体系——最大生命越高，自伤换来的活力/敏捷越多。配合回血手段（如[饮血](/mechanics/keywords.md)关键词的牌）可以抵消自伤。活力配合高伤攻击牌爆发，敏捷配合格挡牌堆防御。
- **升级的价值**：耗能从 1 降至 0。0 费全属性 +1 + 活力 + 敏捷，等于每回合免费强化一次面板。升级后质变——可以从每回合打出一张变成"无脑打出"的常驻增益牌。升级优先级极高。
- **性价比**：升级前 1 费换全属性 +1 + 双增益已经超值，升级后 0 费更是质变。自伤 6% 在前期影响不大（最大生命 75 时仅 4 点），后期最大生命提升后收益更大。

## 相关能力

- [力量](/powers/strength_power.md)（全属性之一，原版）
- [命中](/powers/accuracy_power.md)（全属性之一，mod）
- [防御](/powers/defense_power.md)（全属性之一，mod）
- [速度](/powers/speed_power.md)（全属性之一，mod）
- [活力](/powers/vigor_power.md)（获得等量活力）
- [敏捷](/powers/dexterity_power.md)（获得等量敏捷）

## 源码

- `SeerCosmicMovement.cs`
