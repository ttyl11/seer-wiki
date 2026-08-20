# 辰

<img src="/images/cards/morning_star.png" alt="辰" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 状态牌
- **最大PP**: 1
- **能量消耗**: 不可打出
- **类型**: 状态
- **稀有度**: 状态
- **目标**: 无
- **关键词**: [不能被打出](/mechanics/unplayable.md)
- **可升级**: 否

### 数值参数

| 参数 | 数值 |
|---|---|
| 辉星获取 | 2 |
| 能量获取 | 1 |
| 生成储君卡数 | 1 |
| PP | 1 |
| 最大PP | 1 |

## 描述

抽到此牌时，获得<span style="color:#3aa675;font-weight:600">2</span>点[<span style="color:#d4a017;font-weight:600">辉星</span>](/mechanics/star.md)和<span style="color:#3aa675;font-weight:600">1</span>点[<span style="color:#d4a017;font-weight:600">能量</span>](/mechanics/energy.md)，并将<span style="color:#3aa675;font-weight:600">1</span>张储君的牌加入[<span style="color:#d4a017;font-weight:600">手牌</span>](/mechanics/hand.md)中。

## 小贴士

- **"温"体系的最终兑付**：辰由[温](/cards/status/warmth.md)在**牌堆洗牌时**转化而来（[余温之辰](/cards/event/residual_warmth_star.md)的效果）——温在消耗堆里躺着，一旦抽牌堆见底触发洗牌，全部温原地变辰并移入抽牌堆。抽到辰 = 白拿 <span style="color:#3aa675;font-weight:600">2</span> 辉星 + <span style="color:#3aa675;font-weight:600">1</span> 能量 + <span style="color:#3aa675;font-weight:600">1</span> 张储君卡，是这套延迟引擎的"利息结算日"。
- **储君卡是原版储君角色卡池的牌**：随机生成一张**原版储君（Regent）卡池**中你已解锁的卡（88 张池子：铸剑、星击、格挡、抽牌各类都有）加入手牌顶。生成的卡**本场战斗有效**，战斗结束消失。
- **对非储君角色一样能用**：seer 角色拿到储君卡池的牌可以直接打出——相当于每次抽到辰都"临时借调"一张原版角色的卡来用，池子深、随机面广，攻防功能牌都可能来。
- **三重收益的即时性**：辉星和能量**立刻到账**，储君卡**当回合就在手里**可打。抽到辰的那回合实际多出 1 点操作空间——配合 1 能量白送，等于储君卡自带减费。
- **辰自己不可打出**：它只是触发器，抽到即结算，随后作为普通状态牌留在手里（回合结束正常弃入弃牌堆，不占额外代价）。**弃牌堆里的辰不会再变成温**——它不参与循环，抽一次收益一次。
- **与辉星体系联动**：辉星是储君/星辰体系的资源（[献天予星辰](/cards/colorless/give_heaven_stars.md)等卡消耗辉星生效）。多张辰连抽时辉星快速囤积，为辉星消耗卡供弹。
- **不可战斗中生成**：辰只由温转化而来，不会被其它效果随机生成。

## 相关卡牌

- [温](/cards/status/warmth.md)（洗牌时转化为辰的源头）
- [余温之辰](/cards/event/residual_warmth_star.md)（整个温→辰循环的引擎卡）

## 相关机制

- [辉星](/mechanics/star.md)（抽到时获得 2 点）
- [能量](/mechanics/energy.md)（抽到时获得 1 点）
- [手牌](/mechanics/hand.md)（生成的储君卡加入手牌顶）

## 源码

- `SeerMorningStar.cs`
- `SeerResidualWarmthStarAutoPlayPower.cs`（温→辰的洗牌转化逻辑）
