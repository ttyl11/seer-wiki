# 权杖

<img src="/images/cards/scepter.png" alt="权杖" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 无色牌
- **能量消耗**: 1
- **类型**: 技能
- **稀有度**: 罕见
- **目标**: 敌方单体
- **可升级**: 否

### 数值参数

| 参数 | 数值 |
|---|---|
| 伤害倍率 | 140 |

## 描述

对目标附加自己已损失生命值<span style="color:#3aa675;font-weight:600">140</span>%的[<span style="color:#d4a017;font-weight:600">固定伤害</span>](/powers/fixed_damage_power.md)。

## 升级后

对目标附加自己已损失生命值<span style="color:#3aa675;font-weight:600">140</span>%的[<span style="color:#d4a017;font-weight:600">固定伤害</span>](/powers/fixed_damage_power.md)。

## 小贴士

- **🔑 卖血量的斩杀重炮**：伤害 = **已损生命 × <span style="color:#3aa675;font-weight:600">140</span>%**——你每掉 1 点血就兑换 <span style="color:#3aa675;font-weight:600">1.4</span> 点输出。已损 50 血打出 = <span style="color:#3aa675;font-weight:600">70</span> 层[固定伤害](/powers/fixed_damage_power.md)；大血牛构筑（80+ 最大生命）残血时一发 <span style="color:#3aa675;font-weight:600">100+</span> 层——倍率超过 100%，损失是**翻倍变现**的。
- **[固定伤害](/powers/fixed_damage_power.md)无视一切防御**：固伤不走攻击结算——[格挡](/mechanics/block.md)挡不住、[易伤](/powers/vulnerable_power.md)/增伤/减伤一概不参与，对堆甲高防的精英/Boss 是稳定穿透的斩杀手段。
- **[保留](/mechanics/retain.md)是战术核心——捏到血线拉低再打**：回合结束不弃牌，伤害在**打出瞬间**按当时已损生命快照——开局捏在手里，等你被揍/自伤到低血线再一发入魂。满血打出 = 零伤害白费，切忌随手甩。
- **自伤体系的天然出口**：主动扣血换增益的卡（卖血/献祭类）攒下的已损生命，全部通过它变现成固伤——卖血流拿它当终结技。
- **敌方单体指向**：只能打一个目标——留给最难啃的高价值敌人；[固定伤害](/powers/fixed_damage_power.md)按层数挂在目标身上结算，多端同步无随机。
- **不可升级**：数值固定 140%，价值完全由你的血线决定——构筑里堆最大生命（提高可损失基数）比升这张牌更重要。

## 源码

- `SeerScepter.cs`
