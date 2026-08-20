# 星皇之怒

<img src="/images/enchantments/seer_star_emperor_wrath.png" alt="星皇之怒" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 特殊附魔
- **显示数量**: 否

### 数值参数

| 参数 | 数值 |
|---|---|
| 重放次数（Times） | 1 |

## 描述

第一次打出此牌后，此牌获得[<span style="color:#d4a017;font-weight:600">重放</span>](/mechanics/replay.md)+<span style="color:#3aa675;font-weight:600">1</span>。

## 详细机制

- **首次打出前**：不增加重放次数（`UsedThisCombat == false` 时返回原打出次数）。
- **首次打出后**：标记本战斗已使用，之后卡牌额外重放 <span style="color:#3aa675;font-weight:600">1</span> 次（`UsedThisCombat == true` 时返回原次数 +1）。
- **战斗重置**：每场战斗重置使用状态。打出后并不禁用附魔（华彩会禁用），因为后续仍需提供重放+1。
- **悬停提示**：鼠标悬停可查看重放次数说明。

## 小贴士

- **首打 1 次，之后每次 2 次**：星皇之怒首次打出按正常打出次数（无重放加成），首次打出后本场战斗内每次打出都 +1 重放——越到战斗后期收益越高。
- **与[华彩](./glam.md)对比（逻辑相反）**：华彩是首次打出**自带**重放 1，用完即禁用（本场仅第一次双倍）；星皇之怒是首次打出**不带**重放，之后才常驻 +1——华彩抢爆发，星皇之怒吃多轮出牌的长线战。
- **适合高打出次数牌**：PP 牌单场可打出多次，附在 PP 高的牌上，首打之后每次都能吃到重放+1，收益翻倍。

## 相关能力/关键词

- [重放](/mechanics/replay.md)：首次打出后获得的重放状态

## 源码

- `SeerStarEmperorWrath.cs`
