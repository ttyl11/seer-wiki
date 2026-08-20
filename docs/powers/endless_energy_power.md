# 无尽能源

> **归属**：玩家可施加
> **施加来源**：玩家获得——[无尽能源](/cards/colorless/endless_energy.md)（卡牌）

<img src="/images/powers/endless_energy_power.png" alt="无尽能源" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 单次（不叠加）
- **可见**: 否

## 描述

本回合中你每打出一张牌，从赛尔诅咒牌池中随机选取一张诅咒牌加入[手牌](/mechanics/hand.md)。回合结束时移除此能力。

## 详细机制

- **诅咒牌生成**：每打出一张牌时，当满足以下所有条件时触发：
  1. 拥有者存活
  2. 是拥有者打出的牌
  3. 拥有者处于战斗中
- **随机选取**：
  1. 从赛尔诅咒牌池中选取
  2. 过滤已解锁的诅咒牌
  3. 使用框架随机数随机选取一张（确保多端同步）
  4. 创建卡牌实例
  5. 加入手牌底部
- **回合结束移除**：在拥有者一方回合结束时，移除此能力。

## 相关卡牌

- [无尽能源](/cards/colorless/endless_energy.md)：获得 999 点能量并施加此能力

## 源码

- `SeerEndlessEnergyPower.cs`
