# 狂暴

<img src="/images/powers/fury_power.png" alt="狂暴" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 叠加（Counter）
- **可见**: 是
- **来源**: mod 能力

### 数值参数

| 参数 | 数值 |
|---|---|
| 每层伤害增加百分比 | 25 |

## 描述

每有一层，攻击伤害增加<span style="color:#3aa675;font-weight:600">25</span>%。在你的回合结束时减少<span style="color:#3aa675;font-weight:600">1</span>层。

## 详细机制

- **伤害加成**：当拥有者造成攻击伤害时，每层增加 <span style="color:#3aa675;font-weight:600">25</span>% 伤害。
- **回合结束递减**：在拥有者一方回合结束时，层数 -<span style="color:#3aa675;font-weight:600">1</span>。
- **计算示例**：2 层狂暴 = 伤害 ×1.5，4 层狂暴 = 伤害 ×2.0。

## 小贴士

- **Buff 型异常**：狂暴是增益（Buff），但列入异常状态列表，可被[凝滞](/powers/stasis_power.md)免疫。对玩家是增益，施加给敌人则增强其输出。

## 相关卡牌

- [蔑天行·残虐](/cards/character/despise_heaven_cruelty.md)（自身获得 2 回合狂暴）
- [找茬](/cards/character/find_fault.md)（每安装一个 mod，所有生物获得 1 回合狂暴）

## 源码

- `SeerFuryPower.cs`
