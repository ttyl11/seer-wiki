# 佩尔之舌

<img src="/images/relics/pael_rare_relic.png" alt="佩尔之舌" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 先古

### 数值参数

| 参数 | 数值 |
|---|---|
| 选择卡牌数 | 4 |

## 描述

拾起时，依次选择<span style="color:#3aa675;font-weight:600">4</span>张牌，分别附加<span style="color:#d4a017;font-weight:600">[邪恶](/mechanics/evil.md)</span>、<span style="color:#d4a017;font-weight:600">[寂灭](/mechanics/nirvana.md)</span>、<span style="color:#d4a017;font-weight:600">[毁灭](/mechanics/destruction.md)</span>、<span style="color:#d4a017;font-weight:600">[炼狱](/mechanics/purgatory.md)</span>关键词。

- **关键词顺序**：4 次选牌按邪恶、寂灭、毁灭、炼狱的固定顺序依次附加。
- **持久化**：关键词跨战斗、跨存档都会保留；进入战斗/房间时若发现丢失会自动补回。

## 风味文字

<span style="color:#d44;font-weight:600">关键词。</span>

## 小贴士

- **4 关键词一次选满**：依次选 4 张牌，分别永久附加[邪恶](/mechanics/evil.md)、[寂灭](/mechanics/nirvana.md)、[毁灭](/mechanics/destruction.md)、[炼狱](/mechanics/purgatory.md)关键词——4 张牌从此变成带特殊机制的强化卡，整局游戏都受益。
- **4 关键词互补的设计**：邪恶=战斗后复制进牌组（增牌）、寂灭=战斗后从牌组移除（一次性换强效）、毁灭=打出时清空消耗堆、炼狱=伤害翻倍但自伤异常——增牌/减牌/消耗/核弹四种方向，恰好覆盖牌组构筑的四个维度。
- **邪恶适合低费高频牌**：每场战斗结束后复制一张进牌组，这张牌会越打越多。优先选低费、能反复打出的核心卡，收益雪球式增长。
- **寂灭是一次性献祭**：打出后这张牌会从牌组永久消失，适合选一次性强力终结牌，用完即弃换一次核弹效果，不适合选需要反复打的核心卡。
- **炼狱是核弹级但有代价**：伤害直接翻倍，但每次打出都自伤随机异常 5 回合——选高伤单段攻击牌赚翻倍收益，选多段小伤害牌异常自伤叠加会更危险。
- **关键词防丢失有兜底**：进入战斗/进入房间时会重新检查并补回关键词，战斗中克隆出来的牌也能正确继承，跨存档读档不会丢失。
- **性价比**：先古稀有度合理——4 张牌永久强化为带特殊机制的卡，强度看选哪 4 张牌搭配。

## 源码

- `SeerPaelRareRelic.cs`
