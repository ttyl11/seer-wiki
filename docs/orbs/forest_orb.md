# 森林

<img src="/images/orbs/forest_orb.png" alt="森林" style="max-width:120px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: mod 充能球
- **注册 ID**: `SEER_ORB_SEER_FOREST_ORB`
- **颜色**: `#228B22`（森林绿）

### 数值参数

| 参数 | 数值 |
|---|---|
| 被动数值 | 3 |
| 激发数值 | 3 |

## 描述

[<span style="color:#d4a017;font-weight:600">被动：</span>](/mechanics/orb.md)回合结束时，对随机对手施加<span style="color:#3aa675;font-weight:600">3</span>层[<span style="color:#d44;font-weight:600">中毒</span>](/powers/poison_power.md)。
[<span style="color:#d4a017;font-weight:600">激发：</span>](/mechanics/evoke.md)对所有对手施加<span style="color:#3aa675;font-weight:600">3</span>层[<span style="color:#d44;font-weight:600">感染</span>](/powers/infect_power.md)。
森林充能球受[<span style="color:#d4a017;font-weight:600">集中</span>](/powers/focus_power.md)影响。

## 详细机制

- **被动触发**：
  - 触发时机：回合结束时
  - 目标选择：随机选择一个敌人（框架 RNG 确保多人同步）
  - 效果：对随机敌人施加 <span style="color:#3aa675;font-weight:600">3</span> 层[中毒](/powers/poison_power.md)
  - 音效：`sfx/passive_lightning_orb`
- **激发效果**：
  - 目标：所有可命中敌人
  - 效果：对所有敌人施加 <span style="color:#3aa675;font-weight:600">3</span> 层[感染](/powers/infect_power.md)
  - 音效：`sfx/evoke_lightning_orb`
- **生成音效**：`sfx/channel_lightning_orb`
- **集中影响**：被动数值和激发数值受[集中](/powers/focus_power.md)影响
- **悬浮提示**：提供中毒和感染的能力说明悬浮提示

## 相关能力

- [<span style="color:#d44;font-weight:600">中毒</span>](/powers/poison_power.md)：被动施加
- [<span style="color:#d44;font-weight:600">感染</span>](/powers/infect_power.md)：激发施加
- [<span style="color:#d4a017;font-weight:600">集中</span>](/powers/focus_power.md)：提升被动和激发数值

## 相关卡牌

- [森罗万象](/cards/character/forest_all_things.md)（生成 2 个森林充能球，升级后 3 个）

## 小贴士

- **激发覆盖更广**：被动随机单体中毒，激发全体感染——激发覆盖面远大于被动，栏位满时激发收益最高。
- **感染联动中毒**：激发施加的[感染](/powers/infect_power.md)回合末自动转 2 层[中毒](/powers/poison_power.md)，单次激发形成双重异常扩散。

## 源码

- `SeerForestOrb.cs`
