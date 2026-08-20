# 镇魂歌

> **归属**：玩家可施加
> **施加来源**：玩家施加给敌方——[镇魂歌](/cards/character/requiem.md)（卡牌）

<img src="/images/powers/requiem_power.png" alt="镇魂歌" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 减益（Debuff）
- **叠加方式**: 叠加（Counter，层数 = 剩余回合数）
- **可见**: 是

## 描述

倒计时归零时死亡。同一目标只能施加一次（不刷新不叠加），不同目标可各挂一个。

## 详细机制

- **施加来源**：[镇魂歌](/cards/character/requiem.md)（普通战 <span style="color:#3aa675;font-weight:600">3</span> 回合，精英战 <span style="color:#3aa675;font-weight:600">6</span> 回合，Boss 房无效）。
- **倒计时递减**：敌方回合结束时 <span style="color:#3aa675;font-weight:600">-1</span>（玩家回合结束不计入），归零时直接击杀持有者——无视剩余血量与[格挡](/mechanics/block.md)。
- **不可刷新**：目标已有镇魂歌时再次施加无效（避免重置倒计时让怪物多活）。
- **不可加速**：没有任何手段能加速倒计时；击晕/石化只影响目标行动，不影响递减节奏。

## 相关卡牌

- [镇魂歌](/cards/character/requiem.md)（施加来源）

## 源码

- `SeerRequiemPower.cs`
- `SeerRequiem.cs`
