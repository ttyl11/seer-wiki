# 臣服

<img src="/images/powers/subjugation_power.png" alt="臣服" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 减益（Debuff）
- **叠加方式**: 叠加（Counter）
- **可见**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| 伤害降低百分比 | 70 |
| 随从牌数量 | 2 |
| 力量获取量 | 3 |

## 描述

攻击伤害降低<span style="color:#3aa675;font-weight:600">70</span>%。移除时，若为玩家则获得<span style="color:#3aa675;font-weight:600">2</span>张随从牌，若为怪物则获得<span style="color:#3aa675;font-weight:600">3</span>点<span style="color:#d4a017;font-weight:600">力量</span>。在你的回合结束时减少<span style="color:#3aa675;font-weight:600">1</span>层。

## 详细机制

- **伤害降低**：当拥有者造成攻击伤害时，伤害降低 70%（即乘以 0.3）。
- **移除时效果**：根据拥有者类型分别处理：
  - **玩家**：从随从牌池（打击、牺牲、俯冲轰炸）中随机生成 <span style="color:#3aa675;font-weight:600">2</span> 张牌，加入手牌并设为本回合免费。
  - **怪物**：获得 <span style="color:#3aa675;font-weight:600">3</span> 点力量。
- **回合结束递减**：在拥有者一方回合结束时，层数 -<span style="color:#3aa675;font-weight:600">1</span>。
- **随机牌池**：随从牌共 3 种——随从·打击、随从·牺牲、随从·俯冲轰炸，每次随机抽取。
- **RNG 同步**：使用同步随机数确保多人模式下随机结果一致。

## 小贴士

- **移除时双刃剑**：玩家移除得 2 张随从牌（增益），怪物移除得 3 力量（增强）。对怪物施加臣服需及时击杀，避免移除后反增强。

## 相关卡牌

- [群生俯首](/cards/character/all_life_submit.md)（对所有敌人施加臣服）

## 源码

- `SeerSubjugationPower.cs`
