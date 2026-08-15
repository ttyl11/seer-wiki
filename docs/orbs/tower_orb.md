# 高塔

<img src="/images/orbs/tower_orb.png" alt="高塔" style="max-width:120px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: mod 充能球
- **注册 ID**: `SEER_ORB_SEER_TOWER_ORB`
- **颜色**: `#555555`（深灰色）

### 数值参数

| 参数 | 数值 |
|---|---|
| 被动数值 | 1 |
| 激发数值 | 4 |

## 描述

[<span style="color:#d4a017;font-weight:600">被动：</span>](/mechanics/orb.md)回合开始时，获得<span style="color:#3aa675;font-weight:600">1</span>层<span style="color:#d4a017;font-weight:600">覆甲</span>。
[<span style="color:#d4a017;font-weight:600">激发：</span>](/mechanics/evoke.md)获得<span style="color:#3aa675;font-weight:600">4</span>层<span style="color:#d4a017;font-weight:600">覆甲</span>。
高塔充能球受[<span style="color:#d4a017;font-weight:600">集中</span>](/powers/focus_power.md)影响。

## 详细机制

- **被动触发**：
  - 触发时机：回合开始时
  - 目标选择：无目标，作用于自身
  - 效果：获得 <span style="color:#3aa675;font-weight:600">1</span> 层[覆甲](/powers/plating_power.md)
  - 音效：`sfx/passive_lightning_orb`
- **激发效果**：
  - 目标：无目标，作用于自身
  - 效果：获得 <span style="color:#3aa675;font-weight:600">4</span> 层[覆甲](/powers/plating_power.md)
  - 音效：`sfx/evoke_lightning_orb`
- **生成音效**：`sfx/channel_lightning_orb`
- **集中影响**：被动数值和激发数值均受[集中](/powers/focus_power.md)影响
- **悬浮提示**：提供覆甲的能力说明悬浮提示

## 相关能力

- [<span style="color:#d4a017;font-weight:600">覆甲</span>](/powers/plating_power.md)：被动和激发均施加
- [<span style="color:#d4a017;font-weight:600">集中</span>](/powers/focus_power.md)：提升被动和激发数值

## 相关卡牌

- [圣杯](/cards/colorless/holy_grail.md)（打出时随机生成 2 个充能球，含高塔）
- [圣灵雷霆斩](/cards/colorless/holy_thunder_slash.md)（获得 4 个随机充能球，含高塔）
- [魔法元素泡泡](/cards/character/magic_element_bubble.md)（随机生成充能球，含高塔）

## 小贴士

- **纯防御充能球**：高塔被动和激发都获得[覆甲](/powers/plating_power.md)，是 9 个充能球中唯一的纯防御型，不产出伤害或资源。
- **激发4层覆甲**：激发 4 层覆甲（被动仅 1 层），栏位满时激发收益高，配合集中可大幅提升单次激发覆甲量。

## 源码

- `SeerTowerOrb.cs`
