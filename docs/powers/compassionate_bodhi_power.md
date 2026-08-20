# 怀生菩怜态

> **归属**：玩家可施加
> **施加来源**：玩家获得——[一莲托生·世母](/cards/character/lotus_birth_world_mother.md)（卡牌）、[妙时天女](/relics/epic/maiden_of_wondrous_time.md)（遗物）

<img src="/images/powers/compassionate_bodhi_power.png" alt="怀生菩怜态" style="max-width:120px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 计数器（1，层数可见，回合结束 -1）
- **可见**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| 异常状态层数 | 1 |

## 描述

回合开始时，自身清除现有属性，变为光系。使用牌后随机对随机敌人附加<span style="color:#3aa675;font-weight:600">1</span>种[异常状态](/mechanics/abnormal-status.md)<span style="color:#3aa675;font-weight:600">1</span>回合，回合结束减<span style="color:#3aa675;font-weight:600">1</span>层。

## 详细机制

- **回合开始**：
  1. 清除现有元素属性
  2. 变为光系
- **使用牌后**：
  1. 仅自身打出牌时触发
  2. 随机选择一个敌人（随机数使用框架随机数确保多人同步）
  3. 从所有异常状态中随机选择 <span style="color:#3aa675;font-weight:600">1</span> 种
  4. 对目标施加该异常状态 <span style="color:#3aa675;font-weight:600">1</span> 层
- **回合结束**：层数 -<span style="color:#3aa675;font-weight:600">1</span>
- **状态转换**：首次施加和移除时触发妙时天女遗物的状态转换效果
- **三态系统**：与[拒赦怒威态](/powers/wrathful_judgment_power.md)互斥，由妙时天女遗物管理切换

## 相关能力

- [<span style="color:#d4a017;font-weight:600">拒赦怒威态</span>](/powers/wrathful_judgment_power.md)：另一种状态，互斥切换

## 相关卡牌

- [傳馥明王最胜语](/cards/character/fragrant_king_supreme_word.md)（怀生菩怜态时获得保留1血）
- [义乂梵我婆娑纱](/cards/character/righteous_brahma_veil.md)（怀生菩怜态时使对手疲惫）
- [万卍觉心法界镇](/cards/character/myriad_awakening_realm_suppression.md)
- [一莲托生·世母](/cards/character/lotus_birth_world_mother.md)

## 源码

- `SeerCompassionateBodhiPower.cs`
