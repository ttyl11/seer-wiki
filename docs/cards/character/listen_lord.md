# 聆主天答

<img src="/images/cards/listen_lord.png" alt="聆主天答" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 5
- **能量消耗**: 1
- **类型**: 技能
- **稀有度**: 普通
- **目标**: 自身
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 回复数量 | 16 | 16 |
| 回合数 | 3 | 2 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> <span style="color:#3aa675;font-weight:600">3</span>回合后恢复<span style="color:#3aa675;font-weight:600">16</span>点体力。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> <span style="color:#3aa675;font-weight:600">2</span>回合后恢复<span style="color:#3aa675;font-weight:600">16</span>点体力。

## 小贴士

- **延迟治疗——层数倒数后一次性回血**：打出后开始倒数，3 回合后（升级 2 回合）一次性恢复 16 点体力。需要提前规划保命节奏，短战斗中来不及触发。
- **触发机制**：打出后对自身施加增益，初始层数为 <span style="color:#3aa675;font-weight:600">3</span>（升级后 <span style="color:#3aa675;font-weight:600">2</span>）。每个自己回合结束时层数 -1，层数归零时恢复 <span style="color:#3aa675;font-weight:600">16</span> 点体力。
- **实例化能力**：每次打出会生成独立实例——多次打出会各自独立计数，互不影响。可以提前叠多层错峰触发回血。
- **使用时机**：在长战斗中提前打出，作为后期保命手段。短战斗中来不及触发，不适合。
- **升级效果**：升级使回合计数从 <span style="color:#3aa675;font-weight:600">3</span> → <span style="color:#3aa675;font-weight:600">2</span>，提前一回合触发治疗；回复量 <span style="color:#3aa675;font-weight:600">16</span> 不变。
- **性价比**：1 费换 3 回合后 16 点体力合理——长战斗中相当于每回合分摊约 5 点稳定回血，但短战斗中无法触发，价值受限。

## 相关能力

- [延迟治疗](/powers/delayed_heal_power.md)：增益，每回合层数 -1，归零时恢复生命

## 源码

- `SeerListenLord.cs`
- `SeerDelayedHealPower.cs`
