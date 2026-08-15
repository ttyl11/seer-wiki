# 先制

<img src="/images/powers/first_strike_power.png" alt="先制" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 递减（刷新型）
- **可见**: 是
- **允许负数**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| 层数 | 1 |

## 描述

正层数时每层使你下一张牌耗能-1，负层数时每层使你下一张牌耗能+1。打出牌后移除所有[<span style="color:#d4a017;font-weight:600">先制</span>](/powers/first_strike_power.md)。

## 详细机制

- **耗能修改**：
  - 玩家持有正层数先制：玩家打牌时每层耗能 -<span style="color:#3aa675;font-weight:600">1</span>（最低 0）
  - 玩家持有负层数先制：玩家打牌时每层耗能 +<span style="color:#3aa675;font-weight:600">1</span>
  - 敌方持有正层数先制：玩家打牌时每层耗能 +<span style="color:#3aa675;font-weight:600">1</span>（反制效果）
  - 敌方持有负层数先制：玩家打牌时每层耗能 -<span style="color:#3aa675;font-weight:600">1</span>（最低 0）
- **打出后移除**：受影响方打出卡牌后，移除所有先制层数（完全移除，非递减）

## 相关能力

- [多回合先制](/powers/delayed_first_strike_power.md)：每回合持续获得先制

## 相关卡牌

- [圣剑一](/cards/token/holy_sword_one.md)
- [圣剑二](/cards/token/holy_sword_two.md)
- [圣剑三](/cards/token/holy_sword_three.md)
- [神灵之触](/cards/ancient/divine_touch.md)
- [孤洁之傲](/cards/character/proud_solitude.md)
- [暴政统治者](/cards/event/tyrant_ruler.md)
- [无相谛](/cards/character/nothingness.md)
- [龙寤揭天](/cards/character/dragon_awakening_sky.md)
- [荒烬涂天](/cards/character/desolate_ash_sky.md)
- [鹏·万里遨游](/cards/character/peng_thousand_miles_soar.md)
- [鲲·千里击涛](/cards/character/kun_thousand_miles_wave.md)
- [终末·时之彼端](/cards/character/time_end.md)
- [戕伐樊笼](/cards/character/cage_destruction.md)
- [五月的锋芒](/cards/character/may_edge.md)
- [魔·黑天暗罚](/cards/character/magic_black_sky_punishment.md)
- [能量](/cards/character/energy.md)
- [苍鹭幻翎](/cards/character/heron_illusion_feather.md)
- [二律背反](/cards/character/antinomy.md)

## 源码

- `SeerFirstStrikePower.cs`
