# 冻伤

<img src="/images/powers/frostbite_power.png" alt="冻伤" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 减益（Debuff），列入[异常状态](/mechanics/abnormal-status.md)列表
- **叠加方式**: 叠加（Counter）
- **可见**: 是
- **血条预测**: 是（冰蓝色，5 点）

### 数值参数

| 参数 | 数值 |
|---|---|
| 伤害 | 5 |
| 每回合伤害 | 5 |

## 描述

在你的回合开始时受到<span style="color:#3aa675;font-weight:600">5</span>点伤害并减少1层。

## 详细机制

- **回合开始伤害**：
  - 自身回合开始时，若持有者存活，对持有者造成 5 点伤害（不可格挡的非攻击伤害）
  - 伤害结算后，若持有者仍存活，层数 -1
  - 若持有者死亡，等待 0.1~0.25 秒后再处理
- **血条预测**：
  - 返回单段预测段，5 点伤害
  - 颜色为冰蓝色
  - 从右向左生长（表示即将受到的伤害）

## 小贴士

- **固定伤害型异常**：每层每回合固定 5 点不可格挡伤害，与[中毒](/powers/poison_power.md)（递增型）不同，多层冻伤 = 多 ×5 点。

## 相关能力

- [冰封](/powers/freeze_power.md)：冰封结束时施加冻伤

## 相关卡牌

- [沧溟珠泪](/cards/character/ocean_pearl_tear.md)
- [曙光普照](/cards/character/shining_light.md)
- [一月的雪鹄](/cards/character/january_snow_owl.md)
- [冰天花葬](/cards/character/ice_sky_flower_burial.md)

## 源码

- `SeerFrostbitePower.cs`
