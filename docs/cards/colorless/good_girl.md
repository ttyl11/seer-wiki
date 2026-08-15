# 好女孩

<img src="/images/cards/good_girl.png" alt="好女孩" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 无色牌
- **能量消耗**: 1
- **类型**: 能力
- **稀有度**: 普通
- **目标**: 自身
- **关键词**: [固有](/mechanics/innate.md)
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 异常状态数量 | 2 | 3 |
| 持续回合 | 1 | 1 |

## 描述

每回合开始时，令对手随机获得<span style="color:#3aa675;font-weight:600">2</span>种[<span style="color:#9b59b6;font-weight:600">异常状态</span>](/mechanics/abnormal-status.md)<span style="color:#3aa675;font-weight:600">1</span>回合。

## 升级后

每回合开始时，令对手随机获得<span style="color:#3aa675;font-weight:600">2</span>种[<span style="color:#9b59b6;font-weight:600">异常状态</span>](/mechanics/abnormal-status.md)<span style="color:#3aa675;font-weight:600">1</span>回合。

## 小贴士

- **固有**：（原版关键词）。此牌在战斗开始时必定在手牌中。
- **好女孩能力**：施加好女孩能力，记录异常状态数量（<span style="color:#3aa675;font-weight:600">2</span>，升级后 <span style="color:#3aa675;font-weight:600">3</span>）。
- **回合开始触发**：[好女孩能力](/powers/good_girl_power.md)在每回合开始时，从 <span style="color:#3aa675;font-weight:600">24</span> 种[异常状态](/mechanics/abnormal-status.md)中随机选取记录数量种，对随机敌人施加 <span style="color:#3aa675;font-weight:600">1</span> 回合。
- **升级效果**：升级后，异常状态数量提升 <span style="color:#3aa675;font-weight:600">1</span>（从 <span style="color:#3aa675;font-weight:600">2</span> 提升至 <span style="color:#3aa675;font-weight:600">3</span>）。

## 相关能力

- [好女孩](/powers/good_girl_power.md)（回合开始时随机施加异常状态）

## 相关机制

- [异常状态](/mechanics/abnormal-status.md)（24 种异常状态随机施加）
- [固有](/mechanics/innate.md)（战斗开始时必定在手牌）

## 源码

- `SeerGoodGirl.cs`
