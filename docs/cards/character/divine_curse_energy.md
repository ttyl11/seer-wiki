# 神域咒能

<img src="/images/cards/divine_curse_energy.png" alt="神域咒能" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 5
- **能量消耗**: 0
- **类型**: 技能
- **稀有度**: 普通
- **目标**: 无
- **可升级**: 是（1 级）
- **关键词**: 虚无（升级后移除）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 虚无 | 是 | 否 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: 5/5 [<span style="color:#d4a017;font-weight:600">虚无</span>](/mechanics/ethereal.md)。你每有一个塔罗遗物，获得<span style="color:#3aa675;font-weight:600">1</span>点[<span style="color:#d4a017;font-weight:600">能量</span>](/mechanics/energy.md)。

## 升级后

PP: 5/5 你每有一个塔罗遗物，获得<span style="color:#3aa675;font-weight:600">1</span>点[<span style="color:#d4a017;font-weight:600">能量</span>](/mechanics/energy.md)。

## 小贴士

- **塔罗遗物转能量**：每拥有一个塔罗遗物，获得 1 点[能量](/mechanics/energy.md)。计数口径是"塔罗体系遗物"——22 张大阿尔卡那（愚者、魔术师、女祭司、女皇、皇帝、教皇、恋人、战车、力量、隐者、命运之轮、正义、倒吊人、死神、节制、恶魔、高塔、星星、月亮、太阳、审判、世界），**外加同样属于塔罗体系的商店遗物[学神](/relics/shop/study_god.md)**（预测打牌数结算奖励的那位）。拥有 5 个 → 每次打出获得 5 点能量。
- **只认塔罗体系**：⚠️ 先古塔罗（[天启帝君](/relics/legendary/apocalypse_emperor.md)、[混元天尊](/relics/legendary/primordial_tianzun.md)、[重生之翼](/relics/legendary/rebirth_wings.md)、[圣灵谱尼](/relics/legendary/specter.md)）和先古 Neow 系列遗物虽然名字里带"塔罗"或归类相近，但属于不同的遗物分类，**不会被这张牌计数**。
- **0 费能量引擎**：0 费打出获得能量，等于"0 费换 N 费"——净赚 N 点能量。塔罗遗物越多，能量收益越高。在塔罗流中可以轻松实现每回合 5+ 能量的爆发。
- **虚无的代价**：带有[虚无](/mechanics/ethereal.md)关键词，回合结束时若在[手牌](/mechanics/hand.md)中则被[消耗](/mechanics/exhaust.md)。意味着**每回合只能选择打出或消耗**——不能保留到下回合。如果手牌中有这张牌但本回合不想打出（如能量已满），它会被白白消耗。
- **配合建议**：配合大量塔罗遗物时价值最高——每多一个塔罗遗物就多 1 点能量。配合高费卡牌（如[龙舞九天](./dragon_dance_nine_heavens.md)的 9 费、[千秋龙威](./dragon_awe.md)的 4 费）可以提供能量支撑。虚无意味着打出时机要选好——要么当回合打出赚能量，要么接受被消耗。
- **升级的价值**：移除[虚无](/mechanics/ethereal.md)关键词。注意这**不是**获得[保留](/mechanics/retain.md)——升级后此牌回合结束时仍会正常弃置，只是从"被[消耗](/mechanics/exhaust.md)"变成"进弃牌堆"。价值在于牌可循环：弃牌堆洗回抽牌堆后还能再抽再打，而虚无版一旦没打出去就白亏一张。升级让它从"一次性"变成"可循环"，优先级高。
- **性价比**：0 费换能量的效率取决于塔罗遗物数。无塔罗遗物时无价值，5 个塔罗遗物时 0 费换 5 能量（超值）。作为普通牌容易获取，是塔罗流的核心组件。

## 相关机制

- [虚无](/mechanics/ethereal.md)（升级后移除的关键词）
- [能量](/mechanics/energy.md)（获得能量）

## 源码

- `SeerDivineCurseEnergy.cs`
