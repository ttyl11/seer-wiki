# ⚡ 瞬影药水

## 基本信息

- **分类**: 特殊卡牌与节奏
- **稀有度**: 普通
- **使用时机**: 战斗内
- **目标**: 自身

### 数值参数

| 参数 | 数值 |
|---|---|
| 持续回合数 | 2 |
| 每回合先制层数 | 2 |

## 描述

获得[延迟先制](/powers/delayed_first_strike_power.md)<span style="color:#3aa675;font-weight:600">2</span>回合。每回合获得<span style="color:#3aa675;font-weight:600">2</span>层[先制](/powers/first_strike_power.md)。

## 详细机制

- **施加延迟先制**：获得 2 层"延迟先制"效果，每层每回合提供 +2 先制。
- **每回合触发**：己方回合开始时，每层延迟先制对自身施加 2 层[先制](/powers/first_strike_power.md)。
- **持续回合**：延迟先制持续 2 回合，每回合己方回合结束时层数 -1。
- **总先制收益**：2 回合内每回合 +2 先制，累计 +4 层先制。
- **先制机制**：先制是 mod 关键词，提供优先出牌权，详见[先制能力](/powers/first_strike_power.md)。
- **悬浮提示**：附带延迟先制和[先制](/powers/first_strike_power.md)能力提示。

## 小贴士

- **抢占节奏**：2 回合每回合 +2 先制，可连续抢占出牌权压制敌人，适合先手爆发。
- **配合先制流**：搭配先制系卡牌/遗物可形成先制链，连续先手压制。

## 源码

- `SeerFirstStrikePotion.cs`
- `SeerDelayedFirstStrikePower.cs`
