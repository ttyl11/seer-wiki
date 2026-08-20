# 魔王咒怨

> **归属**：玩家可施加
> **施加来源**：玩家获得——[绝灭·万物哀鸣](/cards/character/extinction.md)（卡牌）、[湮灭之主·咤克斯](/relics/event/annihilation_lord_zhakes.md)（遗物）

<img src="/images/powers/demon_king_curse_power.png" alt="魔王咒怨" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益（Buff）
- **叠加方式**: 递减（计数型）
- **可见**: 是
- **允许负值**: 是

### 数值参数

| 参数 | 数值 |
|---|---|
| 伤害加成 | 5（每层） |
| 伤害减免 | 5（每层，上限 95） |
| 即死概率 | 3（每层） |
| 免疫阈值 | 10 |
| PP | 5 |
| 最大PP | 5 |

## 描述

每层提供攻击伤害 +<span style="color:#3aa675;font-weight:600">5</span>%、受到伤害减免 <span style="color:#3aa675;font-weight:600">5</span>%（上限 <span style="color:#3aa675;font-weight:600">95</span>%）、攻击技能 <span style="color:#3aa675;font-weight:600">3</span>% 概率秒杀对面（秒杀传染同 HP 敌人）。达到 <span style="color:#3aa675;font-weight:600">10</span> 层时自身免疫[异常状态](/mechanics/abnormal-status.md)。

## 详细机制

- **伤害加成**：仅拥有者造成的攻击伤害享受加成。每层增加 <span style="color:#3aa675;font-weight:600">5</span>% 攻击伤害（如 <span style="color:#3aa675;font-weight:600">10</span> 层 = <span style="color:#3aa675;font-weight:600">1.5</span> 倍伤害）。
- **伤害减免**：仅拥有者受到的来自敌方的伤害享受减免。每层减少 <span style="color:#3aa675;font-weight:600">5</span>% 受到的伤害，上限 <span style="color:#3aa675;font-weight:600">95</span>% 减免。
- **即死概率**：拥有者造成攻击伤害时，通过随机数判定，每层 <span style="color:#3aa675;font-weight:600">3</span>% 概率即死（如 <span style="color:#3aa675;font-weight:600">10</span> 层 = <span style="color:#3aa675;font-weight:600">30</span>% 概率）。
  - 即死效果会击杀所有与目标生命值相同的敌方生物。
- **异常状态免疫**：当层数 ≥ <span style="color:#3aa675;font-weight:600">10</span> 时，通过拦截受到的状态施加来免疫异常状态，将施加层数改为 <span style="color:#3aa675;font-weight:600">0</span>。
- **层数联动**：施加和层数变化时更新各项数值加成。

## 相关卡牌

- [绝灭·万物哀鸣](/cards/character/extinction.md)：获得等量于当前PP的魔王咒怨，若已有魔王咒怨则造成大量伤害

## 源码

- `SeerDemonKingCursePower.cs`
