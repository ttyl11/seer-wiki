# 汲血珍匣

<img src="/images/relics/neow_blood_tax_relic.png" alt="汲血珍匣" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 先古

### 数值参数

| 参数 | 数值 |
|---|---|
| 生命损失 | 2 |

## 描述

拾起时，获得<span style="color:#3aa675;font-weight:600">1</span>个随机 Seer <span style="color:#d4a017;font-weight:600">[稀有遗物](/relics/all.md)</span>。每场战斗开始时，失去<span style="color:#3aa675;font-weight:600">2</span>点生命。

- **遗物筛选**：从全部 21 件 Seer 稀有遗物中随机抽选 1 件（[稀有遗物图鉴](/relics/rare/index.md)）。
- **去重逻辑**：优先抽你尚未拥有的稀有遗物；只有 21 件全部集齐后才允许重复——实际游戏中几乎不会抽到重复。
- **生命损失**：战斗开始时（先于第一回合）遗物闪烁，对拥有者造成 2 点不可格挡的 HP 损失（类似中毒的 HP 流失）。

## 风味文字

<span style="color:#d44;font-weight:600">稀有。</span>

## 小贴士

- **白嫖 1 件稀有遗物 + 每场战斗 -2 HP**：拾起瞬间就随机入手 1 件 Seer 稀有遗物——稀有遗物普遍是改变战斗方式的强力件（如[厉魇魔王·咤克斯](/relics/rare/demon_king.md)的增伤秒杀、[终末之灭·天邪龙王](/relics/rare/dragon_of_doom.md)的血量对比切模式、[幽冥帝尊·修罗](/relics/rare/nether_emperor.md)的低血必暴+击杀传导回血），等于用血税换一次定向升级遗物栏的机会。
- **优先补图鉴，不撞车**：抽选优先挑你没有的——对比[涅奥的猩红牌盒](/relics/ancient/neow_blood_tarot.md)（塔罗池不查重），珍匣几乎不会给你重复货，21 件稀有遗物池在正常一局里根本收集不完，等于稳定进新货。
- **代价需要回血兜底**：HP 损失发生在每场战斗开始、先于第一回合，不可格挡。单场 2 点不痛，但一场爬塔几十场战斗累积下来是几十点生命——需要回血药水、休息点或回血遗物（如[毒水妖灵](/relics/rare/poison_water_spirit.md)、[圣王·萨格罗斯](/relics/rare/holy_king_sargeros.md)）兜底，残血进 Boss 战前尤其要掂量。
- **抽到功能型遗物也不亏**：稀有池里不全是战斗件——[时钟诛机](/relics/rare/clock_executioner.md)给卡牌附魔、[超算鲁比克](/relics/rare/rubik_supercomputer.md)按 PP 牌矩阵发增益、[毒水妖灵](/relics/rare/poison_water_spirit.md)用药水回血，抽到什么都有用，没有废签。
- **随机结果多端一致**：抽选走同步随机源，多人模式下两端入手的稀有遗物完全相同。

## 源码

- `SeerNeowBloodTaxRelic.cs`
