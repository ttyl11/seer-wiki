# 海洋

<img src="/images/orbs/ocean_orb.png" alt="海洋" style="max-width:120px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: mod 充能球
- **注册 ID**: `SEER_ORB_SEER_OCEAN_ORB`
- **颜色**: `#1E90FF`（道奇蓝）

### 数值参数

| 参数 | 数值 |
|---|---|
| 被动数值 | 3 |
| 激发数值 | 3 |

## 描述

[<span style="color:#d4a017;font-weight:600">被动：</span>](/mechanics/orb.md)回合结束时，对随机对手施加<span style="color:#3aa675;font-weight:600">3</span>层[<span style="color:#d44;font-weight:600">冻伤</span>](/powers/frostbite_power.md)。
[<span style="color:#d4a017;font-weight:600">激发：</span>](/mechanics/evoke.md)对所有对手施加<span style="color:#3aa675;font-weight:600">3</span>层[<span style="color:#d44;font-weight:600">冰封</span>](/powers/freeze_power.md)。
海洋充能球受[<span style="color:#d4a017;font-weight:600">集中</span>](/powers/focus_power.md)影响。

## 详细机制

- **被动触发**：
  - 触发时机：回合结束时
  - 目标选择：随机选择一个敌人（确保多人同步）
  - 效果：对随机敌人施加 <span style="color:#3aa675;font-weight:600">3</span> 层[冻伤](/powers/frostbite_power.md)
  - 音效：`sfx/passive_frost_orb`
- **激发效果**：
  - 目标：所有可命中敌人
  - 效果：对所有敌人施加 <span style="color:#3aa675;font-weight:600">3</span> 层[冰封](/powers/freeze_power.md)
  - 音效：`sfx/evoke_frost_orb`
- **生成音效**：`sfx/channel_frost_orb`
- **集中影响**：被动数值和激发数值均受[集中](/powers/focus_power.md)影响
- **悬浮提示**：提供冻伤和冰封的能力说明悬浮提示

## 相关能力

- [<span style="color:#d44;font-weight:600">冻伤</span>](/powers/frostbite_power.md)：被动施加
- [<span style="color:#d44;font-weight:600">冰封</span>](/powers/freeze_power.md)：激发施加
- [<span style="color:#d4a017;font-weight:600">集中</span>](/powers/focus_power.md)：提升被动和激发数值

## 相关卡牌

- [碧海苍空](/cards/character/vast_sea_sky.md)（生成海洋充能球）
- [圣杯](/cards/colorless/holy_grail.md)（打出时随机生成 2 个充能球，含海洋）
- [圣灵雷霆斩](/cards/colorless/holy_thunder_slash.md)（获得 4 个随机充能球，含海洋）
- [魔法元素泡泡](/cards/character/magic_element_bubble.md)（随机生成充能球，含海洋）

## 小贴士

- **激发双重异常**：激发全体[冰封](/powers/freeze_power.md)，冰封回合末转 2 层[冻伤](/powers/frostbite_power.md)，单次激发形成冰系扩散。
- **与[森林](forest_orb.md)/[火山](volcano_orb.md)对称**：海洋被动随机单体冻伤、激发全体冰封，机制与森林（中毒/感染）、火山（烧伤/焚烬）完全对称，可混合搭配形成多系异常。

## 源码

- `SeerOceanOrb.cs`
