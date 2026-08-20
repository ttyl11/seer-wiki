# 好女孩

> **归属**：玩家可施加
> **施加来源**：玩家获得——[好女孩](/cards/colorless/good_girl.md)（卡牌）

<img src="/images/powers/good_girl_power.png" alt="好女孩" style="max-width:120px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 实例化（每次施加独立实例，各自计数）
- **可见**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| 异常状态数量 | 2 |
| 持续回合 | 1 |

## 描述

在你的回合开始时，让对手随机获得<span style="color:#3aa675;font-weight:600">2</span>种[<span style="color:#9b59b6;font-weight:600">异常状态</span>](/mechanics/abnormal-status.md)，持续<span style="color:#3aa675;font-weight:600">1</span>回合。

## 详细机制

- **触发时机**：在拥有者一方回合开始前触发。
- **异常状态池**：从全部 <span style="color:#3aa675;font-weight:600">24</span> 种[异常状态](/mechanics/abnormal-status.md)中随机选取。
- **施加流程**：重复 <span style="color:#3aa675;font-weight:600">2</span> 次（StatusCount）：
  - 异常状态种类：从 24 种中随机选取 1 种
  - 目标：从敌方中随机选取 1 个
  - 对目标施加该异常状态 <span style="color:#3aa675;font-weight:600">1</span> 回合
  - 每次独立选取，可对同一目标施加多种异常状态
- **多端同步**：使用 Niche 随机源选异常状态、CombatTargets 随机源选目标，确保多人模式下结果一致。
- **独立实例**：本能力为 Instanced 类型，每层是独立实例。卡牌施加 N 层 = N 个独立实例，每个实例各自触发上述流程——即 2 层好女孩 = 共施加 <span style="color:#3aa675;font-weight:600">4</span> 种异常状态（2×2），3 层 = <span style="color:#3aa675;font-weight:600">6</span> 种（3×2）。
- **支持的异常状态**：睡眠、凝滞、烧伤、冰封、中毒、流血、冻伤、害怕、瘫痪、沉默、衰弱、狂暴、束缚、沸涌、石化、感染、超频、焚烬、失明、诅咒、臣服、寄生、麻痹等 <span style="color:#3aa675;font-weight:600">24</span> 种。

## 相关卡牌

- [好女孩](/cards/colorless/good_girl.md)（获得 2 层好女孩，升级后 3 层）

## 源码

- `SeerGoodGirlPower.cs`
