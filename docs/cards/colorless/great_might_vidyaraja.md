# 大威势明王

<img src="/images/cards/great_might_vidyaraja.png" alt="大威势明王" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 无色牌
- **能量消耗**: 10
- **类型**: 能力
- **稀有度**: 罕见
- **目标**: 自身
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 基础耗能 | 10 | 8 |

## 描述

每损失<span style="color:#3aa675;font-weight:600">10</span>%生命，耗能<span style="color:#3aa675;font-weight:600">-1</span>。将所有敌人生命比例调整至与自身相同。本场战斗受击时反转其[<span style="color:#d4a017;font-weight:600">全属性</span>](/mechanics/all_attributes.md)提升。

## 升级后

每损失<span style="color:#3aa675;font-weight:600">10</span>%生命，耗能<span style="color:#3aa675;font-weight:600">-1</span>。将所有敌人生命比例调整至与自身相同。本场战斗受击时反转其[<span style="color:#d4a017;font-weight:600">全属性</span>](/mechanics/all_attributes.md)提升。（基础耗能 <span style="color:#3aa675;font-weight:600">-2</span>）

## 小贴士

- **动态耗能**：每损失 <span style="color:#3aa675;font-weight:600">10</span>% 生命，耗能 -1，最多减至 <span style="color:#3aa675;font-weight:600">0</span>。
- **生命比例调整**：将每个敌人的当前生命比例调整至与自身相同。若敌人生命比例高于自身，造成差额伤害；若低于自身，则治疗差额。
- **受击反转全属性**：施加[大威势明王能力](/powers/great_might_vidyaraja_power.md)。受击时，对所有敌人检测其全属性（力量/命中/防御/速度），若为正值则施加 -2 倍当前值（即反转其增益）。
- **升级效果**：基础耗能降低 <span style="color:#3aa675;font-weight:600">2</span>（从 <span style="color:#3aa675;font-weight:600">10</span> 降至 <span style="color:#3aa675;font-weight:600">8</span>）。

## 相关能力

- [大威势明王](/powers/great_might_vidyaraja_power.md)（受击时反转敌人全属性）

## 相关机制

- [全属性](/mechanics/all_attributes.md)（力量/防御/命中/速度）

## 源码

- `SeerGreatMightVidyaraja.cs`
