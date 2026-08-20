# 超频

> **归属**：玩家与怪物均可持有
> **施加来源**：玩家获得——[超频宝石](/enchantments/overclock_gem.md)（附魔）；玩家施加给敌方——[曙光普照](/cards/character/shining_light.md)（卡牌）、[好女孩](/powers/good_girl_power.md)（能力联动）、[万相乖离](/powers/universal_divergence_power.md)（能力联动）；怪物自带——[雷伊](/monsters/boss/ray_monster.md)

<img src="/images/powers/overclock_power.png" alt="超频" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 减益（Debuff），列入[异常状态](/mechanics/abnormal-status.md)列表
- **叠加方式**: 叠加（Counter）
- **可见**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| 回合开始获得先制 | 1 层 |
| 移除时获得瘫痪 | 2 层 |

## 描述

在你的回合开始时获得<span style="color:#3aa675;font-weight:600">1</span>层<span style="color:#d4a017;font-weight:600">先制</span>。移除时给予<span style="color:#3aa675;font-weight:600">2</span>层<span style="color:#d44;font-weight:600">瘫痪</span>。在你的回合结束时减少1层。

## 详细机制

- **回合开始先制**：
  - 持有者一方回合开始时（`BeforeSideTurnStart`），获得 1 层[先制](/powers/first_strike_power.md)
  - 每回合固定 1 层先制，不随超频层数变化（多层超频仍只获得 1 层先制/回合）
- **移除时瘫痪**：
  - 超频被移除时（`AfterRemoved`，无论因减层归零还是被驱散），对原持有者施加 2 层[瘫痪](/powers/paralysis_power.md)
  - 瘫痪会使持有者攻击伤害降 10%，且若上回合未造成伤害则自叠虚弱+易伤+缩小
- **回合结束减层**：持有者一方回合结束时，层数 -1
- **双刃剑**：先制增益 vs 移除后瘫痪惩罚——短期加速，长期代价

## 小贴士

- **双刃剑异常**：先制加速但移除后 2 层瘫痪。适合短期爆发后及时驱散，或配合免疫瘫痪能力。

## 相关机制

- [异常状态](/mechanics/abnormal-status.md)
- [先制](/powers/first_strike_power.md)（回合开始获得）
- [瘫痪](/powers/paralysis_power.md)（移除时获得）

## 源码

- `SeerOverclockPower.cs`
