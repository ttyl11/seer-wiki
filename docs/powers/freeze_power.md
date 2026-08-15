# 冰封

<img src="/images/powers/freeze_power.png" alt="冰封" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 减益（Debuff），列入[异常状态](/mechanics/abnormal-status.md)列表
- **叠加方式**: 叠加（Counter）
- **可见**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| 伤害降低 | 20 |
| 伤害降低百分比 | 20 |
| 冻伤层数 | 2 |

## 描述

攻击伤害降低<span style="color:#3aa675;font-weight:600">20</span>%。在你的回合结束时移除此状态，并获得<span style="color:#3aa675;font-weight:600">2</span>层[<span style="color:#d44;font-weight:600">冻伤</span>](/powers/frostbite_power.md)。

## 详细机制

- **攻击伤害降低**：
  - 当拥有者造成攻击伤害时，伤害降低 20%（乘以 0.8）
  - 减伤幅度固定 20%，**不随层数变化**——多层冰封仍是 20% 而非 40%
  - 仅影响攻击伤害，不影响[固定伤害](/powers/fixed_damage_power.md)等非攻击伤害
- **回合结束移除**：
  - 自身回合结束时，施加 2 层[冻伤](/powers/frostbite_power.md)（层数固定 2，不随冰封层数变化）
  - 然后**直接移除**冰封状态（非减 1 层，是全部移除）
  - 这意味着多层冰封无额外收益——减伤幅度和转化冻伤层数都是固定的

## 小贴士

- **单层即够**：减伤 20% 和转化 2 层冻伤都是固定值，不随层数变化，多层施加只会浪费。

## 相关能力

- [冻伤](/powers/frostbite_power.md)：冰封结束时施加的后续状态

## 相关卡牌

- [大雨滂沱](/cards/character/heavy_rain.md)（对所有敌人施加冰封 2 层）
- [天霜杀伐](/cards/character/heaven_frost_slaughter.md)（对所有敌人施加冰封 2 回合）
- [冰天花葬](/cards/character/ice_sky_flower_burial.md)
- [沧溟珠泪](/cards/character/ocean_pearl_tear.md)
- [曙光普照](/cards/character/shining_light.md)

## 源码

- `SeerFreezePower.cs`
