# 拒赦怒威态

> **归属**：玩家可施加
> **施加来源**：玩家获得——[一莲托生·孽妣](/cards/character/lotus_birth_sin_ancestor.md)（卡牌）、[妙时天女](/relics/epic/maiden_of_wondrous_time.md)（遗物）

<img src="/images/powers/wrathful_judgment_power.png" alt="拒赦怒威态" style="max-width:120px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 计数器（1，层数可见，回合结束 -1）
- **可见**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| 伤害提升百分比 | 30 |

## 描述

回合开始时，自身清除现有属性，变为混沌系，[先制](/powers/first_strike_power.md)+<span style="color:#3aa675;font-weight:600">1</span>。自身所有攻击造成伤害提升<span style="color:#3aa675;font-weight:600">30</span>%，回合结束减<span style="color:#3aa675;font-weight:600">1</span>层。

## 详细机制

- **回合开始**：
  1. 清除现有元素属性
  2. 施加混沌系
  3. 施加 [先制](/powers/first_strike_power.md) <span style="color:#3aa675;font-weight:600">+1</span> 层
- **伤害提升**：
  - 触发条件：拥有者造成攻击伤害时
  - 效果公式：伤害 × <span style="color:#3aa675;font-weight:600">1.3</span>（提升 <span style="color:#3aa675;font-weight:600">30</span>%）
- **回合结束**：层数 -<span style="color:#3aa675;font-weight:600">1</span>
- **状态转换**：首次施加和移除时触发妙时天女遗物的状态转换效果
- **三态系统**：与[怀生菩怜态](/powers/compassionate_bodhi_power.md)互斥，由妙时天女遗物管理切换

## 相关能力

- [<span style="color:#d4a017;font-weight:600">先制</span>](/powers/first_strike_power.md)：回合开始时获得 +1 层
- [<span style="color:#d4a017;font-weight:600">怀生菩怜态</span>](/powers/compassionate_bodhi_power.md)：另一种状态，互斥切换
- [<span style="color:#d4a017;font-weight:600">增伤</span>](/powers/next_damage_boost_power.md)：傳馥明王最胜语在拒赦怒威态时额外施加增伤 54%

## 相关卡牌

- [傳馥明王最胜语](/cards/character/fragrant_king_supreme_word.md)（拒赦怒威态时下一次伤害提升 54%）
- [义乂梵我婆娑纱](/cards/character/righteous_brahma_veil.md)（拒赦怒威态时使对手害怕）
- [万卍觉心法界镇](/cards/character/myriad_awakening_realm_suppression.md)
- [一莲托生·孽妣](/cards/character/lotus_birth_sin_ancestor.md)

## 源码

- `SeerWrathfulJudgmentPower.cs`
