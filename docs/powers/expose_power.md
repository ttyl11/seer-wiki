# 曝

<img src="/images/powers/expose_power.png" alt="曝" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 减益（Debuff）
- **叠加方式**: 单例（不叠加）
- **可见**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| 幻扰成功率下降百分比 | 50 |

> 注：本能力无动态变量，上述数值由代码逻辑硬编码。

## 描述

不可计数。持有此状态的敌怪所对应的所有[<span style="color:#d4a017;font-weight:600">幻扰</span>](/powers/illusion_disturb_power.md)施加[<span style="color:#d44;font-weight:600">异常状态</span>](/mechanics/abnormal-status.md)成功概率下降<span style="color:#3aa675;font-weight:600">50%</span>，且此敌怪死亡后，直接[<span style="color:#9b59b6;font-weight:600">消逝</span>]。

## 详细机制

- **不可计数**：单例叠加，多次施加不会累加层数，仅保持单例存在。
- **幻扰成功率下降**：持有此状态的敌怪对应的所有"幻扰"系列能力施加异常状态时，成功概率下降 <span style="color:#3aa675;font-weight:600">50%</span>。
- **消逝效果**：持有此状态的敌怪死亡后直接"消逝"（不触发复活和亡语），且减益传染给所有队友。
- **无动态变量**：本能力不使用动态变量，所有效果通过外部代码检测是否持有此能力来实现。

## 相关卡牌

- [破黯穿穹](/cards/event/break_dark_pierce_sky.md)（施加曝状态）

## 相关能力

- [幻扰](/powers/illusion_disturb_power.md)（受曝状态影响成功率）

## 源码

- `SeerExposePower.cs`
- `SeerVanishPatch.cs`（消逝逻辑）
- `SeerIllusionDisturbPower.cs`（幻扰成功率下降逻辑）
