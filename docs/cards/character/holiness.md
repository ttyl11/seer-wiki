# 圣洁

<img src="/images/cards/holiness.png" alt="圣洁" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 1
- **能量消耗**: 2
- **类型**: 技能
- **稀有度**: 基础
- **目标**: 自身
- **获得格挡**: 是
- **可升级**: 是（1 级）
- **对应先古牌**: [璨灵圣光](/cards/ancient/radiant_holy_light.md)（由[起源流转](/relics/starter/origin_shift.md)转化）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 格挡 | 6 | 6 |
| 能量消耗 | 2 | 1 |
| PP | 1 | 1 |
| 最大PP | 1 | 1 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 获得<span style="color:#3aa675;font-weight:600">6</span>点[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)。立即解除自身所有减益。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">1</span>/<span style="color:#3aa675;font-weight:600">1</span> 获得<span style="color:#3aa675;font-weight:600">6</span>点[<span style="color:#d4a017;font-weight:600">格挡</span>](/mechanics/block.md)。立即解除自身所有减益。

## 小贴士

- **清减益是核心价值**：6 点格挡只是附带，真正的价值在于**一次性清除自身所有减益类型（Debuff）能力**——虚弱、易伤、烧伤、中毒、冰封、冻伤、疲惫、固伤等全部移除。被叠了多重减益时一张翻盘。
- **亮点：能清固定伤害**：[固定伤害](/powers/fixed_damage_power.md)在源码中属于减益类型——敌人给你挂的固伤层数（本该下回合无视格挡掉血）可以被圣洁直接洗掉，是针对固伤体系的应急反制。
- **只清减益不清增益**：只移除减益类能力，增益（力量、格挡强化等）与非类型标记（形态、元素等）不受影响。可以放心在自己堆满增益时使用。
- **升级只降费**：格挡始终是 6，升级仅把费用从 2 降到 1。1 费清所有减益 + 6 格挡，灵活性和性价比都显著提升。PP 1 意味着单场只有一次净化机会，留给减益最重的时刻。
- **性价比**：2 费换 6 格挡+清所有减益，基础牌定价合理。对比原版"净化"类卡，这里多 6 点格挡作为附带收益。

## 源码

- `SeerHoliness.cs`
