# 夏花之灿

<img src="/images/cards/summer_bloom.png" alt="夏花之灿" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 10
- **能量消耗**: 1
- **类型**: 技能
- **稀有度**: 普通
- **目标**: 自身
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 格挡 | 8 | 12 |
| 免疫回合 | 2 | 2 |
| PP | 10 | 10 |
| 最大PP | 10 | 10 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">10</span>/<span style="color:#3aa675;font-weight:600">10</span> 获得<span style="color:#3aa675;font-weight:600">8</span>点[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)。<span style="color:#3aa675;font-weight:600">2</span>回合内免疫[<span style="color:#d4a017;font-weight:600">固定伤害</span>](/powers/fixed_damage_power.md)。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">10</span>/<span style="color:#3aa675;font-weight:600">10</span> 获得<span style="color:#3aa675;font-weight:600">12</span>点[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)。<span style="color:#3aa675;font-weight:600">2</span>回合内免疫[<span style="color:#d4a017;font-weight:600">固定伤害</span>](/powers/fixed_damage_power.md)。

## 详细机制

- **格挡 + 固伤免疫双防**：获得 8 点格挡（挡普通攻击伤害），同时获得 2 回合固定伤害免疫（挡不受格挡影响的固伤效果）。
- **免疫窗口对齐固伤结算时机**：固定伤害在你回合开始时结算，免疫正是覆盖这个结算点——施加当回合结束不衰减（跳过第一次衰减），2 层精确覆盖接下来 2 个回合开始时的固伤结算，不缩水。
- **升级只强化格挡**：格挡 8 → 12，固伤免疫仍为 2 回合。

## 小贴士

- **格挡加固伤免疫的双重防御**：获得 <span style="color:#3aa675;font-weight:600">8</span> 点[格挡](/mechanics/block.md)挡普通攻击伤害，同时 <span style="color:#3aa675;font-weight:600">2</span> 回合内免疫[固定伤害](/powers/fixed_damage_power.md)挡不受格挡影响的固伤能力。两种防御覆盖不同伤害类型，叠起来几乎无死角。
- **"2 回合"是足额的两回合**：施加当回合结束跳过衰减，不会"打出的那个回合结束时被白扣一层"——2 层免疫完整覆盖接下来 2 个回合开始时的固伤结算。面对固伤 Boss 时可以放心提前一回合铺开。
- **固伤免疫在这个 mod 里格外值钱**：神印、致命印记、部分诅咒效果走的都是固定伤害——格挡对它们完全无效，只有这类免疫能挡。打固伤型 Boss（如高频固伤跳字的精英）前提前挂好，2 回合的免固伤窗口往往就是爆发输出的安全期。
- **升级只加格挡不延长免疫**：升级后格挡从 <span style="color:#3aa675;font-weight:600">8</span> 提升到 <span style="color:#3aa675;font-weight:600">12</span>，免疫回合数不变（仍为 <span style="color:#3aa675;font-weight:600">2</span> 回合）。升级强化的是"硬扛普通攻击"的能力，不延长固伤免疫窗口——如果你拿它主要是为了免固伤，升级优先级可以放低。
- **性价比**：1 费合理——8 格挡加 2 回合固伤免疫的组合防御，在固伤 Boss 战中价值极高，普通战中也不亏。

## 相关能力

- [固定伤害](/powers/fixed_damage_power.md)（免疫对象）

## 相关机制

- [格挡](/mechanics/block.md)

## 源码

- `SeerSummerBloom.cs`
