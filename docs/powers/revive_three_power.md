# 复苏III

> **归属**：怪物专属（玩家无法施加）
> **施加来源**：怪物随机池——[群星的礼赠](/relics/starter/elemental_core.md)随机能力池赋予怪物（遭遇时按概率自带，概率随探索房间数增长）

<img src="/images/powers/revive_three_power.png" alt="复苏III" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 单例（不可叠加）
- **可见**: 是

## 描述

死亡后复活并恢复所有<span style="color:#d4a017;font-weight:600">体力</span>，最多<span style="color:#3aa675;font-weight:600">4</span>次。

## 详细机制

- **四次满血复活**：`ShouldDie` 拦截死亡（复活次数未用完不判死）→ `AfterPreventingDeath` 瞬间回满全部体力（`Heal(MaxHp)`），最多触发 <span style="color:#3aa675;font-weight:600">4</span> 次，用完后移除本能力。
- **无属性加成**：复活不带四维成长——纯"多条命"。
- **复活瞬间无敌**：复活流程执行期间伤害 ×0、一切 Power 施加归零、不可被选中——无法打断或补刀。

## 小贴士

- **等效五倍血量**：复苏III = 面板血量 ×5（本条 + 四条复活命）——一条 60 血的怪实际要打出 300 点总伤害，把它当作"小型 Boss"对待。
- **DoT 几乎是唯一解**：五管血靠爆发硬灌极度低效——灼烧/中毒/流血挂满后逐管被动磨血，配合每管血末尾的直伤收头，是性价比最高的打法；复活不清除它身上的 DoT。
- **复活回满不回格挡**：每管血开局它的格挡都是空的——把爆发节奏对准"刚复活的那一回合"收益最大。
- **系列对比**：[复苏I](/powers/revive_one_power.md)（1 次 + 四维 +1）/[复苏II](/powers/revive_two_power.md)（2 次）——III 档次数最夸张（4 次），全池最稀有档之一（0.0000025/房），撞上就是马拉松战。

## 源码

- `SeerReviveThreePower.cs`（`ShouldDie` 拦截 + `AfterPreventingDeath`：`Heal(MaxHp)`，`ReviveCount < 4`）
- 随机池配置：`SeerElementalCore.cs:98`（`0.0000025/房`）
