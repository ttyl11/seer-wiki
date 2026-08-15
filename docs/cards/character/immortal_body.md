# 不死之身

<img src="/images/cards/immortal_body.png" alt="不死之身" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 1
- **能量消耗**: 3
- **类型**: 能力
- **稀有度**: 罕见
- **目标**: 自身
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 缓冲 | 6 | 8 |
| PP | 1 | 1 |
| 最大PP | 1 | 1 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 获得<span style="color:#3aa675;font-weight:600">6</span>层[<span style="color:#d4a017;font-weight:600">缓冲</span>](/powers/buffer_power.md)。若自身在本场战斗中受到伤害，则直接死亡。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 获得<span style="color:#3aa675;font-weight:600">8</span>层[<span style="color:#d4a017;font-weight:600">缓冲</span>](/powers/buffer_power.md)。若自身在本场战斗中受到伤害，则直接死亡。

## 小贴士

- **死亡陷阱**：打出后获得"不死之身"能力——**一旦受到攻击伤害且有任意 1 点伤害穿过格挡，立即死亡**。[缓冲](/powers/buffer_power.md)是唯一的保命手段。
- **只有攻击伤害触发**：非攻击伤害（烧伤自伤、固定伤害等）**不会**触发死亡。只有敌人的攻击伤害穿过格挡后才致命。
- **缓冲每层抵消一次完整伤害**：每层[缓冲](/powers/buffer_power.md)抵消一整次生命值损失（无论伤害多大），消耗 1 层。6 层缓冲 = 抵消 6 次攻击伤害。只要缓冲层 ≥ 受到攻击次数，就不会触发死亡。
- **升级多 2 层保险**：缓冲 6 → 8，多抵消 2 次攻击。但一旦缓冲耗尽，下一次攻击（哪怕只有 1 点穿过格挡）就会立即死亡。
- **3 费高风险**：3 费换 6 缓冲 + 死亡陷阱。缓冲每层抵消一次完整攻击，6 层 = 6 次免伤，但耗尽即死，适合配合控场手段（冰封/硬控）减少敌人攻击次数。

## 相关能力

- [缓冲](/powers/buffer_power.md)（原版增益，每层抵消下一次生命值损失）
- 不死之身（mod 能力，受到攻击伤害且有伤害穿过格挡时直接死亡）

## 源码

- `SeerImmortalBody.cs`
- `SeerImmortalBodyPower.cs`
