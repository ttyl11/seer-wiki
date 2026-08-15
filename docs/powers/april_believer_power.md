# 信徒

<img src="/images/powers/april_believer_power.png" alt="信徒" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 叠加（计数型）
- **可见**: 是

## 描述

自身对处于<span style="color:#d44;font-weight:600">异常状态</span>的敌人造成伤害翻倍。

## 详细机制

- **触发条件**：当拥有者造成攻击伤害时检查目标。
- **伤害翻倍**：若目标持有任意异常状态，伤害 ×2；否则无变化。
- **无层数设计**：无层数，效果只看"有无"，单层即可触发翻倍。

## 相关卡牌

- [四月的信徒](/cards/character/april_believer.md)（获得信徒能力）

## 源码

- `SeerAprilBelieverPower.cs`
