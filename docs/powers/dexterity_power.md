# 敏捷

<img src="/images/powers/dexterity_power.png" alt="敏捷" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 递减（计数型）
- **可见**: 是
- **允许负值**: 是
- **额外悬浮提示**: [格挡](/mechanics/block.md)

## 描述

敏捷会增加从卡牌中获得的格挡。

## 详细机制

- **格挡加成**：当卡牌来源的拥有者是自身，或无卡牌来源时目标是自身，且为卡牌/怪物招式格挡时，每层提供加法格挡修正。
  - **正层**：每层增加 <span style="color:#3aa675;font-weight:600">1</span> 点格挡获取量
  - **负层**：每层减少 <span style="color:#3aa675;font-weight:600">1</span> 点格挡获取量（如 <span style="color:#3aa675;font-weight:600">-3</span> 敏捷 = 格挡获取 <span style="color:#3aa675;font-weight:600">-3</span>）
- **允许负值**：可被"敏捷下降"等效果变为负数。
- **持续生效**：不像活力那样一次性消耗，每层持续提供加成。
- **附加悬浮提示**：鼠标悬停时显示"格挡"说明。

## 相关卡牌

- [宇宙胎动](/cards/character/cosmic_movement.md)（获得等量敏捷）

## 相关机制

- [格挡](/mechanics/block.md)（敏捷影响格挡获取量）

## 源码

- `DexterityPower.cs`（原版能力）
