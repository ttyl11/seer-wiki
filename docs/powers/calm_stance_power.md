# 平静姿态

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物自带——[泰格尔](/monsters/boss/tiger_monster.md)

<img src="/images/powers/calm_stance_power.png" alt="平静姿态" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 被动（不可消除）
- **叠加方式**: 不堆叠（单实例）
- **可见**: 是

## 描述

在其回合开始时，<span style="color:#d4a017;font-weight:600">先制</span>+<span style="color:#3aa675;font-weight:600">1</span>。

## 详细机制

- **触发时机**：拥有者回合开始时。
- **效果**：获得 1 层[先制](/powers/first_strike_power.md)。
- **每回合触发**：每回合开始都会获得 1 层先制，先制层数会累积。

## 小贴士

- **白虎的平静形态**：白虎在平静姿态下每回合获得先制，意味着它每回合都能先手攻击。
- **先制累积**：先制层数每回合 +1，会越叠越多，需要尽快打破姿态或加速击杀。

## 源码

- `SeerTigerStances.cs`
