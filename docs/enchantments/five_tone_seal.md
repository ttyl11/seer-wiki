# 卩

<img src="/images/enchantments/seer_five_tone_seal.png" alt="卩" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 五音附魔
- **可附魔牌类型**: 攻击 / 技能 / 能力
- **显示数量**: 否

## 描述

打出后，若以此牌击败对手，自身最大生命 -<span style="color:#3aa675;font-weight:600">20</span>，造成的攻击伤害永久 +<span style="color:#3aa675;font-weight:600">10%</span>，受到的伤害永久 -<span style="color:#3aa675;font-weight:600">5%</span>（可叠加）。

> 注：本地化描述写作"受伤 -10%"，但实际效果为 -5%。以实际效果为准。

## 详细机制

- **触发时机**：当自身所属牌被打出后触发；若未击败目标则不产生任何效果。
- **目标选择**：
  - 优先使用牌的目标
  - 若目标为空或与自身同阵营，则从可命中且未死亡的敌人中随机选一个
- **击败判定**：仅当目标已死亡时触发后续效果。
- **最大生命 -20**：使自身最大生命减少 <span style="color:#3aa675;font-weight:600">20</span>。
- **永久攻击伤害 +10%**：永久增加攻击伤害 10%，跨战斗生效。
- **永久受伤 -5%**：永久减少受伤 5%，跨战斗生效。
- **当前战斗即时生效**：立即在当前战斗中生效，下场战斗自动重新施加。
- **可叠加**：上述效果可多次触发并叠加。

## 小贴士

- **击杀换永久强化**：卩以击杀为代价换取永久 +10% 攻击伤害和 -5% 受伤，是少数跨战斗永久成长的附魔——长线局中多次击杀可叠加成极高加成。
- **最大生命代价需注意**：每次触发最大生命 -20，多次触发会显著降低上限——低血角色慎用，需配合回血/护盾手段维持生存。

## 相关能力/关键词

- [永久增伤](/powers/permanent_damage_boost_power.md)：击败对手后每层 +10% 攻击伤害（跨战斗永久）
- [永久减伤](/powers/permanent_damage_reduction_power.md)：击败对手后每层 -5% 受到伤害（跨战斗永久）

## 源码

- `SeerFiveToneSeal.cs`
- `SeerPermanentDamageBoostPower.cs`
- `SeerPermanentDamageReductionPower.cs`
- `SeerCurrencyManager.cs`（永久属性存储）
