# 命中

> **归属**：玩家与怪物均可持有
> **施加来源**：玩家获得——[宇宙胎动](/cards/character/cosmic_movement.md)（卡牌）、[梦祈天怜](/cards/character/dream_pray_heaven.md)（卡牌）、[极度冰点](/cards/character/extreme_freeze.md)（卡牌）、[黎羽幻生](/cards/character/feather_phantom.md)（卡牌）、[光荣之梦](/cards/character/glorious_dream.md)（卡牌）、[苍鹭幻翎](/cards/character/heron_illusion_feather.md)（卡牌）、[几米能量](/cards/character/jimmy_energy.md)（卡牌）、[染夜天妖](/cards/character/night_demon.md)（卡牌）、[无始源光](/cards/character/primordial_light.md)（卡牌）、[孤洁之傲](/cards/character/proud_solitude.md)（卡牌）、[七重沙海](/cards/character/sevenfold_sand_sea.md)（卡牌）、[寂·妖胧天鸣](/cards/character/silent_demon_cry.md)（卡牌）、[星光仙气](/cards/character/starlight_aura.md)（卡牌）、[蔽日食月功](/cards/character/sun_moon_art.md)（卡牌）、[阑珊百转](/cards/character/waning_turns.md)（卡牌） 等 38 个来源；玩家施加给敌方——[大雨滂沱](/cards/character/heavy_rain.md)（卡牌）、[九月的枷锁](/cards/character/september_shackles.md)（卡牌）、[👁️ 失明药水](/potions/blind_potion.md)（药水）、[🟢 绿火药水](/potions/green_fire_potion.md)（药水）、[🔄 乾坤药水](/potions/reverse_potion.md)（药水）、[大威势明王](/powers/great_might_vidyaraja_power.md)（能力联动）大数回廊（能力联动）、[白色龙鳞](/powers/white_dragon_scale_power.md)（能力联动）、[不破帝·南霜](/relics/epic/bupo_emperor_nanshuang.md)（遗物）、[混沌魔君索伦森](/relics/legendary/chaos_demon_lord.md)（遗物）、[赤胆游龙赵云](/relics/epic/chivalrous_dragon_yun.md)（遗物）、[艾夏拉](/relics/rare/constancy.md)（遗物）、[风殇影翼·飞镰](/relics/rare/flying_scythe.md)（遗物）、[婕克拉德](/relics/rare/jiekelade.md)（遗物）、[枫眠](/relics/rare/maple_sleep.md)（遗物） 等 18 个来源；玩家侧联动——[怀晦之亟盼](/cards/character/longing_for_darkness.md)、[腐化](/powers/corrupt_power.md)、[帝天战佛](/powers/emperor_war_buddha_power.md)、[精神干涉](/powers/psychic_interference_power.md)、[暴君史莱姆](/relics/event/tyrant_slime_relic.md)；怪物自带——[卡修斯](/monsters/boss/casius_monster.md)、[盖亚](/monsters/boss/gaia_monster.md)、[哈莫雷特](/monsters/elite/hamlet_monster.md)、[哈耶克](/monsters/elite/hayek_monster.md)、[魔花仙子](/monsters/normal/magic_flower_monster.md)、[墨鲁萨](/monsters/elite/medusa_minion_monster.md)、[猛虎王](/monsters/normal/menghuwang_monster.md)、[摩哥斯](/monsters/normal/moges_monster.md)、[菲尼克斯](/monsters/boss/phoenix_monster.md)、[谱尼（Puni）](/monsters/boss/puni_monster.md)、[雷伊](/monsters/boss/ray_monster.md)、[里奥斯](/monsters/elite/rio_monster.md)、[萨克森](/monsters/normal/sakesen_monster.md)、[钢牙鲨](/monsters/elite/steel_jaw_shark_monster.md)、[泰格尔](/monsters/boss/tiger_monster.md) 等 17 个来源；怪物施加给玩家——[卡修斯](/monsters/boss/casius_monster.md)、[盖亚](/monsters/boss/gaia_monster.md)、[魔花仙子](/monsters/normal/magic_flower_monster.md)、[猛虎王](/monsters/normal/menghuwang_monster.md)、[魔狮迪露](/monsters/elite/mojj_monster.md)、[缪斯](/monsters/boss/muse_monster.md)、[谱尼（Puni）](/monsters/boss/puni_monster.md)、[史莱姆王子](/monsters/normal/slime_prince_monster.md)、[索伦森（Soulson）](/monsters/boss/soulson_monster.md)、[天雷鼠](/monsters/elite/thunder_mouse_monster.md)

<img src="/images/powers/accuracy_power.png" alt="命中" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff，正层数）/ 减益（Debuff，负层数）
- **叠加方式**: 递减（计数型）
- **可见**: 是
- **允许负值**: 是
- **来源**: mod 能力

### 数值参数

| 参数 | 数值 |
|---|---|
| 每层未命中概率 | 5 |

## 描述

负数层数时每层有<span style="color:#3aa675;font-weight:600">5</span>%几率使伤害降为<span style="color:#3aa675;font-weight:600">0</span>。

## 详细机制

- **未命中判定**：当层数为负数时，每层提供 5% 未命中概率，由随机数判定是否未命中。
- **伤害归零**：若判定为未命中且为攻击伤害，伤害降为 0。
- **玩家与怪物均生效**：负命中同样作用于怪物的攻击——给敌人叠负命中后，它的攻击有概率直接落空。
- **正层数**：正层数时无特殊效果，仅作为属性存在（主要用于抵消负命中）。
- **多人同步**：随机判定使用框架随机数，确保多端一致。
- **类型随层数变化**：层数 ≥ 0 时为 Buff，层数 < 0 时为 Debuff。

## 相关卡牌

- [黎羽幻生](/cards/character/feather_phantom.md)（全属性+1，包含命中+1）
- [宇宙胎动](/cards/character/cosmic_movement.md)（全属性+1，包含命中+1）

## 相关机制

- [全属性](/mechanics/all_attributes.md)（命中是全属性之一）

## 源码

- `SeerAccuracyPower.cs`
