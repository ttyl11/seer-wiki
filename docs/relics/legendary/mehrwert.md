# 梅赫维特

<img src="/images/relics/mehrwert.png" alt="梅赫维特" style="max-width:300px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15)" />

## 基本信息

- **分类**: 非塔罗遗物
- **稀有度**: 传说（自定义稀有度）

### 数值参数

| 参数 | 数值 |
|---|---|
| 朝曦触发所需出牌数 | >5（第 6 张起） |
| 炽耀每句唱词攻击伤害减免（%） | 10 |
| 炽耀达标唱词种类数 | 4 |
| 永沐曝施加层数 | 1 |

## 描述

①**永沐**：敌人为自身附加[异常状态](/mechanics/abnormal-status.md)时，为对手施加<span style="color:#9b59b6;font-weight:600">[曝](/powers/expose_power.md)</span>。

②**朝曦**：第一回合若自身打出了大于五张牌，额外开启一回合。

③**眷颂**：每回合结束后，若有唱词未获得，随机获得一句未获得的唱词。

④**炽耀**：自身每有一句唱词，受到攻击伤害 -<span style="color:#3aa675;font-weight:600">10</span>%。若自身达到了 <span style="color:#3aa675;font-weight:600">4</span> 种唱词，则立即获得卡牌<span style="color:#d4a017;font-weight:600">破黯穿穹</span>。

⑤**余晖**：战斗结束时，若有敌怪被施加过<span style="color:#9b59b6;font-weight:600">[曝](/powers/expose_power.md)</span>，你可以移除牌组中一张卡牌。

- **永沐**：敌人为自身施加异常状态时（不阻断），对该敌人施加 <span style="color:#3aa675;font-weight:600">1</span> 层[曝](/powers/expose_power.md)。
- **朝曦**：第 <span style="color:#3aa675;font-weight:600">1</span> 回合打出超过 <span style="color:#3aa675;font-weight:600">5</span> 张牌（第 6 张起）且本场未触发过，获得 1 个额外回合。
- **眷颂**：回合结束时若未集齐 4 种唱词，随机获得 1 种未拥有的唱词（[拉](/powers/chant_ra_power.md)、[莎木斯](/powers/chant_shams_power.md)、[舍麦什](/powers/chant_shamash_power.md)、[霍尔希德](/powers/chant_khorshid_power.md)）。
- **炽耀**：每有 1 句唱词，受到攻击伤害 -<span style="color:#3aa675;font-weight:600">10</span>%；集齐 <span style="color:#3aa675;font-weight:600">4</span> 种唱词时获得"破黯穿穹"加入手牌顶部（每场仅一次）。
- **余晖**：战斗胜利时若曾对敌人施加过[曝](/powers/expose_power.md)，可移除牌组中 1 张卡牌。

## 风味文字

<span style="color:#d44;font-weight:600">梅赫维特。</span>

## 小贴士

- **五效联动的唱词体系**：永沐反击[曝](/powers/expose_power.md)→余晖移除牌；眷颂自动集唱词→炽耀减伤+破黯穿穹。五个效果围绕"唱词"和"曝"两个核心资源联动，越打越强。
- **唱词自动积累，4 回合集齐**：每回合结束自动获得 1 种未拥有的唱词，最多 4 回合集齐全部 4 种。4 种唱词各自有不同效果：[拉](/powers/chant_ra_power.md)（掉血时减对手先制）、[莎木斯](/powers/chant_shams_power.md)（对手有异常时全属性+1）、[舍麦什](/powers/chant_shamash_power.md)（获得增益时回血）、[霍尔希德](/powers/chant_khorshid_power.md)（造成伤害时回 PP，非最高 HP 时触发）。
- **唱词越多越坦**：每句唱词使受到的攻击伤害 -10%。1 句 -10%，2 句 -20%，3 句 -30%，4 句 -40%。随战斗进行自动变坦，无需手动操作。
- **集齐 4 种唱词获得破黯穿穹**：集齐 4 种唱词时立即获得"破黯穿穹"卡牌加入手牌顶部（每场仅一次）。破黯穿穹消耗所有唱词，是爆发性输出牌——集齐唱词后打出来，既能输出又能重置唱词重新积累。
- **永沐反击曝，克制异常流敌人**：敌人给你施加异常状态时，反击给该敌人 1 层[曝](/powers/expose_power.md)。面对频繁上异常的敌人时，每次上异常都会被反击，形成"你上异常我就上曝"的互换。
- **朝曦额外回合，配合低费牌组**：第 1 回合打出超过 5 张牌（第 6 张起）获得额外回合。配合低费/0 费牌组在第 1 回合打出 6 张以上，相当于多一回合行动——额外的铺场、输出或叠甲机会。
- **余晖免费移除牌**：战斗胜利时若曾对敌人施加过[曝](/powers/expose_power.md)（永沐反击即可触发），可移除牌组中 1 张牌。只要敌人给你施加过异常，就能免费移除一张牌——长线收益极高的牌组净化手段。
- **曝是核心联动资源**：永沐反击曝→余晖移除牌，形成"敌人上异常→反击曝→战斗结束移除牌"的完整链条。曝既是反击手段，也是移除牌的触发条件。

## 源码

- `SeerMehrwert.cs`
