# 绝罚羊皮卷

<img src="/images/relics/vaku_contract_and_pp_cards.png" alt="绝罚羊皮卷" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 先古

### 数值参数

| 参数 | 数值 |
|---|---|
| PP 阈值 | 10 |
| 卡牌数量 | 5 |

## 描述

拾起时，获得1张<span style="color:#9b59b6;font-weight:600">[禁术·契灭](/cards/character/contract_destruction.md)</span>（<span style="color:#d4a017;font-weight:600">[消耗](/mechanics/exhaust.md)</span>）。并随机获得 <span style="color:#3aa675;font-weight:600">5</span> 张 <span style="color:#d4a017;font-weight:600">PP</span>≥<span style="color:#3aa675;font-weight:600">10</span> 的高费卡牌（<span style="color:#d4a017;font-weight:600">[消耗](/mechanics/exhaust.md)</span>）。

- **描述与实际不符**：本地化写的是"PP≥10 的高费卡牌"，但实际是从下方固定 12 张卡池中随机抽 5 张，PP 阈值参数定义了却未参与筛选。以实际效果为准。
- **固定卡池**：[真龙吐息](/cards/character/true_dragon_breath.md)、[滔天龙汲水](/cards/character/soaring_dragon_water.md)、[余温之辰](/cards/event/residual_warmth_star.md)、[潜龙伏地啸](/cards/character/hidden_dragon_roar.md)、[飞龙在天](/cards/character/flying_dragon_sky.md)、[邪龙勿用](/cards/character/evil_dragon_unused.md)、[龙鳞切割](/cards/character/dragon_scale_cut.md)、[龙王波](/cards/character/dragon_king_wave.md)、[宝剑](/cards/colorless/sword.md)、[权杖](/cards/colorless/scepter.md)、[圣杯](/cards/colorless/holy_grail.md)、[星币](/cards/colorless/coin.md)。

## 风味文字

<span style="color:#d44;font-weight:600">契灭之术。</span>

## 小贴士

- **契灭是核心**：附带的[禁术·契灭](/cards/character/contract_destruction.md)是 mod 顶级爆发牌，消耗手牌所有 PP 卡转伤害。配合本遗物送的龙属性 PP 卡正好喂给它，一张牌就能终结 Boss。
- **送的全是消耗卡**：5 张随机卡全部带[消耗](/mechanics/exhaust.md)，打完即净，不污染牌组但每场战斗只有一次机会。适合留到关键回合爆发。
- **卡池偏龙体系**：固定 12 张卡池里有 8 张龙主题卡，其中[龙王波](/cards/character/dragon_king_wave.md)按场上龙属性生物数翻倍伤害，与龙属性生物体系联动优秀。
- **PP 阈值是摆设**：参数表里的 PP 阈值实际未参与筛选，别期待一定抽到高 PP 卡——池子里也有[宝剑](/cards/colorless/sword.md)、[星币](/cards/colorless/coin.md)这类无 PP 卡。
- **性价比**：1 张契灭加 5 张消耗高费卡，即时爆发力极强但都是一次性。作为 Boss 战决胜弹药物超所值，日常小怪战则略显浪费。

## 源码

- `SeerVakuContractAndPpCards.cs`
