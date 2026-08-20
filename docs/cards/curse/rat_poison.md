# 老鼠药

<img src="/images/cards/rat_poison.png" alt="老鼠药" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 诅咒牌
- **能量消耗**: 3
- **类型**: 诅咒
- **稀有度**: 诅咒
- **关键词**: [固有](/mechanics/innate.md)、[保留](/mechanics/retain.md)、[永恒](/mechanics/eternal.md)、[消耗](/mechanics/exhaust.md)
- **可升级**: 否

### 数值参数

| 参数 | 数值 |
|---|---|
| 每次使用药水失去最大生命 | 4 |

## 描述

此牌在[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)中时，使用药水失去<span style="color:#3aa675;font-weight:600">4</span>点最大生命值。

## 小贴士

- **固有+保留=全程贴脸**：老鼠药带[固有](/mechanics/innate.md)（每场战斗开局必在手牌）和[保留](/mechanics/retain.md)（回合结束不弃牌）——从第一回合起就常驻手里，药水惩罚整场战斗随时待命，还永久占掉一个手牌位。
- **失去的是最大生命上限，不是普通掉血**：每喝一瓶药水，最大生命 −<span style="color:#3aa675;font-weight:600">4</span>；若当前生命高于新上限，超出部分作为不可[格挡](/mechanics/block.md)的损失直接扣除，极限情况下会被压死。喝药越多血条越矮，且本场战斗内无法找回——复活、回血效果都只能回到这个被削过的上限。
- **这张牌可以打出**：老鼠药没有[不可打出](/mechanics/unplayable.md)关键词，花 <span style="color:#3aa675;font-weight:600">3</span> 费打出即可因[消耗](/mechanics/exhaust.md)离场，一次性解除全部惩罚（打出本身无额外效果）。对依赖药水的战斗，3 费买断通常比每瓶 −4 上限划算。
- **永恒=每场都要面对**：带[永恒](/mechanics/eternal.md)关键词，局外无法删牌、变牌处理。但局内打出的那次消耗照常生效——每场战斗都有一条"3 费买断"的出路。
- **处理优先级**：这场战斗不打算喝药 → 留着无所谓，仅占手牌位；要喝 ≥2 瓶 → 建议尽早 3 费打出（两瓶就亏 8 点上限，比 3 费贵）；有其它消耗手段移出手牌同样有效。
- **与药水流的冲突**：药水体系中靠[药水](/potions/index.md)救急的卡组拿到老鼠药最伤，评估时把"每瓶药水 −4 上限"计入成本。

## 相关机制

- [药水图鉴](/potions/index.md)（触发媒介）
- [固有](/mechanics/innate.md) / [保留](/mechanics/retain.md)（开局必在、常驻手牌）
- [永恒](/mechanics/eternal.md)（局外不可移除）
- [消耗](/mechanics/exhaust.md)（打出后离场）

## 源码

- `SeerRatPoison.cs`
