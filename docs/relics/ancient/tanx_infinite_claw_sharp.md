# 渊兽剔骨钩爪

<img src="/images/relics/tanx_infinite_claw_sharp.png" alt="渊兽剔骨钩爪" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 先古

### 数值参数

| 参数 | 数值 |
|---|---|
| 卡牌数量 | 1 |
| 锋利层数 | 2 |

## 描述

拾起时，获得<span style="color:#3aa675;font-weight:600">1</span>张<span style="color:#9b59b6;font-weight:600">[狩·无限连爪](/cards/character/infinite_claw.md)</span>卡牌，并[附魔](/mechanics/enchantment.md)<span style="color:#9b59b6;font-weight:600">锋利</span><span style="color:#3aa675;font-weight:600">2</span>层。

- **本地化与实际卡名不一致**：本地化写"无限利爪"，实际获得的卡是[狩·无限连爪](/cards/character/infinite_claw.md)，以实际效果为准。
- **触发时机**：拾起遗物时一次性触发。
- **卡牌加入**：将 1 张狩·无限连爪卡牌永久加入你的牌组（不是临时战斗生成，离开战斗后仍在）。
- **附魔**：卡牌加入前附魔[锋利](/mechanics/enchantment.md) 2 层，每层 +1 伤害，保证卡牌带附魔进入牌组。
- **加入位置**：主牌堆顶部。

## 风味文字

<span style="color:#d44;font-weight:600">无限。</span>

## 小贴士

- **永久加入的 X 费多段输出核心**：拾起时将 1 张[狩·无限连爪](/cards/character/infinite_claw.md)永久加入牌组——X 费攻击，消耗全部能量对随机敌人打 7×X 次 1 点伤害（升级后 9×X 次）。生成的卡永久保留，是长期输出主力。
- **PP 5/5 是它真正恐怖的地方**：狩·无限连爪 PP 5——单场战斗最多打出 5 次，每次都是 X 费全额爆发。能量充裕的回合连打 5 次（先 0 费/低费铺场攒能量），总段数 35 段起步，配合锋利附魔每段 3 伤，单场输出轻松破百。
- **锋利 2 层 = 每段 +2 伤害**：[锋利](/mechanics/enchantment.md)每层 +1 伤害，2 层让每段从 1 伤变 3 伤——伤害直接 ×3。X=1 时从 7 伤变 21 伤，X=3 时从 21 伤变 63 伤，附魔对多段卡的放大是乘法级的。
- **随机敌人 = 群体战泼水，单体战集火**：每段独立随机选目标——多敌人时伤害均摊泼洒（清杂兵利器），单敌人（Boss 战）时全部砸在同一目标上等效集火。两种场合都不吃亏，泛用性极强。
- **X 费的能量经济学**：X 费消耗全部能量，配合能量增益（能量药水、回能遗物、[原罪禁果](/relics/ancient/vaku_seven_sins_energy.md)的打牌回能）能把 X 拉满；反过来能量紧张时 X=1 也有 21 伤保底，高低能量环境都能打。注意 X 费牌**不能被蛇行附魔**（X 费不可附），锋利已是它的最优附魔。
- **升级 +2 段/X，乘法放大**：升级后 7 段变 9 段（+29% 段数）——X 越大收益越大，X=5 时从 35 段变 45 段（+30 伤）。火堆升级优先级高，一次升级全场景生效。
- **性价比**：先古稀有度合理——1 张永久 PP 5 的 X 费多段核心 + 2 层锋利的伤害 ×3，前中后期都有稳定输出。对比同为发卡类先古的[审判战戟](/relics/ancient/tanx_alliance_three.md)（战斗生成强控）和[陨日蚀锤](/relics/ancient/tanx_dark_sky_three.md)，钩爪走的是"永久成长+自由调参"路线。

## 源码

- `SeerTanxInfiniteClawSharp.cs`
