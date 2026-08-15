# 荣尽枯生

<img src="/images/cards/glory_exhaustion.png" alt="荣尽枯生" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 5
- **能量消耗**: 1
- **类型**: 技能
- **稀有度**: 罕见
- **目标**: 自身
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 格挡 | 7 | 11 |
| 反弹中毒层数 | 3 | 3 |
| 反弹持续回合 | 3 | 3 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 获得<span style="color:#3aa675;font-weight:600">7</span>点<span style="color:#d4a017;font-weight:600">格挡</span>。<span style="color:#3aa675;font-weight:600">3</span>回合内，受到伤害时对来源施加<span style="color:#3aa675;font-weight:600">3</span>层<span style="color:#d4a017;font-weight:600">中毒</span>。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 获得<span style="color:#3aa675;font-weight:600">11</span>点<span style="color:#d4a017;font-weight:600">格挡</span>。<span style="color:#3aa675;font-weight:600">3</span>回合内，受到伤害时对来源施加<span style="color:#3aa675;font-weight:600">3</span>层<span style="color:#d4a017;font-weight:600">中毒</span>。

## 小贴士

- **格挡+反弹双效**：1 费获得 7 [格挡](/mechanics/block.md)（升级后 11）+ 3 回合内受到伤害时对伤害来源施加 3 层[中毒](/powers/poison_power.md)，是防御+反击一体牌。
- **反弹机制**：获得[荣尽枯生](/powers/glory_exhaustion_power.md)能力后，3 回合内每次受到敌人伤害都对伤害来源施加 3 层中毒。多个敌人攻击时每次受击都触发——敌人攻击越频繁，中毒叠得越快。回合开始时反弹持续回合 -1。
- **中毒机制**：中毒生物在自身回合开始时失去生命（基础伤害 + 中毒层数÷除数），中毒层数每回合 -1。3 层中毒持续 3 回合，但多次受击会不断叠加。
- **格挡保底**：7 格挡（升级后 11）让你在反弹的同时不裸奔。反弹效果期间可以在格挡耗尽后故意承受伤害来叠加中毒。
- **配合建议**：配合高格挡/回血卡组在 3 回合内承受多次攻击，最大化中毒叠加。配合多段攻击牌在中毒叠加后收割。
- **升级的关键性**：格挡从 7 提升至 11，+57%。反弹效果不变。升级优先级中等——格挡提升幅度大，但核心价值在于反弹。
- **性价比**：1 费换 7 格挡 + 3 回合受伤反弹中毒，攻防一体性价比高。

## 相关能力

- [荣尽枯生](/powers/glory_exhaustion_power.md)（受伤时对来源施加中毒，持续 3 回合）
- [中毒](/powers/poison_power.md)（回合开始时受到伤害，每回合 -1 层）

## 相关机制

- [格挡](/mechanics/block.md)（获得 7/11 点格挡）

## 源码

- `SeerGloryExhaustion.cs`
