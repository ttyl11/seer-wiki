# 藏秘盒

<img src="/images/relics/neow_relic_calamity.png" alt="藏秘盒" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 先古

## 描述

拾起时，获得<span style="color:#3aa675;font-weight:600">1</span>个随机 Seer <span style="color:#d4a017;font-weight:600">罕见遗物</span>。

- **遗物筛选**：从所有 Seer 罕见遗物（共 20 个）中随机抽选 1 个。
- **去重逻辑**：优先选择玩家尚未拥有的罕见遗物；仅当全部已拥有时才允许重复——开局拾起时必然是全新货。

## 风味文字

<span style="color:#d44;font-weight:600">秘藏之盒。</span>

## 小贴士

- **零代价的白嫖遗物**：随机入手 1 个 Seer 罕见遗物，没有任何附带代价——对比同类先古开局奖励[汲血珍匣](/relics/ancient/neow_blood_tax_relic.md)（稀有遗物但每场战斗扣血），藏秘盒输在稀有度低一档，赢在完全免费，期望最稳。
- **罕见遗物池是"引擎件"浓度最高的档位**：20 个候选里大量是能撑起整局玩法的功能件——[典韦](/relics/uncommon/dian_wei.md)（挨打涨属性）、[赫拉](/relics/uncommon/hera.md)（概率免伤）、[神剑·天音](/relics/uncommon/divine_sword_tianyin.md)（铸造成长君王之剑）、[极光仙子](/relics/uncommon/aurora_fairy.md)（奇巧自动出牌）、[苍龙](/relics/uncommon/azure_dragon.md)、[焰帝龙皇](/relics/uncommon/flame_dragon_emperor.md)（元素流核心）……开局随机命中任意一个，都能直接定下这局的构筑方向。
- **开局多一个遗物 = 全程多一份被动收入**：遗物从第一层就开始生效，越早入手收益场次越多——同样一个罕见遗物，开局拿 vs 第三层商店买，中间差着十几场战斗的累积收益。
- **随机性是唯一变量**：20 选 1 无法控制结果，运气差可能抽到与既定思路不搭的件——但罕见遗物没有纯废件，最差也是免费被动；抽到什么就围绕什么调整路线，比硬凹原本的计划更划算。
- **多端一致**：抽选走同步随机源，多人模式下两端获得的遗物完全相同。

## 源码

- `SeerNeowRelicCalamity.cs`
