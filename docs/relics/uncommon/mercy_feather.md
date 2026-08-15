# 怜羽

<img src="/images/relics/mercy_feather.png" alt="怜羽" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 罕见

### 数值参数

| 参数 | 数值 |
|---|---|
| BlockPercentOfMissingHp（已损失生命转格挡百分比） | 10 |

## 描述

每打出1张牌，获得等同于已损失生命值<span style="color:#3aa675;font-weight:600">10</span>%的<span style="color:#d4a017;font-weight:600">[格挡](/mechanics/block.md)</span>。

回合结束时，若自身<span style="color:#d4a017;font-weight:600">[格挡](/mechanics/block.md)</span>大于当前生命，消耗所有<span style="color:#d4a017;font-weight:600">[格挡](/mechanics/block.md)</span>对所有敌人造成等量<span style="color:#9b59b6;font-weight:600">[固定伤害](/powers/fixed_damage_power.md)</span>。

- **出牌获取格挡**：每打出 1 张牌获得已损失生命 10% 的格挡（向下取整），已损失生命越多格挡越高。
- **格挡爆裂**：回合结束时若格挡大于当前生命，消耗所有格挡对所有敌人造成等量[固定伤害](/powers/fixed_damage_power.md)。

## 风味文字

<span style="color:#d44;font-weight:600">怜羽。</span>

## 小贴士

- **出牌叠格挡，血越低叠越快**：每打出 1 张牌获得已损失生命 10% 的格挡。100 最大生命、当前 50 血时每张牌给 5 格挡；当前 10 血时每张牌给 9 格挡。血量越低，格挡叠得越快。
- **格挡爆裂条件**：回合结束时若格挡大于当前生命，消耗所有格挡对所有敌人造成等量[固定伤害](/powers/fixed_damage_power.md)。需要"格挡 > 血量"才触发——低血高格挡时最容易满足。
- **固定伤害穿盾延迟结算**：爆裂造成的是固定伤害（不可格挡、延迟到敌人下回合开始结算、可被[免疫固定伤害](/powers/fixed_damage_power.md)能力抵挡）。能穿盾但非立即结算，敌人有免疫固定伤害能力时会被克制。
- **低血爆发流核心**：故意压低血量，配合多打牌叠格挡，让格挡超过血量触发爆裂，造成大量固定伤害。血量越低，格挡叠得越快，爆裂伤害越高——形成"越残血越强"的正反馈。
- **爆裂后失去防御**：爆裂消耗所有格挡，下回合没有格挡保护，且自身血量低，风险较高。需要权衡爆裂收益与生存风险，或配合回血手段在爆裂后恢复。
- **配合"魔狮迪露"**：魔狮迪露将最大生命放大 10 倍，已损失生命也随之放大——怜羽的格挡获取量暴增，更容易满足"格挡 > 血量"的爆裂条件。

## 源码

- `SeerMercyFeather.cs`
