# 低等精灵

<img src="/images/cards/low_elf.png" alt="低等精灵" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 无色牌
- **能量消耗**: 1
- **类型**: 能力
- **稀有度**: 普通
- **目标**: 自身
- **可升级**: 是（1 级）

## 描述

每回合开始时，向[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)加入一张赛尔普通卡。

## 升级后

每回合开始时，向[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)加入一张<span style="color:#d4a017;font-weight:600">升级</span>的赛尔普通卡。

## 小贴士

- **触发机制**：打出后获得相应增益能力，此后每回合持续生效。
- **生成卡牌**：在拥有者回合开始时，从赛尔角色牌中筛选稀有度为普通的卡牌，随机抽取一张加入[手牌](/mechanics/hand.md)顶部。
- **升级效果**：升级后，生成出的卡牌会自动升级。
- **仅生成角色牌**：只会生成赛尔角色牌，不会生成状态牌或诅咒牌。

## 源码

- `SeerLowElf.cs`
- `SeerLowElfPower.cs`（`Core/Models/Powers/`）
