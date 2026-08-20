# 白色龙鳞

> **归属**：玩家可施加
> **施加来源**：玩家获得——[武心婵](/relics/legendary/wu_xin_chan.md)（遗物）

<img src="/images/powers/white_dragon_scale_power.png" alt="白色龙鳞" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **类型**: 增益
- **来源**: [武心婵](/relics/legendary/wu_xin_chan.md)
- **叠加方式**: 递减
- **可见**: 是

## 描述

每层可免疫一次攻击伤害、<span style="color:#d4a017;font-weight:600">固定伤害</span>、<span style="color:#d44;font-weight:600">异常状态</span>或属性下降。被免疫攻击后获得<span style="color:#3aa675;font-weight:600">100</span>%伤害提升；被免疫<span style="color:#d4a017;font-weight:600">固定伤害</span>后反弹<span style="color:#3aa675;font-weight:600">25</span>点<span style="color:#d4a017;font-weight:600">固定伤害</span>；被免疫<span style="color:#d44;font-weight:600">异常</span>后随机给对手<span style="color:#3aa675;font-weight:600">3</span>种<span style="color:#d44;font-weight:600">异常</span>；被免疫属性下降后对手<span style="color:#d4a017;font-weight:600">力量</span><span style="color:#d4a017;font-weight:600">敏捷</span><span style="color:#d4a017;font-weight:600">命中</span><span style="color:#d4a017;font-weight:600">速度</span>-<span style="color:#3aa675;font-weight:600">2</span>。在你的回合结束时减少1层。消失时消除对手所有<span style="color:#d4a017;font-weight:600">buff</span>。

## 数值

| 参数 | 数值 |
|---|---|
| 默认层数 | 1 |
| 免疫攻击→伤害提升 | 100% |
| 免疫固定伤害→反弹 | 25 点固定伤害（全体对手） |
| 免疫异常→反制 | 3 种随机异常（全体对手） |
| 免疫属性下降→反制 | 力量/敏捷/命中/防御/速度 -2（全体对手） |
| 回合结束消耗 | 1 层 |

## 小贴士

- **每层四类免疫**：每层每回合可分别免疫一次攻击伤害、[固定伤害](/powers/fixed_damage_power.md)、异常状态、属性下降，四类独立计数。
- **消失清 buff**：层数归零消失时消除所有对手的 buff 作为收尾，即使层数耗尽也有反击价值。

## 源码

- `SeerWhiteDragonScalePower.cs`
