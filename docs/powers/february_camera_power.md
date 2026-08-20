# 相机

> **归属**：玩家可施加
> **施加来源**：玩家获得——[二月的相机](/cards/character/february_camera.md)（卡牌）

<img src="/images/powers/february_camera_power.png" alt="相机" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 单例（不可叠加）
- **可见**: 是
- **来源**: mod 能力

### 跨战斗保存字段

| 字段 | 类型 | 说明 |
|---|---|---|
| 记录生命差值 | 整数 | 记录的生命差值 |

## 描述

每回合开始时，若有敌人生命值大于记录值，全部调整至记录值。

## 详细机制

- **记录时机**：当能力首次施加时记录。计算方式：最强敌人当前生命值与自身当前生命值之差的绝对值。
- **记录值持久化**：记录值会持久化，确保跨战斗和多人同步。
- **生命调整**：在拥有者一方回合开始时，遍历所有敌人，若其生命值大于记录值，造成差值的伤害（不可格挡且非攻击伤害）。

## 相关卡牌

- [二月的相机](/cards/character/february_camera.md)（施加相机能力）

## 源码

- `SeerFebruaryCameraPower.cs`
