# 烧伤

<img src="/images/powers/burn_power.png" alt="烧伤" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 减益（Debuff），列入[异常状态](/mechanics/abnormal-status.md)列表
- **叠加方式**: 叠加（Counter）
- **可见**: 是
- **血条预测**: 是（橙红色，3 点）

### 数值参数

| 参数 | 数值 |
|---|---|
| 每回合伤害 | 3 |
| 攻击伤害减少 | 1 |

## 描述

在你的回合开始时受到<span style="color:#3aa675;font-weight:600">3</span>点伤害。攻击伤害降低<span style="color:#3aa675;font-weight:600">1</span>点。然后减少1层。

## 详细机制

- **回合开始伤害**：
  - 自身回合开始时，若拥有者存活，对其造成 3 点伤害
  - 伤害结算后，若拥有者仍存活，层数 -1
  - 若拥有者死亡，等待 0.1~0.25 秒后再处理
- **攻击伤害降低**：
  - 仅减少拥有者**造成的攻击伤害**，非攻击伤害不受影响
  - 攻击伤害 -1 点（绝对值减法，最低 0），多层烧伤线性叠加（2 层降 2 点）
  - 注意：是绝对值而非百分比，对低伤害攻击压制力强（如 3 点攻击降为 2 点），对高伤害攻击影响小
- **血条预测**：
  - 血条上会显示 3 点伤害的预测段（橙红色，从右向左生长，表示即将受到的伤害）
- **伤害性质**：回合开始的 3 点伤害为不可格挡的非攻击伤害（绕过[格挡](/mechanics/block.md)）

## 小贴士

- **双向压制**：回合开始受 3 点不可格挡伤害 + 攻击伤害降 1 点（绝对值）。对低攻击高频敌人压制力强。
- **绝对值减伤**：攻击伤害降 1 点是绝对值非百分比，3 点攻击降为 2 点（-33%），10 点攻击降为 9 点（-10%）。

## 相关卡牌

- [八月的流火](/cards/character/august_flame.md)（自身烧伤 5/7 回合）
- [醉酒燃烧](/cards/character/drunken_burn.md)
- [曙光普照](/cards/character/shining_light.md)
- [秘纹护体](/cards/character/secret_rune.md)
- [天灵净野](/cards/character/heaven_spirit_pure_field.md)

## 相关遗物（6 个）

- [塔罗·太阳](/relics/common/tarot_sun.md)
- [塔罗·恋人](/relics/common/tarot_lovers.md)
- [枫眠](/relics/rare/maple_sleep.md)
- [无极有机](/relics/epic/infinite_organic.md)
- [焰龙皇](/relics/uncommon/flame_dragon_emperor.md)
- [阿波罗](/relics/common/apollo.md)

## 源码

- `SeerBurnPower.cs`
