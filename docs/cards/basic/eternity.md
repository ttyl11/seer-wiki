# 永恒

<img src="/images/cards/eternity.png" alt="永恒" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 基础牌
- **最大PP**: 1
- **能量消耗**: 1
- **类型**: 技能
- **稀有度**: 基础
- **目标**: 自身
- **可升级**: 是（1 级）
- **对应先古牌**: [圣光吟诵](/cards/ancient/holy_chant.md)（由[起源流转](/relics/starter/origin_shift.md)转化）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 格挡 | 6 | 10 |
| PP | 1 | 1 |
| 最大PP | 1 | 1 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 获得<span style="color:#3aa675;font-weight:600">6</span>点[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)。恢复[手牌](/mechanics/hand.md)、[抽牌堆](/mechanics/draw_pile.md)、[弃牌堆](/mechanics/discard_pile.md)、[消耗牌堆](/mechanics/exhaust_pile.md)中所有卡牌的PP值。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 获得<span style="color:#3aa675;font-weight:600">10</span>点[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)。恢复[手牌](/mechanics/hand.md)、[抽牌堆](/mechanics/draw_pile.md)、[弃牌堆](/mechanics/discard_pile.md)、[消耗牌堆](/mechanics/exhaust_pile.md)中所有卡牌的PP值。

## 小贴士

- **核心定位**：1 费基础技能牌，谱尼初始卡牌之一。6 点格挡 + 恢复所有 PP，是 mod 中少有的"PP 重置"卡——让所有 PP 耗尽的卡牌重新可用。基础牌性价比合理，是长线战斗的 PP 续航核心。
- **恢复 PP（核心价值）**：将所有角色牌的 PP 重置为各自的最大 PP 值，范围覆盖[手牌](/mechanics/hand.md)、[抽牌堆](/mechanics/draw_pile.md)、[弃牌堆](/mechanics/discard_pile.md)、[消耗牌堆](/mechanics/exhaust_pile.md)中的所有卡牌。每场战斗开始时 PP 本就会自动回满，而战斗内能把**全部**卡牌 PP 一次性回满的手段很少（另如[烬灭之拥](./ruin_embrace.md)），永恒是其中最基础、最稳定的一个——PP 耗尽的强力卡牌可以重新使用，价值巨大。
- **自身也可反复使用**：恢复范围包括永恒自己——打出后自身 PP 会回到满值，所以只要有能量，永恒可以每回合都打。这是它作为基础牌的核心续航逻辑。
- **PP 续航策略**：PP 耗尽后的卡牌变成"废牌"。永恒可以让所有废牌重新激活——在长线战斗中（如 Boss 战），这是扭转局势的关键。建议在多张卡牌 PP 耗尽后再使用，最大化恢复收益。
- **格挡（附属防御）**：获得 <span style="color:#3aa675;font-weight:600">6</span> 点[格挡](/mechanics/block.md)，当回合有效。格挡是附属效果——核心价值是恢复 PP，格挡只是额外防御。升级后提升到 <span style="color:#3aa675;font-weight:600">10</span> 点，能扛住一波中型攻击。
- **配合建议**：
 - **PP 依赖体系**：配合高 PP 消耗的攻击/技能牌（PP 1 的强力牌）可以反复使用——恢复 PP 后再次打出，让主力牌不"断粮"。
 - 注意能力牌打出后效果常驻，恢复 PP 对能力牌无意义——配合对象应是非能力的高 PP 牌。
 - 在 Boss 战中，等主力卡牌 PP 耗尽后再用永恒恢复，最大化收益。
- **升级的关键性**：耗能不变（保持 <span style="color:#3aa675;font-weight:600">1</span> 费），[格挡](/mechanics/block.md)从 <span style="color:#3aa675;font-weight:600">6</span> 提升到 <span style="color:#3aa675;font-weight:600">10</span>。升级价值中高——防御量显著提升，让这张牌从"PP 工具"变成"PP 工具 + 合格防御"，更值得打出。
- **性价比**：1 费 6 点格挡 + 恢复所有 PP（含自身），可反复使用。基础牌性价比合理——恢复 PP 的价值远超 6 点格挡。适合 PP 依赖体系和长线 Boss 战，是谱尼的核心续航卡。

## 相关机制

- [格挡](/mechanics/block.md)（获得 6 点格挡，升级后 10 点）
- [手牌](/mechanics/hand.md)（恢复 PP 的卡牌位置之一）
- [抽牌堆](/mechanics/draw_pile.md)（恢复 PP 的卡牌位置之一）
- [弃牌堆](/mechanics/discard_pile.md)（恢复 PP 的卡牌位置之一）
- [消耗牌堆](/mechanics/exhaust_pile.md)（恢复 PP 的卡牌位置之一）

## 源码

- `SeerEternity.cs`
