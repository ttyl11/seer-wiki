# 异常免疫·反弹

<img src="/images/powers/debuff_immune_reflect_power.png" alt="异常免疫·反弹" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 递减（计数型）
- **可见**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| 回合数 | 1 |
| 层数 | 1 |

> 注：实际施加时由卡牌指定回合数（如 [亢龙有悔](/cards/character/arrogant_dragon_repents.md) 施加 <span style="color:#3aa675;font-weight:600">2</span> 回合）。

## 描述

免疫[<span style="color:#d44;font-weight:600">异常状态</span>](/mechanics/abnormal-status.md)<span style="color:#3aa675;font-weight:600">层数</span>回合，并将受到的[<span style="color:#d44;font-weight:600">异常状态</span>](/mechanics/abnormal-status.md)反弹给所有敌人。在你的回合结束时减少<span style="color:#3aa675;font-weight:600">1</span>层。

## 详细机制

- **免疫判定**：通过拦截受到的状态施加来免疫。当自身即将受到异常状态时，将施加量改为 <span style="color:#3aa675;font-weight:600">0</span>，即完全免疫。
- **反弹机制**：免疫后将该异常状态记录，然后进行反弹处理。
- **反弹目标**：对所有可命中的敌人施加相同类型和层数的异常状态。
- **反弹不涉及随机**：反弹直接施加，确保多端同步。
- **不免疫自身**：不会免疫异常免疫和异常免疫·反弹自身，避免递归反弹。
- **不可见能力不免疫**：仅对可见的能力生效。
- **回合结束递减**：在拥有者一方回合结束时，层数 -<span style="color:#3aa675;font-weight:600">1</span>。
- **与异常免疫的区别**：异常免疫仅免疫不反弹；异常免疫·反弹在免疫的同时将异常状态反弹给所有敌人。

## 相关卡牌

- [亢龙有悔](/cards/character/arrogant_dragon_repents.md)（施加 <span style="color:#3aa675;font-weight:600">2</span> 回合异常免疫·反弹，升级后 <span style="color:#3aa675;font-weight:600">4</span> 回合）

## 相关能力

- [异常免疫](/powers/debuff_immune_power.md)（不带反弹的版本）

## 源码

- `SeerDebuffImmuneReflectPower.cs`
