# 火种永存

<img src="/images/powers/eternal_flame_power.png" alt="火种永存" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 递减（计数型）
- **可见**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| 烧伤概率 | 70 |
| 固定伤害层数 | 5 |

## 描述

己方回合开始时，对每个敌人有 <span style="color:#3aa675;font-weight:600">70</span>% 概率施加 <span style="color:#3aa675;font-weight:600">1</span> 层[焚烬](/powers/ash_power.md)；若焚烬层数未增加（抵抗或免疫），则施加 <span style="color:#3aa675;font-weight:600">5</span> 层[固定伤害](/powers/fixed_damage_power.md)。回合结束时层数 -<span style="color:#3aa675;font-weight:600">1</span>。

## 详细机制

- **回合开始触发**：拥有者一方回合开始前：
  1. 生成随机数，若 ≤ 70% 则标记触发焚烬
  2. 对每个可攻击的敌人：
     - 记录焚烬施加前的层数
     - 若触发焚烬，对敌人施加 <span style="color:#3aa675;font-weight:600">1</span> 层[焚烬](/powers/ash_power.md)
     - 记录焚烬施加后的层数
     - 若焚烬层数未增加（即敌人抵抗或免疫），施加 <span style="color:#3aa675;font-weight:600">5</span> 层[固定伤害](/powers/fixed_damage_power.md)
  3. 层数 -<span style="color:#3aa675;font-weight:600">1</span>
- **随机数选择**：使用同步随机数（杂项用途），确保多端一致。

## 相关卡牌

- [火种永存](/cards/character/eternal_flame.md)：打出时获得此能力

## 源码

- `SeerEternalFlamePower.cs`
