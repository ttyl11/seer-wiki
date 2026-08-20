# 幻扰二

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物随机池——[群星的礼赠](/relics/starter/elemental_core.md)随机能力池赋予怪物（遭遇时按概率自带，概率随探索房间数增长）

<img src="/images/powers/illusion_disturb_two_power.png" alt="幻扰二" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 单例（不可叠加）
- **可见**: 是

## 描述

在你的回合开始时，给予敌人<span style="color:#3aa675;font-weight:600">1</span>种随机<span style="color:#d44;font-weight:600">异常状态</span><span style="color:#3aa675;font-weight:600">2</span>回合。

## 详细机制

- **回合开始随机异常**：持有者（怪物）自己回合开始时（`AfterSideTurnStart`），对**玩家方全体**各施加 <span style="color:#3aa675;font-weight:600">1</span> 种随机[异常状态](/mechanics/abnormal-status.md) <span style="color:#3aa675;font-weight:600">2</span> 层——与[幻扰一](/powers/illusion_disturb_power.md)同机制，持续时间翻倍。
- **「曝」压制**：怪物持有[曝](/powers/expose_power.md)时施加 <span style="color:#3aa675;font-weight:600">50%</span> 概率失败。
- **无限持续**：持有者活着就每回合执行。

## 小贴士

- **更粘的版本**：2 层意味着同种异常连续命中时更难自然消退——麻痹/束缚类控制异常被连挂两层的回合里，出牌节奏直接被打乱，解异常牌的优先级比幻扰一场合更高。
- **异常免疫类价值放大**：白色龙鳞/异常免疫类效果在幻扰二面前每回合白赚（免疫即无效化）——有免疫手段时幻扰怪威胁骤降。

## 源码

- `SeerIllusionDisturbTwoPower.cs`（同幻扰一，`StatusTurns = 2`）
