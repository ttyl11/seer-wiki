# 固定伤害

> **归属**：玩家与怪物均可持有
> **施加来源**：玩家获得——[焦枯](/cards/status/scorch_status.md)（卡牌）、[神印](/powers/divine_seal_power.md)（能力联动）、[处决](/powers/execute_power.md)（能力联动）、[致命印记](/powers/fatal_mark_power.md)（能力联动）、[缔结印记](/powers/knot_mark_power.md)（能力联动）、[扼生一](/powers/life_choke_one_power.md)（能力联动）、[扼生二](/powers/life_choke_two_power.md)（能力联动）、[石化操控](/powers/petrify_control_power.md)（能力联动）、[锋锐I](/powers/sharp_one_power.md)（能力联动）、[锋锐III](/powers/sharp_three_power.md)（能力联动）、[锋锐II](/powers/sharp_two_power.md)（能力联动）；玩家施加给敌方——[魑魅魍魉](/cards/character/demon_ghost.md)（卡牌）、[婵·命定星缘](/cards/token/destined_star_bond.md)（卡牌）、[神灵之触](/cards/ancient/divine_touch.md)（卡牌）、[王·龙予狂宴](/cards/character/dragon_feast.md)（卡牌）、[元素](/cards/character/element.md)（卡牌）、SeerEvilShadowStrike（卡牌）、[天叩·千钧一发](/cards/character/heaven_strike_critical.md)（卡牌）、[正义大裁决](/cards/character/justice_judgment.md)（卡牌）、[王·天乖陆离](/cards/character/king_heaven_strange.md)（卡牌）、[万卍觉心法界镇](/cards/character/myriad_awakening_realm_suppression.md)（卡牌）、[赤胆缀银枪](/cards/character/red_bold_spear.md)（卡牌）、[权杖](/cards/colorless/scepter.md)（卡牌）、[辉·沧天逆流拳](/cards/character/sky_fist.md)（卡牌）、[堕语噬亡魂](/cards/character/soul_devour.md)（卡牌）、[蔽日食月功](/cards/character/sun_moon_art.md)（卡牌） 等 39 个来源；玩家侧联动——[弦月反弹](/powers/crescent_edge_reflect_power.md)；怪物施加给玩家——[比比鼠](/monsters/normal/bibi_mouse_monster.md)、[巴斯特](/monsters/boss/buster_monster.md)、[防御史莱姆](/monsters/normal/defense_slime_monster.md)、[狄修斯](/monsters/normal/dixius_monster.md)、[斗魔旺乔](/monsters/elite/dou_mo_wang_qiao_monster.md)、[斗神瑞尔斯](/monsters/normal/doushen_ruiersi_monster.md)、[墨鲁萨](/monsters/elite/medusa_minion_monster.md)、[魔狮迪露](/monsters/elite/mojj_monster.md)、[谱尼（Puni）](/monsters/boss/puni_monster.md)、[史莱姆国王](/monsters/normal/slime_king_monster.md)、[索伦森（Soulson）](/monsters/boss/soulson_monster.md)

<img src="/images/powers/fixed_damage_power.png" alt="固定伤害" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 减益（Debuff）
- **叠加方式**: 计数器叠加
- **可见**: 是
- **允许负值**: 否
- **血条预测**: 是

## 数值参数

| 参数 | 数值 |
|---|---|
| 层数 | 1 |

## 描述

在你的回合开始时受到等于层数的固定伤害后移除。

## 详细机制

- **触发时机**：在持有者的回合开始时触发。
- **伤害类型**：造成不可格挡且非攻击伤害。
  - 不可格挡：无视[格挡](/mechanics/block.md)直接扣血
  - 非攻击伤害：不受[力量](/powers/strength_power.md)影响
- **伤害值**：等于层数。
- **伤害来源**：施加者为拥有者，无卡牌来源。
- **触发后移除**：造成伤害后移除自身。
- **血条预测**：在血条上显示固定伤害的预测扣血（粉色）。

### 免疫机制

以下能力会让目标免疫固定伤害（施加时检测，若有则不造成伤害并移除自身）：

- **免疫固定伤害**：永久免疫
- **回合免疫固伤**：限时免疫
- **长效体力**：附带免疫效果

### 坚毅反弹

若持有者拥有[坚毅](/powers/resolve_power.md)，则固定伤害会被**免疫并转移**给所有对手，持有者自身不受伤害。

### 施加方式

固定伤害必须以本能力（Debuff）形式施加，才能正确触发免疫检测、坚毅转移、血条预测等机制。

## 相关卡牌

- [弦月锋华](/cards/character/crescent_edge.md)（以固定伤害形式反弹给攻击者）

## 相关能力

- **免疫固定伤害**：免疫本能力
- **回合免疫固伤**：限时免疫本能力
- **长效体力**：附带免疫本能力
- [坚毅](/powers/resolve_power.md)：免疫本能力并转移给所有对手

## 源码

- `SeerFixedDamagePower.cs`
