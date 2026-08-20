# 玄源之龍

> **归属**：玩家可施加
> **施加来源**：玩家获得——[镇世·乔特鲁德](/relics/legendary/world_suppressor_jortrud.md)（遗物）

<img src="/images/powers/mystic_source_dragon_power.png" alt="玄源之龍" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益
- **来源**: [镇世·乔特鲁德](/relics/legendary/world_suppressor_jortrud.md)
- **叠加方式**: 不叠加（一次性）
- **可见**: 是

## 描述

免疫<span style="color:#d44;font-weight:600">疲惫</span>。<br/>Boss房间中，若自身和Boss血量首次同时低于<span style="color:#3aa675;font-weight:600">20</span>%，获得<span style="color:#3aa675;font-weight:600">20</span>%<span style="color:#d4a017;font-weight:600">最大生命</span>值，下一张牌处决生命低于<span style="color:#3aa675;font-weight:600">20</span>%的敌人，之后永久失去此能力。

## 数值

| 参数 | 数值 |
|---|---|
| 触发血量阈值（自身与Boss） | 20% |
| 最大生命提升 | 20% |
| 处决血量阈值 | 20% |

## 小贴士

- **Boss战双低触发**：仅在 Boss 房间生效，需自身与 Boss 血量同时低于 20% 才触发，单方低血不触发。
- **跨战斗永久失去**：一旦触发，后续战斗不再拥有此能力。

## 源码

- `SeerMysticSourceDragonPower.cs`
