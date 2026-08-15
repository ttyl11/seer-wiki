# 星星

<img src="/images/orbs/star_orb.png" alt="星星" style="max-width:120px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: mod 充能球
- **注册 ID**: `SEER_ORB_SEER_STAR_ORB`
- **颜色**: `#FFD700`（金色）

### 数值参数

| 参数 | 数值 |
|---|---|
| 被动数值 | 3 |
| 激发数值 | 1 |

## 描述

[<span style="color:#d4a017;font-weight:600">被动：</span>](/mechanics/orb.md)回合开始时，获得<span style="color:#3aa675;font-weight:600">3</span>点<span style="color:#d4a017;font-weight:600">辉星</span>。
[<span style="color:#d4a017;font-weight:600">激发：</span>](/mechanics/evoke.md)添加一张随机储君卡牌到手牌。
星星充能球被动受[<span style="color:#d4a017;font-weight:600">集中</span>](/powers/focus_power.md)影响，激发不受影响。

## 详细机制

- **被动触发**：
  - 触发时机：回合开始时
  - 目标选择：无目标，作用于自身
  - 效果：获得 <span style="color:#3aa675;font-weight:600">3</span> 点辉星
  - 音效：`sfx/passive_dark_orb`
- **激发效果**：
  - 目标：无目标，卡牌加入手牌
  - 效果：从储君卡池中随机选一张卡牌加入手牌（确保多人同步）
  - 音效：`sfx/evoke_dark_orb`
- **生成音效**：`sfx/channel_dark_orb`
- **集中影响**：被动数值受[集中](/powers/focus_power.md)影响（基础值 3），激发不受影响（固定添加 1 张卡牌）
- **悬浮提示**：提供辉星的静态悬浮提示

## 相关能力

- [<span style="color:#d4a017;font-weight:600">集中</span>](/powers/focus_power.md)：提升被动辉星获取量

## 相关卡牌

- [圣杯](/cards/colorless/holy_grail.md)（打出时随机生成 2 个充能球，含星星）
- [圣灵雷霆斩](/cards/colorless/holy_thunder_slash.md)（获得 4 个随机充能球，含星星）
- [魔法元素泡泡](/cards/character/magic_element_bubble.md)（随机生成充能球，含星星）

## 小贴士

- **被动吃集中激发不吃**：被动产辉星受集中影响，激发加储君卡不受影响——叠集中只放大辉星产出，不增加储君卡数量。
- **辉星与储君卡联动**：激发加入的储君卡部分需要辉星才能打出，与被动辉星产出形成自循环——多留星星球可同时供辉星和储君卡。

## 源码

- `SeerStarOrb.cs`
