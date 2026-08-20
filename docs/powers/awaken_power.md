# 觉醒

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物随机池——[群星的礼赠](/relics/starter/elemental_core.md)随机能力池赋予怪物（遭遇时按概率自带，概率随探索房间数增长）

<img src="/images/powers/awaken_power.png" alt="觉醒" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益
- **叠加方式**: 单例（不可叠加）
- **可见**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| 力量获取 | 2 |

## 描述

在你的回合开始时，若自身<span style="color:#d4a017;font-weight:600">体力</span>低于<span style="color:#d4a017;font-weight:600">最大体力</span>的50%，则获得<span style="color:#3aa675;font-weight:600">2</span>点<span style="color:#d4a017;font-weight:600">力量</span>。

## 详细机制

- **回合开始判定**：持有者自己回合开始时（`AfterSideTurnStart` + `side == Owner.Side`），检查当前体力是否**严格低于**最大体力的 <span style="color:#3aa675;font-weight:600">50%</span>，是则获得 <span style="color:#3aa675;font-weight:600">2</span> 层[力量](/powers/strength_power.md)（原版力量，攻击伤害 +2/层）。
- **每回合独立判定**：只要血线保持在 50% 以下，**每个持有者回合都 +2**——3 回合 +6、5 回合 +10，无限滚雪球。
- **半血是开关**：回血回到 50% 及以上则暂停获取，但已获得的力量不消退。

## 小贴士

- **最忌温水煮青蛙**：把它打到 49% 然后打不动了，等于亲手启动力量引擎——每过一回合它的攻击意图都在膨胀。要么**一波爆发直接斩杀**，要么**囤够伤害前别碰半血线**。
- **速杀线计算**：带觉醒的怪实际斩杀线 = 50% 血 + 你能在一两个回合内打出的伤害——规划爆发时把它当"半血后每回合+2 攻击"的怪来评估意图数值。
- **DoT 反而是双刃剑**：[烧伤](/powers/burn_power.md)/[中毒](/powers/poison_power.md)会持续把它压在半血线下，等于持续喂养觉醒——除非 DoT 总量足以耗死它，否则对觉醒怪慎用慢速磨血。

## 源码

- `SeerAwakenPower.cs`（`AfterSideTurnStart`，`CurrentHp < MaxHp * 0.5` 时施加 `StrengthPower`）
