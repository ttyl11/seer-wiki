# 荒灰天

<img src="/images/powers/desolate_ash_sky_power.png" alt="荒灰天" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 递减（计数型）
- **可见**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| 烧伤层数 | 1 |
| 焚烬层数 | 1 |
| 先制数值 | 2 |
| PP | 1 |
| 最大PP | 1 |

## 描述

每回合（己方回合开始时）获得 <span style="color:#3aa675;font-weight:600">2</span> 层[先制](/powers/first_strike_power.md)，对所有敌人施加 <span style="color:#3aa675;font-weight:600">1</span> 层[烧伤](/powers/burn_power.md)和 <span style="color:#3aa675;font-weight:600">1</span> 层[焚烬](/powers/ash_power.md)。己方回合结束时层数 -<span style="color:#3aa675;font-weight:600">1</span>。

## 详细机制

- **回合开始触发**：在拥有者一方回合开始时：
  1. 闪烁能力图标
  2. 对自身施加 <span style="color:#3aa675;font-weight:600">2</span> 层[先制](/powers/first_strike_power.md)
  3. 对每个敌人施加 <span style="color:#3aa675;font-weight:600">1</span> 层[烧伤](/powers/burn_power.md)和 <span style="color:#3aa675;font-weight:600">1</span> 层[焚烬](/powers/ash_power.md)
- **回合结束递减**：在拥有者一方回合结束时，层数 -<span style="color:#3aa675;font-weight:600">1</span>。
- **本地化术语说明**：荒灰天能力的本地化描述中作"灰烬"，实际指[焚烬](/powers/ash_power.md)能力。

## 相关卡牌

- [荒烬涂天](/cards/character/desolate_ash_sky.md)：打出时对自身施加 99 层荒灰天

## 源码

- `SeerDesolateAshSkyPower.cs`
