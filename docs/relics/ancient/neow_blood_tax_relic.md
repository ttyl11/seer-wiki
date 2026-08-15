# 汲血珍匣

<img src="/images/relics/neow_blood_tax_relic.png" alt="汲血珍匣" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 先古

### 数值参数

| 参数 | 数值 |
|---|---|
| 生命损失 | 2 |

## 描述

拾起时，获得<span style="color:#3aa675;font-weight:600">1</span>个随机 Seer <span style="color:#d4a017;font-weight:600">[稀有遗物](/relics/all.md)</span>。每场战斗开始时，失去<span style="color:#3aa675;font-weight:600">2</span>点生命。

- **遗物筛选**：从所有 Seer 稀有遗物中随机抽选 1 个。
- **去重逻辑**：优先选择玩家尚未拥有的稀有遗物；仅当全部已拥有时才允许重复。
- **生命损失**：战斗开始前遗物闪烁，对拥有者造成 2 点不可格挡 HP 损失（类似中毒的 HP 流失）。

## 风味文字

<span style="color:#d44;font-weight:600">稀有。</span>

## 小贴士

- **白嫖 1 个稀有遗物 + 每场战斗 -2 HP**：拾起即得 1 个 Seer 稀有遗物，相当于多开一个稀有遗物槽。代价是每场战斗开始固定失去 2 点生命，类似中毒的不可格挡 HP 损失，格挡无法抵消。
- **优先补全稀有图鉴**：随机池优先抽未拥有的稀有遗物，只有全收集后才允许重复，等于稳定往稀有遗物栏里塞新货。
- **代价需要回血兜底**：长跑图里每场战斗 -2 HP 累积相当可观，需要回血药水、休息点或回血遗物兜底，否则容易被慢慢耗死。
- **性价比**：先古稀有度合理——1 个稀有遗物换每场战斗 2 HP，价值看补全稀有遗物栏的收益。

## 源码

- `SeerNeowBloodTaxRelic.cs`
