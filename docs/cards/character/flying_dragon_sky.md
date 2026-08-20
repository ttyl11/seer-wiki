# 飞龙在天

<img src="/images/cards/flying_dragon_sky.png" alt="飞龙在天" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 10
- **能量消耗**: 1
- **类型**: 技能
- **稀有度**: 普通
- **目标**: 无
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 格挡 | 7 | 11 |
| 速度（敌人） | -1 | -1 |
| PP | 10 | 10 |
| 最大PP | 10 | 10 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">10</span>/<span style="color:#3aa675;font-weight:600">10</span> 获得<span style="color:#3aa675;font-weight:600">7</span>点<span style="color:#d4a017;font-weight:600">格挡</span>。令所有对手<span style="color:#d4a017;font-weight:600">速度</span><span style="color:#3aa675;font-weight:600">-1</span>。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">10</span>/<span style="color:#3aa675;font-weight:600">10</span> 获得<span style="color:#3aa675;font-weight:600">11</span>点<span style="color:#d4a017;font-weight:600">格挡</span>。令所有对手<span style="color:#d4a017;font-weight:600">速度</span><span style="color:#3aa675;font-weight:600">-1</span>。

## 小贴士

- **格挡+减速双效**：1 费获得 7 [格挡](/mechanics/block.md)（升级后 11）+ 全体敌人[速度](/powers/speed_power.md) -1，攻防一体的群体控场技能。
- **速度机制详解**：敌人身上的负速度会使**所有玩家多抽牌**——每个敌人每有 -2 速度，玩家回合开始多抽 1 张。单次 -1 由于整数除法不生效，必须叠到 -2 才见效；且[速度](/powers/speed_power.md)没有回合衰减，减下去就是**整场永久**——是少数能"投资攒抽牌"的手段。
- **PP 10 的成长曲线**：单场最多打 10 次，每次全体敌人 -1 速度 + 7 格挡。打满后敌人速度 -10，光靠这张牌每回合白赚 5 张抽牌，同时累计 70 格挡——前期是普通防御牌，中后期滚成抽牌引擎。节奏建议：每回合顺手打 1-2 张，不用急着一回合打空。
- **双人房价值翻倍**：敌人负速度让"所有玩家"多抽，队友同步受益，是双人房里的团队型好牌。
- **格挡是保底价值**：7/11 格挡保证它在减速未成形前也不亏卡位；升级 +57% 格挡量、防御端提升明显，优先级中等。
- **配合建议**：叠加到 -2/-4/-6 的过程中抽牌逐回合变多，与大过牌、高耗能爆发牌型天然契合；部分遗物（如义龙云）也会给敌人叠负速度，可一起冲阈值。
- **性价比**：1 费换 7 格挡已是合格防御牌；速度永久叠加的后期收益完全白送，PP 10 让它从头到尾都有事做，普通卡里的一线质量。

## 相关能力

- [速度](/powers/speed_power.md)（每 2 层影响 1 张抽牌数，敌人负速度使玩家多抽）

## 相关机制

- [格挡](/mechanics/block.md)（获得 7/11 点格挡）

## 源码

- `SeerFlyingDragonSky.cs`
