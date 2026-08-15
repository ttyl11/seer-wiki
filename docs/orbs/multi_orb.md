# 多用

<img src="/images/orbs/multi_orb.png" alt="多用" style="max-width:120px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: mod 充能球
- **注册 ID**: `SEER_ORB_SEER_MULTI_ORB`
- **颜色**: `#9932CD`（深紫色）

### 数值参数

| 参数 | 数值 |
|---|---|
| 被动数值 | 2 |
| 激发数值 | 1 |

## 描述

[<span style="color:#d4a017;font-weight:600">被动：</span>](/mechanics/orb.md)回合结束时，<span style="color:#d4a017;font-weight:600">铸造</span><span style="color:#3aa675;font-weight:600">2</span>，<span style="color:#d4a017;font-weight:600">召唤</span><span style="color:#3aa675;font-weight:600">2</span>。
[<span style="color:#d4a017;font-weight:600">激发：</span>](/mechanics/evoke.md)随机为一张手牌赋予奇巧，一张赋予消耗，一张赋予虚无。
多用充能球被动受[<span style="color:#d4a017;font-weight:600">集中</span>](/powers/focus_power.md)影响，激发不受影响。

## 详细机制

- **被动触发**：
  - 触发时机：回合结束时
  - 目标选择：无目标，作用于自身
  - 效果：铸造 <span style="color:#3aa675;font-weight:600">2</span> + 召唤 <span style="color:#3aa675;font-weight:600">2</span>
  - 音效：`sfx/passive_lightning_orb`
- **激发效果**：
  - 目标：手牌中最多 3 张随机卡牌
  - 效果：随机排序手牌，取前 min(3, 手牌数) 张，依次赋予关键词：
    - 第 1 张：[奇巧](/mechanics/sly.md)（被弃时免费打出）
    - 第 2 张：消耗
    - 第 3 张：虚无
  - 音效：`sfx/evoke_lightning_orb`
- **生成音效**：`sfx/channel_lightning_orb`
- **集中影响**：被动数值受[集中](/powers/focus_power.md)影响（基础值 2），激发不受影响（固定赋予 3 个关键词）
- **悬浮提示**：提供铸造、奇巧、消耗、虚无的悬浮提示

## 相关能力

- [<span style="color:#d4a017;font-weight:600">集中</span>](/powers/focus_power.md)：提升被动铸造和召唤数值

## 相关卡牌

- [圣杯](/cards/colorless/holy_grail.md)（打出时随机生成 2 个充能球，含多用）
- [圣灵雷霆斩](/cards/colorless/holy_thunder_slash.md)（获得 4 个随机充能球，含多用）
- [魔法元素泡泡](/cards/character/magic_element_bubble.md)（随机生成充能球，含多用）

## 小贴士

- **被动双资源产出**：被动同时铸造 + 召唤，是少数一次产出两种资源的充能球，配合集中可放大产出量。
- **激发有副作用**：激发随机赋予消耗/虚无到手牌，可能让关键牌变废——激发前注意手牌构成，避免误伤核心牌。

## 源码

- `SeerMultiOrb.cs`
