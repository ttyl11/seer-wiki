# 魅惑

<img src="/images/powers/bewitch_power.png" alt="魅惑" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 减益（Debuff）
- **叠加方式**: 实例化（每次施加独立实例）
- **可见**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| 每层增益眩晕概率 | 10 |

## 描述

在你的回合开始时，自身每个<span style="color:#d4a017;font-weight:600">增益</span>有<span style="color:#3aa675;font-weight:600">10</span>%概率[<span style="color:#d4a017;font-weight:600">眩晕</span>](/mechanics/stun.md)。

## 详细机制

- **触发时机**：在拥有者一方回合开始时触发。
- **眩晕概率计算**：统计拥有者身上所有可见的增益数量，进行**单次判定**，眩晕概率 = 增益数量 × <span style="color:#3aa675;font-weight:600">10</span>%（上限 100%）。
- **眩晕触发**：若随机数小于总概率，[眩晕](/mechanics/stun.md)拥有者，使其跳过下回合。
- **多人同步**：随机数使用框架随机数，确保多端一致。
- **叠加方式**：实例化，每次施加独立实例，不合并层数。

## 相关卡牌

- [妖精的蛊惑](/cards/character/fairy_bewitch.md)（为所有对手附加魅惑）

## 源码

- `SeerBewitchPower.cs`
