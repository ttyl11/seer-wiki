# 焚心劫灰

<img src="/images/relics/neow_nirvana_fate.png" alt="焚心劫灰" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 先古

### 数值参数

| 参数 | 数值 |
|---|---|
| 对子数量 | 10 |
| 卡牌奖励数量 | 1 |

## 描述

拾起时，将<span style="color:#3aa675;font-weight:600">10</span>张<span style="color:#d4a017;font-weight:600">打击</span>和<span style="color:#3aa675;font-weight:600">10</span>张<span style="color:#d4a017;font-weight:600">防御</span>加入牌组，所有<span style="color:#d4a017;font-weight:600">打击</span>和<span style="color:#d4a017;font-weight:600">防御</span>牌获得<span style="color:#9b59b6;font-weight:600">[寂灭](/mechanics/nirvana.md)</span>关键词。第一层的战斗奖励全都只有<span style="color:#3aa675;font-weight:600">1</span>张牌可选。

- **卡牌来源**：从角色卡池取初始稀有度的打击/防御模板，循环 10 次各生成 1 张打击和 1 张防御。
- **寂灭标记**：新生成的和牌组中已有的打击/防御牌均附加 [寂灭](/mechanics/nirvana.md) 关键词。
- **奖励削减**：在第一层时将战斗卡牌奖励裁剪到只剩 1 张可选。

## 风味文字

<span style="color:#d44;font-weight:600">燃烧殆尽。</span>

## 小贴士

- **20 张寂灭打击/防御灌满牌组**：拾起时塞 10 张打击 + 10 张防御（共 20 张）进牌组，全部带 [寂灭](/mechanics/nirvana.md) 关键词。开局牌组瞬间膨胀到 20+ 张基础牌，前期资源充沛。
- **寂灭是消耗性关键词**：寂灭卡打出后，本场战斗结束从牌组移除（详见 [寂灭机制](/mechanics/nirvana.md)）。每打出一张就少一张，相当于"用一张少一张"的消耗性资源，不能无脑刷。
- **第一层卡牌奖励只剩 1 张**：第一层所有战斗的卡牌奖励都裁剪到只剩 1 张可选，等于第一层几乎无法通过战斗补强牌组。第二层及以后恢复正常奖励数量。
- **核心矛盾：前期资源充沛 vs 长期消耗**：20 张寂灭卡能轻松应对第一层，但每打一张少一张，加上第一层奖励削减难以补强，需要在寂灭卡耗尽前通过商店、事件等途径获得核心卡，否则后期牌组会被掏空。
- **寂灭标记持久化**：存档/读档后寂灭标记会通过进入房间、进入战斗等时机自动重新应用，不用担心读档后丢失。
- **性价比**：先古稀有度合理——20 张寂灭卡换第一层奖励削减，前期强度拉满但需要规划长期。

## 源码

- `SeerNeowNirvanaFate.cs`
