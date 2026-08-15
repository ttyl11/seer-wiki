# 乂

<img src="/images/enchantments/seer_five_tone_cross.png" alt="乂" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 五音附魔
- **可附魔牌类型**: 攻击 / 技能 / 能力
- **显示数量**: 否

## 描述

打出后，解除自身所有[异常状态](/mechanics/abnormal-status.md)。

## 详细机制

- **打出时触发**：当被附魔的卡牌打出时，遍历自身角色的所有能力。
- **筛选异常状态**：仅处理 24 种异常状态（详见[异常状态](/mechanics/abnormal-status.md)）。
- **移除能力**：完全移除每个匹配的异常状态。
- **范围**：仅解除自身异常状态，不影响对手。

## 小贴士

- **24种异常全解**：乂一次性解除自身所有 24 种异常状态（含降攻、扩散、自伤等各类），是最强解异常附魔。
- **时机关键**：在对方密集施加异常后打出可一次性清空，适合附在低费牌上随时待命解异常。

## 相关能力/关键词

- [异常状态](/mechanics/abnormal-status.md)：本附魔解除的状态范围

## 源码

- `SeerFiveToneCross.cs`
