# 防御

> **归属**：玩家与怪物均可持有
> **施加来源**：玩家获得——[宇宙胎动](/cards/character/cosmic_movement.md)（卡牌）、[龙舞九天](/cards/character/dragon_dance_nine_heavens.md)（卡牌）、[梦祈天怜](/cards/character/dream_pray_heaven.md)（卡牌）、[能源补给](/cards/character/energy_supply.md)（卡牌）、[黎羽幻生](/cards/character/feather_phantom.md)（卡牌）、[光荣之梦](/cards/ancient/glorious_dream.md)（卡牌）、[苍鹭幻翎](/cards/character/heron_illusion_feather.md)（卡牌）、[几米能量](/cards/character/jimmy_energy.md)（卡牌）、[染夜天妖](/cards/character/night_demon.md)（卡牌）、[无始源光](/cards/character/primordial_light.md)（卡牌）、[孤洁之傲](/cards/character/proud_solitude.md)（卡牌）、[七重沙海](/cards/character/sevenfold_sand_sea.md)（卡牌）、[寂·妖胧天鸣](/cards/character/silent_demon_cry.md)（卡牌）、[防御史莱姆](/cards/colorless/slime_defense.md)（卡牌）、[星光仙气](/cards/character/starlight_aura.md)（卡牌） 等 44 个来源；玩家施加给敌方——[龙鳞切割](/cards/character/dragon_scale_cut.md)（卡牌）、[大雨滂沱](/cards/character/heavy_rain.md)（卡牌）、[🟢 绿火药水](/potions/green_fire_potion.md)（药水）、[🔄 乾坤药水](/potions/reverse_potion.md)（药水）、[大威势明王](/powers/great_might_vidyaraja_power.md)（能力联动）大数回廊（能力联动）、[不破帝·南霜](/relics/epic/bupo_emperor_nanshuang.md)（遗物）、[混沌魔君索伦森](/relics/legendary/chaos_demon_lord.md)（遗物）、[赤胆游龙赵云](/relics/epic/chivalrous_dragon_yun.md)（遗物）、[艾夏拉](/relics/rare/constancy.md)（遗物）、[婕克拉德](/relics/rare/jiekelade.md)（遗物）、[枫眠](/relics/rare/maple_sleep.md)（遗物）、[审判](/relics/common/tarot_judgement.md)（遗物）、[魔术师](/relics/common/tarot_magician.md)（遗物）、[天河神将](/relics/common/tianhe_general.md)（遗物）；玩家侧联动——[腐化](/powers/corrupt_power.md)、[帝天战佛](/powers/emperor_war_buddha_power.md)；怪物自带——[安妮](/monsters/normal/annie_monster.md)、[巴斯特](/monsters/boss/buster_monster.md)、[卡修斯](/monsters/boss/casius_monster.md)、[防御史莱姆](/monsters/normal/defense_slime_monster.md)、[盖亚](/monsters/boss/gaia_monster.md)、[哈莫雷特](/monsters/elite/hamlet_monster.md)、[哈耶克](/monsters/elite/hayek_monster.md)、[加布](/monsters/normal/jiabu_monster.md)、[魔花仙子](/monsters/normal/magic_flower_monster.md)、[墨鲁萨](/monsters/elite/medusa_minion_monster.md)、[猛虎王](/monsters/normal/menghuwang_monster.md)、[摩哥斯](/monsters/normal/moges_monster.md)、[菲尼克斯](/monsters/boss/phoenix_monster.md)、[谱尼（Puni）](/monsters/boss/puni_monster.md)、[雷伊](/monsters/boss/ray_monster.md) 等 21 个来源；怪物施加给玩家——[卡修斯](/monsters/boss/casius_monster.md)、[盖亚](/monsters/boss/gaia_monster.md)、[魔花仙子](/monsters/normal/magic_flower_monster.md)、[猛虎王](/monsters/normal/menghuwang_monster.md)、[魔狮迪露](/monsters/elite/mojj_monster.md)、[缪斯](/monsters/boss/muse_monster.md)、[谱尼（Puni）](/monsters/boss/puni_monster.md)、[史莱姆王子](/monsters/normal/slime_prince_monster.md)、[索伦森（Soulson）](/monsters/boss/soulson_monster.md)、[钢牙鲨](/monsters/elite/steel_jaw_shark_monster.md)、[天雷鼠](/monsters/elite/thunder_mouse_monster.md)

<img src="/images/powers/defense_power.png" alt="防御" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff，正层数）/ 减益（Debuff，负层数）
- **叠加方式**: 递减（计数型）
- **可见**: 是
- **允许负值**: 是
- **来源**: mod 能力

## 描述

每有一层，受到的攻击伤害降低<span style="color:#3aa675;font-weight:600">1</span>点。

## 详细机制

- **伤害减免**：仅减少拥有者受到的攻击伤害，非攻击伤害不受影响。每层减少 1 点实际损失生命值。
- **计算方式**：实际损失 = max(0, 原始伤害 - 防御层数)。
- **与格挡区别**：格挡在伤害结算前抵消，防御在伤害结算后减少实际损失生命值。
- **类型随层数变化**：层数 ≥ 0 时为 Buff，层数 < 0 时为 Debuff。

## 相关卡牌

- [黎羽幻生](/cards/character/feather_phantom.md)（全属性+1，包含防御+1）
- [宇宙胎动](/cards/character/cosmic_movement.md)（全属性+1，包含防御+1）

## 相关机制

- [全属性](/mechanics/all_attributes.md)（防御是全属性之一）
- [格挡](/mechanics/block.md)（不同于格挡，防御在伤害结算后减少损失）

## 源码

- `SeerDefensePower.cs`
