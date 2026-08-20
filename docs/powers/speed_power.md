# 速度

> **归属**：玩家与怪物均可持有
> **施加来源**：玩家获得——[宇宙胎动](/cards/character/cosmic_movement.md)（卡牌）、[梦祈天怜](/cards/character/dream_pray_heaven.md)（卡牌）、[黎羽幻生](/cards/character/feather_phantom.md)（卡牌）、[光荣之梦](/cards/character/glorious_dream.md)（卡牌）、[苍鹭幻翎](/cards/character/heron_illusion_feather.md)（卡牌）、[几米能量](/cards/character/jimmy_energy.md)（卡牌）、[乌合之势](/cards/character/mob_momentum.md)（卡牌）、[染夜天妖](/cards/character/night_demon.md)（卡牌）、[无始源光](/cards/character/primordial_light.md)（卡牌）、[孤洁之傲](/cards/character/proud_solitude.md)（卡牌）、[七重沙海](/cards/character/sevenfold_sand_sea.md)（卡牌）、[寂·妖胧天鸣](/cards/character/silent_demon_cry.md)（卡牌）、[速度史莱姆](/cards/colorless/slime_speed.md)（卡牌）、[星光仙气](/cards/character/starlight_aura.md)（卡牌）、[蔽日食月功](/cards/character/sun_moon_art.md)（卡牌） 等 38 个来源；玩家施加给敌方——[飞龙在天](/cards/character/flying_dragon_sky.md)（卡牌）、[大雨滂沱](/cards/character/heavy_rain.md)（卡牌）、[🟢 绿火药水](/potions/green_fire_potion.md)（药水）、[🔄 乾坤药水](/potions/reverse_potion.md)（药水）、[未来奇点](/powers/future_singularity_power.md)（能力联动）、[大威势明王](/powers/great_might_vidyaraja_power.md)（能力联动）大数回廊（能力联动）、[白色龙鳞](/powers/white_dragon_scale_power.md)（能力联动）、[不破帝·南霜](/relics/epic/bupo_emperor_nanshuang.md)（遗物）、[混沌魔君索伦森](/relics/legendary/chaos_demon_lord.md)（遗物）、[赤胆游龙赵云](/relics/epic/chivalrous_dragon_yun.md)（遗物）、[艾夏拉](/relics/rare/constancy.md)（遗物）、[婕克拉德](/relics/rare/jiekelade.md)（遗物）、[枫眠](/relics/rare/maple_sleep.md)（遗物）、[审判](/relics/common/tarot_judgement.md)（遗物） 等 17 个来源；玩家侧联动——[腐化](/powers/corrupt_power.md)、[帝天战佛](/powers/emperor_war_buddha_power.md)、[精神干涉](/powers/psychic_interference_power.md)、[暴君史莱姆](/relics/event/tyrant_slime_relic.md)；怪物自带——[卡修斯](/monsters/boss/casius_monster.md)、[盖亚](/monsters/boss/gaia_monster.md)、[哈莫雷特](/monsters/elite/hamlet_monster.md)、[哈耶克](/monsters/elite/hayek_monster.md)、[魔花仙子](/monsters/normal/magic_flower_monster.md)、[墨鲁萨](/monsters/elite/medusa_minion_monster.md)、[猛虎王](/monsters/normal/menghuwang_monster.md)、[摩哥斯](/monsters/normal/moges_monster.md)、[魔狮迪露](/monsters/elite/mojj_monster.md)、[菲尼克斯](/monsters/boss/phoenix_monster.md)、[谱尼（Puni）](/monsters/boss/puni_monster.md)、[雷伊](/monsters/boss/ray_monster.md)、[里奥斯](/monsters/elite/rio_monster.md)、[萨克森](/monsters/normal/sakesen_monster.md)、[速度史莱姆](/monsters/normal/speed_slime_monster.md) 等 19 个来源；怪物施加给玩家——[阿克希亚](/monsters/elite/axe_monster.md)、[卡修斯](/monsters/boss/casius_monster.md)、[盖亚](/monsters/boss/gaia_monster.md)、[魔花仙子](/monsters/normal/magic_flower_monster.md)、[猛虎王](/monsters/normal/menghuwang_monster.md)、[魔狮迪露](/monsters/elite/mojj_monster.md)、[缪斯](/monsters/boss/muse_monster.md)、[谱尼（Puni）](/monsters/boss/puni_monster.md)、[史莱姆王子](/monsters/normal/slime_prince_monster.md)、[索伦森（Soulson）](/monsters/boss/soulson_monster.md)、[天雷鼠](/monsters/elite/thunder_mouse_monster.md)、[尤纳斯](/monsters/elite/younas_monster.md)

<img src="/images/powers/speed_power.png" alt="速度" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff，正层数）/ 减益（Debuff，负层数）
- **叠加方式**: 递减（计数型）
- **可见**: 是
- **允许负值**: 是
- **来源**: mod 能力

## 描述

每<span style="color:#3aa675;font-weight:600">2</span>层影响<span style="color:#3aa675;font-weight:600">1</span>张抽牌数。正值使你多抽，负值使你少抽。敌人持有时，正值使所有玩家少抽。

## 详细机制

- **抽牌修改**：在抽牌数计算阶段生效。
- **玩家持有**：
  - 正层数：每 <span style="color:#3aa675;font-weight:600">2</span> 层额外抽 <span style="color:#3aa675;font-weight:600">1</span> 张（4层=+2张，6层=+3张）
  - 负层数：每 <span style="color:#3aa675;font-weight:600">2</span> 层少抽 <span style="color:#3aa675;font-weight:600">1</span> 张（直接减少抽牌数，不是抽了再放回）
- **敌人持有**：正层数时，每 <span style="color:#3aa675;font-weight:600">2</span> 层使所有玩家少抽 <span style="color:#3aa675;font-weight:600">1</span> 张。
- **整数除法**：向零截断（4层→+2，6层→+3，-2层→-1，-4层→-2）。
- **能力类型**：正层数时为增益，负层数时为减益。

## 相关卡牌

- [黎羽幻生](/cards/character/feather_phantom.md)（全属性+1，包含速度+1）
- [宇宙胎动](/cards/character/cosmic_movement.md)（全属性+1，包含速度+1）

## 相关机制

- [全属性](/mechanics/all_attributes.md)（速度是全属性之一）

## 源码

- `SeerSpeedPower.cs`
