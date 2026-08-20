# 幻扰三

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物随机池——[群星的礼赠](/relics/starter/elemental_core.md)随机能力池赋予怪物（遭遇时按概率自带，概率随探索房间数增长）

<img src="/images/powers/illusion_disturb_three_power.png" alt="幻扰三" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 单例（不可叠加）
- **可见**: 是

## 描述

在你的回合开始时，给予敌人<span style="color:#3aa675;font-weight:600">2</span>种随机<span style="color:#d44;font-weight:600">异常状态</span><span style="color:#3aa675;font-weight:600">1</span>回合。

## 详细机制

- **回合开始随机异常**：持有者（怪物）自己回合开始时（`AfterSideTurnStart`），对**玩家方全体**各施加 <span style="color:#3aa675;font-weight:600">2</span> 种随机[异常状态](/mechanics/abnormal-status.md)各 <span style="color:#3aa675;font-weight:600">1</span> 层——与[幻扰一](/powers/illusion_disturb_power.md)同机制，种类翻倍（两次独立抽取，可能同种叠 2 层）。
- **「曝」压制**：怪物持有[曝](/powers/expose_power.md)时每次施加 <span style="color:#3aa675;font-weight:600">50%</span> 概率失败（两次抽取各自判定）。
- **无限持续**：持有者活着就每回合执行。

## 小贴士

- **量变质变**：每回合 2 种的堆积速度是幻扰一的两倍——3 回合后身上平均挂着 4~6 种异常，其中烧伤/中毒在悄悄叠层——解异常的收益随之翻倍，但根本解法仍是速杀。
- **双判定利好「曝」**：曝对两次施加**各自**判 50%——期望每回合只中 1 种（而不是 2 种），挂曝收益在幻扰三身上最大化。

## 源码

- `SeerIllusionDisturbThreePower.cs`（同幻扰一，`StatusCount = 2`）
