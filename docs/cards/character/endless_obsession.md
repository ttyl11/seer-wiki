# 无终痴念

<img src="/images/cards/endless_obsession.png" alt="无终痴念" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 5
- **能量消耗**: 1
- **类型**: 技能
- **稀有度**: 罕见
- **目标**: 自身
- **关键词**: [预见](/mechanics/scry.md)
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 每抽牌体力损失 | 1 | 1 |
| 最大抽牌数 | 20 | 20 |
| 预见数量 | 3 | 3 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: 5/5 [<span style="color:#d4a017;font-weight:600">预见</span>](/mechanics/scry.md)<span style="color:#3aa675;font-weight:600">3</span>。抽牌直到抽到能力牌，每抽一张扣除<span style="color:#3aa675;font-weight:600">1</span>点体力。

## 升级后

PP: 5/5 [<span style="color:#d4a017;font-weight:600">预见</span>](/mechanics/scry.md)<span style="color:#3aa675;font-weight:600">3</span>。抽牌直到抽到能力牌，每抽一张扣除<span style="color:#3aa675;font-weight:600">1</span>点体力。

> 升级后耗能降至 <span style="color:#3aa675;font-weight:600">0</span>。

## 小贴士

- **核心定位**：1 费技能牌，用于定向检索能力牌（Power 类型）。预见 3 + 抽牌直到找到能力牌，是 mod 中少有的"定向检索"卡牌。适合能力牌为核心的体系——确保关键能力牌及时上手，代价是体力。罕见稀有度合理，检索能力本就稀有。
- **预见辅助（规划工具）**：[预见](/mechanics/scry.md) 3 让你先看[抽牌堆](/mechanics/draw_pile.md)顶 3 张牌，判断能力牌的位置。如果顶 3 张有能力牌，代价很小（最多抽 2-3 张）；如果能力牌在深处，代价会很大（可能抽 10+ 张）。预见是这张牌的"风险预警"——先用预见评估，再决定是否值得抽。
- **抽牌机制**：循环抽牌（最多 <span style="color:#3aa675;font-weight:600">20</span> 次），每次抽 1 张后检查是否为能力牌。若抽到能力牌或[抽牌堆](/mechanics/draw_pile.md)为空则停止。最坏情况抽 20 张扣 20 点体力——这是"赌命"检索，需要配合预见评估风险。
- **体力代价（不可格挡）**：每抽一张牌扣除 <span style="color:#3aa675;font-weight:600">1</span> 点体力，不可[格挡](/mechanics/block.md)且非攻击伤害。体力越低越危险——残血时使用可能自杀。建议在满血或高血量时使用。
- **配合建议**：
 - **能力牌核心体系**：配合大量能力牌的牌组，能力牌密度高时检索代价小——顶 3 张大概率有能力牌。
 - 配合体力恢复（如[能量滋养](./energy_nurture.md)）可以抵消体力代价，形成"检索+回复"循环。
 - 配合抽牌堆操控（如洗牌、排序）可以让能力牌出现在顶部，降低检索代价。
 - 不适合能力牌稀少的体系——检索代价会很大，可能抽 10+ 张扣 10+ 点体力。
- **升级的关键性**：耗能从 <span style="color:#3aa675;font-weight:600">1</span> 降至 <span style="color:#3aa675;font-weight:600">0</span>。升级价值高——0 费检索不占用能量，可以在任意回合使用，性价比大幅提升。升级优先级高，建议尽早升级。
- **性价比**：1 费换来定向检索能力牌 + 预见 3，代价是体力。罕见稀有度合理——检索能力本就稀缺。适合能力牌核心体系，不适合能力牌稀少的体系。

## 相关机制

- [预见](/mechanics/scry.md)（mod 关键词，预见 3）

## 源码

- `SeerEndlessObsession.cs`
