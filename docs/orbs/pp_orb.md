# PP

<img src="/images/orbs/pp_orb.png" alt="PP" style="max-width:120px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: mod 充能球
- **注册 ID**: `SEER_ORB_SEER_PP_ORB`
- **颜色**: `#7777FF`（淡紫蓝）

### 数值参数

| 参数 | 数值 |
|---|---|
| 被动数值 | 2 |
| 激发数值 | 6 |

## 描述

[<span style="color:#d4a017;font-weight:600">被动：</span>](/mechanics/orb.md)回合开始时，随机分配<span style="color:#3aa675;font-weight:600">2</span>点PP给未满的PP卡牌。
[<span style="color:#d4a017;font-weight:600">激发：</span>](/mechanics/evoke.md)随机分配<span style="color:#3aa675;font-weight:600">6</span>点PP给未满的PP卡牌。
PP充能球受[<span style="color:#d4a017;font-weight:600">集中</span>](/powers/focus_power.md)影响。

## 详细机制

- **被动触发**：
  - 触发时机：回合开始时
  - 目标选择：无目标，作用于自身所有未满 PP 的 PP 卡牌
  - 效果：随机分配 <span style="color:#3aa675;font-weight:600">2</span> 点 PP 给未满的 PP 卡牌（每次随机选一张未满 PP 牌 +1，直到分配完）
  - 音效：`sfx/passive_frost_orb`
- **激发效果**：
  - 目标：无目标，作用于自身所有未满 PP 的 PP 卡牌
  - 效果：随机分配 <span style="color:#3aa675;font-weight:600">6</span> 点 PP 给未满的 PP 卡牌
  - 音效：`sfx/evoke_frost_orb`
- **生成音效**：`sfx/channel_frost_orb`
- **集中影响**：被动数值和激发数值均受[集中](/powers/focus_power.md)影响
- **PP 分配规则**：遍历所有 PP 卡牌，筛选未满 PP 的卡牌，每次随机选一张 +1 PP，重复至分配额度耗尽或所有 PP 牌已满
- **悬浮提示**：无额外悬浮提示

## 相关能力

- [<span style="color:#d4a017;font-weight:600">集中</span>](/powers/focus_power.md)：提升被动和激发数值

## 相关卡牌

- [虚无](/cards/character/nothingness.md)（生成 1 个 PP 充能球）
- [圣杯](/cards/colorless/holy_grail.md)（打出时随机生成 2 个充能球，含 PP）
- [圣灵雷霆斩](/cards/colorless/holy_thunder_slash.md)（获得 4 个随机充能球，含 PP）
- [魔法元素泡泡](/cards/character/magic_element_bubble.md)（随机生成充能球，含 PP）

## 小贴士

- **随机分配非集中**：PP 随机分配给未满 PP 卡，PP 卡越多分配越分散，无法定向补给某张关键 PP 卡。
- **激发大量回 PP**：激发 6 点 PP 是单次大量恢复（被动仅 2 点），适合关键回合激发补 PP 打出高 PP 牌。

## 源码

- `SeerPpOrb.cs`
