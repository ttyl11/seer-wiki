# 圣光庇护

<img src="/images/powers/holy_light_cost_reduction_power.png" alt="圣光庇护" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 计数器叠加
- **可见**: 是

## 数值参数

| 参数 | 数值 |
|---|---|
| 耗能减免 | 1（每层） |

## 描述

你的所有牌耗能 -<span style="color:#3aa675;font-weight:600">1</span>（每层叠加）。

## 详细机制

- **全场减费**：拥有此增益时，你的所有牌耗能 -<span style="color:#3aa675;font-weight:600">1</span>（最低降到 <span style="color:#3aa675;font-weight:600">0</span>）。
- **叠加效果**：多张[圣光](/cards/ancient/holy_light.md)打出时效果叠加。<span style="color:#3aa675;font-weight:600">2</span> 层=所有牌耗能 -<span style="color:#3aa675;font-weight:600">2</span>，<span style="color:#3aa675;font-weight:600">3</span> 层=耗能 -<span style="color:#3aa675;font-weight:600">3</span>……层数越多减费越多。
- **本场战斗持续**：增益持续到战斗结束，不会在回合间消失。
- **触发方式**：由[圣光](/cards/ancient/holy_light.md)牌打出时施加。[圣光](/cards/ancient/holy_light.md)牌由[圣光灵神](/relics/legendary/holy_light_spirit.md)遗物的"净化"效果生成（将抽牌堆的诅咒牌和状态牌转化为[圣光](/cards/ancient/holy_light.md)）。

## 相关卡牌

- [圣光](/cards/ancient/holy_light.md)

## 相关遗物

- [圣光灵神](/relics/legendary/holy_light_spirit.md)

## 源码

- `SeerHolyLightCostReductionPower.cs`
