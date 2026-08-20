# 八月的流火

> **归属**：玩家可施加
> **施加来源**：玩家获得——[八月的流火](/cards/character/august_flame.md)（卡牌）

<img src="/images/powers/august_flame_power.png" alt="八月的流火" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 递减（刷新型）
- **可见**: 是

## 描述

你每打出一张牌，对随机敌人造成等于自身<span style="color:#d4a017;font-weight:600">烧伤</span>回合数的伤害。

## 详细机制

- **出牌前缓存**：
  - 若出牌者是拥有者，记录本张牌打出瞬间的烧伤层数
- **出牌后伤害**：
  - 若缓存的伤害值大于 0，等待 0.1~0.2 秒
  - 从可攻击的敌人中随机选一个
  - 播放钝击特效
  - 对该敌人造成伤害（来源为拥有者）
- **关键点**：
  - 伤害值等于"打出该牌瞬间"的烧伤层数，而非结算时的烧伤层数
  - 伤害为非攻击伤害，不受攻击伤害减免影响
  - 随机选择敌人，无法指定目标
- **无层数设计**：无层数，效果只看"有无"。

## 相关能力

- [烧伤](/powers/burn_power.md)（查询当前烧伤层数作为伤害值）

## 相关卡牌

- [八月的流火](/cards/character/august_flame.md)（自身烧伤 5/7 回合，获得此能力）

## 源码

- `SeerAugustFlamePower.cs`
