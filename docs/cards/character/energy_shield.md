# 能量护盾

<img src="/images/cards/energy_shield.png" alt="能量护盾" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

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
| 能量消耗 | 1 | 0 |
| 能量获取 | 2 | 2 |
| 每能量格挡 | 3 | 3 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: 5/5 获得<span style="color:#3aa675;font-weight:600">2</span>点[<span style="color:#d4a017;font-weight:600">能量</span>](/mechanics/energy.md)。每有1点[<span style="color:#d4a017;font-weight:600">能量</span>](/mechanics/energy.md)获得<span style="color:#3aa675;font-weight:600">3</span>点[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)。

## 升级后

PP: 5/5 获得<span style="color:#3aa675;font-weight:600">2</span>点[<span style="color:#d4a017;font-weight:600">能量</span>](/mechanics/energy.md)。每有1点[<span style="color:#d4a017;font-weight:600">能量</span>](/mechanics/energy.md)获得<span style="color:#3aa675;font-weight:600">3</span>点[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)。

> 升级后耗能降至 <span style="color:#3aa675;font-weight:600">0</span>。

## 小贴士

- **核心定位**：1 费能量+格挡双效卡。获得 2 点能量 + 每点能量 3 点格挡，净增 1 能量还能获得格挡。是 mod 中少有的"能量生成+防御"双效卡——既能补充能量供后续出牌，又能提供格挡防御。罕见稀有度合理，双效卡本就稀缺。
- **执行顺序（关键细节）**：先获得 <span style="color:#3aa675;font-weight:600">2</span> 点[能量](/mechanics/energy.md)，再读取当前能量计算[格挡](/mechanics/block.md)。所以格挡量包含刚获得的 2 点能量。打出此卡耗能 1，获得 2 能量后净增 1 能量——格挡按净增后的能量计算。
- **格挡计算**：格挡 = 当前[能量](/mechanics/energy.md) × <span style="color:#3aa675;font-weight:600">3</span>。示例（假设打出前有 3 能量）：
 - 未升级：打出后能量 = 3-1+2 = 4，格挡 = 4 × 3 = **12 点**
 - 升级后：打出后能量 = 3+2 = 5，格挡 = 5 × 3 = **15 点**
 
 能量越多，格挡越高——配合能量生成卡牌可以让格挡滚雪球。
- **配合建议**：
 - **能量爆发流**：配合[能量滋养](./energy_nurture.md)（X 耗能治疗）可以形成"能量护盾获能 → 能量滋养治疗"的续航循环。
 - 配合其它能量生成卡牌（如[电脉充能](./electric_pulse_charge.md)）可以积累大量能量，让格挡数值爆炸。
 - 配合高耗能体系可以在关键回合同时获得能量和格挡——攻防一体。
 - 配合[能量](./energy.md)（反弹卡）可以让能量护盾获能后，用能量牌打出反弹+伤害。
- **升级的关键性**：耗能从 <span style="color:#3aa675;font-weight:600">1</span> 降至 <span style="color:#3aa675;font-weight:600">0</span>。升级价值高——0 费打出净增 2 能量，且格挡按更高能量计算（多 1 点能量 = 多 3 点格挡）。升级优先级高，是体系成型的关键节点。
- **性价比**：1 费换 2 能量 + 12 点格挡（3 能量时），净增 1 能量还能防御。罕见稀有度合理——双效卡（能量+防御）本就稀缺。适合能量爆发流和续航流体系，是能量体系的核心组件。

## 相关机制

- [能量](/mechanics/energy.md)（获得 2 点能量）
- [格挡](/mechanics/block.md)（每有 1 点能量获得 3 点格挡）

## 源码

- `SeerEnergyShield.cs`
