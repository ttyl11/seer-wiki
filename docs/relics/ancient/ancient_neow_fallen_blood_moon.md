# 堕血月舞

<img src="/images/relics/ancient_neow_fallen_blood_moon.png" alt="堕血月舞" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 先古

### 数值参数

| 参数 | 数值 |
|---|---|
| 最大生命百分比 | 60 |
| 当前生命百分比 | 15 |

## 描述

拾起时，最大生命值降至<span style="color:#3aa675;font-weight:600">60</span>%，当前生命值降至<span style="color:#3aa675;font-weight:600">15</span>%，获得1张<span style="color:#d4a017;font-weight:600">[月下华尔兹](/cards/character/moonlight_waltz.md)</span>（附<span style="color:#9b59b6;font-weight:600">[王室印章](/enchantments/royally_approved.md)</span>附魔）。

- **基准为原始最大生命**：最大生命百分比与当前生命百分比均按削减前的原始最大生命计算，再修正。
- **下限保护**：目标最大生命与当前生命至少为 1。
- **附魔加入**：月下华尔兹附加王室印章附魔后加入主牌组。

## 风味文字

<span style="color:#d44;font-weight:600">鲜血是代价。</span>

## 小贴士

- **巨大的生命代价**：最大生命砍到 60%，当前生命砍到 15%。100 血的角色变成 60 最大生命、15 当前生命——极度危险，随时可能被打死。
- **换取月下华尔兹**：代价换来 1 张[月下华尔兹](/cards/character/moonlight_waltz.md)（附[王室印章](/enchantments/royally_approved.md)附魔）。月下华尔兹是强力卡牌，王室印章附魔进一步提升其价值。
- **一次性触发**：效果只在拾起时执行，之后遗物本身无战斗内效果。所有收益就是那张月下华尔兹。
- **适合高血量角色**：生命基数越大，削减后的绝对值越高。200 血的角色变成 120 最大生命、30 当前生命，比 100 血的角色生存力强得多。
- **性价比**：先古稀有度——用 40% 最大生命和 85% 当前生命换 1 张附魔月下华尔兹。代价极其惨烈，拾起后立刻处于濒死状态。月下华尔兹必须强到值得这个代价才行，否则就是自杀。先古的风险设计极端，拿到前要想清楚能不能活过下一场战斗。

## 源码

- `SeerAncientNeowFallenBloodMoon.cs`
