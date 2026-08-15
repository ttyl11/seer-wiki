# 神灵救世光

<img src="/images/cards/divine_salvation_light.png" alt="神灵救世光" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 先古牌
- **最大PP**: 7
- **能量消耗**: 0
- **类型**: 攻击
- **稀有度**: 先古
- **目标**: 敌方单体
- **可升级**: 否
- **关键词**: [真神](/mechanics/true_god.md)

### 数值参数

| 参数 | 数值 |
|---|---|
| PP | 7 |
| 最大PP | 7 |

## 描述

PP: 7/7<br/>造成<span style="color:#3aa675;font-weight:600">|[抽牌堆](/mechanics/draw_pile.md)-[弃牌堆](/mechanics/discard_pile.md)|</span>伤害。恢复<span style="color:#3aa675;font-weight:600">[消耗牌堆](/mechanics/exhaust_pile.md)数</span>生命。将一张随机[<span style="color:#d4a017;font-weight:600">真神</span>](/mechanics/true_god.md)牌放入[<span style="color:#d4a017;font-weight:600">真神牌堆</span>](/mechanics/true-god-pile.md)。打出<span style="color:#3aa675;font-weight:600">7</span>次，每次消耗1PP。

## 小贴士

- **真神关键词**：此牌只能被自动打出，不能手动打出。只能被[奇巧](/mechanics/sly.md)、破灭等强制打出效果触发。
- **PP 消耗机制**：打出后循环执行 <span style="color:#3aa675;font-weight:600">7</span> 次（等于当前 PP 值），每次消耗 1 PP。
- **伤害计算**：伤害为抽牌堆与弃牌堆数量之差的绝对值。造成攻击伤害（受[力量](/powers/strength_power.md)/[易伤](/powers/vulnerable_power.md)影响）。
- **回复机制**：回复量等于[消耗牌堆](/mechanics/exhaust_pile.md)中的卡牌数量，回复生命。
- **真神牌堆**：将一张随机[真神](/mechanics/true_god.md)牌添加到[真神牌堆](/mechanics/true-god-pile.md)。
- **循环终止**：每次循环后检查目标是否存活，目标死亡时立即终止循环。

## 相关机制

- [真神](/mechanics/true_god.md)（只能被自动打出）
- [抽牌堆](/mechanics/draw_pile.md)（伤害计算依据）
- [弃牌堆](/mechanics/discard_pile.md)（伤害计算依据）
- [消耗牌堆](/mechanics/exhaust_pile.md)（回复量计算依据）

## 源码

- `SeerDivineSalvationLight.cs`
