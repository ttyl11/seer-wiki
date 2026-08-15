# 辉·沧天逆流拳

<img src="/images/cards/sky_fist.png" alt="辉·沧天逆流拳" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 7
- **能量消耗**: 7
- **类型**: 攻击
- **稀有度**: 稀有
- **目标**: 所有敌方
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 基础耗能 | 7 | 7 |
| 单次伤害 | 7 | 7 |
| PP | 7 | 7 |
| 最大PP | 7 | 7 |
| 保留 | 无 | 有 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">7</span>/<span style="color:#3aa675;font-weight:600">7</span> [<span style="color:#d4a017;font-weight:600">消耗牌堆</span>](/mechanics/exhaust_pile.md)每有一张牌，此牌耗能<span style="color:#3aa675;font-weight:600">-1</span>。对所有敌人造成<span style="color:#3aa675;font-weight:600">7</span>点伤害×[<span style="color:#d4a017;font-weight:600">消耗牌堆</span>](/mechanics/exhaust_pile.md)数量。附加等于已消耗PP总值的[<span style="color:#d4a017;font-weight:600">固定伤害</span>](/powers/fixed_damage_power.md)。

## 升级后

[<span style="color:#d4a017;font-weight:600">保留</span>](/mechanics/retain.md)。PP: <span style="color:#3aa675;font-weight:600">7</span>/<span style="color:#3aa675;font-weight:600">7</span> [<span style="color:#d4a017;font-weight:600">消耗牌堆</span>](/mechanics/exhaust_pile.md)每有一张牌，此牌耗能<span style="color:#3aa675;font-weight:600">-1</span>。对所有敌人造成<span style="color:#3aa675;font-weight:600">7</span>点伤害×[<span style="color:#d4a017;font-weight:600">消耗牌堆</span>](/mechanics/exhaust_pile.md)数量。附加等于已消耗PP总值的[<span style="color:#d4a017;font-weight:600">固定伤害</span>](/powers/fixed_damage_power.md)。

## 小贴士

- **消耗越多越强的雪球核弹**：这张牌的所有维度都跟着[消耗牌堆](/mechanics/exhaust_pile.md)走——堆里有 N 张牌，耗能就降为 7−N（最低 0），同时主伤害就是 7×N 打全体。前期堆里没东西时它是一张 7 费打 7 的废铁，后期堆里十几张牌时它变成 0 费打上百的核弹。**这是一张典型的"靠消耗体系养出来的终结技"**，单卡强度完全取决于你的消耗产出门槛。
- **双轴加成要分清**：主伤害按"消耗堆牌数"线性放大，附加的[固定伤害](/powers/fixed_damage_power.md)则按"你所有 PP 牌累计已消耗的 PP 总值"计算（每张 PP 牌贡献 最大PP − 当前PP）。两个轴互相独立——你可以靠大量低 PP 消耗牌堆牌数，也可以靠几张高 PP 牌烧 PP 撑固伤，最理想是两者都堆起来。
- **固伤是回合开始才结算的延迟伤害**：附加的固定伤害以减益形式挂在每个敌人身上，**到敌人自己回合开始时才扣血**（之后移除）。这意味着它不能当回合补刀，但好处是**无视格挡、无视攻击伤害减免**，对叠甲/减伤型 Boss 极其有效。注意敌人若有"免疫固定伤害"类能力（如[坚毅](/powers/resolve_power.md)、[圣谕形态](/powers/divine_form_power.md)）会直接抵消。
- **0 费不是免费，要算好时机**：耗能最低降到 0，但打出它依然占一次出牌。所以"0 费"只意味着不花能量，不代表无代价。最适合在消耗堆已养厚、本回合又有足够能量/出牌次数打出前置消耗牌之后，作为收尾核弹使用。
- **升级给保留是质变**：升级后获得[保留](/mechanics/retain.md)，回合结束不弃置，可以一直攥在手里等消耗堆养到峰值再打。**没有升级时它容易烂在手牌里**——7 费打不出去又占手位，反而拖累节奏。所以这张牌的升级优先级极高，拿到就该优先升。
- **配合消耗体系才有意义**：天然适配一切产消耗的牌/遗物/能力。先打消耗牌把堆养厚，最后用此牌收割。不适合无消耗体系的卡组——纯靠它自己，7 费打 7 完全不值。
- **性价比**：7 费基础价看似离谱，但实际随消耗堆递减，养满后是 0 费核弹，属于"后期超模、前期废物"的设计。升级给保留后从"难用"变"核心"，强烈建议升级后再投入实战。

## 相关能力

- [固定伤害](/powers/fixed_damage_power.md)（附加的延迟固伤减益）

## 相关机制

- [消耗牌堆](/mechanics/exhaust_pile.md)（耗能与主伤害的双轴来源）
- [保留](/mechanics/retain.md)（升级获得的关键词）

## 源码

- `SeerSkyFist.cs`
