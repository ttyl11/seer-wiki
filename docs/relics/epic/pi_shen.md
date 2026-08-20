# 皮神

<img src="/images/relics/pi_shen.png" alt="皮神" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 史诗（自定义稀有度）

### 数值参数

| 参数 | 数值 |
|---|---|
| 神羽上限 | 7 |
| 生命阈值 | 60（%） |
| 回复比例 | 97（%） |

## 描述

①整局游戏中拥有<span style="color:#3aa675;font-weight:600">7</span>片<span style="color:#9b59b6;font-weight:600">[神羽](/powers/divine_feather_power.md)</span>。每回合结束时，若自身当前生命低于最大生命的<span style="color:#3aa675;font-weight:600">60</span>%，则消耗1片神羽将自身生命回复至<span style="color:#3aa675;font-weight:600">97</span>%。②在Boss战中，自身免疫<span style="color:#d44;font-weight:600">[异常状态](/mechanics/abnormal-status.md)</span>且使用牌不消耗<span style="color:#d4a017;font-weight:600">[PP](/mechanics/pp-system.md)</span>。

- **神翔回复**：自身回合结束时若当前生命低于最大生命 60% 且仍有神羽，消耗 1 片并回复至 97% 最大生命。
- **Boss 战增益**：Boss 战中使用牌不消耗 PP（[Boss PP 免耗](/powers/boss_pp_free_power.md)）。
- **异常免疫**：Boss 战中将所有异常状态类型能力的施加量归零。

## 风味文字

<span style="color:#d44;font-weight:600">燃尽归虚无。</span>

## 小贴士

- **整局 7 片神羽的应急回血**：**自身回合结束时**（不是受击瞬间）若生命低于 60%，消耗 1 片神羽直接回满到 97%。注意时机——血量在敌方回合被打穿 60%，要撑过你的整个回合（出牌、操作期间都是危险血线）到回合结束才回血，别把"下回合自动奶"误当成即时保险。7 片是整局共享的，用完就没了，得省着用。
- **Boss 战双buff：异常免疫 + PP 免耗**：Boss 战中免疫所有异常状态（覆盖全部 24 种，拦截施加量归零），且打牌不消耗 PP——PP 牌"单场可打出次数"的限制在 Boss 战被完全解除，多段打出的 PP 牌等于无限白嫖。拿到本遗物后路线可以激进些：普通战斗靠 PP 节约，Boss 战放开手脚无限连打。
- **神羽触发门槛 60%**：生命得掉到 60% 以下才触发回血，60% 以上不触发。意味着小擦伤不会浪费神羽，只有真受伤了才用。
- **回血到 97% 不是回 97%**：消耗 1 片神羽把生命拉到最大生命的 97%，不是回复 97% 的生命。残血时一片神羽就能从濒死拉回满血。
- **神羽是整局资源**：7 片神羽跨战斗共享，不是每场战斗重置。普通战斗尽量别触发（控血在 60% 以上），留给 Boss 战保命。
- **性价比**：史诗稀有度合理——Boss 战双buff + 7 片应急回血，保命和爆发兼顾。

## 源码

- `SeerPiShen.cs`
