# 神明送葬

> **归属**：玩家可施加
> **施加来源**：玩家获得——[神明送葬](/cards/character/god_funeral.md)（卡牌）

<img src="/images/powers/god_funeral_power.png" alt="神明送葬" style="max-width:120px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 减益（Debuff）
- **叠加方式**: 计数器（按层数叠加）
- **可见**: 是

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 触发次数 | 2 | 4 |
| 圣诰层数 | 3 | 3 |

## 描述

下<span style="color:#3aa675;font-weight:600">2</span>次受到伤害时，为所有敌人施加<span style="color:#3aa675;font-weight:600">3</span>层[<span style="color:#9b59b6;font-weight:600">圣诰</span>](/powers/holy_edict_power.md)。

## 详细机制

- **触发时机**：在拥有者受到伤害后触发。
- **触发条件**：拥有者本人受到伤害、伤害 > 0、且层数 > 0。
- **圣诰施加**：对所有可攻击的敌人施加 <span style="color:#3aa675;font-weight:600">3</span> 层[圣诰](/powers/holy_edict_power.md)。
- **次数递减**：每次触发后层数 -<span style="color:#3aa675;font-weight:600">1</span>，归零后自动移除。
- **叠加特性**：按计数叠加，多次施加合并剩余次数。

## 相关能力

- [圣诰](/powers/holy_edict_power.md)（对敌人施加的减益）
- [邪魇形态](/powers/evil_form_power.md)（神明送葬卡牌同时进入此形态）

## 相关卡牌

- [神明送葬](/cards/character/god_funeral.md)（获得 2 次触发，升级后 4 次）

## 源码

- `SeerGodFuneralPower.cs`
