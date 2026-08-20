# 能量

<img src="/images/cards/energy.png" alt="能量" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 基础牌
- **最大PP**: 5
- **能量消耗**: 1
- **类型**: 攻击
- **稀有度**: 基础
- **目标**: 敌方单体
- **可升级**: 是（1 级）
- **对应先古牌**: [神圣启示歌](/cards/ancient/divine_revelation.md)（由[起源流转](/relics/starter/origin_shift.md)转化）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 伤害 | 6 | 6 |
| 先制数值 | -1 | -1 |
| 反弹倍率 | 200 | 350 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: 5/5 造成<span style="color:#3aa675;font-weight:600">6</span>点伤害。[<span style="color:#d4a017;font-weight:600">先制</span>](/powers/first_strike_power.md)<span style="color:#3aa675;font-weight:600">-1</span>。下一次受到伤害时，反弹<span style="color:#3aa675;font-weight:600">200%</span>的伤害。

## 升级后

PP: 5/5 造成<span style="color:#3aa675;font-weight:600">6</span>点伤害。[<span style="color:#d4a017;font-weight:600">先制</span>](/powers/first_strike_power.md)<span style="color:#3aa675;font-weight:600">-1</span>。下一次受到伤害时，反弹<span style="color:#3aa675;font-weight:600">350%</span>的伤害。

## 小贴士

- **核心定位**：1 费基础攻击 + 反弹诱饵卡。6 点伤害 + 先制 -1 + 能量反弹 200%，是谱尼初始卡牌之一。兼具输出和"诱敌反击"功能——打出后敌人攻击你会被反弹重创。基础牌性价比合理，早期攻防一体的主力。
- **先制 -1（负面代价）**：自身[先制](/powers/first_strike_power.md) <span style="color:#3aa675;font-weight:600">-1</span>，即**下一张牌耗能 +1**。这是这张牌的代价——打出后下一张牌变贵了。建议配合 0 费牌或低费牌使用，避免先制 -1 影响关键牌的打出。
- **能量反弹（诱饵机制）**：下一次受到伤害时，反弹所受未格挡伤害的 <span style="color:#3aa675;font-weight:600">200%</span>（升级后 <span style="color:#3aa675;font-weight:600">350%</span>）给攻击者，造成不可[格挡](/mechanics/block.md)且非攻击伤害。触发后移除。这是一次性"反弹盾"——敌人打你 10 点，反弹 20 点（升级后 35 点）。
- **反弹策略**：反弹只对"未格挡伤害"生效。要最大化反弹，**故意不格挡**让敌人打你——但要有足够血量承受。或者配合高格挡，只让少量伤害穿透触发反弹。两种策略各有风险。
- **配合建议**：
 - **反弹流**：配合[格挡](/mechanics/block.md)相关能力，让少量伤害穿透触发反弹——既能防御又能反击。
 - 配合高血量/体力恢复（如[能量滋养](./energy_nurture.md)）可以承受伤害触发反弹，形成"挨打反击"循环。
 - 配合 0 费牌可以抵消先制 -1 的负面影响——先制 -1 让下一张牌 +1 费，0 费牌变成 1 费，影响可控。
 - 不适合纯爆发流——反弹需要"挨打"才能触发，爆发流不打反弹就浪费了。
- **升级的关键性**：反弹倍率从 <span style="color:#3aa675;font-weight:600">200%</span> 提升至 <span style="color:#3aa675;font-weight:600">350%</span>（+150%）。升级提升显著——反弹量提升 75%，10 点伤害反弹从 20 提升到 35。升级优先级中等，基础牌升级通常留给后期。
- **性价比**：1 费 6 点伤害 + 反弹 200%，基础牌性价比合理。先制 -1 是代价，但反弹收益可以弥补。适合反弹流和续航流体系，纯爆发流可能不够直接。

## 相关能力

- [先制](/powers/first_strike_power.md)（自身施加 -1 层先制）
- [能量反弹](/powers/energy_reflect_power.md)（下一次受到伤害时反弹）

## 源码

- `SeerEnergy.cs`
