# 命宇轮回

<img src="/images/cards/fate_reincarnation.png" alt="命宇轮回" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 5
- **能量消耗**: 1
- **类型**: 技能
- **稀有度**: 罕见
- **目标**: 无
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 选牌数 | 1 | 2 |
| 格挡 | 8 | 8 |
| PP | 5 | 5 |
| 最大PP | 5 | 5 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 选择<span style="color:#d4a017;font-weight:600">抽牌堆</span>的<span style="color:#3aa675;font-weight:600">1</span>张牌，附魔<span style="color:#d44;font-weight:600">星皇之怒</span>。获得<span style="color:#3aa675;font-weight:600">8</span>点<span style="color:#d4a017;font-weight:600">格挡</span>。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">5</span>/<span style="color:#3aa675;font-weight:600">5</span> 选择<span style="color:#d4a017;font-weight:600">抽牌堆</span>的<span style="color:#3aa675;font-weight:600">2</span>张牌，附魔<span style="color:#d44;font-weight:600">星皇之怒</span>。获得<span style="color:#3aa675;font-weight:600">8</span>点<span style="color:#d4a017;font-weight:600">格挡</span>。

## 小贴士

- **附魔+格挡双效**：1 费做两件事——从抽牌堆选 1 张牌附魔星皇之怒 + 获得 8 [格挡](/mechanics/block.md)。附魔是核心价值，格挡是附带保底。
- **星皇之怒机制**：被附魔的牌首次打出正常 1 次，首次打出后获得[重放](/mechanics/replay.md) 1——即之后每次打出都会自动重放 1 次（打出 1 次 = 效果结算 2 次）。整场战斗有效，首次打出本身不重放，从第二次开始才触发。两个资源细节：重放的那次结算**不额外消耗能量**（能量只在手动打出时付一次）；但若附魔对象是 PP 牌，重放结算**会再扣 1 PP**——效果翻倍的同时 PP 消耗也翻倍。
- **选牌目标**：优先选高价值攻击牌（如多段攻击/高伤害牌），重放后伤害翻倍。0 费牌也可选——重放不额外耗能，0 费高收益牌（如 0 费爆发/过牌）相当于免费多用一次；但注意 PP 牌的重放会多扣 1 PP。
- **抽牌堆为空/无候选**：只能从抽牌堆中**尚无附魔**的牌里选（已带其它附魔的牌不会出现在选牌界面）。抽牌堆没有可附魔的牌时，选牌步骤会被跳过，仅获得 8 格挡。打出前注意抽牌堆的牌数。
- **升级的关键性**：选牌数从 1 增至 2，两张牌同时附魔星皇之怒——整场战斗两张牌都获得重放，收益翻倍。升级优先级高。
- **配合建议**：先打出命宇轮回附魔抽牌堆中的核心攻击牌，再打出该攻击牌触发重放。注意附魔对象必须在打出命宇轮回时已在抽牌堆中——手牌和弃牌堆中的牌无法被选中。
- **性价比**：1 费换 1 张牌附魔 + 8 格挡，附魔带来的重放效果整场战斗持续生效，配合高价值攻击牌收益远超 1 费。

## 相关机制

- [格挡](/mechanics/block.md)（获得 8 点格挡）
- [重放](/mechanics/replay.md)（星皇之怒附魔首次打出后获得）

## 源码

- `SeerFateReincarnation.cs`
