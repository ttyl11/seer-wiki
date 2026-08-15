# 全属性

> mod 专有术语

## 基本信息

- **类型**: mod 专有术语
- **包含能力**: 力量、命中、防御、速度

## 描述

"全属性"是 mod 中的专有术语，指代以下四种能力：

| 能力 | 类型 | 说明 |
|---|---|---|
| [力量](/powers/strength_power.md) | 原版 | 攻击伤害增加层数点 |
| [命中](/powers/accuracy_power.md) | mod | 负层数时每层有概率使伤害降为 0 |
| [防御](/powers/defense_power.md) | mod | 每层减少 1 点受到的攻击伤害 |
| [速度](/powers/speed_power.md) | mod | 每 2 层影响 1 张抽牌数 |

## 相关卡牌

- [黎羽幻生](/cards/character/feather_phantom.md)（全属性+1）
- [宇宙运动](/cards/character/cosmic_movement.md)（全属性+1）

## 源码

- `SeerCosmicMovement.cs`（全属性施加逻辑）
- `SeerFeatherPhantom.cs`（全属性施加逻辑）
