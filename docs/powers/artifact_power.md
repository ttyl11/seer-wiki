# 人工制品

<img src="/images/powers/artifact_power.png" alt="人工制品" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 递减（计数型）
- **可见**: 是
- **多人同步缩放**: 是
- **来源**: 原版

### 数值参数

无（层数即抵消次数）

## 描述

[<span style="color:#d4a017;font-weight:600">免疫</span>]负面效果。

## 详细机制

- **抵消减益**：通过拦截受到的状态施加，当自身即将受到可见的减益时，将施加量改为 0，抵消此次减益。
- **抵消后递减**：成功抵消一次减益后，层数 -<span style="color:#3aa675;font-weight:600">1</span>。
- **仅限可见减益**：不可见的减益能力不会被人工制品抵消。
- **多人同步缩放**：多人模式下，施加量额外增加（玩家数 - 1），确保多端每人都能抵消。
- **不免疫增益**：仅对减益生效，增益和中性能力不受影响。

## 相关卡牌

- [大数回廊](/cards/character/great_number_corridor.md)（获得 1 层人工制品，抵消减益后清除对手全属性）
- [冰天花葬](/cards/character/ice_sky_flower_burial.md)（获得 1 层人工制品）
- [沦·亡灵天灾](/cards/character/undead_catastrophe.md)（获得 1 层人工制品）

## 源码

- `ArtifactPower.cs`（原版，位于 `MegaCrit.Sts2.Core.Models.Powers`）
