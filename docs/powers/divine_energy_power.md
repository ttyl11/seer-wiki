# 神耀能量

> **归属**：玩家可施加
> **施加来源**：玩家获得——[黎羽幻生](/cards/character/feather_phantom.md)（卡牌）、[银雾之翼](/cards/character/silver_mist_wing.md)（卡牌）、[重生之翼](/relics/legendary/rebirth_wings.md)（遗物）

<img src="/images/powers/divine_energy_power.png" alt="神耀能量" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 递减（计数型）
- **可见**: 是
- **来源**: mod 能力

### 数值参数

| 参数 | 数值 |
|---|---|
| 每层伤害减少 | 12 |
| 每层伤害减少百分比 | 12 |
| 最大层数 | 6 |

## 描述

每层减少<span style="color:#3aa675;font-weight:600">12</span>%受到伤害，最高<span style="color:#3aa675;font-weight:600">6</span>层。其它效果由遗物提供。

## 详细机制

- **伤害减免**：仅减少拥有者受到的来自敌方的攻击伤害，非攻击伤害不受影响。
- **计算公式**：每层减少 <span style="color:#3aa675;font-weight:600">12</span>%，最高 <span style="color:#3aa675;font-weight:600">6</span> 层（最高减免 <span style="color:#3aa675;font-weight:600">72</span>%）。
- **其它效果**：部分效果由遗物提供，非能力本身的效果。

## 相关卡牌

- [黎羽幻生](/cards/character/feather_phantom.md)（获得 1 层神耀能量）

## 源码

- `SeerDivineEnergyPower.cs`
