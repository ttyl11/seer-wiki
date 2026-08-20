# 束缚

> **归属**：玩家与怪物均可持有
> **施加来源**：玩家施加给敌方——[九月的枷锁](/cards/character/september_shackles.md)（卡牌）、[曙光普照](/cards/character/shining_light.md)（卡牌）、[十玄释](/cards/character/shi_xuan_shi.md)（卡牌）、[好女孩](/powers/good_girl_power.md)（能力联动）、[万相乖离](/powers/universal_divergence_power.md)（能力联动）；怪物施加给玩家——[哈耶克](/monsters/elite/hayek_monster.md)

<img src="/images/powers/constrict_power.png" alt="束缚" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 减益（Debuff）/ [<span style="color:#d44;font-weight:600">异常状态</span>](/mechanics/abnormal-status.md)
- **叠加方式**: 叠加（Counter）
- **可见**: 是
- **允许负数**: 否
- **来源**: mod

### 数值参数

无（层数即持续回合数）

## 描述

此状态存在时，自身无法获取[<span style="color:#d4a017;font-weight:600">先制</span>](/powers/first_strike_power.md)。在你的回合结束时减少<span style="color:#3aa675;font-weight:600">1</span>层。

## 详细机制

- **封锁先制**：当自身已有束缚层数时，通过拦截受到的状态施加来完全阻止先制的获取。
- **仅封锁先制**：只封锁先制，其他能力（如力量、防御等）不受影响。
- **回合结束递减**：在拥有者一方回合结束时，层数 -<span style="color:#3aa675;font-weight:600">1</span>。
- **异常状态**：属于 mod [异常状态](/mechanics/abnormal-status.md) 之一，可被 [异常免疫·反弹](/powers/debuff_immune_reflect_power.md) 等能力免疫或反弹。

## 小贴士

- **只封获取不消除已有**：束缚只阻止"获得"先制，不消除已存在的先制层数。先施加先制再被束缚则已有先制仍生效。

## 相关卡牌

- [九月的枷锁](/cards/character/september_shackles.md)（对所有敌人施加束缚 4 回合）
- [曙光普照](/cards/character/shining_light.md)（对目标施加束缚 2 回合）

## 相关附魔

- [束缚宝石](/enchantments/constrict_gem.md)（攻击时施加束缚）

## 相关能力

- [先制](/powers/first_strike_power.md)（被束缚封锁的能力）

## 源码

- `SeerConstrictPower.cs`
- `SeerAbnormalStatus.cs`（异常状态注册）
