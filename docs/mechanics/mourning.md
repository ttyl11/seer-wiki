# 悼

> mod 关键词

## 基本信息

- **类型**: mod 卡牌关键词
- **本地化标题**: 悼

## 描述

打出后，下个回合由瓦库代替你行动。

## 详细机制

### 1. 触发时机

在卡牌打出后触发，对玩家自身施加悼能力（1 层，不可见减益）。

### 2. 瓦库代替行动

下回合玩家进入"自动预打出阶段"的后期时触发瓦库行动：

- 仅悼能力的拥有者触发
- 循环打出最多 99 张牌，每张牌：
  - 若战斗已结束或玩家已准备结束回合，则停止
  - 从手牌中查找第一张可打出的卡牌
  - 根据卡牌的目标类型选择目标：
    - 敌方目标类：选第一个可命中的敌人
    - 友方目标类：随机选一个非自身的玩家阵营生物（多人模式下两端结果一致）
    - 自身目标类：选玩家自身
    - 其他：无目标
  - 自动打出该牌
- 循环结束后移除悼能力

### 3. 与 PP 配合

- 悼关键词卡牌自身打出时仍消耗 PP
- 瓦库代替行动时打出的卡牌不消耗玩家 PP

## 相关卡牌

- [岳·命寻星叹](/cards/event/yue_fate_star_sigh.md)（PP 1/1，下个回合所有牌会多打出一次）
- [鲲·千里击涛](/cards/character/kun_thousand_miles_wave.md)（PP 5/5，伤害 36，触发悼）
- [鹏·万里遨游](/cards/character/peng_thousand_miles_soar.md)（衍生卡，触发悼）
- [千里击涛](/cards/colorless/thousand_miles_wave.md)（带悼，强制结束回合）

## 源码

- `SeerKeywords.cs`
- `SeerKeywordEffectManager.cs`
- `SeerMourningPower.cs`（瓦库代替行动逻辑）
- `SeerKeywordCardModel.cs`（基类）
- `card_keywords.json`（本地化）
