# 力量

<img src="/images/powers/strength_power.png" alt="力量" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 累加型
- **可见**: 是
- **来源**: 原版能力

### 数值参数

| 参数 | 数值 |
|---|---|
| 层数 | 1 |

## 描述

每层使你的攻击伤害增加1点。

## 详细机制

- **攻击伤害增加**：
  - 每层力量增加 1 点攻击伤害
  - 仅影响攻击伤害，不影响非攻击伤害
- **叠加方式**：
  - 正层数增加伤害，负层数减少伤害
  - 可被消除增益效果移除

## 相关卡牌（部分）

- [潜龙伏地啸](/cards/character/hidden_dragon_roar.md)（令敌人力量 -1）
- [大雨滂沱](/cards/character/heavy_rain.md)（令所有敌人力量 -1）
- [宇宙胎动](/cards/character/cosmic_movement.md)（全属性 +1，含力量）
- [苍鹭幻翎](/cards/character/heron_illusion_feather.md)（全属性加成，含力量）
- [黎羽幻生](/cards/character/feather_phantom.md)（全属性加成，含力量）

## 源码

- `StrengthPower.cs`（原版）
