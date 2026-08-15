# 百鬼夜行

<img src="/images/cards/hundred_ghosts.png" alt="百鬼夜行" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 角色（圣灵谱尼）牌
- **最大PP**: 10
- **能量消耗**: X
- **类型**: 攻击
- **稀有度**: 普通
- **目标**: 敌方单体
- **可升级**: 是（1 级）

### 数值参数

| 参数 | 数值 | 升级后 |
|---|---|---|
| 数量扣减 | 1 | 0 |
| PP | 10 | 10 |
| 最大PP | 10 | 10 |

## 描述

PP: <span style="color:#3aa675;font-weight:600">10</span>/<span style="color:#3aa675;font-weight:600">10</span> 耗能X，造成X点伤害，将X-<span style="color:#3aa675;font-weight:600">1</span>张鬼火加入[<span style="color:#d4a017;font-weight:600">弃牌堆</span>](/mechanics/discard_pile.md)，将X-<span style="color:#3aa675;font-weight:600">1</span>张<span style="color:#d4a017;font-weight:600">灵魂</span>加入[<span style="color:#d4a017;font-weight:600">抽牌堆</span>](/mechanics/draw_pile.md)。

## 升级后

PP: <span style="color:#3aa675;font-weight:600">10</span>/<span style="color:#3aa675;font-weight:600">10</span> 耗能X，造成X点伤害，将X-<span style="color:#3aa675;font-weight:600">0</span>张鬼火加入[<span style="color:#d4a017;font-weight:600">弃牌堆</span>](/mechanics/discard_pile.md)，将X-<span style="color:#3aa675;font-weight:600">0</span>张<span style="color:#d4a017;font-weight:600">灵魂</span>加入[<span style="color:#d4a017;font-weight:600">抽牌堆</span>](/mechanics/draw_pile.md)。

## 小贴士

- **X 耗能弹性**：X = 打出时投入的能量值。投多少费就造成多少伤害、生成多少张衍生牌。
- **攻击伤害**：造成 X 点**攻击伤害**（受[力量](/powers/strength_power.md)/[易伤](/powers/vulnerable_power.md)影响）。伤害数值偏低（X 费换 X 伤，1:1），主要价值在衍生牌生成。
- **双衍生牌生成**：生成 X-1 张鬼火加入[弃牌堆](/mechanics/discard_pile.md) + X-1 张灵魂加入[抽牌堆](/mechanics/draw_pile.md)。鬼火和灵魂是亡灵契约师体系的衍生牌，配合相关联动卡有额外价值。
- **升级零扣减**：数量扣减从 1 降至 0，鬼火和灵魂各多生成 1 张。X=3 时从各 2 张变为各 3 张，衍生牌产出显著提升。
- **X 费偏贵但合理**：X 费换 X 伤 + 2(X-1) 张衍生牌，伤害比偏低但衍生牌填补了价值。适合亡灵契约师体系牌组，纯伤害牌组里性价比一般。

## 相关机制

- [弃牌堆](/mechanics/discard_pile.md)（鬼火加入位置）
- [抽牌堆](/mechanics/draw_pile.md)（灵魂加入位置）

## 源码

- `SeerHundredGhosts.cs`
