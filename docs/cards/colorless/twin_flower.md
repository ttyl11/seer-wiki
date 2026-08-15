# 双生花

<img src="/images/cards/twin_flower.png" alt="双生花" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 无色牌
- **能量消耗**: 0
- **类型**: 能力
- **稀有度**: 罕见
- **目标**: 自身
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 睡眠概率 | 30 | 45 |

## 描述

每回合开始时，有<span style="color:#9b59b6;font-weight:600">晓</span>则失去<span style="color:#9b59b6;font-weight:600">晓</span>，获得<span style="color:#9b59b6;font-weight:600">清</span>。有<span style="color:#9b59b6;font-weight:600">清</span>则失去<span style="color:#9b59b6;font-weight:600">清</span>，获得<span style="color:#9b59b6;font-weight:600">晓</span>。

## 升级后

每回合开始时，有<span style="color:#9b59b6;font-weight:600">晓</span>则失去<span style="color:#9b59b6;font-weight:600">晓</span>，获得<span style="color:#9b59b6;font-weight:600">清</span>。有<span style="color:#9b59b6;font-weight:600">清</span>则失去<span style="color:#9b59b6;font-weight:600">清</span>，获得<span style="color:#9b59b6;font-weight:600">晓</span>。

## 小贴士

- **触发时机**：打出时对自身施加，睡眠概率 <span style="color:#3aa675;font-weight:600">30</span>%。该能力在每回合开始时使<span style="color:#9b59b6;font-weight:600">晓</span>与<span style="color:#9b59b6;font-weight:600">清</span>交替。
- **晓**：打出攻击牌时，有层数%概率令随机对手[<span style="color:#d44;font-weight:600">睡眠</span>](/powers/asleep_power.md)<span style="color:#3aa675;font-weight:600">2</span> 回合。回合结束时移除。
- **清**：打出非攻击牌时，有层数%概率令随机对手[<span style="color:#d44;font-weight:600">睡眠</span>](/powers/asleep_power.md)<span style="color:#3aa675;font-weight:600">2</span> 回合。回合结束时移除。
- **保留**：此牌带有[<span style="color:#d4a017;font-weight:600">保留</span>](/mechanics/retain.md)关键词。
- **升级效果**：睡眠概率从 <span style="color:#3aa675;font-weight:600">30</span>% 提升至 <span style="color:#3aa675;font-weight:600">45</span>%。

## 源码

- `SeerTwinFlower.cs`
