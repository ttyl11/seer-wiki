# 圣杯

<img src="/images/orbs/holy_grail_orb.png" alt="圣杯" style="max-width:120px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: mod 充能球
- **注册 ID**: `SEER_ORB_SEER_HOLY_GRAIL_ORB`
- **颜色**: `#FFD700`（金色）

### 数值参数

| 参数 | 数值 |
|---|---|
| 被动数值 | 5 |
| 激发数值 | 1（按已损失生命 10% + 每层集中 5% 计算） |

## 描述

[<span style="color:#d4a017;font-weight:600">被动：</span>](/mechanics/orb.md)每两回合，恢复<span style="color:#3aa675;font-weight:600">5</span>点生命。
[<span style="color:#d4a017;font-weight:600">激发：</span>](/mechanics/evoke.md)恢复已损失生命值的10%（每层集中+5%）。
圣杯充能球受[<span style="color:#d4a017;font-weight:600">集中</span>](/powers/focus_power.md)影响。

## 详细机制

- **被动触发**：
  - 触发时机：回合开始时，但**每两回合才触发一次**（内部回合计数，偶数回合触发）
  - 目标选择：无目标，作用于自身
  - 效果：恢复 <span style="color:#3aa675;font-weight:600">5</span> 点生命
  - 音效：`sfx/passive_lightning_orb`
- **激发效果**：
  - 目标：无目标，作用于自身
  - 效果：恢复已损失生命值的 10% + 每层集中额外 +5%，恢复量 = 已损失生命 × (10% + 集中层数 × 5%)
  - 音效：`sfx/evoke_lightning_orb`
- **生成音效**：`sfx/channel_lightning_orb`
- **集中影响**：
  - 被动数值受[集中](/powers/focus_power.md)影响（基础值 5）
  - 激发效果受集中影响（每层集中 +5% 恢复比例），但计算方式与被动数值不同，是独立公式
- **跨战斗保存**：`TurnCount`（用于追踪被动触发的回合计数）
- **悬浮提示**：提供集中的能力说明悬浮提示

## 相关能力

- [<span style="color:#d4a017;font-weight:600">集中</span>](/powers/focus_power.md)：提升被动恢复量，并增加激发恢复比例

## 相关卡牌

- [圣杯](/cards/colorless/holy_grail.md)（打出时生成 1 个圣杯充能球 + 获得 2 个充能球栏位 + 随机生成 2 个充能球，含圣杯）
- [圣灵雷霆斩](/cards/colorless/holy_thunder_slash.md)（获得 4 个随机充能球，含圣杯）
- [魔法元素泡泡](/cards/character/magic_element_bubble.md)（随机生成充能球，含圣杯）

## 小贴士

- **被动隔回合触发**：被动每两回合才触发一次（偶数回合），并非每回合恢复，长线战总恢复量需折半计算。
- **激发低血收益最大**：激发按已损失生命 10% + 每层集中 5% 恢复，血量越低恢复越多，适合残血反杀场景。

## 源码

- `SeerHolyGrailOrb.cs`
