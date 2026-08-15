# 速度

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
