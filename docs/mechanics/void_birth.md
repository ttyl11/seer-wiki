# 芜生

## 基本信息

- **类型**: mod 关键词
- **本地化来源**: `card_keywords.json` 的 `SEER_KEYWORD_VOID_BIRTH`

## 描述

打出后，此牌转化为"芜"。

## 详细机制

- **转化机制**：打出带有芜生关键词的卡牌后，此牌会转化为"芜"——一张**不可打出**的状态牌（落进弃牌堆等牌堆，不会自动消失）。
- **芜的死亡判定**：当你所有牌堆里的芜累计达到 <span style="color:#3aa675;font-weight:600">5</span> 张时，你**直接死亡**。判定在抽到芜、回合结束芜在手牌、你的回合开始等多个时点反复检查。
- **堆积范围**：芜只在**本场战斗内**堆积（战斗中的牌是牌组的克隆，战斗结束后芜随战斗牌堆一起消失，原卡回牌组）。但一场战斗内芜不会自动清除——同一战斗多次打出芜生卡（如 PP5 的[绝灭·万物哀鸣](/cards/character/extinction.md)连打 5 次）会把自己堆到死亡线。
- **升级同步**：若打出的芜生卡是升级过的，转化出的芜也会是升级形态（芜本身无升级差异）。
- **与虚无配合**：[虚无](/mechanics/ethereal.md)的卡牌回合结束时被消耗，而芜生卡牌打出后转化为"芜"。两者配合时，玩家需要选择是打出（触发芜生转化）还是保留（回合末虚无消耗）。
- **升级移除**：不同卡牌升级移除的关键词不同——[绝灭·万物哀鸣](/cards/character/extinction.md)升级后移除[虚无](/mechanics/ethereal.md)（可安全保留，打出仍变芜），[纵横三千界](/cards/character/vertical_horizontal_worlds.md)升级后移除芜生（打出不再变芜）。

## 相关卡牌

- [绝灭·万物哀鸣](/cards/character/extinction.md)：带有虚无和芜生关键词，升级后移除虚无
- [天叩·千钧一发](/cards/character/heaven_strike_critical.md)：带有芜生关键词
- [正义大裁决](/cards/character/justice_judgment.md)：带有芜生关键词（PP1，单场仅 1 张芜）
- [纵横三千界](/cards/character/vertical_horizontal_worlds.md)：带有芜生关键词，升级后移除芜生

## 相关机制

- [虚无](/mechanics/ethereal.md)（常与芜生配合）

## 源码

- `SeerKeywordCardModel.cs`（基类）
- `card_keywords.json`（本地化）
