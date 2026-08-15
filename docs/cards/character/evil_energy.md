# 邪恶能源

<img src="/images/cards/evil_energy.png" alt="邪恶能源" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 3
- **能量消耗**: 0
- **类型**: 技能
- **稀有度**: 普通
- **目标**: 无
- **关键词**: [邪恶](/mechanics/evil.md)
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 每同名牌伤害 | 1 | 1 |
| 每同名牌抽牌 | 1 | 1 |
| PP | 3 | 3 |
| 最大PP | 3 | 3 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">3</span>/<span style="color:#3aa675;font-weight:600">3</span> 扣除[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)同名牌数的生命，获得等量[<span style="color:#d4a017;font-weight:600">能量</span>](/mechanics/energy.md)，抽等量牌。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">3</span>/<span style="color:#3aa675;font-weight:600">3</span> [<span style="color:#d4a017;font-weight:600">虚无</span>](/mechanics/ethereal.md)。扣除[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)同名牌数的生命，获得等量[<span style="color:#d4a017;font-weight:600">能量</span>](/mechanics/energy.md)，抽等量牌。

## 小贴士

- **核心定位**：0 费邪恶能量生成卡，配合同名牌滚雪球。扣除手牌同名牌数的生命，获得等量能量+抽等量牌。是 mod 中少有的"自伤换能+抽牌"双效卡——配合邪恶关键词复制，同名牌越多收益越高。普通稀有度合理，需要配合才能发挥价值。
- **邪恶关键词（复制引擎）**：打出时，本场战斗结束后向[牌组](/mechanics/draw_pile.md)中添加一张此牌的复制品。每张牌的这个词条每场战斗只触发一次。这意味着**每场战斗后牌组中的此牌数量 +1**——战斗越多，同名牌越多，能量和抽牌收益越高。
- **同名牌机制（核心价值）**：统计[手牌](/mechanics/hand.md)中**其他同名牌**的数量，对自身造成该数量 × 1 点不可[格挡](/mechanics/block.md)的非攻击伤害，获得等量能量，抽等量牌。若手牌没有其他同名牌，则什么都不发生。示例：
 - 手牌有 1 张同名牌：自伤 1 点，获得 1 能量，抽 1 牌
 - 手牌有 3 张同名牌：自伤 3 点，获得 3 能量，抽 3 牌
 
 配合邪恶关键词，同名牌数量滚雪球增长，收益指数上升。
- **自伤代价**：每张同名牌扣 1 点生命（不可格挡的非攻击伤害）。配合邪恶复制，后期手牌可能有 5-6 张同名牌，自伤 5-6 点——需要配合体力恢复或控制同名牌数量。
- **虚无（升级后）**：[虚无](/mechanics/ethereal.md)关键词——回合结束时若仍在[手牌](/mechanics/hand.md)中，此牌被[消耗](/mechanics/exhaust_pile.md)。与邪恶关键词配合：邪恶在战斗结束后复制此牌到牌组，而虚无确保打出的牌不会滞留[手牌](/mechanics/hand.md)——避免手牌堆积同名牌导致自伤过大。
- **配合建议**：
 - **邪恶滚雪球流**：配合[邪·众生显形](./evil_all_beings_manifest.md)（同名牌消耗翻倍）可以形成邪恶体系——邪恶能源扩充同名牌，众生显形消耗同名牌翻倍伤害。
 - 配合体力恢复（如[能量滋养](./energy_nurture.md)）可以抵消自伤代价，形成"自伤+治疗"循环。
 - 升级后虚无配合邪恶，确保同名牌不会全部滞留手牌。
- **升级的关键性**：仅添加虚无关键词，数值参数不变。升级价值中等——虚无控制手牌同名牌数量，避免自伤过大，但核心机制不变。升级优先级中等。
- **性价比**：0 费换能量+抽牌，代价是自伤。邪恶复制让牌组不断扩充，长线收益高。普通稀有度合理——需要配合邪恶体系才能发挥价值。适合邪恶流和能量爆发流体系。

## 相关机制

- [邪恶](/mechanics/evil.md)（mod 关键词）
- [虚无](/mechanics/ethereal.md)（升级后获得的关键词）
- [能量](/mechanics/energy.md)（获得等量能量）
- [手牌](/mechanics/hand.md)（统计手牌同名牌数）

## 源码

- `SeerEvilEnergy.cs`
