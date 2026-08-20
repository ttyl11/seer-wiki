# 沉默

> **归属**：玩家可施加
> **施加来源**：玩家施加给敌方——[曙光普照](/cards/character/shining_light.md)（卡牌）、[日月安属](/cards/character/sun_moon_belong.md)（卡牌）、[好女孩](/powers/good_girl_power.md)（能力联动）、[万相乖离](/powers/universal_divergence_power.md)（能力联动）、[白色龙鳞](/powers/white_dragon_scale_power.md)（能力联动）

<img src="/images/powers/silence_power.png" alt="沉默" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 减益（Debuff），列入[异常状态](/mechanics/abnormal-status.md)列表
- **叠加方式**: 叠加（Counter）
- **可见**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| 单次攻击伤害上限 | 30 |

## 描述

若单次伤害超过<span style="color:#3aa675;font-weight:600">30</span>点则降至0。在你的回合结束时，对非玩家角色造成1点伤害并减少1层。

## 详细机制

- **伤害封顶**：
  - 当持有者**造成的**单次攻击伤害超过 30 点时，伤害直接降为 0
  - 仅限攻击伤害，不影响[固定伤害](/powers/fixed_damage_power.md)等非攻击伤害
  - 触发时能力闪烁（Flash）提示
  - 这是限制持有者输出上限的强力 debuff——高伤害攻击牌完全无效
- **回合结束伤害**：
  - 持有者一方回合结束时，若持有者非玩家（怪物），受 1 点不可格挡伤害
  - 然后层数 -1
  - 玩家持有沉默时回合结束不受这 1 点伤害

## 小贴士

- **封顶非禁技**：沉默不是"无法使用技能"，而是单次攻击伤害超过 30 直接归零。对依赖高单次伤害的敌人压制力极强。

## 相关机制

- [异常状态](/mechanics/abnormal-status.md)

## 源码

- `SeerSilencePower.cs`
