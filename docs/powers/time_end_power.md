# 时之彼端

> **归属**：玩家可施加
> **施加来源**：玩家获得——[终末·时之彼端](/cards/character/time_end.md)（卡牌）

<img src="/images/powers/time_end_power.png" alt="时之彼端" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 叠加
- **可见**: 是

## 描述

下次受到的伤害<span style="color:#3aa675;font-weight:600">100%</span>反馈给对手。若受到的伤害><span style="color:#3aa675;font-weight:600">20</span>，则恢复等量<span style="color:#d4a017;font-weight:600">体力</span>。触发后移除。

## 详细机制

- **触发条件**：仅受到**攻击伤害**时触发（`IsPoweredAttack` 过滤）；灼烧/中毒等 DoT 与[固定伤害](/powers/fixed_damage_power.md)不触发、不消耗本能力。自己对自己的伤害也不触发（防互弹递归）。
- **反馈量**：本次受到的**未格挡伤害**（`UnblockedDamage`）× 100%。架格挡会等比例削弱反馈量。
- **反馈类型**：普通直接伤害（`ValueProp.Unpowered`，与原版 ReflectPower 同款），**可被对手格挡吸收**，不吃攻击者力量/易伤，当场结算（非延迟固伤）。
- **回血条件**：未格挡伤害 ≥ 阈值（基础 <span style="color:#3aa675;font-weight:600">20</span>，升级后 <span style="color:#3aa675;font-weight:600">12</span>；施加时的层数即阈值）时，恢复等量体力；低于阈值只反弹、不回血。
- **一次性**：触发后立即移除（先移除再结算反馈与回血），只拦截下一次受击。
- **结算顺序**：先受伤扣血 → 移除本能力 → 向攻击者反馈 → 判定回血。

## 相关卡牌

- [终末·时之彼端](/cards/character/time_end.md)（施加来源）

## 源码

- `SeerTimeEndPower.cs`（`AfterDamageReceived` 反馈与回血逻辑）
- `SeerTimeEnd.cs`（施加入口，阈值随牌升级 20→12）
